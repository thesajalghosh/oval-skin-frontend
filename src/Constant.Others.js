import FLARE from "./imagesec/Flare.png";
import BLOOM from "./imagesec/Bloom.png";
import CLAM from "./imagesec/Calm.png";
import DUSK from "./imagesec/Dusk.png";
import FORGE from "./imagesec/Forge.png";
import GLOW from "./imagesec/Glow.png";
import HAZE from "./imagesec/Haze.png";
import MUSE from "./imagesec/Muse.png"

const ALL_QUESTION_LIST = [
  {
    key: 1,
    question: "By midday, how does your skin usually feel?",
    options: [
      { key: 1, option: "Oily and shiny", icon: "💧", skin_type: [{ FLARE: 2 }] },
      { key: 2, option: "Oily only on the T-zone", icon: "✨", skin_type: [{ GLOW: 1.5 }, { FLARE: 0.5 }] },
      { key: 3, option: "Pretty normal", icon: "🌿", skin_type: [{ MUSE: 2 }] },
      { key: 4, option: "Dry or tight", icon: "❄️", skin_type: [{ DUSK: 2 }] }
    ]
  },
  {
    key: 2,
    question: "How often do you get breakouts?",
    options: [
      { key: 1, option: "All the time (weekly)", icon: "🔥", skin_type: [{ FORGE: 2 }] },
      { key: 2, option: "Sometimes (few per month)", icon: "🌑", skin_type: [{ FLARE: 1.5 }, { FORGE: 0.5 }] },
      { key: 3, option: "Rarely", icon: "🧘", skin_type: [{ CALM: 2 }] },
      { key: 4, option: "Only when I switch products", icon: "🔄", skin_type: [{ BLOOM: 1.5 }, { CALM: 0.5 }] }
    ]
  },
  {
    key: 3,
    question: "How sensitive is your skin?",
    options: [
      { key: 1, option: "Red, itchy, stings easily", icon: "🤷", skin_type: [{ BLOOM: 2 }] },
      { key: 2, option: "A little sensitive here and there", icon: "😣", skin_type: [{ DUSK: 1.5 }, { BLOOM: 0.5 }] },
      { key: 3, option: "Not really sensitive", icon: "💪", skin_type: [{ FORGE: 2 }] },
      { key: 4, option: "Haven’t noticed", icon: "🐝", skin_type: [{ MUSE: 2 }] }
    ]
  },
  {
    key: 4,
    question: "Can you see your pores clearly?",
    options: [
      { key: 1, option: "Yup, big and visible", icon: "🔍", skin_type: [{ FLARE: 2 }] },
      { key: 2, option: "Mostly on my nose or cheeks", icon: "👃", skin_type: [{ GLOW: 1.5 }, { FLARE: 0.5 }] },
      { key: 3, option: "Not really noticeable", icon: "👶", skin_type: [{ BLOOM: 2 }] },
      { key: 4, option: "Not sure", icon: "🤔", skin_type: [{ CALM: 2 }] }
    ]
  },
  {
    key: 5,
    question: "If you skip moisturizer for a day, what happens?",
    options: [
      { key: 1, option: "I feel dry or tight instantly", icon: "🥶", skin_type: [{ DUSK: 2 }] },
      { key: 2, option: "I’m fine, but a little dull", icon: "🙂", skin_type: [{ CALM: 1.5 }, { HAZE: 0.5 }] },
      { key: 3, option: "No difference at all", icon: "😎", skin_type: [{ GLOW: 2 }] },
      { key: 4, option: "I actually feel better", icon: "🙌", skin_type: [{ FORGE: 2 }] }
    ]
  },
  {
    key: 6,
    question: "What happens to your skin after sun or pimples?",
    options: [
      { key: 1, option: "Dark spots show up fast and stay", icon: "🌞", skin_type: [{ HAZE: 1 }, { BLOOM: 0.5 }] },
      { key: 2, option: "Spots fade eventually", icon: "⏳", skin_type: [{ FORGE: 1 }, { MUSE: 0.5 }] },
      { key: 3, option: "Barely any marks", icon: "🙅‍♀️", skin_type: [{ GLOW: 1 }, { CALM: 0.5 }] },
      { key: 4, option: "Avoid sun like my ex", icon: "🍼", skin_type: [{ BLOOM: 1 }, { DUSK: 0.5 }] }
    ]
  },
  {
    key: 7,
    question: "How does your skin feel to the touch?",
    options: [
      { key: 1, option: "Rough or bumpy", icon: "🌑", skin_type: [{ FORGE: 1 }, { FLARE: 0.5 }] },
      { key: 2, option: "Dull or uneven", icon: "🌫️", skin_type: [{ HAZE: 1 }, { DUSK: 0.5 }] },
      { key: 3, option: "Soft and smooth", icon: "🍃", skin_type: [{ GLOW: 1 }, { MUSE: 0.5 }] },
      { key: 4, option: "Depends on the season", icon: "❄️", skin_type: [{ CALM: 1 }, { MUSE: 0.5 }] }
    ]
  },
  {
    key: 8,
    question: "What’s your skincare vibe?",
    options: [
      { key: 1, option: "I stick to the same routine", icon: "🧘", skin_type: [{ CALM: 1 }, { GLOW: 0.5 }] },
      { key: 2, option: "I try new stuff, but I’m careful", icon: "🖐️", skin_type: [{ DUSK: 1 }, { BLOOM: 0.5 }] },
      { key: 3, option: "I’m always testing new things", icon: "✏️", skin_type: [{ FORGE: 1 }, { FLARE: 0.5 }] },
      { key: 4, option: "I don’t have a routine", icon: "🤷", skin_type: [{ HAZE: 1 }, { MUSE: 0.5 }] }
    ]
  },
  {
    key: 9,
    question: "When the seasons change, what happens to your skin?",
    options: [
      { key: 1, option: "I get dry and flaky", icon: "❄️", skin_type: [{ DUSK: 1 }, { BLOOM: 0.5 }] },
      { key: 2, option: "I get oily or break out", icon: "🧻", skin_type: [{ FLARE: 1 }, { FORGE: 0.5 }] },
      { key: 3, option: "I look dull or tired", icon: "⚫", skin_type: [{ HAZE: 1 }, { CALM: 0.5 }] },
      { key: 4, option: "Doesn’t really change", icon: "🌞", skin_type: [{ GLOW: 1 }, { MUSE: 0.5 }] }
    ]
  },
  {
    key: 10,
    question: "How long do dark spots stick around?",
    options: [
      { key: 1, option: "Forever", icon: "🖊️", skin_type: [{ HAZE: 1 }, { BLOOM: 0.5 }] },
      { key: 2, option: "Weeks", icon: "⏳", skin_type: [{ FORGE: 1 }, { FLARE: 0.5 }] },
      { key: 3, option: "Fades fast", icon: "⏩", skin_type: [{ MUSE: 1 }, { GLOW: 0.5 }] },
      { key: 4, option: "I don’t get them", icon: "❌", skin_type: [{ CALM: 1 }, { DUSK: 0.5 }] }
    ]
  },
  {
    key: 11,
    question: "What’s your skincare focus right now?",
    options: [
      { key: 1, option: "Calm + hydration", icon: "💧", skin_type: [{ CALM: 1 }, { DUSK: 0.5 }] },
      { key: 2, option: "Even tone", icon: "🎯", skin_type: [{ HAZE: 1 }, { BLOOM: 0.5 }] },
      { key: 3, option: "Texture & pores", icon: "🧬", skin_type: [{ FLARE: 1 }, { FORGE: 0.5 }] },
      { key: 4, option: "Glow + anti-aging", icon: "✨", skin_type: [{ MUSE: 1 }, { GLOW: 0.5 }] }
    ]
  },
  {
    key: 12,
    question: "What happens when you try lots of new products?",
    options: [
      { key: 1, option: "Skin freaks out", icon: "🔥", skin_type: [{ BLOOM: 1 }, { DUSK: 0.5 }] },
      { key: 2, option: "Breakouts or clogged pores", icon: "⚠️", skin_type: [{ FLARE: 1 }, { FORGE: 0.5 }] },
      { key: 3, option: "Overwhelmed, but not irritated", icon: "😖", skin_type: [{ CALM: 1 }, { HAZE: 0.5 }] },
      { key: 4, option: "My skin handles it", icon: "🧬", skin_type: [{ GLOW: 1 }, { MUSE: 0.5 }] }
    ]
  },
  {
    key: 13,
    question: "What’s your biggest skin goal?",
    options: [
      { key: 1, option: "Calm + comfort", icon: "🧘", skin_type: [{ CALM: 1 }, { DUSK: 0.5 }] },
      { key: 2, option: "Even out tone", icon: "🎨", skin_type: [{ HAZE: 1 }, { BLOOM: 0.5 }] },
      { key: 3, option: "Smooth texture", icon: "👱‍♀️", skin_type: [{ FLARE: 1 }, { FORGE: 0.5 }] },
      { key: 4, option: "Radiance", icon: "🌟", skin_type: [{ GLOW: 1 }, { MUSE: 0.5 }] }
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
      { key: 6, option: "60+", icon: "", skin_type: [{ BLOOM: 1 }, { CALM: 0.5 }] },
      { key: 5, option: "Skip", icon: "", skin_type: [] }
    ]
  },
  {
    key: 15,
    question: "What is your sex assigned at birth? (optional)",
    options: [
      { key: 1, option: "Female", icon: "♀", skin_type: [{ CALM: 0.5 }, { BLOOM: 0.5 }] },
      { key: 2, option: "Male", icon: "♂", skin_type: [{ FORGE: 0.5 }, { GLOW: 0.5 }] },
      { key: 5, option: "Skip", icon: "", skin_type: [] }

    ]
  },
  {
    key: 16,
    question: "What’s your ethnic background? (optional)",
    options: [
      { key: 1, option: "East/Southeast Asian", icon: "", skin_type: [{ BLOOM: 0.5 }, { HAZE: 0.5 }] },
      { key: 2, option: "South Asian / Latino / MENA", icon: "", skin_type: [{ HAZE: 0.5 }, { FORGE: 0.5 }] },
      { key: 3, option: "Black / African descent", icon: "", skin_type: [{ GLOW: 0.5 }, { MUSE: 0.5 }] },
      { key: 4, option: "White / mixed / other", icon: "", skin_type: [{ CALM: 0.5 }, { DUSK: 0.5 }] },
      { key: 5, option: "Skip", icon: "", skin_type: [] }
    ]
  }
];

