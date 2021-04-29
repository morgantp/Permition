Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach( '#my_camera' );

function takePhoto() {
    Webcam.snap( function(data_uri) {
        // console.log(data_uri);
        $("#photoContainer").append(
            "<input style='display: none;' type='text' name='photoField' value="+data_uri+">"
        );
    });
    Webcam.reset();
}