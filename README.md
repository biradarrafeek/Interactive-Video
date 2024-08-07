# HTML Structure:

    The video-section div contains the video thumbnails.
    Each video-item div contains a muted video thumbnail. Clicking on a video-item calls the openVideo() function with the video source as the parameter.
    The videoPopup div is the pop-up container that will display the selected video. It includes a close button to close the video.

# CSS Styles:

    Basic styles are provided for the body, video section, and video items.
    The .video-popup class is initially hidden and displayed as a flex container when a video is opened. It centers the video on the screen and provides a dark background to blur the rest of the content.
    Media queries ensure responsiveness for different screen sizes.

# JavaScript Functions:

    openVideo(videoSrc): Displays the pop-up and plays the selected video.
    closeVideo(): Closes the pop-up and stops the video.
    An event listener is added to close the video pop-up when clicking outside of the video content.
