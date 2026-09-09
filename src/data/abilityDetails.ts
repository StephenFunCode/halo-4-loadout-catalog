export type ClickDetail = {
  facts: string[];
};

/** Halo 4 loadout mechanics. Halopedia first; timed numbers from The Balance (Nov 2012) and named Forge threads. */
export const ABILITY_DETAILS: Record<string, ClickDetail> = {
  "Promethean Vision": {
    facts: [
      "This is the only armor ability you can use while carrying a detached turret. Any other ability drops the turret.",
      "If a cloaked player also has Stealth, their hologram stays orange and the player is blue.",
      "Cloaked players appear blue (the same color as Stealth), not orange. A hologram looks the same as a real player.",
      "It makes noise while active. An expanding pulse also shows on the motion tracker.",
    ],
  },
  "Thruster Pack": {
    facts: [
      "Unlike most abilities, it has to finish recharging before you can burst again.",
      "A mid-air thrust speeds your descent. You can turn during the burst and come out facing a new direction.",
      "You cannot fire while thrusting.",
      "A short burst in any direction, not only forward.",
    ],
  },
  "Jet Pack": {
    facts: [
      "Letting the pack rest for a moment returns some fuel. AA Efficiency restores that fuel faster.",
      "A vertical lift.",
    ],
  },
  Hologram: {
    facts: [
      "Autosentry fires on holograms. Promethean Vision cannot tell a hologram from a player unless the owner also has Stealth.",
      "Allies see it as a pip. An enemy reticle turns red on the decoy. Enemies also see it on the motion tracker.",
      "Deploying again removes the current decoy. You cannot have two at once.",
      "Shots pass through it. It is not cover. Hits make it flicker, and enough damage makes it vanish.",
      "Sends an identical copy in a straight line to wherever the reticle is pointing, then it stops.",
    ],
  },
  "Hardlight Shield": {
    facts: [
      "At the right angle it can bounce bullets, grenades, rockets, and tank rounds.",
      "You cannot jump while deploying it.",
      "Your energy shields do not recharge until the barrier drops.",
      "Small-arms fire usually cannot break it before it expires. Explosives still hurt; a plasma grenade bounces off.",
      "A front-facing hard-light barrier. You cannot fire while it is up.",
    ],
  },
  "Active Camouflage": {
    facts: [
      "Anecdotal: most of the jammer’s light-blue pips show a caret up or down for above or below. No caret means the same level as you. Halo 4’s guides and Halopedia do not document pip height.",
      "A fully still cloak can avoid Autosentry. Moving is detected. Cloaking after the sentry already has a lock does not drop that lock.",
      "The jammer paints 6 light-blue pips in a cluster around the cloaked player, which can hint at their location. Allies are yellow and enemies are red.",
      "Promethean Vision shows you blue rather than orange.",
      "Strongest while you are still. Movement, and firing, make the shimmer easier to see.",
    ],
  },
  Autosentry: {
    facts: [
      "About 5 bolts to drop shields and 4 more to kill, at roughly 1 bolt per second, aimed at the chest. About 3 DMR or Battle Rifle shots destroy it. The deploy animation locks you for about 1.5 seconds.",
      "It fires on holograms. It ignores a fully still camouflaged player, tracks moving camouflage, and keeps a lock if that player cloaks after being acquired.",
      "Its damage is low. It exists to chip shields and mark a target.",
      "Deploys a stationary hard-light drone that fires light-mass bolts at hostiles until it is destroyed or expires.",
    ],
  },
  "Regeneration Field": {
    facts: [
      "Incoming shots delay shield regen inside the field. Shielding does not speed the field; with Shielding, stepping out lets the faster fill take over.",
      "As the sphere forms, a short kinetic blast can shove vehicles, ammo crates, and rockets away. That push is a pulse on activation, not a lasting knockback.",
      "You lock in place for about 1.5 seconds and leave a stationary green sphere where you stood. It does not follow you. The sphere is about ten Spartans across.",
      "Without the field, shields wait about 6 seconds after the last hit, then fill in about 2 seconds. Inside the field there is no wait: about 3 seconds to full if you are not taking fire.",
      "Anyone inside has their energy shields restored: you, allies, and enemies. It does not block fire. The field stays until it expires.",
      "Inside the field, vision is blurry and sound is distorted. Leaving clears that up.",
    ],
  },
};
