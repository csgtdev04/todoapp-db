import { Component } from "react";
import CourseDataService from "../service/CourseDataService";

class AccessCoursesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            name: null,
            description: null,
            status: null,
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this);
        this.updateCourseClicked = this.updateCourseClicked.bind(this);
        this.addCourseClicked = this.addCourseClicked.bind(this);
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this);
        this.goBackToLoginScreen = this.goBackToLoginScreen.bind(this);
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        const {match: { params }} = this.props;
        // CourseDataService.getAllItems()
        //     .then(
        //         response => {
        //             console.log(response.data)
        //             this.setState({ courses: response.data });
        //         }
        //     )

        CourseDataService.getCoursesByUsername(params.username)
            .then(
                response => {
                    if(response.data===undefined) {
                        console.log("New User or Finished all TODO");
                    }
                    //console.log(response.data)
                    this.setState({ courses: response.data });
                }
            )
    }

    updateCourseClicked(id) {
        const {match: { params }} = this.props;
        this.props.history.push(`/updateCourseByUsername/${params.username}/${id}`);
        // const {match: { params }} = this.props;
        // this.props.history.push(`/updateCourseByUsername/${params.username}`);
    }

    addCourseClicked() {
        //this.props.history.push(`/addCourse/-1`);
        const {match: { params }} = this.props;
        this.props.history.push(`/addCourseByUsername/${params.username}`);
    }

    deleteCourseClicked(id) {
        CourseDataService.deleteItemById(id)
            .then(
                response => {
                    this.setState({ message: `Deletion of course ${id} successful` })
                    this.refreshCourses();
                }
            )
    }
    goBackToLoginScreen() {
        this.props.history.push(`/login`);
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>Id</th> */}
                            <th>Name</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.courses.map(
                                course =>
                                    <tr key={course.id}>
                                        {/* <td>{course.id}</td> */}
                                        <td>{course.name}</td>
                                        <td>{course.description}</td>
                                        <td>{course.status}</td>
                                        <td><button onClick={() => this.updateCourseClicked(course.id)}>Update</button></td>
                                        <td><button onClick={() => this.deleteCourseClicked(course.id)}>Delete</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addCourseClicked}>Add</button>
                </div>
                <div className="row">
                    <button onClick={this.goBackToLoginScreen}>Logout</button>
                </div>
            </div>
        );
    }
}
export default AccessCoursesComponent;
