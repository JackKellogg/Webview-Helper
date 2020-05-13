import React, { Component } from "react";

class Webview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url
        }
    }

    render () {
        return (
            <iframe title="asd" src={this.state.url}></iframe>
        );
    }
}

export default Webview;