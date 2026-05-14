# Sporechain

Sporechain defines a signed stewardship attestation record for biodiversity data on [AT Protocol](https://atproto.com/). The protocol layer is deliberately small — a single entry type — leaving categorization, curation, and content infrastructure to the federation layer above.

## The entry

```
network.sporechain.entry
├── subject          (string, required)   — Scientific name. The taxonomic anchor.
├── kind             (string, required)   — What this entry does (see below).
├── cid              (string)             — IPFS CID pointing to content payload.
├── sourceUri        (string)             — Original locator (https://, at://, doi:).
├── sourceCollection (string)             — Semantic source label (e.g. gbif:occurrence:1234).
├── mirroredAt       (datetime)           — When content was pinned/snapshotted.
├── tags             (string[])           — Classification: record type, kingdom, provenance, custom.
├── parents          (at-uri[])           — DAG linkage for lineage, provenance, context.
└── createdAt        (datetime, required)
```

The entry is a signed pointer, not a container. Content lives on IPFS. Identity lives on AT Protocol. The entry sits between them as a thin index: "this identity attests to this content at this time."

## Entry kinds

The `kind` field uses `knownValues` — these five are documented conventions, but the field accepts any string for future extensibility.

- **mirroredRecord** — Off-protocol structured data (DwC-A row, GBIF snapshot) pinned to IPFS.
- **mirroredDocument** — Off-protocol unstructured content (NEPA PDF, field guide scan) pinned to IPFS.
- **archivedAtprotoRecord** — On-protocol record snapshotted because the source is unreliable or at risk.
- **pinningAttestation** — Live AT Protocol record the federation has formally committed to stewarding.
- **witness** — Timestamp-only attestation. No new pin, just a signed statement that something existed.

## Lexicon

[`lexicons/network/sporechain/entry.json`](lexicons/network/sporechain/entry.json)

## License

MIT
