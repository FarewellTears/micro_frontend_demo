export function assign() {
  for (let i = arguments.length - 1; i > 0; i--) {
    for (let key in arguments[i]) {
      if (key === "__proto__") {
        continue;
      }
      arguments[i - 1][key] = arguments[i][key];
    }
  }
  return arguments[0];
}
