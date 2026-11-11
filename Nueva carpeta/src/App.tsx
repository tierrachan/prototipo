import { useRef, useState } from "react";

type IconProps = {
  size?: number;
  className?: string;
};

function ShieldIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path
        d="M12 2.75c2.4 1.83 5.02 2.75 7 3.1v5.2c0 4.95-2.98 8.52-7 10.2-4.02-1.68-7-5.25-7-10.2v-5.2c1.98-.35 4.6-1.27 7-3.1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m8.9 12.1 2.05 2.05 4.35-4.55"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SendIcon({ size = 24 }: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path
        d="m4.2 4.8 16 7.2-16 7.2 2.1-6.1L14 12l-7.7-1.1-2.1-6.1Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function LinkIcon({ size = 24 }: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path
        d="m9.5 14.5 5-5M7.2 16.8l-1.05 1.05a3.32 3.32 0 0 1-4.7-4.7l3.2-3.2a3.32 3.32 0 0 1 4.7 0M16.8 7.2l1.05-1.05a3.32 3.32 0 0 1 4.7 4.7l-3.2 3.2a3.32 3.32 0 0 1-4.7 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ShareIcon({ size = 24 }: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <circle cx="18" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="54" viewBox="0 0 64 64" width="54">
      <path
        d="M29.1 8.9 7.2 47.1A5.3 5.3 0 0 0 11.8 55h40.4a5.3 5.3 0 0 0 4.6-7.9L34.9 8.9a3.35 3.35 0 0 0-5.8 0Z"
        fill="currentColor"
        opacity=".12"
      />
      <path
        d="M29.1 8.9 7.2 47.1A5.3 5.3 0 0 0 11.8 55h40.4a5.3 5.3 0 0 0 4.6-7.9L34.9 8.9a3.35 3.35 0 0 0-5.8 0Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="3.2"
      />
      <path d="M32 23v13" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
      <circle cx="32" cy="44" fill="currentColor" r="2.3" />
    </svg>
  );
}

function PhoneHeader({ status = "Protección activa" }: { status?: string }) {
  return (
    <header className="phone-header">
      <div className="brand-mark">
        <ShieldIcon size={25} />
      </div>
      <div>
        <div className="brand-name">LinkShield</div>
        <div className="brand-status">
          <span />
          {status}
        </div>
      </div>
      <button aria-label="Más opciones" className="more-button" type="button">
        <i />
        <i />
        <i />
      </button>
    </header>
  );
}

function PhoneShell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <article className="device-wrap" aria-label={label}>
      <div className="screen-label">{label}</div>
      <div className="phone">
        <div className="speaker" />
        <div className="phone-screen">{children}</div>
      </div>
    </article>
  );
}

