import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { brand, navigation } from '@/lib/brand-config';

export function Logo() { return brand.logo ? <img className="brand-logo" src={brand.logo} alt="the brandit." width="140" height="48" /> : <span className="brand-label">Brand It<span className="brand-period">.</span></span>; }
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 12); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
  useEffect(() => { if (!open) return; const handle = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); }; document.addEventListener('keydown', handle); return () => document.removeEventListener('keydown', handle); }, [open]);
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><div className="container header-inner"><a href="#top" aria-label="Brand It home" onClick={() => setOpen(false)}><Logo /></a><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav><div className="header-actions"><Button asChild variant="studio"><a href="#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight /></a></Button><Button variant="control" size="icon" className="mobile-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div></div>{open && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight /></a>)}</nav>}</header>;
}