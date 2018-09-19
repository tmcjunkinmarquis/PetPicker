import React, { Component } from 'react'
import './IndividualMatch.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPostMakeMatch } from '../../api_calls/api-calls';


export class IndividualMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { description, pic, id, name } = this.props.match;
    return (
      <li className='collection-item'>
        <img
          className="circle avatar-pic left"
          src={pic} alt=""
        />

        {this.props.match.owner ?
          <a
            onClick={fetchPostMakeMatch(this.props.user, id)}
            className="title left pet-title"
          >{name}
          </a>
          :
          <span className="title left pet-title">{name}</span>}
        <br />
        <p className="left-align">{description}</p>
      </li>
    );
  }
}

IndividualMatch.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  match: PropTypes.object,
  user: PropTypes.number
};

export const mapStateToProps = (state) => ({
  user: state.user.id
});

export default connect(mapStateToProps)(IndividualMatch);
