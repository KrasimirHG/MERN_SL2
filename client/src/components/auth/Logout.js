import React, { Component } from "react";
import { logout } from "../actions/authActions";
import { connect } from "react-redux";

export class Logout extends Component {
	render() {
		return <div></div>;
	}
}

export default connect(
	null,
	{ logout }
)(Logout);
