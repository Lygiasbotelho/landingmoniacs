    $('#ebookForm').submit(function (event) {
        var name = $('#nome').val();
        var mail = $('#email').val();
        event.preventDefault();
        $.ajax({
            url: 'https://drive4cash.us18.list-manage.com/subscribe/post',
            method: 'POST',
            data: $("#ebookForm").serialize()
        });
        $.ajax({
            url: 'https://smtl.gama.academy/leads/db22b661-915e-11ea-9e98-2f3c29e0891c',
            method: 'POST',
            data: {email: mail, nome: name} ,
            success: function() {
                window.location = "thankyou.html"; 
            }
        }); 
    });
