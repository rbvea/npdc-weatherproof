<template>
  <div
    class="relative flex items-center justify-center min-h-screen bg-beige px-4 sm:pt-0"
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8 text-center text-blue">
      <h1 class="text-2xl mb-2 font-light">Your Spring word:</h1>
      <p class="text-3xl mb-6 ont-bold tracking-widest">{{ word }}</p>
      <div class="mb-8 text-left">
        <p
          v-for="(workout, i) in workouts"
          class="tracking-wide"
          :key="`workout-${i}`"
          v-html="workout"
        />
      </div>
      <button
        @click="chooseWord"
        class="bg-pink hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded"
      >
        Let's Go Again!
      </button>
    </div>
  </div>
</template>

<script>
const letters = {
  A: "Ab crunches (10)",
  B: "Bear crawl (out and back)",
  C: "Cursty Lunges (10)",
  D: "D.C. Twists (10)",
  E: "Elevated glute bridges (10)",
  F: "Flying Dutchmen (10)",
  G: "Group Train Squats (10)",
  H: "Hoistees (10)",
  I: "Inchworms (10)",
  J: "Jumping Jacks (10)",
  K: "Knee to opposite elbows (10)",
  L: "Lunges (10)",
  M: "Mountain Climbers (10)",
  N: "Narrow Pushups (10)",
  O: "Over the tops (10)",
  P: "Pushing Up Daisies (10)",
  Q: "Quick feet (1 minute)",
  R: "Rollercoasters (10)",
  S: "Star jumps (10)",
  T: "Toe-to-toe partner calf raises (1 minute)",
  U: "Upward Facing Dog (15 seconds)",
  V: "V-ups (10)",
  W: "Windshield wipers w/ partner (10)",
  X: "X-ups (10)",
  Y: "Yog (out and back)",
  Z: "Zupermans (10)",
};

const words = [
  "FLOWERS",
  "BIRDS",
  "WARMTH",
  "LIGHT",
  "KITES",
  "RAIN",
  "SPRING",
  "BLOOMS",
  "SHORTS",
  "GARDENS",
  "MEADOWS",
];

export default {
  name: "Workout",
  data() {
    return {
      word: "",
      words,
      workouts: [],
    };
  },
  mounted() {
    this.chooseWord();
  },
  methods: {
    chooseWord() {
      if (!this.words.length) {
        alert("you beat the game!");
        this.words = words;
      }
      const randomWord =
        this.words[Math.floor(Math.random() * this.words.length)];
      this.words = this.words.filter((word) => word !== randomWord);
      this.word = randomWord;
      this.workouts = randomWord
        .split("")
        .filter((l) => l.trim())
        .map((letter) => {
          const workout = letters[letter].replace(
            letter,
            '<span class="font-bold">' + letter + "</span>"
          );
          return workout;
        });
    },
  },
};
</script>
