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
          name: "Jayasri Maha Bodhiya / ජයශ්‍රී මහා බෝධිය",
          artist: "Galigamuwe Gnanadeepa Thero",
          cover: "img/1.jpg",
          source: "http://docs.google.com/uc?export=open&id=1CK_ik5uZ6UqTnPWJPLa5w6YW2JIC70_D",
          url: "https://drive.google.com/uc?export=download&id=1CK_ik5uZ6UqTnPWJPLa5w6YW2JIC70_D",
          favorited: false
        },
        {
          name: "Sasara Bonds / සසර බැදීම්",
          artist: "Galigamuwe Gnanadeepa Thero",
          cover: "img/2.jpg",
          source: "http://docs.google.com/uc?export=open&id=14B2klGnBb3-mus5TvIE8dWUAZn8ZG7-F",
          url: "https://drive.google.com/uc?export=download&id=14B2klGnBb3-mus5TvIE8dWUAZn8ZG7-F",
          favorited: true
        },
        {
          name: "Maitreya Meditation / මෛත්‍රී භාවනාව",
          artist: "Galigamuwe Gnanadeepa Thero",
          cover: "img/3.jpg",
          source: "http://docs.google.com/uc?export=open&id=1jAgU2gFJBQwsvZVY9gmZ5agTAjT7VTuD",
          url: "https://drive.google.com/uc?export=download&id=1jAgU2gFJBQwsvZVY9gmZ5agTAjT7VTuD",
          favorited: false
        },
        {
          name: "Maitreya Anisansa / මෛත්‍රී ආනිසංස",
          artist: "Galigamuwe Gnanadeepa Thero",
          cover: "img/4.jpg",
          source: "http://docs.google.com/uc?export=open&id=1-dalt7u7r6J8cIOhizn16RaNcS2oTpnm",
          url: "https://drive.google.com/uc?export=download&id=1-dalt7u7r6J8cIOhizn16RaNcS2oTpnm",
          favorited: false
        },
        {
          name: "Small problems leading to big disasters / පුංචි ප්‍රශ්න වුවත් කෙලෙස් නිසා විශාලවිපත් වනහැටි",
          artist: "Galigamuwe Gnanadeepa Thero",
          cover: "img/5.jpg",
          source: "http://docs.google.com/uc?export=open&id=1t1lf20jynh7nwj1afehtf43ycpMeT53M",
          url: "https://drive.google.com/uc?export=download&id=1t1lf20jynh7nwj1afehtf43ycpMeT53M",
          favorited: true
        },
        {
          name: "Lust and sexual immorality / රාගය, වැරැදි කාමසේවනය",
          artist: "Galigamuwe Gnanadeepa Thero",
          cover: "img/6.jpg",
          source: "http://docs.google.com/uc?export=open&id=1qqEupgqJviU9AAxZPLx8y-MkMjmudF3W",
          url: "https://drive.google.com/uc?export=download&id=1qqEupgqJviU9AAxZPLx8y-MkMjmudF3W",
          favorited: false
        },
        {
          name: "Strengthen previous sarasa ping / සසර පිං බලවත් කරමු",
          artist: "Galigamuwe Gnanadeepa Thero",
          cover: "img/7.jpg",
          source: "http://docs.google.com/uc?export=open&id=1kcvz_CSrogNqjszeiUyw0WxPpoHP1mvt",
          url: "https://drive.google.com/uc?export=download&id=1kcvz_CSrogNqjszeiUyw0WxPpoHP1mvt",
          favorited: true
        },
        {
          name: "Patience, practical ways to control anger / ඉවසීම, කේන්තිය පාලනය",
          artist: "Galigamuwe Gnanadeepa Thero",
          cover: "img/8.jpg",
          source: "http://docs.google.com/uc?export=open&id=1Fh8AQLp0bfQTa4zyjxgB9aCG9JT8TFk5",
          url: "https://drive.google.com/uc?export=download&id=1Fh8AQLp0bfQTa4zyjxgB9aCG9JT8TFk5",
          favorited: false
        },
        {
          name: "15 gestures at the moment of death / මරණ මොහොතේ පහලවන ගතිනිමිති",
          artist: "Galigamuwe Gnanadeepa Thero",
          cover: "img/9.jpg",
          source: "http://docs.google.com/uc?export=open&id=1lvoYJD19k-LrjZBaNBfSCdYyN__2VZVs",
          url: "https://drive.google.com/uc?export=download&id=1lvoYJD19k-LrjZBaNBfSCdYyN__2VZVs",
          favorited: false
        },
        {
          name: "Thanksgiving deceased relatives / පිං ගන්න පුළුවන් මියගිය ඤාතීන් ",
          artist: "Galigamuwe Gnanadeepa Thero",
          cover: "img/10.jpg",
          source: "http://docs.google.com/uc?export=open&id=18jXBbTZ2XACGgCcaLh0UthjFlFMhdHQz",
          url: "https://drive.google.com/uc?export=download&id=18jXBbTZ2XACGgCcaLh0UthjFlFMhdHQz",
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
