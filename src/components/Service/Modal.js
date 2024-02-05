import './modal.css';
import { baseURLprimg } from '../../api/api';

const Modal = ({clickedImg,handelRotationRight,handelRotationLeft,setClickedImg}) => {
    const handleClick = (e) => {
        if(e.target.classList.contains("dismiss")){
            setClickedImg(null);
        }
    }
    return <>
       <div className="overlay dismiss" onClick={handleClick}>
        <img src={baseURLprimg+clickedImg} alt="bigger pic" />
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
        
        
      </div> 
    </>
}

export default Modal;