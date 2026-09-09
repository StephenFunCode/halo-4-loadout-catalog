# Halo 4 Loadouts — agent notes

Fan catalog of Halo 4 MCC loadout stats. Not a kit builder. Not affiliated with 343 Industries or Microsoft.

Run: `npm run dev` → usually `http://127.0.0.1:5173` or `http://localhost:5174`. Do not commit unless asked. Do not push.

## Product

Single-page catalog. Six slots in MCC loadout order: Primary, Secondary, Grenade, Armor Ability, Tactical, Support. Desktop uses a sticky left slot rail; below 860px the slots wrap in a 3×2 strip above the table.

No search, Equip, kit bar, Copy link, URL hash, or `localStorage`. `src/main.tsx` strips leftover kit hashes on load. Clicking a row highlights it (`is-focus`). Secondary is always Magnum / Plasma Pistol / Boltshot. Fast Track is not a Tactical. Grenade has no Stick column. Melee is not a weapon column. Name column body cells are bold.

Default first row is focused on tab change, so every slot shows a click-detail card immediately.

## Never

- Mention **War Games**, or contrast Campaign / Spartan Ops with multiplayer. This site is Halo 4 loadouts; state mechanics as the default.
- Mention **Halo: Reach** or compare to it (including Type-27 hologram wall-clip notes).
- Mention **Halo 3** or compare to it (including Power Drain, Drop Shield, Bubble Shield).
- Show official designations (`M6H`, `Type-25`, `Z-110`, `Z-5080 Short-Range Spectrum Augmenter/Vision`, and the rest).
- Repeat table numbers in click-detail cards (duration, recharge, AA Efficiency, delay, spawn, grenadier cap, fuse, TTK, SPK, RoF, mag, reserve, zoom, shield, body).
- Invent Frag or Plasma blast radii. Halopedia’s Halo 4 grenade pages do not list those. Pulse field reach is about 4 meters from the center (Halo Diehards MCC recap / wiki tables).
- Invent a Storm Rifle TTK. It is a ramp weapon (`RoF` = Ramps, TTK = —).
- Use 2012 launch SPK (BR 13/5, Carbine 8, AR 16). Catalog SPK is post-tune Halopedia MCC.
- Reintroduce the kit builder, search, Fast Track, Stick column, designations, or `KillCountChart.tsx`.
- Autoplay YouTube (or any video) with sound.
- Drop unsourced Halopedia trivia (example: hologram skins/emblems).

Stephen’s local tests beat the wiki when they conflict.

## Source hierarchy

1. **Halo 4 Editing Kit** weapon tags, when a cyclic rate exists.
2. **Halopedia Halo 4 / MCC pages** for SPK, loadout-menu Effect wording, and mechanics that are actually documented for this game.
3. **343 sandbox designer notes** (2012 Waypoint / 343 forum weapon articles).
4. **Title updates** that shipped in the MCC tune (especially TU 1.03).
5. **Named 2012 timed tests** (stopwatch / Forge), cited by article or thread — not as “community tests.”
6. **Local observation** (this repo’s maintainer), labeled as such when guides do not document it.

When H4EK or Halopedia conflict with a 2012 shots-per-second sheet, keep H4EK/Halopedia.

Halopedia OCR of MCC loadout tables swapped Autosentry and Regeneration Field Effect text, and Dexterity was missing “reloads.” Prefer GamesBeat / Gamer Guides when the menu wording and the wiki disagree.

Hologram “runs through walls and players” is Reach-sourced (`Type-27` disadvantages). Do not put it on the Halo 4 card. Shots passing through the decoy (it is not cover) is a separate, valid fact.

## Useful sources

### Weapons and TTK

