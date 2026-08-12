# Rack Lab

A free-build sketchpad for pallet-rack shade structures — Sheet M-5s, a Mars Music
sheet shared with every camp.

Draw a rack structure bay by bay, hang shade and walls, add slopes and solar, and read
out the bill of materials as you build. Everything runs in the browser: one HTML file,
no dependencies, no network calls, works offline.

**Live:** https://smashinggoodtime.github.io/rack-lab/

## Running locally

Open `index.html` in any modern browser. That's it — no build step, no server.

## The kit

Real pallet-rack sizes throughout:

- **Bays** — 8′ wide × 12′ long × 12′ tall, 96 ft². Every bay is its own piece: its long
  side can run east–west or north–south, and two bays side by side can run different ways.
- **Uprights** — four 12′ × 42″ frames, two rack rows to a bay, with a **1′ aisle** between
  the rows. 42″ + 1′ + 42″ is the bay's **8′ exactly**, so the outer posts land right on the
  bay line and the deck sheet runs out flush with them — nothing over to trip on, nothing
  short to fall through, and nothing sticking out past the footprint you stake out.
- **Rows and beams** — two frames with a 12′ beam between them, on each of the frame's post
  lines, **high** at deck height and **low** near the base, is a rack *row*. Bays end to end
  along a row share the frame between them, so building tight costs less steel; bays back to
  back keep their own rows, the way rack really goes together.
- **Long span** — the SPAN tool lays a bay whose long side is **20′ instead of 12′**: same
  four uprights, further apart, with the steel beams swapped for doubled 20′ 2×6. Five sheets
  of ply, still no cuts. The sheet flags it — that's lumber doing a rack beam's job.
- **Girts** — four rows of 2×4 along every *outside* face, frame to frame, lagged outboard of
  the posts. They lace one rack row to the next and they're what the plywood screws into.
  A run is 8′, 12′ or 20′, whatever the face measures. Interior faces get none.
- **Deck kit** — 8 beams, 10 2×8 joists crossing the rows at 16″ o.c., and 3 sheets of 4×8
  ply, which floors a bay with no cuts. A 20′ bay takes 16 joists and 5 sheets.
- **Floor** — a floor at the **base** of a bay, built the way a riser is: nine cribbing pads
  on the dirt, a rim beam down each long side, and a deck kit on top of them. The deck lands
  **18″ up**, with the low rack beam set just clear of it. That's what turns a walled bay from
  dirt into a room. The DECK tool's strip picks which floor you're laying — the roof deck on
  top, or this one at grade.
- **Stairs** — 24′ of run for 12′ of rise, off any of the four faces, running down whichever
  way there's room. Two turns are yours to set. At the **head**: straight off the deck edge,
  or a quarter turn onto a framed **4′ top flat** outside the wall, so you step off the roof
  onto something level and the flights come down alongside the building instead of out into
  the street. At the **mid flat**: straight on, or a **wrap** — the lower flight leaves off
  the side of the landing, which is how a run gets around a corner or folds into a short patch
  of ground. A straight shot is two 10′ flights; every turn buys its flat out of the run, so a
  stair that turns walks 8′ a flight. Ask for a run the ground won't take and it turns the one
  that will, and says so.
- **Shade** — cloth flies 8′ over the deck, so you can stand on the roof and still be under it.
- **Railings** — 42″ on every open deck edge except the stair head. The RAILS tool switches
  them off for one structure at a time without touching the rest of the sketch.
- **Ballast** — every ground-level perimeter face gets a spare beam laid flat at grade just
  outside it, with a full 55-gal water barrel strapped to each end. The count sheet totals
  the pounds, the gallons, and the sail area they're fighting.

## Starting points

**Blank slab** is nothing. **Standard room** is 32′ × 12′ of enclosed room — four bays end to
end, walls all round, a door and a window on the long south side, a window at each end.
**Solar shed** is two bays with their back to the north wind and a 45° face of used panels
leaning off the south side. Neither one comes with stairs or railings: which face you want to
come down, and what you want held, is yours to decide — the count sheet flags both until you
do.

## The sun

The sun slider walks the real solar arc for **Bombay Beach, CA at the winter solstice** —
the shortest day, the lowest arc, the longest shadows — and the shadows move with it, so you
can see whether a shade wall shades anything at 3pm. Every panelled face is scored against an
ideal south-facing panel at 48° (latitude + 15°, what a low December sun wants), and faces
that barely see it get flagged.

## Notes

- Designs are saved to `localStorage` and encoded into the URL, so a link carries the whole
  structure with it. Links from every earlier version still decode.
- A sketchpad, not engineering. Anything over one 12′ lift, and anything on a 20′ span, wants
  real eyes on it.
