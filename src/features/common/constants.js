export const status = Object.freeze({
  DISABLED: 0,   // Pool is not visible in the UI
  ACTIVE: 1,     // Pool is active
  ENDED: 2,      // Pool is no longer earning. Deposits are disabled.
  REFUNDING: 3,  // Pool is ended and offering refunds.
});