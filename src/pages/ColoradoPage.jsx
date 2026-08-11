import { Award, Anchor, ShieldCheck, Fish, Feather, Ship, Fuel, GraduationCap, UtensilsCrossed } from 'lucide-react';
import Hero from '../components/Hero';
import PhotoGallery from '../components/PhotoGallery';
import BookingCTA from '../components/BookingCTA';
import TopoBackground from '../components/TopoBackground';
import { coloradoGallery as coloradoImages } from '../data/galleryImages';

const floatTrips = [
    {
        label: 'Half Day', hours: '4 hrs', price: '$550',
        desc: 'Perfect for first-timers or a focused morning session.',
        included: false, featured: false,
    },
    {
        label: 'Full Day', hours: '7–8 hrs', price: '$800',
        desc: 'The full river experience — more water, more fish, lunch included.',
        included: true, featured: true,
    },
    {
        label: '¾ Day', hours: '6 hrs', price: '$650',
        desc: 'More time on the water without the full-day commitment.',
        included: false, featured: false,
    },
];

const wadeTrips = [
    { label: 'Half Day', hours: '4 hrs', price: '$400', notes: '+$75/extra person' },
    { label: '¾ Day',   hours: '6 hrs', price: '$500', notes: '+$75/extra person' },
    { label: 'Full Day', hours: '7–8 hrs', price: '$600', notes: 'Lunch included · +$75/person' },
];

const floatIncluded = [
    { Icon: Fish,             text: 'Rods & Reels' },
    { Icon: Feather,          text: 'Flies & Tackle' },
    { Icon: Ship,             text: 'Drift Boat' },
    { Icon: Fuel,             text: 'Fuel & Ramp Fees' },
    { Icon: GraduationCap,   text: 'Expert Instruction' },
    { Icon: UtensilsCrossed, text: 'Lunch (full day)' },
];

const trustBarItems = [
    { Icon: Award,       text: 'Colorado Outfitter License #675' },
    { Icon: Anchor,      text: 'USCG Certified Captain' },
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
                {trip.included && (
                    <p style={{
                        fontSize: '0.72rem', color: 'var(--color-accent)',
                        fontFamily: 'var(--font-heading)', fontWeight: 700,
                        letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem',
                    }}>
                        ✓ Lunch included
                    </p>
                )}
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

export default function ColoradoPage() {
    return (
        <>
            <Hero
                headline="Fly Fishing Colorado's Finest Rivers"
                headlineAccent="Vail Valley & Roaring Fork"
                subtitle="Gold Medal Trout Waters on the Roaring Fork, Eagle, and Colorado Rivers — guided by Patrick Gerig."
                ctaPrimary={{ label: 'Plan My Colorado Trip', href: '#contact' }}
                ctaSecondary={{ label: '(504) 909-0428', href: 'tel:+15049090428' }}
                imageSrc="/images/favorites/co/nature_on_river.JPG"
                overlayOpacity={0.32}
                showSocialProof={false}
            />

            {/* Location stats */}
            <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '2.5rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
                        {[
                            { label: 'Base Location', value: 'Edwards, Colorado' },
                            { label: 'Rivers', value: 'Roaring Fork · Eagle · Colorado' },
                            { label: 'Target Species', value: 'Brown · Cutthroat · Rainbow Trout' },
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
                <TopoBackground position="30% 60%" opacity={0.14} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="overline" style={{ display: 'block', textAlign: 'center' }}>Float Trips</span>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', textAlign: 'center', textTransform: 'none', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
                        Trips &amp; Pricing
                    </h2>
                    <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '3.5rem', maxWidth: '500px', margin: '0 auto 3.5rem' }}>
                        All led by Patrick Gerig. No experience necessary.
                    </p>

                    {/* Float trip cards — .pricing-card-grid gets mobile single-column from index.css */}
                    <div
                        className="pricing-card-grid"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', alignItems: 'start', marginBottom: '1.5rem' }}
                    >
                        {floatTrips.map(t => <PricingCard key={t.label} trip={t} />)}
                    </div>

                    {/* Urgency line */}
                    <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: '3.5rem' }}>
                        Patrick takes a maximum of 2 anglers per boat. Summer &amp; fall dates book out months in advance — reserve early.
                    </p>

                    {/* What's Included strip */}
                    <div style={{ backgroundColor: 'var(--color-bg-off-white)', borderRadius: 'var(--radius-md)', padding: '2rem', marginBottom: '3.5rem' }}>
                        <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-text-muted)', textAlign: 'center', marginBottom: '1.25rem' }}>
                            Everything Included
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', textAlign: 'center' }}>
                            {floatIncluded.map(({ Icon, text }) => (
                                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                                    <Icon size={16} strokeWidth={1.75} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                                    <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-primary)' }}>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wade trips */}
                    <h3 style={{ color: 'var(--color-primary)', fontSize: '1.3rem', marginBottom: '0.4rem', textTransform: 'none' }}>Wade Trips</h3>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
                        Walk and wade beautiful river sections. Waders &amp; boots provided.
                    </p>
                    <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
                            <thead>
                                <tr>
                                    {['Trip', 'Duration', 'Price', 'Notes'].map(h => (
                                        <th key={h} style={{ padding: '0.75rem 1rem', backgroundColor: 'var(--color-primary)', color: 'white', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'left', borderBottom: '2px solid var(--color-accent)' }}>
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {wadeTrips.map((row, i) => (
                                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                                        <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid #eee', fontWeight: 700 }}>{row.label}</td>
                                        <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid #eee', color: 'var(--color-text-muted)' }}>{row.hours}</td>
                                        <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid #eee', fontWeight: 800, color: 'var(--color-accent)', fontSize: '1.05rem' }}>{row.price}</td>
                                        <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid #eee', fontSize: '0.83rem', color: 'var(--color-text-muted)' }}>{row.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p style={{ fontSize: '0.83rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
                        Optional lunch add-on: +$20/angler
                    </p>
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
                                    Colorado requires a valid fishing license for all anglers. Purchase online before your trip.
                                </p>
                                <a
                                    href="https://cpwshop.com"
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
                                    Get license at cpwshop.com →
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

            <PhotoGallery images={coloradoImages} title="Colorado on the Water" />
            <BookingCTA defaultLocation="Colorado" />
        </>
    );
}
