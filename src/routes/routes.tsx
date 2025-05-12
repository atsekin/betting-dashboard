import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
];