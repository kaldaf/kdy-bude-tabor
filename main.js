const endDate = new Date('2023-07-24 14:00:00');

document.addEventListener("DOMContentLoaded", () => {
    const rocket = document.getElementById("rocket");
    const animation = document.querySelector(".animation");
    if (window.innerWidth >= 800) {
        setInterval(() => {
            countdown('countdown')
        }, 950);
    }
    if (800 >= window.innerWidth) {
        setTimeout(function() {
            rocket.classList.add("🌠");
        }, 4000);
        setTimeout(function() {
            rocket.style.opacity = 0;
            animation.classList.add("opacity-down");
        }, 4800);
        setTimeout(function() {
            animation.remove();
            countdownRocket.classList.remove('hidden')
        }, 5200);
        setInterval(() => {
            countdown('countdownRocket')
        }, 950);
    }
})

const pageTitle = document.querySelector("title");

let currentTick = 0;
const countdown = (targetId) => {
    const now = new Date().getTime();

    const remainingTime = endDate - now;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    if(currentTick !== 5 && currentTick < 5) currentTick += 1;
    if(currentTick === 5){
        pageTitle.innerText = `${days.toString().padStart(2, '0')} dní ${hours.toString().padStart(2, '0')} hod. ${minutes.toString().padStart(2, '0')} min. ${seconds.toString().padStart(2, '0')} sec.`
    }

    if (remainingTime < 0) {
        startConfetti();
        const resultsTemplate = `
        <li>
            <h2>0</h2>
            <span>DNÍ</span>
        </li>
        <li>
            <h2>0</h2>
            <span>HODIN</span>
        </li>
        <li>
            <h2>0</h2>
            <span>MINUT</span>
        </li>
        <li>
            <h2>0</h2>
            <span>SEKUND</span>
        </li>
      `;
    
        const targetElement = document.getElementById(targetId);
        targetElement.innerHTML = resultsTemplate;
        return;
    }

    const resultsTemplate = `
    <li>
        <h2>${days.toString().padStart(2, '0')}</h2>
        <span>${days === 1 ? 'DEN' : days < 5 ? 'DNY' : 'DNÍ'}</span>
    </li>
    <li>
        <h2>${hours.toString().padStart(2, '0')}</h2>
        <span>${hours === 1 ? 'HODINA' : hours < 5 ? 'HODINY' : 'HODIN'}</span>
    </li>
    <li>
        <h2>${minutes.toString().padStart(2, '0')}</h2>
        <span>${minutes === 1 ? 'MINUTA' : minutes < 5 ? 'MINUTY' : 'MINUT'}</span>
    </li>
    <li>
        <h2>${seconds.toString().padStart(2, '0')}</h2>
        <span>${seconds === 1 ? 'SEKUNDA' : seconds < 5 ? 'SEKUNDY' : 'SEKUND'}</span>
    </li>
  `;

    const targetElement = document.getElementById(targetId);
    targetElement.innerHTML = resultsTemplate;
}