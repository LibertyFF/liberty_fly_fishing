import { Anchor, Award, ShieldCheck, Fish, Feather, Ship, Fuel, Snowflake, GraduationCap } from 'lucide-react';
import Hero from '../components/Hero';
import PhotoGallery from '../components/PhotoGallery';
import BookingCTA from '../components/BookingCTA';
import TopoBackground from '../components/TopoBackground';
import { louisianaGallery as louisianaImages } from '../data/galleryImages';

const trips = [
    {
        label: 'Half Day', hours: '4 hrs', price: '$600',
        desc: 'A focused morning session on the marsh — perfect for first-timers.',
        featured: false,
    },
    {
        label: 'Full Day', hours: '7–8 hrs', price: '$900',
        desc: 'More tides, more water, more fish. The definitive Louisiana marsh experience.',
        featured: true,
    },
    {
        label: '¾ Day', hours: '6 hrs', price: '$750',
        desc: 'Cover more ground and see multiple marsh systems in one trip.',
        featured: false,
    },
];

const included = [
    { Icon: Fish,           text: 'Rods & Reels' },
    { Icon: Feather,        text: 'Flies & Leaders' },
    { Icon: Ship,           text: 'Skiff & Fuel' },
    { Icon: Fuel,           text: 'Ramp Fees' },
    { Icon: Snowflake,      text: 'Ice & Water' },
    { Icon: GraduationCap, text: 'Expert Instruction' },
];

const trustBarItems = [
    { Icon: Anchor,      text: 'USCG Certified Captain' },
    { Icon: Award,       text: 'LA Commercial Saltwater License' },
    { Icon: ShieldCheck, text: 'Licensed & Insured' },
];

function PricingCard({ trip }) {
    return (
        <div className={`pricing-card${trip.featured ? ' featured' : ''}`}>
            {trip.featured && (
                <div style={{
                    position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
                    backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)',
                    fontFamily: 'var(--font-heading)', fontWeight: 800,
                    fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                    padding: '0.3rem 1rem', borderRadius: '0 0 6px 6px',
                    whiteSpace: 'nowrap',
                }}>
                    ★ Most Popular
                </div>
            )}

            <div style={{ marginTop: trip.featured ? '1rem' : 0 }}>
                <p style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 700,
                    fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: 'var(--color-text-muted)', margin: '0 0 0.3rem',
                }}>
                    {trip.hours}
                </p>
                <h3 style={{ color: 'var(--color-primary)', fontSize: '1.4rem', margin: '0 0 0.75rem', textTransform: 'none' }}>
                    {trip.label}
                </h3>
                <p style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 800,
                    fontSize: '2.4rem', color: 'var(--color-accent)', margin: '0 0 0.25rem', lineHeight: 1,
                }}>
                    {trip.price}
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: '0 0 1.25rem' }}>
                    per boat · max 2 anglers
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dark)', lineHeight: 1.65, margin: '0 0 1.5rem', flex: 1 }}>
                    {trip.desc}
                </p>
            </div>
            <a
                href="#contact"
                className={`btn${trip.featured ? ' btn-primary' : ''}`}
                style={{
                    textAlign: 'center', marginTop: 'auto',
                    ...(!trip.featured ? {
                        backgroundColor: 'transparent',
                        color: 'var(--color-primary)',
                        border: '1.5px solid rgba(26,46,69,0.25)',
                        boxShadow: 'none',
                    } : {}),
                }}
            >
                Book This Trip
            </a>
        </div>
    );
}

