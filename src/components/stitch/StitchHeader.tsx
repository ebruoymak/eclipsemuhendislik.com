import { Link, NavLink } from "react-router-dom";

const links = [
  ["Yol Haritası", "#yol-haritasi"],
  ["Donanım & Otomasyon", "/donanim"],
  ["Yazılım & Veri", "/yazilim"],
  ["Sektörler", "#sektorler"],
  ["Vaka Analizleri", "#vakalar"],
] as const;

export function StitchHeader() {
  return <header className="stitch-header">
    <Link className="stitch-wordmark" to="/">Eclipse <span>Mühendislik</span></Link>
    <p className="stitch-system-label">ENDÜSTRİYEL SİSTEMLER &amp; TEKNOLOJİ <b>// SYS-ACTV</b></p>
    <nav aria-label="Ana navigasyon">
      {links.map(([label, href]) => href.startsWith("/")
        ? <NavLink key={label} to={href}>{label}</NavLink>
        : <a key={label} href={href}>{label}</a>)}
    </nav>
    <div className="stitch-actions"><span>TR <i>/</i> EN</span><a className="stitch-contact" href="#proje-talep">⌁ İLETİŞİME GEÇİN</a></div>
  </header>;
}
