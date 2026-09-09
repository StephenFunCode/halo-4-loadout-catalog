import type { ClickDetail } from "./abilityDetails";

/** Halo 4 loadout mechanics. 343 sandbox notes and the June 2013 weapon tune. */
export const PRIMARY_DETAILS: Record<string, ClickDetail> = {
  "Assault Rifle": {
    facts: [
      "Holding the trigger opens the spray. Short bursts keep it on target farther than a full dump.",
      "Drop shields, then swap to a precision gun to finish.",
      "A close-to-mid automatic.",
    ],
  },
  "Battle Rifle": {
    facts: [
      "Two bursts and a melee kill.",
      "There is no bloom. The barrel climbs a little; you can pull it down.",
      "Three-round bursts. One bullet from a burst to the head finishes an unshielded player.",
    ],
  },
  DMR: {
    facts: [
      "Slight bloom only at extreme range. In most fights it does not come into play.",
      "Single shots for long sightlines.",
    ],
  },
  "Storm Rifle": {
    facts: [
      "Holding the trigger until it overheats costs a long cooldown. Pulse the trigger to keep firing.",
      "The rate of fire ramps the longer you hold.",
      "A close-range automatic. The bolts take time to arrive, so you have to lead.",
    ],
  },
  "Covenant Carbine": {
    facts: [
      "Each trigger pull is weaker than a DMR shot, a Battle Rifle burst, or a zoomed LightRifle shot. You have to land more of them, faster.",
      "The bolts take time to arrive, so you have to lead.",
      "Good for finishing after an automatic drops shields.",
    ],
  },
  Suppressor: {
    facts: [
      "The bolts travel slowly. You have to lead, and a strafing player can step out after you fire.",
      "Feather the trigger if you must shoot a bit farther. A full hold is for corners and tight space.",
      "A close-range automatic. Mid-range is a bad fight.",
    ],
  },
  LightRifle: {
    facts: [
      "Zooming switches the gun. Hip fire is a three-round burst. Zoom combines that into one stronger shot.",
      "Going into zoom is a bit slower than the other precision rifles.",
      "Hip is for mid-range. Zoom is for long sightlines.",
    ],
  },
};
