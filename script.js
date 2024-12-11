const date = new Date();
const day = date.getDate();
const dayName = date.toLocaleDateString('default', { weekday: 'long' });
const year = date.getFullYear();
const monthName = date.toLocaleDateString('default', { month: 'long' });

document.getElementById('day').textContent = day;
document.getElementById('dayName').textContent = dayName;
document.getElementById('year').textContent = year;
document.getElementById('monthName').querySelector('span').textContent = monthName;