import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

class Manu extends React.Component {
  static propTypes = {
    showHeader: PropTypes.bool,
    selectedImages: PropTypes.array,
    selectAll: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  getImagesNames() {
    let { selectedImages } = this.props;
    let names = selectedImages.map( (item) => { return item.imageName });
    return names.join();
  }

  onImageAction(action) {
    console.log(this.getImagesNames()+":"+action);
  }

  render(){
    let { showHeader, selectedImages, selectAll } = this.props;
    return(
      <div className={classNames({"header": true, "show": showHeader})}>
        <div className="header__selection">
          <span className="total">{selectedImages.length} Selected</span>
          <span className="divider">|</span>
          <span className="all" onClick={()=> selectAll()}>Select All</span>
        </div>
        <div className="header__actions">
          <Button variant="contained" onClick={()=> this.onImageAction('move')}>
            Move
          </Button>
          <Button variant="contained" onClick={()=> this.onImageAction('copy')}>
            Copy
          </Button>
        </div>
      </div>
    );
  }
}

export default Manu;
