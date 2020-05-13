    $('#ebookForm').submit(function (event) {
        var name = $('#name').val();
        var email = $('#email').val();
        event.preventDefault();
        $.ajax({
            url: 'https://drive4cash.us18.list-manage.com/subscribe/post',
            method: 'POST',
            data: {u: '791d031b12398064fc7d70890', id: '97fa844152', EMAIL: email, NAME: name},
            dataType: 'jsonp'
        });
        $.ajax({
            url: 'https://smtl.gama.academy/leads/db22b661-915e-11ea-9e98-2f3c29e0891c',
            method: 'POST',
            data: {name: name, email: email} ,
            success: function() {
                window.location = "thankyou.html"; 
            }
        }); 
    });
