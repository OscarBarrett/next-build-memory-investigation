# Next.js Build Memory Investigation

Based on the starter template.

[memory-profiler](https://pypi.org/project/memory-profiler/) is used for memory graphs.

```bash
python3 -m pip install memory_profiler
python3 -m pip install matplotlib
```

## Description

This repo generates a large number of basic components, as well as pages that render all of the components.

Page generation options are:

- `npm run testDirect`: Generate pages with direct imports to the component
- `npm run testBarrelFile`: Generate pages with all component imports via a barrel (index.js) file
- `npm run testMixed`: Generate pages with half the components imported directly, and half through a barrel file
- `npm run testAll`: Generate all of the above.

The above scripts will:

- Remove any existing pages in `pages/test`
- Remove any existing components in `components`
- Generate the components
- Generate the pages
- Delete `.next`
- Run build via `mprof`
- Plot the results from `mprof` to an image (found in the base dir)

## Config

You can tweak the number of components and pages generated in [scripts/helper.js](scripts/helper.js).

By default this is 1000 components and 20 pages.

When running `testAll`, as it generates all 3 types of pages you'll end up with 3x the pages.
