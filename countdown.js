

// Set Launch Date (ms)
const launchDate = new Date('oct 09, 2018 12:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
    const countdown = document.querySelector('.countdown');
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now and the launch date (ms)
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
  <div class="col-sm-3">${days}<span>Days</span></div> 
  <div class="col-sm-3">${hours}<span>Hours</span></div>
  <div class="col-sm-3">${mins}<span>Minutes</span></div>
  <div class="col-sm-3">${seconds}<span>Seconds</span></div>
  `;

  // If launch date is reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = '<br><br><div class="col-sm-12">HAPPY BIRTHDAY MISS PRIYAL KHUMAN!</div>';
  }
}, 1000);
