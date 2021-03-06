import React from "react";
import PropTypes from "prop-types";

import Sidebar from "../../components/sidebar/index";

const Layout = ({children}) => (
    <div className="view-container">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    {children}
                </div>
            </div>
        </div>
    </div>
)

export default Layout;

Layout.propTypes = {
    children: PropTypes.node
}





