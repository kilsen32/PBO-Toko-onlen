import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <div>
      <div
        className="overflow-auto"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src="/images/eiger.png" />
          <Card.Body>
            <Card.Title>EIGER</Card.Title>
            <Card.Text>
              Koleksi pakaian dan aksesoris pria terbaru dari Eiger,
              perlengkapan outdoor dan petualangan terkemuka di Indonesia.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src="/images/chanel.png" />
          <Card.Body>
            <Card.Title>CHANEL</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src="/images/vonducth.webp" />
          <Card.Body>
            <Card.Title>VON DUTCH</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            src="/images/gucci-logo-transparent-free-png.webp"
          />
          <Card.Body>
            <Card.Title>GUCCI</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div
        style={{ marginTop: "7rem" }}
        className="border-bottom border-dark border-3"
      ></div>
    </div>
  );
}

export default BasicExample;
