import React, { Component } from 'react'
import { MuiThemeProvider } from 'material-ui/styles';
import { List, ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {
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
    return (
      <div>
        <MuiThemeProvider>
         <React.Fragment>
          <AppBar title="Success"/>
          <h1>Thank You for Your Submission</h1>
          <p>You will get an email attached a commitment link and further instructions</p>
         </React.Fragment>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Success
