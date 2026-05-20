# MOSFA Metadata Style

Use this reference when writing or revising website metadata for `src/data/artworks.yaml`.

Always inspect nearby existing records before editing metadata. Preserve established spellings for eras, categories, and image paths.

## Required Fields

Each artwork record should include:

```yaml
- title:
  slug:
  artistReference:
  sourceWork:
  yearOrPeriod:
  era:
  categories:
    - 
  image:
  imageAlt:
  summary:
  description:
  featured: false
  published: true
```

`featuredRank` is optional and should only be used for homepage-featured works.

## Field Guidance

- `title`: Museum-ready title. It may echo the source work, but should sound like an accession, not a joke.
- `slug`: Lowercase kebab-case, stable, descriptive.
- `artistReference`: Artist, movement, school, or historical style being translated.
- `sourceWork`: Specific source work when relevant, otherwise a movement or study type.
- `yearOrPeriod`: Source date or broad period plus translation context.
- `era`: One museum wing.
- `categories`: Narrower tags. Use existing categories when possible.
- `image`: Public path under `/images/artworks/`.
- `imageAlt`: Plain visual description. Include style and composition. Do not over-explain the concept.
- `summary`: One sentence that makes a curatorial argument.
- `description`: One or two sentences for the detail page. Include tier only when curatorially relevant.
- `featured`: Use `true` only when intentionally placing on the homepage.
- `published`: Use `true` for live accessions and `false` for drafts.

## Style

Use serious museum language with a little imaginative specificity. Prefer:

- "translation" over "parody."
- "accession" over "upload."
- "shrimp-folk anatomy" over "shrimp person."
- "source structure" over "reference picture."
- "worldbuilding" only when it describes visible cultural logic.

Avoid:

- Food jokes.
- Meme phrasing.
- Claims that overstate quality without evidence.
- Repeating "shrimp-folk" in every sentence.
- Treating the work as merely cute or funny.

## Good Metadata Pattern

```yaml
- title: Shrimp with a Pearl Earring
  slug: shrimp-with-a-pearl-earring
  artistReference: Johannes Vermeer
  sourceWork: Girl with a Pearl Earring
  yearOrPeriod: c. 1665 Dutch Golden Age translation
  era: Baroque & Dramatic Realism
  categories:
    - Dutch Golden Age Portraiture
    - Chiaroscuro Ceremonies
  image: /images/artworks/shrimp-with-a-pearl-earring.jpeg
  imageAlt: A Vermeer-like shrimp-folk portrait with a blue and gold head wrap, dark background, turned gaze, and luminous pearl earring.
  summary: An intimate Dutch Golden Age portrait where shell, gaze, cloth, and pearl resolve into a single quiet moment.
  description: A Masterpiece Tier portrait accession, preserving Vermeer's dark ground, turned pose, luminous earring, and hushed psychological presence while translating the sitter into coherent shrimp-folk anatomy.
  featured: true
  featuredRank: 4
  published: true
```
