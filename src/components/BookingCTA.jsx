import { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, Calendar, Fish, CheckCircle, Phone, Mail, Camera } from 'lucide-react';
import TopoBackground from './TopoBackground';

// Calendar date-picker is hidden per client request. The CalendarPicker component
// and all of its wiring below are intentionally left in place — flip this to true
// to bring the date step back with no other changes needed.
const SHOW_CALENDAR = false;

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DOW    = ['Su','Mo','Tu','We','Th','Fr','Sa'];
const TRIPS  = [
    { id: 'half',  label: 'Half Day', detail: '4 hrs'   },
    { id: 'three', label: '¾ Day',    detail: '6 hrs'   },
    { id: 'full',  label: 'Full Day', detail: '7–8 hrs' },
];
const LOCATIONS = [
    { id: 'colorado',  label: 'Colorado'  },
    { id: 'louisiana', label: 'Louisiana' },
];
const trustPoints = [
    { Icon: Zap,         text: 'Responds within 24 hours'  },
    { Icon: Calendar,    text: 'Dates fill fast — book early' },
    { Icon: Fish,        text: 'All skill levels welcome'  },
    { Icon: CheckCircle, text: 'No payment to inquire'     },
];

const input = {
    width: '100%', padding: '0.75rem 1rem',
    border: '1px solid rgba(26,46,69,0.15)', borderRadius: '6px',
    fontSize: '0.95rem', fontFamily: 'var(--font-body)',
    color: 'var(--color-text-dark)', backgroundColor: '#fff',
    boxSizing: 'border-box', outline: 'none',
};

