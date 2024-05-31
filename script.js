// document.addEventListener("DOMContentLoaded", function() {
//     const dayInput = document.getElementById('day');
//     const monthInput = document.getElementById('month');
//     const yearInput = document.getElementById('year');
//     const button = document.querySelector('.submit button');
//     const displayYears = document.querySelector('.display h1:nth-of-type(1) span');
//     const displayMonths = document.querySelector('.display h1:nth-of-type(2) span');
//     const displayDays = document.querySelector('.display h1:nth-of-type(3) span');
//     const errorMessages = document.querySelectorAll('.error-msg');
//     const inputs = document.querySelectorAll('input');
//     const labels = document.querySelectorAll('label');

//     button.addEventListener('click', function() {
//         inputs.forEach(input => input.style.borderColor = 'var(--L_grey)');
//         inputs.forEach(input => input.style.color = 'var(--Off-black)');
//         errorMessages.forEach(msg => msg.textContent = '');
//         labels.forEach(label => label.style.color = 'var(--Smokey-grey)')

//         const day = parseInt(dayInput.value);
//         const month = parseInt(monthInput.value);
//         const year = parseInt(yearInput.value);

//         if (!day || !month || !year) {
//             errorMessages.forEach(msg => msg.textContent = 'This field is required');
//             inputs.forEach(input => input.style.borderColor = 'var(--L_red)');
//             labels.forEach(label => label.style.color = 'var(--L_red)');
//             return;
//         }

//         const daysInMonth = new Date(year, month, 0).getDate();

//         if (isNaN(day) || day <= 0 || day > daysInMonth || !Number.isInteger(day)) {
//             errorMessages[0].textContent = 'Must be a valid day';
//             dayInput.style.borderColor = 'var(--L_red)';
//             labels[0].style.color = 'var(--L_red)';
//             return;
//         }

//         if (isNaN(month) || month <= 0 || month > 12 || !Number.isInteger(month)) {
//             errorMessages[1].textContent = 'Must be a valid month';
//             monthInput.style.borderColor = 'var(--L_red)';
//             labels[1].style.color = 'var(--L_red)';
//             return;
//         }

//         if (isNaN(year) || year <= 0 || year > new Date().getFullYear() || !Number.isInteger(year)) {
//             errorMessages[2].textContent = 'Must be a valid year';
//             yearInput.style.borderColor = 'var(--L_red)';
//             labels[2].style.color = 'var(--L_red)';
//             return;
//         }

//         const inputDate = new Date(year, month - 1, day);
//         const currentDate = new Date();

//         if (inputDate > currentDate) {
//             errorMessages[2].textContent = 'Must be in the past';
//             yearInput.style.borderColor = 'var(--L_red)';
//             labels[2].style.color = 'var(--L_red)';
//             return;
//         }

//         let years = currentDate.getFullYear() - inputDate.getFullYear();
//         let months = currentDate.getMonth() - inputDate.getMonth();
//         let days = currentDate.getDate() - inputDate.getDate();

//         if (days < 0) {
//             months -= 1;
//             days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
//         }

//         if (months < 0) {
//             years -= 1;
//             months += 12;
//         }

//         displayYears.textContent = years;
//         displayMonths.textContent = months;
//         displayDays.textContent = days;
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const button = document.querySelector('.submit button');
    const displayYears = document.querySelector('.display h1:nth-of-type(1) span');
    const displayMonths = document.querySelector('.display h1:nth-of-type(2) span');
    const displayDays = document.querySelector('.display h1:nth-of-type(3) span');
    const errorMessages = document.querySelectorAll('.error-msg');
    const inputs = document.querySelectorAll('input');
    const labels = document.querySelectorAll('label');

    button.addEventListener('click', function() {
        // Reset styles and error messages
        inputs.forEach(input => input.style.borderColor = 'var(--L_grey)');
        errorMessages.forEach(msg => msg.textContent = '');
        inputs.forEach(input => input.style.color = 'var(--Off-black)');
        labels.forEach(label => label.style.color = 'var(--Smokey-grey)');

        let errors = [];

        const day = parseInt(dayInput.value);
        const month = parseInt(monthInput.value);
        const year = parseInt(yearInput.value);

        // Check if fields are empty
        if (!day) {
            errors.push({ index: 0, message: 'This field is required' });
            dayInput.style.borderColor = 'var(--L_red)';
            labels[0].style.color = 'var(--L_red)';
        }
        if (!month) {
            errors.push({ index: 1, message: 'This field is required' });
            monthInput.style.borderColor = 'var(--L_red)';
            labels[1].style.color = 'var(--L_red)';
        }
        if (!year) {
            errors.push({ index: 2, message: 'This field is required' });
            yearInput.style.borderColor = 'var(--L_red)';
            labels[2].style.color = 'var(--L_red)';
        }

        // Validate day
        if (day && (isNaN(day) || day <= 0 || day > 31 || !Number.isInteger(day))) {
            errors.push({ index: 0, message: 'Must be a valid day' });
            dayInput.style.borderColor = 'var(--L_red)';
            labels[0].style.color = 'var(--L_red)';
        }

        // Validate month
        if (month && (isNaN(month) || month <= 0 || month > 12 || !Number.isInteger(month))) {
            errors.push({ index: 1, message: 'Must be a valid month' });
            monthInput.style.borderColor = 'var(--L_red)';
            labels[1].style.color = 'var(--L_red)';
        }

        // Validate year
        if (year && (isNaN(year) || year <= 0 || year > new Date().getFullYear() || !Number.isInteger(year))) {
            errors.push({ index: 2, message: 'Must be a valid year' });
            yearInput.style.borderColor = 'var(--L_red)';
            labels[2].style.color = 'var(--L_red)';
        }

        // Validate days in month
        if (day && month && year) {
            const daysInMonth = new Date(year, month, 0).getDate();
            if (day > daysInMonth) {
                errors.push({ index: 0, message: 'Must be a valid day' });
                dayInput.style.borderColor = 'var(--L_red)';
                labels[0].style.color = 'var(--L_red)';
            }
        }

        // Check if date is in the past
        if (day && month && year) {
            const inputDate = new Date(year, month - 1, day);
            const currentDate = new Date();
            if (inputDate > currentDate) {
                errors.push({ index: 2, message: 'Must be in the past' });
                yearInput.style.borderColor = 'var(--L_red)';
                labels[2].style.color = 'var(--L_red)';
            }
        }

        // Display errors
        errors.forEach(error => {
            errorMessages[error.index].textContent = error.message;
        });

        // Calculate and display age if no errors
        if (errors.length === 0) {
            const inputDate = new Date(year, month - 1, day);
            const currentDate = new Date();

            let years = currentDate.getFullYear() - inputDate.getFullYear();
            let months = currentDate.getMonth() - inputDate.getMonth();
            let days = currentDate.getDate() - inputDate.getDate();

            if (days < 0) {
                months -= 1;
                days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
            }

            if (months < 0) {
                years -= 1;
                months += 12;
            }

            displayYears.textContent = years;
            displayMonths.textContent = months;
            displayDays.textContent = days;
            
            setTimeout(function() {
                window.location.href = `age_analysis.html?years=${years}`;
            }, 3000); // 2 seconds delay
        }
    });
});

