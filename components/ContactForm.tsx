'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (res.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
      <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
      <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
      <select required value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
        <option value="">Select Service</option>
        <option>Experiential Marketing</option>
        <option>Influencer Marketing</option>
        <option>Billboard Advertising</option>
        <option>Campus Activations</option>
        <option>Digital Marketing</option>
        <option>Brand Launch</option>
      </select>
      <textarea placeholder="Tell us about your project" rows={4} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
      <button type="submit" className="btn-primary btn-block" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
      {status === 'error' && <p className="error-msg">Failed to send message. Try again.</p>}
    </form>
  );
}
