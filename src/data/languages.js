import { eeFlag, enFlag } from "../assets/flag-data"

export const LANGUAGES = [
  { code: 'en', label: 'EN', flag: enFlag },
  { code: 'et', label: 'EE', flag: eeFlag }
]

const languages = {
  en: {
    home: "Home",
    features: "Product",
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

export default languages
