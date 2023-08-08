(function ($) {

    $('#meal_preference').parent().append('<ul class="list-item" id="newmeal_preference" name="meal_preference"></ul>');
    $('#meal_preference option').each(function () {
        $('#newmeal_preference').append('<li value="' + $(this).val() + '">' + $(this).text() + '</li>');
    });
    $('#meal_preference').remove();
    $('#newmeal_preference').attr('id', 'meal_preference');
    $('#meal_preference li').first().addClass('init');
    $("#meal_preference").on("click", ".init", function () {
        $(this).closest("#meal_preference").children('li:not(.init)').toggle();
    });

    var allOptions = $("#meal_preference").children('li:not(.init)');
    $("#meal_preference").on("click", "li:not(.init)", function () {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#meal_preference").children('.init').html($(this).html());
        allOptions.toggle();
    });

    var marginSlider = document.getElementById('slider-margin');
    if (marginSlider != undefined) {
        noUiSlider.create(marginSlider, {
            start: [500],
            step: 10,
            connect: [true, false],
            tooltips: [true],
            range: {
                'min': 0,
                'max': 1000
            },
            format: wNumb({
                decimals: 0,
                thousand: ',',
                prefix: '$ ',
            })
        });
    }

    var radios = document.querySelectorAll('input[type=radio][name="payment"]');

    function changeHandler(event) {
        if (this.value === 'Visa' || this.value === 'Mastercard') {
            document.getElementById('chequeno').maxLength = "16";
            document.getElementById('chequeno').pattern = ".{16,16}";
        } else if (this.value === 'Amex') {
            document.getElementById('chequeno').maxLength = "15";
            document.getElementById('chequeno').pattern = ".{15,15}";
        }
    }
    Array.prototype.forEach.call(radios, function (radio) {
        radio.addEventListener('change', changeHandler);
    });

    $('#reset').on('click', function () {
        document.getElementById('first_name').value = '';
        document.getElementById('last_name').value = '';
        document.getElementById('company').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone_number').value = '';
        document.getElementsByClassName("init")[0].textContent = '\u00A0';
        document.getElementById('gender').value = '';
        document.getElementById('cash').checked = true;
        document.getElementById('cheque').checked = false;
        document.getElementById('demand').checked = false;
        document.getElementById('chequeno').value = '';
        document.getElementById('blank_name').value = '';
        document.getElementById('payable').value = '';
        document.getElementById('value_lower').value = 500;

        //reset error message
        document.getElementById('invalid_FirstName').innerHTML = '';
        document.getElementById('invalid_LastName').innerHTML = '';
        document.getElementById('invalid_Company').innerHTML = '';
        document.getElementById('invalid_Email').innerHTML = '';
        document.getElementById('invalid_PhoneNumber').innerHTML = '';
        document.getElementById('invalid_Gender').innerHTML = '';
        document.getElementById('invalid_CardNumber').innerHTML = '';
        document.getElementById('invalid_Expiration').innerHTML = '';
        document.getElementById('invalid_CVN').innerHTML = '';
        marginSlider.noUiSlider.set(500);

    });

    $('#submit').on('click', function (e) {
        document.getElementById('value_lower').value = marginSlider.noUiSlider.get();
        document.getElementById('gender').value = document.getElementsByClassName("init")[0].textContent;

        let check = validateFieldInput();   //check valid
        console.log(check);
        if (!check) {
            e.preventDefault();     //prevent submit action
            return false;
        }
        else {
            return true;
        }
    });

    function validateFieldInput() {
        let checkValid = true;
        const firstName = document.getElementById('first_name');
        const lastName = document.getElementById('last_name');
        const company = document.getElementById('company');
        const email = document.getElementById('email');
        const phoneNumber = document.getElementById('phone_number');
        const gender = document.getElementById('gender');
        const cardNumber = document.getElementById('chequeno');
        const expiration = document.getElementById('blank_name');
        const cvn = document.getElementById('payable');
        //
        checkValid = validOrNot(firstName, 'invalid_FirstName', checkValid, "Invalid First Name (3 - 15 characters)");
        //
        checkValid = validOrNot(lastName, 'invalid_LastName', checkValid, "Invalid Last Name (3 - 15 characters)");
        //
        checkValid = validOrNot(company, 'invalid_Company', checkValid, "Invalid Company (3 - 50 characters)");
        //
        checkValid = validOrNot(email, 'invalid_Email', checkValid, "Invalid Email");
        //
        checkValid = validOrNot(phoneNumber, 'invalid_PhoneNumber', checkValid, "Invalid Phone Number");
        checkValid = validNumber(phoneNumber, 'invalid_PhoneNumber', checkValid, "Please enter numeric value", "Invalid Phone Number");
        //
        checkValid = validOrNot(gender, 'invalid_Gender', checkValid, "Invalid Gender");
        //
        checkValid = validOrNot(cardNumber, 'invalid_CardNumber', checkValid, "Invalid Card Number");
        checkValid = validNumber(cardNumber, 'invalid_CardNumber', checkValid, "Please enter numeric value", "Invalid Card Number");
        //
        checkValid = validOrNot(expiration, 'invalid_Expiration', checkValid, "Invalid Expiration");
        //
        checkValid = validOrNot(cvn, 'invalid_CVN', checkValid, "Invalid CVN");
        checkValid = validNumber(cvn, 'invalid_CVN', checkValid, "Please enter numeric value", "Invalid CVN");

        return checkValid;
    }

    function validOrNot(elementId, innerId, valid, message) {
        let inner = document.getElementById(innerId);
        if (!elementId.checkValidity() || elementId.value === '\u00A0') {
            inner.innerHTML = message;
            valid = false;
        }
        else {
            inner.innerHTML = "";
        }
        return valid;
    }
    function validNumber(elementId, innerId, valid, message, subMessage) {
        if (elementId.value === '') return valid;

        let inner = document.getElementById(innerId);

        let number = elementId.value;
        if (isNaN(number)) {
            inner.innerHTML = message;
            valid = false;
        }
        else {
            valid = validOrNot(elementId, innerId, valid, subMessage);
        }
        return valid;
    }

})(jQuery);
