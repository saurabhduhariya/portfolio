// Turns ANSI Shadow ASCII art into SVG path data, at build time.
//
// Each character is a cell of CELL_W × CELL_H user units (0.6 ratio, like a monospace font).
//  - "█" and "▄" become filled rectangles (the "fill" layer). Horizontal runs of "█" are merged
//    into one rectangle so rows render without seams.
//  - The double box-drawing characters (═ ║ ╔ ╗ ╚ ╝) become 1-unit strokes (the "shadow" layer),
//    drawn as two parallel lines with correct inner/outer corners.
// Drawing shapes instead of using a font means no gaps between rows, no font dependency and
// perfect scaling.

export const CELL_W = 6;
export const CELL_H = 10;

// Positions of the two parallel lines inside a cell (stroke width 1, so 1 unit gap between).
const XA = 2;
const XB = 4;
const YA = 4;
const YB = 6;

export interface AsciiPaths {
  /** viewBox width/height in user units. */
  width: number;
  height: number;
  /** `d` for the filled blocks. */
  fill: string;
  /** `d` for the box-drawing strokes. */
  shadow: string;
}

type Point = readonly [number, number];

// Polylines per box-drawing character, in cell-local coordinates. 0 / W / H are the cell edges,
// so neighbouring cells join up.
function boxLines(char: string): Point[][] | undefined {
  const W = CELL_W;
  const H = CELL_H;
  switch (char) {
    case '═':
      return [
        [
          [0, YA],
          [W, YA],
        ],
        [
          [0, YB],
          [W, YB],
        ],
      ];
    case '║':
      return [
        [
          [XA, 0],
          [XA, H],
        ],
        [
          [XB, 0],
          [XB, H],
        ],
      ];
    case '╗': // left + down
      return [
        [
          [0, YA],
          [XB, YA],
          [XB, H],
        ],
        [
          [0, YB],
          [XA, YB],
          [XA, H],
        ],
      ];
    case '╔': // right + down
      return [
        [
          [W, YA],
          [XA, YA],
          [XA, H],
        ],
        [
          [W, YB],
          [XB, YB],
          [XB, H],
        ],
      ];
    case '╝': // left + up
      return [
        [
          [0, YB],
          [XB, YB],
          [XB, 0],
        ],
        [
          [0, YA],
          [XA, YA],
          [XA, 0],
        ],
      ];
    case '╚': // right + up
      return [
        [
          [W, YB],
          [XA, YB],
          [XA, 0],
        ],
        [
          [W, YA],
          [XB, YA],
          [XB, 0],
        ],
      ];
    default:
      return undefined;
  }
}

const num = (n: number): string => String(Math.round(n * 100) / 100);

export function asciiToPaths(rows: readonly string[]): AsciiPaths {
  const grid = rows.map((row) => [...row]);
  const cols = Math.max(0, ...grid.map((row) => row.length));
  const fill: string[] = [];
  const shadow: string[] = [];

  grid.forEach((cells, y) => {
    const top = y * CELL_H;
    let x = 0;
    while (x < cells.length) {
      const char = cells[x] ?? ' ';

      if (char === '█') {
        let end = x;
        while (cells[end + 1] === '█') end += 1;
        const w = (end - x + 1) * CELL_W;
        fill.push(`M${num(x * CELL_W)} ${num(top)}h${num(w)}v${CELL_H}h-${num(w)}z`);
        x = end + 1;
        continue;
      }

      if (char === '▄') {
        fill.push(
          `M${num(x * CELL_W)} ${num(top + CELL_H / 2)}h${CELL_W}v${CELL_H / 2}h-${CELL_W}z`,
        );
      } else if (char !== ' ') {
        const lines = boxLines(char);
        if (!lines) {
          throw new Error(
            `ascii banner: unsupported character "${char}" at row ${y + 1}, col ${x + 1}`,
          );
        }
        for (const line of lines) {
          shadow.push(
            line
              .map(
                ([px, py], i) => `${i === 0 ? 'M' : 'L'}${num(x * CELL_W + px)} ${num(top + py)}`,
              )
              .join(''),
          );
        }
      }
      x += 1;
    }
  });

  return {
    width: cols * CELL_W,
    height: grid.length * CELL_H,
    fill: fill.join(''),
    shadow: shadow.join(''),
  };
}
