// script.js

// Function to format the date and time
function formatDate(date) {
    return date.toISOString().slice(0, 19).replace('T', ' ');
}

// Function to update the clock
function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = formatDate(now);
}

// Function to convert time zones
function convertTimeZone(date, timeZone) {
    return new Intl.DateTimeFormat('en-US', { timeZone }).format(date);
}

// Create a time zone dropdown
const timeZones = [
    'UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo', 'Australia/Sydney'
];

const timeZoneSelect = document.createElement('select');

timeZones.forEach(tz => {
    const option = document.createElement('option');
    option.value = tz;
    option.textContent = tz;
    timeZoneSelect.appendChild(option);
});

document.body.appendChild(timeZoneSelect);

// Function to update the displayed time in the selected time zone
timeZoneSelect.addEventListener('change', function () {
    const now = new Date();
    document.getElementById('converted-time').textContent = convertTimeZone(now, this.value);
});

// Initial setup
updateClock();
setInterval(updateClock, 1000);