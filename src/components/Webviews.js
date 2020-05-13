import React, { Component } from "react";
import Webview from './Webview';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import _ from 'lodash';

class Webviews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sites: this.props.sites
        }
    }

    render () {
        
        var Sites = this.state.sites;
        var numOnRow = 3;
        var chunkedSites = _.chunk(Sites, numOnRow);

        var sites = chunkedSites.map(siteList => {
            return (
                <Row key={siteList[0]}>
                    { siteList.map(site => { return <Webview key={site} url={site}/> }) }
                </Row>
            )
        });


        return (
            <div className="Sites">
                <Container>
                    {sites}
                </Container>
            </div>
        );
    }
}

export default Webviews;
