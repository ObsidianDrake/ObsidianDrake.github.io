# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds the site on pushes to
`main` and supports manual runs from the Actions tab. It installs dependencies
with `npm ci`, builds `dist`, and deploys a Pages artifact without committing
build output to a `gh-pages` branch.

Before the first deployment, set **Settings → Pages → Build and deployment →
Source** to **GitHub Actions**. Keep the custom domain `obsidiandrake.me` configured
in Pages settings. `public/CNAME` remains in the build, but Actions deployments
use the repository's Pages custom-domain setting.

The deployment uses the `github-pages` environment; if it has branch protection
rules, allow deployments from `main`. The old `gh-pages` branch is no longer used
by this workflow and does not need to be deleted.

For local previews, use `npm run dev` or `npm run build && npm run preview`.
