var screenHeight = $(window).height();
var hasScrolled = false;


function scrollToPos(newPos) {
    var config = {
        axis: 'y',
        duration: 800        
    };

    $(window).scrollTo(newPos, config);    
}

function test(previousPanel, nextPanel, e, animateOverlay) {
    // var region = screenHeight*3; (bottom of the third panel)
    // if the top of the window is not within the region
    // then disable 

    if (!hasScrolled) {
        hasScrolled = true;
        document.body.style.overflow = 'hidden';

        if (e.originalEvent.wheelDelta >= 0) {
            scrollToPos(screenHeight * previousPanel);
        } else {
            if (nextPanel !== null) {
                scrollToPos(screenHeight * nextPanel);
            } else {
                document.body.style.overflow = 'visible';                
                hasScrolled = false;
                return;
            }
        }

        setTimeout(function() {
            document.body.style.overflow = 'visible';                
            hasScrolled = false;
        }, 1000);

        // Check if
        if (animateOverlay === true) {
            if (e.originalEvent.wheelDelta >= 0) {
                // we're going down
                $('#overlay').removeClass('opaque');
                    $('#overlay').show();
            } else {
                // we're going up
                $('#overlay').addClass('opaque');
                setTimeout(function() {
                    $('#overlay').hide();
                }, 1000);
            }
        }
    }
}
