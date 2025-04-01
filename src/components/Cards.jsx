import { Col, Container, Row, Carousel } from "react-bootstrap";
import books from "../Horror/horror.json";
import { Component } from "react";

class Cards extends Component {
  state = {
    activeBook: books[0],
  };

  render() {
    const chunkedBooks = []; 
    
    for (let i = 0; i < books.length; i += 3) {
      chunkedBooks.push(books.slice(i, i + 3));
    }

    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} className="text-center">
            <Carousel
              onSlide={(i) => {
                console.log("funziona??", i);
                this.setState({
                  activeBook: books[i],
                });
              }}
            >
              {chunkedBooks.map((bookGroup, index) => {
                return (
                  <Carousel.Item key={index}>
                    <Row className="d-flex justify-content-center">
                      {bookGroup.map((book) => {
                        return (
                          <Col key={book.asin} xs={12} sm={6} md={4} lg={4}>
                            <div className="card h-100">
                              <img
                                src={book.img}
                                alt={"immagine di " + book.title}
                                className="d-block mx-auto"
                                style={{
                                  width: "100%",
                                  height: "300px",
                                  objectFit: "cover",
                                }}
                              />
                              <div className="card-body d-flex flex-column justify-content-between">
                              <h5 className="d-flex flex-column  flex-grow-1">{book.title}</h5>
                              <p>€ {book.price}</p>
                            </div>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;
