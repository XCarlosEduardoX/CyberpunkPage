var canvas1 = document.getElementById("canvas-cyberpunk");
var canvas2 = document.getElementById("canvas-edgerunners");
var canvas3 = document.getElementById("canvas-phantomliberty");

var video1 = document.getElementById("video-cyberpunk");
var video2 = document.getElementById("video-edgerunners");
var video3 = document.getElementById("video-phantomliberty");
var ctx1 = canvas1.getContext("2d");
var ctx2 = canvas2.getContext("2d");
var ctx3 = canvas3.getContext("2d");

video1.addEventListener(
    "play",
    function () {
        // playSong("song-cyberpunk");
        var $this = this;
        (function loop() {
            if (!$this.paused && !$this.ended) {
                ctx1.drawImage(
                    $this,
                    0,
                    0,
                    $this.videoWidth,
                    $this.videoHeight,
                    0,
                    0,
                    canvas1.width,
                    canvas1.height
                );
                setTimeout(loop, 1000 / 30);
            }
        })();
    },
    0
);


video2.addEventListener(
    "play",
    function () {
        // playSong("song-edgerunners");
        var $this = this;
        (function loop() {
            if (!$this.paused && !$this.ended) {
                ctx2.drawImage(
                    $this,
                    0,
                    0,
                    $this.videoWidth,
                    $this.videoHeight,
                    0,
                    0,
                    canvas2.width,
                    canvas2.height
                );
                setTimeout(loop, 1000 / 30);
            }
        })();
    },
    0
);

video3.addEventListener(
    "play",
    function () {
        // playSong("song-phantomliberty");
        var $this = this;
        (function loop() {
            if (!$this.paused && !$this.ended) {
                ctx3.drawImage(
                    $this,
                    0,
                    0,
                    $this.videoWidth,
                    $this.videoHeight,
                    0,
                    0,
                    canvas3.width,
                    canvas3.height
                );
                setTimeout(loop, 1000 / 30);
            }
        })();
    },
    0
);
