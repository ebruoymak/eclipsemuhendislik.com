import { Link } from "react-router-dom";

export function StitchHomePhilosophy() {
  return (
    <section className="shphil">
      <div className="shphil-inner">
        <span className="shphil-kicker">ENTEGRE MÜHENDİSLİK FELSEFESİ</span>
        <h3>İki farklı ihtiyaç. Tek teknoloji ortağı.</h3>
        <p>
          Yazılım ve donanım arasındaki kopuklukları ortadan kaldırıyoruz. Fabrikanızın sunucu ve ağ altyapısından
          üretim yönetim sistemlerine kadar eksiksiz entegrasyon sağlıyoruz.
        </p>
        <div className="shphil-actions">
          <Link className="shphil-btn shphil-btn-primary" to="/iletisim">
            Mühendislik Danışmanlığı Alın
          </Link>
          <a className="shphil-btn shphil-btn-secondary" href="#hizmet-secimi">
            Tüm Çözüm Kataloğunu Görün →
          </a>
        </div>
      </div>
    </section>
  );
}
