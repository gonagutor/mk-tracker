const karts = [
  {
    id: "d2242619-465b-4df4-adab-e4f72c548495",
    name: "Roadster 300SL",
    icon: "/assets/karts/300sl-roadster.webp"
  },
  {
    id: "f66f287a-e636-4de7-8c82-73e00a031f85",
    name: "Malomóvil",
    icon: "/assets/karts/badwagon.webp"
  },
  {
    id: "265fd67e-de46-4820-914f-970cf43d43ea",
    name: "Buggy biddy",
    icon: "/assets/karts/biddybuggy.webp"
  },
  {
    id: "9efddc17-e120-4ae1-891a-9c4949cfc69f",
    name: "Blue Falcon",
    icon: "/assets/karts/blue-falcon.webp"
  },
  {
    id: "b37b3c0a-2b06-4cae-b86e-782d155308fa",
    name: "Sacudehuesos",
    icon: "/assets/karts/bone-rattler.webp"
  },
  {
    id: "2ba8def5-f4b4-46f6-9059-d65610cda42c",
    name: "Crucero Gato",
    icon: "/assets/karts/cat-cruiser.webp"
  },
  {
    id: "5df2be84-e1c2-437c-a465-90da23246ce2",
    name: "Especial circuitos",
    icon: "/assets/karts/circuit-special.webp"
  },
  {
    id: "a69e17d4-7213-4e69-8db8-0f3438af6b35",
    name: "Recorreciudades",
    icon: "/assets/karts/cirty-tripper.webp"
  },
  {
    id: "079c75b1-79c9-419a-9f1b-26735b90ddf0",
    name: "Cometa",
    icon: "/assets/karts/comet.webp"
  },
  {
    id: "76daef2b-154e-45eb-a26b-468860cdbb8c",
    name: "Dasher",
    icon: "/assets/karts/dasher.webp"
  },
  {
    id: "98868db6-5627-431c-a884-fee7d289d861",
    name: "Flame rider",
    icon: "/assets/karts/flame-rider.webp"
  },
  {
    id: "0066e0b8-688a-4d5b-a729-10a84c8d56bf",
    name: "Mercedes GLA",
    icon: "/assets/karts/gla.webp"
  },
  {
    id: "48e1120c-58e5-4d35-8030-4110c96f2694",
    name: "Kart dorado",
    icon: "/assets/karts/gold.webp"
  },
  {
    id: "4158d3ff-536c-424a-9882-019f70b8ad36",
    name: "Inkstriker",
    icon: "/assets/karts/inkstriker.webp"
  },
  {
    id: "ffb79105-2b94-415c-b3ce-b32c451d35b0",
    name: "Jet",
    icon: "/assets/karts/jet.webp"
  },
  {
    id: "f8344a83-6619-4c1c-acdb-adfc7cb71a90",
    name: "Koopa Payaso",
    icon: "/assets/karts/koopa-clown.webp"
  },
  {
    id: "0fa60358-97f2-4044-8b02-0fd6767c2f43",
    name: "Barco",
    icon: "/assets/karts/landship.webp"
  },
  {
    id: "9553cf21-ef40-4858-b26f-25db7f4bd82d",
    name: "Mach 8",
    icon: "/assets/karts/mach8.webp"
  },
  {
    id: "0d9dbe97-43a8-4405-86e9-4f187699a2ea",
    name: "Moto Maestra Cero",
    icon: "/assets/karts/master-cycle-zero.webp"
  },
  {
    id: "a2892bbb-c510-4672-95ab-aefffa068ac9",
    name: "Moto Maestra",
    icon: "/assets/karts/master-cycle.webp"
  },
  {
    id: "3035ce3a-1118-4050-830a-17f3baa96dc9",
    name: "Sr Scooty",
    icon: "/assets/karts/mr-scooty.webp"
  },
  {
    id: "b477da53-9901-43f0-8cfe-43915de47824",
    name: "Kart Tuberías",
    icon: "/assets/karts/pipe.webp"
  },
  {
    id: "1c724e78-7198-4df1-9562-eb33929ef596",
    name: "Carro de Caballos",
    icon: "/assets/karts/prancer.webp"
  },
  {
    id: "55bc4ddb-f793-4686-9958-af7b2478ee0d",
    name: "Zapatilla",
    icon: "/assets/karts/sneaker.webp"
  },
  {
    id: "97fe7839-8a48-49c5-8618-72c1313d1a40",
    name: "Splatbuggy",
    icon: "/assets/karts/splatbuggy.webp"
  },
  {
    id: "62453c61-0dd0-4f93-a198-371fb8ac2241",
    name: "Moto deportiva",
    icon: "/assets/karts/prancer.webp"
  },
  {
    id: "ce68b470-84d4-40d8-8d5d-ed8b48a926c6",
    name: "Coupé",
    icon: "/assets/karts/sport-coupe.webp"
  },
  {
    id: "981bcdcd-e281-4b38-884a-17046623393a",
    name: "ATV estándar",
    icon: "/assets/karts/standard-atv.webp"
  },
  {
    id: "76aab8f8-c32f-488b-8568-21be947d0f79",
    name: "Moto estándar",
    icon: "/assets/karts/standard-bike.webp"
  },
  {
    id: "e0f14030-0627-4add-b2ac-9761be8dcb07",
    name: "Kart estándar",
    icon: "/assets/karts/standard.webp"
  },
  {
    id: "d5e7ed2e-d773-49c5-9cb7-41b6b0319b81",
    name: "Submarino",
    icon: "/assets/karts/steel-driver.webp"
  },
  {
    id: "86b8a5b4-3a3d-4aad-ae08-5b211d80c7c0",
    name: "Streetle",
    icon: "/assets/karts/streetle.webp"
  },
  {
    id: "c002db90-d936-4604-be31-683d93d02eeb",
    name: "Kart Zoologico",
    icon: "/assets/karts/tanooki-buggy.webp"
  },
  {
    id: "7ae046af-4cce-41e7-9b1d-b6400e3241c7",
    name: "Oso de Peluche",
    icon: "/assets/karts/teddy-buggy.webp"
  },
  {
    id: "cfd232a5-922f-4ef5-bdff-f373db07e799",
    name: "El Duque",
    icon: "/assets/karts/the-duke.webp"
  },
  {
    id: "2bde0952-b8d0-4a78-91a4-e248bb9ac863",
    name: "Trimotor",
    icon: "/assets/karts/trispeeder.webp"
  },
  {
    id: "6bd9633e-01b8-4d7d-bc22-0fda3116f4e4",
    name: "Varmint",
    icon: "/assets/karts/varmint.webp"
  },
  {
    id: "7f97a6c8-803d-44c4-8e0d-2fcbb373404c",
    name: "Flecha plateada W25",
    icon: "/assets/karts/w25-silver-arrow.webp"
  },
  {
    id: "fdd300d3-49de-479b-bb56-d59170b1c460",
    name: "Ala",
    icon: "/assets/karts/wing.webp"
  },
  {
    id: "91bc00d9-3da5-485f-b795-78e31c2fc14b",
    name: "Moto Yoshi",
    icon: "/assets/karts/yoshi.webp"
  },
]

module.exports = karts