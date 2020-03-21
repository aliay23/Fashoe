// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "Renata",
    category:"Lifestyle Sneakers",
    price: 194.95,
    description:
      "Rock a cute summer vibe in the laid-back ara® Renata nubuck leather lace-up sneaker.Features fun striped laces and a lightly padded tongue and collar.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/4/2/7/4/5042745-t-THUMBNAIL.jpg",
      "https://www.zappos.com/p/ara-renata-jeans-nubuck/product/9379758/color/3698"
    ]
  },
  
    {
      id: 2,
      name: "Briah Perf Sling",
      category: "Wedge Heels",
      price: 109.95,
      description:
        "Bare your fresh pedi in style with the sleek and summer-ready Briah Perf Sling.",
      popular: false,
      imageUrls: [
        "https://www.zappos.com/images/z/4/2/4/8/2/1/4248210-t-THUMBNAIL.jpg",
        "https://www.zappos.com/p/rockport-briah-perf-sling-white/product/8826594/color/14"
      ]
    },
  {
    id: 3,
    name: "Enjoy Spikeless Two-Tone",
    category: "Running Shoes",
    price: 89.95,

    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/7/1/7/9/2/4717924-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 4,
    name: "Suede and Leather Chunky Sole Sneaker",
    category: "Running Shoes",
    price: 250,
    description:
      "Don't miss a beat in the suede and fabricated Versace Jeans Couture" +
      "Suede and Leather Chunky Sole Sneakers with lace front closure and pull-tab at the tongue and heel." +
      "Leather and fabricated lining.",
      
    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/5/2/4/1/4952419-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 5,
    name: "Tiptop",
    category: "Running Shoes",
    price: 79.90,
    description:
      "The David Tate® Tiptop slip-on sneaker with a knit mesh upper keeps up with your day-to-day.",

    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/0/4/1/1/5004119-t-THUMBNAIL.jpg",
    ]
  },

  {
    id: 6,
    name: "S-Lite",
    category: "Athletic Shoes",
    price: 159.95,
    description: "ECCO YAK leather upper with a diamond-shaped embossing for superior breathability.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/5/9/2/3/7/4592375-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 7,
    name: "Nurse Mates",
    category:  "Lifestyle Sneakers",
    price: 89.95,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/8/4/0/7/4984072-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 8,
    name: "Net 3",
    category: "Lifestyle Sneakers",
    price: 115.00,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/2/5/0/4/5025044-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 9,
    name: "V-12",
    category:  "Athletic Shoes",
    price: 150.00,
    description: "",

    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/7/7/0/2/4977022-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 10,
    name: "LS",
    category:  "Althetic Shoes",
    price:104.95 ,
    description:
      "Treat your feet to the Arcopedico® Vegan LS lace-up oxford. Features a knit upper for fashionable and long-lasting wear and lining contains the Sansmell™ deodorizing system which is antimicrobial.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/1/0/0/8/3/4/1008345-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 11,
    name: "Kinetic Lite Lace",
    category:   "Lifestyle Sneakers",
    price: 119.95,
    description:
      "The sporty-chic look of the SOREL® Kinetic™ Lite Lace sneakers make a fun seasonal statement and are so lightweight you might forget you're wearing them!",
    popular: false,
    imageUrls: [
       "https://www.zappos.com/images/z/5/0/0/4/1/2/5004121-t-THUMBNAIL.jpg"
    ]
  },
 
  {
    id: 12,
    name: "Cloud X",
    category:  "Running Shoes",
    price: 139.99,
    description:
      "The Cloud X mixes training and running into one light and comfortable shoe to help you achieve your lofty goals.",
    popular: false,
    imageUrls: [
"https://www.zappos.com/images/z/4/8/8/8/9/1/4888911-t-THUMBNAIL.jpg"   
 ]
  },
  {
    id: 13,
    name: "Renew Run",
    category:  "Running Shoes",
    price: 90.00,
    description:
      "The Nike® Renew Run running shoes give the everyday runner exactly what she's been looking for: comfort and stability. These lightweight running shoes get their performance from an innovative midsole that surrounds soft, impact-absorbing Lunarlon cushioning with a high-density Phylon foam, soaking up the impact of each stride while maintaining in-shoe stability so you can put miles behind you without feeling the distance.",
    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/4/8/8/9/8/4/4889846-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 14,
    name: "UA HOVR Rise Printed",
    category:  "Running Shoes",
    price: 110.00,
    description:
      "Rise to any challenge that involves running with the Under Armour® UA HOVR Rise Printed running shoes.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/1/3/2/5/4913255-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 15,
    name: "GEL-Contends",
    category:  "Running Shoes",
    price: 49.00,
    description:
      "The ASICS® GEL-Contend® 6 running shoes have a versatile, lightweight construction with all the durability, long-lasting support, and stability you need for a full day of running, commuting to work, and simply for everyday wear.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/8/9/7/7/6/4897760-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 16,
    name: "Fresh Foam Roav City Grit",
    category:  "Running Shoes",
    price: 79.95,
    description:
      "The New Balance® Fresh Foam Roav City Grit running shoes have a concrete-inspired brand logo and an allover grunge-inspired graphics.",
    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/4/9/2/1/4949217-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 17,
    name: "Clifton 6",
    category:  "Running Shoes",
    price: 129.95,
    description:
      "The super-supportive Hoka One One® Clifton 6 running shoes deliver the perfect combo of soft and light while providing a smoother ride and enhanced fit.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/7/1/5/8/3/4715836-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 18,
    name: "Ariel '18",
    category:  "Running Shoes",
    price: 119.95,
    description:
      "The lightweight, responsive, and supportive style of the Brooks® Ariel '18 running shoe will have you ready to run your best every day!",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/4/2/2/1/4/4422140-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 19,
    name: "Fresh Foam Roav City Grit",
    category:  "Running Shoes",
    price: 79.95,
    description:
      "The New Balance® Fresh Foam Roav City Grit running shoes have a concrete-inspired brand logo and an allover grunge-inspired graphics.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/4/9/2/1/4949219-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 20,
    name: "Fresh Foam Tempo",
    category:  "Running Shoes",
    price: 109.95,
    description:
      "The New Balance® Fresh Foam Tempo running shoes offer a colorful and supportive ride for your runs around the track.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/4/7/6/6/4947661-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 21,
    name: "Energyfalcon X",
    category:  "Running Shoes",
    price: 70.00,
    description:
      "The adidas® Running Energyfalcon X running shoes support your fitness journey goals with its sleek style and plush cushioning.",
    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/3/1/1/3/5031138-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 22,
    name: "Renew Run",
    category:  "Running Shoes",
    price: 90.00,
    description:
      "The Nike® Renew Run running shoes give the everyday runner exactly what she's been looking for: comfort and stability. These lightweight running shoes get their performance from an innovative midsole that surrounds soft, impact-absorbing Lunarlon cushioning with a high-density Phylon foam, soaking up the impact of each stride while maintaining in-shoe stability so you can put miles behind you without feeling the distance.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/8/8/9/8/4/4889846-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 23,
    name: "Go Run Smart",
    category:  "Running Shoes",
    price: 80.00,
    description:
      "The SKECHERS® Go Run Smart running sneaker combines comfort and style with a woven ombré finish, flat knit fabric upper, and machine washable design.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/1/6/7/0/5016707-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 24,
    name: "Cloud 2.0",
    category:  "Running Shoes",
    price: 129.95,
    description:
      "Perform at your best in the ultralight, fully-cushioned On Cloud 2.0 running shoes.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/8/8/9/0/0/4889001-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 25,
    name: "Mexico 66",
    category:  "Classic Sneakers",
    price: 89.95,
    description:
      "Get with the timeless looks of the Superstar W by adidas® Originals.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/2/7/6/7/9/0/2767905-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 26,
    name: "Chuck Taylor All Star Leather Ox",
    category:  "Classic Sneakers",
    price:54.95 ,
    description:
      "The Converse® Chuck Taylor® All Star® Leather Ox is a classic choice you can't go wrong with.",
    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/1/8/6/3/4/8/1863482-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 27,
    name: "Bullet",
    category:  "Classic Sneakers",
    price: 49.95,
    description:
      "Great looking low-profile silhouette from the Saucony archives.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/3/5/6/0/6/2/3560624-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 28,
    name: "Suede Classic",
    category:  "Classic Sneakers",
    price: 64.95,
    description:
      "Skip all the hundreds of trainers that take inspiration from the flavor of the month, PUMA® gets the job done with the Suede Classic. Enough said.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/1/6/8/2/0/1/1682010-t-THUMBNAIL.jpg"
        ]
  },
  {
    id: 29,
    name: "Serrano",
    category:  "Classic Sneakers",
    price: 79.95,
    description:
      "Add some spice to your 'steez with the classic Onitsuka Tiger by ASICS® Serrano shoe!",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/1/3/3/9/4913397-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 30,
    name: "Classic Slip-On",
    category:  "Classic Sneakers",
    price: 54.95,
    description:
      "The shoe that started it all... the iconic Vans™ Classic Slip-On.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/5/3/2/9/4953292-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 31,
    name: "Chuck Taylor All Star Shoreline Knit",
    category:  "Classic Sneakers",
    price: 59.95,
    description:
      "Throw on a lightweight take on a classic with the Converse® Chuck Taylor All Star Shoreline Knit.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/6/9/8/2/6/4698267-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 32,
    name: "Chuck Taylor All Star Leather Hi",
    category:  "Classic Sneakers",
    price: 59.95,
    description:
      "The original basketball shoe, now a defined style of its own!",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/1/8/7/6/8/5/1876859-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 33,
    name: "New Balance Classics",
    category:  "Classic Sneakers",
    price: 79.95,
    description:
      "Nothing looks cleaner than a pair of 574 sneakers from New Balance® Classics!",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/8/9/3/8/1/4893815-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 35,
    name: "Suede Classic",
    category:  "Classic Sneakers",
    price: 64.95,
    description:
      "Skip all the hundreds of trainers that take inspiration from the flavor of the month, PUMA® gets the job done with the Suede Classic. Enough said.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/2/0/7/3/5/9/2073595-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 36,
    name: "Aerantis 2",
    category:  "Lifestyle Sneakers",
    price: 170.00,
    description:
      "A clean leather uppers the Geox® Aerantis 2 lace-up sneaker lends a modern and sporty look to your day.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/7/2/3/7/5072379-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 37,
    name: "Alpargata Cupsole",
    category:  "Lifestyle Sneakers",
    price: 59.00,
    description:
      "The clean and relaxed look of the TOMS® Alpargata Cupsole slip-on shoe will complement your everyday style.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/2/8/7/5/4928755-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 38,
    name: "Alpargata Cupsole",
    category:  "Lifestyle Sneakers",
    price: 74.90,
    description:
      "The clean and relaxed look of the TOMS® Alpargata Cupsole slip-on shoe will complement your everyday style.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/2/8/7/5/4928750-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 39,
    name: "Venice Collection Alpargata Boardwalk",
    category:  "Lifestyle Sneakers",
    price: 59.90,
    description:
      "The timeless style, lightweight durability, and easy comfort of the TOMS® Venice Collection Alpargata Boardwalk platform slip-on shoes let you explore any city or seaside resort to your heart's content.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/2/8/7/5/4928753-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 40,
    name: "Ludlow",
    category:  "Lifestyle Sneakers",
    price: 165.00,
    description:
      "The J/Slides™ Ludlow sneaker will highlight your street-chic style with a high-top silhouette, side-zip closure, studded accents along the heel stripe, and a rubber platform.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/6/0/9/8/5060981-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 41,
    name: "Lacee Laser",
    category:  "Lifestyle Sneakers",
    price: 112.00,
    description:
      "The J/Slides™ Lacee Laser sneaker boasts street-chic appeal with a low-profile silhouette, mixed finish design, and a classic round toe.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/6/1/1/2/5061123-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 42,
    name: "Cleo",
    category:  "Lifestyle Sneakers",
    price: 123.99,
    description:
      "The J/Slides™ Cleo sneaker offers a street-chic aesthetic with a slip-on design, goring side insets, and a rubber platform.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/6/0/8/3/5060834-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 43,
    name: "Jordyn",
    category:  "Lifestyle Sneakers",
    price: 69.00,
    description:
      "The LAUREN Ralph Lauren® Jordyn sneaker exudes a sporty-chic design with a slip-on construction, logo-detailed stretch collar, and a stretch-infused jacquard knit upper.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/6/7/9/5/5067958-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 44,
    name: "Daryl",
    category:  "Lifestyle Sneakers",
    price: 325.99,
    description:
      "The Stuart Weitzman® Daryl sneaker is a must-have for your classic collection with a vintage-inspired silhouette, low-top construction, and smooth finish.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/1/1/6/4/0/5116404-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 45,
    name: "Odesi",
    category:  "Lifestyle Sneakers",
    price: 59.99,
    description:
      "Featuring a comfortable elastic heel cuff, keep your casual style on point wearing the textile Tommy Hilfiger® Odesi lace-up sneaker with heel tab.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/5/7/8/0/5057806-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 46,
    name: "Swan",
    category:  "Dress Heels",
    price: 88.99,
    description:
"The Nina™ Swan sandal lends a dose of modern glam to a comfortable design with a strappy silhouette, jewel-encrusted finish, open toe, and low wrapped block heel.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/9/8/5/2/5098522-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 47,
    name: "Paulina",
    category:  "Dress Heels",
    price: 159.99,
    description:
"Elevate your style in the Bed Stu™ Paulina wedge sandal featuring a strappy design, a wrapped block heel, and a leather upper.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/2/9/1/0/5029107-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 48,
    name: "Lanette Cap",
    category:  "Dress Heels",
    price: 109.99,
    description:
"With a color-block finish, sleek pointed cap toe, and signature logo hardware at the vamp, the LAUREN Ralph Lauren® Lanette Cap pump will be sure to make a lasting impression.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/6/8/8/4/5068841-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 49,
    name: "Irenee Sandal",
    category:  "Dress Heels",
    price: 111.99,
    description:
"If you're looking for polished perfection that's tall on style but short in height, look no further than the Irenee Sandal!",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/9/3/8/1/5093813-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 50,
    name: "Pier Ave - Urban Escape",
    category:  "Dress Heels",
    price: 59.99,
    description:
"The SKECHERS® Pier Ave - Urban Escape sandal will simplify your chic warm-weather style with easy slide-on styling, a single wide strap over the vamp, and premium cushioning.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/3/6/2/6/5036264-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 51,
    name: "Talie",
    category:  "Dress Heels",
    price: 108.99,
    description:
"The STEVEN NEW YORK® Talie heeled sandals feature slim straps and a square-toe silhouette for a modern take on 90's style.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/4/0/1/4/5040144-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 52,
    name: "Tia",
    category:  "Dress Heels",
    price: 119.99,
    description:
"Go seamlessly from work attire to a more casual look with the versatile design and wrapped-heel of the Alegria® Tia block heel sandals.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/0/3/0/2/5003021-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 53,
    name: "Brookshear",
    category:  "Dress Heels",
    price: 69.99,
    description:
"Make your night something to remember in the Aldo® Brookshear pumps featuring crossing straps and a pointed-toe silhouette.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/6/5/1/7/5065171-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 54,
    name: "Palms",
    category:  "Wedge Heel",
    price: 49.99,
    description:
"Stroll the beach town in the Dirty Laundry® Palms platform sandals featuring a synthetic, snake-embossed upper on a sporty platform.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/1/3/2/9/3/5132938-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 55,
    name: "Keyton",
    category:  "Dress Heels",
    price: 29.99,
    description:
"The Harley-Davidson® Keyton sandals will set your style for warm-weather fun and weekend vacations.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/1/4/4/8/5014486-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 56,
    name: "",
    category:  "Dress Heels",
    price: 59.99,
    description:
"The Matisse® Looking Up mule will highlight your fierce style with an embossed leather upper, bold snake print, and pointed toe.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/4/3/4/5/5043453-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 57,
    name: "Angel II",
    category:  "Pumps",
    price: 39.99,
    description:
"The elegant 'Angel II' pump combines style and practicality into one versatile package.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/2/3/1/2317-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 58,
    name: "Tamra",
    category:  "Pumps",
    price: 119.99,
    description:
"Work or play, the Sam Edelman® Tamra update your look with its stylish square toe and slingback strap.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/9/8/6/2/4998628-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 59,
    name: "Faleece",
    category:  "Pumps",
    price: 99.99,
    description:
"Show off your fabulous sense of style in the Faleece.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/3/8/3/7/0/0/3837008-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 60,
    name: "Tali Bow Pump",
    category:  "Pumps",
    price: 97.99,
    description:
"From desk to date night, the Cole Haan® Tali Bow Pump will keep your look posh and compliment-worthy.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/4/2/0/7/4/4420743-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 61,
    name: "Erica",
    category:  "Pumps",
    price: 20.99,
    description:
"Classic block pumps lend a polished, timeless look.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/4/9/4/3/4/4494347-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 62,
    name: "43711 Mirjam 11",
    category:  "Pumps",
    price: 39.99,
    description:
"You'll be sure to channel your inner fashionista with the 43711 Mirjam 11 heel from Rieker®",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/2/1/9/3/3/6/2193360-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 63,
    name: "Dea",
    category:  "Pumps",
    price: 93.99,
    description:
"Tailored sling-back design from Trotters® with a premium leather upper that is both long-lasting and looks great too.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/729/7290814/6218-357176-t.jpg"
    ]
  },
  {
    id: 64,
    name: "Hazel",
    category:  "Pumps",
    price: 101.99,
    description:
"The Sam Edelman® Hazel stilettos boast a classic pointed toe and leg-lengthening low-cut vamp for a striking look that's sure to turn heads.",
    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/4/4/1/6/5/3/4416536-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 65,
    name:"Linvale Jerica" ,
    category:  "Pumps",
    price: 47.98,
    description:
    "Keep your office look modern and chic in the Clarks® Linvale Jerica pointy-toed slip-on pump.",
    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/4/7/8/2/0/7/4782070-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 66,
    name: "Parigi",
    category:  "Pumps",
    price: 27.99,
    description:
    "A simple and understated pump is essential for any wardrobe. Look sleek and sophisticated in both casual and business attire with the Parigi pump from LifeStride®.",
    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/3/4/1/7/5/5/3417557-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 67,
    name: "Fabulist",
    category:  "Pumps",
    price: 101.00,
    description:
    "Be fabulous - be you, in the Fabulist heel by Anne Klein! ",
    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/3/2/5/2/6/4/3252641-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 68,
    name:"Hazel" ,
    category:  "Pumps",
    price: 149.99,
    description:
    "The Sam Edelman® Hazel stilettos boast a classic pointed toe and leg-lengthening low-cut vamp for a striking look that's sure to turn heads.",
    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/9/8/7/7/4998775-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 69,
    name:"Narcy Wedge Espadrille",
    category:  "Wedge Heels",
    price: 35.89,
    description:
    "The Anne Klein® Narcy Wedge Espadrille boasts modern elegance with decorative laser-cut detailing over the vamp, a two-piece silhouette, and jute-wrapped midsole with wedge heel.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/5/8/8/4/5058843-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 70,
    name:"Fayola Wedge Heel",
    category:  "Wedge Heels",
    price: 59.89,
    description:
    "The Bandolino® Fayola Wedge Heel will be the perfect addition to your timeless collection.    ",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/7/4/5/4/5/4745454-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 71,
    name:"Nissa",
    category:  "Wedge Heels",
    price: 79.89,
    description:
    "These Me Too® Nissa espadrille wedges are an essential for your next warm weather adventure. ",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/9/0/1/7/5090179-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 72,
    name:"Marta",
    category:  "Wedge Heels",
    price: 119.89,
    description:
    "Explore new style opportunities with the charming LINEA Paolo Marta ankle strap wedge. Made of soft suede with an adjustable buckle closure and durable contrast rubber outsole.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/5/0/3/9/4950399-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 73,
    name:"Daday Dress Wedge",
    category:  "Wedge Heels",
    price: 54.99,
    description:
    "Update your timeless look with the modern-infused Nine West® Daday wedge. ",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/2/0/3/2/7/4203270-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 74,
    name:"Noor",
    category:  "Wedge Heels",
    price: 60.95,
    description:
    "Slip into your favorite jumpsuit or sun dress with the Dolce Vita® Noor wedges to complete the look. ",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/6/6/1/2/6/4661269-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 75,
    name:"Caldes",
    category:  "Wedge Heels",
    price: 134.89,
    description:
    "Garner compliments all season long in the attractive Caldes wedge sandal by Toni Pons®.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/3/9/2/5/7/0/3925709-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 76,
    name:"Wittley",
    category:  "Wedge Heels",
    price: 149.05,
    description:
    "Paint the town in the UGG® Wittley espadrille wedge sandal featuring a thin strap, a jute-wrapped heel, and a leather with fabric upper.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/4/4/1/0/4944109-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 77,
    name:"Loralie",
    category:  "Wedge Heels",
    price: 104.89,
    description:
    "Make Mondays stylish with the lovely Loralie mary jane.   ",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/3/3/8/4/0/4338407-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 78,
    name:"Narcy Wedge Espadrille",
    category:  "Wedge Heels",
    price: 79.89,
    description:
    "The Anne Klein® Narcy Wedge Espadrille boasts modern elegance with decorative laser-cut detailing over the vamp, a two-piece silhouette, and jute-wrapped midsole with wedge heel.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/5/8/8/4/5058842-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 79,
    name:"Poppiri",
    category:  "Wedge Heels",
    price: 99.89,
    description:
    "Please note that due to the unique hand-painted design of L'Artiste by Spring Step® footwear, the exact design may vary from piece to piece.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/6/2/4/8/1/4624816-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 80,
    name:"Jemma",
    category: "Chelsea Boots",
    price: 219.00,
    description:
    "For a look that's as versatile as your social calendar, look no further than the chic and timeless Aquatalia® Jemma Ankle Boot. The pull-on bootie is constructed from a weatherproof leather upper with a classic almond-toe, elastic goring at the sides for easy on-and-off wear and a stacked block heel.",
    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/1/6/2/0/4916206-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 81,
    name:"Ruzgar",
    category: "Chelsea Boots",
    price: 219.00,
    description:
    "Slip into something fabulous with the Naot® Ruzgar bootie. The luxe leather upper boasts dual elastic goring and a pull-tab feature at the ankle for easy on-and-off wear and a classic bootie look. ",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/7/8/4/8/6/4784862-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 82,
    name:"Keesha",
    category: "Chelsea Boots",
    price: 59.00,
    description:
    "Add a feminine detail to your look with the SOLE / SOCIETY® Keesha booties featuring a suede upper with ruffled elastic panels.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/7/3/0/7/4973077-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 83,
    name:"Sacha Chelsea",
    category: "Chelsea Boots",
    price: 209.00,
    description:
    "Stay stylish all season long with the Frye® Sacha Chelsea.    ",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/7/5/7/4/8/4757485-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 84,
    name:"Fields Chelsea",
    category: "Chelsea Boots",
    price: 119.00,
    description:
    "The clean, classic Chaco® Fields Chelsea boots will keep you comfortable during outdoor vacations or city exploring.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/7/5/1/3/4/4751342-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 85,
    name:"Viola",
    category: "Chelsea Boots",
    price: 259.00,
    description:
    "Stand out from the crowd in effortless style with the To Boot New York™ Viola Chelsea boot. It's handcrafted with a supple mezzo vitello Italian calf or plush Italian calf suede upper, and can be effortlessly paired with cropped pants, jeans, or dresses.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/7/7/0/6/0/4770604-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 86,
    name:"Shawn Chelsea Boot",
    category: "Chelsea Boots",
    price: 359.00,
    description:
    "The rag & bone® Shawn Chelsea Boot features a leather upper and combat silhouette for a fierce look",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/5/6/6/1/4956611-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 87,
    name:"Slimmer",
    category: "Chelsea Boots",
    price: 59.00,
    description:
    "Slimmer is the ankle boot with a slimming effect. ",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/3/6/8/0/9/6/3680960-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 88,
    name:"Slimmer",
    category: "Chelsea Boots",
    price: 159.00,
    description:
    "Slimmer is the ankle boot with a slimming effect.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/3/6/8/0/9/6/3680966-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 89,
    name:"Lisbon Sedona",
    category: "Chelsea Boots",
    price: 69.00,
    description:
    "It's payback time in these bold Dirty Laundry® Lisbon Sedona booties.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/8/4/6/3/3/4846335-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 11,
    name:"Taline",
    category: "Chelsea Boots",
    price: 109.00,
    description:
    "The Marc Fisher LTD™ Taline bootie offers timeless style and contemporary appeal with an ankle height, metallic accents, a squared toe, and a sculpted heel.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/0/6/4/6/4906463-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 90,
    name: "Plano",
    category: "Coyboy Boots",
    price: 309.00,
    description:
    "The Dan Post® Plano boot offers an elegant Western style on a soft and luxurious design.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/2/3/4/6/5023468-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 91,
    name: "Corral Boots",
    category: "Coyboy Boots",
    price: 137.00,
    description:
    "Bring some bling to your boots with the Corral Boots L5512.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/8/7/1/6/2/4871628-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 92,
    name: "Raya",
    category: "Coyboy Boots",
    price: 114.90,
    description:
    "These beautiful Western boots from Justin® will keep you stylishly comfortable during your tough workday.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/2/0/7/3/9/1/2073912-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 93,
    name:"Corral Boots L5419" ,
    category: "Coyboy Boots",
    price: 119.80,
    description:
    "These Corral™ L5419 cowgirl boots have a rich, handcrafted leather construction and gorgeous Western embroidery, making this a truly modern cowgirl style.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/8/7/1/6/2/4871629-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 94,
    name: "Durango RD4112",
    category: "Coyboy Boots",
    price: 87.00,
    description:
    "Distressed leather riding boot.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/8/2/6/82665-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 95,
    name: "Madison",
    category: "Coyboy Boots",
    price: 139.00,
    description:
    "Rope 'em in and ride 'em down in these rough and ready boots that'll keep those cocky cowboys in check!",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/9/6/4/2/6/3/964263-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 97,
    name: "Alisa",
    category: "Coyboy Boots",
    price: 58.99,
    description:
    "The Alisa boot from Roper™ has a simply stylish Western design that is ideal for a relaxed cowgirl look.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/3/6/9/1/0/3/3691035-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 98,
    name: "Nina",
    category: "Coyboy Boots",
    price: 62.99,
    description:
    "You will love the sleek Western style of the Roper® Nina boot.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/2/9/7/7/0/4297708-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 110,
    name: "Scrollin",
    category: "Coyboy Boots",
    price: 44.99,
    description:
    "The Roper® Scrollin cowgirl boots have a ruggedly feminine design that will complement your Western look",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/8/4/6/0/7/4846070-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 111,
    name: "Route 66",
    category: "Coyboy Boots",
    price: 503.00,
    description:
    "Embrace your sense of adventure with the rugged beauty of the Old Gringo® Route 66 boot! Handmade leather upper with a distressed finish.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/5/3/6/7/1/4536712-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 112,
    name: "Snow Angel Lace",
    category: "Winter and Snow Boots",
    price: 74.00,
    description:
    "When it is time to enjoy some winter games, the Sorel® Snow Angel™ Lace boot is sure to keep you warm and cozy all day long!",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/7/4/5/7/3/4745737-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 113,
    name: "Vesta Waterproof",
    category: "Winter and Snow Boots",
    price: 98.00,
    description:
    "Bad weather? Venture out in style with the warm and dependable Cougar® Vesta Waterproof tall nylon boot.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/7/2/0/9/4972095-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 114,
    name: "Glacier",
    category: "Winter and Snow Boots",
    price: 24.00,
    description:
    "A snowy day may just turn into snow play in the winter-ready Tundra® Glacier boot.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/1/6/2/6/8/4/1626841-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 115,
    name: "Momentum 2",
    category: "Winter and Snow Boots",
    price: 62.28,
    description:
    "The season may get cold and nasty, but you'll always feel warm and look good with the cozy comfort of the Kamik® Momentum2 snow boot.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/3/8/2/9/5/4382952-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 116,
    name: "Ice Maiden",
    category: "Winter and Snow Boots",
    price: 24.99,
    description:
    "Technology and whimsical winter style marry in the Ice Maiden™ II from Columbia®.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/2/7/0/6/8/3/2706834-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 117,
    name:"Out 'N About Plus Tall" ,
    category: "Winter and Snow Boots",
    price: 70.99,
    description:
    "The winter season will never slow you down or slip you up when you're wearing the tough yet stylish SOREL® Out 'N About™ Plus Tall cold-weather boot!",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/7/5/0/1/4/4750142-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 118,
    name: "Adirondack Boot III",
    category: "Winter and Snow Boots",
    price: 249.95,
    description:
    "Enjoy the great outdoors with the superior style of the UGG® Adirondack Boot III!",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/3/9/4/2/6/4394269-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 119,
    name: "Explorer Joan",
    category: "Winter and Snow Boots",
    price: 105.99,
    description:
    "The SOREL® Explorer Joan boot offers a stylish and cozy choice for all your winter adventures.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/7/5/0/1/8/4750181-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 1100,
    name: "Kaci Winter Mid Waterproof",
    category: "Winter and Snow Boots",
    price: 99.99,
    description:
    "Brave the chilly season in total style and comfort when you wear the Kaci Winter Mid Waterproof boot from Keen®.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/3/3/0/6/6/4330667-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 1123,
    name: "Shellista III Mid",
    category: "Winter and Snow Boots",
    price: 78.00,
    description:
    "Protect yourself from inclement weather and the splash of city puddles and slush in The North Face® Shellista III Mid boot. An update to the classic duck boots, these waterproof, mid-calf boots provide seasonal protection and warm insulation with a stylish mixed leather and wool upper.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/7/8/3/8/5/4783859-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 1144,
    name: "Joan of Arctic",
    category: "Winter and Snow Boots",
    price: 119.00,
    description:
    "Stay warm this winter with the reliable comfort and style of the Sorel® Joan of Artic™ boot!",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/7/4/5/6/4/4745641-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 1144,
    name:"Joan of Arctic #8482" ,
    category: "Winter and Snow Boots",
    price: 159.95,
    description:
    "Stay warm this winter with the reliable comfort and style of the Sorel® Joan of Artic™ boot!",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/p/sorel-joan-of-arcticc-camel-brown-black/product/7333234/color/751811"
    ]
  },
  {
    id: 1166,
    name: "Double Metal Zip Boot Sylvian",
    category: "Dress Boots",
    price: 352.95,
    description:
    "Colorful leather Jeffery-West™ Double Metal Zip Boots with dual zippers and pull-tab at the heel.",
    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/5/1/2/7/0/1/5127010-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 1177,
    name: "Double Metal Zip Boot Sylvian",
    category: "Dress Boots",
    price: 352.95,
    description:
    "Colorful leather Jeffery-West™ Double Metal Zip Boots with dual zippers and pull-tab at the heel.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/1/2/7/0/1/5127011-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 1188,
    name: "Double Metal Zip Boot Sylvian",
    category: "Dress Boots",
    price: 352.95,
    description:
    "Colorful leather Jeffery-West™ Double Metal Zip Boots with dual zippers and pull-tab at the heel.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/1/2/7/0/1/5127012-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 1199,
    name: "Tally",
    category: "Rain Boots",
    price: 59.95,
    description:
    "Make a splash in your wardrobe this season with these rain boots from LAUREN Ralph Lauren™!",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/6/8/8/3/5068830-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 11112,
    name: "Tropics Bainbridge Adjustable Mid Boot",
    category: "Rain Boots",
    price: 80.95,
    description:
    "Create a warm vibe as the rain falls int the chic rubber Chooka® Tropics Bainbridge Adjustable Mid Boot with breathable lining and lightly cushioned, stationed insole.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/8/6/2/3/4986239-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 11334,
    name:"Veierland 3" ,
    category: "Rain Boots",
    price: 63.95,
    description:
    "These tall Helly Hansen® Veierland 3 boots provide style and comfort with the perfect amount of weather protection. The classic boot features a traditional waterproof rubber upper with side buckle detail.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/5/0/2/5/5050255-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 11543,
    name:"Veierland 3" ,
    category: "Rain Boots",
    price: 87.95,
    description:
    "These tall Helly Hansen® Veierland 3 boots provide style and comfort with the perfect amount of weather protection. The classic boot features a traditional waterproof rubber upper with side buckle detail.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/5/0/2/5/5050256-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 11675,
    name: "Rain Check - April Showers",
    category: "Rain Boots",
    price: 30.95,
    description:
    "The BOBS from SKECHERS® Rain Check - April Showers boot is the perfect choice for you to embrace the elements with a colorful dog print, a mid-calf height, seam-sealed waterproof construction, and buckled side strap at the shaft.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/8/6/7/8/1/4867819-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 1131,
    name: "Molly Welly",
    category: "Rain Boots",
    price: 51.95,
    description:
    "Bring an edge to those not so sunny days and make a splash in the rubber Joules® Molly Welly rain boot with a textile lining and removable insole.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/3/7/3/8/5037385-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 311,
    name: "Original Short Exploded Logo",
    category: "Rain Boots",
    price: 159.95,
    description:
    "Note: Select your US size. Please be advised, the product and box will display UK, US and Euro sizing. For US sizing, both men's and women's sizing is displayed. Men's sizing is represented by M and women's sizing is represented by F.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/1/6/1/3/1/5161315-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 211,
    name: "Refined Gloss Quilt Chelsea",
    category: "Rain Boots",
    price: 155.95,
    description:
    "Note: Select your US size. Please be advised, the product and box will display UK, US and Euro sizing. For US sizing, both men's and women's sizing is displayed. Men's sizing is represented by M and women's sizing is represented by F.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/0/6/2/1/2/5062120-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 411,
    name: "Original Chelsea Gloss",
    category: "Rain Boots",
    price: 155.95,
    description:
    "Note: Select your US size. Please be advised, the product and box will display UK, US and Euro sizing. For US sizing, both men's and women's sizing is displayed. Men's sizing is represented by M and women's sizing is represented by F.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/1/6/1/3/2/5161321-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 511,
    name: "Original Short Back Adjustable Rain Boots",
    category: "Rain Boots",
    price: 150.95,
    description:
    "Note: Select your US size. Please be advised, the product and box will display UK, US and Euro sizing. For US sizing, both men's and women's sizing is displayed. Men's sizing is represented by M and women's sizing is represented by F.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/5/1/6/1/3/0/5161302-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 611,
    name: "Original Short",
    category: "Rain Boots",
    price: 155.95,
    description:
    "Note: Select your US size. Please be advised, the product and box will display UK, US and Euro sizing. For US sizing, both men's and women's sizing is displayed. Men's sizing is represented by M and women's sizing is represented by F.",

    popular: true,
    imageUrls: [
      "https://www.zappos.com/images/z/5/1/6/1/3/1/5161311-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 711,
    name: "Classic Tall Mandala",
    category: "Rain Boots",
    price: 90.95,
    description:
    "Rain or shine, the Bogs® Classic Mid Mandala rain boots have everything you need to keep your day going.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/7/9/8/2/4/4798249-t-THUMBNAIL.jpg"
    ]
  },
  {
    id: 811,
    name: "Kensington Waterproof",
    category: "Rain Boots",
    price: 62.95,
    description:
    "Don't let the gloomy days keep you down, commute through the city with effortless style with the sleek Cougar® Kensington Waterproof boots. These modern ankle boots are constructed with a patent synthetic upper with stretxh sides panels for easy entry.",
    popular: false,
    imageUrls: [
      "https://www.zappos.com/images/z/4/9/7/2/0/7/4972074-t-THUMBNAIL.jpg"
    ]
  },
];

