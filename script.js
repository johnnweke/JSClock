const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

//Function that runs everything
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  //Rotates the second hand
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;

  //rotates the Minute Hand
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;

  //Rotates the Hour hand
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);
setDate();