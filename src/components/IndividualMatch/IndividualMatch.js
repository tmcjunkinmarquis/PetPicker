import React, {Component} from 'react'
import './IndividualMatch.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { fetchPostMakeMatch} from '../../api_calls/api-calls';


export class IndividualMatch extends Component {
  // makeMatch = async () => {
  //   // console.log(this.props.match.id, this.props.user);
  //   const url = `https://pet-picker-api.herokuapp.com/api/v1/users/${this.props.user}/matches/${this.props.match.id}`
  //   const optionsObj = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8"
  //     }
  //   };
  //   try {
  //     const response = await fetch(url, optionsObj);
  //     if (!response.ok) {
  //       throw Error(`${response.status}`);
  //     }
  //     return await response.json();
  //   } catch (error) {
  //     throw Error(`Network request failed. (error: ${error.message})`);
  //   }
  // }
  render() {
    return (
      <li className='collection-item'>
        <img
          className="circle avatar-pic left"
          src={this.props.match.pic} alt=""
        />

        {this.props.match.owner ? <a onClick={fetchPostMakeMatch} className="title left pet-title">{this.props.match.name}</a> : <span className="title left pet-title">{this.props.match.name}</span>}
        <br />
        <p className="left-align">{this.props.match.description}</p>
      </li>
    );
  }
};

IndividualMatch.propTypes = {
  matches: PropTypes.array,
  // userId: PropTypes
};

export const mapStateToProps = (state) => ({
  user: state.user.id,
  matches: state.matches
});

export default connect(mapStateToProps, null)(IndividualMatch);
