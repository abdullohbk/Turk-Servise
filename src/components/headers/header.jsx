import "./header.scss"
import bg from "../../assets/images/Rectangle 12.png"


function header(){
    return (
      <header>
        <div className="container">
          <nav>
            <div className="logo__wrapper">
              <div></div>
              <p>
                Digital <span>Agency</span>
              </p>
            </div>
            <ul>
              <li>Ana Sayfa</li>
              <li>Kurumsal</li>
              <li>Neler Yapıyoruz?</li>
              <li>Blog</li>
            </ul>
            <div className="btn__wrapper">
              <p>En</p>
              <button>Müşteri Girişi</button>
            </div>
          </nav>
        </div>
      </header>
    );
}

export default header