export default function LouisianaPage() {
    return (
        <>
            <Hero
                headline="Sight Fishing the Biloxi Marsh"
                headlineAccent="Southeast Louisiana"
                subtitle="World-class redfish on the fly — 45 minutes from New Orleans, guided by Patrick Gerig."
                ctaPrimary={{ label: 'Plan My Louisiana Trip', href: '#contact' }}
                ctaSecondary={{ label: '(504) 909-0428', href: 'tel:+15049090428' }}
                imageSrc="/images/favorites/louisiana/holding_big_fish.jpg"
                overlayOpacity={0.32}
                showSocialProof={false}
            />

            {/* Location stats */}
            <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '2.5rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
                        {[
                            { label: 'Region', value: 'Southeast Louisiana' },
                            { label: 'Nearest City', value: 'New Orleans — ~45 min' },
                            { label: 'Target Species', value: 'Redfish · Black Drum · Sheepshead · Speckled Trout · Jack Crevalle' },
                            { label: 'Season', value: 'Year-round' },
                        ].map(({ label, value }) => (
                            <div key={label}>
                                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: 700, marginBottom: '0.35rem' }}>
                                    {label}
                                </p>
                                <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: 'white' }}>{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" style={{ backgroundColor: 'var(--color-bg-light)', padding: 'var(--spacing-xxl) 0', position: 'relative', overflow: 'hidden' }}>
                <TopoBackground position="70% 40%" opacity={0.14} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="overline" style={{ display: 'block', textAlign: 'center' }}>Marsh Trips</span>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', textAlign: 'center', textTransform: 'none', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
                        Trips &amp; Pricing
                    </h2>
                    <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '3.5rem', maxWidth: '500px', margin: '0 auto 3.5rem' }}>
                        All led by Patrick Gerig. No fly fishing experience required.
                    </p>

                    {/* Trip cards — .pricing-card-grid gets mobile single-column from index.css */}
                    <div
                        className="pricing-card-grid"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', alignItems: 'start', marginBottom: '1.5rem' }}
                    >
                        {trips.map(t => <PricingCard key={t.label} trip={t} />)}
                    </div>

                    {/* Urgency line */}
                    <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: '3.5rem' }}>
                        Louisiana's best tides fill fast. Patrick runs a max of 2 anglers per skiff — reserve your slot early.
                    </p>

                    {/* What's Included strip */}
                    <div style={{ backgroundColor: 'var(--color-bg-off-white)', borderRadius: 'var(--radius-md)', padding: '2rem' }}>
                        <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-text-muted)', textAlign: 'center', marginBottom: '1.25rem' }}>
                            Everything Included
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', textAlign: 'center' }}>
                            {included.map(({ Icon, text }) => (
                                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                                    <Icon size={16} strokeWidth={1.75} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                                    <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-primary)' }}>{text}</span>
                                </div>
                            ))}
                        </div>
                        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '1rem', marginBottom: 0 }}>
                            Optional lunch add-on: +$20/angler &nbsp;·&nbsp; Conventional gear available on request at no extra charge
                        </p>
                    </div>
                </div>
            </section>

            {/* Pre-Trip: credentials trust bar + checklist */}
            <section style={{ padding: 0, backgroundColor: 'var(--color-bg-off-white)' }}>
                {/* Trust bar */}
                <div style={{ backgroundColor: 'var(--color-primary)', padding: '1.5rem 0' }}>
                    <div className="container">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                            {trustBarItems.map((item, i, arr) => (
                                <div key={item.text} style={{
                                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                                    padding: '0.5rem 1.75rem',
                                    borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                                }}>
                                    <item.Icon size={16} strokeWidth={2} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)' }}>
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Checklist */}
                <div className="container" style={{ padding: '3.5rem var(--spacing-lg)' }}>
                    <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '0.4rem', textTransform: 'none' }}>
                        Before Your Trip
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', marginBottom: '2rem' }}>
                        Two quick steps to complete before your guided trip.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                            <div style={{
                                width: '2.75rem', height: '2.75rem', borderRadius: '50%', flexShrink: 0,
                                backgroundColor: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.9rem', color: 'var(--color-primary)',
                            }}>1</div>
                            <div>
                                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-primary)', margin: '0 0 0.3rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                                    Get Your Fishing License
                                </p>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: '0 0 0.75rem', lineHeight: 1.6 }}>
                                    Louisiana requires a valid saltwater fishing license. A 3-day basic charter license is available for ~$20.
                                </p>
                                <a
                                    href="https://wlf.louisiana.gov"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-block',
                                        padding: '0.5rem 0',
                                        fontSize: '0.78rem',
                                        fontFamily: 'var(--font-heading)', fontWeight: 700,
                                        letterSpacing: '0.06em', textTransform: 'uppercase',
                                        color: 'var(--color-accent)', textDecoration: 'none',
                                        minHeight: '44px',
                                    }}
                                >
                                    Get license at wlf.louisiana.gov →
                                </a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                            <div style={{
                                width: '2.75rem', height: '2.75rem', borderRadius: '50%', flexShrink: 0,
                                backgroundColor: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.9rem', color: 'var(--color-primary)',
                            }}>2</div>
                            <div>
                                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-primary)', margin: '0 0 0.3rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                                    Sign the Liability Waiver
                                </p>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: '0 0 0.75rem', lineHeight: 1.6 }}>
                                    Takes 2 minutes. Please review and sign before your trip date.
                                </p>
                                <a
                                    href="https://drive.google.com/file/d/17ZFTJpImO50WnXwPob7WEhhW4flbwHpJ/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-block',
                                        padding: '0.5rem 0',
                                        fontSize: '0.78rem',
                                        fontFamily: 'var(--font-heading)', fontWeight: 700,
                                        letterSpacing: '0.06em', textTransform: 'uppercase',
                                        color: 'var(--color-accent)', textDecoration: 'none',
                                        minHeight: '44px',
                                    }}
                                >
                                    View &amp; Sign Waiver →
                                </a>
                            </div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.83rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                        Questions? Text or call Patrick directly: <a href="tel:+15049090428" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>(504) 909-0428</a>
                    </p>
                </div>
            </section>

            <PhotoGallery images={louisianaImages} title="Louisiana on the Water" />
            <BookingCTA defaultLocation="Louisiana" />
        </>
    );
}
