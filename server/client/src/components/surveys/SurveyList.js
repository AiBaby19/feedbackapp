import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSurveys} from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.map(survey => {
      return (
        <div style={{marginBottom: "25px"}}>
          <div className="card draken-1" style={{margin: "0 auto", marginTop: '45px', width: '80%'}}key={survey._id}>
            <div className="card-content">
              <span className="card-title">{survey.title}</span>
              <p>
                {survey.body}
              </p>
              <p className="right">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
          </div>
        </div>
      );
    });
  }
    render() {
        return (
            <div>
              <h3>All Sent Surveys</h3>
              {this.renderSurveys()}
            </div>
        )
    }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);