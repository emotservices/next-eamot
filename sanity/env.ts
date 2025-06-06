export const apiVersion = "2023-05-26";

export const dataset = "production";

export const projectId = "u7zld9ih";

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
