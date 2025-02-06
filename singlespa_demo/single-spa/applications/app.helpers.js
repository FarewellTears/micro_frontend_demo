// 应用生命周期

// 应用状态
export const NOT_LOADED = "NOT_LOADED"; // 未加载
export const LOADING_SOURCE_CODE = "LOADING_SOURCE_CODE"; //
export const LOAD_ERROR = "LOAD_ERROR";

// 启动过程
export const NOT_BOOTSTRAPPED = "NOT_BOOTSTRAPPED"; // 资源加载完毕要启动但还没启动
export const BOOTSTRAPPING = "BOOTSTRAPPING"; // 启动中
export const NOT_MOUNTED = "NOT_MOUNTED"; // 没有被挂载

// 挂载流程
export const MOUNTING = "MOUNTING"; // 正在挂载
export const MOUNTED = "MOUNTED"; // 挂载完成

// 卸载流程
export const UNMOUNTING = "UNMOUNTING";

// 异常
export const SKIP_BECAUSE_BROKEN = "SKIP_BECAUSE_BROKEN";

// 检测应用状态是否被激活
export function isActive(app) {
  return app.status === MOUNTED;
}

// 检测应用是否被激活
export function shouldBeActive(app) {
  try {
    return app.activeWhen(window.location);
  } catch (err) {
    // handleAppError(err, app, SKIP_BECAUSE_BROKEN);
    return false;
  }
}
