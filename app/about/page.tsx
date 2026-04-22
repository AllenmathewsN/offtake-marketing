import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const team = [
  {
    id: 2,
    name: 'Theresiah Mwaurah',
    position: 'Co-Founder & CFO',
    image_url: '/assets/images/Trizamwaurah.png',
    bio: 'Theresiah brings financial expertise and strategic business acumen to Offtake Marketing. With a background in corporate finance and business development, she ensures the agency operates efficiently while scaling sustainably.',
    bio_full: 'Her keen eye for numbers and passion for youth empowerment make her the perfect complement to the founding team. Theresiah oversees all financial operations, client relationships, and business growth strategies.',
    quote: '"Success in marketing isn\'t just about creativity—it\'s about smart investments, measurable returns, and sustainable growth."',
    is_founder: true,
    display_order: 1
  },
  {
    id: 1,
    name: 'John Kimaru Kinyatte',
    position: 'Founder & CEO',
    image_url: '/assets/images/Johnkinyette.png',
    bio: 'With over 8 years of experience in youth marketing and brand activations, John founded Offtake Marketing with a vision to revolutionize how brands connect with Kenya\'s youth.',
    bio_full: 'Before Offtake, John led major campaigns for top telecom and banking brands, consistently delivering results that exceeded expectations. His deep understanding of youth culture, combined with data-driven strategy, has made Offtake Marketing the agency of choice for brands serious about winning the youth market.',
    quote: '"We\'re not just building a marketing agency. We\'re building a movement that empowers brands to authentically connect with the next generation of African consumers."',
    is_founder: true,
    display_order: 2
  }
];

export default function About() {
  const founders = team.filter(m => m.is_founder);

  return (
    <>
      <Navbar />
      
      <section className="page-header">
        <div className="container">
          <h1>About Offtake</h1>
          <p>The story behind Kenya's boldest marketing agency</p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Who We Are</h2>
              <p className="lead">A dynamic, youth-driven marketing powerhouse based in Nairobi.</p>
              <p>Offtake Marketing was born from a simple observation: traditional marketing wasn't connecting with Kenya's youth. We saw brands spending millions on campaigns that missed the mark, using outdated strategies that didn't resonate with the digital-first, experience-hungry generation.</p>
              <p>So we built something different. A marketing agency that understands youth culture because we live it. An agency that combines street-smart creativity with corporate professionalism. An agency that doesn't just run campaigns—we create movements.</p>
            </div>
            <div className="about-image">
              <div className="image-container">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Offtake Marketing team" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="container">
          <h2 className="section-title">Meet Our Founders</h2>
          {founders.map((founder, i) => (
            <div key={founder.id} className="founder-grid" style={i > 0 ? {marginTop: '60px'} : {}}>
              {i % 2 === 0 ? (
                <>
                  <div className="founder-image">
                    <div className="image-container">
                      <img src={founder.image_url} alt={founder.name} loading="lazy" />
                    </div>
                  </div>
                  <div className="founder-content">
                    <h3>{founder.name}</h3>
                    <p className="founder-title">{founder.position}</p>
                    <p>{founder.bio}</p>
                    {founder.bio_full && <p>{founder.bio_full}</p>}
                    {founder.quote && <blockquote>{founder.quote}</blockquote>}
                  </div>
                </>
              ) : (
                <>
                  <div className="founder-content">
                    <h3>{founder.name}</h3>
                    <p className="founder-title">{founder.position}</p>
                    <p>{founder.bio}</p>
                    {founder.bio_full && <p>{founder.bio_full}</p>}
                    {founder.quote && <blockquote>{founder.quote}</blockquote>}
                  </div>
                  <div className="founder-image">
                    <div className="image-container">
                      <img src={founder.image_url} alt={founder.name} loading="lazy" />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
