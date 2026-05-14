/** Published tag conventions for Sporechain entries. Not enforced — constants for consistency. */
export declare const TAG_RECORD_TYPES: {
    readonly TAXON: "taxon";
    readonly CULTURE: "culture";
    readonly OBSERVATION: "observation";
    readonly BREEDING_RECORD: "breeding-record";
    readonly SEED: "seed";
    readonly SPECIMEN: "specimen";
    readonly ACCESSION: "accession";
    readonly RESEARCH: "research";
    readonly GROWING_GUIDE: "growing-guide";
};
export declare const TAG_KINGDOMS: {
    readonly FUNGI: "fungi";
    readonly PLANTAE: "plantae";
    readonly ANIMALIA: "animalia";
};
export declare const TAG_PROVENANCE: {
    readonly WILD_COLLECTED: "wild-collected";
    readonly TISSUE_CLONE: "tissue-clone";
    readonly SPORE_ISOLATION: "spore-isolation";
    readonly CROSS_BRED: "cross-bred";
    readonly HEIRLOOM: "heirloom";
    readonly LANDRACE: "landrace";
};
export type TagRecordType = (typeof TAG_RECORD_TYPES)[keyof typeof TAG_RECORD_TYPES];
export type TagKingdom = (typeof TAG_KINGDOMS)[keyof typeof TAG_KINGDOMS];
export type TagProvenance = (typeof TAG_PROVENANCE)[keyof typeof TAG_PROVENANCE];
//# sourceMappingURL=tags.d.ts.map