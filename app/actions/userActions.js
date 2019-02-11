import * as types from './actionTypes';


export function loadImagesSuccess(images) {
  return {
    type: types.LOAD_IMAGES_SUCCESS,
    images
  };
}

//https://pixabay.com/api/?key=11544333-a1b06faa5bd7eb9c1a5cef200&q=big+cities&image_type=photo&pretty=true
export function loadImages() {

}
