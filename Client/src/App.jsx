import { useLayoutEffect, useState } from "react";
import catHero from "./assets/golden-cat-hero.png";
import catpuccinoLogo from "./assets/catpuccino-mark.png";
import curvedLine from "./assets/curved-line.png";
import sleepingCat from "./assets/sleeping-cat.png";
import catValeri from "./assets/cat-valeri.png";
import catMalva from "./assets/cat-malva.png";
import catNyusha from "./assets/cat-nyusha.png";
import catSunny from "./assets/cat-sunny.png";
import catTaiota from "./assets/cat-taiota.png";
import catFelichita from "./assets/cat-felichita.png";
import catDiva from "./assets/cat-diva.png";
import catAngel from "./assets/cat-angel.png";
import telegramIcon from "./assets/icon-telegram.png";
import vkIcon from "./assets/icon-vk.png";
import phoneIcon from "./assets/icon-phone.png";

const HERO_IMAGE_WIDTH = 1122;
const HERO_IMAGE_HEIGHT = 1402;

const photoMarks = [
  "photo-mark photo-mark--one",
  "photo-mark photo-mark--two",
  "photo-mark photo-mark--top-middle",
  "photo-mark photo-mark--three",
  "photo-mark photo-mark--four",
  "photo-mark photo-mark--five",
];

const aboutPaws = [
  "about-paw about-paw--left-one",
  "about-paw about-paw--left-two",
  "about-paw about-paw--left-three",
  "about-paw about-paw--right-one",
  "about-paw about-paw--right-two",
  "about-paw about-paw--right-three",
];

const cats = [
  {
    name: "Валери",
    description: "Зеленоглазка, 4 годика",
    hoverDescription:
      "Любит встречать гостей у входа и первым проверять все новые коробки. Спокойный, важный и очень обаятельный кот с королевскими манерами.",
    image: catValeri,
  },
  {
    name: "Мальва",
    description: "Нежный цветочек, 1.5 годика",
    hoverDescription:
      "Нежная любительница солнечных пятен и тихих игр. Обожает мурлыкать рядом с людьми и устраиваться на самых мягких подушках.",
    image: catMalva,
  },
  {
    name: "Нюша",
    description: "Пёстрая красавица, 4 годика",
    hoverDescription:
      "Весёлая исследовательница, которая всегда находит самые интересные места в комнате. Любит игрушки, внимание и иногда притворяется очень серьёзным.",
    image: catNyusha,
  },
  {
    name: "Санни",
    description: "Санёк-батон, 5 лет",
    hoverDescription:
      "Изящный и ласковый кот, которая любит наблюдать за всем с высоты. Ценит спокойствие, уют и нежные поглаживания за ушком.",
    image: catSunny,
  },
  {
    name: "Тайота",
    description: "Болунья, 1 годик",
    hoverDescription:
      "Серьёзный и внимательный хранитель порядка. Любит наблюдать за всем происходящим и встречать гостей с достойным спокойствием.",
    image: catTaiota,
  },
  {
    name: "Феличита",
    description: "Скромняшка, 4 годика",
    hoverDescription:
      "Большой добряк с внушительным видом и мягким характером. Несмотря на серьёзный образ, внутри он остаётся ласковым и игривым котёнком.",
    image: catFelichita,
  },
  {
    name: "Дива",
    description: "Почесуша, 2 годика",
    hoverDescription:
      "Весёлый проказник, который обожает игры, шумные забавы и кошачьи баталии. Всегда готов поднять настроение и устроить маленькое приключение.",
    image: catDiva,
  },
  {
    name: "Анхель",
    description: "Игрулька, 3.5 годика",
    hoverDescription:
      "В детстве был робким малышом, а теперь вырос в уверенного и элегантного кота. Очень любит быть на руках и ценит внимание.",
    image: catAngel,
  },
];

