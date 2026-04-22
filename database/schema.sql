-- Database Schema for JTr Marketing Agency

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  service VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE case_studies (
  id SERIAL PRIMARY KEY,
  brand VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  objective TEXT NOT NULL,
  image_url TEXT,
  result_1_number VARCHAR(50),
  result_1_label VARCHAR(100),
  result_2_number VARCHAR(50),
  result_2_label VARCHAR(100),
  result_3_number VARCHAR(50),
  result_3_label VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  badge VARCHAR(100) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE team_members (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  image_url TEXT,
  bio TEXT,
  is_founder BOOLEAN DEFAULT FALSE,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial data
INSERT INTO case_studies (brand, title, objective, image_url, result_1_number, result_1_label, result_2_number, result_2_label, result_3_number, result_3_label) VALUES
('Major Telecom Provider', 'Nationwide Youth SIM Card Campaign', 'Drive SIM card registrations among 18-25 year olds across 15 universities', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', '45K+', 'New Registrations', '2.3M', 'Social Reach', '15', 'Universities'),
('Leading Bank', 'Student Account Activation Tour', 'Increase student account openings through campus activations and influencer partnerships', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', '12K+', 'Accounts Opened', '85%', 'Engagement Rate', '20', 'Campuses'),
('FMCG Brand', 'Product Launch Roadshow', 'Launch new energy drink targeting urban youth through experiential marketing', 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80', '150K+', 'Product Samples', '5M+', 'Impressions', '8', 'Cities');

INSERT INTO team_members (name, position, image_url, bio, is_founder, display_order) VALUES
('John Kimaru Kinyatte', 'Founder & CEO', '/assets/images/Johnkinyette.png', 'With over 8 years of experience in youth marketing and brand activations', TRUE, 1),
('Theresiah Mwaurah', 'Co-Founder & CFO', '/assets/images/Trizamwaurah.png', 'Brings financial expertise and strategic business acumen to JTr', TRUE, 2);
