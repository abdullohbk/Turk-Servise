import "./intro.scss";
import "../../assets/images/Rectangle 12.png";
function intro() {
  return (
    <section id="intro">
      <div className="container">
        <h1>
          İşinize uygun <span>Tasarım</span> <br /> ve <span>Yazılımlar</span>{" "}
        </h1>
        <p>
          360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
          İşletmelerin <br /> ihtiyaçlarına uygun web tasarım ve web yazılım
          hizmetleri sunmaktayız.
        </p>

        <button>
          Detaylı İncele <i class="bi bi-chevron-double-right"></i>
        </button>
      </div>
    </section>
  );
}

export default intro;
