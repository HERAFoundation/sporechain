# Sporechain Entry Spec

`network.sporechain.entry` — A record type for representing biodiversity data on the AT Protocol.

## Overview

Each entry is keyed by a **TID** (Timestamp ID) and represents a single biodiversity record, such as a species, genus, or other taxonomic unit. Entries can reference external data via IPFS and form hierarchies through parent references.

## Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `subject` | `string` | **Yes** | Scientific name (max 512 characters) |
| `createdAt` | `string` (datetime) | **Yes** | Timestamp of record creation |
| `tags` | `array<string>` | No | Searchable tags for discovery (max 20 items, each max 100 characters) |
| `data` | `object` | No | Inline content (max 10,000 graphemes) |
| `cid` | `string` | No | IPFS Content Identifier for referencing external data (max 128 characters) |
| `parents` | `array<string>` (AT-URIs) | No | References to parent entries for taxonomic hierarchy (max 3 items, each max 256 characters) |

## Details

### `subject`

The scientific name of the organism or taxon this entry describes. This is the primary identifier for the record.

### `tags`

An optional array of short strings used for search and discovery across the network. Useful for categorization beyond the scientific name (e.g., habitat, region, conservation status).

### `data`

An optional inline object for embedding structured content directly in the record. Capped at 10,000 graphemes.

### `cid`

An optional IPFS Content Identifier. Use this to link an entry to richer external data (images, datasets, full descriptions) stored on IPFS.

### `parents`

An optional array of up to 3 AT-URIs pointing to parent entries. This enables modeling of taxonomic relationships — for example, a species entry can reference its genus, and a genus can reference its family.

## Example

```json
{
  "subject": "Amanita muscaria",
  "tags": ["fungi", "basidiomycota", "psychoactive"],
  "cid": "bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
  "parents": ["at://did:plc:abc123/network.sporechain.entry/3k2la7b"],
  "createdAt": "2026-01-15T12:00:00.000Z"
}
```
