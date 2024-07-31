// added the right imports
import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
    

        //  Added the binding
        this.changeName = this.changeName.bind(this); 
    }

    // Updated Function
    changeName(){
        this.setState({name: 'Skylar'})
      }

    

    render() {
        return (

            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

//  added the export
export default UserProfile
// import it into the app on app.jsx