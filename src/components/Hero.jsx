import heroBg from '../assets/hero_background.png';

const GRAIN = "data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function Hero({
    headline       = "Guided Fly Fishing",
    headlineAccent = "Experiences",
    subtitle       = null,
    ctaPrimary     = { label: "Book Now", href: "#contact" },
    ctaSecondary   = { label: "Email Patrick", href: "mailto:patrick@libertyflyfishing.com" },
    imageSrc       = null,
    overlayOpacity = 0.52,
    showSocialProof = true,
}) {
    const bgSrc         = imageSrc || heroBg;
    const overlayBase   = `rgba(26,46,69,${overlayOpacity})`;
    const overlayGradTop = `rgba(26,46,69,${(overlayOpacity * 0.48).toFixed(2)})`;
    const overlayGradBot = `rgba(26,46,69,${Math.min(1, overlayOpacity * 1.5).toFixed(2)})`;

    const defaultSubtitle = "Gold Medal trout on Colorado's iconic rivers. World-class redfish in the Louisiana marsh. Guided by Patrick Gerig — USCG-certified, 57 five-star reviews.";

    return (
        <section
            className="hero-section"
            style={{
                position: 'relative',
                overflow: 'hidden',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 1rem',
                backgroundColor: 'var(--color-primary)',
            }}
        >
            {/* Background photo — high priority because it's the LCP element */}
            <img src={bgSrc} alt="" aria-hidden="true" fetchpriority="high" style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center',
                zIndex: 0,
            }} />

            {/* Overlay */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundColor: overlayBase,
                backgroundImage: `linear-gradient(to bottom, ${overlayGradTop} 0%, ${overlayGradBot} 100%)`,
                zIndex: 1,
            }} />

            {/* Grain */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url("${GRAIN}")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '256px 256px',
                opacity: 0.045,
                mixBlendMode: 'overlay',
                zIndex: 2,
                pointerEvents: 'none',
            }} />

            {/* Content */}
            <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                {/* Geography overline */}
                <p style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    marginBottom: '1rem',
                    opacity: 0.9,
                }}>
                    — Vail Valley &nbsp;·&nbsp; Roaring Fork Valley &nbsp;·&nbsp; Western Slope &nbsp;·&nbsp; Louisiana Marsh —
                </p>

                <h1 className="animate-fade-in" style={{
                    fontSize: 'clamp(2rem, 4.5vw, 3.6rem)',
                    marginBottom: '1.25rem',
                    textShadow: '0 3px 14px rgba(0,0,0,0.45)',
                    lineHeight: 1.08,
                    color: 'white',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                }}>
                    {headline}<br />
                    <span style={{ color: 'var(--color-accent)' }}>{headlineAccent}</span>
                </h1>

                <p className="animate-fade-in" style={{
                    fontSize: '1rem',
                    maxWidth: '580px',
                    margin: '0 auto 2.5rem',
                    animationDelay: '0.2s',
                    opacity: 0,
                    textShadow: '0 2px 6px rgba(0,0,0,0.5)',
                    lineHeight: 1.75,
                    letterSpacing: '0.02em',
                }}>
                    {subtitle || defaultSubtitle}
                </p>

                {/* CTAs */}
                <div className="animate-fade-in" style={{
                    display: 'flex',
                    gap: '0.9rem',
                    justifyContent: 'center',
                    animationDelay: '0.4s',
                    opacity: 0,
                    flexWrap: 'wrap',
                    marginBottom: '2.5rem',
                }}>
                    <a href={ctaPrimary.href} className="btn btn-primary" style={{
                        padding: '0.9rem 2.4rem',
                        fontSize: '0.82rem',
                        minHeight: '44px',
                    }}>
                        {ctaPrimary.label}
                    </a>
                    {ctaSecondary && (
                        <a href={ctaSecondary.href} className="btn" style={{
                            padding: '0.9rem 2.4rem',
                            fontSize: '0.82rem',
                            backgroundColor: 'rgba(255,255,255,0.12)',
                            backdropFilter: 'blur(6px)',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.3)',
                            minHeight: '44px',
                        }}>
                            {ctaSecondary.label}
                        </a>
                    )}
                </div>

                {/* Social proof */}
                {showSocialProof && (
                    <div className="animate-fade-in" style={{
                        animationDelay: '0.6s',
                        opacity: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        flexWrap: 'wrap',
                    }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: 'rgba(255,255,255,0.12)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '999px',
                            padding: '0.45rem 1.1rem',
                            fontSize: '0.78rem',
                            cursor: 'default',
                        }}>
                            <span style={{ color: 'var(--color-accent)', letterSpacing: '1px' }}>★★★★★</span>
                            <span style={{ color: 'white', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>57 Five-Star Reviews</span>
                            <span style={{ color: 'rgba(255,255,255,0.5)' }}>·</span>
                            <span style={{ color: 'rgba(255,255,255,0.75)' }}>Google &amp; Tripadvisor</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
