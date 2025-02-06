let errorHandlers = [];

export function handleAppError(err, app, newStatus) {
  const transformedErr = transformErr(err, app, newStatus);

  if (errorHandlers.length) {
    errorHandlers.forEach((handler) => handler(transformedErr));
  } else {
    setTimeout(() => {
      throw transformedErr;
    });
  }
}
