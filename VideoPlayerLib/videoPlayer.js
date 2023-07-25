//Getting VIDEOPLayer
const video = document.getElementById("videoPlayer");




//Geting all play icon 
var Playicon = document.getElementById("play");
var PlayMidicon = document.getElementById("playmid");

//Getting All timeline Element
var timelineBar = document.getElementById("timeline");
var currentTime_ = document.getElementById("CurrentTime");
var totalTime = document.getElementById("TotalTime");


//Getting All volume element
var volumeIcon = document.getElementById("volIcon");
var volumeRange = document.getElementById("VolumeRange");


//Getting All Setting elements
var SettingHolder = document.getElementById("S_holder");



//video HLS config
var res_1080_p;
var res_720_p;
var res_480_p;
var res_360_p;
var log = console.log;
var btn = document.getElementById("sub_VideoURL");

function URLCLICKED() {
    if (document.getElementById("Input_VideoURL").value) {
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        btn.style.border = "1px solid rgba(0, 0, 0, 0.2)";
        btn.style.boxShadow = " -5px 5px rgba(0, 0, 0, 0.5)";
        btn.style.transform = "translate(0px, 0px)";
        btn.childNodes[0].innerHTML = "replay";
    }

}

function SubmitBTN() {

    var data = document.getElementById("Input_VideoURL").value;
    if (data) {

    } else {
        data = "https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.m3u8";
    }
    var links = data.split("m3u8");
    res_1080_p = links[0] + "1080.m3u8";
    res_720_p = links[0] + "720.m3u8";
    res_480_p = links[0] + "480.m3u8";
    res_360_p = links[0] + "360.m3u8";
    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(data);
        hls.attachMedia(video);

    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = data;
    }
    btn.style.backgroundColor = "green";
    btn.style.color = "#FFF";
    btn.style.border = "none";
    btn.style.boxShadow = "none";
    btn.style.transform = "translate(-5px, 5px)";
    btn.childNodes[0].innerHTML = "pause";

}


//Play Pause function
function togglePlayPause() {
    if (video.paused) {
        video.play();
        Playicon.innerHTML = "pause";
        PlayMidicon.innerHTML = "pause";
    } else {
        video.pause();
        Playicon.innerHTML = "play_arrow";
        PlayMidicon.innerHTML = "play_arrow";
    }
}

//Skip 10sec function
function skip10_() {
    video.currentTime += 10;
}

function _skip10() {
    video.currentTime -= 10;
}

//video timeline Update
video.addEventListener("timeupdate", function() {
    timeLineUpdate();
});

function timeLineUpdate() {
    var percentage = (video.currentTime / video.duration) * 100;
    timelineBar.value = percentage;
    currentTime();
}
//Current time and duration setter
const currentTime = () => {
        let currentMin = Math.floor(video.currentTime / 60);
        let currentSec = Math.floor(video.currentTime - currentMin * 60);
        let durationMin = Math.floor(video.duration / 60);
        let durationSec = Math.floor(video.duration - durationMin * 60);
        currentTime_.innerHTML = `<p1 class="__ColorWhite_">${currentMin}:${currentSec <10 ? '0' +currentSec : currentSec}</p1>`;
        totalTime.innerHTML = `<p1 class="__ColorWhite_">${ durationMin}:${durationSec}</p1>`;
    }
    //Current time and duration setter


timelineBar.addEventListener("input", function() {
    var seekTime = (timeline.value / 100) * video.duration;
    video.currentTime = seekTime;
});







//Next function
function Next() {
    location.href = "uniwebview://Key?Value=Next";
}

//Function fullsceen;
function Fullscreen() {
    if (document.getElementById("fullSS").innerHTML == "fullscreen") {
        document.getElementById("fullSS").innerHTML = "fullscreen_exit"
    } else {
        document.getElementById("fullSS").innerHTML = "fullscreen"
    }
    location.href = "uniwebview://Key?Value=Full";
}






//volume muteUnMute

function muteUnmute() {
    if (video.muted) {
        video.muted = false;
        volumeIcon.innerHTML = "volume_up";
    } else {
        video.muted = true;
        volumeIcon.innerHTML = "volume_off"
    }
}

//Volume Range 
volumeRange.addEventListener('input', function() {

    video.volume = volumeRange.value / 100;
    // console.log(volumeRange.value / 100);
    if (volumeRange.value / 100 < 0.50) {
        volumeIcon.innerHTML = "volume_down"
    } else {
        volumeIcon.innerHTML = "volume_up"
    }
    if (volumeRange.value / 100 < 0.10) {
        volumeIcon.innerHTML = "volume_mute"
    }
    if (volumeRange.value / 100 == 0) {
        volumeIcon.innerHTML = "volume_off"
    }

});


//Setting  functionss


function toggleSetting() {
    clearQS();
    if (SettingHolder.style.display == "none") {
        SettingHolder.style.display = "grid";
    } else {
        SettingHolder.style.display = "none";
    }
    SettingHolder.children[reverse(hls.currentLevel)].style.backgroundColor = "rgba(30, 30, 30, 0.7)";
}

function clearQS() {
    SettingHolder.children[0].style.backgroundColor = "transparent";
    SettingHolder.children[1].style.backgroundColor = "transparent";
    SettingHolder.children[2].style.backgroundColor = "transparent";
    SettingHolder.children[3].style.backgroundColor = "transparent";
}

function reverse(val) {
    if (val == 3) {
        return 0;
    } else if (val == 2) {
        return 1;
    } else if (val == 1) {
        return 2;
    } else if (val == 0) {
        return 3;
    }
}

function re_1080_p() {
    SettingHolder.children[0].style.backgroundColor = "rgba(30, 30, 30, 0.5)";
    SettingHolder.children[1].style.backgroundColor = "transparent";
    SettingHolder.children[2].style.backgroundColor = "transparent";
    SettingHolder.children[3].style.backgroundColor = "transparent";
    hls.currentLevel = 3;

}

function re_720_p() {
    SettingHolder.children[0].style.backgroundColor = "transparent";
    SettingHolder.children[1].style.backgroundColor = "rgba(30, 30, 30, 0.5)";
    SettingHolder.children[2].style.backgroundColor = "transparent";
    SettingHolder.children[3].style.backgroundColor = "transparent";
    hls.currentLevel = 2;

}

function re_480_p() {
    SettingHolder.children[0].style.backgroundColor = "transparent";
    SettingHolder.children[1].style.backgroundColor = "transparent";
    SettingHolder.children[2].style.backgroundColor = "rgba(30, 30, 30, 0.5)";
    SettingHolder.children[3].style.backgroundColor = "transparent";
    hls.currentLevel = 1;
}

function re_360_p() {
    SettingHolder.children[0].style.backgroundColor = "transparent";
    SettingHolder.children[1].style.backgroundColor = "transparent";
    SettingHolder.children[2].style.backgroundColor = "transparent";
    SettingHolder.children[3].style.backgroundColor = "rgba(30, 30, 30, 0.5)";
    hls.currentLevel = 0;
}

//Hide and unhide controls

function HideCon() {
    document.getElementById("Controls").hidden = true;
}

function UnhideCon() {
    document.getElementById("Controls").hidden = false;
}