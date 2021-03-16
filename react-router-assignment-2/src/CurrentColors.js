import { Link } from 'react-router-dom';
import './CurrentColors.css'

const CurrentColors = ({colors}) => {
    console.log('********************')
    console.log(colors)
    return (
        <div className="CurrentColors">
            <h3>Current Colors: </h3>
            <ul>
            {colors.map((color) => <Link to={`/color/${color}`}><li key={color}>{color}</li> </Link>)}
            </ul>
        </div>
    )
}

export default CurrentColors;