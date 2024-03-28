import "./sizinicin.scss";
import leftImg from "../../assets/images/Rectangle 10.png";

function sizinicin() {
  return (
    <section id="sizinicin">
      <div className="container">
        <p className="girish">
          Neler <span>Yapıyoruz?</span>
        </p>
        <h2>Sizin için neler yapıyoruz?</h2>
        <p className="description">
          360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
          İşletmelerin <br /> ihtiyaçlarına uygun web tasarım ve web yazılım
          hizmetleri sunmaktayız.
        </p>

        <div className="sizinicin__wrapper">
          <img src={leftImg} alt="smthimg" />
          <div className="right">
            <h2 className="right__title">
              Sizin için neler yapabiliriz <br /> beraber bakalım.
            </h2>
            <p className="right__text">
              Tüm platformlarda sunduğumuz, web <br /> tasarım hizmetimiz ile
              ilgili bilgiler edinelim.
            </p>

            <div className="right__card">
              <h3>Web Tasarım</h3>
              <p className="right__text">
                Var olan veya yeni kurulan işletmenizin, modern bir <br />
                kurumsal kimliğe sahip olması için web sitesi.
              </p>
            </div>

            <div className="right__card">
              <h3>Dijital Pazarlama</h3>
              <p className="right__text">
                Web sitenizin veya işletmenizin, daha popüler hale <br />{" "}
                gelmesi için çeşitli hizmetler sunuyoruz.
              </p>
            </div>

            <div className="right__card">
              <h3>Prodüksiyon</h3>
              <p className="right__text">
                İşletmenizin tanıtımının daha güzel hale gelmesi <br /> için,
                fotoğraf çekimi ve prodüksiyon yapıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default sizinicin;
