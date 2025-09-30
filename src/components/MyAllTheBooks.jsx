import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasyBooks from "../books/fantasy.json";

function MyAllTheBooks() {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={5} className="g-4">
        {fantasyBooks.map((book) => {
          return (
            <Col key={book.asin}>
              <Card className="h-100">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price} $</Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MyAllTheBooks;
