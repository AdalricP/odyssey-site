# Odyssey

Brush-reveal Acropolis. Click-and-drag to paint away the parchment.

## Run

```bash
./run.sh
```

Opens <http://localhost:4173>. Requires Python 3. `PORT=8080 ./run.sh` to override.

## Swap the images

Replace these two files in the project root with PNGs of the same name:

- `bg.png` — default (parchment) layer
- `bg_black.png` — layer revealed by the brush

Refresh the browser. No rebuild. Use matching aspect ratios so the two layers align.
