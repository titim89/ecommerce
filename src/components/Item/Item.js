import './Item.css';
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card'

const Item = ({id, name, price, img, desc, stock}) =>{
    
    return (
         <Card className='cardContainer' key={id}>
            <Card.Img className='cardImg' variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Card.Text>{price}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <ItemCount stock ={stock}/>
            </Card.Footer>
        </Card>
    )   
}

export default Item;