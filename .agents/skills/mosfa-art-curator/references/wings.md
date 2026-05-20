# MOSFA Museum Wings

Use museum wings to place works by artistic lineage, visual language, and curatorial argument. If an existing `era` or `category` appears in `src/data/artworks.yaml`, prefer the established spelling.

## Core Wings

- **Crustacean Renaissance Wing**: Renaissance, High Renaissance, mythic, sacred, civic-humanist, and classical translations.
- **Baroque & Dramatic Realism**: Dutch Golden Age, chiaroscuro, intimate portraiture, courtly drama, devotional realism.
- **Impressionist Reef**: Impressionism, post-impressionist color, gardens, reflected light, outdoor perception, reef villages.
- **Romantic Abyss**: Sublime seascapes, solitary contemplation, storms, fog, ruin, pilgrimage, vast natural drama.
- **Tidal Print Archive**: Ukiyo-e, print traditions, graphic maritime scenes, wave studies, fleet or labor imagery.
- **Modernist Tank**: Modernism, abstraction, constructivism, propaganda, mathematical graphics, industrial forms.
- **Surrealist Depths**: Surrealism, dream logic, impossible bodies, filmic strangeness, symbolic landscapes.
- **Pop Art Aquarium**: Pop Art, silkscreen icons, celebrity repetition, product culture, mass-media translation.
- **Abstract Currents**: Non-representational work, movement studies, symbolic geometry, action painting, formal experiments.
- **Comic & Mass Culture Pavilion**: Comic covers, superheroes, serial imagery, genre illustration, pulp spectacle.

## Placement Guidance

Choose the wing that describes the artwork's dominant historical or stylistic language, not merely its subject matter.

Examples:

- A Vermeer-like portrait belongs in Baroque & Dramatic Realism, even if the pearl is culturally important.
- A Kandinsky-like abstraction belongs in Modernist Tank or Abstract Currents depending on whether the site wants an era or a category.
- A Hokusai-like wave scene belongs in Tidal Print Archive, with categories such as Ukiyo-e Currents or Maritime Labor.
- A Soviet-style poster belongs in Modernist Tank, with categories for Socialist Propaganda, labor, fleet, or space-program imagery.

When adding website metadata:

- `era` should be a single museum wing.
- `categories` should be a list of narrower curatorial tags.
- Avoid inventing a new wing if an existing one covers the work.
- Invent a new category only when the existing taxonomy cannot describe the accession cleanly.
