var typed = new Typed('#typed', {
    strings: ['Node.js', 'Python', 'C', 'HTML5', 'CSS3', 'Bootstrap', 'Javascript', 'C++', 'Java'],
    typeSpeed: 90,
    backSpeed: 60,
    backDelay: 2500,
    loop: true
});

$(document).ready(function() {

    $('#send-msg').click(function() {
        var name = $('#name').val()
        var subject = $('#subject').val()
        var body = $('#body').val()
        if (!(name === "" || subject === "" || body === "")) {
            body = 'Hello, This is ' + name.toUpperCase() + '.%0D%0A' + body
            $('#send-mail').attr("href", "mailto:projects.darshan09200@gmail.com?subject=" +
                subject + "&body=" + body)
            $('#send-mail')[0].click()
        } else {
            $('#snackbar').text("Input required")
            $('#snackbar').addClass("show")
            setTimeout(function() {
                $('#snackbar').removeClass("show")
            }, 3000)
        }
    });

    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 1000);
        $('#navbarNav').hide()
    });
});