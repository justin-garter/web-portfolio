"""Preview a site version locally with production's clean URLs.

Production (Caddy) serves /projects from projects.html via
`try_files {path} {path}.html`, so links have no extension. Opening files
straight from disk skips that and breaks the nav. This does the same
fallback on your machine.

Usage, from C:\\Projects\\Web Portfolio:
    py preview.py "Version 1.7"
Then open http://localhost:8000/   (Ctrl+C to stop)

Listens on 127.0.0.1 only, so nothing else on the network can reach it.
"""
import functools
import http.server
import os
import sys

root = sys.argv[1] if len(sys.argv) > 1 else "Version 1.7"
port = int(sys.argv[2]) if len(sys.argv) > 2 else 8000

if not os.path.isdir(root):
    sys.exit(f"No folder named {root!r} here. Run from C:\\Projects\\Web Portfolio.")


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    # Never let the browser reuse an old copy. Without this it keeps a cached
    # styles.css while loading new HTML, and the page renders half-updated.
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def send_head(self):
        target = self.translate_path(self.path)
        if not os.path.exists(target) and os.path.isfile(target + ".html"):
            self.path = self.path.split("?", 1)[0].split("#", 1)[0] + ".html"
        return super().send_head()


handler = functools.partial(CleanURLHandler, directory=root)
with http.server.ThreadingHTTPServer(("127.0.0.1", port), handler) as server:
    print(f"Serving {root} at http://localhost:{port}/  (Ctrl+C to stop)")
    server.serve_forever()
