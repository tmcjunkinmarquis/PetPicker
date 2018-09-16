import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Matches.css';
import IndividualMatch from '../IndividualMatch/IndividualMatch';
import { fetchMatches } from '../../api_calls/api-calls';
import * as actions from '../../actions';

export class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: []
    };
  }

  makeIndividualMatches = () => {
    return this.props.matches.map((match, idx) => {
      console.log('match: ', match)
      return (
        <IndividualMatch
          key={idx}
          match={match}
        />
      );
    });
  }

  getMatches = async () => {
    const matches = await fetchMatches(this.props.userId);
    this.props.storeMatches(matches);
  }

  async componentDidMount() {
    if (this.props.loggedIn) {
      this.getMatches();
    } else {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="matches">
        <p>These are your matches!</p>
        <div>
          {this.props.matches && this.makeIndividualMatches()}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  userId: state.user.id,
  loggedIn: state.loggedIn,
  matches: state.matchesArray
});

export const mapDispatchToProps = dispatch => ({
  storeMatches: matchesArray => dispatch(actions.storeMatches(matchesArray))
});

Matches.propTypes = {
  history: PropTypes.object.isRequired,
  matches: PropTypes.array,
  loggedIn: PropTypes.bool,
  userId: PropTypes.number,
  storeMatches: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Matches));
