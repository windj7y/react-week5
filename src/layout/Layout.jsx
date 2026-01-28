import { Outlet, Link } from "react-router";

const Layout = () => {
  return (<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">sushi</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">首頁</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">產品介紹</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">購物車</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main className="py-5">
      <Outlet />
    </main>

    <footer className="bg-secondary py-3 mt-auto">
      <p className="text-white text-center mb-0">Copyright © sushi All rights reserved.</p>
    </footer>
  </>);
}

export default Layout;