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
          name: "1 - Abandonment / අත්හැරීම",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1JuXWSmZMxd4WDZ49g525LnjzGVCr5Bcx",
          url: "https://drive.google.com/uc?export=download&id=1JuXWSmZMxd4WDZ49g525LnjzGVCr5Bcx",
          favorited: false
        },
        {
          name: "2 - Don't worry / කම්පා නොවන්න",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1mgy3N23-OG8wtJPMGKy6IT4KpoIJOAxh",
          url: "https://drive.google.com/uc?export=download&id=1mgy3N23-OG8wtJPMGKy6IT4KpoIJOAxh",
          favorited: true
        },
        {
          name: "3 - How sasara chases enemies / සසර හතුරන් පසුපස එන හැටි",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1k1vjPYAqoOHQJWLiizze_DcmdDvo5_W_",
          url: "https://drive.google.com/uc?export=download&id=1k1vjPYAqoOHQJWLiizze_DcmdDvo5_W_",
          favorited: false
        },
        {
          name: "4 - A great sermon for parents / දෙමාපියන් සඳහා ලස්සන දේශනයක්",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1J4dYwhoyA0ZNmYeksACw96rGaE0ViuQD",
          url: "https://drive.google.com/uc?export=download&id=1J4dYwhoyA0ZNmYeksACw96rGaE0ViuQD",
          favorited: false
        },
        {
          name: "5 - No shock / කම්පා නොවීම",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1gxWWrvL3orGnIVIfQpyOk18Me0CTKUV-",
          url: "https://drive.google.com/uc?export=download&id=1gxWWrvL3orGnIVIfQpyOk18Me0CTKUV-",
          favorited: true
        },
        {
          name: "6 - Obedience / කීකරු කම",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1aIrusY7yVuYM-GWAUDcu9xnUELrpcvPj",
          url: "https://drive.google.com/uc?export=download&id=1aIrusY7yVuYM-GWAUDcu9xnUELrpcvPj",
          favorited: false
        },
        {
          name: "7 - Disasters / විපත්ති",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1-vq86p7pqb26E6pMTQdFEDBcBcGXe5ng",
          url: "https://drive.google.com/uc?export=download&id=1-vq86p7pqb26E6pMTQdFEDBcBcGXe5ng",
          favorited: true
        },
        {
          name: "8 - Matugama sutta / මාතුගාම සූත්‍රය",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1pG-k0bTF9rRgrIs_7p567sNXz61hLpOS",
          url: "https://drive.google.com/uc?export=download&id=1pG-k0bTF9rRgrIs_7p567sNXz61hLpOS",
          favorited: false
        },
        {
          name: "9 - Should I repent? / පසුතැවිලි විය යුතුද?",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1Ir9iqfdvinOER0kw-M8sBbyvVQfB9AyQ",
          url: "https://drive.google.com/uc?export=download&id=1Ir9iqfdvinOER0kw-M8sBbyvVQfB9AyQ",
          favorited: false
        },
        {
          name: "10 - To be happy, to be grateful / සතුටින් යුත්තවීම, කළගුණ සැළකීම",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1w5VMSsKBvRbUoy9tivK0p23DVYT8g-NG",
          url: "https://drive.google.com/uc?export=download&id=1w5VMSsKBvRbUoy9tivK0p23DVYT8g-NG",
          favorited: false
        },
        {
          name: "11 - The sovereignty formula / සෝවචස්සතා සූත්‍රය",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1Cd2IUMvrz1doXuSjmbA7iEdaVeY7Bf-X",
          url: "https://drive.google.com/uc?export=download&id=1Cd2IUMvrz1doXuSjmbA7iEdaVeY7Bf-X",
          favorited: false
        },
        {
          name: "12 - Who is a friend? / මිතුරා කවුද?",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1KW_4gATe9uOsX4SbxA1lgrwgDebHCXtp",
          url: "https://drive.google.com/uc?export=download&id=1KW_4gATe9uOsX4SbxA1lgrwgDebHCXtp",
          favorited: false
        },
        {
          name: "13 - Udakupama Puggala Sutta / උදකූපම පුග්ගල සූත්‍රය",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1iMPlOUsimnSOV0oWvWfrGc3y3Ru4OH6x",
          url: "https://drive.google.com/uc?export=download&id=1iMPlOUsimnSOV0oWvWfrGc3y3Ru4OH6x",
          favorited: false
        },
        {
          name: "14 - The formula / සේක සූත්‍රය",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1C40WCKWXkoxq3m5r6TwcGvaRXVtHMdcv",
          url: "https://drive.google.com/uc?export=download&id=1C40WCKWXkoxq3m5r6TwcGvaRXVtHMdcv",
          favorited: false
        },
        {
          name: "15 - Organic tone / ඉන්ද්‍රීය සංවරය",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1ZW-M0rb9i_IapjCm0pl9XFZVGeleYAkw",
          url: "https://drive.google.com/uc?export=download&id=1ZW-M0rb9i_IapjCm0pl9XFZVGeleYAkw",
          favorited: false
        },
        {
          name: "16 - A beautiful dhamma sermon for little ones / පොඩි ලමයින්ට ලස්සන බණක්",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1HqBA9yzLVy1O1thrhNWerkc8YnhGCWWQ",
          url: "https://drive.google.com/uc?export=download&id=1HqBA9yzLVy1O1thrhNWerkc8YnhGCWWQ",
          favorited: false
        },
        {
          name: "17 - Have you done one good merit? / එක පිනක් කලාම ඇද්ද?",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1pzpnubqjBblbwpovCoX36lSJLkWr-bwv",
          url: "https://drive.google.com/uc?export=download&id=1pzpnubqjBblbwpovCoX36lSJLkWr-bwv",
          favorited: false
        },
        {
          name: "18 - Managing greed / තණ්හාව",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1HvKexZ3A-b8m3VAK_Jexmp3PX9OxYv_G",
          url: "https://drive.google.com/uc?export=download&id=1HvKexZ3A-b8m3VAK_Jexmp3PX9OxYv_G",
          favorited: false
        },
        {
          name: "19 - Searching for the wrong thing / වැරදිම හෙවීම",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1tOTalPQS51tnpHbj_mcJHC1yiiujDrj8",
          url: "https://drive.google.com/uc?export=download&id=1tOTalPQS51tnpHbj_mcJHC1yiiujDrj8",
          favorited: false
        },
        {
          name: "20 - Let us see the Dhamma / ධර්මය දකිමු",
          artist: "Mawarale Bhaddiya Thero",
          cover: "img/mb_cover.jpg",
          source: "http://docs.google.com/uc?export=open&id=1FS6MNvuM1v36Lt4A9uYMAoVXDv6jHItP",
          url: "https://drive.google.com/uc?export=download&id=1FS6MNvuM1v36Lt4A9uYMAoVXDv6jHItP",
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
