import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Pagination/Fetching.css';

function Pagi() {
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
    <div className="container mt-5">
      {products.length > 0 && (
        <div className="row">
          {products.slice(page * 10 - 10, page * 10).map((prod) => (
            <div key={prod.id} className="col-md-4 mb-4">
              <img src={prod.thumbnail} alt={prod.title} className="img-fluid" />
              <p className="mt-2">{prod.title}</p>
            </div>
          ))}
        </div>
      )}

      {products.length > 0 && (
        <div className="d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              <li className={`page-item ${page <= 1 ? 'disabled' : ''}`}>
                <span className="page-link" onClick={() => selectPageHandler(page - 1)}>
                  Previous
                </span>
              </li>
              {[...Array(products.length / 10)].map((_, i) => (
                <li
                  key={i + 1}
                  className={`page-item ${page === i + 1 ? 'active' : ''}`}
                  onClick={() => selectPageHandler(i + 1)}
                >
                  <span className="page-link">{i + 1}</span>
                </li>
              ))}
              <li className={`page-item ${page >= products.length / 10 ? 'disabled' : ''}`}>
                <span className="page-link" onClick={() => selectPageHandler(page + 1)}>
                  Next
                </span>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Pagi;
