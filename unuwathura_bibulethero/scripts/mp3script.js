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
          name: "1 - Fill every moment of life with joy / හැම මොහොතක්ම ජීවිතේ පිනෙන් පුරව ගන්න",
          artist: "Ven. Unuwathurabibule Piyadassi Thero",
          cover: "img/up_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1YoxBrJ9LSa8H7t7jS6qjzaOn7wzS99jM",
          url: "https://drive.google.com/uc?export=download&id=1YoxBrJ9LSa8H7t7jS6qjzaOn7wzS99jM",
          favorited: false
        },
        {
          name: "2 - Do not be discouraged, dear ones / මනසින් වැටෙන්න එපා පින්වතුනි ඔබ මේ ගෙවන්නෙ පෙර අකුසල්",
          artist: "Ven. Unuwathurabibule Piyadassi Thero",
          cover: "img/up_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1Fut4QKwzA85B4LaX9wTbs8RWfDmKNLP0",
          url: "https://drive.google.com/uc?export=download&id=1Fut4QKwzA85B4LaX9wTbs8RWfDmKNLP0",
          favorited: true
        },
        {
          name: "3 - Do not think too much of anything / කිසිම දෙයක් ඕනවට වඩා හිතන්න එපා",
          artist: "Ven. Unuwathurabibule Piyadassi Thero",
          cover: "img/up_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1h7O0gVF0Uvv0NPSGtKqZdgSb0JLUALDA",
          url: "https://drive.google.com/uc?export=download&id=1h7O0gVF0Uvv0NPSGtKqZdgSb0JLUALDA",
          favorited: false
        },
        {
          name: "4 - Listen to this verse now to get rid of Mara / මාරයාගෙන් මිදෙන්න මේ බණ පදය දැන්ම අහන්න",
          artist: "Ven. Unuwathurabibule Piyadassi Thero",
          cover: "img/up_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=18ByewVFK50SpH0i8z6rWx57R-B_lFqZ1",
          url: "https://drive.google.com/uc?export=download&id=18ByewVFK50SpH0i8z6rWx57R-B_lFqZ1",
          favorited: false
        },
        {
          name: "5 - Find out about your luck in being born in Sri Lanka / ලක්දිව ඉපදුනු ඔබේ වාසනාව් ගැන දැනගන්න",
          artist: "Ven. Unuwathurabibule Piyadassi Thero",
          cover: "img/up_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1oeU10pJ-wusVasINzeIweJGxW0CBsR5F",
          url: "https://drive.google.com/uc?export=download&id=1oeU10pJ-wusVasINzeIweJGxW0CBsR5F",
          favorited: true
        },
        {
          name: "6 - Where there is no understanding, everything feels comfortable / අවබෝධයෙන් තොර වූ තැන සියල්ල සැපක්සේ දැනේ",
          artist: "Ven. Unuwathurabibule Piyadassi Thero",
          cover: "img/up_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1HLr2kRsa9_ptW-6CvdJ9VnekBiZb7i4R",
          url: "https://drive.google.com/uc?export=download&id=1HLr2kRsa9_ptW-6CvdJ9VnekBiZb7i4R",
          favorited: false
        },
        {
          name: "7 - Is marriage a submission? / විවාහය යනු යටත් වීමද? ",
          artist: "Ven. Unuwathurabibule Piyadassi Thero",
          cover: "img/up_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1KSfTA8jFDc1TlgdhdymDH7gfcWaeb6gy",
          url: "https://drive.google.com/uc?export=download&id=1KSfTA8jFDc1TlgdhdymDH7gfcWaeb6gy",
          favorited: true
        },
        {
          name: "8 - A beggar comes to you for your good / යාචකයෙක් ඔබ ගාවට එන්නෙ ඔබේ පිනට",
          artist: "Ven. Unuwathurabibule Piyadassi Thero",
          cover: "img/up_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1gwCRm-BnRFHqjyp04eovb50XMn9yWgg4",
          url: "https://drive.google.com/uc?export=download&id=1gwCRm-BnRFHqjyp04eovb50XMn9yWgg4",
          favorited: false
        },
        {
          name: "9 - The hatred that darkens Sasara / සසරම අඳුරු කරන ද්වේෂය",
          artist: "Ven. Unuwathurabibule Piyadassi Thero",
          cover: "img/up_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=15rncAikCrQAF9f6Yi5sJBNwcBtcB_CnE",
          url: "https://drive.google.com/uc?export=download&id=15rncAikCrQAF9f6Yi5sJBNwcBtcB_CnE",
          favorited: false
        },
        {
          name: "10 - Listen to this sermon to get rid of the four hells / සතර අපායෙන් මිදෙන්න මේ බණ අහන්න",
          artist: "Ven. Unuwathurabibule Piyadassi Thero",
          cover: "img/up_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=16DskEyN5nRJK3HAvnLs-EjsufKzRoh4V",
          url: "https://drive.google.com/uc?export=download&id=16DskEyN5nRJK3HAvnLs-EjsufKzRoh4V",
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
