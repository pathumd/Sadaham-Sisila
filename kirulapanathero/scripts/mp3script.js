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
          name: "1 - People who chase after garbage / කුණු පස්සෙන් දිව්ව ඇති පිංවතුණි",
          artist: "Ven. Kirulapana Dhammavijaya Thero",
          cover: "img/kd_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1geFfs0_t4R2kl3JB78OIlGtGE7h74tjU",
          url: "https://drive.google.com/uc?export=download&id=1geFfs0_t4R2kl3JB78OIlGtGE7h74tjU",
          favorited: false
        },
        {
          name: "2 - Try to understand this Dhamma without wasting time in vain / නිකරුනේ කාලය නාස්ති නොකර මේ ධර්මය අවබෝධ කර ගන්න මහන්සි වෙන්න",
          artist: "Ven. Kirulapana Dhammavijaya Thero",
          cover: "img/kd_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1aJZ77IBQWO3J-1fwUJuJ4eEyIkBpHe7F",
          url: "https://drive.google.com/uc?export=download&id=1aJZ77IBQWO3J-1fwUJuJ4eEyIkBpHe7F",
          favorited: true
        },
        {
          name: "3 - A very wonderful discourse without words to explain / පැහැදිලි කරන්න වචන නැති තරම් හරිම ආශ්චර්යමත් දේශනයක්",
          artist: "Ven. Kirulapana Dhammavijaya Thero",
          cover: "img/kd_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1HIYxQjV1ZuIBotVLn1M9an341uBzBa2U",
          url: "https://drive.google.com/uc?export=download&id=1HIYxQjV1ZuIBotVLn1M9an341uBzBa2U",
          favorited: false
        },
        {
          name: "4 - The one who loves the image gets lost in the world / රූපයට ඇලුම් කරන කෙනා සසරේ අතරමං වෙනවා පිංවත්නි",
          artist: "Ven. Kirulapana Dhammavijaya Thero",
          cover: "img/kd_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1gsnNRrYDqUchhPQjm8bmtk_pDsVCcwzI",
          url: "https://drive.google.com/uc?export=download&id=1gsnNRrYDqUchhPQjm8bmtk_pDsVCcwzI",
          favorited: false
        },
        {
          name: "5 - Do not wander in search of happiness / සතුට හොයාගෙන ඉබාගාතෙ දුවන්න එපා පිංවත්නි",
          artist: "Ven. Kirulapana Dhammavijaya Thero",
          cover: "img/kd_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=10S-1_QyPEpsVVrWTaa92sHYmLaUFHsEt",
          url: "https://drive.google.com/uc?export=download&id=10S-1_QyPEpsVVrWTaa92sHYmLaUFHsEt",
          favorited: true
        },
        {
          name: "6 - The dangers of Sasare / සසරෙහි ඇති භයානක කම | ඔබ ඇසිය යුතුම ධර්ම දේශනයක්",
          artist: "Ven. Kirulapana Dhammavijaya Thero",
          cover: "img/kd_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1iMTb8oSa1oos7yCxUla3kVYEWrlgOMX4",
          url: "https://drive.google.com/uc?export=download&id=1iMTb8oSa1oos7yCxUla3kVYEWrlgOMX4",
          favorited: false
        },
        {
          name: "7 - If you are a mother with a child, be sure to listen to these sermons / ඔබත් දරුවෙකු සිටින මවක් නම් අනිවාර්යයෙන් මෙම බණ අහන්න",
          artist: "Ven. Kirulapana Dhammavijaya Thero",
          cover: "img/kd_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1n2ru9IXxGoYcuxy7Z9n14ijWvF4ZHC9g",
          url: "https://drive.google.com/uc?export=download&id=1n2ru9IXxGoYcuxy7Z9n14ijWvF4ZHC9g",
          favorited: true
        },
        {
          name: "8 - Lecture on how the Pentacle works / පංචස්කන්ධය ක්‍රියාකරන ආකාරය පිලිබද සම්පූර්ණ දේශනය",
          artist: "Ven. Kirulapana Dhammavijaya Thero",
          cover: "img/kd_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1zWie_r-bO56V6hEXRafLuDO8YTMDIroZ",
          url: "https://drive.google.com/uc?export=download&id=1zWie_r-bO56V6hEXRafLuDO8YTMDIroZ",
          favorited: false
        },
        {
          name: "9 - No matter how much you enjoy,there is only one thing you inherit / මොන තරම් සැප දුන්නත් ඔබට උරුම එකම දේ",
          artist: "Ven. Kirulapana Dhammavijaya Thero",
          cover: "img/kd_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1rKzeUNCcHJwQ5sC6FmKurEu1P4sCsq1A",
          url: "https://drive.google.com/uc?export=download&id=1rKzeUNCcHJwQ5sC6FmKurEu1P4sCsq1A",
          favorited: false
        },
        {
          name: "10 - If you are a Buddhist, be sure to listen to this sermon / ඔබ බෞද්ධයෙක් නම් මේ දේශනාව අනිවාර්යෙන්ම අහන්න",
          artist: "Ven. Kirulapana Dhammavijaya Thero",
          cover: "img/kd_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1ZQpfANbxhYjMedKFFMLv6ykPcH4umiwY",
          url: "https://drive.google.com/uc?export=download&id=1ZQpfANbxhYjMedKFFMLv6ykPcH4umiwY",
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
