import { createSelector } from 'reselect';

const getRouter = state => state.router;
const getPath = state => state.path;

export const getLocationPathname = createSelector(
  getRouter,
  router => router.location.pathname
);
export const getPathLoc = createSelector(
  getPath,
  path => ""
)