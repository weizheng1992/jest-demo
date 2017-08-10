import React, { PropTypes } from 'react';


const propTypes = {
  globalActions: PropTypes.object,
  global: PropTypes.object.isRequired
};

class Global extends React.Component {
  constructor(props) {
    super(props)
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    const { globalActions } = this.props;
    globalActions.requestLottoNums({ size: 10, playId: 1010011, lottoId: 1010 });
    console.log(this.props.global)
  }

  render() {
    const { global } = this.props; 
    return (
      <div>
        特色大苏打撒
        <button onClick={this.onButtonClick}>test</button>
        {JSON.stringify(global.list)}
      </div >
    )
  }
}


Global.propTypes = propTypes;


export default Global;