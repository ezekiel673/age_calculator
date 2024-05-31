document.addEventListener("DOMContentLoaded", function() {
    const ageMessageElement = document.getElementById('ageMessage');
    const analysisMessageElement = document.getElementById('analysisMessage');
    const messageContainer = document.querySelector('.message');

    // Extract the years parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const years = parseInt(urlParams.get('years'));

    let ageMessage = "";
    let analysisMessage = "";

    if (isNaN(years)) {
        ageMessage = "Invalid age data.";
    } else {
        ageMessage = `You're ${years} years old.`;

        if (years < 18) {
            analysisMessage = "Don't worry, mom can still buy you ice cream.";
        } else if (years >= 18 && years <= 30) {
            analysisMessage = "You should not be calling home for funds.";
        } else if (years > 30 && years <= 65) {
            analysisMessage = "You should have a job by now, be sure to take care of your parents.";
        } else if (years > 65) {
            analysisMessage = "You have worked hard! You should retire.";
        }
    }

    ageMessageElement.textContent = ageMessage;
    analysisMessageElement.textContent = analysisMessage;

    // Trigger animations
    setTimeout(() => {
        messageContainer.style.opacity = '1';
        ageMessageElement.style.animation = 'slideInFromLeft 1s forwards';
        analysisMessageElement.style.animation = 'slideInFromRight 1s forwards';
    }, 100); // Slight delay to ensure elements are rendered

    // Redirect after 30 seconds
    setTimeout(() => {
        window.location.href = "index.html"; // Replace with the URL of your new webpage
    }, 5000);
});

