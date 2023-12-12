import React from "react";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function SearchBar({ searchMovie, setSearchMovie, fetchMovieData }) {
	return (
        <Container className="p-3">
		<Form.Group as={Row} className="searchBox">
			<input column sm={4}
                className="form-control w-25"
				type="text"
				placeholder="Search here"
				value={searchMovie}
				onChange={(e) => {
					setSearchMovie(e.target.value);
				}}
				autoFocus
			/>
            <Col xs={2}>
			<button className="btn btn-danger" onClick={fetchMovieData}>
				search
			</button>
            </Col>
		</Form.Group>
        </Container>
	);
}

export default SearchBar;