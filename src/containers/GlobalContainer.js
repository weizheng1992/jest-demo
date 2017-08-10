
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as globalCreators from '../actions/global';

import Global from '../pages/Global';

class GlobalContainer extends React.Component {
  render() {
    return <Global {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const { global } = state;
  return {
    global
  };
};

const mapDispatchToProps = (dispatch) => {
  const globalActions = bindActionCreators(globalCreators, dispatch);
  return {
    globalActions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalContainer);
