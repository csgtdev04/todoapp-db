import { Component } from 'react'
import CourseDataService from '../service/CourseDataService';


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            user_fail_login: ''
        }

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createAccount = this.createAccount.bind(this);
    }
    handleUserNameChange(e) {
        this.setState({ username: e.target.value })
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }
    createAccount() {
        this.props.history.push("/createUser");
    }
    handleSubmit() {
        console.log("U: " + this.state.username);
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        console.log("User obj " + user.username + user.password)
        // CourseDataService.getUser(user)
        // .then(
        //     response => {
        //         console.log(response);
        //         if(response === null) { //no user
        //             this.createAccount();
        //         }
        //         this.props.history.push("/courses");
        //     }
        // )
        CourseDataService.getUserByUsername(user.username, user.password)
            .then(
                (getResponse) => {
                    //console.log("There is a user " + response.data.username + response.data.password);
                    if (getResponse===undefined) {
                        alert("Undefined");
                    }
                    else {
                        let data = getResponse.data;
                        console.log(data);

                        if (data === false) { //no user
                            alert("Invalid Credentials");
                            // return <NotAUser/>
                        } else {                        
                            this.props.history.push(`/listCourseByUsername/${this.state.username}`);
                        }
                    }

        // CourseDataService.getUserByUsername(user.username)
        //     .then(response => response.json())
        //         .then(response => {
        //             //console.log("There is a user " + response.data.username + response.data.password);
        //             console.log(response);
        //             if (response===undefined) {
        //                 alert("Undefined");
        //             }
        //             else {
        //                 let data = response;
        //                 console.log(data);

        //                 if (data === false) { //no user
        //                     alert("Invalid Credentials");
        //                     // return <NotAUser/>
        //                 } else {                        
        //                     this.props.history.push(`/listCourseByUsername/${this.state.username}`);
        //                 }
        //             }
                    
                    // if (data===undefined) {
                    //     //New User will have new data.
                    //     //Welcome to your TODO
                    //     alert("New user stays here for now.");
                    // }
                    
                    
                    // if(response.data===false) {
                    //     this.setState({user_fail_login: true})
                    // } else {
                    //     this.setState({data: response.data, user_fail_login: false})
                    //     this.props.history.push("/courses");
                    // }
    
                }
            )
    }
    render() {
        // if(this.state.user_fail_login) {
        //     return <p>Invalid Credentials or Not a user yet</p>
        // }
        
        return (
            <div className="container">
                {/* <AddCourseComponent username={this.state.username}/> */}
                <h1>Login Screen</h1>  
                <form>
                    <label>
                        Username:
                        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleUserNameChange} />
                    </label> <br />
                    <label>
                        Password:
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </label> <br />
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                    <button type="button" onClick={this.createAccount}>Create Account</button>
                </form>
            </div>
        );

    }
}
export default LoginComponent;