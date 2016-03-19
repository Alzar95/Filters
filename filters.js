function filterOne() {
    var img = document.getElementById('img');
    var canvas = document.getElementById('windowTwo');
    var context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 512, 512);
    var pixels = imageData.data;

    for (var i = 0; i < pixels.length; i++) {
        pixels[i] = (pixels[i] * 2.1707007777725638) +
            (pixels[i + 1] * 0.3652234745712706) +
            (pixels[i + 2] * -2.326435373100748) +
            (pixels[i + 4] * -0.05028690782826306) +
            (pixels[i + 5] * 2.748205226771036) +
            (pixels[i + 4] * -1.0982728936218216) +
            (pixels[i + 8] * -0.09234515340935134) +
            (pixels[i + 9] * -2.543179808200033) +
            (pixels[i + 10] * 0.21471616133528704);
    }

    context.putImageData(imageData, 0, 0);
}
filterOne();

function filterTwo() {
    var img = document.getElementById('img');
    var canvas = document.getElementById('windowTwo');
    var context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 512, 512);
    var pixels = imageData.data;

    for (var i = 0; i < pixels.length; i++) {
        pixels[i] = (pixels[i] * 0.11811589363364483) +
            (pixels[i + 1] * 0.02880970544695094) +
            (pixels[i + 2] * 0.4807930504903859) +
            (pixels[i + 4] * 2.953663565375126) +
            (pixels[i + 5] * -1.680763594394679) +
            (pixels[i + 4] * 2.155292858796342) +
            (pixels[i + 8] * 0.7963125629169716) +
            (pixels[i + 9] * -0.839513800846579) +
            (pixels[i + 10] * -0.4665271205383936);
    }

    context.putImageData(imageData, 0, 0);
}
filterTwo();

function filterThree() {
    var img = document.getElementById('img');
    var canvas = document.getElementById('windowTwo');
    var context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 512, 512);
    var pixels = imageData.data;

    for (var i = 0; i < pixels.length; i++) {
        pixels[i] = (pixels[i] * 0.02367247898389868) +
            (pixels[i + 1] * -0.4980740302962823) +
            (pixels[i + 2] * -1.3683430281088231) +
            (pixels[i + 4] * 2.415652464938228) +
            (pixels[i + 5] * -2.676458852166958) +
            (pixels[i + 4] * -1.3193765643183313) +
            (pixels[i + 8] * 0.9817329663147252) +
            (pixels[i + 9] * 1.0369661670778605) +
            (pixels[i + 10] * -1.8232632683679624);
    }

    context.putImageData(imageData, 0, 0);
}
filterThree();