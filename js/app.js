let userTime = document.getElementById("user-time");

// getTimeInMilliSeconds function
const getTimeInMilliSeconds = () => "Time: " + Date.now();

// Sets user time
userTime.innerText = getTimeInMilliSeconds();

// Refreshes user time every second
setInterval(() => {
  userTime.innerText = getTimeInMilliSeconds();
}, 1000);
