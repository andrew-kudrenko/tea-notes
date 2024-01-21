export type DeepEmpty<T> = T extends object ? { [K in keyof T]: DeepEmpty<T[K]> } : T | null;

export type DeepEmptyOmit<T, Keys extends keyof T> = T extends object
	? { [K in keyof T]: K extends Keys ? T[K] : DeepEmpty<T[K]> }
	: T | null;