export default function App() {
  const [toast, setToast] = useState("");
  const analysisRef = useRef<HTMLElement>(null);
  const resultRef = useRef<HTMLElement>(null);
  const chatRef = useRef<HTMLElement>(null);

  const focusScreen = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const startAnalysis = () => {
    focusScreen(analysisRef);
    window.setTimeout(() => focusScreen(resultRef), 2400);
  };

  const shareAlert = async () => {
    const shareData = {
      title: "Alerta de LinkShield",
      text: "Alerta: el enlace promocion-falsa.com fue identificado como phishing. No abras el enlace ni ingreses tus datos.",
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.text);
        setToast("Alerta copiada. Ya puedes enviarla a tu familia.");
        window.setTimeout(() => setToast(""), 3200);
      }
    } catch {
      // The native share dialog may be intentionally dismissed.
    }
  };

  return (
    <main className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="showcase-header">
        <div>
          <div className="eyebrow">
            <span>
              <ShieldIcon size={15} />
            </span>
            Asistente de ciberseguridad
          </div>
          <h1>
            Detecta enlaces peligrosos
            <br />
            sin complicaciones.
          </h1>
        </div>
        <p>
          LinkShield explica riesgos digitales con claridad, para que tú y tu familia naveguen con
          confianza.
        </p>
      </header>

      <section className="devices" aria-label="Flujo de análisis de LinkShield">
        <div ref={chatRef}>
          <PhoneShell label="1. Comparte el enlace">
            <div className="chat-screen">
              <PhoneHeader />
              <div className="chat-body">
                <div className="day-label">Hoy</div>
                <div className="bot-row">
                  <div className="bot-avatar">
                    <ShieldIcon size={19} />
                  </div>
                  <div className="message bot-message">
                    <p>¡Hola! Soy tu asistente de seguridad.</p>
                    <p>Envíame cualquier enlace y te diré si es seguro antes de que lo abras.</p>
                    <time>10:32</time>
                  </div>
                </div>
                <div className="message user-message">
                  <span className="message-link">http://promocion-falsa.com</span>
                  <time>
                    10:33 <b>✓✓</b>
                  </time>
                </div>
                <div className="privacy-note">
                  <ShieldIcon size={14} />
                  Tu consulta es privada y segura
                </div>
              </div>
              <div className="composer">
                <div className="input-look">
                  <LinkIcon size={20} />
                  <span>Pega un enlace aquí</span>
                </div>
                <button
                  aria-label="Enviar enlace para analizar"
                  className="send-button"
                  onClick={startAnalysis}
                  type="button"
                >
                  <SendIcon size={23} />
                </button>
              </div>
            </div>
          </PhoneShell>
        </div>

        <div ref={analysisRef}>
          <PhoneShell label="2. Analiza en segundos">
            <div className="analysis-screen">
              <PhoneHeader status="Análisis seguro" />
              <div className="analysis-content">
                <div className="scanner">
                  <div className="scan-orbit orbit-one" />
                  <div className="scan-orbit orbit-two" />
                  <div className="scanner-shield">
                    <ShieldIcon size={70} />
                    <span className="scan-line" />
                  </div>
                  <span className="scan-dot dot-one" />
                  <span className="scan-dot dot-two" />
                  <span className="scan-dot dot-three" />
                </div>
                <h2>Analizando enlace</h2>
                <p>Analizando la seguridad del enlace en tiempo real...</p>
                <div className="loading-dots" aria-label="Cargando">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="url-chip">
                  <LinkIcon size={16} />
                  promocion-falsa.com
                </div>
              </div>
              <div className="analysis-footer">
                <ShieldIcon size={16} />
                Revisando señales de fraude y suplantación
              </div>
            </div>
          </PhoneShell>
        </div>

        <div ref={resultRef}>
          <PhoneShell label="3. Recibe una respuesta clara">
            <div className="result-screen">
              <PhoneHeader status="Análisis completado" />
              <div className="result-content">
                <div className="result-kicker">
                  <span className="red-dot" />
                  Riesgo muy alto
                </div>
                <div className="alert-card">
                  <div className="alert-icon">
                    <AlertIcon />
                  </div>
                  <h2>🚨 ¡ALERTA DE FRAUDE!</h2>
                  <p>
                    Este enlace es un intento de suplantación de identidad{" "}
                    <strong>(Phishing).</strong>
                  </p>
                  <div className="warning-line">No ingreses tus datos</div>
                </div>
                <div className="reason">
                  <div className="reason-icon">!</div>
                  <div>
                    <strong>¿Por qué es peligroso?</strong>
                    <span>El sitio imita una página conocida para robar información personal.</span>
                  </div>
                </div>
              </div>
              <div className="result-actions">
                <button className="primary-action" onClick={shareAlert} type="button">
                  <ShareIcon size={22} />
                  Alertar a mi familia
                </button>
                <button
                  className="secondary-action"
                  onClick={() => focusScreen(chatRef)}
                  type="button"
                >
                  <LinkIcon size={20} />
                  Analizar otro enlace
                </button>
              </div>
            </div>
          </PhoneShell>
        </div>
      </section>

      <div aria-live="polite" className={`toast ${toast ? "toast-visible" : ""}`}>
        <ShieldIcon size={20} />
        {toast}
      </div>
    </main>
  );
}
