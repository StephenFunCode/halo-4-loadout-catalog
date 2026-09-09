import type { ClickDetail } from "./abilityDetails";

/** Halo 4 loadout mechanics. Halopedia Tactical packages; Shielding wait vs fill is GameFAQs 64784909. */
export const TACTICAL_DETAILS: Record<string, ClickDetail> = {
  Shielding: {
    facts: [
      "The wait after the last hit does not change. Only the fill is faster.",
      "Inside a Regeneration Field, Shielding does not stack. Step out of the field for the faster fill.",
      "Once shields start coming back, they fill about twice as fast.",
    ],
  },
  Mobility: {
    facts: [
      "Sprint speed is unchanged. You can keep sprinting without a stamina limit.",
      "You still cannot fire while sprinting.",
    ],
  },
  Resupply: {
    facts: [
      "Without it, grenades on dead players do nothing for you.",
      "Grenade pads and ordnance grenade pickups still work.",
    ],
  },
  "AA Efficiency": {
    facts: [
      "It does not change how long an ability stays on. Armor abilities refill about twice as fast.",
      "Thruster Pack is one burst, then the bar must fill all the way before you can burst again. AA Efficiency only shortens that wait. A half-full bar still will not fire.",
      "Jet Pack is a fuel pool. You can lift on a partial tank. Resting returns fuel; AA Efficiency speeds that rest refill.",
    ],
  },
  Grenadier: {
    facts: [
      "A Pulse loadout spawns with the extra grenade.",
    ],
  },
  Firepower: {
    facts: [
      "You give up the Magnum, Plasma Pistol, and Boltshot.",
      "The second slot is another loadout primary, not a map power weapon.",
    ],
  },
  Requisition: {
    facts: [
      "When a personal ordnance is granted, you can reject the first set of choices and ask for another.",
    ],
  },
  Wheelman: {
    facts: [
      "Applies while you are driving, not as a passenger or gunner.",
      "Vehicle health stun is halved, hull repair is about twice as fast, and EMP wears off about twice as fast.",
    ],
  },
  Resistor: {
    facts: [
      "Incoming fire does not slow you or punch your aim the usual way.",
      "You still take full damage. It does not change flinch when you are the one firing.",
    ],
  },
};