// List of item categories.
const categories = [
 
 
  {
    
    name: "Running Shoes",
    icon: "drag_handle",
    
    
  },
  {
    name: "Classic Sneakers",
    icon: "drag_handle"
    
  },


  {
    name: "Lifestyle Sneakers",
    icon: "drag_handle"
  }
];
const shoes = [
  
  {
    name: "Dress Heels",
    icon:"drag_handle"
  },
  {
    name:  "Pumps",
    icon: "drag_handle"
    
  },
  {
    name:"Wedge Heels",
    icon: "drag_handle"
    
  },
 
  
];
const boots = [
  
  {
    name: "Chelsea Boots",
    icon:"drag_handle"
  },
  {
    name:  "Cowboy Boots",
    icon: "drag_handle"
    
  },
  {
    name:"Winter and Snow Boots",
    icon: "drag_handle"
    
  },
  {
    name:"Dress Boots",
    icon: "drag_handle"
    
  },
  {
    name:"Rain Boots",
    icon: "drag_handle"
    
  },
];

// Data for rendering menu.
const dataForTheMenu = [
  { name: "Home page", url: "/", icon: "home", id: 0 },
 { name: "All categories", url: "?category=All%20categories&itemCategoryClicked=true", icon: "list", id: 0 },

  {
    name: "Sneakers and Athletic Shoes",
    id: 2,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: 2 + i,
        url: "/?category=" + x.name + "&itemCategoryClicked=true",
        icon: x.icon
      };
    })
  },
  {
    name: "Heels",
    id: 4,
    children: shoes.map((x, i) => {
      return {
        name: x.name,
        id: 2 + i,
        url: "/?category=" + x.name + "&itemCategoryClicked=true",
        icon: x.icon
      };
    })
  },
  {
    name: "Boots",
    id: 3,
    children: boots.map((x, i) => {
      return {
        name: x.name,
        id: 2 + i,
        url: "/?category=" + x.name + "&itemCategoryClicked=true",
        icon: x.icon
      };
    })
  },

];


export { sampleProducts, categories, dataForTheMenu, boots, shoes };


