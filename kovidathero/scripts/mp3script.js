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
          name: "1 - How Tissa went down to the river barefoot and went to heaven / හෙළුවෙන් ගඟට බැස්ස තිස්ස දිව්‍යලෝකයට ගිය හැටි",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1n-_PX7I3gdHZm9lse9lK3JXaanQ54-y9",
          url: "https://drive.google.com/uc?export=download&id=1n-_PX7I3gdHZm9lse9lK3JXaanQ54-y9",
          favorited: false
        },
        {
          name: "2 - Do not give more than one / එකෙකුටවත් වැඩියෙන් දෙන්න එපා",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=14iCVLnUEohZlQ_i2oVcyiWfWtYQmP1Zx",
          url: "https://drive.google.com/uc?export=download&id=14iCVLnUEohZlQ_i2oVcyiWfWtYQmP1Zx",
          favorited: true
        },
        {
          name: "3 - What kind of pottery is there for the corpse? / මළකඳට මොන පාංසකූල ද?",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1X3wONCGWdrDS7T5Qgxpy8m40JDqeYZ8Y",
          url: "https://drive.google.com/uc?export=download&id=1X3wONCGWdrDS7T5Qgxpy8m40JDqeYZ8Y",
          favorited: false
        },
        {
          name: "4 - People will deceive you, but if you give in, you will get it / මිනිස්සු ඔබව රැවටුවත් , ඔබ පිණට දුන්නොත් ඔබට ලැබෙනවාමයි",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1MPP2fva24bMCTD2dBkpQMALCZPPOm-Ch",
          url: "https://drive.google.com/uc?export=download&id=1MPP2fva24bMCTD2dBkpQMALCZPPOm-Ch",
          favorited: false
        },
        {
          name: "5 - Things to do to live comfortably / සැහැල්ලුවෙන් ජීවත් වන්න කල යුතු දේ",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1bAHQDuRGP5xAFgaMxlyoul_V4zCfamSC",
          url: "https://drive.google.com/uc?export=download&id=1bAHQDuRGP5xAFgaMxlyoul_V4zCfamSC",
          favorited: true
        },
        {
          name: "6 - Corona heals in an hour Grass coffee! / කොරෝනා පැයකින් සනීපයි තණකොළ කාපියව්!",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1-s5gIsADqPuei_5BI_XXdCYfD9RbI4Mq",
          url: "https://drive.google.com/uc?export=download&id=1-s5gIsADqPuei_5BI_XXdCYfD9RbI4Mq",
          favorited: false
        },
        {
          name: "7 - Haven't you donated these things yet as you get older? / වයසට ගියත් ඔබ තවම මේ දේවල් දන් දුන්නේ නැතිද?",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1a1F-OpcH32fcvdPhaV1eF1IPV5UKnxLl",
          url: "https://drive.google.com/uc?export=download&id=1a1F-OpcH32fcvdPhaV1eF1IPV5UKnxLl",
          favorited: true
        },
        {
          name: "8 - Why do we dream? / අපිට සිහින පෙනෙන්නේ ඇයි?",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=14rJqmIrELSSjDXgqSkXpBezz4Wb2xgI4",
          url: "https://drive.google.com/uc?export=download&id=14rJqmIrELSSjDXgqSkXpBezz4Wb2xgI4",
          favorited: false
        },
        {
          name: "9 - How to live a sucessful life with women / ගැහැණුන් සමග කටයුතු කල යුතු ආකාරය",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=14Y6HmY3I6vjGnZFUl8QcCccQsYLkzptk",
          url: "https://drive.google.com/uc?export=download&id=14Y6HmY3I6vjGnZFUl8QcCccQsYLkzptk",
          favorited: false
        },
        {
          name: "10 - Do not be fooled by jokes / විහිළුවට වත් අනුන්ගේ සිත් බිඳින්න එපා",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1iP5vw_ttPe4mzKWpm9pAU5gdgzTrptY7",
          url: "https://drive.google.com/uc?export=download&id=1iP5vw_ttPe4mzKWpm9pAU5gdgzTrptY7",
          favorited: false
        },
        {
          name: "11 - Relax TV 2021/11/18",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=16xrNtOfn2-uu7RH29p06FfMKrP1_Q4Qe",
          url: "https://drive.google.com/uc?export=download&id=16xrNtOfn2-uu7RH29p06FfMKrP1_Q4Qe",
          favorited: false
        },
        {
          name: "12 - Do you want to enjoy the benefit of others? / ඔබත් අනුන් කල පිනෙන් සැප විඳින්න හිතනවාද?",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1UwDuPCpSlGuZkF8_hP9OCZBqNc5aQsbf",
          url: "https://drive.google.com/uc?export=download&id=1UwDuPCpSlGuZkF8_hP9OCZBqNc5aQsbf",
          favorited: false
        },
        {
          name: "13 - Did the Lord Buddha say not to enjoy? / බුදු රජාණවහන්සේ සැප විඳින්න එපා කිව්වද?",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1_SpQCrcrL6eupYv1zBOXIom9DBsnSmZI",
          url: "https://drive.google.com/uc?export=download&id=1_SpQCrcrL6eupYv1zBOXIom9DBsnSmZI",
          favorited: false
        },
        {
          name: "14 - Life is about suffering / ජීවිතය තියෙන්නේ විඳින්න මිස විඳවන්න නොවෙයි",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1FlWwloyN13faC5okwiFI6PEEDOM_XS6p",
          url: "https://drive.google.com/uc?export=download&id=1FlWwloyN13faC5okwiFI6PEEDOM_XS6p",
          favorited: false
        },
        {
          name: "15 - Something that is more difficult than swallowing a sword / කඩුවක් ගිලිනවාටත් වඩා අමාරු දෙයක්",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1ksfigR2AKbAWWz1R0-_67KLlq5LEwMzB",
          url: "https://drive.google.com/uc?export=download&id=1ksfigR2AKbAWWz1R0-_67KLlq5LEwMzB",
          favorited: false
        },
        {
          name: "16 - Dharmavahini 2021/10/20",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1R_Z219QDYVqgZdg_priU5-0iW1WQaPEF",
          url: "https://drive.google.com/uc?export=download&id=1R_Z219QDYVqgZdg_priU5-0iW1WQaPEF",
          favorited: false
        },
        {
          name: "17 - Pragna TV 2021/12/18",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1HI_QjFzxMOANLP7uUKwHxvQ3rsBAPKpK",
          url: "https://drive.google.com/uc?export=download&id=1HI_QjFzxMOANLP7uUKwHxvQ3rsBAPKpK",
          favorited: false
        },
        {
          name: "18 - Do we really have to be patient? / අපි ඇත්තටම ඉවසන්න ඕනිද",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1NEujV3HHeAGnl52d9UyNYYZe_h9XoeqY",
          url: "https://drive.google.com/uc?export=download&id=1NEujV3HHeAGnl52d9UyNYYZe_h9XoeqY",
          favorited: false
        },
        {
          name: "19 - Pahan Sitha 12/03/2021",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1FM_CxwezXRyfYsRfmLzgKELgHyYkBf4b",
          url: "https://drive.google.com/uc?export=download&id=1FM_CxwezXRyfYsRfmLzgKELgHyYkBf4b",
          favorited: false
        },
        {
          name: "20 - Relax TV 2021/10/15",
          artist: "Boralle Kovida Thero",
          cover: "img/bk_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1BEuMGeuieKppbA3FqzYfYYE1yOqu9Rpp",
          url: "https://drive.google.com/uc?export=download&id=1BEuMGeuieKppbA3FqzYfYYE1yOqu9Rpp",
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
