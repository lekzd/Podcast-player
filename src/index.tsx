import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import PodcastContainer from './components/podcasts/podcast-container';
import SeriesContainer from './components/series/series-container';
import AuthorsContainer from './components/author/author-container';
import AuthorPage from './components/author/author-page';
import Player from './components/Player/Player';

import '../node_modules/plyr/dist/plyr.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact={true} component={PodcastContainer} />
        <Route path="/series" component={SeriesContainer} />
        <Route path="/authors" component={AuthorsContainer}/>
        <Route path="/authors/:id" component={AuthorPage}/>
        <Player />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
