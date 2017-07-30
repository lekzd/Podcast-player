import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import App from './components/App/App';
import Player from './components/Player/Player';

import '../node_modules/plyr/dist/plyr.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact={true} component={App} />
        <Player />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
