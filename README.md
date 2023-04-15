# Repo Info

The application is made in 2 versions, there is a next js version and there is a vue js version, the vue js version for me is an experiment and the vue js version has fewer features than the next js version.

# 1. Next JS Version

## Next JS Version Demo

Deployment preview link : https://repo-info-nextjs.vercel.app/

UI Component stories : https://repo-info-ladle-stories.netlify.app/

_If you are not familiar with "component stories", you can read about it [here](https://storybook.js.org/docs/react/get-started/whats-a-story)_

## Features

- Fetch Github API
- Mock authentication flow using localstorage
- Route protection
- Display a list of users based on their username
- When a user card is clicked, display the last 3 updated repositories of that user
- Display a page that shows the user’s profile as well as all their public repositories, which can be filtered by name and update date
- Responsive and mobile-friendly design
- About and Contact page
- Dark mode and light mode support
- Command palette (cmd-k) for easy navigation
- The application is a [Progressive Web Application](https://web.dev/what-are-pwas/) that can be installed on mobile and desktop to provide a native experience. You can check how to install PWA [here](https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform=Desktop).

\***_Screenshots of the app features can be seen below_**

## Tech Stack and Development

The repository is a monorepo that is set up using [turborepo](https://turbo.build/repo/docs).

The repository explorer application is located in the apps/next js folder.

UI components and other shareable packages are located in the packages folder.

The main technologies and libraries used for developing this application are:

- Next JS
- TypeScript
- Styling using Tailwind CSS, assisted by clsx and [cva](https://www.npmjs.com/package/class-variance-authority).
- In addition to Tailwind CSS, other UI libraries such as [React Aria](https://react-spectrum.adobe.com/react-aria/) and [Headless UI](https://headlessui.com/) are utilized to create accessible UI components. Both are unstyled headless libraries.
- Client state management is handled using [Zustand](https://github.com/pmndrs/zustand).
- API requests and server state management are handled using a combination of axios and [react query](https://react-query-v3.tanstack.com/).
- For UI components that handle only styling and presentation, they are developed in an isolated manner in the packages/ui folder using [ladle](https://ladle.dev/), which is an alternative to [storybook](https://storybook.js.org/) that is lighter and based on Vite.
- Testing is done using [Cypress](https://www.cypress.io/)
  - Unit testing for packages/ui is done using Cypress [component testing](https://docs.cypress.io/guides/component-testing/overview).
  - Integration testing for apps/nextjs is done using [cypress e2e testing](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test).
- The application is a PWA (Progressive Web App) and is implemented using [next-pwa](https://github.com/shadowwalker/next-pwa).
- There are also [GitHub actions](https://github.com/features/actions) (CI) for running tests and builds, which can be checked in the .github folder.
- Eslint and Prettier are used for code linting and formatting.
- Husky is used for pre-commit hooks.
- Animations are implemented using [Framer Motion](https://www.framer.com/motion/).

### How to Build and Develop

- Clone this repo
- Install dependencies: `pnpm install`
- To develop the UI package: `cd packages/ui-react && pnpm run dev`
- To develop the Repository Explorer app: `cd apps/nextjs && pnpm run dev`
- To build the UI package: `cd packages/ui-react && pnpm run build`
- To build the Repository Explorer app: `cd apps/nextjs && pnpm run build`

\***_read the [turborepo](https://turbo.build/repo/docs) and [pnpm](https://pnpm.io/workspaces) documentation for more details about the folder structure._**

## App features screenshots

### Displaying Users

![Displaying Users](/screenshots/displaying-users.gif)

### User profile page

![User profile page](/screenshots/user-profile.gif)

### Responsive and mobile friendly

![Responsive and mobile friendly](/screenshots/responsive.gif)

### Keyboard friendly

![Keyboard friendly](/screenshots/keyboard.gif)

### Dark mode

![Dark mode](/screenshots/dark-mode.png)

### Light mode

![Light mode](/screenshots/light-mode.png)

### Command palette

![Command palette](/screenshots/cmdk.gif)

### Desktop PWA

![PWA Desktop](/screenshots/pwa-desktop.gif)

### Mobile PWA

![Mobile PWA](/screenshots/pwa-mobile.gif)

## Development

### Ladle component stories

![Ladle component stories](/screenshots/ladle.gif)

### Cypress Component Testing

![Cypress Component Testing](/screenshots/cypress-ui.gif)

### e2e test

![e2e test](/screenshots/cypress-e2e.gif)

# Vue JS Version

### How to Build and Develop

- Clone this repo
- Install dependencies: `pnpm install`
- To develop the UI package: `cd packages/ui-vue && pnpm run dev`
- To develop the Repository Explorer app: `cd apps/vue && pnpm run dev`
- To build the UI package: `cd packages/ui-vue && pnpm run build`
- To build the Repository Explorer app: `cd apps/vue && pnpm run build`
