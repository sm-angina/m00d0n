const quotes = [
  {
    q: "I find that the harder I work, the more luck I seem to have.",
    qA: thomasJefferosn,
    isFav: localStorage.getItem("q0isFav") || "no",
    agreed: localStorage.getItem("q0Agreed") || 0,
  },
  {
    q: "Everything you've ever wanted is sitting on the other side of fear.",
    qA: georgeAddair,
    isFav: localStorage.getItem("q1isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "Believe you can and you're halfway there.",
    qA: theodoreRoosevelt,
    isFav: localStorage.getItem("q2isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "All the world’s a stage, and all the men and women merely players.",
    qA: shakespeare,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "A rose by any other name would smell as sweet.",
    qA: shakespeare,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "All that glitters is not gold.",
    qA: shakespeare,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "Cowards die many times before their deaths; the valiant never taste of death but once.",
    qA: shakespeare,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "Give me my robe, put on my crown; I have Immortal longings in me.",
    qA: shakespeare,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "There is nothing either good or bad, but thinking makes it so.",
    qA: shakespeare,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "Better three hours too soon than a minute too late.",
    qA: shakespeare,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "All is fair in love and war.",
    qA: shakespeare,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "All the world’s a stage, and all the men and women merely players.",
    qA: shakespeare,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "What’s done is done.",
    qA: shakespeare,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: " Parting is such sweet sorrow.",
    qA: shakespeare,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don’t let yourself be lulled into inaction.",
    qA: billGates,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "I think it is possible for ordinary people to choose to be extraordinary.",
    qA: elon,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "If something is important enough, even if the odds are against you, you should still do it.",
    qA: elon,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "I could either watch it happen or be a part of it.",
    qA: elon,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    qA: lutherKing,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "I think therefore I am.",
    qA: reneDescartes,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "Keep your friends close, but your enemies closer.",
    qA: michaelCorleone,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "Knowledge is power.",
    qA: francisBacon,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "Speak softly and carry a big stick.",
    qA: theodoreRoosevelt,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "Three can keep a secret, if two of them are dead.",
    qA: benjaminFranklin,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference.",
    qA: robertFrost,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "No one can make you feel inferior without your consent.",
    qA: eleanorRoosevelt,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.",
    qA: abrahamLincoln,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "And those who were seen dancing were thought to be insane by those who could not hear the music.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "Sometimes people don't want to hear the truth because they don't want their illusions destroyed.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "He who has a why to live for can bear almost any how.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "In heaven, all the interesting people are missing.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "There are no facts, only interpretations.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "I cannot believe in a God who wants to be praised all the time.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "The snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions; they cease to be mind.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "I am a forest, and a night of dark trees: but he who is not afraid of my darkness, will find banks full of roses under my cypresses.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "The higher we soar the smaller we appear to those who cannot fly.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
  {
    q: "The thought of suicide is a great consolation: by means of it one gets through many a dark night.",
    qA: friedrichNietzsche,
    isFav: localStorage.getItem("q3isFav") || "no",
    agreed: localStorage.getItem("q1Agreed") || 0,
  },
];
