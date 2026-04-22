import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Stats from '@/components/Stats';

const caseStudies = [
  {
    id: 1,
    brand: 'Major Telecom Provider',
    title: 'Nationwide Youth SIM Card Campaign',
    objective: 'Drive SIM card registrations among 18-25 year olds across 15 universities',
    image_url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    result_1_number: '45K+',
    result_1_label: 'New Registrations',
    result_2_number: '2.3M',
    result_2_label: 'Social Reach',
    result_3_number: '15',
    result_3_label: 'Universities'
  },
  {
    id: 2,
    brand: 'Leading Bank',
    title: 'Student Account Activation Tour',
    objective: 'Increase student account openings through campus activations and influencer partnerships',
    image_url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    result_1_number: '12K+',
    result_1_label: 'Accounts Opened',
    result_2_number: '85%',
    result_2_label: 'Engagement Rate',
    result_3_number: '20',
    result_3_label: 'Campuses'
  },
  {
    id: 3,
    brand: 'FMCG Brand',
    title: 'Product Launch Roadshow',
    objective: 'Launch new energy drink targeting urban youth through experiential marketing',
    image_url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    result_1_number: '150K+',
    result_1_label: 'Product Samples',
    result_2_number: '5M+',
    result_2_label: 'Impressions',
    result_3_number: '8',
    result_3_label: 'Cities'
  }
];

export default function Home() {

  return (
    <>
      <Navbar />
      
      <section className="hero">
        <div className="hero-bg"><div className="hero-overlay"></div></div>
        <div className="container hero-content">
          <h1 className="hero-title">WE DON'T DO ADS.<br />WE CREATE <span className="accent">MOVEMENTS.</span></h1>
          <p className="hero-subtitle">Offtake Marketing — Kenya's leading youth marketing and brand activation agency.</p>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary btn-lg">Book a Strategy Call</a>
            <a href="#case-studies" className="btn-secondary btn-lg">View Our Work</a>
          </div>
          <Stats />
        </div>
        <div className="scroll-indicator"><span></span></div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">Full-spectrum marketing solutions for brands that want to win</p>
          <div className="services-grid">
            {[
              { title: 'Experiential Marketing & Roadshows', desc: 'Nationwide brand activations that create unforgettable experiences and drive real engagement.', href: '/services#experiential' },
              { title: 'Influencer & Creator Marketing', desc: 'Connect with Kenya\'s top influencers and content creators to amplify your brand message authentically.', href: '/services#influencer' },
              { title: 'Billboard & Outdoor Advertising', desc: 'Strategic outdoor placements across Kenya\'s major cities and highways for maximum visibility.', href: '/services#billboard' },
              { title: 'Campus Activations', desc: 'Direct access to university students through targeted campus tours and activations.', href: '/services#campus' },
              { title: 'Digital Campaign Strategy', desc: 'Data-driven digital marketing campaigns that deliver measurable results and ROI.', href: '/services#digital' },
              { title: 'Corporate Brand Launches', desc: 'End-to-end brand launch campaigns that make noise and capture market attention.', href: '/services#corporate' }
            ].map((service, i) => (
              <div key={i} className="service-card glass">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href={service.href} className="service-link">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-studies" id="case-studies">
        <div className="container">
          <h2 className="section-title">Campaign Success Stories</h2>
          <p className="section-subtitle">Real results for real brands</p>
          <div className="cases-grid">
            {caseStudies.map((cs: any) => (
              <div key={cs.id} className="case-card">
                <div className="case-image">
                  <img src={cs.image_url} alt={cs.title} loading="lazy" />
                </div>
                <div className="case-content">
                  <h4 className="case-brand">{cs.brand}</h4>
                  <h3 className="case-title">{cs.title}</h3>
                  <p className="case-objective">{cs.objective}</p>
                  <div className="case-results">
                    <div className="result-item">
                      <span className="result-number">{cs.result_1_number}</span>
                      <span className="result-label">{cs.result_1_label}</span>
                    </div>
                    <div className="result-item">
                      <span className="result-number">{cs.result_2_number}</span>
                      <span className="result-label">{cs.result_2_label}</span>
                    </div>
                    <div className="result-item">
                      <span className="result-number">{cs.result_3_number}</span>
                      <span className="result-label">{cs.result_3_label}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Dominate the Kenyan Market?</h2>
            <p>Let's create a campaign that gets people talking</p>
            <a href="#contact" className="btn-primary btn-lg">Let's Build Your Campaign</a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Talk</h2>
              <p>Ready to launch your next big campaign? Get in touch with our team.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div><h4>Location</h4><p>Nairobi, Kenya</p></div>
                </div>
                <div className="contact-item">
                  <div><h4>Email</h4><p>hello@offtakemarketing.co.ke</p></div>
                </div>
                <div className="contact-item">
                  <div><h4>Phone</h4><p>+254 700 000 000</p></div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
