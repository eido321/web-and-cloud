let form = document.querySelector('form');
(() => {
    let checkboxes = document.querySelectorAll('input[name="interests[]"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            let count = 0;
            const interests = $('.interests');
            for (let i = 0; i < interests.length; i++) {
                if (interests[i].checked == true)
                    count++;
            }
            if (count < 3) {
                for (let i = 0; i < interests.length; i++) {
                    interests[i].setCustomValidity("Please select at least three interests.");
                    $('#interests-error').show();
                }
            }
            else {
                for (let i = 0; i < interests.length; i++) {
                    interests[i].setCustomValidity("");
                    $('#interests-error').hide()
                }
            }
        });
    });
    form.addEventListener('submit', function (event) {
        let count = 0;
        const interests = $('.interests');
        console.log(interests.length);
        for (let i = 0; i < interests.length; i++) {
            if (interests[i].checked == true)
                count++;
        }
        if (count < 3) {
            for (let i = 0; i < interests.length; i++) {
                interests[i].setCustomValidity("Please select at least three interests.");
                $('#interests-error').show();
            }
        }
        else {
            for (let i = 0; i < interests.length; i++) {
                interests[i].setCustomValidity("");
                $('#interests-error').hide()
            }
        }
    });

})()
let ageSelect = document.querySelector('#age');
form.addEventListener('submit', function (event) {
    if (ageSelect.value < 23 || ageSelect.value > 38) {
        event.preventDefault();
        ageSelect.setCustomValidity('Please select an age between 23 and 38.')
        $('#age-error').show();
    }
    else {
        ageSelect.setCustomValidity('')
        $('#age-error').hide();
    }
});
$('#phone').on('invalid', function () {
    $('#phone-error').show();
});
$('#fullName').on('invalid', function () {
    $('#fullName-error').show();
});
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()