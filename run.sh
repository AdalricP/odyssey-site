#!/usr/bin/env bash
# Odyssey — local preview
# Requires: Python 3 (preinstalled on macOS, Linux, and most Unix systems)
#
# Usage:  ./run.sh           starts a server on http://localhost:4173
#         PORT=8080 ./run.sh use a different port

set -e
cd "$(dirname "$0")"

PORT="${PORT:-4173}"
URL="http://localhost:$PORT"

if ! command -v python3 >/dev/null 2>&1; then
  echo "Error: python3 is not installed. Install it from https://www.python.org/downloads/" >&2
  exit 1
fi

echo ""
echo "  Odyssey is running at: $URL"
echo "  Press Ctrl+C to stop."
echo ""

python3 -m http.server "$PORT" >/dev/null 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT INT TERM

# give the server a moment, then open the browser
sleep 0.6
if   command -v open      >/dev/null 2>&1; then open "$URL"
elif command -v xdg-open  >/dev/null 2>&1; then xdg-open "$URL"
fi

wait "$SERVER_PID"
