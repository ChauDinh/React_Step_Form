import React, { Component } from 'react'
import { MuiThemeProvider } from 'material-ui/styles';
import { List, ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  continue = e => {
   e.preventDefault();

   // PROCESS FORM //
    
   this.props.nextStep();
  }; 
 
  back = e => {
   e.preventDefault();
   this.props.prevStep();
  }; 

  render() {
    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
    return (
      <div>
        <MuiThemeProvider>
         <React.Fragment>
          <AppBar title="Confirm Your Information"/>
          <br />
          <List>
           <ListItem 
            primaryText="First Name"
            secondaryText={ firstName }
           />
           <ListItem 
            primaryText="Last Name"
            secondaryText={ lastName }
           />
           <ListItem 
            primaryText="Email"
            secondaryText={ email }
           />
           <ListItem 
            primaryText="Occupation"
            secondaryText={ occupation }
           />
           <ListItem 
            primaryText="City"
            secondaryText={ city }
           />
           <ListItem 
            primaryText="Bio"
            secondaryText={ bio }
           />
          </List>
          <br />
          <br />
          <RaisedButton 
           label="Back"
           primary={false}
           style={styles.button}
           onClick={this.back}
          />
          <RaisedButton 
           label="Confirm & Continue"
           primary={true}
           style={styles.button}
           onClick={this.continue}
          />
         </React.Fragment>
        </MuiThemeProvider>
      </div>
    )
  }
}

const styles = {
 button: {
  margin: 15
 }
}

export default Confirm
