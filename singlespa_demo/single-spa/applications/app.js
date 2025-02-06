import {
  NOT_LOADED,
  LOADING_SOURCE_CODE,
  BOOTSTRAPPING,
  NOT_BOOTSTRAPPED,
  NOT_MOUNTED,
  MOUNTED,
  shouldBeActive,
} from "./app.helpers";

import { assign } from "../utils/assign";
import { isInBrowser } from "../utils/runtime-env";

export function getAppChanges() {
  const appsToUnmount = [],
    appsToLoad = [],
    appsToMount = [];

  apps.forEach((app) => {
    let appShouldBeActive = shouldBeActive(app);
    switch (app.status) {
      case NOT_LOADED:
      case LOADING_SOURCE_CODE:
        if (appShouldBeActive) {
          appsToLoad.push(app);
        }
        break;
      case NOT_BOOTSTRAPPED:
      case BOOTSTRAPPING:
      case NOT_MOUNTED:
        if (appShouldBeActive) {
          appsToMount.push(app);
        }
        break;
      case MOUNTED:
        if (!appShouldBeActive) {
          appsToUnmount.push(app);
        }
        break;
      // 其他的状态不做处理
    }
  });

  return { appsToLoad, appsToMount, appsToUnmount };
}

// 注册应用 路径匹配后加载应用
export const apps = [];

export function registerApplication(appName, loadApp, activeWhen, customProps) {
  const registeration = {
    name: appName,
    loadApp,
    activeWhen,
    customProps,
  };

  apps.push(assign({ status: NOT_LOADED }, registeration));

  // 应用被加载、被移除、被挂载的判别
  if (isInBrowser) reroute(); // 重写路由
}
