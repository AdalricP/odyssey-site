# Odyssey

A single-page brush-reveal of the Acropolis. The default view is a parchment
illustration; click-and-drag with the mouse to paint it away and uncover the
night/line-art version beneath. The parchment fades back in about a second
after you release.

## Running locally

You need Python 3 installed (it ships with macOS by default).

```bash
./run.sh
```

That starts a local server at <http://localhost:4173> and opens it in your
browser. Press `Ctrl+C` in the terminal to stop it.

To use a different port:

```bash
PORT=8080 ./run.sh
```

## Swapping the background images

Two images drive the page:

| File           | Role                                                       |
| -------------- | ---------------------------------------------------------- |
| `bg.png`       | The default layer (parchment Acropolis) — painted on top.  |
| `bg_black.png` | The layer revealed by the brush (dark/line-art Acropolis). |

To change either, just **replace the file in the project root** with a new
PNG of the same name. No code edits needed.

Tips for swapping:

- Use PNGs that match each other in **aspect ratio and composition** so the
  brush reveal feels continuous (the night image should align with the
  parchment one).
- The page cover-fits the images, so any resolution works — `1600×900` or
  similar landscape ratios look best on desktop.
- If your replacement parchment has dark crackled or torn edges, they may
  show along the viewport border. Crop them out, or tweak the overscan
  factor (search for `1.06` in `index.html`).

After replacing the files, just refresh the browser — no rebuild step.

## What's in here

```
index.html      The whole site (HTML + CSS + the brush canvas JS)
bg.png          Parchment layer (default)
bg_black.png    Night layer (revealed by brush)
run.sh          Starts the local server
```

Everything else (`app/`, `package.json`, `public/`, etc.) is an unused
Next.js scaffold from an earlier draft and can be ignored.
