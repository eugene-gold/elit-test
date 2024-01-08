const db = {
  filters: [
    { type: 'Бренд', list: null },
    {
      type: 'Страна',
      list: [
        { filter: 'Россия', status: false },
        { filter: 'Сербия', status: false }
      ]
    },
    {
      type: 'Направления меню',
      list: [
        { filter: 'Банкетное меню', status: false },
        { filter: 'Бургеры', status: true },
        { filter: 'Воки', status: false },
        { filter: 'Денер, шаурма, хот-дог', status: false },
        { filter: 'Закуски для бара', status: false },
        { filter: 'Итальянская кухня', status: false },
        { filter: 'Сметанковый', status: true },
        { filter: 'Bonefesto', status: true },
        { filter: 'Суши и роллы', status: false }
      ]
    },
    {
      type: 'Вид сыра',
      list: [
        { filter: 'Москарпоне', status: false },
        { filter: 'Сулугуни', status: false },
        { filter: 'Плавленный', status: false },
        { filter: 'Сметанковый', status: false },
        { filter: 'С белой плесенью', status: false },
        { filter: 'Прочее', status: false }
      ]
    },
    {
      type: 'Вкус сыра',
      list: [
        { filter: 'Сливочный', status: false },
        { filter: 'Копченый', status: false }
      ]
    }
  ],
  categories: [
    { category: 'Говядина', quantity: 6 },
    { category: 'Свинина', quantity: 47 },
    { category: 'Птица', quantity: 3 },
    { category: 'Крольчатина', quantity: 5 },
    { category: 'Баранина', quantity: 5 },
    { category: 'Телятина', quantity: 5 },
    { category: 'Шашлык', quantity: 5 },
    { category: 'Курица', quantity: 5 },
    { category: 'Гусь, утка, индейка, перепелка', quantity: 5 }
  ],
  items: [
    {
      id: 1,
      imageUrl: "./img/1.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: 110,
      bonus: null,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: false,
      isFavorite: false,
      measure: "кг",
      tags: ["Хит", "Новинка", "Заморозка"],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'
    },
    {
      id: 2,
      imageUrl: "./img/2.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: 110,
      bonus: null,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: true,
      isFavorite: false,
      measure: "кг",
      tags: ["Хит", "Новинка", "Заморозка"],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'

    },
    {
      id: 3,
      imageUrl: "./img/3.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: null,
      bonus: 248,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: true,
      isFavorite: false,
      measure: "кг",
      tags: ["Хит", "Новинка", "Заморозка"],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'

    },
    {
      id: 4,
      imageUrl: "./img/4.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: 110,
      bonus: null,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: false,
      isFavorite: false,
      measure: "кг",
      tags: ["Хит", "Новинка"],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'

    },
    {
      id: 5,
      imageUrl: "./img/5.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: 110,
      bonus: null,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: false,
      isFavorite: false,
      measure: "кг",
      tags: ["Хит", "Заморозка"],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'

    },
    {
      id: 6,
      imageUrl: "./img/4.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: null,
      bonus: 248,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: false,
      isFavorite: false,
      measure: "кг",
      tags: ["Хит", "Новинка"],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'

    },
    {
      id: 7,
      imageUrl: "./img/2.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: null,
      bonus: 248,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: false,
      isFavorite: false,
      measure: "кг",
      tags: ["Новинка", "Заморозка"],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'

    },
    {
      id: 8,
      imageUrl: "./img/6.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: null,
      bonus: 248,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: false,
      isFavorite: false,
      measure: "кг",
      tags: [],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'

    },
    {
      id: 9,
      imageUrl: "./img/2.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: 110,
      bonus: null,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: false,
      isFavorite: false,
      measure: "кг",
      tags: ["Новинка", "Заморозка"],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'

    },
    {
      id: 10,
      imageUrl: "./img/7.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: 110,
      bonus: null,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: false,
      isFavorite: false,
      measure: "кг",
      tags: ["Хит", "Новинка", "Ликвидация"],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'

    },
    {
      id: 11,
      imageUrl: "./img/3.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: 110,
      bonus: null,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: false,
      isFavorite: false,
      measure: "кг",
      tags: ["Хит", "9+1", "Заморозка"],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'

    },
    {
      id: 12,
      imageUrl: "./img/2.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: 110,
      bonus: null,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: false,
      isFavorite: false,
      measure: "кг",
      tags: ["Хит", "Новинка", "Заморозка"],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'

    },
    {
      id: 13,
      imageUrl: "./img/6.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: 110,
      bonus: null,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: false,
      isFavorite: false,
      measure: "кг",
      tags: ["Хит", "Новинка", "Заморозка"],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'

    },
    {
      id: 14,
      imageUrl: "./img/8.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: 110,
      bonus: null,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: false,
      isFavorite: false,
      measure: "кг",
      tags: ["Хит", "Новинка", "Заморозка"],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'

    },
    {
      id: 15,
      imageUrl: "./img/9.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: 110,
      bonus: null,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: false,
      isFavorite: false,
      measure: "кг",
      tags: ["Хит", "Новинка", "Заморозка"],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'

    },
    {
      id: 16,
      imageUrl: "./img/5.png",
      title: 'Индейка, филе грудки на подложке замороженное "Индилайт"',
      price: 496,
      priceOld: 110,
      bonus: null,
      rate: 4.6,
      country: "Германия",
      weight: 300,
      isAdded: false,
      isFavorite: false,
      measure: "кг",
      tags: ["Хит", "Новинка", "Заморозка"],
      name: 'Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг',
      company: 'Fish & More'

    },
  ]
}

export default db