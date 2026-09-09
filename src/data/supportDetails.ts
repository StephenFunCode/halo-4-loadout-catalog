import type { ClickDetail } from "./abilityDetails";

/** Halo 4 loadout mechanics. Halopedia Support upgrades; Dexterity 66%/15% and Explosives 25%/25% are that page. */
export const SUPPORT_DETAILS: Record<string, ClickDetail> = {
  Ammo: {
    facts: [
      "Magazine size does not change. The extra rounds go into reserve, including on ordnance guns.",
    ],
  },
  Dexterity: {
    facts: [
      "It does not speed a Plasma Pistol or Boltshot charge, or the pistol's cooldown after a charged shot.",
      "Weapon swapping is 15% faster.",
      "Reloads are 66% faster.",
    ],
  },
  Sensor: {
    facts: [
      "Default motion-tracker radius is about 30 meters. Sensor sets it to 60 meters, so the same HUD circle covers twice the ground.",
      "The rings do not add. The outer edge is just farther: a fight that sat on the rim at 30 meters now sits about halfway out.",
      "Blips shrink on the bigger scale, so they are harder to pick out. Sensitivity is higher too, not only range.",
    ],
  },
  Awareness: {
    facts: [
      "Without it, zooming hides the motion tracker. With it, the radar stays up while you are scoped.",
    ],
  },
  Explosives: {
    facts: [
      "It does not change a Pulse Grenade's field.",
      "Your grenade blast radius is 25% larger. Incoming grenade damage is 25% lower.",
    ],
  },
  "Ordnance Priority": {
    facts: [
      "You earn personal ordnance on fewer points. It does nothing in modes without personal ordnance.",
    ],
  },
  Stability: {
    facts: [
      "Incoming fire flinches your aim half as much.",
      "You still take full damage. It does not keep you moving the way Resistor does.",
    ],
  },
  Gunner: {
    facts: [
      "Mounted guns take about a third longer to overheat.",
      "A detached turret no longer slows you down.",
    ],
  },
  Stealth: {
    facts: [
      "Assassinations are 20% faster.",
      "Promethean Vision sees you as a thinner profile, not a full shape. Footsteps are quieter.",
    ],
  },
  Nemesis: {
    facts: [
      "The HUD icon lasts a few seconds after you spawn, then it is gone.",
      "It points at the player who got the kill, including through walls.",
      "They also light up on your motion tracker. The mark moves to whoever last killed you.",
    ],
  },
  "Drop Recon": {
    facts: [
      "If the drop is far, an arrow points toward the nearest timed drop. Waypoints also appear from farther away.",
      "It is for map ordnance, not the personal drop you call in.",
      "You get a couple extra seconds before everyone else sees the pod coming down.",
      "The waypoint marks the landing spot and what is in it.",
    ],
  },
  Recharge: {
    facts: [
      "Without it, shields wait about 6 seconds after the last hit, then fill in about 2 seconds.",
      "With Recharge, the wait is about 5 seconds. The fill is still about 2 seconds. It does not speed the fill the way Shielding does.",
    ],
  },
  Survivor: {
    facts: [
      "You are thrown out of a vehicle before it explodes, so the wreck does not kill you in the seat.",
    ],
  },
};
