import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Matches.css';
import IndividualMatch from '../IndividualMatch/IndividualMatch';

class Matches extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: [
        { username: 'Betty', status: 'owner', petUrl: 'www.getUrl.com' },
        { username: 'Bubba', status: 'owner', petUrl: 'www.getAnotherUrl.com' }
      ]
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  makeIndividualMatch = () => {
    console.log(this.state);
    return this.state.matches.map((match, idx) => {
      return (
        <IndividualMatch
          key={idx}
          match={match}
        />
      );
    });
  }






  getMatches = () => {
    console.log('I am a match fetch eventually');
    //import getMatches from apiCalls
    //send array of matches to setState in this component


  }



  componentDidMount() {
    this.getMatches();
  }

  render() {
    return (
      <div className="Matches">
        <p>I am the Matches Route</p>
        <div>
          {this.makeIndividualMatch()}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = dispatch => ({

});

Matches.propTypes = {

  history: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Matches));
