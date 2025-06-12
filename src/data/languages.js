import { eeFlag, enFlag } from "../assets/flag-data"

export const LANGUAGES = [
  { code: 'en', label: 'EN', flag: enFlag },
  { code: 'et', label: 'EE', flag: eeFlag }
]

const languages = {
  en: {
    home: "Home",
    features: "Features",
    pricing: "Pricing",
    about: "About",
    languages: enFlag
  },
  et: {
    home: "Avaleht",
    features: "Funktsioonid",
    pricing: "Hinnakiri",
    about: "Meist",
    languages: eeFlag
  }
}

export default languages
