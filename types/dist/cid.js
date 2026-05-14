import { CID } from "multiformats/cid";
import * as dagCBOR from "@ipld/dag-cbor";
import { sha256 } from "multiformats/hashes/sha2";
/**
 * Compute a CIDv1 (dag-cbor, sha2-256, base32) from arbitrary JSON-serializable content or a Buffer.
 * Matches the CID format returned by hera-node's pin endpoint.
 */
export async function computeCID(content) {
    const bytes = content instanceof Uint8Array ? content : dagCBOR.encode(content);
    const hash = await sha256.digest(bytes);
    const cid = CID.createV1(dagCBOR.code, hash);
    return cid.toString();
}
//# sourceMappingURL=cid.js.map