import React, {Component} from "react";

class MenuItem extends Component {
    render() {
        return(
            <li><a href={this.props.href}>{this.props.title}</a></li>
        )
    }
}

export default MenuItem;