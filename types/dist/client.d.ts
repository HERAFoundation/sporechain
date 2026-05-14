import type { AtpAgent } from "@atproto/api";
import { type SporechainEntry } from "./entry.js";
export interface CreateEntryResult {
    uri: string;
    cid: string;
}
export interface ListEntriesResult {
    entries: Array<{
        uri: string;
        cid: string;
        value: SporechainEntry;
    }>;
    cursor?: string;
}
/** Creates a network.sporechain.entry record on the agent's PDS. Auth is the caller's responsibility. */
export declare function createEntry(agent: AtpAgent, entry: SporechainEntry): Promise<CreateEntryResult>;
/** Lists network.sporechain.entry records for a given DID. Auth is the caller's responsibility. */
export declare function listEntries(agent: AtpAgent, did: string, options?: {
    limit?: number;
    cursor?: string;
}): Promise<ListEntriesResult>;
//# sourceMappingURL=client.d.ts.map