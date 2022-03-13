import { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ErrorBoundary from 'components/error/ErrorBoundary';
import LoadingSpinner from 'components/shared/LoadingSpinner';
const Home = lazy(() => import('components/home/Home'));
const CustomHome = lazy(() => import('components/home/CustomHome'));

function AppContainer() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route path="/custom-home">
              <CustomHome />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default AppContainer;