const ALL_RESULT_LIST = {
  "FLARE": {
    "skin_type": "FLARE",
    image:FLARE,
   
    "type_subline": "The sensitive visionary",
    "about": "You shine bright, but your skin burns out just as fast. With excess oil, large pores, and a tendency to flare up at the slightest trigger, you're no stranger to breakouts or sensitivity. But that doesn’t mean your skin is a problem — it just needs skincare that respects the drama without adding more.",
    "skin_overview": {
      "sebum_production": "⬆️ High",
      "pore": "🔍  Visible and congested",
      "sensitivity": "❗ High - easily irritated",
      "concerns": "🚨 Inflammation"
    },
    "dos_and_donts": {
      "do": [
        "Lightweight hydration that won’t clog",
        "Barrier-repairing (use ceramides & panthenol)",
        "Gentle tone-balancing (use niacinamide)"
      ],
      "dont": [
        "Over-cleansing or stripping the skin",
        "High-percentage acids or physical scrubs",
        "Layering too many actives at once"
      ]
    },
    "tips": [
      {
        "tip": "💧 Use a mist throughout the day",
        "reason": "This way it can keep skin hydrated without layering too many products."
      },
      {
        "tip": "📅  Only double cleanse on certain days",
        "reason": "Double cleanse only when wearing makeup or sunscreen, not twice daily, to avoid stripping your barrier."
      }
    ],
  },


  "GLOW": {
    "skin_type": "GLOW",
    image: GLOW,
    "type_subline": "The golden optimist",
    "about": "You naturally shine — now let’s make sure it’s the right kind of glow. Your skin is radiant, balanced on the surface, but needs help behind the scenes. With visible pores and a tendency for oil buildup, Glow types often look healthy on the outside while secretly battling congestion, uneven texture, and the occasional breakout.",
    "skin_overview": {
      "sebum_production": "🧈 Moderately oily",
      "pore": "👀 Enlarged or visible",
      "sensitivity": "👍 Low to moderate",
      "concerns":"✨ Blackheads and shine"
    },
    "dos_and_donts": {
      "do": [
        "Lightweight hydration that won’t clog",
        "Semi-matte sunscreens and breathable layers",
        "Gentle pore-refining actives (use niacinamide)"
      ],
      "dont": [
        "Overly occlusive creams or oils",
        "Harsh stripping cleansers",
        "Ignoring exfoliation"
      ]
    },
    "tips": [
      {
        "tip": "💧 Thin Layers > Heavy Creams",
        "icon": "",
        "reason": "Layer light textures instead of one heavy product to prevent clogged pores."
      },
      {
        "tip": "🌞 AM Oil Control Hack",
        "icon": "",
        "reason": "Use a toner or serum with sebum-balancing ingredients like green tea or zinc PCA in your morning routine."
      }
    ],
  },


  "CALM": {
    "skin_type": "CALM",
    image: CLAM,
    "type_subline": "The quiet nurturer",
    "about": "Your skin is steady and rarely reactive, but it leans dry and delicate. With small, barely visible pores and minimal oil production, Calm types don’t deal with breakouts often — but can easily slip into dullness, dehydration, or premature aging if ignored.",
    "skin_overview": {
      "sebum_production": "⬇️️ Low",
      "pore": "🔍  Barely noticeable",
      "sensitivity": "👌 Mild",
      "concerns": "🪠 Dullness"
    },
    "dos_and_donts": {
      "do": [
        "Consistent hydration in layers",
        "Barrier-repairing (use ceramides & squalane)",
        "Antioxidants to protect from signs of aging"
      ],
      "dont": [
        "Strong actives or frequent exfoliation",
        "Foaming cleansers or anything that strips",
        "Overloading new products all at once"
      ]
    },
    "tips": [
      {
        "tip": "🤓 Skincare Lasagna 101",
        "icon": "",
        "reason": "Layer hydration like skincare lasagna — start light, finish creamy."
      },
      {
        "tip": "✨ Keep It Simple",
        "icon": "",
        "reason": "Stick to a simple routine with 3–4 solid products you can rely on daily."
      }
    ],
  },

  "DUSK": {
    "skin_type": "DUSK",
    image: DUSK,
    "type_subline": "The moody minimalist",
    "about": "With dry, small-pored skin and a high tendency for irritation, Dusk types walk a fine line. Your skin barrier is easily overwhelmed — reacting to weather changes, product overload, or even stress. Redness, flaking, or stinging may come and go unpredictably. But once supported with the right routine, your skin softens into a beautifully calm, even-toned state.",
    "skin_overview": {
      "sebum_production": "⬇️️  Very low",
      "pore": "🔍  Barely visible",
      "sensitivity": "❗ High - easily reative",
      "concerns": "🚨 Redness"
    },
    "dos_and_donts": {
      "do": [
        "Ultra-gentle, fragrance-free hydration",
        "Barrier-repairing (use ceramides & centella) ",
        "Minimalist, low-irritant products (low pH)"
      ],
      "dont": [
        "Exfoliants (physical or strong chemical)",
        "Layering too many products at once",
        "Hot water or over-washing"
      ]
    },
    "tips": [
      {
        "tip": "🧪 Test Before You Trust",
        "reason": "Patch test everything — even “clean” products."
      },
      {
        "tip": "🫧️ Warm > Hot",
        "reason": "Stick to lukewarm water only when cleansing — hot water can shock the skin."
      }
    ],
    
  },
  "BLOOM": {
    "skin_type": "BLOOM",
    image: BLOOM,
    "type_subline": "The delicate dreamer",
    "about": "Bloom types are beautifully delicate. Your skin tends to be dry, easily irritated, and prone to pigmentation — whether it’s from sun exposure, acne scars, or uneven tone. You’re the type who wants that lit-from-within glow, but harsh actives and aggressive treatments often do more harm than good.",
    "skin_overview": {
      "sebum_production": "⬇️️ Low",
      "pore": "🔍  Small and refined",
      "sensitivity": "❗ High — reactive to strong products",
      "concerns": "🚨 Uneven tone"
    },
    "dos_and_donts": {
      "do": [
        "Brightening ingredients (use niacinamide)",
        "Skin-calming ingredients (use centella)",
        "Deep, layered hydration"
      ],
      "dont": [
        "Harsh exfoliants or scrubs",
        "Vitamin C or retinol at high concentrations",
        "Skipping moisturizer"
      ]
    },
    "tips": [
      {
        "tip": "✨ Brighten Gently",
        "reason": "Look for tone-evening ingredients that also hydrate — skip anything that stings."
      },
      {
        "tip": "🛡 Build the Base First",
        "reason": "Barrier repair comes first — your glow will follow."
      }
    ],
  },

  "HAZE": {
    "skin_type": "HAZE",
    image:HAZE,
    "type_subline": "The sensitive visionary",
    "about": "You’ve got balance — but not immunity. With a mostly calm complexion and medium to large pores, Haze types often look effortlessly smooth. But lurking underneath? A high risk of pigmentation. Whether it's melasma, post-acne marks, or UV spots, your skin loves to hold onto color — especially after inflammation or sun exposure.",
    "skin_overview": {
      "sebum_production": "⚖️️ Balanced",
      "pore": "👀  Medium to large",
      "sensitivity": "👏 Moderate",
      "concerns": "🌞 Hyperpigmentation"
    },
    "dos_and_donts": {
      "do": [
        "Daily SPF (no exceptions)",
        "Brightening  ingredients (use niacinamide) ",
        "Antioxidants like Vitamin C"
      ],
      "dont": [
        "Skipping sunscreen (even indoors)",
        "Harsh scrubs or aggressive peels",
        "Inconsistent routines"
      ]
    },
    "tips": [
      {
        "tip": "🌞️ SPF Is a Daily Ritual",
        "reason": "Apply sunscreen like it’s skincare — not just protection. Reapply like you rehydrate."
      },
      {
        "tip": "🪷 Calm First, Glow Later",
        "reason": "Focus on calming first, then brightening — inflammation always leads to pigmentation."
      }
    ],
    
  },
  "FORGE": {
    "skin_type": "FORGE",
    image: FORGE,
    "type_subline": "The resilient powerhouse",
    "about": "Forge skin has grit. With a naturally tough barrier, visible oil, and a tendency toward pigmentation or roughness, your skin doesn’t complain easily — but that doesn’t mean it’s invincible. You might get dark spots, texture issues, or the occasional breakout when you push it too hard (or ignore it for too long).",
    "skin_overview": {
      "sebum_production": "⬆️ High",
      "pore": "👀 Visible and large",
      "sensitivity": "💪 Low - strong barrier",
      "concerns":"🌞 Pigmentation"
    },
    "dos_and_donts": {
      "do": [
        "Brightening ingredients (use azelaic acid)",
        "Regular (gentle) exfoliation for smoother skin",
        "Lightweight hydration that won’t clog pores"
      ],
      "dont": [
        "Heavy oils or rich creams that suffocate pores",
        "Skipping sunscreen — dark spots will linger",
        "Ignoring hydration (oily ≠ moisturized)"
      ]
    },
    "tips": [
      {
        "tip": "💧 Oil ≠ Moisture",
        "reason": "Balance oil with calming hydration — don’t fight your skin, work with it."
      },
      {
        "tip": "🌞 Fade with Patience",
        "reason": "Pigment fades faster when you exfoliate gently and protect daily."
      }
    ],
    
  },
  "MUSE": {
    "skin_type": "MUSE",
    image: MUSE,
    "type_subline": "The effortless idealist",
    "about": "Muse skin is what many would call “good skin” — balanced oil levels, small pores, and minimal drama. You rarely break out, rarely react, and mostly just… glow. But here’s the catch: because your skin behaves, it’s easy to neglect it. And over time, that can mean dehydration, dullness, or early signs of aging.",
    "skin_overview": {
      "sebum_production": "⚖️️ Balanced",
      "pore": "🔍  Small to medium",
      "sensitivity": "💪 Low — resilient",
      "concerns":"💧 Dehydration"
    },
    "dos_and_donts": {
      "do": [
        "Light antioxidant protection",
        "Daily moisture maintenance ",
        "Consistency more than complexity"
      ],
      "dont": [
        "Skipping skincare (good skin still ages!)",
        "Overloading actives or trendy ingredients",
        "Inconsistent hydration"
      ]
    },
    "tips": [
      {
        "tip": "🌻 Maintain the Muse",
        "reason": "Don’t get lazy — your skin’s calm now, but it needs quiet care to stay that way."
      },
      {
        "tip": "✨Serum-First Strategy",
        "reason": "Light serums with peptides or firming ingredients go a long way for prevention."
      }
    ],
    
  }
}

