This repo is entirely vibe coded right now. I just wanted to play with it.
  # Website Redesign

  This is a code bundle for Website Redesign. The original project is available at https://www.figma.com/design/30ITJmP9P4cBbBxuTNjlxo/Website-Redesign.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Deploying to GitHub Pages

  This project is configured to deploy to GitHub Pages with a custom domain (new.chowell.dev).

  ### Deployment Steps

  1. Install dependencies: `npm install`
  2. Deploy to GitHub Pages: `npm run deploy`
  3. In the GitHub repository settings, go to **Settings → Pages**
  4. Set the source to the **gh-pages** branch
  5. The site will be available at https://new.chowell.dev

  ### How it works

  - The `npm run deploy` command automatically builds the project and deploys it to the gh-pages branch
  - The CNAME file configures the custom domain
  - The 404.html fallback ensures client-side routing works correctly for the SPA
  
