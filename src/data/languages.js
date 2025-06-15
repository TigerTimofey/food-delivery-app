import { eeFlag, enFlag } from "../assets/flag-data"
import { BUSINESS_DATA } from "./bussines-data"

export const LANGUAGES = [
  { code: 'en', label: 'EN', flag: enFlag },
  { code: 'et', label: 'EE', flag: eeFlag }
]

const languages = {
  en: {
    home: "Home",
    features: "Products",
    pricing: "Pricing",
    about: "About",
    languages: enFlag
  },
  et: {
    home: "Avaleht",
    features: "Tooted",
    pricing: "Hinnakiri",
    about: "Meist",
    languages: eeFlag
  }
}

export const HOME_TEXT = {
  et: {
    title: "Me kokkame linna parimaid poke kausse",
    subtitle: "Hea toidu kunst algab sinust",
    desc: "Sina soovid – meie teeme. Kokkame ja toome kohale – sina oled õnnelik."
  },
  en: {
    title: "We coocking best poke bowls in town",
    subtitle: "Art of great food starts with you",
    desc: "You want - we are happy. We cook and deliver - you are happy."
  }
}

// --- New section texts for cards/services ---
export const PRODUCTS_SECTION_TEXT = {
  en: {
    title: "Our products",
    desc: "Products and features vary by country. Some features listed here may not be available in your app."
  },
  et: {
    title: "Meie tooted",
    desc: "Tooted ja funktsioonid erinevad riigiti. Mõned siin loetletud funktsioonid ei pruugi sinu rakenduses saadaval olla."
  }
}

// --- New: Product card texts for each language ---
export const PRODUCTS_TEXT = {
  en: [
    {
      title: "Product 1",
      desc: "Description of product 1.",
      label: "Get started"
    },
    {
      title: "Product 2",
      desc: "Description of product 2.",
      label: "Read more"
    },
    {
      title: "Product 3",
      desc: "Description of product 3.",
      label: "Read more"
    },
    {
      title: "Product 4",
      desc: "Description of product 4.",
      label: "Read more"
    },
    {
      title: "Product 5",
      desc: "Description of product 5.",
      label: "Read more"
    },
    {
      title: "Product 6",
      desc: "Description of product 6.",
      label: "Read more"
    }
  ],
  et: [
    {
      title: "Toode 1",
      desc: "Toote 1 kirjeldus.",
      label: "Alusta"
    },
    {
      title: "Toode 2",
      desc: "Toote 2 kirjeldus.",
      label: "Loe edasi"
    },
    {
      title: "Toode 3",
      desc: "Toote 3 kirjeldus.",
      label: "Loe edasi"
    },
    {
      title: "Toode 4",
      desc: "Toote 4 kirjeldus.",
      label: "Loe edasi"
    },
    {
      title: "Toode 5",
      desc: "Toote 5 kirjeldus.",
      label: "Loe edasi"
    },
    {
      title: "Toode 6",
      desc: "Toote 6 kirjeldus.",
      label: "Loe edasi"
    }
  ]
}

export const MIDNIGHT_DEALS_TEXT = {
  en: {
    eyebrow: "— weekly Deals",
    title: "Samurai\nMega Deals!",
    items: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
      "Feature 5",
       "Feature 6"
      
    ],
    button: "Contact us"
  },
  et: {
    eyebrow: "— nädala pakkumised",
    title: "Samurai\nMega pakkumised!",
    items: [
     "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
      "Feature 5",
       "Feature 6"
    ],
    button: "Võta ühendust"
  }
}

export const TEAM_SECTION_TEXT = {
  en: {
    eyebrow: `— ${BUSINESS_DATA[0].brandName} Crew`,
    title: "Our Dynamic <span className=\"team-title-highlight\">Fast Food Team</span>",
    button: "Meet us",
    members: [
      {
        name: "Ethan Rodriguez",
        role: "Head Chef",
        img: "/team/team1.png"
      },
      {
        name: "Emily Brooks",
        role: "Fry Chef",
        img: "/team/team2.png"
      },
      {
        name: "Megan Robinson",
        role: "Waiter",
        img: "/team/team3.png"
      }
    ]
  },
  et: {
    eyebrow: `— ${BUSINESS_DATA[0].brandName} Meeskond`,
    title: "Meie <span className=\"team-title-highlight\">kiirtoidu tiim</span>",
    button: "Kohtu meiega",
    members: [
      {
        name: "Ethan Rodriguez",
        role: "Peakokk",
        img: "/team/team1.png"
      },
      {
        name: "Emily Brooks",
        role: "Friikartuli kokk",
        img: "/team/team2.png"
      },
      {
        name: "Megan Robinson",
        role: "Ettekandja",
        img: "/team/team3.png"
      }
    ]
  }
}

export default languages
