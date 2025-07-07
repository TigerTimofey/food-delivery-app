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
    about: "About",
    languages: enFlag
  },
  et: {
    home: "Avaleht",
    features: "Tooted",
    about: "Meist",
    languages: eeFlag
  }
}

export const HOME_TEXT = {
  et: {
    title: "Me kokkame linna parimaid toite",
    subtitle: "Hea toidu kunst algab sinust",
    desc: "Sina soovid – meie teeme. Kokkame ja toome kohale – sina oled õnnelik."
  },
  en: {
    title: "We coocking best food in town",
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
    title: "Samurai\nMega Bonuses!",
    items: [
      "Discount by code",
      "Order via app",
      "Fast delivery",
      "Share menu & get client card"
    ],
    itemDescriptions: [
      "Use promo codes to get instant discounts on your order.",
      "Download our app for a faster, smoother ordering experience.",
      "Get your food delivered hot and fresh in under 30 minutes.",
      "Share our menu with a friend and both of you receive a client card for special perks."
    ],
    button: "Offers & products"
  },
  et: {
    eyebrow: "— nädala pakkumised",
    title: "Samurai\nMega Boonuseid!",
    items: [
      "Soodustus koodiga",
      "Telli äpiga",
      "Kiire kohaletoimetamine",
      "Jaga menüüd ja saa kliendikaart"
    ],
    itemDescriptions: [
      "Kasuta sooduskoodi ja saa kohe allahindlust oma tellimuselt.",
      "Laadi alla meie äpp ja telli mugavalt ning kiirelt.",
      "Sinu toit jõuab kuumalt ja värskelt kohale alla 30 minutiga.",
      "Jaga menüüd sõbraga ja mõlemad saavad kliendikaardi eripakkumisteks."
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
        img: "images/team/team1.png"
      },
      {
        name: "Emily Brooks",
        role: "Fry Chef",
        img: "images/team/team2.png"
      },
      {
        name: "Megan Robinson",
        role: "Waiter",
        img: "images/team/team3.png"
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
        img: "images/team/team1.png"
      },
      {
        name: "Emily Brooks",
        role: "Friikartuli kokk",
        img: "images/team/team2.png"
      },
      {
        name: "Megan Robinson",
        role: "Ettekandja",
        img: "images/team/team3.png"
      }
    ]
  }
}

