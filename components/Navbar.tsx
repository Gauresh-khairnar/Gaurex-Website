import Link from 'next/link';
import { useState, useEffect } from 'react';
import { soundFx } from '../utils/sound';

export default function Navbar({ currentPath = '/' }: { currentPath?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const [musicActive, setMusicActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundActive;
    soundFx.enabled = next;
    setSoundActive(next);
    if (next) soundFx.playSuccess();
  };

  const toggleMusic = () => {
    const active = soundFx.toggleMusic();
    setMusicActive(active);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Calculator', href: '/calculator' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="navbar-logo" onClick={() => { soundFx.playClick(); setMenuOpen(false); }}>
          Gaur<span>ex</span>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={currentPath === link.href ? 'active' : ''}
                onClick={() => soundFx.playClick()}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-right">
          {/* MUSIC TOGGLE BUTTON */}
          <button
            className={`music-toggle-btn${musicActive ? ' active' : ''}`}
            onClick={toggleMusic}
            title="Toggle Luxury Ambient Synth Music"
          >
            {musicActive ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span className="sound-wave">
                  <span className="sound-bar" />
                  <span className="sound-bar" />
                  <span className="sound-bar" />
                  <span className="sound-bar" />
                </span>
                Music ON
              </span>
            ) : (
              '🎵 Music'
            )}
          </button>

          {/* SOUND FX TOGGLE BUTTON */}
          <button
            className={`sound-toggle-btn${soundActive ? ' active' : ''}`}
            onClick={toggleSound}
            title="Toggle UI Sound Effects"
          >
            {soundActive ? '🔊 FX ON' : '🔊 FX'}
          </button>

          {/* DESKTOP CTA */}
          <Link href="/contact" className="navbar-cta border-beam" onClick={() => soundFx.playClick()}>
            <span className="border-beam-inner" style={{ background: 'transparent', color: 'inherit' }}>
              Start Project
            </span>
          </Link>

          {/* HAMBURGER TOGGLE */}
          <button
            className="menu-btn"
            onClick={() => { soundFx.playClick(); setMenuOpen(!menuOpen); }}
            aria-label="Toggle Navigation Menu"
          >
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(4px, 5px)' } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(4px, -5px)' } : {}} />
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION DRAWER */}
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={currentPath === link.href ? 'active' : ''}
              onClick={() => { soundFx.playClick(); setMenuOpen(false); }}
            >
              {link.label}
            </Link>
          ))}

          <div style={{ width: '100%', height: '1px', background: 'var(--border)', margin: '1rem 0' }} />

          {/* MOBILE AUDIO CONTROLS */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              className={`music-toggle-btn${musicActive ? ' active' : ''}`}
              onClick={toggleMusic}
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}
            >
              {musicActive ? (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span className="sound-wave">
                    <span className="sound-bar" />
                    <span className="sound-bar" />
                    <span className="sound-bar" />
                    <span className="sound-bar" />
                  </span>
                  Luxury Music ON
                </span>
              ) : (
                '🎵 Luxury Music OFF'
              )}
            </button>

            <button
              className={`sound-toggle-btn${soundActive ? ' active' : ''}`}
              onClick={toggleSound}
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}
            >
              {soundActive ? '🔊 Sound FX ON' : '🔇 Sound FX OFF'}
            </button>
          </div>

          <Link
            href="/contact"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
            onClick={() => { soundFx.playClick(); setMenuOpen(false); }}
          >
            <span>Start Your Project ✦</span>
          </Link>

          <a
            href="https://wa.me/919579098477"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            style={{ width: '100%', justifyContent: 'center', borderColor: 'var(--whatsapp)', color: 'var(--whatsapp)' }}
          >
            <span>Chat on WhatsApp (+91 9579098477)</span>
          </a>
        </div>
      </div>
    </>
  );
}
