import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Matches.css';
import IndividualMatch from '../IndividualMatch/IndividualMatch';
import {fetchMatches} from '../../api_calls/api-calls';

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [ 
        {name:'Betty', description: "description of Betty", pic:"www..."  },
        { name: 'Bubba', description: "description of Bubba", pic: 'www.getAnotherUrl.com' }
      ]
    };
  }

  handleChange = event => {
    
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  makeIndividualMatches = () => {
    
    return this.state.matches.map((match, idx) => {
      return (
        <IndividualMatch
          key={idx}
          match={match}
        />
      );
    });
  }

  getMatches = async () => {
    
    // const matches = await fetchMatches;
    // console.log(matches)
    // this.setState.matches({...matches});
  }

  componentDidMount() {
    this.getMatches();
  }

  render() {
    return (
      <div className="Matches">
        <p>These are your matches!</p>
        <div>
          {this.makeIndividualMatches()}
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
