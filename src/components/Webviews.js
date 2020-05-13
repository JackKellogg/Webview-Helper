import React, { Component } from "react";
import Webview from './Webview';

class Webviews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sites: this.props.sites
        }
    }

    render () {
        const Views = this.state.sites.map(site => {return <Webview url={site}/>});
        return (
            {Views}
        );
    }
}

export default Webviews;