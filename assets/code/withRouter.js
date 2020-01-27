import React, { Component } from 'react';
import { withRouter } from 'react-router';

class ShowTheLocation extends Component {
  render() {
    const { match, location, history } = this.props

    return (
      <>
        <div>You are now at {location.pathname}</div>
        <button onClick={() => history.push('/away')}>Go Away</button>
      </>
    );
  }
}
    
export default withRouter(ShowTheLocation);