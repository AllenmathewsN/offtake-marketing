import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>OFFTAKE</h3>
            <p>Kenya's leading youth marketing and brand activation agency.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services#experiential">Experiential Marketing</Link></li>
              <li><Link href="/services#influencer">Influencer Marketing</Link></li>
              <li><Link href="/services#billboard">Billboard Advertising</Link></li>
              <li><Link href="/services#campus">Campus Activations</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#case-studies">Our Work</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="LinkedIn">LI</a>
              <a href="#" aria-label="TikTok">TT</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Offtake Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
