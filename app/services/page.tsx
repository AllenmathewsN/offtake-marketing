import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    id: 'experiential',
    badge: 'Experiential Marketing',
    title: 'Experiential Marketing & Roadshows',
    description: 'Create unforgettable brand experiences that connect with your audience on an emotional level.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
  },
  {
    id: 'influencer',
    badge: 'Influencer Marketing',
    title: 'Influencer & Creator Marketing',
    description: 'Leverage the power of Kenya\'s top influencers and content creators to authentically promote your brand.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80'
  },
  {
    id: 'billboard',
    badge: 'Outdoor Advertising',
    title: 'Billboard & Outdoor Advertising',
    description: 'Dominate Kenya\'s outdoor advertising space with strategic billboard placements in high-traffic locations.',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b9?w=800&q=80'
  },
  {
    id: 'campus',
    badge: 'Campus Marketing',
    title: 'Campus Activations',
    description: 'Direct access to Kenya\'s university students through targeted campus tours and activations.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80'
  },
  {
    id: 'digital',
    badge: 'Digital Strategy',
    title: 'Digital Campaign Strategy',
    description: 'Data-driven digital marketing campaigns across social media, search engines, and digital platforms.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    id: 'corporate',
    badge: 'Brand Launches',
    title: 'Corporate Brand Launches',
    description: 'Comprehensive brand launch campaigns that create maximum impact and market penetration.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80'
  }
];

export default function Services() {
  return (
    <>
      <Navbar />
      
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Full-spectrum marketing solutions that drive results</p>
        </div>
      </section>

      {services.map((service, i) => (
        <section key={service.id} className={`service-detail ${i % 2 === 1 ? 'alt' : ''}`} id={service.id}>
          <div className="container">
            <div className={`service-detail-grid ${i % 2 === 1 ? 'reverse' : ''}`}>
              {i % 2 === 0 ? (
                <>
                  <div className="service-detail-content">
                    <span className="service-badge">{service.badge}</span>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-detail-image">
                    <div className="image-container">
                      <img src={service.image} alt={service.title} loading="lazy" />
                    </div>
                    <div className="service-cta-box glass">
                      <h4>Ready to Launch?</h4>
                      <p>Let's plan your campaign</p>
                      <a href="/#contact" className="btn-primary">Get Started</a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="service-detail-image">
                    <div className="image-container">
                      <img src={service.image} alt={service.title} loading="lazy" />
                    </div>
                    <div className="service-cta-box glass">
                      <h4>Ready to Launch?</h4>
                      <p>Let's plan your campaign</p>
                      <a href="/#contact" className="btn-primary">Get Started</a>
                    </div>
                  </div>
                  <div className="service-detail-content">
                    <span className="service-badge">{service.badge}</span>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss which services are right for your brand</p>
            <a href="/#contact" className="btn-primary btn-lg">Book a Free Consultation</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
