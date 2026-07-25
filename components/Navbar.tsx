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
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <Link href="/" className="navbar-logo" onClick={() => soundFx.playClick()}>
        Gaur<span>ex</span>
      </Link>

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
            '🔇 Music OFF'
          )}
        </button>

        <button
          className={`sound-toggle-btn${soundActive ? ' active' : ''}`}
          onClick={toggleSound}
          title="Toggle UI Sound Effects"
        >
          {soundActive ? '🔊 FX ON' : '🔇 FX OFF'}
        </button>

        <Link href="/contact" className="navbar-cta border-beam" onClick={() => soundFx.playClick()}>
          <span className="border-beam-inner" style={{ background: 'transparent', color: 'inherit' }}>
            Start Project
          </span>
        </Link>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(4px, 5px)' } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(4px, -5px)' } : {}} />
        </button>
      </div>
    </nav>
  );
}
