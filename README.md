# Rack Lab

A free-build sketchpad for pallet-rack shade structures — Sheet M-5s, a Mars Music
sheet shared with every camp.

Draw a rack structure bay by bay, hang shade and walls, add slopes and solar, and read
out the bill of materials as you build. Everything runs in the browser: one HTML file,
no dependencies, no network calls, works offline.

**Live:** https://smashinggoodtime.github.io/rack-lab/

## Running locally

Open `index.html` in any modern browser. That's it — no build step, no server.

## The kit is per piece

**ROW SPREAD** and **UPRIGHT HEIGHT** are 8′, 12′ or 16′ each, and they belong to the
**piece**, not the sketch. Frame depth is also per piece: **36″, 42″ or 48″**. The two strips say what the **next** piece lands as, exactly
the way the N–S / E–W strip has always said which way it runs. Everything already on the
ground keeps what it was drawn on, so a 16′ shed can stand against a 12′ room and the
count sheet tallies both. Nothing gets re-laid and nothing gets dropped.

One rule holds it together: **a column is one height and depth.** The piece on the ground sets it
and anything stacked on it inherits it, because a stack of frames is one line of steel —
you don't splice a 12′ frame onto a 16′ one halfway up. The column next door is free to be
something else. Width is free either way: the bay above only has to land on the footprint
below.

The table below uses the legacy 42″ frame depth; aisle = row spread − twice frame depth.

| Row spread | Aisle | Ply on a 12′ bay | Worst joist span |
|---|---|---|---|
| 8′ | 1′ | 3 sheets, no cuts | 3′6″ |
| 12′ | 5′ | 5 sheets, one ripped | 5′ |
| 16′ | 9′ | 6 sheets, no cuts | 9′ |

| Upright | Girt rows | Lifts under the 36′ ceiling | Stair, one flight |
|---|---|---|---|
| 8′ | 3 | 3 | 7 steps, 6′ of ground, 34° |
| 12′ | 4 | 3 | 11 steps, 10′ of ground, 31° |
| 16′ | 5 | 2 | 15 steps, 14′ of ground, 30° |

## The kit

