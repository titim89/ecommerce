import './ItemDetail.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';


const ItemDetail = ({id, name, price, img, desc, stock}) =>{
  const [quantity, setQuantity] = useState(0);

  const {addItem, getProduct} = useContext(CartContext)


  const handleOnAdd = (quantity) => {
    setQuantity(quantity)

    addItem({id, name, price, quantity, stock, img})
    
  }
    
    return (
        <Card style={{ maxWidth: '1000px' }} key={id} className='detailContainer' >
          <Row className='g-0'>
            <Col md='4'>
              <Card.Img src={img} alt={name} fluid />
            </Col>
            <Col md='8'>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Card.Text>
                  <small className='text-muted'>${price}</small>
                </Card.Text>
                <Card.Footer>
                  { quantity > 0 
                  ? <Link to='/cart'>Finalizar compra</Link> 
                  :<ItemCount stock ={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity}/>}
                </Card.Footer>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      );
}

export default ItemDetail;

