import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Matches.css';
import IndividualMatch from '../IndividualMatch/IndividualMatch';

export class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  makeIndividualMatches = () => {
    return this.props.matches.map((match, idx) => {
      return (
        <IndividualMatch
          key={idx}
          match={match}
        />
      );
    });
  }

  componentDidMount = () => {
    if (!this.props.loggedIn) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div className="matches">
        <h3>Matches</h3>
        <ul className="collection">
          {this.props.matches && this.makeIndividualMatches()}
        </ul>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  userId: state.user.id,
  loggedIn: state.loggedIn,
  matches: state.matches
});

Matches.propTypes = {
  history: PropTypes.object.isRequired,
  matches: PropTypes.array,
  loggedIn: PropTypes.bool,
  userId: PropTypes.number,
  storeMatches: PropTypes.func
};

export default withRouter(connect(mapStateToProps)(Matches));
