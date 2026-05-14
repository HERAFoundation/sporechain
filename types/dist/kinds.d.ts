export declare const ENTRY_KINDS: {
    readonly MIRRORED_RECORD: "mirroredRecord";
    readonly MIRRORED_DOCUMENT: "mirroredDocument";
    readonly ARCHIVED_ATPROTO_RECORD: "archivedAtprotoRecord";
    readonly PINNING_ATTESTATION: "pinningAttestation";
    readonly WITNESS: "witness";
};
export type EntryKind = (typeof ENTRY_KINDS)[keyof typeof ENTRY_KINDS];
//# sourceMappingURL=kinds.d.ts.map