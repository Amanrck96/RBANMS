// Simple test script to POST to the local enquiry API.
// Run with: node scripts/test-enquiry.js

async function main() {
  const url = 'http://localhost:9002/api/enquiry';
  const payload = {
    name: 'Test User',
    email: 'shabreen2k20@gmail.com',
    phone: '9999999999',
    subject: 'Diagnostics Test',
    message: 'Testing enquiry email end-to-end.'
  };
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const text = await res.text();
    console.log('Status:', res.status);
    console.log('Body:', text);
    if (!res.ok) process.exit(1);
  } catch (e) {
    console.error('Request failed:', e);
    process.exit(1);
  }
}

main();

