const clock = document.querySelector('.clock');


const tick =  () => {

  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  // console.log("Time: ",h,':',m,':',s);

  const html = `

   <p>${dateFns.format(now, 'Do MMMM YYYY')}</p>
   <span>${h}</span> :
   <span>${m}</span> :
   <span>${s}</span>
   <span>${dateFns.format(now, 'a').toUpperCase()}</span>
  `;

  if(true) {
    clock.innerHTML = html;
  } else {
    clock.innerHTML = '<span>Times Up</span>'
  }
  
}

setInterval(
  tick, 1000
);