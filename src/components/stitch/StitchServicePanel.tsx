import { Link } from "react-router-dom";
import type { StitchService } from "@/types/stitch";

const panels: Record<StitchService, { eyebrow: string; title: string; description: string; capabilities: string[]; image: string; alt: string; path: string }> = {
  hardware: { eyebrow: "SAHA & MEKANİK KATMANI // HARDWARE", title: "Daha güçlü bir operasyon inşa edin.", description: "Üretim gerçekliğinize göre özel olarak tasarlanmış endüstriyel donanım, otomasyon sistemleri ve ağır mekatronik altyapılar.", capabilities: ["Endüstriyel Otomasyon", "Makine Entegrasyonu", "Sensör & IoT Donanımı", "PLC & Pano İmalatı", "Hat Modernizasyonu", "Elektrik Şalt Sistemleri"], image: "/assets/stitch/hardware-automation.jpg", alt: "Endüstriyel otomasyon hattında robotik kol ve pano sistemleri", path: "/donanim" },
  software: { eyebrow: "DİJİTAL İSTİHBARAT // SOFTWARE", title: "Daha akıllı bir operasyon yönetin.", description: "Operasyonel sahadan toplanan ham verileri anlık ve stratejik kararlara dönüştüren entegre yazılım altyapıları.", capabilities: ["ERP & MES Entegrasyonu", "Endüstriyel Yapay Zeka", "Büyük Veri Analitiği", "İş Akışı Otomasyonu", "Mobil Saha Uygulamaları", "Dijital Dönüşüm Mimarisi"], image: "/assets/stitch/software-telemetry.jpg", alt: "Telemetri ve analitik panellerini gösteren dijital kontrol ekranı", path: "/yazilim" },
};

export function StitchServicePanel({ service }: { service: StitchService }) {
  const panel = panels[service];
  return <article className={`stitch-service stitch-${service}`}>
    <img src={panel.image} alt={panel.alt} loading="eager" fetchPriority="high" />
    <div className="stitch-service-body"><p className="stitch-kicker">{panel.eyebrow}</p><h2>{panel.title}</h2><p>{panel.description}</p><ul>{panel.capabilities.map(capability => <li key={capability}>{capability}</li>)}</ul><Link to={panel.path}>ÇÖZÜMLERİ KEŞFEDİN <b>→</b></Link></div>
  </article>;
}
