import './DogList.css'
import { Link } from "react-router-dom";

const DogList = ({images}) => {

  return (
    <div>
      <h2>All of my dogs</h2>

      {images.map((imageProps) => (
        <Link to={`/dogs/${imageProps.dogName}`}><img src={imageProps.src} alt={imageProps.alt} /></Link>
      ))}
    </div>
  );
};

export default DogList;
