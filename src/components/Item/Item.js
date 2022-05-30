import './Item.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({id, name, price, img}) =>{

    return (
         <Card className='cardContainer' key={id}>
            <Card.Img className='cardImg' src={img} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>    
                <Card.Text>${price}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to={`/detail/${id}`} className='boton'>Mas informacion</Link>
            </Card.Footer>
        </Card>
    )   
}

export default Item;