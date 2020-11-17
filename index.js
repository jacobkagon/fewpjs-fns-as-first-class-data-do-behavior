/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}



/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
   time = parseInt(time.slice(0,2));
  if(time < 12) return 'Good Morning';
  else if(time < 17) return 'Good Afternoon';
  else return 'Good Evening';
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
   greeting = document.getElementById('greeting');
  greeting.innerText = message;
}

