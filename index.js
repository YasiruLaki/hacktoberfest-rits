const el = document.getElementById("line3")

setTimeout(() => {
  el.style.display = 'block';
  el.innerHTML = '[Connecting To the Database]';
}, 6800);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database.]';
}, 7200);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database..]';
}, 7400);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database...]';
}, 7600);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database.]';
}, 7800);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database..]';
}, 8000);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database...]';
}, 8200);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database.]';
}, 8400);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database..]';
}, 8600);

setTimeout(() => {
    el.innerHTML = '[Connecting To the Database...]';
}, 8800);

setTimeout(() => {
    el.innerHTML = '[Database Connected]';
  }, 9000);


const el3 = document.getElementById("line-dash")

setTimeout(() => {
      el3.style.display = 'block';
    }, 11600);

const el2 = document.getElementById("line5")

setTimeout(() => {
  el2.style.display = 'block';
  el2.innerHTML = '[Loading Event Details]';
}, 11800);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details.]';
}, 12000);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details..]';
}, 12200);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details...]';
}, 12400);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details.]';
}, 12600);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details..]';
}, 12800);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details...]';
}, 13000);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details.]';
}, 13200);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details..]';
}, 13400);

setTimeout(() => {
    el2.innerHTML = '[Loading Event Details...]';
}, 13600);

setTimeout(() => {
    el2.innerHTML = '[Event Details]';
  }, 13800);


const el4 = document.getElementById("line-dash2")

setTimeout(() => {
        el4.style.display = 'block';
      }, 20800);

const el5 = document.getElementById("line11")

    setTimeout(() => {
        el5.innerHTML = '&gt&gt Your Digital Invitation Will download within 3s'
    }, 28400);

    setTimeout(() => {
        el5.innerHTML = '&gt&gt Your Digital Invitation Will download within 2s'
    }, 29400);

    setTimeout(() => {
        el5.innerHTML = '&gt&gt Your Digital Invitation Will download within 1s'
    }, 30400);

    setTimeout(() => {
        el5.innerHTML = '&gt&gt Your Digital Invitation Will download within 0s'
    }, 31400);

    setTimeout(() => {
        el5.innerHTML = '&gt&gt [Invitation Downloaded Successfully]'
    }, 32100);

function downloadInvitation(){
    const anchor = document.createElement('a');
    anchor.href = 'Images/Hacktober LOGO.png';
    anchor.download = 'Hacktoberfest Invitation';

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

const btn = document.getElementById("btn")
setTimeout(() => {
    btn.onclick = downloadInvitation()
}, 31500);

const el6 = document.getElementById("line13")
setTimeout(() => {
    el6.style.display = 'block'
}, 35000);