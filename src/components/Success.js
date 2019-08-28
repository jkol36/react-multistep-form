import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'



class Success extends Component {

	continue = e => {
		e.preventDefault()
		this.props.nextStep();
	}
	render() {
		const { values, handleChange } = this.props
		return(
			<MuiThemeProvider> 
				<React.Fragment> 
					<AppBar title="enter user details"/>
					<h1> Thank you for your submission!</h1>
					<p> You will get an email with further instructions! </p>
				</React.Fragment>
			</MuiThemeProvider>
		)
	}
}


export default Success