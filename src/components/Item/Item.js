import './Item.css';
import Card from 'react-bootstrap/Card'

const Item = ({id, name, price, img, stock}) =>{
    
    return (
         <Card className='cardContainer' key={id}>
            <Card.Img className='cardImg' variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>    
                <Card.Text>${price}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <button> Mas informacion </button>
            </Card.Footer>
        </Card>
    )   
}

export default Item;