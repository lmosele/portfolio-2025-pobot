/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const SproutLazyImport = createFileRoute('/sprout')()
const PortfolioLazyImport = createFileRoute('/portfolio')()
const MenuLazyImport = createFileRoute('/menu')()
const IndexBackupLazyImport = createFileRoute('/index-backup')()
const AppcuesLazyImport = createFileRoute('/appcues')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const SproutLazyRoute = SproutLazyImport.update({
  id: '/sprout',
  path: '/sprout',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/sprout.lazy').then((d) => d.Route))

const PortfolioLazyRoute = PortfolioLazyImport.update({
  id: '/portfolio',
  path: '/portfolio',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/portfolio.lazy').then((d) => d.Route))

const MenuLazyRoute = MenuLazyImport.update({
  id: '/menu',
  path: '/menu',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/menu.lazy').then((d) => d.Route))

const IndexBackupLazyRoute = IndexBackupLazyImport.update({
  id: '/index-backup',
  path: '/index-backup',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index-backup.lazy').then((d) => d.Route))

const AppcuesLazyRoute = AppcuesLazyImport.update({
  id: '/appcues',
  path: '/appcues',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/appcues.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/appcues': {
      id: '/appcues'
      path: '/appcues'
      fullPath: '/appcues'
      preLoaderRoute: typeof AppcuesLazyImport
      parentRoute: typeof rootRoute
    }
    '/index-backup': {
      id: '/index-backup'
      path: '/index-backup'
      fullPath: '/index-backup'
      preLoaderRoute: typeof IndexBackupLazyImport
      parentRoute: typeof rootRoute
    }
    '/menu': {
      id: '/menu'
      path: '/menu'
      fullPath: '/menu'
      preLoaderRoute: typeof MenuLazyImport
      parentRoute: typeof rootRoute
    }
    '/portfolio': {
      id: '/portfolio'
      path: '/portfolio'
      fullPath: '/portfolio'
      preLoaderRoute: typeof PortfolioLazyImport
      parentRoute: typeof rootRoute
    }
    '/sprout': {
      id: '/sprout'
      path: '/sprout'
      fullPath: '/sprout'
      preLoaderRoute: typeof SproutLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/appcues': typeof AppcuesLazyRoute
  '/index-backup': typeof IndexBackupLazyRoute
  '/menu': typeof MenuLazyRoute
  '/portfolio': typeof PortfolioLazyRoute
  '/sprout': typeof SproutLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/appcues': typeof AppcuesLazyRoute
  '/index-backup': typeof IndexBackupLazyRoute
  '/menu': typeof MenuLazyRoute
  '/portfolio': typeof PortfolioLazyRoute
  '/sprout': typeof SproutLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/appcues': typeof AppcuesLazyRoute
  '/index-backup': typeof IndexBackupLazyRoute
  '/menu': typeof MenuLazyRoute
  '/portfolio': typeof PortfolioLazyRoute
  '/sprout': typeof SproutLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/appcues'
    | '/index-backup'
    | '/menu'
    | '/portfolio'
    | '/sprout'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/appcues'
    | '/index-backup'
    | '/menu'
    | '/portfolio'
    | '/sprout'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/appcues'
    | '/index-backup'
    | '/menu'
    | '/portfolio'
    | '/sprout'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  AppcuesLazyRoute: typeof AppcuesLazyRoute
  IndexBackupLazyRoute: typeof IndexBackupLazyRoute
  MenuLazyRoute: typeof MenuLazyRoute
  PortfolioLazyRoute: typeof PortfolioLazyRoute
  SproutLazyRoute: typeof SproutLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  AppcuesLazyRoute: AppcuesLazyRoute,
  IndexBackupLazyRoute: IndexBackupLazyRoute,
  MenuLazyRoute: MenuLazyRoute,
  PortfolioLazyRoute: PortfolioLazyRoute,
  SproutLazyRoute: SproutLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/appcues",
        "/index-backup",
        "/menu",
        "/portfolio",
        "/sprout"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/appcues": {
      "filePath": "appcues.lazy.tsx"
    },
    "/index-backup": {
      "filePath": "index-backup.lazy.tsx"
    },
    "/menu": {
      "filePath": "menu.lazy.tsx"
    },
    "/portfolio": {
      "filePath": "portfolio.lazy.tsx"
    },
    "/sprout": {
      "filePath": "sprout.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
