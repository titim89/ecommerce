import './ItemDetail.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, price, img, desc, stock}) =>{
    
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
                <ItemCount stock ={stock}/>
                </Card.Footer>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      );
}

export default ItemDetail;

