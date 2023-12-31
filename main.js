Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("results").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

onsole.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('',modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!");
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
