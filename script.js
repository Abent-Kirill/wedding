/*
  Wedding invitation configuration.
  Replace empty values below before publishing. No backend or analytics is used.
*/
const WEDDING_CONFIG = {
  date: "2027-03-03",
  startTime: "11:00",
  endTime: "22:00",
  venue: "Екатерининский зал и Villa Italy",
  address: "Краснодар, ул. Офицерская, 47; Краснодар, ул. Зиповская, 5/7",
  ceremonyAddress: "Краснодар, ул. Офицерская, 47",
  receptionAddress: "Краснодар, ул. Зиповская, 5/7",
  ceremonyMapUrl: "https://yandex.ru/maps/org/yekaterininskiy_zal/128066017990/",
  receptionMapUrl: "https://yandex.ru/maps/org/villa_italy/84701586529/",
  mapEmbedUrl: ""
};

const CONTACT_CONFIG = {
  // Use international format, e.g. "+14155552671". Keep empty until you are ready to publish a number.
  groomPhone: "+79887344194",
  bridePhone: "+790000004194",
  // Optional messenger link, e.g. "https://t.me/username".
  messengerUrl: "",
  messengerLabel: "@USERNAME"
};

const TRANSLATIONS = {
  ru: {
    metaTitle: "Кирилл & Екатерина — свадебное приглашение",
    metaDescription: "Свадьба Кирилла и Екатерины Абент-Смирновых — 3 марта 2027 года. План дня, адреса площадок и информация для гостей.",
    skip: "Перейти к содержанию", topLabel: "К началу страницы", mainNavLabel: "Основная навигация", mobileNavLabel: "Мобильная навигация", menuLabel: "Открыть меню", languageLabel: "Выбор языка",
    "nav.day": "План дня", "nav.locations": "Локации",
    "nav.program": "Программа", "nav.palette": "Палитра", "nav.details": "Гостям", "nav.contacts": "Контакты",
    "names.groom": "Кирилла", "names.bride": "Екатерины", "names.family": "Абент-Смирновых",
    "date.header": "03.03.2027", "date.placeholder": "03.03.2027", "date.action": "Добавить в календарь ↗", "date.calendarReady": "Добавить в календарь ↗", "date.unconfigured": "Дата свадьбы: 3 марта 2027 года. Если файл календаря не скачивается, проверьте настройки WEDDING_CONFIG в script.js.", "date.downloaded": "Календарь готов: откройте файл и сохраните оба события.",
    "calendar.nextDayDescription": "Отдых дома, шашлыки, бассейн и баня. Не забудьте купальники, полотенца и тапочки.",
    "calendar.nextDayTitle": "Продолжение праздника: отдых дома",
    "hero.eyebrow": "Приглашение на свадьбу", "hero.message": "С огромной радостью приглашаем вас разделить с нами один из самых важных дней нашей жизни.", "hero.cta": "Будем праздновать вместе", "hero.imageAlt": "Атмосферная свадебная церемония", "hero.photoCaption": "НАША ИСТОРИЯ", "hero.stamp": "С любовью", "hero.sideNote": "ДЕНЬ, КОТОРЫЙ ЗАПОМНИТСЯ · 2027",
    "intro.eyebrow": "ДОРОГИЕ НАШИ", "intro.title": "Самое ценное в этот день —<br><em>разделить его с вами.</em>", "intro.body": "Мы хотим, чтобы этот день запомнился теплом, красивыми моментами и людьми, которые дороги нашему сердцу. Здесь мы собрали всё, что поможет вам подготовиться к празднику и просто наслаждаться каждым мгновением.", "intro.signature": "С теплом, Кирилл и Екатерина",
    "day.eyebrow": "03 МАРТА 2027 · ПЛАН ДНЯ", "day.title": "Как пройдёт <em>наш день</em>", "day.aside": "Начинаем в 11:00.<br>На следующий день продолжаем отдыхать.", "day.note": "Будем рады провести с вами оба дня.",
    "day.nextDayBody": "Отдых дома, шашлыки, бассейн и баня. Не забудьте купальники, полотенца и тапочки.",
    "day.nextDayTitle": "Продолжаем отдыхать",
    "day.nextDayEyebrow": "СЛЕДУЮЩИЙ ДЕНЬ",
    "timeline.1.kicker": "01 / СБОР ГОСТЕЙ", "timeline.1.title": "Сбор гостей и выезд на трансфере", "timeline.1.body": "Собираемся и отправляемся на трансфере к месту церемонии.",
    "timeline.2.kicker": "02 / ЦЕРЕМОНИЯ", "timeline.2.title": "Церемония в Екатерининском зале", "timeline.2.body": "Офицерская улица, 47, Краснодар.",
    "timeline.3.kicker": "03 / ФОТОГРАФИИ", "timeline.3.title": "Фотосессия", "timeline.3.body": "Сохраним на память красивые моменты этого дня.",
    "timeline.4.kicker": "04 / ПРОГУЛКА", "timeline.4.title": "Прогулка", "timeline.4.body": "Немного времени для прогулки, общения и фотографий.",
    "timeline.5.kicker": "05 / БАНКЕТ", "timeline.5.title": "Банкет в Villa Italy", "timeline.5.body": "Зиповская улица, 5/7, Краснодар. Нас ждут ведущий, музыка, танцы и угощения.",
    "locations.eyebrow": "МЕСТА ВСТРЕЧИ", "locations.title": "Увидимся <em>здесь</em>", "locations.aside": "Сохраните карточки площадок,<br>чтобы быстро открыть их в Яндекс Картах.", "locations.ceremonyAlt": "Интерьер Екатерининского зала в Краснодаре", "locations.receptionAlt": "Интерьер банкетного зала Villa Italy", "locations.ceremonyLabel": "01 / ЦЕРЕМОНИЯ", "locations.receptionLabel": "02 / БАНКЕТ", "locations.ceremony": "ЦЕРЕМОНИЯ", "locations.reception": "БАНКЕТ", "locations.venuePlaceholder": "Екатерининский зал", "locations.receptionPlaceholder": "Villa Italy", "locations.venueAddressPlaceholder": "Краснодар, ул. Офицерская, 47", "locations.receptionAddressPlaceholder": "Краснодар, ул. Зиповская, 5/7", "locations.ceremonyNote": "Церемония начинается в 11:30.", "locations.receptionNote": "Банкет начинается в 14:00.", "locations.venueMapLink": "Открыть в Яндекс Картах", "locations.venueMapMissing": "Откройте карточку Екатерининского зала в Яндекс Картах.", "locations.receptionMapLink": "Открыть в Яндекс Картах", "locations.receptionMapMissing": "Откройте карточку Villa Italy в Яндекс Картах.",
    "map.eyebrow": "КАРТА ЛОКАЦИЙ", "map.title": "Локации на карте", "map.body": "Выберите нужную площадку в карточке и откройте её в Яндекс Картах.", "map.button": "Открыть Яндекс Карты", "map.placeholderTitle": "Откройте место на карте", "map.placeholderBody": "Ссылки на Яндекс Карты доступны в карточках площадок.",
    "palette.eyebrow": "ДРЕСС-КОД · ЦВЕТОВАЯ ПАЛИТРА", "palette.title": "Цвета нашего <em>дня</em>", "palette.body": "Дресс-код не обязателен, но очень желателен. Будем рады, если вы поддержите палитру свадьбы.", "palette.note": "Пожалуйста, избегайте жёлтого и оранжевого. Белый цвет оставляем невесте.", "palette.aria": "Цветовая палитра: молочный, грейж, угольный матовый и бордовый", "palette.cream": "Молочный",
    "palette.charcoal": "Угольный матовый",
    "palette.gray": "Серый", "palette.sage": "Грейж", "palette.rose": "Угольный матовый", "palette.wine": "Бордовый", "palette.finePrint": "Оттенки на экране могут немного отличаться от реальных цветов.",
    "program.imageAlt": "Праздничный декор и цветы", "program.imageNote": "МАЛЕНЬКИЕ ДЕТАЛИ", "program.eyebrow": "ПРИЯТНЫЕ МОМЕНТЫ", "program.title": "Что будет <em>на празднике</em>", "program.body": "Вас ждут церемония в красивом зале, банкет с ведущим и угощениями, музыка, танцы и встреча на следующий день.", "program.1.title": "Церемония в красивом зале", "program.1.body": "Торжественная церемония в Екатерининском зале.", "program.2.title": "Банкет в Villa Italy", "program.2.body": "Ведущий, алкоголь и разнообразные вкусности.", "program.3.title": "Музыка, танцы и фотограф", "program.3.body": "Музыка и танцы, а фотограф поможет сохранить моменты праздника.", "program.4.title": "Встреча на следующий день", "program.4.body": "Отдых дома, шашлыки, бассейн и баня.",
    "details.eyebrow": "НЕСКОЛЬКО СЛОВ ДЛЯ ВАС", "details.title": "Несколько важных <em>деталей</em>", "details.body": "Чтобы вам было комфортно, а нам спокойно, собрали несколько дружеских напоминаний.", "details.1.title": "Что взять с собой", "details.1.body": "Возьмите купальники, полотенца и тапочки: на следующий день планируем бассейн и баню.", "details.2.title": "Подарки", "details.2.body": "Будем рады подаркам в конвертах.", "details.3.title": "Дресс-код", "details.3.body": "Дресс-код не обязателен, но очень желателен. Будем рады, если вы поддержите нашу цветовую палитру.", "details.4.title": "Аллергии и питание", "details.4.body": "Если у вас есть аллергии или ограничения в питании, пожалуйста, сообщите нам заранее.", "details.5.title": "Алкоголь", "details.5.body": "Пожалуйста, определитесь заранее с алкоголем и сообщите нам свои предпочтения.", "details.6.title": "Размещение", "details.6.body": "Размещение и бронирование жилья каждый организует самостоятельно.", "details.note": "Если у вас возникнет любой вопрос, не стесняйтесь написать нам. Мы хотим, чтобы вам было спокойно и радостно с самого начала.",
    "invitation.eyebrow": "ВАШЕ ПРИГЛАШЕНИЕ", "invitation.title": "Важная информация <em>для гостей</em>", "invitation.plusOneKicker": "ПРИГЛАШЕНИЕ НА ДВОИХ", "invitation.plusOneTitle": "Вы можете прийти с +1", "invitation.plusOneBody": "Это приглашение распространяется на вас и одного сопровождающего. Будем рады разделить праздник с вами обоими.", "invitation.guideKicker": "ПУТЕВОДИТЕЛЬ ПО СВАДЬБЕ", "invitation.guideTitle": "Ваш путеводитель по свадьбе", "invitation.guideBody": "Этот сайт — ваш путеводитель по нашему празднику. Актуальная информация, уточнения и возможные изменения будут появляться здесь — заглядывайте перед поездкой.",
    "contacts.eyebrow": "МЫ НА СВЯЗИ", "contacts.title": "До встречи <em>на свадьбе</em>", "contacts.body": "Если нужно что-то уточнить по дороге, расписанию или организационным моментам, напишите нам.", "contacts.groom": "Кирилл", "contacts.bride": "Екатерина", "contacts.messenger": "Мессенджер", "contacts.phonePlaceholder": "Добавьте номер телефона", "contacts.messengerPlaceholder": "Добавьте ссылку на мессенджер", "contacts.unconfigured": "Добавьте номер или ссылку в CONTACT_CONFIG в файле script.js.",
    "footer.tagline": "С любовью и в предвкушении встречи.", "footer.family": "АБЕНТ-СМИРНОВЫ · 2027"
  },
  en: {
    metaTitle: "Kirill & Ekaterina — Wedding Invitation",
    metaDescription: "The wedding of Kirill and Ekaterina Abent-Smirnov on 3 March 2027. Schedule, venue addresses, and useful information for guests.",
    skip: "Skip to content", topLabel: "Back to top", mainNavLabel: "Main navigation", mobileNavLabel: "Mobile navigation", menuLabel: "Open menu", languageLabel: "Choose language",
    "nav.day": "Schedule", "nav.locations": "Locations",
    "nav.program": "Programme", "nav.palette": "Colour palette", "nav.details": "Guest notes", "nav.contacts": "Contacts",
    "names.groom": "Kirill", "names.bride": "Ekaterina", "names.family": "Abent-Smirnov",
    "date.header": "3 March 2027", "date.placeholder": "3 March 2027", "date.action": "Add to calendar ↗", "date.calendarReady": "Add to calendar ↗", "date.unconfigured": "The wedding date is 3 March 2027. If the calendar file does not download, check WEDDING_CONFIG in script.js.", "date.downloaded": "Your calendar file is ready. Open it to save both events.",
    "calendar.nextDayDescription": "A relaxed day at home with barbecue, a swimming pool, and a sauna. Bring swimwear, towels, and slippers.",
    "calendar.nextDayTitle": "Next-day gathering at home",
    "hero.eyebrow": "Wedding invitation", "hero.message": "We would be absolutely delighted to have you with us for one of the most meaningful days of our lives.", "hero.cta": "Let’s celebrate together", "hero.imageAlt": "An atmospheric wedding ceremony", "hero.photoCaption": "OUR STORY", "hero.stamp": "With love", "hero.sideNote": "A DAY TO REMEMBER · 2027",
    "intro.eyebrow": "DEAR FRIENDS AND FAMILY", "intro.title": "The most precious part of this day is —<br><em>sharing it with you.</em>", "intro.body": "We hope this day will be filled with warmth, beautiful moments, and the people closest to our hearts. Here you will find everything you need to prepare for the celebration and simply enjoy every moment.", "intro.signature": "With love, Kirill & Ekaterina",
    "day.eyebrow": "03 MARCH 2027 · THE SCHEDULE", "day.title": "How <em>our day</em> will unfold", "day.aside": "We begin at 11:00.<br>The celebration continues the next day.", "day.note": "We look forward to spending both days with you.",
    "day.nextDayBody": "A relaxed day at home with barbecue, a swimming pool, and a sauna. Remember to bring swimwear, towels, and slippers.",
    "day.nextDayTitle": "Let’s keep relaxing",
    "day.nextDayEyebrow": "THE NEXT DAY",
    "timeline.1.kicker": "01 / GATHERING", "timeline.1.title": "Guest gathering & shuttle departure", "timeline.1.body": "We will meet and travel together by shuttle to the ceremony venue.",
    "timeline.2.kicker": "02 / CEREMONY", "timeline.2.title": "Ceremony at Yekaterininskiy Hall", "timeline.2.body": "47 Ofitserskaya Street, Krasnodar.",
    "timeline.3.kicker": "03 / PHOTOS", "timeline.3.title": "Photo session", "timeline.3.body": "We will capture beautiful memories of the day together.",
    "timeline.4.kicker": "04 / A WALK", "timeline.4.title": "A walk", "timeline.4.body": "Time for a walk, conversation, and more photos.",
    "timeline.5.kicker": "05 / RECEPTION", "timeline.5.title": "Reception at Villa Italy", "timeline.5.body": "5/7 Zipovskaya Street, Krasnodar. A host, music, dancing, and delicious food await us.",
    "locations.eyebrow": "OUR VENUES", "locations.title": "We’ll meet <em>here</em>", "locations.aside": "Save the venue cards in advance<br>to open them in Yandex Maps.", "locations.ceremonyAlt": "Interior of Yekaterininskiy Hall in Krasnodar", "locations.receptionAlt": "Interior of the Villa Italy banquet hall", "locations.ceremonyLabel": "01 / CEREMONY", "locations.receptionLabel": "02 / RECEPTION", "locations.ceremony": "CEREMONY", "locations.reception": "RECEPTION", "locations.venuePlaceholder": "Yekaterininskiy Hall",
    "locations.venueAddressPlaceholder": "47 Ofitserskaya Street, Krasnodar, Russia", "locations.receptionPlaceholder": "Villa Italy",
    "locations.receptionAddressPlaceholder": "5/7 Zipovskaya Street, Krasnodar, Russia", "locations.addressPlaceholder": "[ City, street, building ]", "locations.ceremonyNote": "The ceremony begins at 11:30 AM.",
    "locations.venueMapLink": "Open in Yandex Maps", "locations.receptionNote": "The reception begins at 2:00 PM.",
    "locations.receptionMapLink": "Open in Yandex Maps", "locations.mapLink": "Open in Yandex Maps", "locations.mapMissing": "Add a map link in script.js.",
    "map.eyebrow": "VENUE MAPS", "map.title": "Venues on the map", "map.body": "Choose a venue card to open it in Yandex Maps.", "map.button": "Open Yandex Maps", "map.placeholderTitle": "Open a venue on the map", "map.placeholderBody": "Yandex Maps links are available in the venue cards.",
    "palette.eyebrow": "DRESS CODE · COLOUR PALETTE", "palette.title": "The colours of <em>our day</em>", "palette.body": "The dress code is optional, but highly encouraged. We would love it if you followed our wedding palette.", "palette.note": "Please avoid yellow and orange. We are saving white for the bride.", "palette.aria": "Wedding colour palette: cream, gray, matte charcoal, and burgundy", "palette.cream": "Cream",
    "palette.charcoal": "Matte charcoal",
    "palette.gray": "Grey", "palette.sage": "Grey", "palette.rose": "Matte charcoal", "palette.wine": "Burgundy", "palette.finePrint": "Colours may look slightly different on screen than in real life.",
    "program.imageAlt": "Wedding decor and flowers", "program.imageNote": "THE LITTLE THINGS", "program.eyebrow": "A FEW GOOD THINGS", "program.title": "What to expect <em>at the celebration</em>", "program.body": "The day will include a ceremony in a beautiful hall, a hosted banquet with drinks and food, music, dancing, and a get-together the next day.", "program.1.title": "Ceremony in a beautiful hall", "program.1.body": "A special ceremony at Yekaterininskiy Hall.", "program.2.title": "Banquet at Villa Italy", "program.2.body": "A host, alcoholic drinks, and a variety of delicious food.", "program.3.title": "Music, dancing & a photographer", "program.3.body": "Music and dancing, with a photographer to capture the moments.", "program.4.title": "The next-day get-together", "program.4.body": "A relaxed day at home with barbecue, a pool, and a sauna.",
    "details.eyebrow": "A LITTLE NOTE FOR YOU", "details.title": "A few important <em>details</em>", "details.body": "A few friendly notes to help you feel comfortable and help us keep everything running smoothly.", "details.1.title": "What to bring", "details.1.body": "Please bring swimwear, towels, and slippers for the pool and sauna the next day.", "details.2.title": "Gifts", "details.2.body": "Gifts in envelopes are preferred and appreciated.", "details.3.title": "Dress code", "details.3.body": "The dress code is not mandatory, but highly encouraged. We would love you to follow our colour palette.", "details.4.title": "Allergies & dietary needs", "details.4.body": "Please let us know in advance if you have any allergies or dietary restrictions.", "details.5.title": "Alcohol preferences", "details.5.body": "Please decide in advance whether you plan to drink alcohol and let us know your preferences.", "details.6.title": "Accommodation", "details.6.body": "Guests are responsible for arranging their own accommodation.", "details.note": "If you have any questions, please feel free to message us. We want you to feel relaxed and happy from the very beginning.",
    "invitation.eyebrow": "YOUR INVITATION", "invitation.title": "A few important <em>notes for guests</em>", "invitation.plusOneKicker": "YOUR PLUS-ONE", "invitation.plusOneTitle": "You’re welcome to bring a +1", "invitation.plusOneBody": "This invitation is valid for you and one accompanying guest. We’d be delighted to celebrate with both of you.", "invitation.guideKicker": "YOUR WEDDING GUIDE", "invitation.guideTitle": "Your guide to the wedding", "invitation.guideBody": "This website is your guide to our celebration. The latest information, helpful updates, and any changes will be posted here, so please check back before the event.",
    "contacts.eyebrow": "WE’RE HERE FOR YOU", "contacts.title": "See you <em>at the wedding</em>", "contacts.body": "If you need help with directions, the schedule, or any practical details, just get in touch.", "contacts.groom": "Kirill", "contacts.bride": "Ekaterina", "contacts.messenger": "Messenger", "contacts.phonePlaceholder": "Add phone number", "contacts.messengerPlaceholder": "Add messenger link", "contacts.unconfigured": "Add a number or link in CONTACT_CONFIG in script.js.",
    "footer.tagline": "With love and looking forward to seeing you.", "footer.family": "ABENT-SMIRNOV · 2027"
  },
  he: {
    metaTitle: "קיריל ויקטרינה — הזמנה לחתונה",
    metaDescription: "החתונה של קיריל ויקטרינה אבנט-סמירנוב ב־3 במרץ 2027. לוח זמנים, כתובות המקומות ומידע שימושי לאורחים.",
    skip: "דלגו לתוכן", topLabel: "חזרה לראש העמוד", mainNavLabel: "ניווט ראשי", mobileNavLabel: "ניווט לנייד", menuLabel: "פתיחת התפריט", languageLabel: "בחירת שפה",
    "nav.day": "לוח הזמנים", "nav.locations": "מקומות",
    "nav.program": "התוכנית", "nav.palette": "פלטת צבעים", "nav.details": "מידע לאורחים", "nav.contacts": "יצירת קשר",
    "names.groom": "קיריל", "names.bride": "יקטרינה", "names.family": "אבנט-סמירנוב",
    "date.header": "3 במרץ 2027", "date.placeholder": "3 במרץ 2027", "date.action": "הוספה ליומן ↗", "date.calendarReady": "הוספה ליומן ↗", "date.unconfigured": "תאריך החתונה הוא 3 במרץ 2027. אם קובץ היומן לא יורד, בדקו את WEDDING_CONFIG בקובץ script.js.", "date.downloaded": "קובץ היומן מוכן. פתחו אותו כדי לשמור את שני האירועים.",
    "calendar.nextDayDescription": "יום רגוע בבית עם על האש, בריכה וסאונה. הביאו בגדי ים, מגבות ונעלי בית.",
    "calendar.nextDayTitle": "מפגש למחרת בבית",
    "hero.eyebrow": "הזמנה לחתונה", "hero.message": "נשמח מאוד שתצטרפו אלינו לאחד הימים החשובים והמרגשים בחיינו.", "hero.cta": "בואו נחגוג יחד", "hero.imageAlt": "אווירה רומנטית בטקס חתונה", "hero.photoCaption": "הסיפור שלנו", "hero.stamp": "באהבה", "hero.sideNote": "יום בלתי נשכח · 2027",
    "intro.eyebrow": "חברים ומשפחה יקרים", "intro.title": "הדבר היקר ביותר ביום הזה הוא —<br><em>לחלוק אותו איתכם.</em>", "intro.body": "אנחנו רוצים שהיום הזה יהיה מלא בחום, ברגעים יפים ובאנשים הקרובים ללבנו. ריכזנו כאן את כל המידע שיעזור לכם להתכונן לחגיגה וליהנות מכל רגע.", "intro.signature": "באהבה, קיריל ויקטרינה",
    "day.eyebrow": "3 במרץ 2027 · לוח הזמנים", "day.title": "כך ייראה <em>היום שלנו</em>", "day.aside": "מתחילים בשעה 11:00.<br>נמשיך לחגוג גם למחרת.", "day.note": "נשמח לבלות איתכם את שני הימים.",
    "day.nextDayBody": "יום רגוע בבית עם על האש, בריכה וסאונה. זכרו להביא בגדי ים, מגבות ונעלי בית.",
    "day.nextDayTitle": "ממשיכים לנוח ולבלות",
    "day.nextDayEyebrow": "למחרת",
    "timeline.1.kicker": "01 / מפגש", "timeline.1.title": "מפגש האורחים ויציאה בהסעה", "timeline.1.body": "ניפגש וניסע יחד בהסעה למקום הטקס.",
    "timeline.2.kicker": "02 / טקס", "timeline.2.title": "טקס באולם יקטרינינסקי", "timeline.2.body": "רחוב אופיצרסקאיה 47, קרסנודר.",
    "timeline.3.kicker": "03 / צילומים", "timeline.3.title": "סשן צילומים", "timeline.3.body": "ננצור יחד רגעים יפים מהיום הזה.",
    "timeline.4.kicker": "04 / טיול", "timeline.4.title": "טיול קצר", "timeline.4.body": "זמן לטיול, לשיחה ולתמונות נוספות.",
    "timeline.5.kicker": "05 / סעודה", "timeline.5.title": "הסעודה החגיגית ב־Villa Italy", "timeline.5.body": "רחוב זיפובסקאיה 5/7, קרסנודר. מחכים לנו מנחה, מוזיקה, ריקודים ואוכל טעים.",
    "locations.eyebrow": "מקומות המפגש", "locations.title": "ניפגש <em>כאן</em>", "locations.aside": "שמרו את קישורי המקומות מראש<br>כדי לפתוח אותם ב־Yandex Maps.", "locations.ceremonyAlt": "פנים אולם יקטרינינסקי בקרסנודר", "locations.receptionAlt": "פנים אולם האירועים Villa Italy", "locations.ceremonyLabel": "01 / טקס", "locations.receptionLabel": "02 / סעודה", "locations.ceremony": "טקס החתונה", "locations.reception": "סעודה חגיגית", "locations.venuePlaceholder": "אולם יקטרינינסקי",
    "locations.venueAddressPlaceholder": "רחוב אופיצרסקאיה 47, קרסנודר, רוסיה", "locations.receptionPlaceholder": "Villa Italy",
    "locations.receptionAddressPlaceholder": "רחוב זיפובסקאיה 5/7, קרסנודר, רוסיה", "locations.addressPlaceholder": "[ עיר, רחוב, מספר ]", "locations.ceremonyNote": "הטקס מתחיל בשעה 11:30.",
    "locations.venueMapLink": "פתיחה ב־Yandex Maps", "locations.receptionNote": "הסעודה מתחילה בשעה 14:00.",
    "locations.receptionMapLink": "פתיחה ב־Yandex Maps", "locations.mapLink": "הוראות הגעה", "locations.mapMissing": "הוסיפו קישור למפה בקובץ script.js.",
    "map.eyebrow": "מפות המקומות", "map.title": "המקומות על המפה", "map.body": "בחרו כרטיס מקום כדי לפתוח אותו ב־Yandex Maps.", "map.button": "פתיחת Yandex Maps", "map.placeholderTitle": "פתיחת מקום במפה", "map.placeholderBody": "קישורים ל־Yandex Maps מופיעים בכרטיסי המקומות.",
    "palette.eyebrow": "קוד לבוש · פלטת צבעים", "palette.title": "הצבעים של <em>היום שלנו</em>", "palette.body": "קוד הלבוש אינו חובה, אך מומלץ מאוד. נשמח אם תבחרו בגדים שמשתלבים בפלטת הצבעים שלנו.", "palette.note": "נא להימנע מצהוב ומכתום. נשאיר את הצבע הלבן לכלה.", "palette.aria": "פלטת צבעים לחתונה: שמנת, אפור, פחם מט ובורדו", "palette.cream": "שמנת",
    "palette.charcoal": "פחם מט",
    "palette.gray": "אפור", "palette.sage": "גרייג׳", "palette.rose": "פחם מט", "palette.wine": "בורדו", "palette.finePrint": "הצבעים על המסך עשויים להיראות מעט שונים מהצבעים במציאות.",
    "program.imageAlt": "עיצוב חגיגי ופרחים", "program.imageNote": "הפרטים הקטנים", "program.eyebrow": "רגעים מיוחדים", "program.title": "מה מחכה לנו <em>בחגיגה</em>", "program.body": "בתוכנית: טקס באולם יפה, סעודה חגיגית עם מנחה וכיבוד, מוזיקה, ריקודים ומפגש נוסף למחרת.", "program.1.title": "טקס באולם יפה", "program.1.body": "טקס חגיגי באולם יקטרינינסקי.", "program.2.title": "סעודה חגיגית ב־Villa Italy", "program.2.body": "מנחה, משקאות אלכוהוליים ומגוון מאכלים טעימים.", "program.3.title": "מוזיקה, ריקודים וצלם", "program.3.body": "מוזיקה וריקודים, וצלם שיתעד את הרגעים המיוחדים.", "program.4.title": "מפגש למחרת", "program.4.body": "מנוחה בבית, על האש, בריכה וסאונה.",
    "details.eyebrow": "כמה מילים בשבילכם", "details.title": "כמה <em>פרטים חשובים</em>", "details.body": "כדי שיהיה לכם נוח ולנו שקט, ריכזנו כמה תזכורות קטנות וידידותיות.", "details.1.title": "מה להביא", "details.1.body": "נא להביא בגדי ים, מגבות ונעלי בית לבריכה ולסאונה ביום שלמחרת.", "details.2.title": "מתנות", "details.2.body": "נשמח לקבל מתנות במעטפות.", "details.3.title": "קוד לבוש", "details.3.body": "קוד הלבוש אינו חובה, אך מומלץ מאוד. נשמח אם תתאימו את הלבוש לפלטת הצבעים.", "details.4.title": "אלרגיות והגבלות מזון", "details.4.body": "אם יש לכם אלרגיות או הגבלות תזונתיות, אנא עדכנו אותנו מראש.", "details.5.title": "העדפות לגבי אלכוהול", "details.5.body": "אנא החליטו מראש אם תרצו לשתות אלכוהול ועדכנו אותנו בהעדפותיכם.", "details.6.title": "לינה", "details.6.body": "כל אורח אחראי לארגן את מקום הלינה שלו באופן עצמאי.", "details.note": "אם יש לכם שאלה, אל תהססו לכתוב לנו. חשוב לנו שתרגישו בנוח ובשמחה כבר מההתחלה.",
    "invitation.eyebrow": "ההזמנה שלכם", "invitation.title": "כמה <em>פרטים חשובים לאורחים</em>", "invitation.plusOneKicker": "מלווה אחד (+1)", "invitation.plusOneTitle": "אפשר להגיע עם מלווה אחד", "invitation.plusOneBody": "ההזמנה מיועדת לכם ולאורח או לאורחת נוספים. נשמח לחגוג יחד עם שניכם.", "invitation.guideKicker": "המדריך לחתונה", "invitation.guideTitle": "המדריך שלכם לחתונה", "invitation.guideBody": "האתר הזה הוא המדריך שלכם לחגיגה שלנו. מידע מעודכן, הבהרות ושינויים אפשריים יפורסמו כאן, לכן כדאי לבדוק שוב לפני האירוע.",
    "contacts.eyebrow": "אנחנו כאן בשבילכם", "contacts.title": "נתראה <em>בחתונה</em>", "contacts.body": "אם תרצו לברר משהו לגבי הדרך, לוח הזמנים או פרטים ארגוניים, כתבו לנו.", "contacts.groom": "קיריל", "contacts.bride": "יקטרינה", "contacts.messenger": "אפליקציית הודעות", "contacts.phonePlaceholder": "הוסיפו מספר טלפון", "contacts.messengerPlaceholder": "הוסיפו קישור להודעות", "contacts.unconfigured": "הוסיפו מספר או קישור ב-CONTACT_CONFIG שבקובץ script.js.",
    "footer.tagline": "באהבה ומחכים כבר לראותכם.", "footer.family": "אבנט-סמירנוב · 2027"
  }
};

