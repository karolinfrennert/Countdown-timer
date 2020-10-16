import {ONE_MINUTE} from "./constants"
const endTime = Date.now() + 30 * ONE_MINUTE 

//const currentDate = Intl.DateTimeFormat('sv-SE').format(dateMilliseconds);
//const yesterday = Intl.DateTimeFormat('sv-SE').format(dateMilliseconds - ONE_DAY) ;

const calculateTime = () => {
  const updatedTime = endTime - Date.now();
  if (updatedTime <= 0) return 0;
  return updatedTime
}


setInterval(() => console.log(calculateTime()), 1000);







const date = document.querySelector('.today-date');