| Need | Where |
| --- | --- |
| Assault Rifle 10/s, Magnum 5/s | H4EK `storm_assault_rifle`, `storm_magnum` |
| DMR 2.75/s | Halopedia 165 RPM |
| Battle Rifle 2.39/s | 2012 SPS 2.85 × June 2013 −16% |
| LightRifle zoomed 2.24/s | 2012 SPS 2.2 × 2013 +2% |
| LightRifle unzoomed 1.97/s | 2012 SPS 2.35 × 2013 −16% |
| Carbine 4.8/s, Suppressor 15.18/s, Boltshot hip 5.55/s | 2012 SPS timings |
| Post-tune SPK | Halopedia MCC loadout tables |
| Magnum / pistol animations, bloom | [343 UNSC weapons sandbox notes](https://www.halodiehards.net/halo-4s-unsc-weapons-details-impressions/) (Chris / David). Chris also listed faster melee and grenade throws; later guides only keep the faster swap. Magnum card is swap-only until those are timed. |
| Plasma Pistol charge, EMP, battery drain | [343 Covenant weapons sandbox notes](https://www.343industries.org/forum/news/halo-articles/halo-4-the-covenants-weapons-r316/) |
| Plasma Pistol lock-on reticle | [GameFAQs 64757087](https://gamefaqs.gamespot.com/boards/632877-halo-4/64757087) |
| Boltshot charged 15-foot one-hit | Title Update 1.03 patch notes (not Halopedia’s “15 meters”) |
| 2012 damage / SPS sheets | [denkirson](https://denkirson.proboards.com/thread/5202/halo-4-weapon-stats), [Tol spreadsheet](https://forums.bungie.org/halo/archive39.pl?read=1165467) |

### Grenades

| Need | Where |
| --- | --- |
| Fuse ~1s / ~1.5s / impact then ~3s field | [GameFAQs 64682944](https://gamefaqs.gamespot.com/boards/632877-halo-4/64682944) |
| Opening pulse vs collapse, throw at feet | Chris B. in [343 Promethean weapons notes](https://www.343industries.org/forum/news/halo-articles/halo-4-promethean-weapons-video-complex-gameplay-r341/) |
| Unshielded die in the field; full shields need both pulses | Halopedia pulse grenade gameplay; same GameFAQs thread |
| Pulse field ~4 m / 13 ft from center | [Halo Diehards MCC weapons recap](https://www.halodiehards.net/halo-master-chief-collection-for-dummies-halo-4-weapons-comparison/) (kill and damage radius both 4 meters) |
| Opening pulse vs Overshield: strips the extra bar, leaves regular shields | Opening pulse strips a full standard bar (same GameFAQs / Halopedia pulse gameplay). Halo 4 Overshield is one extra green layer at 200% of base ([Halopedia Overshield](https://www.halopedia.org/Overshield)). No named Forge test of Pulse vs Overshield. |
| Explosives does not change Pulse field or pulses | Local observation (this repo’s maintainer). TrueAchievements “Flash of Light” advice that Explosives enlarges Pulse is wrong. |

Fuse clock starts on floor, player, or vehicle — not wall or ceiling.

### Armor abilities

| Need | Where |
| --- | --- |
| Duration / recharge / AA Efficiency / delay | MCC loadout menu; cross-check Halopedia |
| Autosentry 5+4 bolts, ~1/s chest, ~3 DMR/BR to kill drone, 1.5s plant | [The Balance, Nov 2012](http://balance-reviews.blogspot.com/2012/11/halo-4-multiplayer-armor-ability-guide.html) (stopwatch, n=10) |
| Regen Field: stationary sphere (~10 Spartans across), shields of anyone inside including enemies, leave to stop personal regen; ~3s to full (no wait); default shields ~6s wait then ~2s fill; Shielding does not stack in-field; incoming fire delays; 1.5s plant | Default wait/fill: [Halopedia Shielding](https://www.halopedia.org/Tactical_packages) (6s wait) and [energy shielding](https://halo.fandom.com/wiki/Energy_shielding) (2s fill). Field fill, radius, plant lock: [The Balance, Nov 2012](http://balance-reviews.blogspot.com/2012/11/halo-4-multiplayer-armor-ability-guide.html). Stationary / jump-out / Shielding: Forge [GameFAQs 64619938](https://gamefaqs.gamespot.com/boards/632877-halo-4/64619938). Enemies share the field: Fandom Regen Field. Shots pass through, activation shove, blur: Halopedia Regen Field. |
| Hardlight: small-arms do not break it before expiry; plasma grenade bounces | Balance article; Forge list [GameFAQs 64604941](https://gamefaqs.gamespot.com/boards/632877-halo-4/64604941) / [Wheelmen copy](https://www.halowheelmen.com/site/forum/viewtopic.php?p=156182&t=14301) |
| Promethean Vision radar pulse | [Arqade, Nov 2012](https://gaming.stackexchange.com/questions/92230/what-are-the-red-radar-blips-on-the-minimap); Balance (“enemies can see this pulse on the radar”) |
| Autosentry vs hologram / still camo | Halopedia Autosentry |
| PV vs camo (blue) and hologram + Stealth | Halopedia Promethean Vision (state as default, no playlist name) |

Active Camouflage jammer is **6 light-blue pips** (local test, not the old “~8”). Pip carets for above/below are local observation; Halo 4 guides and Halopedia do not document pip height. Keep that as anecdotal, not as “Halo 4 has no elevation.”

### Support

| Need | Where |
| --- | --- |
| Dexterity 66% reload / 15% swap; no charge time or Plasma Pistol overheat cooldown | [Halopedia Support upgrades](https://www.halopedia.org/Support_upgrades) |
| Explosives 25%/25% does not change Pulse | Local observation (this repo’s maintainer) |
| Drop Recon extra seconds, off-screen arrow, farther HUD waypoints | David Ellis (343) in [IGN Engineer / Halo Diehards recap](https://www.halodiehards.net/halo-4-specializations-breakdown/) (Ryan McCaffrey, Aug 2012) |
| Drop Recon is map Initial and Random ordnance, not personal | [Fandom Ordnance](https://halo.fandom.com/wiki/Ordnance_(Multiplayer)) |

Do not use Fandom’s 10s vs 12s warning times (they conflict). Do not mention Engineer unlock on the card.

## TTK and rate of fire

`TTK = (trigger_pulls − 1) / RPS`. First shot at t=0, all hits, projectile travel ignored. Hitscan and Projectile use the same formula.

Burst SPK uses the parenthetical (`11 (4)` → 4 trigger pulls). Charge time is RoF `Charge`, not TTK. Boltshot charged is a one-shot in the ~15-foot window, so Est. TTK is `0.00s`. Plasma Pistol charged strips shields and is not a kill, so TTK stays —. Storm Rifle is Ramps with no TTK.

Keyed in `FIRE_RATES` by **row label**. `withWeaponTiming` builds cells in final column order: Est. TTK, SPK, RoF, HS, Zoom, Ballistics, Shield, Body, Mag size, Reserve.

| Weapon | RoF | Est. TTK |
| --- | --- | --- |
| Assault Rifle | 10/s | 1.20s |
| Magnum | 5/s | 1.00s |
| DMR | 2.75/s | 1.45s |
| Battle Rifle | 2.39/s | 1.25s |
| Covenant Carbine | 4.8/s | 1.25s |
| LightRifle zoomed | 2.24/s | 1.34s |
| LightRifle unzoomed | 1.97/s | 2.03s |
| Suppressor | 15.18/s | 0.86s |
| Boltshot hip | 5.55/s | 1.80s (mag 10 / SPK 11, so reload needed; TTK understated) |
| Storm Rifle | Ramps | — |
| Plasma Pistol tap | — | — |
| Plasma Pistol charged | Charge | — |
| Boltshot charged | Charge | 0.00s (in one-hit range) |

MCC did not retune these rates.

## Tables and sorting

Tables stay in MCC order. Headers are not sortable.

MCC item order (Halopedia loadout tables):

- **Primary:** Assault Rifle, Battle Rifle, DMR, Storm Rifle, Covenant Carbine, Suppressor, LightRifle
- **Secondary:** Magnum, Plasma Pistol, Boltshot
- **Grenade:** Frag, Plasma, Pulse
- **Armor Ability:** Promethean Vision, Thruster Pack, Jet Pack, Hologram, Hardlight Shield, Active Camouflage, Autosentry, Regeneration Field
- **Tactical:** Shielding, Mobility, Resupply, AA Efficiency, Grenadier, Firepower, Requisition, Wheelman, Resistor
- **Support:** Ammo, Dexterity, Sensor, Awareness, Explosives, Ordnance Priority, Stability, Gunner, Stealth, Nemesis, Drop Recon, Recharge, Survivor

LightRifle has unzoomed/zoomed rows. Plasma Pistol has tap/charged. Boltshot has hip/charged. Focus is by item **name**, so both rows share one card.

Armor Ability Effect cells use in-game loadout-menu wording.

Hitscan / Projectile glossary (plain language, not jargon):

- **Hitscan:** The shot connects the instant you fire, at whatever the reticle is covering. Nothing flies through the air, so you aim at the player, not in front of them.
- **Projectile:** The shot is a bolt that takes time to arrive. You have to aim ahead of a moving player, and they can strafe out of the way after you fire.

Grenade Super throw is a current technique (sprint, then throw immediately), not a patched throw-then-sprint glitch. Tips live in `SLOT_KEY.tips`, not in the column glossary.

## Click-detail cards

Files: `src/data/abilityDetails.ts`, `src/data/grenadeDetails.ts`, `src/data/secondaryDetails.ts`, `src/data/primaryDetails.ts`, `src/data/tacticalDetails.ts`, `src/data/supportDetails.ts`. Lookup in `src/App.tsx` by slot + focused **name**.

Write mechanics that are not already in the table. Order facts from least-known to most obvious. Keep the tone of the existing cards: short factual sentences, no designations, no other-game comparisons, no “community tests” hedge. If a number comes from a named test, state the number. Put the citation in this file, not in the card.

Do not contradict a table cell. If the table is wrong, fix the table with a source, then write the card.

Plasma Pistol charged **strips shields**; it does not kill a full-health player. Boltshot charged **can** kill in range.

## UI

Dark HUD (page `#111315`, type `#eef1f4`, table `#1f2328`). Active slot green (`#6db87a`); focused row and click-detail edge green (`#7ec98a` / wash `#1c2a20`). Numeric columns right-aligned. Title **Halo 4 Loadouts**. Affiliation line at the bottom of the page: “Fan site, not affiliated with **343 Industries** or Microsoft.” Desktop: sticky left slot rail (~11em, full MCC labels). Click-detail sits under the table unless the viewport is at least 1400px, then the page grows and the card sits to the right (~16em) without shrinking the table. Below 860px: 3×2 strip above the table; click-detail stays under the table. Slot `h2` is visually hidden. No spider, kill-count, or dashboard charts.

If you change UI, layout, routing, or rendered data, verify in the browser: click the tab, click each affected row, and check other tabs that share the component. A screenshot is not verification.

## Files

| Path | Role |
| --- | --- |
| `src/App.tsx` | Tabs, table, focus, click-detail |
| `src/data/loadouts.ts` | `ITEMS`, `COLUMNS`, `SLOT_KEY`, `FIRE_RATES`, catalog |
| `src/data/abilityDetails.ts` | Armor Ability cards |
| `src/data/grenadeDetails.ts` | Grenade cards |
| `src/data/secondaryDetails.ts` | Secondary cards |
| `src/data/primaryDetails.ts` | Primary cards |
| `src/data/tacticalDetails.ts` | Tactical cards |
| `src/data/supportDetails.ts` | Support cards |
| `src/index.css` | Theme, glossary, `.item-detail`, `.tips` |
