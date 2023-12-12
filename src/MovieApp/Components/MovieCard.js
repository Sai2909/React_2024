import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

function MovieCard({ allMovieData, loading }) {
  return (
    <Container>
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Row className="card-container">
          {allMovieData ? (
            allMovieData.map((movie, index) => {
              return (
                <Col xs={3} className="mb-3">
                  <Card key={index} style={{ width: "100%" }}>
                    <Card.Img
                      variant="top"
                      src={movie.Poster}
                      alt="posters"
                      style={{ height: "220px" }}
                    />
                    <Card.Body>
                      <Card.Title>{movie.Title.slice(0, 10)}</Card.Title>
                      <Card.Text>Year : {movie.Year}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <h2 className="no-data">No Data</h2>
          )}
        </Row>
      )}
    </Container>
  );
}

export default MovieCard;
