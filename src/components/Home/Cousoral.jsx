
import { Carousel } from 'antd';
const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const ImageSlider = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src="https://elements-cover-images-0.imgix.net/b4947e24-7b5d-45d0-9249-e5810a31c7e6?auto=compress%2Cformat&w=710&fit=max&s=5577fffe60b24cf0a236a562e8c26ad3" alt=""/></h3>
    </div>
    <div>
      <h3 style={contentStyle}>2
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default ImageSlider;