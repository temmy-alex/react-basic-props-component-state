import { Component } from "react";

class Proposal extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.konten}</h3>
                <h4>ID: {this.props.id}</h4>
                <h4>Email : {this.props.email}</h4>
            </div>
        )
    }
}

export default Proposal