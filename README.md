# Missing styles on not-found page
Next.js bug reproduction repo.

## Reproduction steps

1. `yarn dev`
2. navigate to `/`
3. navigate to `/asdf` (or any other non-existent page)

Expected result: 404 page renders correctly

Current result: 404 renders without styles from .module.css

---

I have a custom layout component `components/layout/custom-layout.tsx` which imports `.module.css` file.

I have a nested page which is wrapped in a layout which uses this custom layout component (I don't want my custom layout on every page). This page renders correctly.

I need a global 404 page which also implements the same custom layout component. This page does not render correctly.

For some reason, when I restart the dev server, on the first load the 404 page renders correclty, but after going on a different page, the 404 page breaks.

