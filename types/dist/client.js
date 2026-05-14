import { SPORECHAIN_COLLECTION } from "./entry.js";
/** Creates a network.sporechain.entry record on the agent's PDS. Auth is the caller's responsibility. */
export async function createEntry(agent, entry) {
    const res = await agent.api.com.atproto.repo.createRecord({
        repo: agent.session?.did ?? "",
        collection: SPORECHAIN_COLLECTION,
        record: entry,
    });
    return { uri: res.data.uri, cid: res.data.cid };
}
/** Lists network.sporechain.entry records for a given DID. Auth is the caller's responsibility. */
export async function listEntries(agent, did, options) {
    const res = await agent.api.com.atproto.repo.listRecords({
        repo: did,
        collection: SPORECHAIN_COLLECTION,
        limit: options?.limit,
        cursor: options?.cursor,
    });
    return {
        entries: res.data.records.map((r) => ({
            uri: r.uri,
            cid: r.cid,
            value: r.value,
        })),
        cursor: res.data.cursor,
    };
}
//# sourceMappingURL=client.js.map