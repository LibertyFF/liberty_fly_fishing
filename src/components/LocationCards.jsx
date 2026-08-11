import { Link, useNavigate } from 'react-router-dom';
import TopoBackground from './TopoBackground';

const locations = [
    {
        name: 'Colorado',
        region: 'Vail Valley & Roaring Fork Valley',
        tagline: "Gold Medal trout fishing on three of Western Colorado's most iconic rivers.",
        species: ['Brown Trout', 'Cutthroat', 'Rainbow Trout'],
        trips: ['Float trips & wade trips', 'Half day, ¾ day, full day'],
        from: '$550',
        link: '/colorado',
        coverImage: '/images/favorites/co/boat_on_shore.JPG',
    },
    {
        name: 'Louisiana',
        region: 'Biloxi Marsh, Southeast Louisiana',
        tagline: 'World-class sight fishing for redfish in the heart of the Louisiana coastal marsh.',
        species: ['Redfish', 'Black Drum', 'Sheepshead', 'Speckled Trout', 'Jack Crevalle'],
        trips: ['Half day, ¾ day, full day', 'Fly & conventional gear'],
        from: '$600',
        link: '/louisiana',
        coverImage: '/images/louisiana/IMG_2244.jpeg',
    },
];

export default function LocationCards() {
    const navigate = useNavigate();

    return (
        <section
            id="locations"
            style={{
                backgroundColor: 'var(--color-bg-off-white)',
                padding: '3.5rem 0',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <TopoBackground position="70% 45%" opacity={0.18} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <span className="overline" style={{ display: 'block', textAlign: 'center' }}>Where We Fish</span>
                <h2 style={{
                    textAlign: 'center',
                    color: 'var(--color-primary)',
                    marginBottom: '0.6rem',
                    textTransform: 'none',
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)',
                }}>
                    Two World-Class Fisheries
                </h2>
                <p style={{
                    textAlign: 'center',
                    maxWidth: '560px',
                    margin: '0 auto 2.5rem',
                    color: 'var(--color-text-muted)',
                    fontSize: '1rem',
                }}>
                    Each location offers a completely different experience — both guided with the same expertise and care.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                }}>
                    {locations.map((loc) => (
                        <div
                            key={loc.name}
                            className="card location-card"
                            style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden', cursor: 'pointer' }}
                            onClick={() => navigate(loc.link)}
                        >
                            {/* Cover photo */}
                            <div
                                className="location-card-img-wrap"
                                style={{ aspectRatio: '3 / 2', overflow: 'hidden', position: 'relative', flexShrink: 0 }}
                            >
                                <img
                                    src={loc.coverImage}
                                    alt={`${loc.name} fly fishing`}
                                    className="card-cover-img"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                />
                                <div style={{
                                    position: 'absolute', top: '1rem', right: '1rem',
                                    backgroundColor: 'rgba(26,46,69,0.85)', backdropFilter: 'blur(6px)',
                                    borderRadius: '999px', padding: '0.3rem 0.85rem',
                                    border: '1px solid rgba(232,160,32,0.4)',
                                }}>
                                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.72rem', color: 'var(--color-accent)', letterSpacing: '0.06em' }}>
                                        From {loc.from}
                                    </span>
                                </div>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', backgroundColor: 'var(--color-accent)' }} />
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1.5rem 1.75rem 1.75rem' }}>
                                <div style={{ flex: 1 }}>
                                    <div style={{ marginBottom: '0.75rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '0.2rem', textTransform: 'none' }}>
                                            {loc.name}
                                        </h3>
                                        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', margin: 0 }}>
                                            {loc.region}
                                        </p>
                                    </div>

                                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dark)', lineHeight: '1.65', marginBottom: '1rem' }}>
                                        {loc.tagline}
                                    </p>

                                    {/* Species pills — no emoji */}
                                    <div style={{ marginBottom: '0.85rem' }}>
                                        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.45rem' }}>
                                            Target Species
                                        </p>
                                        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                                            {loc.species.map(s => (
                                                <span key={s} style={{
                                                    backgroundColor: 'rgba(26,46,69,0.07)',
                                                    borderRadius: '999px',
                                                    padding: '0.2rem 0.65rem',
                                                    fontSize: '0.73rem',
                                                    fontFamily: 'var(--font-heading)',
                                                    fontWeight: 600,
                                                    color: 'var(--color-primary)',
                                                }}>
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Trip options */}
                                    <div style={{ marginBottom: '1.25rem' }}>
                                        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.35rem' }}>
                                            Trip Options
                                        </p>
                                        {loc.trips.map((t, i) => (
                                            <p key={i} style={{ color: 'var(--color-text-dark)', margin: '0 0 0.15rem', fontSize: '0.88rem' }}>{t}</p>
                                        ))}
                                        <p style={{ margin: '0.5rem 0 0', fontSize: '0.76rem', color: 'var(--color-accent)', fontStyle: 'italic' }}>
                                            Limited dates available — book early.
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    to={`${loc.link}#pricing`}
                                    className="btn btn-primary"
                                    onClick={e => e.stopPropagation()}
                                    style={{ textAlign: 'center' }}
                                >
                                    Book This Trip
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .card-cover-img { transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1); }
                .location-card:hover .card-cover-img { transform: scale(1.06); }
            `}</style>
        </section>
    );
}
