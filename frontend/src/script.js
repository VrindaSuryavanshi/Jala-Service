// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('userForm').addEventListener('submit', function(event) {
//         event.preventDefault();
//         const name = document.getElementById('name').value;
//         const phoneNumber = document.getElementById('phoneNumber').value;
//         const doj = document.getElementById('doj').value;
//         const email = document.getElementById('email').value;
//         const candidateType = document.getElementById('candidateType').value;
//         const status = document.getElementById('status').value;
//         const comments = document.getElementById('comments').value;
//         const experience = document.getElementById('experience').value;
//         const dueBy = document.getElementById('dueBy').value;

//         console.log(name);

//         const data = {
//             name,
//             phoneNumber,
//             doj,
//             email,
//             candidateType,
//             status,
//             comments,
//             experience,
//             dueBy
//         };

//         fetch('http://localhost:4000/api/users', { // Ensure correct URL
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//         .then(response => response.json())
//         .then(data => {
//             alert('User saved successfully');
//             window.location.href = '/';  // Redirect to home page
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('Error saving user');
//         });
//     });

//     document.getElementById('searchButton').addEventListener('click', function() {
//         const phoneNumber = document.getElementById('searchNumber').value;

//         fetch(`http://localhost:4000/api/users/${phoneNumber}`) // Ensure correct URL
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             const userDetails = document.getElementById('userDetails');
//             userDetails.innerHTML = `
//                 <h3>User Details</h3>
//                 <p>Phone Number: ${data.phoneNumber || 'N/A'}</p>
//                 <p>Date of Joining: ${data.doj || 'N/A'}</p>
//                 <p>Email ID: ${data.email || 'N/A'}</p>
//                 <p>Candidate Type: ${data.candidateType || 'N/A'}</p>
//                 <p>Status: ${data.status || 'N/A'}</p>
//                 <p>Comments: ${data.comments || 'N/A'}</p>
//                 <p>Experience: ${data.experience || 'N/A'}</p>
//                 <p>Due By: ${data.dueBy || 'N/A'}</p>
//             `;
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('User not found');
//         });
//     });

//     window.viewCategory = function(category) {
//         fetch(`http://localhost:4000/api/users/category/${category}`) // Ensure correct URL
//         .then(response => response.json())
//         .then(data => {
//             const categoryDetails = document.getElementById('categoryDetails');
//             categoryDetails.innerHTML = `<h3>${category} Members</h3>`;
//             data.forEach(user => {
//                 categoryDetails.innerHTML += `
//                     <p>Phone Number: ${user.phoneNumber}</p>
//                     <p>Date of Joining: ${user.doj}</p>
//                     <p>Email ID: ${user.email}</p>
//                     <p>Candidate Type: ${user.candidateType}</p>
//                     <p>Status: ${user.status}</p>
//                     <p>Comments: ${user.comments}</p>
//                     <p>Experience: ${user.experience}</p>
//                     <p>Due By: ${user.dueBy}</p>
//                     <hr>
//                 `;
//             });
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('Error fetching category members');
//         });
//     }

   
// });
