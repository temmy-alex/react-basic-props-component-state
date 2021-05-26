import { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.content}</h4>
                <h4>Username : {this.props.username}</h4>
                <h4>Email : {this.props.email}</h4>
            </div>
        )
    }
}

export default Footer