const LANGUAGE_LOCALES = { ru: "ru-RU", en: "en-US", he: "he-IL" };
let currentLanguage = "ru";

function getText(key) {
  return TRANSLATIONS[currentLanguage]?.[key] ?? TRANSLATIONS.ru[key] ?? key;
}

function applyLanguage(language) {
  if (!TRANSLATIONS[language]) return;
  currentLanguage = language;
  const isHebrew = language === "he";
  document.documentElement.lang = language;
  document.documentElement.dir = isHebrew ? "rtl" : "ltr";
  document.documentElement.dataset.language = language;
  document.title = getText("metaTitle");
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = getText("metaDescription");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key === "date.header" || key === "date.placeholder") return;
    if (element.hasAttribute("data-contact-value")) return;
    element.textContent = getText(key);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = getText(element.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", getText(element.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const [attribute, key] = element.dataset.i18nAttr.split(":");
    element.setAttribute(attribute, getText(key));
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  updateInitials();
  updateDateLabels();
  updateContactLinks();
  updateMap();
}

function updateInitials() {
  const initials = currentLanguage === "he" ? ["ק", "י"] : currentLanguage === "en" ? ["K", "E"] : ["К", "Е"];
  document.querySelectorAll(".wordmark").forEach((mark) => {
    mark.innerHTML = `${initials[0]} <span>&</span> ${initials[1]}`;
  });
  document.querySelectorAll(".stamp-initials").forEach((mark) => {
    mark.textContent = `${initials[0]} & ${initials[1]}`;
  });
  const contactArt = document.querySelector(".contact-art");
  if (contactArt) {
    const letters = contactArt.querySelectorAll("span");
    if (letters[0]) letters[0].textContent = initials[0];
    if (letters[1]) letters[1].textContent = initials[1];
  }
}

