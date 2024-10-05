
 /* Slideshow*/  
   let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Remove active class from all dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Display the current slide and activate the current dot
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    // Auto slide every 4 seconds
    setInterval(() => {
        plusSlides(1);
    }, 4000);


/* Tutorial */
function playVideo(videoSrc) {
    // Set the video source dynamically
    var videoPlayer = document.getElementById('videoplayer');
    var videoElement = document.getElementById('myvideo');
    var videoSource = document.getElementById('videoSource');
    
    videoSource.src = videoSrc;
    videoElement.load(); // Load the new video source
    videoElement.play(); // Start playing the video

    // Show the video player
    videoPlayer.style.display = 'block';
}

// Function to stop and close the video
function stopbtn() {
    var videoPlayer = document.getElementById('videoplayer');
    var videoElement = document.getElementById('myvideo');

    videoElement.pause();
    videoElement.currentTime = 0; // Reset video to start
    videoPlayer.style.display = 'none'; // Hide the video player
}

function playVideo(videoSource) {
    var videoPlayer = document.getElementById('videoplayer');
    var video = document.getElementById('myvideo');
    video.src = videoSource;
    videoPlayer.style.display = 'block';
  }
  
  function stopbtn() {
    var videoPlayer = document.getElementById('videoplayer');
    var video = document.getElementById('myvideo');
    video.pause();
    videoPlayer.style.display = 'none';
  }
  

/* fade*/
window.addEventListener('scroll', function() {
    var tutorial = document.getElementById('tutorial');
    var tutorialPosition = tutorial.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (tutorialPosition < screenPosition) {
        tutorial.classList.add('active');
    }
});




    