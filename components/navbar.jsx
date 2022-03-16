import Link from "next/link"; 

const Navbar = (props) =>{
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <img
                src="navbrand.png"
                alt="brand"
                className="d-inline-block align-text-top img-fluid rounded-circle"
                width={30}
                height={24}
              />
              Hogar musical
            </a>
          </Link>
            
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item dropdown mx-3">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categorías
                </a>
                <div className="dropdown-content">
                  <Link href="/">
                  
                      <a className="dropdown-item" >
                         Piano
                      </a>
                  </Link>
                  <Link href="/">
                    <a className="dropdown-item" href="#">
                      Guitarra
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="dropdown-item" href="#">
                     Violin
                    </a>
                  </Link>
                  <div className="dropdown-divider" />
                  <Link href="/about"> 
                  <a className="dropdown-item" >
                    Sobre nosotros
                  </a>
                  </Link>
                </div>
              </li>
              <li className="nav-item px-2">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Iniciar Sesión
                  </a>
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link href="/">
                  <a className="nav-link">Registrarse</a>
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <form className="d-flex ">
                <input className="form-control me-2 " type="text" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
              </form>
          </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;