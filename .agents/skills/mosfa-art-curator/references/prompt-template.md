# MOSFA Generation Director

Before generating artwork, perform a curatorial development pass unless the user explicitly asks for immediate execution.

## Development Pass

### 1. Intent Interpretation

Expand the user's idea into a clear artistic direction:

- Identify the referenced artwork, artist, or movement.
- Determine the museum wing.
- Clarify the conceptual angle of the reinterpretation.
- State what must remain recognizable.

### 2. Compositional Planning

Analyze the original composition or movement:

- Primary focal point.
- Secondary focal points.
- Visual hierarchy.
- Major geometry, balance, framing, and gesture.
- Lighting and color logic.
- Elements that must be preserved for fidelity.

### 3. Shrimp-Folk Integration Strategy

Plan how shrimp-folk aesthetics enter the work:

- Anatomy, silhouette, posture, antennae, shell segmentation, claws, eyes.
- How manipulator claws or hybrid hands affect gesture.
- Where crustacean influence should be explicit.
- Where it should remain subtle.
- How culture, costume, architecture, ritual, or tools support the world.

Avoid overloading compositions with unnecessary shrimp motifs.

### 4. Masterpiece Potential

Evaluate the concept before generation:

- Does it have a singular visual idea?
- Does the source structure survive?
- Does shrimp-folk integration feel inevitable?
- Is there emotional or conceptual weight?
- Is the concept restrained?

If the concept is weak, critique it honestly and suggest improvements before generation.

### 5. Prompt Crafting

Write a detailed image-generation prompt that includes:

- Subject and source reference.
- Composition and camera/framing.
- Lighting.
- Style references and period language.
- Color palette.
- Texture, surface, brushwork, print quality, or materiality.
- Shrimp-folk anatomical guidance.
- Cultural or symbolic details.
- Mood and atmosphere.
- Negative constraints: no humans, no food joke, no shrimp pasted onto human bodies.

## Contact-Sheet Workflow

Use contact sheets when the strongest direction is not yet obvious, or when a project benefits from comparing many plausible options before narrowing. This is especially useful for exhibition wall photographs, installation views, artifact studies, poster/key-art directions, and reinterpretations where composition, lighting, costume, or material finish could go several ways.

For a contact sheet:

- Ask for a coherent grid of distinct variants, usually 4, 6, 9, or 12 frames.
- Keep the curatorial premise, canon constraints, and negative constraints stable across all frames.
- Vary only the dimensions that matter: camera distance, crop, lighting, wall arrangement, artifact orientation, palette, pose, period styling, or degree of shrimp-folk cultural specificity.
- Make each frame read as a serious candidate image, not a thumbnail collage, mood board, or random scatter of unrelated ideas.
- Require consistent museum-grade finish across variants: legible focal subject, controlled lighting, no humans, no food framing, no joke tone.
- If the contact sheet is for exhibition wall photography, treat each frame as a documentary installation photograph with real gallery spacing, labels, sightlines, wall scale, and visitor-free or carefully minimized views.
- After review, select one to three promising variants for refinement or regeneration instead of accessioning directly from the exploratory sheet.

Contact-sheet prompt pattern:

```markdown
Create a [4/6/9/12]-image contact sheet exploring distinct curatorially serious variants of [concept]. All frames must preserve [core source/composition/worldbuilding rule]. Vary [specific variables] while keeping [stable canon/style constraints]. Each frame should feel like a plausible finished MOSFA candidate, with museum-grade lighting, coherent shrimp-folk anatomy/culture, no humans, no food framing, and no comic novelty. Present as a clean grid of separate images for comparison.
```

For physical cultural objects and archaeological accessions:

- Prompt them as real museum objects first: single focal artifact, conservation lighting, plinth or archival support, and inspectable material construction.
- Specify how the object fits shrimp-folk anatomy or civic use instead of relying on decorative shrimp motifs.
- Prefer abstract tide, claw, molt, pearl, knot, and current notation over repeated literal shrimp drawings unless figural imagery is curatorially necessary.
- Guard against human-object defaults by naming the construction logic that makes the object non-human: antenna clearance, claw-friendly grips, shell hinges, current-resistant textiles, exoskeleton care, or water-current acoustics.
- Avoid fantasy treasure, magical glow, souvenir styling, and generic human ceremonial forms.

## Prompt Output Template

```markdown
Curatorial intent:
[One concise paragraph.]

Museum placement:
[Wing and likely categories.]

Composition plan:
[How the image should be structured.]

Shrimp-folk integration:
[How anatomy and culture enter the work.]

Masterpiece potential:
[Honest assessment and any changes needed.]

Generation prompt:
[Detailed prompt.]

Avoid:
- Humans.
- Food framing.
- Meme humor.
- Human bodies with shrimp parts attached.
- Generic imitation that loses the source composition.
```

## Immediate Generation Exception

If the user explicitly asks for immediate generation, compress the development pass internally and proceed, but still preserve the canon and negative constraints in the generated prompt.
