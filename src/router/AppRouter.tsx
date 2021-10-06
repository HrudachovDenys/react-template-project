import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ExamplePage from '@modules/example/pages/ExamplePage';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={ExamplePage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
