function displayGrades() {
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwODA0MSIsImF1dGgiOiJST0xFX1NUVURFTlQiLCJleHAiOjE2OTE0MzkxMzZ9.bopdS73VdHwCI-IEupiKIGzpS30SoDDI9l2dKKEkpDAx4mHmZ2oIIcewFliga6Z8WwgLbrjQFZT8reADUTMpOQ';
  const apiUrl = 'https://193.227.14.58/api/student-courses?size=150&studentId.equals=20208041&includeWithdraw.equals=true';

  // Use a CORS proxy to bypass CORS restrictions
  const corsProxy = 'https://cors-anywhere.herokuapp.com/';

  fetch(corsProxy + apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'accept': '*/*',
      'cache-control': 'no-cache',
      'accept-encoding': 'gzip, deflate, br',
      'connection': 'keep-alive',
    },
  })
    .then(response => response.text()) // Use response.text() instead of response.json()
    .then(data => {
      // Parse the JSON data manually
      const jsonData = JSON.parse(data);

      // Process the data as needed
      console.log(jsonData);

      // Display the data in HTML
      const outputDiv = document.getElementById('output');
      outputDiv.innerText = JSON.stringify(jsonData);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