export const CATEGORY_ITEMS_TEXT = {
  en: {
    burgers: [
      { title: "Burger 1", desc: "Description 1", label: "See details", price: "12.50" },
      { title: "Burger 2", desc: "Description 2", label: "See details", price: "13.90" },
      { title: "Burger 3", desc: "Description 3", label: "See details", price: "11.50" },
      { title: "Burger 4", desc: "Description 4", label: "See details", price: "14.90" },
      { title: "Burger 5", desc: "Description 5", label: "See details", price: "15.50" },
      { title: "Burger 6", desc: "Description 6", label: "See details", price: "13.50" }
    ],
    soups: [
      { title: "Soup 1", desc: "Description 1", label: "See details", price: "8.90" },
      { title: "Soup 2", desc: "Description 2", label: "See details", price: "9.50" },
      { title: "Soup 3", desc: "Description 3", label: "See details", price: "7.90" },
      { title: "Soup 4", desc: "Description 4", label: "See details", price: "10.50" },
      { title: "Soup 5", desc: "Description 5", label: "See details", price: "9.90" },
      { title: "Soup 6", desc: "Description 6", label: "See details", price: "8.50" }
    ],
    woks: [
      { title: "Wok 1", desc: "Description 1", label: "See details", price: "16.90" },
      { title: "Wok 2", desc: "Description 2", label: "See details", price: "17.50" },
      { title: "Wok 3", desc: "Description 3", label: "See details", price: "15.90" },
      { title: "Wok 4", desc: "Description 4", label: "See details", price: "18.50" },
      { title: "Wok 5", desc: "Description 5", label: "See details", price: "19.90" },
      { title: "Wok 6", desc: "Description 6", label: "See details", price: "16.50" }
    ],
    desserts: [
      { title: "Dessert 1", desc: "Description 1", label: "See details", price: "6.50" },
      { title: "Dessert 2", desc: "Description 2", label: "See details", price: "7.90" },
      { title: "Dessert 3", desc: "Description 3", label: "See details", price: "5.90" },
      { title: "Dessert 4", desc: "Description 4", label: "See details", price: "8.50" },
      { title: "Dessert 5", desc: "Description 5", label: "See details", price: "7.50" },
      { title: "Dessert 6", desc: "Description 6", label: "See details", price: "6.90" }
    ],
    drinks: [
      { title: "Drink 1", desc: "Description 1", label: "See details", price: "3.50" },
      { title: "Drink 2", desc: "Description 2", label: "See details", price: "4.90" },
      { title: "Drink 3", desc: "Description 3", label: "See details", price: "3.90" },
      { title: "Drink 4", desc: "Description 4", label: "See details", price: "5.50" },
      { title: "Drink 5", desc: "Description 5", label: "See details", price: "4.50" },
      { title: "Drink 6", desc: "Description 6", label: "See details", price: "3.90" }
    ],
    hot_drinks: [
      { title: "Hot Drink 1", desc: "Description 1", label: "See details", price: "4.50" },
      { title: "Hot Drink 2", desc: "Description 2", label: "See details", price: "5.90" },
      { title: "Hot Drink 3", desc: "Description 3", label: "See details", price: "4.90" },
      { title: "Hot Drink 4", desc: "Description 4", label: "See details", price: "6.50" },
      { title: "Hot Drink 5", desc: "Description 5", label: "See details", price: "5.50" },
      { title: "Hot Drink 6", desc: "Description 6", label: "See details", price: "4.90" }
    ]
  },
  et: {
    burgers: [
      { title: "Burger 1", desc: "Kirjeldus 1", label: "Vaata lähemalt", price: "12.50" },
      { title: "Burger 2", desc: "Kirjeldus 2", label: "Vaata lähemalt", price: "13.90" },
      { title: "Burger 3", desc: "Kirjeldus 3", label: "Vaata lähemalt", price: "11.50" },
      { title: "Burger 4", desc: "Kirjeldus 4", label: "Vaata lähemalt", price: "14.90" },
      { title: "Burger 5", desc: "Kirjeldus 5", label: "Vaata lähemalt", price: "15.50" },
      { title: "Burger 6", desc: "Kirjeldus 6", label: "Vaata lähemalt", price: "13.50" }
    ],
    soups: [
      { title: "Supp 1", desc: "Kirjeldus 1", label: "Vaata lähemalt", price: "8.90" },
      { title: "Supp 2", desc: "Kirjeldus 2", label: "Vaata lähemalt", price: "9.50" },
      { title: "Supp 3", desc: "Kirjeldus 3", label: "Vaata lähemalt", price: "7.90" },
      { title: "Supp 4", desc: "Kirjeldus 4", label: "Vaata lähemalt", price: "10.50" },
      { title: "Supp 5", desc: "Kirjeldus 5", label: "Vaata lähemalt", price: "9.90" },
      { title: "Supp 6", desc: "Kirjeldus 6", label: "Vaata lähemalt", price: "8.50" }
    ],
    woks: [
      { title: "Wok 1", desc: "Kirjeldus 1", label: "Vaata lähemalt", price: "16.90" },
      { title: "Wok 2", desc: "Kirjeldus 2", label: "Vaata lähemalt", price: "17.50" },
      { title: "Wok 3", desc: "Kirjeldus 3", label: "Vaata lähemalt", price: "15.90" },
      { title: "Wok 4", desc: "Kirjeldus 4", label: "Vaata lähemalt", price: "18.50" },
      { title: "Wok 5", desc: "Kirjeldus 5", label: "Vaata lähemalt", price: "19.90" },
      { title: "Wok 6", desc: "Kirjeldus 6", label: "Vaata lähemalt", price: "16.50" }
    ],
    desserts: [
      { title: "Magustoit 1", desc: "Kirjeldus 1", label: "Vaata lähemalt", price: "6.50" },
      { title: "Magustoit 2", desc: "Kirjeldus 2", label: "Vaata lähemalt", price: "7.90" },
      { title: "Magustoit 3", desc: "Kirjeldus 3", label: "Vaata lähemalt", price: "5.90" },
      { title: "Magustoit 4", desc: "Kirjeldus 4", label: "Vaata lähemalt", price: "8.50" },
      { title: "Magustoit 5", desc: "Kirjeldus 5", label: "Vaata lähemalt", price: "7.50" },
      { title: "Magustoit 6", desc: "Kirjeldus 6", label: "Vaata lähemalt", price: "6.90" }
    ],
    drinks: [
      { title: "Jook 1", desc: "Kirjeldus 1", label: "Vaata lähemalt", price: "3.50" },
      { title: "Jook 2", desc: "Kirjeldus 2", label: "Vaata lähemalt", price: "4.90" },
      { title: "Jook 3", desc: "Kirjeldus 3", label: "Vaata lähemalt", price: "3.90" },
      { title: "Jook 4", desc: "Kirjeldus 4", label: "Vaata lähemalt", price: "5.50" },
      { title: "Jook 5", desc: "Kirjeldus 5", label: "Vaata lähemalt", price: "4.50" },
      { title: "Jook 6", desc: "Kirjeldus 6", label: "Vaata lähemalt", price: "3.90" }
    ],
    hot_drinks: [
      { title: "Soe jook 1", desc: "Kirjeldus 1", label: "Vaata lähemalt", price: "4.50" },
      { title: "Soe jook 2", desc: "Kirjeldus 2", label: "Vaata lähemalt", price: "5.90" },
      { title: "Soe jook 3", desc: "Kirjeldus 3", label: "Vaata lähemalt", price: "4.90" },
      { title: "Soe jook 4", desc: "Kirjeldus 4", label: "Vaata lähemalt", price: "6.50" },
      { title: "Soe jook 5", desc: "Kirjeldus 5", label: "Vaata lähemalt", price: "5.50" },
      { title: "Soe jook 6", desc: "Kirjeldus 6", label: "Vaata lähemalt", price: "4.90" }
    ]
  }
}

