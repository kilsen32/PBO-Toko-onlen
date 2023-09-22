import { Card, Button } from "react-bootstrap";
import { DataCards } from "../../../assets/data/dataCard";
import { Swiper, SwiperSlide } from "swiper/react";


const Cards = ( cart ) => {
  return (
    <div style={{ display: 'flex'}}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={cart.image} />
        <Card.Body>
          <Card.Title>{cart.title}</Card.Title>
          <Card.Text>{cart.harga}</Card.Text>
          <Button variant="danger">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const Card2 = () => {
  return (
    <div>
      <Swiper
        slidersPerView={4}
        spaceBetween={0}
        breakpoints={{
          576: {
            slidersPerView: 4,
          },
        }}
      >
        {DataCards.map((cart) => (
          <SwiperSlide key={cart.id}>
            <Cards cart={cart} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Card2;
