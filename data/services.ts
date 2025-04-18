export const services = [
  {
    title: "Консультація лікаря",
    img: "/search.svg",
    description:
      "Очна або онлайн-зустріч з лікарем-неврологом для клінічної оцінки, встановлення попереднього діагнозу та призначення індивідуального плану лікування.",
    benefits: [],
    indications: [],
    warnings: [],
    duration: "до 1год",
    price: "очна  — 700 грн, онлайн — 600 грн",
  },
  {
    title: "Крапельниці",
    img: "/medicine.svg",
    description:
      "Важливий етап лікування патологій центральної та периферичної нервової системи. Внутрішньовенне введення медикаментів забезпечує швидкий початок дії та підвищує ефективність лікування, особливо при сильному болю або загостренні хронічних захворювань.",
    duration: "від 30хв",
    benefits: [],
    indications: [],
    warnings: [],
    price: "від 500 грн ",
  },
  {
    title: "Високочастотна магнітотерапія",
    img: "/electricity.svg",
    description: `Фізіотерапевтична методика з використанням магнітного поля, що формується модулюючими струмами різної частоти. `,
    duration: "до 50хв",
    price: "600 грн ",
    benefits: ["Протизапальний", "Поліпшення кровообігу", "Відновлювальний"],
    indications: [
      "Ревматоїдний артрит",
      "М’язові спазми",
      "Плексити",
      "Міжхребцеві грижі",
      "Біль у спині",
    ],
    warnings: [
      "Кардіостимулятор",
      "Порушення ритму серця",
      "Онкологічні захворювання",
      "Епілепсія",
      "Вагітність",
      "Гостра фаза інфекцій",
      "Тромбофлебіт",
    ],
  },
  {
    title: "Електрофорез з препаратом",
    img: "/electricity.svg",
    description: `Метод введення лікарських засобів через шкіру за допомогою електричного струму.`,
    duration: "до 50хв",
    price: "від 350 грн ",
    benefits: ["Протизапальний", "Поліпшення кровообігу", "Знеболюючий"],
    indications: [
      "Мононеврити (синдром зап’ястного каналу, невропатія серединного нерва тощо)",
      "Полінейропатії (діабетична, алкогольна, при захворюваннях сполучної тканини)",
    ],
    warnings: [
      "Кардіостимулятор",
      "Порушення ритму серця",
      "Онкологічні захворювання",
      "Епілепсія",
      "Вагітність",
      "Гостра фаза інфекцій",
      "Тромбофлебіт",
    ],
  },
  {
    title: "Ампліпульс двох типів",
    img: "/electricity.svg",
    description: `Процедура, що впливає на м’язовий тонус завдяки модуляції струмів різної частоти.`,
    duration: "до 50хв",
    price: "від 350 грн ",
    benefits: [
      "Протизапальний",
      "Знеболюючий",
      "Розслаблюючий (низькочастотний струм): знімає спазми, відновлює тонус",
      "Стимулюючий (високочастотний струм): активує нервово-м’язову провідність",
      "Відновлювальний: прискорює обмінні процеси",
    ],
    indications: [
      "Біль у грудному та попереково-крижовому відділах",
      "Спастичні та в’ялі паралічі кінцівок",
      "Хронічні запальні процеси",
    ],
    warnings: [
      "Кардіостимулятор",
      "Порушення ритму серця",
      "Онкологічні захворювання",
      "Епілепсія",
      "Вагітність",
      "Гостра фаза інфекцій",
      "Тромбофлебіт",
    ],
  },
  {
    title: "Електроакупунктура",
    img: "/electricity.svg",
    description: `Процедура для зняття м’язового спазму, болю у м’яких тканинах міжхребцевої зони, а також при головному болю напруги.`,
    duration: "до 50хв",
    price: "від 350 грн ",
    benefits: [
      "Розслаблення м’язів завдяки глибокому проникненню",
      "Активація місцевого відновлення уражених тканин завдяки локальному впливу",
    ],
    indications: [],
    warnings: [
      "Кардіостимулятор",
      "Порушення ритму серця",
      "Онкологічні захворювання",
      "Епілепсія",
      "Вагітність",
      "Гостра фаза інфекцій",
      "Тромбофлебіт",
    ],
  },
  {
    title: "Масаж уздовж усіх відділів хребта",
    img: "/massage.svg",
    description: `Терапевтичний масаж спини, який охоплює шийний, грудний та поперековий відділи хребта. Допомагає зняти м’язову напругу, покращити кровообіг і рухливість хребта, зменшити болі, пов’язані з остеохондрозом, сколіозом чи сидячим способом життя. Рекомендується як профілактика перевтоми, стресу та болю в спині.`,
    duration: "до 50хв",
    price: "600 грн ",
    benefits: [],
    indications: [],
    warnings: [],
  },
  {
    title: "Масаж шийно-комірцевої зони",
    img: "/massage.svg",
    description: `Локальний масаж, спрямований на зону шиї, плечей та верхньої частини спини. Особливо ефективний при головному болі напруги, запамороченні, втомі від роботи за комп’ютером. Покращує циркуляцію крові в області шиї, знімає спазми м’язів і сприяє загальному розслабленню.`,
    duration: "до 35хв",
    price: "400 грн ",
    benefits: [],
    indications: [],
    warnings: [],
  },
  {
    title: "Масаж всього тіла",
    img: "/massage.svg",
    description: `Комплексний розслаблюючий масаж, який охоплює всі зони тіла — спину, шию, руки, ноги, живіт. Допомагає нормалізувати нервову систему, зняти хронічну втому, поліпшити сон та кровообіг. Рекомендується при фізичному чи емоційному виснаженні. Ідеальний вибір для повного відновлення тіла.`,
    duration: "90хв",
    price: "1000 грн ",
    benefits: [],
    indications: [],
    warnings: [],
  },
];
