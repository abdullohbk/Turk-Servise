import "./calisma.scss";
import coffe from "../../assets/images/Coffee.svg";
import packages from "../../assets/images/Package (1).svg";
import hour from "../../assets/images/clock.svg";

function calisma() {
  return (
    <section id="calisma">
      <div className="container">
        <p className="girish">
          Neler <span>Yapıyoruz?</span>
        </p>
        <h2>3 adımda çalışma sürecimiz</h2>
        <p>
          360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
          İşletmelerin <br /> ihtiyaçlarına uygun web tasarım ve web yazılım
          hizmetleri sunmaktayız.
        </p>

        <div className="card__wrapper">
          <div className="card">
            <div className="card__img--wrapper">
              <img src={coffe} alt="smthimg" className="card__img" />
            </div>
            <h4>Keşif ve Planlama</h4>
            <p>
              Belirlenen strateji ile tasarımın ve yazılımın oluşturulması
              sağlanır.
            </p>
          </div>

          <div className="card">
            <div className="card__img--wrapper">
              <img src={packages} alt="smthimg" className="card__img" />
            </div>
            <h4>Keşif ve Planlama</h4>
            <p>
              Belirlenen strateji ile tasarımın ve yazılımın oluşturulması
              sağlanır.
            </p>
          </div>

          <div className="card">
            <div className="card__img--wrapper">
              <img src={hour} alt="smthimg" className="card__img" />
            </div>
            <h4>Keşif ve Planlama</h4>
            <p>
              Belirlenen strateji ile tasarımın ve yazılımın oluşturulması
              sağlanır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default calisma;
