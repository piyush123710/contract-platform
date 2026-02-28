export const STATUS = {
  CREATED: "Created",
  APPROVED: "Approved",
  SENT: "Sent",
  SIGNED: "Signed",
  LOCKED: "Locked",
  REVOKED: "Revoked",
};

export const allowedTransitions = {
  Created: ["Approved", "Revoked"],
  Approved: ["Sent"],
  Sent: ["Signed", "Revoked"],
  Signed: ["Locked"],
  Locked: [],
  Revoked: [],
};

export const canTransition = (current, next) => {
  return allowedTransitions[current]?.includes(next);
};
