export const truthy = (x: unknown) => (x!== false) && existy(x)
export const existy = (x: unknown) => x != null
