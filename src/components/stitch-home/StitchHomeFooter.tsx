import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

const services = [
  "Ağ ve Sunucu Yönetimi",
  "Siber Güvenlik Danışmanlığı",
  "Yedekleme ve İş Sürekliliği",
  "Fabrika ERP Sistemleri",
  "İşletmeye Özel Yazılım Mimarisi",
  "Entegrasyon ve Veri Aktarımı",
];

export function StitchHomeFooter() {
  return (
    <footer className="shftr">
      <div className="shftr-grid">
        <div className="shftr-brand">
          <Logo light size="footer" />
          <p>
            Kritik kurumsal operasyonlar, fabrika süreçleri ve yüksek güvenlik gerektiren bilişim altyapıları için
            mühendislik temelli çözümler tasarlıyor ve uyguluyoruz.
          </p>
          <div className="shftr-nace">
            <span>NACE 622000 — BT ALTYAPI VE SİBER GÜVENLİK DANIŞMANLIĞI</span>
            <span>NACE 621000 — BİLGİSAYAR PROGRAMLAMA VE ÖZEL YAZILIM</span>
          </div>
        </div>
        <div className="shftr-services">
          <span className="shftr-label">Hizmet Alanları</span>
          <ul>
            {services.map((service) => (
              <li key={service}>
                <a href="#hizmet-secimi">{service}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="shftr-contact">
          <span className="shftr-label">İletişim</span>
          <Link to="/iletisim">Görüşme Başlatın</Link>
          <a href="#hizmet-secimi">Hizmet Kataloğu</a>
          <Link className="shftr-cta-link" to="/iletisim">
            Görüşme Talep Et →
          </Link>
        </div>
      </div>
      <div className="shftr-bottom">
        <span>© Eclipse Mühendislik. Tüm hakları saklıdır.</span>
        <span>Endüstriyel BT ve Kurumsal Yazılım Sistemleri</span>
      </div>
    </footer>
  );
}
