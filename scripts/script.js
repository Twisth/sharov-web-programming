$(document).ready(function() {
    ($('#myForm').on('submit', function (e) {
        e.preventDefault()
        $('#exampleModal').show();
        $('.close').on('click', function () {
            $('#exampleModal').hide();
        })
        var emailRegex = new RegExp('^.+@.+$')
        var phoneNumberRegex = new RegExp('^(8|\\+7)(\\ |\\(| \\(|\\-|)\\d{3}(\\ |\\) |-|\\)|)(\\d{7}|\\d{3}-\\d{2}-\\d{2}|\\d{3} \\d{2} \\d{2})$');

        var fullName = $('#full_name').val();
        var textOfQuestion = $('#text_of_question').val();
        var phoneNumber = $('#phone_number').val();
        var userEmail = $('#email').val();

        phoneNumberState = phoneNumberRegex.test(phoneNumber);
        emailState = emailRegex.test(userEmail);

        if (phoneNumberState && emailState) {
            $('.modal-body').text('Данные формы успешно обработаны и отправлены');
            $.ajax({
                type: "POST",
                url: 'ajax.php',
                data: {
                    fullName: fullName,
                    phoneNumber: phoneNumber,
                    email: userEmail,
                    textOfQuestion: textOfQuestion,
                },
                success: function (data) {
                    console.log(data)
                },
                error: function (data) {
                    console.log(data)
                }
            })
        } else {
           $('.modal-body').text('Данные формы некорректны');
        }
    }))
    $("#inputSearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#alex tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
})