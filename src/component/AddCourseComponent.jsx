import { Component } from "react";
import CourseDataService from "../service/CourseDataService";

class AddCourseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            status: 'Not Done'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goBack = this.goBack.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    handleSubmit() {
        console.log("Name: " + this.state.name);
        console.log("Description: " + this.state.description);
        console.log("Username: " + this.state.username);
        const {match: { params }} = this.props;
        let myTodo = {
            name: this.state.name,
            description: this.state.description,
            status: this.state.status,
            username: params.username,
        }
        CourseDataService.createItem(myTodo)
        .then(
            response => {
                console.log(response.data)
                //this.props.history.push('/courses')
                this.props.history.push(`/listCourseByUsername/${myTodo.username}`);
            }
        );
    }

    goBack() {
        this.props.history.push("/courses")
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }
    handleDescriptionChange(e) {
        this.setState({description: e.target.value})
    }

    render() {
        // <LoginComponent username={this.state.username}/>
        return (
            <div>
                
                <h3>Add TODO Here</h3>
                <form>
                    <label>
                        TODO Name:
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} />
                    </label> <br />
                    <label>
                        TODO Description:
                        <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange} />
                    </label> <br />
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                    <button onClick={this.goBack}>Go Back</button>
                </form>
            </div>
        );
    }
}
export default AddCourseComponent;