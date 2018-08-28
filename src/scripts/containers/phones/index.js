import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {fetchPhones} from "../../actions/index";

class Phones extends Component {
    componentDidMount() {
        this.props.fetchPhones()
    }
    render() {
        return(
            <div>
                Phones
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchPhones
}

export default connect(null, mapDispatchToProps)(Phones);

Phones.propTypes = {
    fetchPhones: PropTypes.func
  
}
