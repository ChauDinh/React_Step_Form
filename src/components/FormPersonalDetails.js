import React, { Component } from 'react'
import { MuiThemeProvider } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
  continue = e => {
   e.preventDefault();
   this.props.nextStep();
  }; 

  back = e => {
   e.preventDefault();
   this.props.prevStep();
  }; 

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <MuiThemeProvider>
         <React.Fragment>
          <AppBar title="Enter Personal Details"/>
          <br />
          <TextField 
           hintText="Enter Your Occupation"
           floatingLabelFixed="Occupation"
           onChange={handleChange('occupation')}
           defaultValue={values.occupation}
          />
          <br />
          <br />
          <TextField 
           hintText="Enter Your City"
           floatingLabelFixed="City"
           onChange={handleChange('city')}
           defaultValue={values.city}
          />
          <br />
          <br />
          <TextField 
           hintText="Enter Your Bio"
           floatingLabelFixed="Bio"
           onChange={handleChange('bio')}
           defaultValue={values.bio}
          />
          <br />
          <br />
          <RaisedButton 
           label="Back"
           primary={false}
           style={styles.button}
           onClick={this.back}
          />
          <RaisedButton 
           label="Continue"
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

export default FormPersonalDetails
