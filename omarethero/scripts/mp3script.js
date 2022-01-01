new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "1 - The dying mind / චුති සිත හෙවත් මරණාසන්න සිත",
          artist: "Ven. Omare Nandaloka Thero",
          cover: "img/on_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1k2QWo_0sPGF3Mxh-FHq18gpKdRAktAjf",
          url: "https://drive.google.com/uc?export=download&id=1k2QWo_0sPGF3Mxh-FHq18gpKdRAktAjf",
          favorited: false
        },
        {
          name: "2 - If a woman wants to become a Buddha | How the three Buddha's met / ස්ත්‍රියක් බුදු වීමට නම් |තුන් බුදුවරුන් හමු වුන හැටි | බෝසත් සිත| ඉති කුමරිය, රූපාවතියගෙ කතාව",
          artist: "Ven. Omare Nandaloka Thero",
          cover: "img/on_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1hc_9kuRaa14zqYoYoTlgWHDIlXx2Iu41",
          url: "https://drive.google.com/uc?export=download&id=1hc_9kuRaa14zqYoYoTlgWHDIlXx2Iu41",
          favorited: true
        },
        {
          name: "3 - Thinking of being born with a trigeminal neuralgia? / ත්‍රිහේතුක පටිසන්ධිය ඇතිව උපදින්න ද කල්පනාව? | ඔබ වඩාත් කැමති අසංකට ද? සසංකට ද? උපෙක්ඛාට ද?",
          artist: "Ven. Omare Nandaloka Thero",
          cover: "img/on_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1EZpU6iPSVK3SwtEaHUCC4EvI3Kq-YXSq",
          url: "https://drive.google.com/uc?export=download&id=1EZpU6iPSVK3SwtEaHUCC4EvI3Kq-YXSq",
          favorited: false
        },
        {
          name: "4 - Atanatiya Sutta / ආටානාටිය සූත්‍රයේ බණ | යක්කු, මිනිස්සු සහ දෙවියො අතර වෙනස සිතා බලමු",
          artist: "Ven. Omare Nandaloka Thero",
          cover: "img/on_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=13dsulAhZYMXTJqM6BuLRa0HQp9EEIi0t",
          url: "https://drive.google.com/uc?export=download&id=13dsulAhZYMXTJqM6BuLRa0HQp9EEIi0t",
          favorited: false
        },
        {
          name: "5 - Is dhamma sermons only for attaining Nibbana? / බණ කියන්නේ නිවන් දකින්නට පමණක්ද | අන්ධූපම, ව්‍යග්ගපජ්ජ, සිගාලක, උජ්ජය, ජවාලාත සූත්‍ර ඇසුරින්",
          artist: "Ven. Omare Nandaloka Thero",
          cover: "img/on_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1QtsgjIK5Qj_d5LGU1AxWQiroOGvbpqFt",
          url: "https://drive.google.com/uc?export=download&id=1QtsgjIK5Qj_d5LGU1AxWQiroOGvbpqFt",
          favorited: true
        },
        {
          name: "6 - Giving Dhamma alms / ධර්ම දානය සහ ගල්-පොල්, මල් අරගෙන බණ ගෙදර යන මිනිස්සු",
          artist: "Ven. Omare Nandaloka Thero",
          cover: "img/on_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1ca3IMIKMhoPvJng3_b3_-jAEdHi6dsPN",
          url: "https://drive.google.com/uc?export=download&id=1ca3IMIKMhoPvJng3_b3_-jAEdHi6dsPN",
          favorited: false
        },
        {
          name: "7 - The way to experience wordly pleasures and go to the heavenly world and attain Nibbana / ගිහි සැපත් විදලා, දිව්‍ය ලෝකෙත් ගිහින් නිවන් දකින්න පුළුවන් විධිය",
          artist: "Ven. Omare Nandaloka Thero",
          cover: "img/on_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1oWNR9MhEh7EhmYddI6VAuiWhmitPaeLb",
          url: "https://drive.google.com/uc?export=download&id=1oWNR9MhEh7EhmYddI6VAuiWhmitPaeLb",
          favorited: true
        },
        {
          name: "8 - What is Kathinaya? / කඨින පින්කම",
          artist: "Ven. Omare Nandaloka Thero",
          cover: "img/on_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1NqGi_-sFridk8b-ZR1hoWoB0JOiwb5HY",
          url: "https://drive.google.com/uc?export=download&id=1NqGi_-sFridk8b-ZR1hoWoB0JOiwb5HY",
          favorited: false
        },
        {
          name: "9 - Is enjoyment an obstacle to Nibbana? / ගිහි සැප විඳින එක නිවනට බාධාවක්ද",
          artist: "Ven. Omare Nandaloka Thero",
          cover: "img/on_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1jscY10C-okJUwx8_ycnp7A-jR7MC1riD",
          url: "https://drive.google.com/uc?export=download&id=1jscY10C-okJUwx8_ycnp7A-jR7MC1riD",
          favorited: false
        },
        {
          name: "10 - It is enough to have siliya to enjoy. Then what about money? / සැප විදින්න සීලය තිබුනම ඇති. එතකොට මුදල් ?",
          artist: "Ven. Omare Nandaloka Thero",
          cover: "img/on_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1Yc-f2uANY87tnT0Vcqebc3skEOo8BBFv",
          url: "https://drive.google.com/uc?export=download&id=1Yc-f2uANY87tnT0Vcqebc3skEOo8BBFv",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.thero_header');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.thero_header .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.thero_header .letter',
    opacity: 100,
  });
