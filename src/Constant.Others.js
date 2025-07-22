const ALL_QUESTION_LIST = [
  {
    key: 1,
    question: "By midday, how does your skin usually feel?",
    options: [
      { key: 1, option: "Oily and shiny", icon: "💧", skin_type: [{ FLARE: 2 }] },
      { key: 2, option: "Oily only on the T-zone", icon: "✨", skin_type: [{ GLOW: 1.5 }, { FLARE: 0.5 }] },
      { key: 3, option: "Pretty normal", icon:"🌿", skin_type: [{ MUSE: 2 }] },
      { key: 4, option: "Dry or tight", icon: "❄️", skin_type: [{ DUSK: 2 }] }
    ]
  },
  {
    key: 2,
    question: "How often do you get breakouts?",
    options: [
      { key: 1, option: "All the time (weekly)", icon: "", skin_type: [{ FORGE: 2 }] },
      { key: 2, option: "Sometimes (few per month)", icon: "", skin_type: [{ FLARE: 1.5 }, { FORGE: 0.5 }] },
      { key: 3, option: "Rarely", icon: "", skin_type: [{ CALM: 2 }] },
      { key: 4, option: "Only when I switch products", icon: "", skin_type: [{ BLOOM: 1.5 }, { CALM: 0.5 }] }
    ]
  },
  {
    key: 3,
    question: "How sensitive is your skin?",
    options: [
      { key: 1, option: "Red, itchy, stings easily", icon: "", skin_type: [{ BLOOM: 2 }] },
      { key: 2, option: "A little sensitive here and there", icon: "", skin_type: [{ DUSK: 1.5 }, { BLOOM: 0.5 }] },
      { key: 3, option: "Not really sensitive", icon: "", skin_type: [{ FORGE: 2 }] },
      { key: 4, option: "Haven’t noticed", icon: "", skin_type: [{ MUSE: 2 }] }
    ]
  },
  {
    key: 4,
    question: "Can you see your pores clearly?",
    options: [
      { key: 1, option: "Yup, big and visible", icon: "", skin_type: [{ FLARE: 2 }] },
      { key: 2, option: "Mostly on my nose or cheeks", icon: "", skin_type: [{ GLOW: 1.5 }, { FLARE: 0.5 }] },
      { key: 3, option: "Not really noticeable", icon: "", skin_type: [{ BLOOM: 2 }] },
      { key: 4, option: "Not sure", icon: "", skin_type: [{ CALM: 2 }] }
    ]
  },
  {
    key: 5,
    question: "If you skip moisturizer for a day, what happens?",
    options: [
      { key: 1, option: "I feel dry or tight instantly", icon: "", skin_type: [{ DUSK: 2 }] },
      { key: 2, option: "I’m fine, but a little dull", icon: "", skin_type: [{ CALM: 1.5 }, { HAZE: 0.5 }] },
      { key: 3, option: "No difference at all", icon: "", skin_type: [{ GLOW: 2 }] },
      { key: 4, option: "I actually feel better", icon: "", skin_type: [{ FORGE: 2 }] }
    ]
  },
  {
    key: 6,
    question: "What happens to your skin after sun or pimples?",
    options: [
      { key: 1, option: "Dark spots show up fast and stay", icon: "", skin_type: [{ HAZE: 1 }, { BLOOM: 0.5 }] },
      { key: 2, option: "Spots fade eventually", icon: "", skin_type: [{ FORGE: 1 }, { MUSE: 0.5 }] },
      { key: 3, option: "Barely any marks", icon: "", skin_type: [{ GLOW: 1 }, { CALM: 0.5 }] },
      { key: 4, option: "Avoid sun like my ex", icon: "", skin_type: [{ BLOOM: 1 }, { DUSK: 0.5 }] }
    ]
  },
  {
    key: 7,
    question: "How does your skin feel to the touch?",
    options: [
      { key: 1, option: "Rough or bumpy", icon: "", skin_type: [{ FORGE: 1 }, { FLARE: 0.5 }] },
      { key: 2, option: "Dull or uneven", icon: "", skin_type: [{ HAZE: 1 }, { DUSK: 0.5 }] },
      { key: 3, option: "Soft and smooth", icon: "", skin_type: [{ GLOW: 1 }, { MUSE: 0.5 }] },
      { key: 4, option: "Depends on the season", icon: "", skin_type: [{ CALM: 1 }, { MUSE: 0.5 }] }
    ]
  },
  {
    key: 8,
    question: "What’s your skincare vibe?",
    options: [
      { key: 1, option: "I stick to the same routine", icon: "", skin_type: [{ CALM: 1 }, { GLOW: 0.5 }] },
      { key: 2, option: "I try new stuff, but I’m careful", icon: "", skin_type: [{ DUSK: 1 }, { BLOOM: 0.5 }] },
      { key: 3, option: "I’m always testing new things", icon: "", skin_type: [{ FORGE: 1 }, { FLARE: 0.5 }] },
      { key: 4, option: "I don’t have a routine", icon: "", skin_type: [{ HAZE: 1 }, { MUSE: 0.5 }] }
    ]
  },
  {
    key: 9,
    question: "When the seasons change, what happens to your skin?",
    options: [
      { key: 1, option: "I get dry and flaky", icon: "", skin_type: [{ DUSK: 1 }, { BLOOM: 0.5 }] },
      { key: 2, option: "I get oily or break out", icon: "", skin_type: [{ FLARE: 1 }, { FORGE: 0.5 }] },
      { key: 3, option: "I look dull or tired", icon: "", skin_type: [{ HAZE: 1 }, { CALM: 0.5 }] },
      { key: 4, option: "Doesn’t really change", icon: "", skin_type: [{ GLOW: 1 }, { MUSE: 0.5 }] }
    ]
  },
  {
    key: 10,
    question: "How long do dark spots stick around?",
    options: [
      { key: 1, option: "Forever", icon: "", skin_type: [{ HAZE: 1 }, { BLOOM: 0.5 }] },
      { key: 2, option: "Weeks", icon: "", skin_type: [{ FORGE: 1 }, { FLARE: 0.5 }] },
      { key: 3, option: "Fades fast", icon: "", skin_type: [{ MUSE: 1 }, { GLOW: 0.5 }] },
      { key: 4, option: "I don’t get them", icon: "", skin_type: [{ CALM: 1 }, { DUSK: 0.5 }] }
    ]
  },
  {
    key: 11,
    question: "What’s your skincare focus right now?",
    options: [
      { key: 1, option: "Calm + hydration", icon: "", skin_type: [{ CALM: 1 }, { DUSK: 0.5 }] },
      { key: 2, option: "Even tone", icon: "", skin_type: [{ HAZE: 1 }, { BLOOM: 0.5 }] },
      { key: 3, option: "Texture & pores", icon: "", skin_type: [{ FLARE: 1 }, { FORGE: 0.5 }] },
      { key: 4, option: "Glow + anti-aging", icon: "", skin_type: [{ MUSE: 1 }, { GLOW: 0.5 }] }
    ]
  },
  {
    key: 12,
    question: "What happens when you try lots of new products?",
    options: [
      { key: 1, option: "Skin freaks out", icon: "", skin_type: [{ BLOOM: 1 }, { DUSK: 0.5 }] },
      { key: 2, option: "Breakouts or clogged pores", icon: "", skin_type: [{ FLARE: 1 }, { FORGE: 0.5 }] },
      { key: 3, option: "Overwhelmed, but not irritated", icon: "", skin_type: [{ CALM: 1 }, { HAZE: 0.5 }] },
      { key: 4, option: "My skin handles it", icon: "", skin_type: [{ GLOW: 1 }, { MUSE: 0.5 }] }
    ]
  },
  {
    key: 13,
    question: "What’s your biggest skin goal?",
    options: [
      { key: 1, option: "Calm + comfort", icon: "", skin_type: [{ CALM: 1 }, { DUSK: 0.5 }] },
      { key: 2, option: "Even out tone", icon: "", skin_type: [{ HAZE: 1 }, { BLOOM: 0.5 }] },
      { key: 3, option: "Smooth texture", icon: "", skin_type: [{ FLARE: 1 }, { FORGE: 0.5 }] },
      { key: 4, option: "Radiance", icon: "", skin_type: [{ GLOW: 1 }, { MUSE: 0.5 }] }
    ]
  },
  {
    key: 14,
    question: "How old are you? (optional)",
    options: [
      { key: 1, option: "Under 20", icon: "", skin_type: [{ FLARE: 1 }, { GLOW: 0.5 }] },
      { key: 2, option: "20–29", icon: "", skin_type: [{ MUSE: 1 }, { FORGE: 0.5 }] },
      { key: 3, option: "30–39", icon: "", skin_type: [{ HAZE: 1 }, { BLOOM: 0.5 }] },
      { key: 4, option: "40–49", icon: "", skin_type: [{ DUSK: 1 }, { CALM: 0.5 }] },
      { key: 5, option: "50–59", icon: "", skin_type: [{ CALM: 1 }, { DUSK: 0.5 }] },
      { key: 6, option: "60+", icon: "", skin_type: [{ BLOOM: 1 }, { CALM: 0.5 }] }
    ]
  },
  {
    key: 15,
    question: "What is your sex assigned at birth? (optional)",
    options: [
      { key: 1, option: "Female", icon: "", skin_type: [{ CALM: 0.5 }, { BLOOM: 0.5 }] },
      { key: 2, option: "Male", icon: "", skin_type: [{ FORGE: 0.5 }, { GLOW: 0.5 }] }
    ]
  },
  {
    key: 16,
    question: "What’s your ethnic background? (optional)",
    options: [
      { key: 1, option: "East/Southeast Asian", icon: "", skin_type: [{ BLOOM: 0.5 }, { HAZE: 0.5 }] },
      { key: 2, option: "South Asian / Latino / MENA", icon: "", skin_type: [{ HAZE: 0.5 }, { FORGE: 0.5 }] },
      { key: 3, option: "Black / African descent", icon: "", skin_type: [{ GLOW: 0.5 }, { MUSE: 0.5 }] },
      { key: 4, option: "White / mixed / other", icon: "", skin_type: [{ CALM: 0.5 }, { DUSK: 0.5 }] }
    ]
  }
];


export {ALL_QUESTION_LIST};
