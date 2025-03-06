// animationUtils.js
export function setIdleFrame(sprite, lastAnim) {
  switch (lastAnim) {
    case "walk-down":
      sprite.setFrame(26);
      break;
    case "walk-left":
      sprite.setFrame(27);
      break;
    case "walk-right":
      sprite.setFrame(25);
      break;
    case "walk-up":
      sprite.setFrame(24);
      break;
    default:
      break;
  }
}