const priceCards = [
  {
    title: "Будний день",
    price: "500 ₽",
    period: "1 час",
    features: [
      "Общение с котиками",
      "Напитки включены",
      "Настольные игры",
    ],
    note: "Каждый последующий час 150 ₽",
  },
  {
    title: "Выходной",
    price: "650 ₽",
    period: "1 час",
    features: [
      "Общение с котиками",
      "Напитки включены",
      "Настольные игры",
    ],
    note: "Каждый последующий час 150 ₽",
    highlighted: true,
  },
  {
    title: "Безлимит",
    price: "1 200 ₽",
    period: "весь день",
    features: ["Можно работать удалённо", "Консольные игры", "Максимум мурчания"],
  },
];

const scheduleItems = [
  ["Пн", "15:00 - 21:00"],
  ["Вт", "12:00 - 21:00"],
  ["Ср", "12:00 - 21:00"],
  ["Чт", "15:00 - 21:00"],
  ["Пт", "12:00 - 21:00"],
  ["Сб", "12:00 - 21:00"],
  ["Вс", "12:00 - 21:00"],
];

const address = {
  title: "МурМяу на Первомайской",
  street: "Липецк, улица Первомайская, 59А",
  phone: "+7 (980) 359-01-68",
  mapUrl:
    "https://yandex.ru/map-widget/v1/?mode=search&text=%D0%9C%D1%83%D1%80%D0%B3%D1%80%D0%B0%D0%B4%2C%20%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA%2C%20%D0%9F%D0%B5%D1%80%D0%B2%D0%BE%D0%BC%D0%B0%D0%B9%D1%81%D0%BA%D0%B0%D1%8F%2059%D0%90&z=16",
  openUrl:
    "https://yandex.ru/maps/?text=%D0%9C%D1%83%D1%80%D0%B3%D1%80%D0%B0%D0%B4%2C%20%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA%2C%20%D0%9F%D0%B5%D1%80%D0%B2%D0%BE%D0%BC%D0%B0%D0%B9%D1%81%D0%BA%D0%B0%D1%8F%2059%D0%90",
};

const contacts = [
  {
    label: "Телеграм-канал",
    href: "https://t.me/",
    icon: telegramIcon,
  },
  {
    label: "Группа ВКонтакте",
    href: "https://vk.com/",
    icon: vkIcon,
  },
  {
    label: "+7 (980) 359-01-68",
    href: "tel:+79803590168",
    icon: phoneIcon,
  },
];

