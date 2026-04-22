'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

export default function Admin() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('/api/contacts')
      .then(res => res.json())
      .then(data => setContacts(data.data || []));
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ padding: '100px 20px' }}>
        <div className="container">
          <h1>Contact Submissions</h1>
          <table style={{ width: '100%', marginTop: '2rem', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f5f5f5' }}>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Email</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Phone</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Service</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Message</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact: any) => (
                <tr key={contact.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '1rem' }}>{contact.name}</td>
                  <td style={{ padding: '1rem' }}>{contact.email}</td>
                  <td style={{ padding: '1rem' }}>{contact.phone}</td>
                  <td style={{ padding: '1rem' }}>{contact.service}</td>
                  <td style={{ padding: '1rem' }}>{contact.message}</td>
                  <td style={{ padding: '1rem' }}>{new Date(contact.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
