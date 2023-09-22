import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    
    <div> 
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' ,justifyContent:"center"}}>
        <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="/images/louis-removebg-preview.png" />
        <Card.Body>
            <Card.Title>LOUIS VUITTION</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="/images/erigo.jpg" />
        <Card.Body>
            <Card.Title>ERIGO</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="/images/stone.png" />
        <Card.Body>
            <Card.Title>STONE ISLAND</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="/images/Bape.png" />
        <Card.Body>
            <Card.Title>BAPE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div style ={{marginTop:"7rem"}} class="border-bottom border-dark border-3"></div>
    </div>
    
  );
}

export default BasicExample;
