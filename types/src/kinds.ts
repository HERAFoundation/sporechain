export const ENTRY_KINDS = {
  MIRRORED_RECORD: "mirroredRecord",
  MIRRORED_DOCUMENT: "mirroredDocument",
  ARCHIVED_ATPROTO_RECORD: "archivedAtprotoRecord",
  PINNING_ATTESTATION: "pinningAttestation",
  WITNESS: "witness",
} as const

export type EntryKind = (typeof ENTRY_KINDS)[keyof typeof ENTRY_KINDS]
