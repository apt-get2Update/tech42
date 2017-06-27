$(function() {
    var canvas, ctx, canvas2, ctx2;
    let count = 1;
    let moving = 0;
    window.onload = function() {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth / 3;
        canvas2 = document.getElementById("canvas2");
        ctx2 = canvas2.getContext("2d");
        canvas2.width = window.innerWidth / 3 + 40;

        let cout = 1;
        setInterval(function() {
            ctx.clearRect(0, 0, 500, 200);
            image(ctx, getRandomInt(1, 3), 20, 20, 30, 30);
            image(ctx, 5, 60, 20, 30, 30);
            image(ctx, getRandomInt(1, 3), 100, 20, 30, 30);
            image(ctx, 6, 140, 0, 60, 60);
            image(ctx, 5, 230, 20, 30, 30);
            image(ctx, getRandomInt(1, 3), 120, 100, 30, 30);
            image(ctx, getRandomInt(1, 3), 170, 100, 30, 30);
        }, 500);

        

        setInterval(function() {
            ctx2.clearRect(0, 0, 500, 200);
            if (moving > 29) {
                count += 1;
                moving = 0;
            } else if (count > 6) {
                count = 1;
                moving = 0;
            }



            if (count == 1) {
                imagepng(ctx2, "head", moving * 10, 0, 200, 200);
                moving += 1;
            } else if (count > 1) {
                imagepng(ctx2, "head", 300, 0, 200, 200);
            }

            if (count == 2) {
                imagepng(ctx2, "face", moving * 10, 18, 200, 200);
                moving += 1;
            } else if (count > 2) {
                imagepng(ctx2, "face", 300, 18, 200, 200);
            }

            if (count == 3) {
                imagepng(ctx2, "necklace", moving * 10, 50 , 200, 200);
                moving += 1;
            } else if (count > 3) {
                imagepng(ctx2, "necklace", 300, 50, 200, 200);
            }

            if (count == 4) {
                imagepng(ctx2, "eyes", moving * 10, 7, 200, 200);
                moving += 1;
            } else if (count > 4) {
                imagepng(ctx2, "eyes", 300, 7, 200, 200);
            }


            if (count == 5) {
                imagepng(ctx2, "nose", moving * 10, 9, 200, 200);
                moving += 1;
            } else if (count > 5) {
                imagepng(ctx2, "nose", 300, 9, 200, 200);
            }

            
            if (count == 6) {
                imagepng(ctx2, "lips", moving * 10, 13, 200, 200);
                moving += 1;
            } else if (count > 6) {
                imagepng(ctx2, "lips", 296, 13, 200, 200);
            }




        }, 50);
    }


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function image(ct, n, x, y, w, h) {
        var img = new Image;
        img.onload = function() {
            ct.drawImage(this, x, y, w, h);
        };
        img.src = "images/" + n + ".jpg";

    }

    function imagepng(ct, n, x, y, w, h) {
        var img = new Image;
        img.onload = function() {
            ct.drawImage(this, x, y, w, h);
        };
        img.src = "images/" + n + ".png";

    }
});
