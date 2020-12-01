const now = new Date;
const month = now.getMonth();
const year = now.getFullYear();
const date = new Date(year,month+1,-1);
let maxDay = date.getDate();
let content = '';

for(let i =1; i<maxDay;i++){
    let options = { weekday: 'short'};
    let day = new Intl.DateTimeFormat('en-US', options).format(new Date(year,month,i));
    content +=`<div> <span>${day.substring(0,2)}</span> <span>${i}</span></div>` 
}

let parent = document.createElement('div')
parent.innerHTML = content;
document.body.appendChild(parent);

