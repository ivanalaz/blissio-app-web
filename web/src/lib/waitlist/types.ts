export type WaitlistPayload = {
  email: string;
  /** Optional honeypot field — should stay empty for bots */
  company?: string;
  /** Optional origin tag, e.g. `landing_page` (default on server) */
  source?: string;
};
