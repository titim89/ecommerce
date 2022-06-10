import './Item.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Item = ({id, name, price, img}) =>{

    return (
         <Card className='cardContainer' key={id}>
            <Card.Img className='cardImg' src={img} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>    
                <Card.Text>${price}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="outlined" color="secondary" component={Link} to={`/detail/${id}`} style={{textDecoration: "none", margin: "5px"}}>Comprar</Button>
            </Card.Footer>
        </Card>
    )   
}

export default Item;