export type SlotId =
  | "primary"
  | "secondary"
  | "grenade"
  | "ability"
  | "tactical"
  | "support";

export type StatRow = {
  label: string;
  cells: string[];
};

export type LoadoutItem = {
  name: string;
  slot: SlotId;
  rows: StatRow[];
};

export type CatalogRow = {
  name: string;
  label: string;
  cells: string[];
};

export const SLOTS: { id: SlotId; label: string }[] = [
  { id: "primary", label: "Primary" },
  { id: "secondary", label: "Secondary" },
  { id: "grenade", label: "Grenade" },
  { id: "ability", label: "Armor Ability" },
  { id: "tactical", label: "Tactical" },
  { id: "support", label: "Support" },
];

export const COLUMNS: Record<SlotId, string[]> = {
  primary: ["Est. TTK", "SPK", "RoF", "HS", "Zoom", "Ballistics", "Shield", "Body", "Mag size", "Reserve"],
  secondary: ["Est. TTK", "SPK", "RoF", "HS", "Zoom", "Ballistics", "Shield", "Body", "Mag size", "Reserve"],
  grenade: ["Detonation", "Fuse", "Bounce", "Spawn", "Grenadier cap"],
  ability: ["Effect", "Duration", "Recharge", "Recharge (AA Efficiency)", "Delay"],
  tactical: ["Effect"],
  support: ["Effect"],
};

export const NUMERIC_COLUMNS = new Set([
  "Mag size",
  "Reserve",
  "SPK",
  "RoF",
  "Est. TTK",
  "Shield",
  "Body",
  "Spawn",
  "Grenadier cap",
  "Fuse",
  "Duration",
  "Delay",
  "Recharge",
  "Recharge (AA Efficiency)",
]);

export type KeyTerm = {
  term: string;
  meaning: string;
};

export type SlotKey = {
  columns: KeyTerm[];
  tips?: KeyTerm[];
};

const WEAPON_COLUMNS: KeyTerm[] = [
  {
    term: "Est. TTK",
    meaning: "Estimated time to kill, in seconds. Charge time is not included.",
  },
  { term: "SPK", meaning: "Shots per kill. Parentheses are trigger pulls for bursts." },
  { term: "RoF", meaning: "Rate of fire, in trigger pulls per second." },
  { term: "HS", meaning: "Unshielded headshot finishes the kill." },
  {
    term: "Hitscan",
    meaning:
      "The shot connects the instant you fire, at whatever the reticle is covering. Nothing flies through the air, so you aim at the player, not in front of them.",
  },
  {
    term: "Projectile",
    meaning:
      "The shot is a bolt that takes time to arrive. You have to aim ahead of a moving player, and they can strafe out of the way after you fire.",
  },
  { term: "Shield", meaning: "Shots to drop shields." },
  { term: "Body", meaning: "Shots after shields drop." },
];

export const SLOT_KEY: Record<SlotId, SlotKey> = {
  primary: {
    columns: WEAPON_COLUMNS,
  },
  secondary: {
    columns: WEAPON_COLUMNS,
  },
  grenade: {
    columns: [
      { term: "Detonation", meaning: "How the grenade kills or pressures a fight." },
      {
        term: "Fuse",
        meaning:
          "When it goes off. The clock starts on a floor, player, or vehicle, not a wall or ceiling.",
      },
      { term: "Bounce", meaning: "Whether it ricochets before settling." },
      { term: "Spawn", meaning: "Grenades you start with." },
      { term: "Grenadier cap", meaning: "Carry limit with Grenadier." },
    ],
    tips: [
      {
        term: "Super throw",
        meaning:
          "Sprint, then throw immediately. Timed right, the grenade travels much farther than a standing throw.",
      },
    ],
  },
  ability: {
    columns: [
      { term: "Effect", meaning: "In-game loadout-menu wording." },
      { term: "Duration", meaning: "Active time, in seconds." },
      { term: "Recharge", meaning: "Time to refill, in seconds." },
      { term: "Recharge (AA Efficiency)", meaning: "Recharge with that tactical package." },
      { term: "Delay", meaning: "Wait before recharge, in seconds." },
    ],
  },
  tactical: {
    columns: [{ term: "Effect", meaning: "In-game loadout-menu wording." }],
  },
  support: {
    columns: [{ term: "Effect", meaning: "In-game loadout-menu wording." }],
  },
};

