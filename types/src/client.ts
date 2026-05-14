import type { AtpAgent } from "@atproto/api"
import { SPORECHAIN_COLLECTION, type SporechainEntry } from "./entry.js"

export interface CreateEntryResult {
  uri: string
  cid: string
}

export interface ListEntriesResult {
  entries: Array<{ uri: string; cid: string; value: SporechainEntry }>
  cursor?: string
}

/** Creates a network.sporechain.entry record on the agent's PDS. Auth is the caller's responsibility. */
export async function createEntry(
  agent: AtpAgent,
  entry: SporechainEntry,
): Promise<CreateEntryResult> {
  const res = await agent.api.com.atproto.repo.createRecord({
    repo: agent.session?.did ?? "",
    collection: SPORECHAIN_COLLECTION,
    record: entry as unknown as Record<string, unknown>,
  })
  return { uri: res.data.uri, cid: res.data.cid }
}

/** Lists network.sporechain.entry records for a given DID. Auth is the caller's responsibility. */
export async function listEntries(
  agent: AtpAgent,
  did: string,
  options?: { limit?: number; cursor?: string },
): Promise<ListEntriesResult> {
  const res = await agent.api.com.atproto.repo.listRecords({
    repo: did,
    collection: SPORECHAIN_COLLECTION,
    limit: options?.limit,
    cursor: options?.cursor,
  })
  return {
    entries: res.data.records.map((r) => ({
      uri: r.uri,
      cid: r.cid,
      value: r.value as SporechainEntry,
    })),
    cursor: res.data.cursor,
  }
}
