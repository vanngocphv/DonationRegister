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
    $('#reset').on('click', function () {
        document.getElementById('first_name').value = '';
        document.getElementById('last_name').value = '';
        document.getElementById('company').value = '';
        document.getElementById('email').value = '';
        document.getElementsByClassName("init")[0].textContent = '\u00A0';
        document.getElementById('gender').value = '';
        document.getElementById('cash').checked = true;
        document.getElementById('cheque').checked = false;
        document.getElementById('demand').checked = false;
        document.getElementById('chequeno').value = '';
        document.getElementById('blank_name').value = '';
        document.getElementById('payable').value = '';
        document.getElementById('value_lower').value = 500;
        marginSlider.noUiSlider.set(500);

    });

    $('#submit').on('click', function () {
        document.getElementById('value_lower').value = marginSlider.noUiSlider.get();
        document.getElementById('gender').value = document.getElementsByClassName("init")[0].textContent;
    });

})(jQuery);