type FireProfile =
  | { kind: "cyclic"; rps: number }
  | { kind: "ramps" }
  | { kind: "charge"; instantKill?: boolean };

/**
 * Post-tune MP cadence, keyed by catalog row label.
 * H4EK/Halopedia where a tag rate exists; otherwise 2012 SPS timings,
 * with the June 2013 RoF patches applied to BR and LightRifle.
 */
const FIRE_RATES: Record<string, FireProfile> = {
  "Assault Rifle": { kind: "cyclic", rps: 10 },
  DMR: { kind: "cyclic", rps: 2.75 },
  "Battle Rifle": { kind: "cyclic", rps: 2.85 * 0.84 },
  "Storm Rifle": { kind: "ramps" },
  "Covenant Carbine": { kind: "cyclic", rps: 4.8 },
  Suppressor: { kind: "cyclic", rps: 15.18 },
  "LightRifle (unzoomed)": { kind: "cyclic", rps: 2.35 * 0.84 },
  "LightRifle (zoomed)": { kind: "cyclic", rps: 2.2 * 1.02 },
  Magnum: { kind: "cyclic", rps: 5 },
  "Plasma Pistol (charged)": { kind: "charge" },
  "Boltshot (hip)": { kind: "cyclic", rps: 5.55 },
  "Boltshot (charged)": { kind: "charge", instantKill: true },
};

function triggerPullsFromSpk(spk: string): number | null {
  const paren = spk.match(/\((\d+)\)\s*$/);
  if (paren) return Number(paren[1]);
  const n = Number.parseInt(spk, 10);
  return Number.isFinite(n) ? n : null;
}

function formatRps(rps: number): string {
  return `${Number((Math.round(rps * 100) / 100).toFixed(2)).toString()}/s`;
}

function formatRof(profile: FireProfile | undefined): string {
  if (!profile) return "—";
  if (profile.kind === "ramps") return "Ramps";
  if (profile.kind === "charge") return "Charge";
  return formatRps(profile.rps);
}

function formatTtk(spk: string, profile: FireProfile | undefined): string {
  if (profile?.kind === "charge" && profile.instantKill) return "0.00s";
  if (!profile || profile.kind !== "cyclic") return "—";
  const pulls = triggerPullsFromSpk(spk);
  if (pulls == null || pulls < 2) return "—";
  return `${((pulls - 1) / profile.rps).toFixed(2)}s`;
}

function withWeaponTiming(slot: SlotId, label: string, cells: string[]): string[] {
  if (slot !== "primary" && slot !== "secondary") return cells;
  const [mag, reserve, spk, shield, body, hs, zoom, ballistics] = cells;
  const profile = FIRE_RATES[label];
  return [
    formatTtk(spk ?? "", profile),
    spk ?? "",
    formatRof(profile),
    hs ?? "",
    zoom ?? "",
    ballistics ?? "",
    shield ?? "",
    body ?? "",
    mag ?? "",
    reserve ?? "",
  ];
}

