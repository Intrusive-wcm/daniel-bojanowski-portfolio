# Daniel Bojanowski — Professional Portfolio

Professional portfolio of a Financial Analyst focused on financial systems, management reporting and process automation.

**Website:** https://intrusive-wcm.github.io/daniel-bojanowski-portfolio/

## Selected work

- **Morvenesse:** independent portfolio project using synthetic data, with a public demo.
- **FinAce:** independent personal project presented through portfolio previews; local-first and under active development.
- **SAP LSMW:** joint academic case study covering data migration, mapping and validation, with an anonymised report.

## Local development

Built with HTML, CSS, minimal JavaScript and Vite. Requires Node.js 24 and npm.

```sh
npm ci
npm run dev
```

## Production preview

```sh
npm run build
npm run preview
```

## Deployment

GitHub Actions builds the site and deploys only `dist/` to GitHub Pages on pushes to `main`. The workflow can also be run manually. Set **Settings → Pages → Source** to **GitHub Actions**. Vite's base path is `/daniel-bojanowski-portfolio/`.

Project screenshots and the academic report are portfolio presentation assets. This repository does not contain the source code or private data of the featured projects.
