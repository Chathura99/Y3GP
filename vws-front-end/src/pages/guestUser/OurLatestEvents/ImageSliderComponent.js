import React from "react";
import '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';


const images = [
    {
      original: 'https://www.hayleys.com/wp-content/uploads/2022/02/Puritas-Sathdiyawara-continues-to-empower-adopted-villages-with-educational-care-packs-for-7th-year-700x466.png',
      thumbnail: 'https://www.hayleys.com/wp-content/uploads/2022/02/Puritas-Sathdiyawara-continues-to-empower-adopted-villages-with-educational-care-packs-for-7th-year-700x466.png',
    },
    {
      original: 'https://sasnaka.org/static/media/home-two.e87aaeb9.jpg',
      thumbnail: 'https://sasnaka.org/static/media/home-two.e87aaeb9.jpg',
    },
    {
      original: 'https://sasnaka.org/static/media/home-three.5ea6b759.jpg',
      thumbnail: 'https://sasnaka.org/static/media/home-three.5ea6b759.jpg',
    }
  ];

class ImageSliderComponent extends React.Component {

  render() {
    return (
        <div className="wrapper">
            <ImageGallery items={images} />
        </div>
    );
  }
}
export default ImageSliderComponent;