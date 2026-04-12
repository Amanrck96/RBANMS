const testAdmissions = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/admission', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Aman Test',
        courseApplied: 'BCA',
        email: 'aman.rk123@gmail.com'
      })
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
testAdmissions();
