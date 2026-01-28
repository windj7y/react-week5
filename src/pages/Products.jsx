import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const apiBase = import.meta.env.VITE_API_BASE;
const apiPath = import.meta.env.VITE_API_PATH;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${apiBase}/api/${apiPath}/products`);
        setProducts(res.data.products);
      } catch (error) {
        alert(`取得產品失敗：${error.response.data.message}`);
      }
    }

    getProducts();
  }, []);

  return (<>
    <div className="container">
      <h2 className="mb-4">產品介紹</h2>
      <ul className="row gy-4 list-unstyled">
        {
          products && products.length > 0 ? (
            products.map((product) => (
              <li className="col-md-6 col-lg-3" key={ product.id }>
                <div class="card">
                  <img src={ product.imageUrl } class="card-img-top" alt="主圖" />
                  <div class="card-body">
                    <h3 class="fs-5 fw-bold card-title">{ product.title }</h3>
                    <p class="card-text mb-2">{ product.description }</p>
                    <div className="mb-2">
                      <span className="text-danger me-2">${ product.price }</span>
                      <del className="">${ product.origin_price }</del>
                    </div>
                    <Link className="btn btn-primary hover-primary w-100" to={`/product/${product.id}`}>詳細資料</Link>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li>尚無產品資料</li>
          )
        }
      </ul>
    </div>
  </>);
}

export default Products;