export const CATEGORY_KEYS = ['burgers', 'soups', 'woks', 'desserts', 'drinks', 'hot_drinks']

export const BUTTON_TEXT = {
  en: {
    details: "Product details",
    add: "Add to cart",
    back: "Previous",
    next: "Next",
    placeOrder: "Pay"
  },
  et: {
    details: "Toote info",
    add: "Lisa korvi",
    back: "Tagasi",
    next: "Järgmine",
    placeOrder: "Maksa"
  }
}

export const CART_TEXT = {
  en: {
    title: "Shopping Cart",
    empty: "Your cart is empty",
    subtotal: "Subtotal (excl. tax)",
    tax: "Tax",
    total: "Total (incl. tax)",
    clearCart: "Clear Cart",
    checkout: "Checkout",
    removeItem: "Remove item",
    increase: "Increase",
    decrease: "Decrease"
  },
  et: {
    title: "Ostukorv",
    empty: "Teie ostukorv on tühi",
    subtotal: "Vahesumma (Km-ta)",
    tax: "Käibemaks",
    total: "Kokku",
    clearCart: "Tühjenda korv",
    checkout: "Maksa",
    removeItem: "Eemalda toode",
    increase: "Suurenda",
    decrease: "Vähenda"
  }
}

export const CHECKOUT_TEXT = {
  en: {
    title: "Checkout",
    personalInfo: "Personal Information",
    firstName: "Full Name",
    email: "Email",
    phone: "Phone",
    deliveryAddress: "Delivery Address",
    address: "Address",
    city: "City",
    postalCode: "Postal Code",
    paymentMethod: "Payment Method",
    creditCard: "Pay by bank",
    cashOnDelivery: "Cash",
    orderNotes: "Order Notes",
    orderNotesPlaceholder: "Special instructions for your order...",
    placeOrder: "Place Order",
    orderSummary: "Order Summary",
    subtotal: "Subtotal (excl. tax)",
    tax: "Tax",
    total: "Total (incl. tax)",
    delivery:'Delivery',
    pickup: "Pickup",
    coupon: "Coupon code",
    couponPlaceholder: "Enter coupon code",
    couponApply: "Apply",
    couponSuccess: "coupon applied!",
    couponInvalid: "Invalid coupon"
  },
  et: {
    title: "Tellimuse vormistamine",
    personalInfo: "Isikuandmed",
    firstName: "Täisnimi",
    email: "E-post",
    phone: "Telefon",
    deliveryAddress: "Tarneaadress",
    address: "Aadress",
    city: "Linn",
    postalCode: "Postiindeks",
    paymentMethod: "Makseviis",
    creditCard: "Maksa pangaga",
    cashOnDelivery: "Sularaha",
    orderNotes: "Tellimuse märkused",
    orderNotesPlaceholder: "Eritingimused teie tellimusele...",
    placeOrder: "Vormista tellimus",
    orderSummary: "Tellimuse kokkuvõte",
    subtotal: "Vahesumma (Km-ta)",
    tax: "Käibemaks",
    total: "Kokku",
    delivery: "Kohaletoimetamine",
    pickup: "Tulen ise järele",
    coupon: "Kupongi kood",
    couponPlaceholder: "Sisesta kupongi kood",
    couponApply: "Rakenda",
    couponSuccess: "kupong rakendatud!",
    couponInvalid: "Vigane kupong"
  }
}

export const DISCOUNT_SECTION_TEXT = {
  en: {
    title: "Get a Discount Code!",
    desc: `Enter your email and receive -${BUSINESS_DATA[0].couponCodeDiscount}% discount code for your next order.`,
    placeholder: "Your email",
    button: "Get Code",
    sent: "Sent!",
    success: "Discount code sent to your email!",
    couponCode: BUSINESS_DATA[0].couponCode,
    couponCodeDiscount: BUSINESS_DATA[0].couponCodeDiscount
  },
  et: {
    title: "Saa sooduskood!",
    desc: `Sisesta oma e-post ja saa -${BUSINESS_DATA[0].couponCodeDiscount}% sooduskood järgmiseks tellimuseks.`,
    placeholder: "Sinu e-post",
    button: "Hangi kood",
    sent: "Saadetud!",
    success: "Sooduskood saadeti sinu e-postile!",
    couponCode: BUSINESS_DATA[0].couponCode,
    couponCodeDiscount: BUSINESS_DATA[0].couponCodeDiscount
  }
}

export const FEATURES_INTRO_TOGGLE_LABELS = {
  en: {
    show: "Show bonuses",
    hide: "Hide bonuses"
  },
  et: {
    show: "Näita boonuseid",
    hide: "Peida boonuseid"
  }
}

export default languages



