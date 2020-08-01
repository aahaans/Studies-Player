import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navigation from './Navigation'
import SchoolDetails from "../Views/Teachers/SchoolDetails";
import Division from "../Views/Teachers/Division";
import HomeWorkPage from "../Views/Teachers/HomeWorkPage";
import Responses from "../Views/Teachers/Responses";
import Footer from './Footer';
import Assignments from '../Views/Assignments/Assignments';
import AssignmentPage from '../Views/Assignments/AssignmentPage';
import Dashboard from '../Views/Teachers/Dashboard';
import CreateHomework from '../Views/Teachers/CreateHomework';

const Routes = (props) => {

    const usage = "s"
    return (
        <div className="react-media-vis-body">
            <Router>

                <div className="mt-16 mb-64" style={{ marginBottom: "25%" }} >
                    <Switch>
                        <Route exact path="/">
                            <div>
                                {/* <Navigation /> */}
                                <Dashboard usage={usage} />
                            </div>

                        </Route>
                        <Route exact path="/assignments">
                            <Assignments />
                        </Route>
                        <Route path="/assignments/:id">
                            <AssignmentPage />
                        </Route>
                        <Route path="/school-details" >
                            <SchoolDetails />
                        </Route>
                        <Route exact path="/:id" >
                            <Division />
                        </Route>
                        <Route path="/:id/hw/new" >
                            <CreateHomework />
                        </Route>
                        <Route exact path="/:class_id/hw/:hw_id" >
                            <HomeWorkPage />
                        </Route>
                        <Route path="/:class_id/hw/:hw_id/responses" >
                            <Responses />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default Routes;