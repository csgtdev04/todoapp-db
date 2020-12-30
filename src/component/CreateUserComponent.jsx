import { Component } from "react";
import CourseDataService from '../service/CourseDataService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.goBack = this.goBack.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserNameChange(e) {
        this.setState({ username: e.target.value })
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }
    goBack() {
        this.props.history.push("/login")
    }
    handleSubmit() {
        //validate to see if User is in DB (check username and password)
        console.log(this.state.username)
        console.log(this.state.password)
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        console.log("User obj" + user.username + user.password)
        CourseDataService.createUser(user)
            .then(
                () => {
                    //console.log(response);                    
                    alert("Account Created");
                    this.props.history.push("/login");
                }
            )
    }
    render() {
        return (
            <div className="container">
                <h1>Create User Screen</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleUserNameChange} />
                    </label> <br />
                    <label>
                        Password:
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </label> <br />
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                    <button onClick={this.goBack}>Go Back</button>
                </form>
            </div>
        );

    }
}
export default CreateUserComponent;