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
            image(ctx, getRandomInt(1, 3), 15, 30, 40, 40);
            image(ctx, getRandomInt(1, 3), 30, 15, 40,40);
            image(ctx, getRandomInt(1, 3), 45, 30, 40,40);
            image(ctx, 7, 10, 70, 100, 30);
            image(ctx, 0, 80, 10, 80, 80);

            image(ctx, getRandomInt(1, 3), 140, 15, 40, 40);
            image(ctx, getRandomInt(1, 3), 155, 30, 40, 40);
            image(ctx, getRandomInt(1, 3), 170, 15, 40, 40);
            image(ctx, 8, 120, 70, 100, 30);
            image(ctx, 0, 185, 10, 80, 80);

            image(ctx, 6, -10, -240, 600, 600);
            image(ctx, getRandomInt(1, 3), 245, 35, 40, 40);
            image(ctx, getRandomInt(1, 3), 270, 25, 40, 40);
            image(ctx, getRandomInt(1, 3), 290, 35, 40, 40);
            image(ctx, 9, 230, 70, 120, 30);
            

            image(ctx, getRandomInt(1, 3), 250, 150, 40, 40);
            image(ctx, getRandomInt(1, 3), 265, 135, 40, 40);
            image(ctx, getRandomInt(1, 3), 280, 150, 40, 40);
            image(ctx, 10, 240, 175, 100, 30);
            image(ctx, 4, 240, 155, 80, 80);
            image(ctx, 11, 250, 80, 80, 80);
            image(ctx, 12, 230, 80, 80, 80);

            image(ctx, 0, 320, 10, 80, 80);
            image(ctx, 13, 375, 70, 80, 30);

        }, 300);

        

        setInterval(function() {
            ctx2.clearRect(0, 0, 600, 200);
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
                imagepng(ctx2, "face", moving * 10, 0, 200, 200);
                moving += 1;
            } else if (count > 2) {
                imagepng(ctx2, "face", 300, 0, 200, 200);
            }

            if (count == 3) {
                imagepng(ctx2, "necklace", moving * 10, 0 , 200, 200);
                moving += 1;
            } else if (count > 3) {
                imagepng(ctx2, "necklace", 300, 0, 200, 200);
            }

            if (count == 4) {
                imagepng(ctx2, "eyes", moving * 10, 2, 200, 200);
                moving += 1;
            } else if (count > 4) {
                imagepng(ctx2, "eyes", 300, 2, 200, 200);
            }


            if (count == 5) {
                imagepng(ctx2, "nose", moving * 10, 3, 200, 200);
                moving += 1;
            } else if (count > 5) {
                imagepng(ctx2, "nose", 300, 3, 200, 200);
            }

            
            if (count == 6) {
                imagepng(ctx2, "lips", moving * 10, 3, 200, 200);
                moving += 1;
            } else if (count > 6) {
                imagepng(ctx2, "lips", 296, 3, 200, 200);
            }




        }, 100);
    }


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function image(ct, n, x, y, w, h) {
        var img = new Image;
        img.onload = function() {
            ct.drawImage(this, x, y, w, h);
        };
        img.src = "images/" + n + ".png";

    }

    function imagepng(ct, n, x, y, w, h) {
        var img = new Image;
        img.onload = function() {
            ct.drawImage(this, x, y, w, h);
        };
        img.src = "images/" + n + ".png";

    }
});
