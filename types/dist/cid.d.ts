/**
 * Compute a CIDv1 (dag-cbor, sha2-256, base32) from arbitrary JSON-serializable content or a Buffer.
 * Matches the CID format returned by hera-node's pin endpoint.
 */
export declare function computeCID(content: unknown): Promise<string>;
//# sourceMappingURL=cid.d.ts.map