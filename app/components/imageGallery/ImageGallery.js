import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ImageItem from './imageItem/ImageItem';
import {uid} from 'react-uid';

class ImageGallery extends React.Component {
  static propTypes = {
    images: PropTypes.array,
    onImageSelected: PropTypes.func,
    onUnselectImage: PropTypes.func
  };

  static defaultProps = {
    images: []
  };

  constructor(props) {
    super(props);
  }

  renderImage(image) {
    let { onImageSelected, onUnselectImage } = this.props;
    return(
     <ImageItem
       image={image}
       onImageSelected={onImageSelected}
       onUnselectImage={onUnselectImage}
       key={uid(image)}
     />
    );
  }

  render(){
    let { images } = this.props;

    return(
      <Grid container spacing={40} className="images">
        <Grid item sd={12} xs={12} className="images__total">
          {images.length} Items
        </Grid>
        {
          images.map(item=> this.renderImage(item))
        }
      </Grid>
    );
  }
}

export default ImageGallery;
