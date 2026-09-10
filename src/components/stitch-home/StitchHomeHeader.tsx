import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

export function StitchHomeHeader() {
  return (
    <header className="shhdr">
      <div className="shhdr-inner">
        <Link className="shhdr-logo" to="/" aria-label="Eclipse Mühendislik anasayfa">
          <Logo size="compact" asLink={false} />
        </Link>
        <nav className="shhdr-nav" aria-label="Ana navigasyon">
          <a href="#hizmet-secimi">Hizmetler</a>
          <Link to="/donanim">Sistemler &amp; Güvenlik</Link>
          <Link to="/yazilim">ERP &amp; Özel Yazılım</Link>
          <Link to="/iletisim">İletişim</Link>
        </nav>
        <div className="shhdr-actions">
          <Link className="shhdr-cta" to="/iletisim">
            Görüşme Başlatın
          </Link>
        </div>
      </div>
    </header>
  );
}