function dateIsConfigured() {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(WEDDING_CONFIG.date)) return false;
  const [year, month, day] = WEDDING_CONFIG.date.split("-").map(Number);
  const check = new Date(Date.UTC(year, month - 1, day));
  return check.getUTCFullYear() === year && check.getUTCMonth() === month - 1 && check.getUTCDate() === day;
}

function updateDateLabels() {
  const headerDate = document.querySelector('[data-i18n="date.header"]');
  const displayDate = document.getElementById("display-date");
  if (dateIsConfigured()) {
    const [year, month, day] = WEDDING_CONFIG.date.split("-");
    const formatted = `${day}.${month}.${year}`;
    if (headerDate) headerDate.textContent = formatted;
    if (displayDate) displayDate.textContent = formatted;
    document.querySelectorAll(".calendar-trigger").forEach(button => button.setAttribute("aria-label", `${formatted}. ${getText("date.calendarReady")}`));
  } else {
    if (headerDate) headerDate.textContent = getText("date.header");
    if (displayDate) displayDate.textContent = getText("date.placeholder");
    document.querySelectorAll(".calendar-trigger").forEach(button => button.setAttribute("aria-label", getText("date.header")));
  }
}

function icsEscape(value) {
  return String(value ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function icsLocalDateTime(dateString, timeString) {
  const [year, month, day] = dateString.split("-");
  const [hour = "14", minute = "00"] = (timeString || "14:00").split(":");
  return `${year}${month}${day}T${hour.padStart(2, "0")}${minute.padStart(2, "0")}00`;
}

function calendarDateOnly(dateString) {
  return String(dateString).replace(/-/g, "");
}

function addDaysToDate(dateString, days) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + days));
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;
}

