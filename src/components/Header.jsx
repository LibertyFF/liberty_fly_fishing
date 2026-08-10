import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen]   = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                setScrolled(window.scrollY > 50);
                ticking = false;
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close the mobile menu whenever the route changes — including logo clicks and
    // browser back/forward. Adjusted during render rather than in an effect, which
    // avoids the extra commit-then-rerender pass an effect would cause.
    const [prevPath, setPrevPath] = useState(location.pathname);
    if (prevPath !== location.pathname) {
        setPrevPath(location.pathname);
        setIsOpen(false);
    }

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { label: 'Colorado',  to: '/colorado' },
        { label: 'Louisiana', to: '/louisiana' },
    ];

    return (
        <>
            <a href="#main" className="sr-only">Skip to main content</a>
            <header style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease',
                backgroundColor: scrolled ? 'rgba(26,46,69,0.97)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.18)' : 'none',
                padding: scrolled ? '0.45rem 0' : '0.7rem 0',
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
                        <img
                            src="/LIBERTY-FLYFISHING-LOGO-for%20dark-mode.svg"
                            alt="Liberty Fly Fishing — home"
                            style={{ height: '44px', width: 'auto', display: 'block', flexShrink: 0 }}
                        />
                    </Link>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsOpen(v => !v)}
                        className="mobile-toggle"
                        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={isOpen}
                        aria-controls="nav-menu"
                        style={{
                            display: 'none',
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            fontSize: '1.4rem',
                            cursor: 'pointer',
                            lineHeight: 1,
                            padding: '0.6rem',
                            minWidth: '44px',
                            minHeight: '44px',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>

                    <nav
                        id="nav-menu"
                        aria-label="Main navigation"
                        className={`nav-menu ${isOpen ? 'active' : ''}`}
                    >
                        <ul style={{ display: 'flex', gap: '2rem', margin: 0, padding: 0, alignItems: 'center' }}>
                            {navLinks.map(({ label, to }) => (
                                <li key={label}>
                                    <Link
                                        to={to}
                                        onClick={() => setIsOpen(false)}
                                        className="nav-link"
                                        style={{
                                            color: 'white',
                                            fontFamily: 'var(--font-heading)',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                            fontSize: '0.78rem',
                                            letterSpacing: '0.1em',
                                            textDecoration: 'none',
                                            paddingBottom: '2px',
                                            borderBottom: isActive(to)
                                                ? '2px solid var(--color-accent)'
                                                : '2px solid transparent',
                                            transition: 'border-color 0.2s ease',
                                            textShadow: scrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.35)',
                                        }}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        padding: '0.6rem 1.4rem',
                                        fontSize: '0.75rem',
                                        fontFamily: 'var(--font-heading)',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        backgroundColor: 'var(--color-accent)',
                                        color: 'var(--color-primary)',
                                        borderRadius: 'var(--radius-sm)',
                                        textDecoration: 'none',
                                        transition: 'background-color 0.2s ease, transform 0.15s ease',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                        minHeight: '44px',
                                    }}
                                    className="nav-book-btn"
                                >
                                    Book Now
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <style>{`
                    .nav-link:hover { border-bottom-color: var(--color-accent) !important; }
                    .nav-book-btn:hover { background-color: var(--color-accent-hover) !important; transform: translateY(-1px); }
                    @media (max-width: 768px) {
                        header { background-color: rgba(26,46,69,0.98) !important; backdrop-filter: blur(12px) !important; }
                        .mobile-toggle { display: flex !important; }
                        .nav-menu { display: none; position: absolute; top: 100%; left: 0; right: 0;
                            background-color: var(--color-primary); padding: 1.5rem; text-align: center;
                            box-shadow: 0 12px 24px rgba(0,0,0,0.2); }
                        .nav-menu.active { display: block; }
                        .nav-menu ul { flex-direction: column; gap: 0 !important; }
                        .nav-menu ul li a, .nav-menu ul li .nav-link {
                            display: block !important;
                            padding: 0.75rem 1rem !important;
                            min-height: 44px;
                        }
                    }
                `}</style>
            </header>
        </>
    );
}
