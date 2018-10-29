import React, { Component } from 'react';
import Template from './Template';

class NotFound extends Component {

    render() {
        return (

            <Template>
                <h1 className="page-header">Not Found</h1>
                <div className="row">
                   <span>Page Not Found</span>
                </div>
            </Template>

        );
    }
}

export default NotFound;