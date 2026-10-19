# Portfolio

React + Vite + Tailwind CSS v4.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the build
```

## Edit
| What | Where |
|---|---|
| Name, role, email, links, about text | `src/data/site.js` |
| Project cards | `src/data/projects.js` |
| Skills / tools | `src/data/stack.js` |
| Timeline | `src/data/timeline.js` |
| Colors and fonts | `src/index.css` (`@theme`, change `--color-accent`) |
| Project images | put in `public/images/`, set `image: '/images/name.png'` |
| Hiring mode | set `openToWork: true` in `src/data/site.js` |

## Deploy
- Vercel / Netlify: import the repo, build command `npm run build`, output `dist`.
- GitHub Pages: set `base: '/your-repo-name/'` in `vite.config.js`, then publish `dist`.
