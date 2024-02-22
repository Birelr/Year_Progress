let now = new Date();

//Yıl

let yil = now.getFullYear();
let startOfYear = new Date(now.getFullYear(), 0, 1);
let endOfYear = new Date(now.getFullYear() + 1, 0, 1);
let yearLength = endOfYear - startOfYear;
let progress = now - startOfYear;
let percentage = ((progress / yearLength) * 100).toFixed(2);
let progressText = document.querySelector('.progress-value');
let progressBar = document.querySelector('.progress');
progressText.innerHTML = percentage + '%';
progressBar.style.width = percentage + '%';


//Ay

let ay = now.getMonth();
let startOfMonth = new Date(yil, ay, 1);
let endOfMonth = new Date(yil, ay + 1, 0);
let monthLength = endOfMonth - startOfMonth;
let progressInMonth = now - startOfMonth;
let percentageInMonth = ((progressInMonth / monthLength) * 100).toFixed(2);
let progressText2 = document.querySelector('.progress-value2');
let progressBar2 = document.querySelector('.progress2');
progressText2.innerHTML = percentageInMonth + '%';
progressBar2.style.width = percentageInMonth + '%';