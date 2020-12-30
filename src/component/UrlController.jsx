import { Component } from "react";
import AccessCoursesComponent from './AccessCoursesComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddCourseComponent from './AddCourseComponent';
import UpdateCourseComponent from './UpdateCourseComponent'
import LoginComponent from './LoginComponent'
import CreateUserComponent from './CreateUserComponent'
import NotAUser from './NotAUser'


class UrlController extends Component {
    
    render() {
        return (
            <>
                <Router>
                    <h1>Todo Application with MySQL Connection</h1>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" exact component={LoginComponent} />
                        <Route path="//notAUser" exact component={NotAUser} />
                        <Route path="/createUser" exact component={CreateUserComponent} />
                        <Route path="/courses" exact component={AccessCoursesComponent} />
                        <Route path="/addCourse/-1" exact component={AddCourseComponent} />
                        <Route path="/addCourseByUsername/:username" exact component={AddCourseComponent} />
                        <Route path="/listCourseByUsername/:username" exact component={AccessCoursesComponent} />
                        {/* <Route path="/updateCourse/:id" component={UpdateCourseComponent} /> */}
                        <Route path="/updateCourseByUsername/:username/:id" exact component={UpdateCourseComponent} />
                        {/* <Route path="/courseById/:id" exact component={CourseComponent} /> */}
                    </Switch>

                </Router>
            </>
        );
    }

}

export default UrlController;