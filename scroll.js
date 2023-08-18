$(window).scroll(function () {
    // selectors
    var $window = $(window),
        $panel = $('.container-fluid');

    var scroll = $window.scrollTop() + ($window.height() / 3);

    $panel.each(function () {
        var $this = $(this);

        if (
            $this.position().top <= scroll &&
            $this.position().top + $this.height() > scroll
        ) {
            // Remove color classes from all panels
            $panel.removeClass('light-green green');

            // Add class of currently active div's color with animation
            $this.addClass($this.data('color')).siblings().removeClass($this.data('color'));
        }
    });
}).scroll();

  