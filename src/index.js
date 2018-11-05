import React from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory'
import TodoApp from './containers/TodoApp';
import Error from './components/Error';
import createStore from './store'; //src/store/index.js

//historyのインスタンス生成
const history = createBrowserHistory();

//Storeの生成
const store = createStore(history);

render(
    <Provider store = {store}>
      <ConnectedRouter history = {history}>
      <div>
          {/* ルーティングさせる */}
          <Route exact path = "/" component={TodoApp} />
          <Route exact path = "/error" component={Error} />
          
      </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
