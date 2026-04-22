'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <h1>OFFTAKE</h1>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/#case-studies">Work</Link></li>
          <li><Link href="/#contact" className="btn-primary">Get Started</Link></li>
        </ul>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
