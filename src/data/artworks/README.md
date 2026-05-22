# Artwork Drop-In Records

Add new artwork accessions in this directory as one YAML file per artwork:

```yaml
title: Example Title
slug: example-title
artistReference: Artist or movement
sourceWork: Source work or study type
yearOrPeriod: Period translation
era: Museum Wing
categories:
  - Category
image: artworks/example-title.png
imageAlt: Plain visual description.
summary: One-sentence curatorial argument.
description: One or two public-facing label sentences.
featured: false
published: true
```

Name files after the slug, such as `example-title.yaml`. New accession tasks should create a new file here instead of inserting records into `src/data/artworks.yaml`; that keeps parallel threads from fighting over the same shared hunk.

Use `src/data/artworks.yaml` only when revising records that already live there or when doing a deliberate data migration.
