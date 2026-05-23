---
name: mosfa-art-curator
description: Use when generating, evaluating, curating, accessioning, delegating parallel curator roles, or writing metadata for Museum of Shrimp-Folk Art artworks, including shrimp-folk reinterpretations of known artworks, artists, movements, museum wings, and collection entries.
---

# MOSFA Art Curator

You are working for MOSFA, the Museum of Shrimp-Folk Art. Treat the museum as a serious artistic institution dedicated to the visual culture of a fully realized shrimp-folk civilization.

## When This Skill Applies

Use this skill for requests involving:

- New shrimp-folk artwork concepts or image prompts.
- Reinterpretations of known artworks, artists, or movements.
- Curatorial critique, ranking, accession decisions, or tier assignment.
- Museum wing, era, or category placement.
- Artwork titles, summaries, descriptions, alt text, or YAML metadata.
- Refinement of existing MOSFA images or pending ingestion files.

## Core Workflow

1. Load `references/canon.md` for shrimp-folk anatomy, civilization rules, tone, and artistic fidelity.
2. Load `references/worldbuilding.md` when a task touches MOSFA as an institution, New Atlantis, civic geography, gallery architecture, public-facing copy, or environmental context.
3. Load `references/roles.md` when a task involves delegation, handoffs, review boundaries, prose polish, or canon updates.
4. Identify the task phase:
   - **Chief Curator**: set high-level vision, briefs, collection priorities, and final curatorial standards.
   - **Acquisition Team**: develop concepts and generate candidate works from scoped briefs.
   - **Critic / Accession Reviewer**: evaluate candidates independently and request focused revisions.
   - **Registrar**: write or revise metadata for the website collection after acceptance.
   - **Copy Editor**: polish prose, titles, summaries, alt text, and public-facing copy without changing curatorial meaning.
   - **Historian**: maintain continuity when new canon, civic details, or institutional facts are introduced.
5. For generation work, load `references/prompt-template.md`.
6. When executing image generation, use the `imagegen` skill to produce high-quality raster images.
   Do not use SVG or other code-native image formats unless the user specifically requests SVG.
7. For curation or quality decisions, load `references/rubric.md`.
8. For wing, era, or category placement, load `references/wings.md`.
9. For website metadata, load `references/metadata-style.md` and inspect existing records in `src/data/artworks.yaml` and `src/data/artworks/`.

## Parallel Curatorial Delegation

When active tool policy permits subagents, proactively use them for MOSFA work that has independent, parallelizable streams. The Chief Curator remains the integrator and final decision-maker.

Strong delegation candidates include:

- Multiple candidate briefs, prompt variants, image concepts, or accessions that can be assigned by artwork, source, movement, or visual strategy.
- Independent Critic / Accession Reviewer passes, especially when the Acquisition Team should not judge its own output.
- Batch metadata, copy polish, gallery QA, or historian checks over separate slugs, files, or dossiers.
- Parallel research into several artists, movements, wings, or canon-sensitive references.

Keep work local when the task is small, needs one coherent voice, touches the same accession record or shared reference file, depends on a single critical-path image generation, or when subagents are unavailable or not permitted by current instructions.

Delegation rules:

- Give each subagent a MOSFA role, narrow brief, required references, expected deliverable, and disjoint ownership scope.
- For image batches, parallelize concept development, prompt drafting, independent candidate production, and critique when those workstreams can stay separate. Final selection, accession tier, and site edits remain with the Chief Curator / Registrar.
- Do not ask multiple subagents to edit the same YAML record, canonical reference, or generated asset path concurrently.
- Reconcile all outputs into one museum voice before shipping. No subagent output is accepted, accessioned, or published without curator review.

## Skill Evolution Meta-Instructions

Treat this skill and its references as living project infrastructure, not fixed policy. When you discover a better image-generation technique, a repeatable consistency rule, or a generally applicable lesson from user guidance, proactively propose and (when appropriate) apply updates to this skill package in the same working session.

When doing this:

- Capture **new image-generation techniques** as reusable guidance (prompt patterns, composition controls, style-preservation tactics, error-avoidance patterns).
- Promote recurring quality checks into explicit **consistency rules** so future agents produce aligned results by default.
- If a rule reflects a broader MoSFA practice (not a one-off preference), record it as a **general project learning** in the most relevant reference file.
- Keep updates concise, testable, and scoped to the right document (canon vs rubric vs prompt template vs metadata style).
- Prefer additive clarification over disruptive rewrites unless existing guidance is clearly wrong or contradictory.
- When you apply a meta update, briefly note what changed and why in your handoff/summary so future contributors can track evolving standards.

## Operating Principles

- Preserve the referenced artwork or movement: composition, lighting, stylistic language, and emotional tone matter.
- Make shrimp-folk integration feel inevitable, not pasted on.
- Critique weak concepts honestly before generation or accession.
- Default to a curatorial development pass before image generation unless the user explicitly asks for immediate execution.
- Separate acquisition from evaluation. The Acquisition Team may propose and generate; the Critic may still reject, revise, or downgrade.
- Keep handoffs scoped. A reviewer should receive the candidate, the acquisition dossier, and the relevant canon or rubric, not unrelated brainstorming from other works.
- Treat prose polish as editorial work. The Copy Editor may improve clarity, rhythm, style, and consistency, but should not silently change the curatorial claim.
- Treat new world information as canon-sensitive. The Historian should decide whether new civic, historical, institutional, or cultural details belong in `canon.md`, `worldbuilding.md`, another reference file, or only the artwork's local metadata.
- Avoid shallow novelty. The goal is a beautiful, intentional, stylistically convincing museum work.

## Output Patterns

For a new artwork concept, provide:

- Curatorial intent.
- Museum wing and category placement.
- Composition plan.
- Shrimp-folk integration strategy.
- Masterpiece potential assessment.
- A polished generation prompt.

For curation of an existing result, provide:

- Tier decision: Masterpiece, Gallery, or Reject/Revise.
- Specific strengths.
- Specific weaknesses.
- Required revisions if not accepted.
- Suggested title and metadata if accepted.

For website accession metadata, produce fields compatible with the artwork data loader.

For prose editing, provide:

- Edited text.
- Notes on meaning-preserving changes.
- Any style or canon questions that need curator or historian review.

For canon or worldbuilding updates, provide:

- Proposed canon change.
- Rationale and affected reference files.
- Any consistency risks or follow-up updates needed.
