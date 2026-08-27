/**
 * The three audiences VisitorGreeter routes visitors into.
 * These are the exact values persisted to localStorage under VISITOR_TYPE_KEY.
 */
export type VisitorType = "faith" | "organization" | "individual";

/**
 * Internal app state also allows "explore" for visitors who opt out of
 * identification. It is stored under the same key so a returning explorer
 * skips the greeter too, but it is never offered as one of the three
 * identification choices and is treated separately from VisitorType.
 */
export type VisitorMode = VisitorType | "explore";

export const VISITOR_TYPE_KEY = "visitorType";

export const VISITOR_TYPE_VALUES: VisitorType[] = ["faith", "organization", "individual"];

export function isVisitorMode(value: string | null): value is VisitorMode {
  return value === "faith" || value === "organization" || value === "individual" || value === "explore";
}
