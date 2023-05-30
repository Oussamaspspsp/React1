import Img from './Img.jpg';
import '../style.css';


const FirstImg = () => (
    <div className='img'>
      <img src={Img} alt="Profile Photo" />
    </div>
  );
  
  export default FirstImg;