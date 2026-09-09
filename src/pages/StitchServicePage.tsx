import { Link, useLocation } from "react-router-dom";
import { StitchHeader } from "@/components/stitch/StitchHeader";
import { StitchFooter } from "@/components/stitch/StitchFooter";

const pageContent = {
  donanim: { tag: "ENDÜSTRİYEL OTOMASYON // SAHA SİSTEMLERİ", title: "Fabrikanızın fiziksel katmanını hassasiyetle güçlendirin.", intro: "Robotik otomasyon, PLC, pano, sensör ve hat modernizasyonu ile üretim zemininizi ölçülebilir ve emniyetli bir sisteme dönüştürüyoruz.", modules: ["Robotik hücreler & makine entegrasyonu", "PLC, SCADA ve pano imalatı", "Sensör, IoT ve saha telemetrisi", "Elektrik şalt & emniyet sistemleri"], stat: "99.85% KESİNTİSİZLİK" },
  yazilim: { tag: "KURUMSAL YAZILIM // VERİ MİMARİSİ", title: "Operasyon verinizi karar gücüne dönüştürün.", intro: "ERP, MES, SCADA, yapay zeka ve analitik katmanlarını tek yönetilebilir mimaride birleştiriyoruz.", modules: ["ERP & MES entegrasyonu", "SCADA, telemetri ve bulut", "Kestirimci bakım yapay zekası", "Analitik paneller & mobil saha"], stat: "< 1.2 SN TELEMETRİ" },
} as const;

export default function StitchServicePage() {
  const { pathname } = useLocation();
  const service = pathname.startsWith("/donanim") ? "donanim" : "yazilim";
  const page = pageContent[service];
  return <main className={`stitch-page stitch-detail ${service === "donanim" ? "detail-light" : "detail-dark"}`}><StitchHeader/><section className="detail-hero"><p className="stitch-kicker">{page.tag}</p><h1>{page.title}</h1><p>{page.intro}</p><Link to="/#proje-talep">PROJENİZİ DEĞERLENDİRELİM →</Link><b>{page.stat}</b></section><section className="detail-modules"><p className="stitch-kicker">YETKİNLİK MİMARİSİ</p><h2>Üretiminize göre yapılandırılmış sistem katmanları.</h2><div>{page.modules.map((module, index) => <article key={module}><span>0{index + 1}</span><h3>{module}</h3><p>Mevcut operasyonunuza, kullanıcı rollerinize ve büyüme hedeflerinize göre tasarlanmış ölçülebilir mühendislik altyapısı.</p></article>)}</div></section><section className="detail-rail"><div><p className="stitch-kicker">MÜHENDİSLİK PRENSİBİ</p><h2>Sahadan yönetim katına kesintisiz akış.</h2><p>Her entegrasyon, veriyi yalnızca taşımak için değil; güvenilir, izlenebilir ve harekete geçirilebilir kılmak için planlanır.</p></div><ul><li>01 · Keşif ve teknik analiz</li><li>02 · Mimari tasarım ve devreye alma</li><li>03 · Eğitim, izleme ve sürekli iyileştirme</li></ul></section><section className="detail-cta"><h2>Bir sonraki operasyonel standardınızı birlikte kuralım.</h2><Link to="/#proje-talep">MÜHENDİSLİK TALEBİ OLUŞTUR →</Link></section><StitchFooter/></main>;
}
