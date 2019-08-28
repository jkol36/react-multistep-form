import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'



class FormUserDetails extends Component {
	//process form
	continue = e => {
		e.preventDefault()
		this.props.nextStep();
	}
	back = e => {
		e.preventDefault();
		this.props.prevStep();
	}
	render() {
		const { values: {firstName, email, occupation, city, bio, lastName} } = this.props
		console.log(firstName)
		return(
			<MuiThemeProvider> 
				<React.Fragment> 
					<AppBar title="confirm user data"/>
					<List> 
						<ListItem 
							primaryText={'first name'}
							secondaryText={firstName}
						/>
						<ListItem 
							primaryText={'last name'}
							secondaryText={lastName}
						/>
						<ListItem 
							primaryText={'email'}
							secondaryText={email}
						/>
						<ListItem 
							primaryText={'occupation'}
							secondaryText={occupation}
						/>
						<ListItem 
							primaryText={'city'}
							secondaryText={city}
						/>
						<ListItem 
							primaryText={'bio'}
							secondaryText={bio}
						/>
					</List>
					<RaisedButton 
						label='Confirm And Continue'
						primary={true}
						style={styles.button}
						onClick={this.continue}

					/>
					<RaisedButton 
							label='Back'
							primary={false}
							style={styles.button}
							onClick={this.back}

						/>
				</React.Fragment>
			</MuiThemeProvider>
		)
	}
}

const styles ={
	button: {
		margin:15
	}
}
export default FormUserDetails