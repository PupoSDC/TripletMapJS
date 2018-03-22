var img = new Image();

img.src = 'img/example.jpeg';

img.onload = function() {
  draw(this);
};

function draw(img) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width  = img.width;
  canvas.height = img.height;

  ctx.drawImage(
    img,
    0, 0, img.width*2/7, img.height,  // source rectangle
    0, 0, img.width*2/7, img.height   // destination rectangle
  );

  ctx.drawImage(
    img,
    img.width*2/7, 0, img.width*3/7, img.height,  // source rectangle
    img.width*2/7, 0, img.width*1/7, img.height   // destination rectangle
  );

  ctx.scale(-1,1);
  ctx.drawImage(
    img,
    img.width*2/7, 0, img.width*3/7, img.height,  // source rectangle
    -img.width*4/7, 0, img.width*1/7, img.height   // destination rectangle
  );
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  ctx.drawImage(
    img,
    img.width*2/7, 0, img.width*3/7, img.height,  // source rectangle
    img.width*4/7, 0, img.width*1/7, img.height   // destination rectangle
  );

  ctx.drawImage(
    img,
    img.width*5/7, 0, img.width*2/7, img.height,  // source rectangle
    img.width*5/7, 0, img.width*2/7, img.height   // destination rectangle
  );

}