export const ITEMS: LoadoutItem[] = [
  {
    name: "Assault Rifle",
    slot: "primary",
    rows: [{ label: "Assault Rifle", cells: ["32", "224", "13", "8", "5", "N", "—", "Hitscan"] }],
  },
  {
    name: "Battle Rifle",
    slot: "primary",
    rows: [{ label: "Battle Rifle", cells: ["36", "216", "11 (4)", "9 (3)", "5", "Y", "2×", "Hitscan"] }],
  },
  {
    name: "DMR",
    slot: "primary",
    rows: [{ label: "DMR", cells: ["14", "42", "5", "4", "3", "Y", "3×", "Hitscan"] }],
  },
  {
    name: "Storm Rifle",
    slot: "primary",
    rows: [{ label: "Storm Rifle", cells: ["150", "—", "13", "7", "6", "N", "—", "Projectile"] }],
  },
  {
    name: "Covenant Carbine",
    slot: "primary",
    rows: [{ label: "Covenant Carbine", cells: ["18", "90", "7", "6", "4", "Y", "2×", "Projectile"] }],
  },
  {
    name: "Suppressor",
    slot: "primary",
    rows: [{ label: "Suppressor", cells: ["48", "288", "14", "9", "5", "N", "—", "Projectile"] }],
  },
  {
    name: "LightRifle",
    slot: "primary",
    rows: [
      { label: "LightRifle (unzoomed)", cells: ["36", "108", "15 (5)", "14 (5)", "9 (3)", "Y", "—", "Hitscan"] },
      { label: "LightRifle (zoomed)", cells: ["12", "108", "4", "3", "2", "Y", "~4×", "Hitscan"] },
    ],
  },
  {
    name: "Magnum",
    slot: "secondary",
    rows: [{ label: "Magnum", cells: ["8", "32", "6", "5", "3", "Y", "2×", "Hitscan"] }],
  },
  {
    name: "Plasma Pistol",
    slot: "secondary",
    rows: [
      { label: "Plasma Pistol (tap)", cells: ["61", "—", "12", "4", "8", "N", "—", "Projectile"] },
      { label: "Plasma Pistol (charged)", cells: ["4", "—", "1", "1", "—", "N", "—", "Projectile"] },
    ],
  },
  {
    name: "Boltshot",
    slot: "secondary",
    rows: [
      { label: "Boltshot (hip)", cells: ["10", "40", "11", "10", "6", "Y", "—", "Projectile"] },
      { label: "Boltshot (charged)", cells: ["2", "40", "1", "1", "1", "N", "—", "Projectile"] },
    ],
  },
  {
    name: "Frag Grenade",
    slot: "grenade",
    rows: [{ label: "Frag Grenade", cells: ["Inner blast can one-shot", "~1s after floor, player, or vehicle", "Until it stops", "2", "3"] }],
  },
  {
    name: "Plasma Grenade",
    slot: "grenade",
    rows: [{ label: "Plasma Grenade", cells: ["Stick is a kill", "~1.5s after stick or rest", "Once, then sits", "2", "3"] }],
  },
  {
    name: "Pulse Grenade",
    slot: "grenade",
    rows: [{ label: "Pulse Grenade", cells: ["Strips shields, slows vehicles, then collapses", "Impact, then ~3s field", "No", "1", "2"] }],
  },
  {
    name: "Promethean Vision",
    slot: "ability",
    rows: [
      {
        label: "Promethean Vision",
        cells: ["Allows users to detect enemy signatures through walls and other hard surfaces.", "5", "10", "5", "2"],
      },
    ],
  },
  {
    name: "Thruster Pack",
    slot: "ability",
    rows: [
      {
        label: "Thruster Pack",
        cells: ["Enables a powerful burst of movement offering the ability to evade or quickly close the gap.", "1", "3", "1.5", "2"],
      },
    ],
  },
  {
    name: "Jet Pack",
    slot: "ability",
    rows: [{ label: "Jet Pack", cells: ["Allows users limited flight through a vertical lift propulsion system similar to that of EVA reentry packs.", "3", "6", "3", "2"] }],
  },
  {
    name: "Hologram",
    slot: "ability",
    rows: [
      {
        label: "Hologram",
        cells: ["Allows users to generate a nearly identical holographic decoy to deceive enemies during combat.", "7", "7", "3.5", "0"],
      },
    ],
  },
  {
    name: "Hardlight Shield",
    slot: "ability",
    rows: [
      {
        label: "Hardlight Shield",
        cells: ["Allows users to generate a protective barrier of hard light which stops most small arms fire and some explosives.", "5", "10", "5", "2"],
      },
    ],
  },
  {
    name: "Active Camouflage",
    slot: "ability",
    rows: [{ label: "Active Camouflage", cells: ["Allows users to generate a visual effect astonishingly close to invisibility.", "16", "14", "7", "2"] }],
  },
  {
    name: "Autosentry",
    slot: "ability",
    rows: [
      {
        label: "Autosentry",
        cells: ["An automated turret which can be deployed to defend its user or command a key battlefield chokepoint.", "65", "18", "9", "2"],
      },
    ],
  },
  {
    name: "Regeneration Field",
    slot: "ability",
    rows: [
      {
        label: "Regeneration Field",
        cells: ["Allows users to release a short-range energy field that heals any nearby Spartans.", "10", "30", "15", "0"],
      },
    ],
  },
  {
    name: "Shielding",
    slot: "tactical",
    rows: [{ label: "Shielding", cells: ["Shielding speeds up your armor's energy shield recharge rate."] }],
  },
  {
    name: "Mobility",
    slot: "tactical",
    rows: [{ label: "Mobility", cells: ["Mobility allows unlimited sprint."] }],
  },
  {
    name: "Resupply",
    slot: "tactical",
    rows: [{ label: "Resupply", cells: ["Resupply allows the recovery of grenades from fallen allies and foes."] }],
  },
  {
    name: "AA Efficiency",
    slot: "tactical",
    rows: [{ label: "AA Efficiency", cells: ["AA Efficiency increases the rate at which energy recharges for Armor Abilities."] }],
  },
  {
    name: "Grenadier",
    slot: "tactical",
    rows: [{ label: "Grenadier", cells: ["Grenadier increases grenade carrying capacity."] }],
  },
  {
    name: "Firepower",
    slot: "tactical",
    rows: [
      {
        label: "Firepower",
        cells: ["Firepower allows the use of a primary weapon in the secondary weapon slot."],
      },
    ],
  },
  {
    name: "Requisition",
    slot: "tactical",
    rows: [
      {
        label: "Requisition",
        cells: ["In modes with personal ordnance, Requisition lets the player request new choices when an ordnance is granted."],
      },
    ],
  },
  {
    name: "Wheelman",
    slot: "tactical",
    rows: [
      {
        label: "Wheelman",
        cells: ["Wheelman increases the durability of vehicles the player is commandeering and mitigates the effects of EMPs."],
      },
    ],
  },
  {
    name: "Resistor",
    slot: "tactical",
    rows: [
      {
        label: "Resistor",
        cells: ["Resistor allows the player to maintain their full mobility and dexterity while taking incoming fire."],
      },
    ],
  },
  {
    name: "Ammo",
    slot: "support",
    rows: [
      {
        label: "Ammo",
        cells: ["Ammo increases the ammunition capacity for both starting weapons and ordnance drops."],
      },
    ],
  },
  {
    name: "Dexterity",
    slot: "support",
    rows: [{ label: "Dexterity", cells: ["Dexterity speeds up reloads and weapon swapping."] }],
  },
  {
    name: "Sensor",
    slot: "support",
    rows: [{ label: "Sensor", cells: ["Sensor increases motion sensor range."] }],
  },
  {
    name: "Awareness",
    slot: "support",
    rows: [{ label: "Awareness", cells: ["Awareness allows the use of motion sensors while using a scope."] }],
  },
  {
    name: "Explosives",
    slot: "support",
    rows: [
      {
        label: "Explosives",
        cells: ["Explosives alters grenade performance, increasing blast radius and decreasing grenade damage received."],
      },
    ],
  },
  {
    name: "Ordnance Priority",
    slot: "support",
    rows: [
      {
        label: "Ordnance Priority",
        cells: ["In modes with personal ordnance, Ordnance Priority offers more frequent ordnance drops to user."],
      },
    ],
  },
  {
    name: "Stability",
    slot: "support",
    rows: [{ label: "Stability", cells: ["Stability steadies your weapon while being struck by incoming fire."] }],
  },
  {
    name: "Gunner",
    slot: "support",
    rows: [
      {
        label: "Gunner",
        cells: [
          "Gunner increases how long a mounted weapon can fire before overheating as well as movement speed with detached turrets.",
        ],
      },
    ],
  },
  {
    name: "Stealth",
    slot: "support",
    rows: [
      {
        label: "Stealth",
        cells: [
          "Stealth dampens your footsteps, making you harder to see on Promethean Vision, and increases your assassination speed.",
        ],
      },
    ],
  },
  {
    name: "Nemesis",
    slot: "support",
    rows: [{ label: "Nemesis", cells: ["Nemesis marks enemy responsible for your last death."] }],
  },
  {
    name: "Drop Recon",
    slot: "support",
    rows: [{ label: "Drop Recon", cells: ["Drop Recon calls out ordnance drops in advance."] }],
  },
  {
    name: "Recharge",
    slot: "support",
    rows: [
      {
        label: "Recharge",
        cells: ["Recharge lowers the time it takes before one's shields begin recharging."],
      },
    ],
  },
  {
    name: "Survivor",
    slot: "support",
    rows: [
      {
        label: "Survivor",
        cells: ["Survivor prevents the death of operators when their vehicle is destroyed."],
      },
    ],
  },
];

function itemsForSlot(slot: SlotId): LoadoutItem[] {
  return ITEMS.filter((item) => item.slot === slot);
}

export function catalogRows(slot: SlotId): CatalogRow[] {
  const rows: CatalogRow[] = [];
  for (const item of itemsForSlot(slot)) {
    for (const row of item.rows) {
      rows.push({ name: item.name, label: row.label, cells: withWeaponTiming(slot, row.label, row.cells) });
    }
  }
  return rows;
}
