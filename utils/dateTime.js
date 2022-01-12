const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

const dateTime = {
  getFullDate: () => {
    return `${day}, ${date} ${month} ${year}`;
  }
}

export default dateTime;