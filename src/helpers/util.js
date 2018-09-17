export function removeElement(el) {
  el.parentNode.removeChild(el);
  return false;
}

export function keyDownListener(evt, code, func) {
  evt = evt || window.event;
  if (evt.keyCode === code) {
    func();
  }
}

export function textTruncate(text, startIndex, endIndex) {
  return text.substring(startIndex, endIndex);
}

export function ellipsis(text, startLength, endLength, ellipsis) {
  let newText;
  ellipsis = ellipsis || "...";

  newText = textTruncate(text, 0, startLength);
  newText += ellipsis;
  newText += textTruncate(text, text.length - endLength, text.length);
  return newText;
}

export function randomString(length) {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
  // return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}

export function getPlacement(placement, target, container, reference) {
  const clientH = window.innerHeight;
  const clientW = window.innerWidth;
  const boundingContainer = container.getBoundingClientRect();
  const boundingTarget = target.getBoundingClientRect();
  let x, y;

  switch (placement) {
    case "top":
      y = boundingContainer.top - boundingTarget.height;
      if (y < 0) {
        if (reference === "left" || reference === "right") {
          return placement; // Set default placement popup if container is too small
        } else {
          return getPlacement("bottom", target, container, placement);
        }
      }
      break;
    case "right":
      x = boundingContainer.right + boundingTarget.width;
      if (x > clientW) {
        const p = reference ? "top" : "left";
        return getPlacement(p, target, container, placement);
      }
      break;
    case "bottom":
      y = boundingContainer.bottom + boundingTarget.height;
      if (y > clientH) {
        const p = "top";
        return getPlacement(p, target, container, placement);
      }
      break;
    case "left":
      x = boundingContainer.left - boundingTarget.width;
      if (x < 0) {
        const p = reference ? "top" : "right";
        return getPlacement(p, target, container, placement);
      }
      break;
    default:
      placement = "top"
  }

  return placement;
}

export function getPlacementPosition(placement, target, container) {
  const boundingContainer = container.getBoundingClientRect();
  const boundingTarget = target.getBoundingClientRect();
  let top, left;

  switch (placement) {
    case "top":
      top = boundingContainer.top - boundingTarget.height + window.pageYOffset + "px";
      left = boundingContainer.left - ((boundingTarget.width - boundingContainer.width) / 2) + "px";
      break;
    case "right":
      top = boundingContainer.top - ((boundingTarget.height - boundingContainer.height) / 2) + window.pageYOffset + "px";
      left = boundingContainer.right + "px";
      break;
    case "bottom":
      top = boundingContainer.bottom + window.pageYOffset + "px";
      left = boundingContainer.left - ((boundingTarget.width - boundingContainer.width) / 2) + "px";
      break;
    case "left":
      top = boundingContainer.top - ((boundingTarget.height - boundingContainer.height) / 2) + window.pageYOffset + "px";
      left = boundingContainer.left - boundingTarget.width + "px";
      break;
    default:
      top = "-9999px";
      left = "-9999px";
  }

  return {
    placement: placement,
    top: top,
    left: left
  };
}