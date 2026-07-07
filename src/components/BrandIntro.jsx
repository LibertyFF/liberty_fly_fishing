import { Anchor, MapPin, Fish, Star } from 'lucide-react';
import TopoBackground from './TopoBackground';

const credentials = [
    { Icon: Anchor, title: 'USCG Certified', sub: 'Licensed & Insured' },
    { Icon: MapPin,  title: 'Two Fisheries',  sub: 'Colorado & Louisiana' },
    { Icon: Fish,    title: 'All Levels',      sub: 'First cast to expert' },
    { Icon: Star,    title: '57 Five-Star Reviews', sub: 'Google & Tripadvisor' },
];

export default function BrandIntro() {
    return (
        <section
            id="about"
            style={{
                padding: '5rem 0',
                backgroundColor: 'var(--color-bg-light)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <TopoBackground position="15% 20%" opacity={0.18} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                <div className="brand-intro-layout">
                    {/* About photo — static, no hover */}
                    <div
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            aspectRatio: '4 / 3',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: '0 24px 64px rgba(26,46,69,0.22)',
                        }}
                    >
                        <img
                            src="/images/colorado/image000000.jpg"
                            alt="Captain Patrick Gerig on the water"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                        />
                        <div style={{
                            position: 'absolute', bottom: 0, left: 0, right: 0,
                            height: '4px', backgroundColor: 'var(--color-accent)',
                        }} />
                    </div>

                    {/* Text */}
                    <div>
                        <span className="overline">About Liberty Fly Fishing</span>
                        <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.25rem', textTransform: 'none', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
                            Expert guided fly fishing in Colorado and Louisiana.
                        </h2>
                        <p style={{
                            fontSize: '1.05rem',
                            lineHeight: '1.85',
                            color: 'var(--color-text-dark)',
                            marginBottom: '1.5rem',
                        }}>
                            Liberty Fly Fishing is guided by Patrick Gerig — a USCG-certified guide
                            operating across two of the country's most unique fisheries: the
                            blue-ribbon trout rivers of Colorado's Vail and Roaring Fork valleys, and
                            the legendary redfish flats of Louisiana's Biloxi Marsh. Every trip is
                            built on preparation, adaptability, and a genuine commitment to putting
                            you on fish.
                        </p>

                        <a
                            href="#reviews"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                color: 'var(--color-accent)',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 700,
                                fontSize: '0.78rem',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                textDecoration: 'none',
                                transition: 'opacity 0.2s',
                            }}
                        >
                            See what 57 anglers are saying →
                        </a>
                    </div>
                </div>

                {/* Credential grid */}
                <div className="brand-credential-grid">
                    {credentials.map((c, i) => (
                        <div key={c.title} style={{
                            padding: '1.75rem 1.5rem',
                            textAlign: 'center',
                            borderRight: i < credentials.length - 1 ? '1px solid rgba(26,46,69,0.1)' : 'none',
                            borderTop: '3px solid var(--color-accent)',
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>
                                <c.Icon size={28} strokeWidth={1.5} />
                            </div>
                            <p style={{
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 800,
                                fontSize: '0.8rem',
                                letterSpacing: '0.06em',
                                color: 'var(--color-primary)',
                                margin: '0 0 0.2rem',
                                textTransform: 'uppercase',
                            }}>{c.title}</p>
                            <p style={{
                                fontSize: '0.75rem',
                                color: 'var(--color-text-muted)',
                                margin: 0,
                            }}>{c.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
