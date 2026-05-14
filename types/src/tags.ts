/** Published tag conventions for Sporechain entries. Not enforced — constants for consistency. */

export const TAG_RECORD_TYPES = {
  TAXON: "taxon",
  CULTURE: "culture",
  OBSERVATION: "observation",
  BREEDING_RECORD: "breeding-record",
  SEED: "seed",
  SPECIMEN: "specimen",
  ACCESSION: "accession",
  RESEARCH: "research",
  GROWING_GUIDE: "growing-guide",
} as const

export const TAG_KINGDOMS = {
  FUNGI: "fungi",
  PLANTAE: "plantae",
  ANIMALIA: "animalia",
} as const

export const TAG_PROVENANCE = {
  WILD_COLLECTED: "wild-collected",
  TISSUE_CLONE: "tissue-clone",
  SPORE_ISOLATION: "spore-isolation",
  CROSS_BRED: "cross-bred",
  HEIRLOOM: "heirloom",
  LANDRACE: "landrace",
} as const

export type TagRecordType = (typeof TAG_RECORD_TYPES)[keyof typeof TAG_RECORD_TYPES]
export type TagKingdom = (typeof TAG_KINGDOMS)[keyof typeof TAG_KINGDOMS]
export type TagProvenance = (typeof TAG_PROVENANCE)[keyof typeof TAG_PROVENANCE]
