import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroSoftware from "@/assets/stitch-home/hero-erp-yazilim.jpg";
import heroInfra from "@/assets/stitch-home/hero-sistemler-guvenlik.jpg";
import { Logo } from "@/components/Logo";

const PRESETS = [
  { value: 75, label: "Altyapı Dünyası (75%)" },
  { value: 50, label: "Dengeli Görünüm (50%)" },
  { value: 25, label: "Yazılım Dünyası (25%)" },
] as const;

export function StitchSplitStage() {
  const [split, setSplitState] = useState(50);
  const [animated, setAnimated] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const setSplit = useCallback((percent: number, withAnimation: boolean) => {
    const clamped = Math.max(10, Math.min(90, percent));
    setAnimated(withAnimation);
    setSplitState(clamped);
  }, []);

  const onPointerMove = useCallback(
    (event: PointerEvent) => {
      if (!draggingRef.current || !stageRef.current) return;
      const rect = stageRef.current.getBoundingClientRect();
      const newPos = ((event.clientX - rect.left) / rect.width) * 100;
      setSplit(newPos, false);
    },
    [setSplit],
  );

  const onPointerUp = useCallback(() => {
    draggingRef.current = false;
    document.body.style.cursor = "";
    document.documentElement.style.userSelect = "";
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [onPointerMove, onPointerUp]);

  const startDrag = (event: React.PointerEvent) => {
    draggingRef.current = true;
    document.documentElement.style.userSelect = "none";
    document.body.style.cursor = "ew-resize";
    if (stageRef.current) {
      const rect = stageRef.current.getBoundingClientRect();
      setSplit(((event.clientX - rect.left) / rect.width) * 100, false);
    }
    event.preventDefault();
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      event.preventDefault();
      setSplit(split - 5, true);
    } else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      event.preventDefault();
      setSplit(split + 5, true);
    } else if (event.key === "Home") {
      event.preventDefault();
      setSplit(50, true);
    } else if (event.key === "PageUp") {
      event.preventDefault();
      setSplit(75, true);
    } else if (event.key === "PageDown") {
      event.preventDefault();
      setSplit(25, true);
    }
  };

  return (
    <section className="shstage-wrap" id="hizmet-secimi">
      <div
        ref={stageRef}
        className="shstage"
        style={{ "--split": `${split}%` } as React.CSSProperties}
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("a")) return;
          startDrag(event);
        }}
      >
        {/* Base layer — software world (light) */}
        <div className="shstage-base">
          <div className="shstage-bg">
            <img src={heroSoftware} alt="Fabrika ve yazılım süreçlerini inceleyen operasyon yöneticisi ve mühendis" loading="eager" />
            <div className="shstage-bg-fade-r" />
            <div className="shstage-bg-fade-t" />
          </div>
          <div className="shstage-badge-top shstage-badge-top-light">
            <div className="shstage-badge">
              <Logo size="badge" asLink={false} className="shstage-badge-logo" />
              <span className="shstage-dot" />
              <span>YAZILIM DÜNYASI</span>
            </div>
          </div>
          <div className="shstage-content shstage-content-light">
            <div className="shstage-tag shstage-tag-light">
              <span className="shstage-dot" />
              <span>KURUMSAL YAZILIM (NACE 621000)</span>
            </div>
            <h2>ERP &amp; Özel Yazılım</h2>
            <p>
              Üretim, stok, satın alma, satış ve finans süreçlerinizi işletmenize özel geliştirilen yazılımlarla tek
              merkezden kesintisiz yönetin.
            </p>
            <div className="shstage-capabilities shstage-capabilities-light">
              <span>Fabrika ERP Sistemleri</span>
              <span aria-hidden="true">•</span>
              <span>Özel Yazılım Mimarisi</span>
              <span aria-hidden="true">•</span>
              <span>Entegrasyon ve Veri Aktarımı</span>
            </div>
            <Link className="shstage-action shstage-action-light" to="/yazilim">
              <span>Yazılım Hizmetlerini İnceleyin</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Overlay layer — infrastructure world (dark), clipped by split */}
        <div
          className="shstage-overlay"
          style={{
            clipPath: `inset(0 calc(100% - var(--split)) 0 0)`,
            transition: animated ? "clip-path 300ms cubic-bezier(0.16, 1, 0.3, 1)" : "none",
          }}
        >
          <div className="shstage-bg">
            <img src={heroInfra} alt="Sunucu odasında ağ altyapısını inceleyen BT sistem mühendisi" loading="eager" />
            <div className="shstage-bg-fade-r-dark" />
            <div className="shstage-bg-fade-t-dark" />
          </div>
          <div className="shstage-badge-top shstage-badge-top-dark">
            <div className="shstage-badge shstage-badge-dark">
              <Logo light size="badge" asLink={false} className="shstage-badge-logo" />
              <span className="shstage-dot" />
              <span>ALTYAPI DÜNYASI</span>
            </div>
          </div>
          <div className="shstage-content shstage-content-dark">
            <div className="shstage-tag shstage-tag-dark">
              <span className="shstage-dot" />
              <span>SİSTEM &amp; SİBER GÜVENLİK (NACE 622000)</span>
            </div>
            <h2>Sistemler &amp; Güvenlik</h2>
            <p>
              İşletmenizin kurumsal ağ, sunucu, kullanıcı cihazı ve siber güvenlik omurgasını sıfır kesinti hedefiyle
              tasarlıyor ve yönetiyoruz.
            </p>
            <div className="shstage-capabilities shstage-capabilities-dark">
              <span>Ağ ve Sunucu Yönetimi</span>
              <span aria-hidden="true">•</span>
              <span>Siber Güvenlik Danışmanlığı</span>
              <span aria-hidden="true">•</span>
              <span>Yedekleme ve İş Sürekliliği</span>
            </div>
            <Link className="shstage-action shstage-action-dark" to="/donanim">
              <span>Sistem Hizmetlerini İnceleyin</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Split rail + draggable handle */}
        <div
          className="shstage-rail"
          style={{ left: `${split}%`, transition: animated ? "left 300ms cubic-bezier(0.16, 1, 0.3, 1)" : "none" }}
        >
          <div className="shstage-rail-line" />
          <div
            className="shstage-handle"
            role="slider"
            tabIndex={0}
            aria-label="Altyapı ve Yazılım hizmet alanlarını karşılaştırın"
            aria-valuemin={10}
            aria-valuemax={90}
            aria-valuenow={Math.round(split)}
            onPointerDown={startDrag}
            onKeyDown={onKeyDown}
            style={{ transition: animated ? "left 250ms ease-out" : "none" }}
          >
            <span aria-hidden="true">⇄</span>
          </div>
        </div>
      </div>

      {/* Presets toolbar */}
      <div className="shstage-toolbar">
        <div className="shstage-toolbar-hint">
          <span aria-hidden="true">⋮⋮</span>
          <span>Çizgiyi sürükleyin veya klavyenizdeki yön tuşlarını kullanın</span>
        </div>
        <div className="shstage-presets" role="group" aria-label="Görünüm Seçenekleri">
          {PRESETS.map((preset, i) => (
            <span key={preset.value} className="shstage-preset-group">
              {i > 0 && <span className="shstage-preset-sep">·</span>}
              <button
                type="button"
                className={`shstage-preset${Math.abs(split - preset.value) < 12 ? " active" : ""}`}
                onClick={() => setSplit(preset.value, true)}
              >
                {preset.label}
              </button>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
