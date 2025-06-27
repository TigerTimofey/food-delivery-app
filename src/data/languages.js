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
export const PRODUCTS_TEXT  = {

  en: [
    {
      title: "Burgers",
      desc: "Fresh and healthy burgers with a variety of toppings.",
      label: "See our burgers"
    },
    {
      title: "Soups",
      desc: "Signature poke soups with unique flavors.",
      label: "See our Soups"
    },
    {
      title: "Woks",
      desc: "Warm and comforting woks for every taste.",
      label: "See our Woks"
    },
    {
      title: "Desserts",
      desc: "Sweet treats to finish your meal.",
      label: "See our Desserts"
    },
    {
      title: "Drinks",
      desc: "Refreshing cold drinks to complement your meal.",
      label: "See our Drinks"
    },
    {
      title: "Hot Drinks",
      desc: "Enjoy our selection of hot beverages.",
      label: "See our Hot Drinks"
    }
  ],
  et: [
    {
      title: "Burgerid",
      desc: "Värsked ja tervislikud burgerid erinevate katetega.",
      label: "Vaata meie burgereid"
    },
    {
      title: "Supid",
      desc: "Ainulaadsete maitsetega poke supid.",
      label: "Vaata meie suppe"
    },
    {
      title: "Wokid",
      desc: "Soojad ja lohutavad wokid igale maitsele.",
      label: "Vaata wokke"
    },
    {
      title: "Magustoidud",
      desc: "Magusad maiused sinu eine lõpetuseks.",
      label: "Vaata magustoite"
    },
    {
      title: "Joogid",
      desc: "Värskendavad külmad joogid sinu eine kõrvale.",
      label: "Vaata meie jooke"
    },
    {
      title: "Soojad joogid",
      desc: "Naudi meie valikut kuumi jooke.",
      label: "Vaata meie kuumi jooke"
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
    button: "Offers & products"
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
    button: "Pakkumised & tooted"
  }
}

export const TEAM_SECTION_TEXT = {
  en: {
    eyebrow: `— ${BUSINESS_DATA[0].brandName} Crew`,
    title: `Hey! It's a ${BUSINESS_DATA[0].brandName} Team</span>`,
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
    title: `Hei! See on ${BUSINESS_DATA[0].brandName} tiim</span>`,
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

export const CATEGORY_ITEMS_TEXT = {
  en: {
    burgers: [
      { title: "Burger 1", desc: "Description 1", label: "See details" },
      { title: "Burger 2", desc: "Description 2", label: "See details" },
      { title: "Burger 3", desc: "Description 3", label: "See details" },
      { title: "Burger 4", desc: "Description 4", label: "See details" },
      { title: "Burger 5", desc: "Description 5", label: "See details" },
      { title: "Burger 6", desc: "Description 6", label: "See details" }
    ],
    soups: [
      { title: "Soup 1", desc: "Description 1", label: "See details" },
      { title: "Soup 2", desc: "Description 2", label: "See details" },
      { title: "Soup 3", desc: "Description 3", label: "See details" },
      { title: "Soup 4", desc: "Description 4", label: "See details" },
      { title: "Soup 5", desc: "Description 5", label: "See details" },
      { title: "Soup 6", desc: "Description 6", label: "See details" }
    ],
    woks: [
      { title: "Wok 1", desc: "Description 1", label: "See details" },
      { title: "Wok 2", desc: "Description 2", label: "See details" },
      { title: "Wok 3", desc: "Description 3", label: "See details" },
      { title: "Wok 4", desc: "Description 4", label: "See details" },
      { title: "Wok 5", desc: "Description 5", label: "See details" },
      { title: "Wok 6", desc: "Description 6", label: "See details" }
    ],
    desserts: [
      { title: "Dessert 1", desc: "Description 1", label: "See details" },
      { title: "Dessert 2", desc: "Description 2", label: "See details" },
      { title: "Dessert 3", desc: "Description 3", label: "See details" },
      { title: "Dessert 4", desc: "Description 4", label: "See details" },
      { title: "Dessert 5", desc: "Description 5", label: "See details" },
      { title: "Dessert 6", desc: "Description 6", label: "See details" }
    ],
    drinks: [
      { title: "Drink 1", desc: "Description 1", label: "See details" },
      { title: "Drink 2", desc: "Description 2", label: "See details" },
      { title: "Drink 3", desc: "Description 3", label: "See details" },
      { title: "Drink 4", desc: "Description 4", label: "See details" },
      { title: "Drink 5", desc: "Description 5", label: "See details" },
      { title: "Drink 6", desc: "Description 6", label: "See details" }
    ],
    hot_drinks: [
      { title: "Hot Drink 1", desc: "Description 1", label: "See details" },
      { title: "Hot Drink 2", desc: "Description 2", label: "See details" },
      { title: "Hot Drink 3", desc: "Description 3", label: "See details" },
      { title: "Hot Drink 4", desc: "Description 4", label: "See details" },
      { title: "Hot Drink 5", desc: "Description 5", label: "See details" },
      { title: "Hot Drink 6", desc: "Description 6", label: "See details" }
    ]
  },
  et: {
    burgers: [
      { title: "Burger 1", desc: "Kirjeldus 1", label: "Vaata lähemalt" },
      { title: "Burger 2", desc: "Kirjeldus 2", label: "Vaata lähemalt" },
      { title: "Burger 3", desc: "Kirjeldus 3", label: "Vaata lähemalt" },
      { title: "Burger 4", desc: "Kirjeldus 4", label: "Vaata lähemalt" },
      { title: "Burger 5", desc: "Kirjeldus 5", label: "Vaata lähemalt" },
      { title: "Burger 6", desc: "Kirjeldus 6", label: "Vaata lähemalt" }
    ],
    soups: [
      { title: "Supp 1", desc: "Kirjeldus 1", label: "Vaata lähemalt" },
      { title: "Supp 2", desc: "Kirjeldus 2", label: "Vaata lähemalt" },
      { title: "Supp 3", desc: "Kirjeldus 3", label: "Vaata lähemalt" },
      { title: "Supp 4", desc: "Kirjeldus 4", label: "Vaata lähemalt" },
      { title: "Supp 5", desc: "Kirjeldus 5", label: "Vaata lähemalt" },
      { title: "Supp 6", desc: "Kirjeldus 6", label: "Vaata lähemalt" }
    ],
    woks: [
      { title: "Wok 1", desc: "Kirjeldus 1", label: "Vaata lähemalt" },
      { title: "Wok 2", desc: "Kirjeldus 2", label: "Vaata lähemalt" },
      { title: "Wok 3", desc: "Kirjeldus 3", label: "Vaata lähemalt" },
      { title: "Wok 4", desc: "Kirjeldus 4", label: "Vaata lähemalt" },
      { title: "Wok 5", desc: "Kirjeldus 5", label: "Vaata lähemalt" },
      { title: "Wok 6", desc: "Kirjeldus 6", label: "Vaata lähemalt" }
    ],
    desserts: [
      { title: "Magustoit 1", desc: "Kirjeldus 1", label: "Vaata lähemalt" },
      { title: "Magustoit 2", desc: "Kirjeldus 2", label: "Vaata lähemalt" },
      { title: "Magustoit 3", desc: "Kirjeldus 3", label: "Vaata lähemalt" },
      { title: "Magustoit 4", desc: "Kirjeldus 4", label: "Vaata lähemalt" },
      { title: "Magustoit 5", desc: "Kirjeldus 5", label: "Vaata lähemalt" },
      { title: "Magustoit 6", desc: "Kirjeldus 6", label: "Vaata lähemalt" }
    ],
    drinks: [
      { title: "Jook 1", desc: "Kirjeldus 1", label: "Vaata lähemalt" },
      { title: "Jook 2", desc: "Kirjeldus 2", label: "Vaata lähemalt" },
      { title: "Jook 3", desc: "Kirjeldus 3", label: "Vaata lähemalt" },
      { title: "Jook 4", desc: "Kirjeldus 4", label: "Vaata lähemalt" },
      { title: "Jook 5", desc: "Kirjeldus 5", label: "Vaata lähemalt" },
      { title: "Jook 6", desc: "Kirjeldus 6", label: "Vaata lähemalt" }
    ],
    hot_drinks: [
      { title: "Soe jook 1", desc: "Kirjeldus 1", label: "Vaata lähemalt" },
      { title: "Soe jook 2", desc: "Kirjeldus 2", label: "Vaata lähemalt" },
      { title: "Soe jook 3", desc: "Kirjeldus 3", label: "Vaata lähemalt" },
      { title: "Soe jook 4", desc: "Kirjeldus 4", label: "Vaata lähemalt" },
      { title: "Soe jook 5", desc: "Kirjeldus 5", label: "Vaata lähemalt" },
      { title: "Soe jook 6", desc: "Kirjeldus 6", label: "Vaata lähemalt" }
    ]
  }
}

export default languages
