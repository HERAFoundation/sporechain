export const SPORECHAIN_COLLECTION = "network.sporechain.entry"

export interface SporechainEntry {
  /** Scientific name (binomial nomenclature), 1–300 chars. */
  subject: string
  /** What this entry is doing operationally. Extensible; known values in ENTRY_KINDS. */
  kind: string
  /** IPFS CID pointing to content payload, max 512 chars. */
  cid?: string
  /** Original locator: at:// for on-protocol, https:// or doi: for off-protocol. */
  sourceUri?: string
  /** Semantic label for the source system, e.g. "gbif:occurrence:1234". */
  sourceCollection?: string
  /** ISO datetime when content was pinned or snapshotted. */
  mirroredAt?: string
  /** Classification tags: record type, kingdom, provenance, custom. */
  tags?: string[]
  /** AT-URIs to other network.sporechain.entry records — entry-to-entry DAG edges only. */
  parents?: string[]
  /** ISO datetime when this record was created. */
  createdAt: string
}