function CalendarPicker({ selected, onSelect }) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [view, setView] = useState(() => {
        const d = new Date(); d.setDate(1); d.setHours(0,0,0,0); return d;
    });

    const yr = view.getFullYear();
    const mo = view.getMonth();
    const firstDow   = new Date(yr, mo, 1).getDay();
    const totalDays  = new Date(yr, mo + 1, 0).getDate();
    const minMonth   = new Date(today.getFullYear(), today.getMonth(), 1);
    const canPrev    = new Date(yr, mo - 1, 1) >= minMonth;

    const cells = [...Array(firstDow).fill(null), ...Array.from({ length: totalDays }, (_, i) => i + 1)];

    return (
        <div>
            {/* Month nav */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'0.5rem' }}>
                <button type="button" onClick={() => canPrev && setView(new Date(yr, mo - 1, 1))}
                    style={{ background:'none', border:'none', padding:'0.25rem', cursor: canPrev ? 'pointer' : 'default',
                             color: canPrev ? 'var(--color-primary)' : '#d0d0d0', display:'flex', borderRadius:'4px' }}>
                    <ChevronLeft size={16} />
                </button>
                <span style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'0.82rem',
                               color:'var(--color-primary)', letterSpacing:'0.04em' }}>
                    {MONTHS[mo]} {yr}
                </span>
                <button type="button" onClick={() => setView(new Date(yr, mo + 1, 1))}
                    style={{ background:'none', border:'none', padding:'0.25rem', cursor:'pointer',
                             color:'var(--color-primary)', display:'flex', borderRadius:'4px' }}>
                    <ChevronRight size={16} />
                </button>
            </div>

            {/* Day-of-week labels */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', marginBottom:'0.15rem' }}>
                {DOW.map(d => (
                    <div key={d} style={{ textAlign:'center', fontSize:'0.58rem', fontFamily:'var(--font-heading)',
                                          fontWeight:700, letterSpacing:'0.06em', color:'var(--color-text-muted)', padding:'0.18rem 0' }}>
                        {d}
                    </div>
                ))}
            </div>

            {/* Date grid */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:'2px' }}>
                {cells.map((day, i) => {
                    if (!day) return <div key={`b${i}`} />;
                    const date   = new Date(yr, mo, day);
                    const isPast = date < today;
                    const isSel  = selected && date.getTime() === selected.getTime();
                    const isTod  = date.getTime() === today.getTime();
                    return (
                        <button
                            key={day}
                            type="button"
                            disabled={isPast}
                            onClick={() => onSelect(date)}
                            style={{
                                aspectRatio: '1', border: 'none', borderRadius: '4px',
                                maxHeight: '40px',
                                background: isSel ? 'var(--color-accent)' : isTod ? 'rgba(232,160,32,0.13)' : 'transparent',
                                color: isPast ? '#ccc' : isSel ? '#fff' : 'var(--color-text-dark)',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: isSel || isTod ? 700 : 400,
                                fontSize: '0.8rem',
                                cursor: isPast ? 'default' : 'pointer',
                                transition: 'background 0.12s',
                                outline: 'none',
                                position: 'relative',
                            }}
                            onMouseEnter={e => { if (!isPast && !isSel) e.currentTarget.style.background = 'rgba(26,46,69,0.07)'; }}
                            onMouseLeave={e => { if (!isPast && !isSel) e.currentTarget.style.background = isTod ? 'rgba(232,160,32,0.13)' : 'transparent'; }}
                        >
                            {day}
                            {isTod && !isSel && (
                                <span style={{ position:'absolute', bottom:'3px', left:'50%', transform:'translateX(-50%)',
                                               width:'3px', height:'3px', borderRadius:'50%', background:'var(--color-accent)' }} />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default function BookingCTA({ defaultLocation = '' }) {
    // Pages pass a capitalised label ("Louisiana"); LOCATIONS ids are lowercase.
    const requested = defaultLocation.toLowerCase();
    const [location,     setLocation]     = useState(
        LOCATIONS.some(l => l.id === requested) ? requested : 'colorado'
    );
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTrip, setSelectedTrip] = useState(null);
    const [name,  setName]  = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const switchLocation = (id) => { setLocation(id); setSelectedDate(null); setSelectedTrip(null); };

    // With the calendar hidden there is no date to pick, so the date requirement is
    // dropped from the gating chain — otherwise the form could never be submitted.
    const dateReady = !SHOW_CALENDAR || Boolean(selectedDate);
    const canSubmit = dateReady && selectedTrip && name.trim() && email.trim();
    const fmt = d => (d ? d.toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric' }) : '');
    const locationLabel = LOCATIONS.find(l => l.id === location)?.label;

    const handleSubmit = e => { e.preventDefault(); if (canSubmit) setSubmitted(true); };
    const reset = () => { setSelectedDate(null); setSelectedTrip(null); setName(''); setEmail(''); setSubmitted(false); };

    return (
        <section id="contact" style={{ padding:'5rem 0', backgroundColor:'var(--color-bg-light)', position:'relative', overflow:'hidden' }}>
            <TopoBackground position="85% 10%" opacity={0.18} />
            <div className="container" style={{ position:'relative', zIndex:1 }}>

                <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
                    <span className="overline" style={{ display:'block', textAlign:'center' }}>Book a Trip</span>
                    <h2 style={{ color:'var(--color-primary)', marginBottom:'0.75rem', textTransform:'none', fontSize:'clamp(1.6rem,2.5vw,2.4rem)' }}>
                        Ready to Get on the Water?
                    </h2>
                    <p style={{ color:'var(--color-text-muted)', fontSize:'1rem', maxWidth:'500px', margin:'0 auto' }}>
                        {SHOW_CALENDAR
                            ? 'Pick a date and Patrick will confirm availability within 24 hours.'
                            : 'Send a request and Patrick will confirm availability within 24 hours.'}
                    </p>
                </div>

                <div className="booking-grid">

                    {/* ── Left trust panel ── */}
                    <div>
                        <div style={{ backgroundColor:'var(--color-bg-off-white)', borderRadius:'var(--radius-md)', padding:'1.75rem', marginBottom:'1.75rem', borderLeft:'4px solid var(--color-accent)' }}>
                            <div style={{ color:'var(--color-accent)', fontSize:'0.85rem', letterSpacing:'2px', marginBottom:'0.75rem' }}>★★★★★</div>
                            <p style={{ fontStyle:'italic', fontSize:'0.95rem', lineHeight:'1.75', color:'var(--color-text-dark)', margin:'0 0 0.75rem' }}>
                                &ldquo;Patrick is one of the BEST guides I've ever fished with. You will not be disappointed.&rdquo;
                            </p>
                            <p style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'0.72rem', letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--color-primary)', margin:0 }}>
                                — Fred Carragher
                            </p>
                        </div>

                        <div style={{ display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'2rem' }}>
                            {trustPoints.map(({ Icon, text }) => (
                                <div key={text} style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
                                    <Icon size={18} strokeWidth={1.75} style={{ color:'var(--color-accent)', flexShrink:0 }} />
                                    <span style={{ fontSize:'0.9rem', color:'var(--color-text-dark)', fontFamily:'var(--font-heading)', fontWeight:600 }}>{text}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
                            <a href="tel:+15049090428" style={{ display:'flex', alignItems:'center', gap:'0.6rem', padding:'0.85rem 1.25rem', backgroundColor:'var(--color-primary)', color:'var(--color-accent)', borderRadius:'var(--radius-sm)', fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'0.85rem', letterSpacing:'0.05em', textDecoration:'none', minHeight:'44px' }}>
                                <Phone size={16} strokeWidth={2} /> (504) 909-0428
                            </a>
                            <a href="mailto:patrick@libertyflyfishing.com" style={{ display:'flex', alignItems:'center', gap:'0.6rem', padding:'0.7rem 1.25rem', backgroundColor:'var(--color-bg-off-white)', color:'var(--color-primary)', borderRadius:'var(--radius-sm)', fontFamily:'var(--font-heading)', fontWeight:600, fontSize:'0.82rem', textDecoration:'none', minHeight:'44px' }}>
                                <Mail size={16} strokeWidth={2} /> patrick@libertyflyfishing.com
                            </a>
                            <a href="https://www.instagram.com/libertyflyfishing/" target="_blank" rel="noopener noreferrer" style={{ display:'flex', alignItems:'center', gap:'0.6rem', padding:'0.65rem 1.25rem', color:'var(--color-text-muted)', fontFamily:'var(--font-heading)', fontWeight:600, fontSize:'0.8rem', textDecoration:'none', minHeight:'44px' }}>
                                <Camera size={16} strokeWidth={2} /> @libertyflyfishing
                            </a>
                        </div>
                    </div>

                    {/* ── Right calendar card ── */}
                    <div style={{ backgroundColor:'#fff', borderRadius:'var(--radius-md)', padding:'1.75rem', boxShadow:'0 4px 24px rgba(26,46,69,0.09)', border:'1px solid rgba(26,46,69,0.07)' }}>
                        {submitted ? (
                            <div style={{ textAlign:'center', padding:'3rem 1rem' }}>
                                <div style={{ color:'var(--color-accent)', fontSize:'2.5rem', marginBottom:'0.75rem' }}>✓</div>
                                <h3 style={{ color:'var(--color-primary)', fontSize:'1.2rem', marginBottom:'0.5rem', textTransform:'none' }}>Request sent!</h3>
                                <p style={{ color:'var(--color-text-muted)', fontSize:'0.9rem', marginBottom:'0.25rem' }}>
                                    {locationLabel}
                                    {selectedDate && <> &nbsp;·&nbsp; {fmt(selectedDate)}</>}
                                    &nbsp;·&nbsp; {TRIPS.find(t => t.id === selectedTrip)?.label}
                                </p>
                                <p style={{ color:'var(--color-text-muted)', fontSize:'0.9rem', lineHeight:1.6, marginBottom:'2rem' }}>
                                    Patrick will reach out to <strong style={{ color:'var(--color-primary)' }}>{email}</strong> within 24 hours.
                                </p>
                                <button onClick={reset} className="btn btn-primary" style={{ fontSize:'0.82rem', padding:'0.75rem 1.75rem' }}>
                                    Book another date
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>

                                {/* Location toggle */}
                                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.4rem', backgroundColor:'rgba(26,46,69,0.06)', borderRadius:'8px', padding:'0.25rem' }}>
                                    {LOCATIONS.map(loc => {
                                        const on = location === loc.id;
                                        return (
                                            <button key={loc.id} type="button" onClick={() => switchLocation(loc.id)}
                                                style={{
                                                    padding:'0.5rem',
                                                    border:'none',
                                                    borderRadius:'6px',
                                                    background: on ? '#fff' : 'transparent',
                                                    boxShadow: on ? '0 1px 4px rgba(26,46,69,0.12)' : 'none',
                                                    fontFamily:'var(--font-heading)',
                                                    fontWeight: on ? 700 : 500,
                                                    fontSize:'0.78rem',
                                                    color: on ? 'var(--color-primary)' : 'var(--color-text-muted)',
                                                    cursor:'pointer',
                                                    transition:'all 0.15s',
                                                    outline:'none',
                                                    letterSpacing:'0.03em',
                                                }}>
                                                {loc.label}
                                            </button>
                                        );
                                    })}
                                </div>

                                {SHOW_CALENDAR && (
                                    <>
                                        <CalendarPicker
                                            selected={selectedDate}
                                            onSelect={d => { setSelectedDate(d); setSelectedTrip(null); }}
                                        />

                                        <div style={{ height:'1px', background:'rgba(26,46,69,0.08)' }} />
                                    </>
                                )}

                                {/* Trip length */}
                                <div style={{ opacity: dateReady ? 1 : 0.38, pointerEvents: dateReady ? 'auto' : 'none', transition:'opacity 0.2s' }}>
                                    <p style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'0.63rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--color-text-muted)', margin:'0 0 0.5rem' }}>
                                        {selectedDate ? `Trip length — ${fmt(selectedDate)}` : 'Trip Length'}
                                    </p>
                                    <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.5rem' }}>
                                        {TRIPS.map(t => {
                                            const on = selectedTrip === t.id;
                                            return (
                                                <button key={t.id} type="button" onClick={() => setSelectedTrip(t.id)}
                                                    style={{
                                                        padding:'0.6rem 0.35rem',
                                                        border: `2px solid ${on ? 'var(--color-accent)' : 'rgba(26,46,69,0.13)'}`,
                                                        borderRadius:'6px',
                                                        background: on ? 'rgba(232,160,32,0.08)' : '#fff',
                                                        cursor:'pointer', transition:'all 0.12s',
                                                        textAlign:'center', outline:'none',
                                                    }}>
                                                    <div style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'0.73rem', color: on ? 'var(--color-accent)' : 'var(--color-primary)' }}>{t.label}</div>
                                                    <div style={{ fontSize:'0.63rem', color:'var(--color-text-muted)', marginTop:'0.1rem' }}>{t.detail}</div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Name + Email */}
                                <div style={{ display:'flex', flexDirection:'column', gap:'0.6rem', opacity: dateReady && selectedTrip ? 1 : 0.38, pointerEvents: dateReady && selectedTrip ? 'auto' : 'none', transition:'opacity 0.2s' }}>
                                    <input type="text"  placeholder="Your name"      value={name}  onChange={e => setName(e.target.value)}  autoComplete="name"  style={input} />
                                    <input type="email" placeholder="Email address"  value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" style={input} />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={!canSubmit}
                                    className="btn btn-primary"
                                    style={{ padding:'0.9rem', fontSize:'0.88rem', opacity: canSubmit ? 1 : 0.35, cursor: canSubmit ? 'pointer' : 'default', transition:'opacity 0.2s', textAlign:'center' }}
                                >
                                    {SHOW_CALENDAR
                                        ? (selectedDate ? `Request ${fmt(selectedDate)}` : 'Select a Date to Continue')
                                        : (selectedTrip ? 'Send Request' : 'Select a Trip Length to Continue')}
                                </button>

                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
