import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

  static propTypes = {
    main: PropTypes.element
  }

  constructor(props, context) {
    super(props);
  }


  render(){
    return (
      <div>
        {this.props.main}
      </div>
    );
  }
}
export default (App);
