import * as React from "react";
import {createStore, applyMiddleware, combineReducers} from "redux";
import * as ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";

import reducers from "../reducers/IndexReducers";

import * as spanish from "react-intl/locale-data/es";
import * as english from "react-intl/locale-data/en";

import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({
    reducers
});

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(ReduxThunk["default"])
    )
);

export class AppPipeline extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
          <Provider store={store}>
                <div className="container-fluid">
                  {this.props.children}
                </div>
          </Provider>
        );
    }
}
