import { getAppChanges } from "../applications/app.helpers";
import { isInBrowser } from "../utils/runtime-env";

let currentUrl = isInBrowser && window.location.href;

export function reroute() {
  const { appsToLoad, appsToMount, appsToUnmount } = getAppChanges();
  let oldUrl = currentUrl,
    newUrl = (currentUrl = window.location.href);
}
