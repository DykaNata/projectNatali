import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import { ErrorPage } from "@/app/ErrorPage";
import { Layout } from "@/app/Layout";
import { NotFoundPage } from "@/app/NotFoundPage";
import { AboutPage } from "@/features/site/pages/AboutPage";
import { BlogArticlePage } from "@/features/site/pages/BlogArticlePage";
import { BlogPage } from "@/features/site/pages/BlogPage";
import { ContactPage } from "@/features/site/pages/ContactPage";
import { ForWhomPage } from "@/features/site/pages/ForWhomPage";
import { HomePage } from "@/features/site/pages/HomePage";
import { PrivacyPage } from "@/features/site/pages/PrivacyPage";
import { ServicesPage } from "@/features/site/pages/ServicesPage";

const rootRoute = createRootRoute({
  component: Layout,
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorPage,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const forWhomRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/for-whom",
  component: ForWhomPage,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: BlogPage,
});

const blogArticleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$postId",
  component: BlogArticlePage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: PrivacyPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  forWhomRoute,
  servicesRoute,
  blogRoute,
  blogArticleRoute,
  contactRoute,
  privacyRoute,
]);

export const router = createRouter({
  routeTree,
  basepath: import.meta.env.BASE_URL,
  scrollRestoration: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