function downloadCalendarEvent() {
  const status = document.getElementById("calendar-status");
  if (!dateIsConfigured()) {
    if (status) status.textContent = getText("date.unconfigured");
    return;
  }

  const nextDay = addDaysToDate(WEDDING_CONFIG.date, 1);
  const dayAfterNext = addDaysToDate(WEDDING_CONFIG.date, 2);
  const start = icsLocalDateTime(WEDDING_CONFIG.date, WEDDING_CONFIG.startTime);
  const end = icsLocalDateTime(WEDDING_CONFIG.date, WEDDING_CONFIG.endTime);
  const now = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const title = currentLanguage === "he"
    ? "החתונה של קיריל ויקטרינה אבנט-סמירנוב"
    : currentLanguage === "en"
      ? "Kirill & Ekaterina Abent-Smirnov Wedding"
      : "Свадьба Кирилла и Екатерины Абент-Смирновых";
  const desc = currentLanguage === "he"
    ? "טקס בשעה 11:30, צילומים, טיול וסעודה חגיגית ב־Villa Italy בשעה 14:00. למחרת: מנוחה, על האש, בריכה וסאונה."
    : currentLanguage === "en"
      ? "11:30 AM ceremony, photo session, a walk, and a reception at Villa Italy at 2:00 PM. The next day: relaxing at home, barbecue, pool, and sauna."
      : "В 11:00 сбор и выезд на трансфере, в 11:30 церемония, затем фотосессия, прогулка и банкет в Villa Italy в 14:00. На следующий день: отдых дома, шашлыки, бассейн и баня.";
  const nextTitle = getText("calendar.nextDayTitle");
  const nextDescription = getText("calendar.nextDayDescription");
  const location = [WEDDING_CONFIG.venue, WEDDING_CONFIG.address].filter(Boolean).join(", ");
  const nextDayEnd = calendarDateOnly(dayAfterNext);
  const ics = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Abent-Smirnov Wedding//Invitation//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
    "BEGIN:VEVENT", `UID:wedding-${WEDDING_CONFIG.date}-kirill-ekaterina@abent-smirnov`, `DTSTAMP:${now}`,
    `DTSTART:${start}`, `DTEND:${end}`, `SUMMARY:${icsEscape(title)}`, `DESCRIPTION:${icsEscape(desc)}`,
    ...(location ? [`LOCATION:${icsEscape(location)}`] : []), "END:VEVENT",
    "BEGIN:VEVENT", `UID:wedding-nextday-${nextDay}-kirill-ekaterina@abent-smirnov`, `DTSTAMP:${now}`,
    `DTSTART;VALUE=DATE:${calendarDateOnly(nextDay)}`, `DTEND;VALUE=DATE:${nextDayEnd}`,
    `SUMMARY:${icsEscape(nextTitle)}`, `DESCRIPTION:${icsEscape(nextDescription)}`,
    "END:VEVENT", "END:VCALENDAR", ""
  ].join("\r\n");
  const blob = new Blob(["\uFEFF", ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "kirill-ekaterina-wedding.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1500);
  if (status) status.textContent = getText("date.downloaded");
}

function sanitizePhone(value) {
  const cleaned = String(value || "").replace(/[^\d+]/g, "");
  return /^\+\d{7,15}$/.test(cleaned) ? cleaned : "";
}

function updateContactLinks() {
  document.querySelectorAll("[data-contact]").forEach((link) => {
    const key = link.dataset.contact;
    const valueElement = link.querySelector("[data-contact-value]");
    const value = CONTACT_CONFIG[key] || "";
    if (key.endsWith("Phone")) {
      const phone = sanitizePhone(value);
      if (phone) {
        link.href = `tel:${phone}`;
        link.classList.remove("is-unconfigured");
        if (valueElement) valueElement.textContent = value.trim();
      } else {
        link.href = "#contacts";
        link.classList.add("is-unconfigured");
        if (valueElement) valueElement.textContent = getText("contacts.phonePlaceholder");
      }
    } else if (key === "messengerUrl") {
      const url = /^https:\/\//i.test(value) ? value : "";
      if (url) {
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.classList.remove("is-unconfigured");
        if (valueElement) valueElement.textContent = CONTACT_CONFIG.messengerLabel || url;
      } else {
        link.href = "#contacts";
        link.removeAttribute("target");
        link.classList.add("is-unconfigured");
        if (valueElement) valueElement.textContent = getText("contacts.messengerPlaceholder");
      }
    }
  });
}

function updateMap() {
  const links = {
    ceremony: WEDDING_CONFIG.ceremonyMapUrl || (WEDDING_CONFIG.ceremonyAddress ? `https://yandex.ru/maps/?text=${encodeURIComponent(WEDDING_CONFIG.ceremonyAddress)}` : ""),
    reception: WEDDING_CONFIG.receptionMapUrl || (WEDDING_CONFIG.receptionAddress ? `https://yandex.ru/maps/?text=${encodeURIComponent(WEDDING_CONFIG.receptionAddress)}` : ""),
    main: WEDDING_CONFIG.mapEmbedUrl || (WEDDING_CONFIG.address ? `https://yandex.ru/maps/?text=${encodeURIComponent(WEDDING_CONFIG.address)}` : "")
  };
  document.querySelectorAll(".map-link").forEach((link) => {
    const url = links[link.dataset.map] || "";
    if (url) {
      link.href = url;
      link.classList.remove("is-unconfigured");
      link.removeAttribute("aria-disabled");
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "#locations";
      link.classList.add("is-unconfigured");
      link.setAttribute("aria-disabled", "true");
    }
  });
}

function setupRevealAnimations() {
  const targets = document.querySelectorAll(".reveal, .timeline-item, .location-card, .swatch, .detail-card, .editorial-list li");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    targets.forEach(target => target.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        instance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });
  targets.forEach((target, index) => {
    target.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    observer.observe(target);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
  document.querySelectorAll(".calendar-trigger").forEach(button => button.addEventListener("click", downloadCalendarEvent));
  document.querySelectorAll("[data-contact], .map-link").forEach(link => link.addEventListener("click", (event) => {
    if (!link.classList.contains("is-unconfigured")) return;
    if (link.hasAttribute("aria-disabled") || link.dataset.contact) {
      event.preventDefault();
      const contactStatus = document.getElementById("contact-status");
      const calendarStatus = document.getElementById("calendar-status");
      const target = link.dataset.contact ? contactStatus : link.dataset.map ? document.getElementById("map-status") : calendarStatus;
      if (target) target.textContent = link.dataset.contact ? getText("contacts.unconfigured") : getText("locations.mapMissing");
    }
  }));
  applyLanguage("ru");
  setupRevealAnimations();

  const mobileMenu = document.querySelector(".mobile-nav");
  document.querySelectorAll(".mobile-nav nav a").forEach(link => link.addEventListener("click", () => { if (mobileMenu) mobileMenu.open = false; }));
});
