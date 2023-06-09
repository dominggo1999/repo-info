export type ValueType<T> = T extends Promise<infer U> ? U : T;

export * from "./githubApi";