export function App() {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useLayoutEffect(() => {
    const scrollStorageKey = `murmiau-scroll-position:${window.location.pathname}`;
    const legacyScrollStorageKey = "murmiau-scroll-position";
    let isRestoring = true;
    let frameId = 0;
    const timeoutIds = [];

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const saveScrollPosition = () => {
      if (isRestoring) {
        return;
      }

      window.sessionStorage.setItem(scrollStorageKey, String(window.scrollY));
      window.sessionStorage.setItem(legacyScrollStorageKey, String(window.scrollY));
    };

    const restoreScrollPosition = () => {
      const savedPosition = Number(
        window.__MURMIAU_RESTORE_SCROLL__ ??
          window.sessionStorage.getItem(scrollStorageKey) ??
          window.sessionStorage.getItem(legacyScrollStorageKey)
      );

      if (Number.isFinite(savedPosition) && savedPosition > 0) {
        window.scrollTo({ top: savedPosition, left: 0, behavior: "auto" });
      }
    };

    const finishRestoring = () => {
      restoreScrollPosition();
      isRestoring = false;
      document.documentElement.classList.remove("scroll-restore-pending");
      saveScrollPosition();
    };

    restoreScrollPosition();

    frameId = requestAnimationFrame(() => {
      restoreScrollPosition();
    });

    timeoutIds.push(window.setTimeout(restoreScrollPosition, 120));
    timeoutIds.push(window.setTimeout(finishRestoring, 420));

    window.addEventListener("scroll", saveScrollPosition, { passive: true });
    window.addEventListener("pagehide", saveScrollPosition);
    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      window.cancelAnimationFrame(frameId);
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
      window.removeEventListener("scroll", saveScrollPosition);
      window.removeEventListener("pagehide", saveScrollPosition);
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  return (
    <>
      <link rel="preload" as="image" href={catHero} fetchPriority="high" />
      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <img className="hero__curve" src={curvedLine} alt="" aria-hidden="true" />

        <header className="header">
          <a className="brand" href="#top" aria-label="Catpuccino home">
            <img src={catpuccinoLogo} alt="Catpuccino" />
          </a>

          <div className="header__center">
            <nav className="main-nav" aria-label="Основная навигация">
              <a href="#about">О нас</a>
              <a href="#cats">Наши котики</a>
              <a href="#prices">Цены</a>
              <a href="#schedule">Расписание</a>
              <a href="#address">Адрес</a>
              <a href="#contacts">Контакты</a>
            </nav>
            <span className="header__line" aria-hidden="true" />
          </div>

        </header>

        <div className="hero__content">
          <div className="hero__copy">
            <p className="eyebrow">A cozy café with whiskers</p>
            <h1 id="hero-title">
              <span>Добро пожаловать в</span>
              <strong>МУРМЯУ</strong>
            </h1>
            <p className="hero__subtitle">
              <em>Кофе</em> и кошачье <em>мурлыканье</em> — идеальное сочетание, чтобы расслабиться
            </p>

            <div className="hero__buttons">
              <button className="call-button" type="button" onClick={() => scrollTo("about")}>
                <span className="call-button__arrow call-button__arrow--left" aria-hidden="true">→</span>
                <span className="call-button__text">Позвонить</span>
                <span className="call-button__circle" aria-hidden="true" />
                <span className="call-button__arrow call-button__arrow--right" aria-hidden="true">→</span>
              </button>
            </div>

          </div>

          <div className="hero__visual">
            <div className="photo-frame">
              <img
                className={heroImageLoaded ? "is-loaded" : ""}
                src={catHero}
                alt="Золотистый кот, положивший лапы на плетёную корзину"
                width={HERO_IMAGE_WIDTH}
                height={HERO_IMAGE_HEIGHT}
                loading="eager"
                decoding="sync"
                fetchPriority="high"
                onLoad={() => setHeroImageLoaded(true)}
              />
            </div>

            <div className="photo-marks" aria-hidden="true">
              {photoMarks.map((className) => (
                <span key={className} className={className} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about__paws" aria-hidden="true">
          {aboutPaws.map((className) => (
            <span key={className} className={className} />
          ))}
        </div>

        <h2>О нас</h2>
        <p>
          МурМяу - уютное место, где можно пообщаться с нашими пушистыми
          обитателями, выпить чашечку кофе, чая или какао, поиграть в
          настольные и консольные игры, поработать удаленно или просто приятно
          провести время.
        </p>
        <p>
          Здесь можно не только познакомиться с котиками, поиграть с ними и
          сделать фотографии, но и при желании забрать одного из них домой. За
          время существования нашего проекта более 500 котиков нашли свои новые
          семьи.
        </p>
      </section>

      <section className="quote-card" id="cats" aria-label="Цитата котика">
        <div className="quote-card__content">
          <p className="quote-card__text">“Лучше дать пять рыбов, чем одну”</p>
          <p className="quote-card__author">Саймон</p>
        </div>
        <img className="quote-card__cat" src={sleepingCat} alt="Спящий рыжий кот" />
      </section>

      <section className="cats-section" aria-labelledby="cats-title">
        <div className="section-heading">
          <h2 id="cats-title">Наши котики</h2>
          <span aria-hidden="true" />
        </div>

        <div className="cats-grid">
          {cats.map((cat) => (
            <article className="cat-card" key={cat.name}>
              <div className="cat-card__header">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </div>
              <img src={cat.image} alt={`${cat.name} — ${cat.description}`} />
              <p className="cat-card__hover-description">{cat.hoverDescription}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="prices-section" id="prices" aria-labelledby="prices-title">
        <div className="section-heading section-heading--prices">
          <h2 id="prices-title">Цены</h2>
          <span aria-hidden="true" />
        </div>

        <div className="prices-grid">
          {priceCards.map((card) => (
            <article
              className={card.highlighted ? "price-card price-card--featured" : "price-card"}
              key={card.title}
            >
              {card.highlighted && <span className="price-card__badge">Популярно</span>}
              <h3>{card.title}</h3>
              <p className="price-card__price">{card.price}</p>
              <p className="price-card__period">{card.period}</p>
              {card.note && <p className="price-card__note">{card.note}</p>}
              <ul>
                {card.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="schedule-section" id="schedule" aria-labelledby="schedule-title">
        <div className="section-heading">
          <h2 id="schedule-title">Расписание</h2>
          <span aria-hidden="true" />
        </div>

        <div className="schedule-hearts" aria-hidden="true">
          <span className="schedule-heart schedule-heart--left-one" />
          <span className="schedule-heart schedule-heart--left-two" />
          <span className="schedule-heart schedule-heart--left-three" />
          <span className="schedule-heart schedule-heart--right-one" />
          <span className="schedule-heart schedule-heart--right-two" />
          <span className="schedule-heart schedule-heart--right-three" />
        </div>

        <div className="schedule-card">
          <p className="schedule-card__eyebrow">Мы открыты для гостей</p>
          <div className="schedule-list">
            {scheduleItems.map(([day, time]) => (
              <div className="schedule-row" key={day}>
                <span className="schedule-row__day">{day}</span>
                <span className="schedule-row__line" aria-hidden="true" />
                <time>{time}</time>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="address-section" id="address" aria-labelledby="address-title">
        <div className="section-heading">
          <h2 id="address-title">Адрес</h2>
          <span aria-hidden="true" />
        </div>

        <div className="address-card">
          <div className="address-card__info">
            <p className="address-card__eyebrow">Ждём вас в гости</p>
            <h3>{address.title}</h3>
            <address>{address.street}</address>
            <a className="address-card__button" href={address.openUrl} target="_blank" rel="noreferrer">
              Открыть в Яндекс.Картах
            </a>
          </div>

          <div className="address-card__map">
            <iframe
              src={address.mapUrl}
              title="Карта с адресом МурМяу"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="contacts-section" id="contacts" aria-labelledby="contacts-title">
        <div className="section-heading">
          <h2 id="contacts-title">Контакты</h2>
          <span aria-hidden="true" />
        </div>

        <div className="contacts-card">
          <div className="contacts-card__copy">
            <p>Свяжитесь с нами, если у вас остались вопросы!</p>
          </div>

          <div className="contacts-list">
            {contacts.map((contact) => (
              <a className="contact-link" href={contact.href} key={contact.label} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}>
                <span className="contact-link__icon" aria-hidden="true">
                  <img src={contact.icon} alt="" />
                </span>
                <span>{contact.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__content">
          <div>
            <img className="site-footer__logo" src={catpuccinoLogo} alt="МурМяу" />
            <p className="site-footer__text">Котокафе, где кофе становится теплее рядом с мурчанием.</p>
          </div>

          <div className="site-footer__details" aria-label="Реквизиты и документы">
            <section className="footer-info">
              <h3>Реквизиты:</h3>
              <p>ИП Марк Марков Маркович</p>
              <p>ИНН 123456789123</p>
              <p>ОГРНИП 123456789123456</p>
            </section>

            <section className="footer-info">
              <h3>Документы:</h3>
              <a href="https://etsummi-pc.layero.ru/personal-data-consent" target="_blank" rel="noreferrer">
                Согласие на обработку персональных данных
              </a>
            </section>
          </div>

          <a className="back-to-top" href="#top" aria-label="Вернуться наверх">
            <svg viewBox="0 0 384 512" className="back-to-top__icon" aria-hidden="true">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          </a>
        </div>
      </footer>
      </main>
    </>
  );
}
