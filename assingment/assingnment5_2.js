function ageChange(event) {
    const age = event.target.value;
    const errorsHolder = document.getElementById('errors-holder');
    const submitButton = document.getElementById('submitbutton');

    if (age === '' || age < 5) {
        if (age === '') {
            errorsHolder.textContent = 'Please choose age';
        } else if (age < 5) {
            errorsHolder.textContent = 'You need to be atleast 5 years old to participate';
        }
        submitButton.disabled = true;
    } else {
        errorsHolder.textContent = '';
        submitButton.disabled = false;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const age = document.getElementById('q_age').value;
    const ownsPhone = document.getElementById('q_owns_phone').checked;
    const errorsHolder = document.getElementById('errors-holder');
    const resultHolder = document.getElementById('result-holder');

    if (age === '' || age == 0) {
        errorsHolder.textContent = 'Please choose age';
        return;
    }

    errorsHolder.textContent = '';
    
    if (ownsPhone) {
        if (age < 13) {
            resultHolder.textContent = 'You are too young to have a phone';
        } else {
            resultHolder.textContent = 'Use your phone in moderation';
        }
    } else {
        if (age < 13) {
            resultHolder.textContent = 'You will get a phone soon';
        } else {
            resultHolder.textContent = 'You should get a phone';
        }
    }
}