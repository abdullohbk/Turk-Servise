import "./paylasma.scss";
import card1 from "../../assets/images/Rectangle 9.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import card4 from "../../assets/images/card4.png";

function paylasma() {
  return (
    <section id="paylasma">
      <div className="container">
        <p className="paylasma__description">
          Neler <span>Yapıyoruz?</span>
        </p>
        <h2>Öğreniyoruz, sizinle paylaşıyoruz.</h2>
        <p className="paylasma__text">
          Alanında uzman yazar arkadaşlarımızın, bilgi paylaşımı yaptıkları
          yazıları inceleyelim.
        </p>
        <div className="buttons__wrapper">
          <button>Hepsini Gör</button>
          <button>Web Tasarım</button>
          <button>Kurumsal Kimlik Tasarımı</button>
          <button>SEO</button>
          <button>Dijital Pazarlama</button>
        </div>

        <div className="cards__wrapper">
          <div className="card">
            <img src={card1} alt="smthimg" />
            <a href="#">Dijital Pazarlama</a>
            <h3>
              Sosyal CRM Nedir? Sosyal <br /> CRM Avantajları Nelerdir?
            </h3>
            <p>
              Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM)
              stratejilerini sosyal...
            </p>

            <button>
              Devamını Oku <i class="bi bi-chevron-double-right"></i>
            </button>
          </div>

          <div className="card">
            <img src={card2} alt="smthimg" />
            <a href="#">Dijital Pazarlama</a>
            <h3>
              Sosyal CRM Nedir? Sosyal <br /> CRM Avantajları Nelerdir?
            </h3>
            <p>
              Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM)
              stratejilerini sosyal...
            </p>

            <button>
              Devamını Oku <i class="bi bi-chevron-double-right"></i>
            </button>
          </div>

          <div className="card">
            <img src={card3} alt="smthimg" />
            <a href="#">Dijital Pazarlama</a>
            <h3>
              Sosyal CRM Nedir? Sosyal <br /> CRM Avantajları Nelerdir?
            </h3>
            <p>
              Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM)
              stratejilerini sosyal...
            </p>

            <button>
              Devamını Oku <i class="bi bi-chevron-double-right"></i>
            </button>
          </div>

          <div className="card">
            <img src={card4} alt="smthimg" />
            <a href="#">Dijital Pazarlama</a>
            <h3>
              Sosyal CRM Nedir? Sosyal <br /> CRM Avantajları Nelerdir?
            </h3>
            <p>
              Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM)
              stratejilerini sosyal...
            </p>

            <button>
              Devamını Oku <i class="bi bi-chevron-double-right"></i>
            </button>
          </div>

          <div className="card">
            <img src={card1} alt="smthimg" />
            <a href="#">Dijital Pazarlama</a>
            <h3>
              Sosyal CRM Nedir? Sosyal <br /> CRM Avantajları Nelerdir?
            </h3>
            <p>
              Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM)
              stratejilerini sosyal...
            </p>

            <button>
              Devamını Oku <i class="bi bi-chevron-double-right"></i>
            </button>
          </div>

          <div className="card">
            <img src={card2} alt="smthimg" />
            <a href="#">Dijital Pazarlama</a>
            <h3>
              Sosyal CRM Nedir? Sosyal <br /> CRM Avantajları Nelerdir?
            </h3>
            <p>
              Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM)
              stratejilerini sosyal...
            </p>

            <button>
              Devamını Oku <i class="bi bi-chevron-double-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default paylasma;
