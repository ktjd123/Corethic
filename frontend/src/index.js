import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Redux 관련 불러오기
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';

//React-redux Provider
import { Provider } from 'react-redux';

//React router v4
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//<Route path="/" component={AppContainer} /> - 이걸 페이지의 헤더파일로 해놓으면 굉장히 편리하겠다.

//base css
import './index.css'

//Example import
import { Main, Login, Register } from 'containers'
import { Error404 } from 'components'
//Example import end

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/404' component={Error404} />
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route exact path="/" component={Main} />
                    <Redirect to='/404' />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
