import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../components/menu/Menu';
import ImageGallery from '../../components/imageGallery/ImageGallery';
import Grid from '@material-ui/core/Grid';
import data from '../../data';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class Main extends React.Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      showHeader: false,
      images: data.images //TODO get this from a redux state | API call to get the images
    };
    this.onImageSelected = this.onImageSelected.bind(this);
    this.onUnselectImage = this.onUnselectImage.bind(this);
    this.selectAll = this.selectAll.bind(this);
  }

  checkHeader() {
    let { images } = this.state;
    if(images.length === 0)
      this.setState({showHeader: false});
  }

  onImageSelected(image) {
    this.setState({images: this.state.images.filter(function(item) {
        if(item.id === image.id)
          item.selected = true;
        return item;
      }), showHeader: true});
  }

  onUnselectImage(image) {
    this.setState({images: this.state.images.filter(function(item) {
        if(item.id === image.id)
          item.selected = false;
        return item;
      })}, this.checkHeader);
  }

  selectAll() {
    this.setState({images: this.state.images.filter(function(item) {
        item.selected = true;
        return item;
      })});
  }

  render() {
    const { classes } = this.props;
    let { showHeader, images } = this.state;
    let selectedImages = images.filter((item)=>{ return item.selected});

    return(
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Menu
            showHeader={showHeader}
            selectedImages={selectedImages}
            selectAll={this.selectAll}
          />
          <ImageGallery
            images={images}
            onImageSelected={this.onImageSelected}
            onUnselectImage={this.onUnselectImage}
          />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Main);