**Campus reference review (7 Sep 2026):** the colleague's nominal library lists
8′ × 4′, 12′ × 4′, 16′ × 3′ and 19′ × 3′ frames. Select 36″ or 48″ depth to model
those nominal depths; 42″ remains the legacy default. Height options remain 8′, 12′
and 16′; 19′ lifts are not supported. The live campus comparison remains available.
The sizes come from the [campus component studio](https://mars-campus-2026.gene-8dc.workers.dev/studio):
nominal dimensions, not a stock inventory, and nothing about capacity.

**Frame view** exposes rack and timber by hiding finish surfaces. Counts and
saved designs stay the same. Return to full view when studying shade.

Real pallet-rack sizes throughout:

- **Bays** — a bay is its row spread wide × **12′ long** × its upright height tall. Every
  bay is its own piece: its long side can run east–west or north–south, and two bays side
  by side can run different ways and be different sizes.
- **Uprights** — four frames at the selected **36″, 42″ or 48″ depth**, two rack rows to a bay, with the aisle between the
  rows. frame depth + aisle + frame depth is the bay's width **exactly**, so the outer posts land right on
  the bay line and the deck sheet runs out flush with them — nothing over to trip on,
  nothing short to fall through, and nothing sticking out past the footprint you stake out.
- **Rows and beams** — two frames with a 12′ beam between them, on each of the frame's post
  lines, **high** at deck height and **low** near the base, is a rack *row*.
- **Building on** — bays end to end along a row land their frames on the same point and
  **share** them, so the second piece buys one frame line instead of two. Where the two
  disagree in height you buy the **taller** frame and the shorter bay's beams land partway
  up it — rack frames are drilled the whole way up. Two pieces only share when their **rows
  line up**, which means the same row spread, frame depth and orientation; a different width against a face stands its
  own frame line. Bays back to back keep their own rows either way, the way rack really
  goes together. The count sheet says how many frames the sharing saved.
- **Long span** — the SPAN tool lays a bay whose long side is **20′ instead of 12′**: same
  four uprights, further apart, with the steel beams swapped for doubled 20′ 2×6. The sheet
  flags it — that's lumber doing a rack beam's job — and past four plies it says so out loud.
- **Girts** — rows of 2×4 along every *outside* face, frame to frame, lagged outboard of
  the posts. They lace one rack row to the next and they're what the plywood screws into.
  A run is whatever the face measures. Interior faces get none.
- **Deck kit** — 8 beams, 10 2×8 joists crossing the rows at 16″ o.c., and enough 4×8 ply to
  floor the bay in 4′ courses with every seam landing on a joist. A 20′ bay takes 16 joists.
- **Floor** — a floor at the **base** of a bay, landing on the low beams that are already
  standing there, so it costs joists and ply and nothing else and comes out **18″ up**.
  That's what turns a walled bay from dirt into a room. A **RISER** out on open ground has no
  steel under it, so that one gets nine cribbing pads and a rim beam down each side.
- **Stairs** — off any of the four faces, running down whichever way there's room, with two
  turns yours to set. At the **head**: straight off the deck edge, or a quarter turn onto a
  framed **4′ top flat** outside the wall. At the **mid flat**: straight on, or a **wrap** —
  the lower flight leaves off the side of the landing, which is how a run gets around a
  corner. The flights regrow off the frame height so the pitch stays walkable, and a turn
  buys its flat with **4′ more ground** rather than a steeper stair. Ask for a run the ground
  won't take and it turns the one that will, and says so.
- **Walls** — one opening per 4′ module, so a face carries as many doors and windows as it
  has courses. A wall stands as tall as the bay it hangs on; a partition between two bays of
  different heights closes the taller opening.
- **Shade** — cloth flies 8′ over the deck, so you can stand on the roof and still be under it.
- **Railings** — 42″ on every open deck edge except the stair head. The RAILS tool switches
  them off for one structure at a time without touching the rest of the sketch.
- **Ballast** — every ground-level perimeter face gets a spare beam laid flat at grade just
  outside it, with a full 55-gal water barrel strapped to each end. The count sheet totals
  the pounds, the gallons, and the sail area they're fighting — and a taller frame needs more,
  because the tipping moment goes as the square of the height and the weight holding it down
  does not.

## The star shade

**STAR SHADE** is the one thing in here that isn't rack. Click open ground and it drops a
whole **StarShade** — Sam Smith's folding solar canopy from Bombay Beach, built off its own
guide: **37.9′ point to point**, **8.1′ tall**, eight scissor legs in 2×4 and half-inch
bolts, **18 panels** for **3.96 kW**, about **$1,192** and 1,790 lb. The plan is an
**octagram** — two squares crossed at 45° — because the top ring counter-rotates against the
bottom one as the linkage opens, and it goes from folded to standing in two minutes out of a
pickup.

The panels lie **flat and butted up** in a 3 × 6 block, 15′7″ × 16′3″, so the legs and the
star tips stand clear of the glass all the way round. Two **275-gal IBC totes** stand stacked
at the hub with the batteries and the inverter in them — 7′8″ of cage inside the 4′6″ hub,
clear of the radials overhead and in the shade of the whole deck all day. The totes are
counted; what you put in them is your own kit and the sheet doesn't guess at it.

It owns its **40′ square** of ground outright: no bay, riser or stair may share it, and it
shares nothing back. Its whole bill of materials lands in the count sheet **on top of**
whatever rack you drew.

## Starting points

**Blank slab** is nothing. **Standard room** is a run of enclosed room — bays end to end,
walls all round, a door and windows worked into the long south side one 4′ course at a time,
a window at each end. **Solar shed** is bays with their back to the north wind and a 45° face
of used panels leaning off the south side. Both are laid out in modules off the live row
spread, so they land square whatever the strips are set to. Neither one comes with stairs or
railings: which face you want to come down, and what you want held, is yours to decide — the
count sheet flags both until you do.

## The sun

The sun slider walks the real solar arc for **Bombay Beach, CA at the winter solstice** —
the shortest day, the lowest arc, the longest shadows — and the shadows move with it, so you
can see whether a shade wall shades anything at 3pm. Every panelled face is scored against an
ideal south-facing panel at the best December tilt for this latitude, found by scoring every
angle the same way your faces get scored rather than by a rule of thumb, and faces that barely
see it get flagged.

## Notes

- Your work saves to this browser's `localStorage` and nowhere else; nobody can edit your
  sketch. The address bar doesn't follow your edits. **Copy share link** builds a URL that
  carries the whole structure, and opening one gives you a copy to build on. If you already
  had a sketch saved, it's kept, and **Back to mine** brings it back. Links are **R10** — every piece carries the kit it was drawn on. Links
  from every earlier version still decode, with their pieces drawn on the one kit those
  links carried. Older links retain 42″ depth.
- The illustrative load model assumes **60 psf live + 10 psf dead**: an occupied deck, people standing, sitting, moving
  about. A packed dance floor is 100 and wants an engineer.
- A sketchpad, not engineering. Anything over one lift, and anything on a 20′ span, wants
  real eyes on it.

## Workspace controls

- **Select** a bay in the view or the accessible dropdown. Edit its width, column height/depth,
  roof, floor and shade. Dimension edits validate occupancy and support before applying; Undo restores geometry.
- **Camera presets:** Isometric, Plan, North, South, Cutaway and Frame selection. These are
  perspective viewpoints. Cutaway exposes the interior; Frame view exposes the structure.
- Setup explanations and count-sheet sections collapse independently. Light/dark themes,
  blue uprights, orange beams and a teal selection outline improve visual separation.
- **Inventory** compares needed stock with on-hand quantities and shortfalls. Blank means
  unknown; zero means counted and absent. Inventory persists locally and is included in project files.
  Mars-wide mode aggregates materials across all placed camps.
- **Download project / Open project** save and restore structure, block layout and inventory as JSON.
  Share URLs carry geometry, not private inventory. **Print / PDF** previews a dimensioned plan,
  materials, unresolved checks and inventory, with printable HTML download and browser PDF printing.

Changing depth updates posts, beam lines, compatible frame sharing, joist support spans and
illustrative tributary reactions. The reaction model assumes continuous equal-stiffness joists
under uniform loading; it does not verify actual stock, connections, anchoring or construction.

## Verification

Run `node tests/model.cjs`. It covers all 27 width/height/depth kits, mixed-depth sharing,
stacking, legacy and R10 links, project validation, inventory, edit rejection and joist geometry.

## Mars starting points

The generic pavilion, courtyard, workshop and stage cards have been replaced with:

- **Mars gathering hall:** six roofed bays, a clear central ground aisle, four low side
  gallery floors, north projection wall and open south entrance.
- **Café + sun lounge:** two roofed service/lounge bays, windows, a south lean-to and
  a roofed, open-sided entrance bay. The lean-to uses the existing opaque slope material;
  it does not reproduce the campus café's transparent wall.
- **Living rooms + porch:** two separate rooms with doors and windows, a shared partition,
  and two roofed, open-sided bays forming a common porch.
- **Solar utility shed** and **Blank slab** remain available.

These are campus-inspired planning layouts, not measured replicas. Cards show footprint
previews and uses. They inherit next-piece dimensions, replace the structure with Undo,
and restore finish visibility when loaded. Raised floors are 18″; access details still
need planning. Tests cover all three new starts across 27 kits (81 fixtures), including
hall aisle/floor separation, café slope retention and independent living-room doors.
