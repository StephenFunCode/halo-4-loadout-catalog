import type { ClickDetail } from "./abilityDetails";

/** Halo 4 loadout mechanics. Halopedia first; fuse times from GameFAQs 64682944. */
export const GRENADE_DETAILS: Record<string, ClickDetail> = {
  "Frag Grenade": {
    facts: [
      "It is harder to see in flight than a plasma grenade.",
      "It is meant to bounce around corners and off geometry until it comes to rest.",
    ],
  },
  "Plasma Grenade": {
    facts: [
      "If it misses a stick, the blast is tight, so a near-miss is less likely to kill.",
      "The casing sticks to infantry and vehicles by heat signature. It does not stick to walls or scenery.",
    ],
  },
  "Pulse Grenade": {
    facts: [
      "Explosives does not enlarge the field or change the pulses.",
      "The opening pulse strips a full standard shield bar. An Overshield is an extra bar on top of that, so it takes the extra bar off and leaves the player with their regular shields.",
      "Grenadier starts you with 2 Pulse grenades on spawn.",
      "If you are inside the blast when it opens, full shields drop immediately. Walk into an already-open field and shields drain more slowly.",
      "A full-shield player dies from one grenade only if they take both the opening pulse and the collapse. Unshielded players die almost instantly in the field.",
      "The field reaches about 4 meters from the center.",
      "On impact it opens a sphere. When that field collapses, the pulse kills anyone whose shields are already down.",
    ],
  },
};
