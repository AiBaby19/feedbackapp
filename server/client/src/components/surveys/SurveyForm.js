// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'title', errorValue: 'You must provide a title' },
  { label: 'Subject Line', name: 'subject', errorValue: 'You must provide a subject' },
  { label: 'Email Body', name: 'body', errorValue: 'You must provide the body of the email' },
  { label: 'Recipient List', name: 'emails', errorValue: 'You must add recipients (email list)' },
]

class SurveyFrom extends Component {
  renderFields() {
    return (
      <div>
        {FIELDS.map(({label, name}) => {
          return (
            <Field key={name} label={label} type="text" name={name} component={SurveyField}/>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div style={{margin:'40px 40px', width:'90%'}}>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
          <button type="submit" className="teal btn-flat right white-text">Next
            {/* <i className="material-icons right">done</i> */}
          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  FIELDS.forEach(({ name, errorValue }) => {
    if(!values[name]) {
      errors[name] = errorValue;
    }
  })

  return errors;
}

export default reduxForm({
  validate, 
  form: 'surveyFrom'
})(SurveyFrom);