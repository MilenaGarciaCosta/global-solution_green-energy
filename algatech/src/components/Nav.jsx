import Logo from "../img/alga-logo.png";
import "../css/Nav.css";

const Navbar = () => {
  return (
    <div className="containerNav">
      <div id="img1"></div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <img src={Logo} id="logo" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Inicial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Potencial
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mais informações
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Beneficios
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      O poder das algas
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Receber atualizações do projeto
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-conhecer">
        <div className="btn-conhecer">
          <h1 id="explore">AlgaTech</h1>
          <p id="subtitulo">Explore o poder das Algas</p>
          <button id="btn-co">Comece agora</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
