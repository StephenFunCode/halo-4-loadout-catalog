import type { ClickDetail } from "./abilityDetails";

/** Halo 4 loadout mechanics. Halopedia and 343 sandbox notes first; Boltshot charged range is Title Update 1.03. */
export const SECONDARY_DETAILS: Record<string, ClickDetail> = {
  Magnum: {
    facts: [
      "You switch to it faster than to a primary.",
      "Firing faster than the reticle can settle spreads shots at longer range.",
    ],
  },
  "Plasma Pistol": {
    facts: [
      "Charged tracking is slight. While charging, lock the reticle (three arrows inward) at range; otherwise the bolt does not home.",
      "After a charged shot the pistol overheats until it cools. Holding a charge also drains the battery; hold too long and you can empty the gun without firing.",
      "A charged bolt EMPs vehicles, stopping them for a few seconds. Wheelman reduces that EMP.",
      "Hold to charge a larger bolt. A hit strips full shields. It does not kill a full-health player by itself.",
      "Tap fire is a slow plasma bolt. You have to lead, and it is mainly useful up close.",
    ],
  },
  Boltshot: {
    facts: [
      "The burst does the same damage even if only one bolt is left. It does not get a headshot bonus.",
      "A hip magazine cannot finish a full-shield player. You have to reload, then land the last shots or a headshot.",
      "Charged one-hit kills reach about 4.6 meters.",
      "Hold to charge a close-range burst of five bolts. In range, that burst can kill a full-shield player. Past that it often only strips shields.",
      "Hip fire is a precision pistol with no zoom, so headshots are harder than with the Magnum.",
    ],
  },
};
