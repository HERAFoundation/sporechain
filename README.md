# Sporechain

Sporechain defines a minimal, shared record type for biodiversity data on [AT Protocol](https://atproto.com/). The protocol layer is deliberately small — a single entry type with five fields — leaving categorization, curation, and content infrastructure to the federation layer above.

## The entry

```
network.sporechain.entry
├── subject    (string, required) — Scientific name. The taxonomic anchor.
├── tags       (string[], max 8) — Classification tags.
├── cid        (string) — IPFS CID pointing to content payload.
├── parents    (at-uri[], max 3) — DAG linkage to parent entries.
└── createdAt  (datetime, required)
```

The entry is the link, not the content. Content lives on IPFS. Entries are lightweight, signed, and portable.

There is no separate taxon record type. A taxon is an entry that other entries point to via `parents`. Canonicality is determined by federation labelers, not by schema.

## Namespace

`network.sporechain` resolves to `sporechain.network`.

## Lexicon

[`lexicons/network/sporechain/entry.json`](lexicons/network/sporechain/entry.json)

## License

MIT
