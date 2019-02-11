import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import classNames from 'classnames';

class ImageItem extends React.Component {
  static propTypes = {
    image: PropTypes.object,
    onImageSelected: PropTypes.func,
    onUnselectImage: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  selectImage(image) {
    let { onImageSelected, onUnselectImage } = this.props;
    if(image.selected) {
      onUnselectImage(image);
    } else {
      onImageSelected(image);
    }
  }

  viewImage(src) {
    window.open(src, '_blank');
  }

  render(){
    let { image } = this.props;

    let totalSizeMB = image.size / Math.pow(1024,2);
    totalSizeMB = Math.round(totalSizeMB * 100) / 100;

    return(
      <div className={classNames({"images__container": true, "selected": image.selected})}>
        <div className="images__container-item">
          <div className="images__thumbnail">
            <img src={image.thumbnail}/>
          </div>
          <div className="images__info">
            <span className="images__info-name">{image.imageName}</span>
            <span className="images__info-dataset">{image.datasetName}</span>
          </div>
        </div>
        <div className="images__container-actions">
          <div className="buttons">
            <Icon className="select-icon" onClick={()=> this.selectImage(image)}>check_box_outline</Icon>
            <Icon className="more-icon">more_horiz</Icon>
          </div>
          <div className="view">
            <Button variant="contained" onClick={()=> this.viewImage(image.thumbnail)}>
              View
            </Button>
          </div>
          <div className="info">
            <span>{moment.utc(image.createdAt).format('MM/DD/YY')}</span>
            <span>{totalSizeMB} MB</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageItem;
