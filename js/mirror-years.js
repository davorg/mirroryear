document.addEventListener('DOMContentLoaded', function() {
  const bornInput = document.getElementById('born');

  bornInput.addEventListener('keyup', function() {
    const born = bornInput.value;
    if (born.length >= 4) {
      const year = new Date().getFullYear();
      const bornYear = parseInt(born);
      
      // Calculate user's age
      const age = year - bornYear;
      
      const past = born - age;
      const future = year + age;

      document.getElementById('age').textContent = age;
      document.getElementById('past').textContent = past;
      document.getElementById('future').textContent = future;
      document.getElementById('results').style.display = 'block';
      
      // Check if user claims to be born in the future
      if (bornYear > year) {
        document.getElementById('time-travel-warning').style.display = 'block';
      } else {
        document.getElementById('time-travel-warning').style.display = 'none';
      }
    } else {
      document.getElementById('results').style.display = 'none';
      document.getElementById('time-travel-warning').style.display = 'none';
    }
  });
});
