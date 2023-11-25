$(document).ready(function() {
    ($('#myForm').on('submit', function (e) {
        e.preventDefault()
        $('#exampleModal').show();
        $('.close').on('click', function () {
            $('#exampleModal').hide();
        })
        var emailRegex = new RegExp('^.+@.+$')
        var phoneNumberRegex = new RegExp('^(8|\\+7)(\\ |\\(| \\(|\\-|)\\d{3}(\\ |\\) |-|\\)|)(\\d{7}|\\d{3}-\\d{2}-\\d{2}|\\d{3} \\d{2} \\d{2})$');

        var fullName = $('#fullName').val();
        var textOfQuestion = $('#textOfQuestion').val();
        var phoneNumber = $('#phoneNumber').val();
        var userEmail = $('#email').val();

        phoneNumberState = phoneNumberRegex.test(phoneNumber);
        emailState = emailRegex.test(userEmail);

        if (phoneNumberState && emailState) {
            $('.modal-body').text('Данные формы успешно обработаны и отправлены');
        } else {
           $('.modal-body').text('Данные формы некорректны');
        }

        var formData = {
          fullName: fullName,
          phoneNumber: phoneNumber,
          email: userEmail,
          textOfQuestion: textOfQuestion,
        }
        console.log(JSON.stringify(formData))
    }))
    $("#inputSearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#alex tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
})