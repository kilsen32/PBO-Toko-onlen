import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function App() {
  return (
    <div>
      <img style={{width:"50%"}} src="/images/stores.jpg" />
      <div style={{marginLeft:"42rem", marginTop:"-5rem"}}>
      <h1 style={{marginTop:"-15rem"}}>Adjit Shop</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit praesentium labore, totam minus dolore sunt harum voluptas ratione illum sed aliquid autem enim placeat soluta dolor quas adipisci quae facere ducimus. Similique nihil eaque magnam amet ipsa cupiditate sequi eius quae ducimus tempora consequuntur nemo eos totam ut doloribus, eum at magni sunt velit quam aperiam. Corporis, omnis? Vel harum ducimus mollitia est minus, incidunt ipsam ut in sequi!</p>  
      </div>
      <div style ={{marginTop:"7rem"}} class="border-bottom border-dark border-3"></div>
      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-50 h-40"
            src="/images/contoh.jpg"
            alt="First slide"
          /> 
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 h-40"
            src="/images/contoh.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 h-40"
            src="/images/contoh.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <h1>Banner Iklan</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum consequuntur veritatis perspiciatis ratione, ipsam nobis ea voluptates sapiente odit nihil voluptatem, quibusdam fuga non! Itaque enim illo nihil similique minus!</p> */}
    </div>
  );
}

export default App;
