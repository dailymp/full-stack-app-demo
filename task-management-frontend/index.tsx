import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import {AppPipeline, store} from "./src/components/AppPipeline";
import {RoutesConstants} from "./src/common/RoutesConstants";
import {TaskManagementPageContainer} from "./src/components/pages/taskManagement/TaskManagementPageContainer";


class index {

    constructor() {
        injectTapEventPlugin();



       const Start = () => (
                <Router history={browserHistory}>
                    <Route path="/" component={AppPipeline}>
                        <IndexRoute component={TaskManagementPageContainer}/>
                        <Route path={RoutesConstants.TASK_MANAGEMENT_ROUTE_PATH} component={TaskManagementPageContainer}/>
                    </Route>
                </Router>
        );

        ReactDOM.render(
            <Start/>
            , document.getElementById('root'));
    }
}

new index();





