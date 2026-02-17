# Sporechain Lexicon

**Repo**: `HERAFoundation/sporechain-lexicon`
**Purpose**: ATProto lexicons for biodiversity preservation

This is a schema-only repository — no runtime code, no dependencies. It defines JSON lexicon schemas for representing biodiversity data on the AT Protocol (the decentralized protocol behind Bluesky). The project is maintained by the HERA Foundation.

## Repository Structure

```
lexicons/
├── profile.json                        # User profile record (app.bsky.actor.profile)
└── network/sporechain/
    └── entry.json                      # Biodiversity entry record (network.sporechain.entry)
```

## Schemas

**`app.bsky.actor.profile`** (`profile.json`) — A standard Bluesky-compatible user profile. Key: `literal:self`. Fields: `displayName` (max 64 graphemes), `description` (max 256 graphemes), `avatar` (PNG/JPEG blob, max 1MB), `banner` (PNG/JPEG blob, max 1MB), `labels` (self-label values), `joinedViaStarterPack` (strong ref), `createdAt` (datetime). No required fields.

**`network.sporechain.entry`** (`entry.json`) — The core biodiversity record. Described in detail below.

---

## Entry Spec: `network.sporechain.entry`

A record type for representing biodiversity data on ATProto. Each entry is keyed by a **TID** (Timestamp ID) and represents a single biodiversity record — a species, genus, or other taxonomic unit. Entries can reference external data via IPFS and form hierarchies through parent references.

### Fields

| Field | Type | Required | Constraints | Description |
|---|---|---|---|---|
| `subject` | `string` | **Yes** | max 512 chars | Scientific name of the organism or taxon. Primary identifier for the record. |
| `createdAt` | `string` (datetime) | **Yes** | ISO 8601 | Timestamp of record creation. |
| `tags` | `array<string>` | No | max 20 items, each max 100 chars | Searchable tags for discovery. Used for categorization beyond the scientific name (e.g. habitat, region, conservation status). |
| `data` | `object` | No | max 10,000 graphemes | Inline structured content embedded directly in the record. |
| `cid` | `string` | No | max 128 chars | IPFS Content Identifier. Links the entry to richer external data (images, datasets, full descriptions) stored on IPFS. |
| `parents` | `array<string>` (AT-URIs) | No | max 3 items, each max 256 chars | References to parent entries for modeling taxonomic hierarchy. A species entry can point to its genus, a genus to its family, etc. |

### Example Record

```json
{
  "subject": "Amanita muscaria",
  "tags": ["fungi", "basidiomycota", "psychoactive"],
  "cid": "bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
  "parents": ["at://did:plc:abc123/network.sporechain.entry/3k2la7b"],
  "createdAt": "2026-01-15T12:00:00.000Z"
}
```

**What this record describes**: An entry for *Amanita muscaria* (fly agaric mushroom). It is tagged as a fungus in the phylum Basidiomycota with psychoactive properties. The `cid` points to an IPFS object containing richer data (images, habitat info, chemical composition, etc.) that would be too large to store inline. The `parents` array contains a single AT-URI pointing to a parent entry — likely the genus *Amanita* — which itself could reference the family Amanitaceae, forming a taxonomic chain. The `data` field is omitted here since external data is referenced via `cid` instead.

---

## Design Highlights

- **Decentralized** — Built on ATProto with IPFS references via CID fields. No central server owns the data.
- **Taxonomic hierarchy** — The `parents` field (up to 3 AT-URIs) models biological classification as a linked graph across the network.
- **Flexible** — Most fields are optional. Data can live inline (`data`) or externally on IPFS (`cid`) or both.
- **Discoverable** — The `tags` array enables search and categorization across the network.
- **Minimal** — Schema-only repo with no runtime code or dependencies. Just two JSON lexicon files.

## Project History

The schema evolved through several iterations: started as a "species record," was revised and renamed to a "taxon record," then renamed again to the current `network.sporechain.entry` for maximum flexibility. The `cid` field was made optional, a `previous` field was removed, and a profile record was added. 7 commits total on `main`.
