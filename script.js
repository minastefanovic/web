
const reviews = [
    { username: "Korisnik1", text: "Sjajno!", ocena: 4 },
    { username: "Korisnik2", text: "Nisam zadovoljan.", ocena: 2 },
    { username: "Korisnik3", text: "Fantastično!", ocena: 5 },
    
  ];
  
  
  function renderReviews() {
    const reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML = ''; 
  
    reviews.forEach(review => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <strong>${review.username}</strong> - ${review.text} - ${generateStars(review.ocena)}
      `;
      reviewsList.appendChild(listItem);
    });
  }
  
  
  function generateStars(ocena) {
    return '⭐️'.repeat(ocena);
  }
  
  
  function sortReviews() {
    const sortBy = document.getElementById('sort').value;
  
    if (sortBy === 'asc') {
      reviews.sort((a, b) => a.ocena - b.ocena);
    } else if (sortBy === 'desc') {
      reviews.sort((a, b) => b.ocena - a.ocena);
    }
  
    renderReviews();
  }
  
 
  function openReviewsTab() {
    const reviewsWindow = window.open('', '_blank');
    reviewsWindow.document.write('<html><head><title>Recenzije</title></head><body>');
    reviewsWindow.document.write('<h1>Recenzije</h1>');
    reviewsWindow.document.write('<ul>');
  
    reviews.forEach(review => {
      reviewsWindow.document.write(`
        <li><strong>${review.username}</strong> - ${review.text} - ${generateStars(review.ocena)}</li>
      `);
    });
  
    reviewsWindow.document.write('</ul></body></html>');
  }
  

  renderReviews();
  