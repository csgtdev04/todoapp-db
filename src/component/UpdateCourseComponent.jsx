import { Component } from "react";
import CourseDataService from "../service/CourseDataService";

class UpdateCourseComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            u_name: '',
            u_description: '',
            u_status: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goBack = this.goBack.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    handleSubmit() {
        console.log("Name: " + this.state.u_name);
        console.log("Description: " + this.state.u_description);
        console.log("Status: " + this.state.u_status);
    
        const {match: { params }} = this.props;
        let myUpdatedTodo = {
            id: params.id,
            name: this.state.u_name,
            description: this.state.u_description,
            status: this.state.u_status,
            username: params.username
        }
        CourseDataService.updateItem(myUpdatedTodo)
        .then(
            response => {
                console.log(response.data)
                //this.props.history.push('/courses')
                this.props.history.push(`/listCourseByUsername/${params.username}`);
            }
        );
    }

    goBack() {
        const {match: { params }} = this.props;
        this.props.history.push(`/listCourseByUsername/${params.username}`)
    }

    handleNameChange(e) {
        this.setState({u_name: e.target.value})
    }
    handleDescriptionChange(e) {
        this.setState({u_description: e.target.value})
    }
    handleStatusChange(e) {
        this.setState({u_status: e.target.value})
    }

    render() {
        return (
            <div>
                <h3>Update TODO Here</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Updated TODO Name:
                        <input type="text" name="name" placeholder="Name" id={this.state.u_id} value={this.state.u_name} onChange={this.handleNameChange} />
                    </label> <br />
                    <label>
                        Updated TODO Description:
                        <input type="text" name="description" placeholder="Description" value={this.state.u_description} onChange={this.handleDescriptionChange} />
                    </label> <br />
                    <label>
                        Updated TODO Status:
                        <input type="text" name="status" placeholder="Status" value={this.state.u_status} onChange={this.handleStatusChange} />
                    </label> <br />
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                    <button onClick={this.goBack}>Go Back</button>
                </form>
            </div>
        );
    }
}
export default UpdateCourseComponent;