# VeriDoc AI prototype

## Outcome
Build a presentation-ready, demo-mode document screening workspace for authorized reviewers. The dashboard is the first screen, with clearly fictional sample data and an always-visible limitation that AI screening is a risk assessment, not official identity verification.

## Experience
- Establish an enterprise dark-blue shell with VeriDoc AI identity, section navigation, reviewer context, demo-mode banner, and responsive mobile navigation.
- Create the dashboard with KPI cards, risk distribution, screening trend, recent activity, pipeline progress, and clear sample-data labeling.
- Create the screening workflow with drag-and-drop-style upload, supported format guidance, upload state, preview placeholder, and an explicit Demo Mode analysis action.
- Create analysis, document viewer, history, and report pages using shared fictional results so the experience is navigable end to end.
- Add browser-only interactions for selecting a file, running the demo analysis, filtering history, printing a report, and downloading a report summary; keep API boundaries ready for later connection without claiming real AI processing.

## Technical details
- Use TanStack Router route files for `/`, `/screening`, `/analysis`, `/viewer`, `/history`, and `/reports/$id`.
- Keep demo entities and result types in a shared client-safe module.
- Keep colors, typography, shadows, radii, and motion in `src/styles.css` semantic tokens; use existing design-system Button and Lucide icons.
- Add unique route metadata for every content route and preserve the root route as the first screen.
- Verify the preview at desktop and mobile widths and check for console/runtime errors after edits.
