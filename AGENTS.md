<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

## Website architecture

- Keep Brand It as a single-page frontend using section anchors, not separate routes, because the enquiry journey is continuous.
- Keep editable brand content, service categories, project metadata and enquiry validation in a typed shared configuration, so client revisions stay contained.
- Use Radix primitives for project dialogs and service accordions, with semantic CSS tokens, so custom presentation retains accessible behavior.
- Keep the enquiry handler isolated and demo-only until an endpoint is explicitly integrated, so frontend demonstrations never imply delivery.
- Keep artwork proportions fixed in CSS and optimize local generated assets, so scrolling cannot expand the project visuals.
