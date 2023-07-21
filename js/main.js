function displayGrades(){
const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwODA0MSIsImF1dGgiOiJST0xFX1NUVURFTlQiLCJleHAiOjE2OTE0MzkxMzZ9.bopdS73VdHwCI-IEupiKIGzpS30SoDDI9l2dKKEkpDAx4mHmZ2oIIcewFliga6Z8WwgLbrjQFZT8reADUTMpOQ';
const apiUrl = 'https://193.227.14.58/api/student-courses?size=150&studentId.equals=20208041&includeWithdraw.equals=true';

fetch(apiUrl, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
  .then(response => response.json())
  .then(data => {
    // Process the data as needed
    console.log(data);
    // Display the data in HTML
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = JSON.stringify(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
