import { Col, Container, Row } from "react-bootstrap";
import productList from "../Shoppingcart/data.json"
import Book from "./Book"

function Home() {
  return (
    <Container>
    <Row>
        {productList.map(item => {
            return (
                <Col xl="3" key={item.id}>
                    <Book data={item} />
                </Col>
            )
        })}
    </Row>
</Container>
  )
}

export default Home