const EMAIL_IMAGE = {
  "FLARE" : "https://res.cloudinary.com/dgkckcwxs/image/upload/v1753909044/FLARE_email_hluwq3.jpg",
  "GLOW" : "https://res.cloudinary.com/dgkckcwxs/image/upload/v1753909318/GLOW_email_mx8ajv.jpg",
  "CALM" : "https://res.cloudinary.com/dgkckcwxs/image/upload/v1753909042/CALM_email_1_xdqelc.jpg",
  "DUSK": "https://res.cloudinary.com/dgkckcwxs/image/upload/v1753909040/DUSK_email_js85j8.jpg",
  "BLOOM": "https://res.cloudinary.com/dgkckcwxs/image/upload/v1753909039/BLOOM_email_1_cucgox.jpg",
  "HAZE": "https://res.cloudinary.com/dgkckcwxs/image/upload/v1753909041/HAZE_email_nvmuzr.jpg",
  "FORGE": "https://res.cloudinary.com/dgkckcwxs/image/upload/v1753909035/FORGE_email_ndcrfo.jpg",
  "MUSE" : "https://res.cloudinary.com/dgkckcwxs/image/upload/v1753909038/MUSE_email_tpmkcy.jpg"

}


export {
  ALL_QUESTION_LIST,
  ALL_RESULT_LIST,
  EMAIL_IMAGE
};
