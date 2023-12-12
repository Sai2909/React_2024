import { useEffect, useState } from 'react';
import { Pagination, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pagination/Fetching.css';

function FetchingData() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page) {
      setPage(selectedPage);
    }
  };

  return (
    <Container>
      {products.length > 0 && (
        <Row className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => (
            <Col key={prod.id} className="products__single">
              <img src={prod.thumbnail} alt={prod.title} />
              <span>{prod.title}</span>
            </Col>
          ))}
        </Row>
      )}

      {products.length > 0 && (
        <div className="pagination">
          <Pagination>
            <Pagination.Prev onClick={() => selectPageHandler(page - 1)} disabled={page <= 1} />
            {[...Array(products.length / 10)].map((_, i) => (
              <Pagination.Item
                key={i + 1}
                active={page === i + 1}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => selectPageHandler(page + 1)}
              disabled={page >= products.length / 10}
            />
          </Pagination>
        </div>
      )}
    </Container>
  );
}

export default FetchingData;
