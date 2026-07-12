'use client';

import { useMemo, useState } from 'react';

const DIKIDI = 'https://dikidi.ru/1907235';
const VK = 'https://vk.ru/studiobutterflyy';

const packages = [
  { id: 1, name: 'Butterfly Mini', label: 'Пакет 1', zones: ['Подмышечные впадины', 'Тотальное бикини'], price: 1500, old: 2200 },
  { id: 2, name: 'Butterfly Medium', label: 'Пакет 2', zones: ['Подмышечные впадины', 'Тотальное бикини', 'Голени'], price: 1800, old: 3000 },
  { id: 3, name: 'Butterfly Maxi', label: 'Популярный выбор', zones: ['Подмышечные впадины', 'Тотальное бикини', 'Ноги полностью'], price: 2300, old: 3500, featured: true },
  { id: 4, name: 'Butterfly Complete', label: 'Пакет 4', zones: ['Подмышечные впадины', 'Тотальное бикини', 'Ноги полностью', 'Руки полностью'], price: 2600, old: 3800 },
  { id: 5, name: 'Всё тело', label: 'Максимум зон', zones: ['Без ограничения по количеству зон', 'Индивидуальный подбор параметров'], price: 3000, old: 6000, featured: true }
];

const faq = [
  ['Больно ли делать лазерную эпиляцию?', 'Ощущения индивидуальны и зависят от зоны, чувствительности кожи и выбранных параметров. Мастер регулирует настройки для комфортного проведения процедуры.'],
  ['Сколько процедур требуется?', 'Количество процедур зависит от особенностей организма, структуры и цвета волос. Ориентир студии — курс из 10–15 процедур с интервалом около месяца.'],
  ['Когда будет заметен результат?', 'Изменения могут быть заметны уже после первого посещения, но выраженность результата всегда индивидуальна.'],
  ['Есть ли противопоказания?', 'Да. Перед процедурой мастер уточняет состояние здоровья, лекарства и особенности кожи. При сомнениях рекомендуется консультация врача.']
];

function Logo() {
  return (
    <div className="logoMark" aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M31 32C19 9 5 13 10 28c3 9 13 10 21 4Z" />
        <path d="M33 32C45 9 59 13 54 28c-3 9-13 10-21 4Z" />
        <path d="M31 34C19 55 8 51 13 39c4-8 11-8 18-5Z" />
        <path d="M33 34C45 55 56 51 51 39c-4-8-11-8-18-5Z" />
        <path d="M32 22v24" />
      </svg>
    </div>
  );
}

function Button({ href, children, secondary = false, className = '' }) {
  return <a className={`button ${secondary ? 'secondary' : ''} ${className}`} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{children}</a>;
}

export default function Home() {
  const [selected, setSelected] = useState([]);
  const [openFaq, setOpenFaq] = useState(0);

  const recommendation = useMemo(() => {
    const has = (key) => selected.includes(key);
    if (has('full')) return { name: 'Всё тело', price: 3000 };
    if (has('armpits') && has('bikini') && has('legs') && has('arms')) return { name: 'Butterfly Complete', price: 2600 };
    if (has('armpits') && has('bikini') && has('legs')) return { name: 'Butterfly Maxi', price: 2300 };
    if (has('armpits') && has('bikini') && has('shins')) return { name: 'Butterfly Medium', price: 1800 };
    if (has('armpits') && has('bikini')) return { name: 'Butterfly Mini', price: 1500 };
    if (!selected.length) return { name: 'Выберите зоны', price: null };
    return { name: 'Индивидуальный подбор', price: null };
  }, [selected]);

  const toggle = (value) => {
    setSelected((prev) => prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]);
  };

  return (
    <>
      <header className="topbar"><div className="container nav"><a href="#top" className="brand"><Logo /><span><b>Butterfly</b><small>лазерная эпиляция</small></span></a><nav><a href="#packages">Пакеты</a><a href="#advantages">Преимущества</a><a href="#care">Подготовка</a><a href="#reviews">Отзывы</a><a href="#faq">FAQ</a><a href="#contacts">Контакты</a></nav><Button href={DIKIDI}>Записаться</Button></div></header>
      <main id="top">
        <section className="hero"><div className="container heroGrid"><div><span className="pill">🦋 Студия в центре Санкт-Петербурга</span><h1>Гладкая кожа.<br/>Уверенность.<br/>Свобода.</h1><p className="lead">Лазерная эпиляция на современном диодном лазере ZoLLaser DL206 S. Бережный подход, опытные мастера и запись за одну минуту.</p><div className="actions"><Button href={DIKIDI}>Записаться онлайн</Button><Button href="#packages" secondary>Посмотреть цены</Button></div><div className="heroNotes"><div><b>Опыт 3+ лет</b><span>Квалифицированные мастера</span></div><div><b>ZoLLaser DL206 S</b><span>Современный диодный лазер</span></div><div><b>Чайковского, 13</b><span>Центр Санкт-Петербурга</span></div></div></div><div className="heroVisual"><div className="saleBubble"><small>первое посещение</small><strong>−20%</strong></div><div className="bodyShape"/><div className="laserDevice"><span>ZoLLaser</span></div></div></div></section>
        <section id="packages"><div className="container"><div className="sectionHead"><span className="pill">Выгодные комплексы</span><h2>Пакеты услуг Butterfly</h2><p>Готовые сочетания популярных зон по специальной стоимости.</p></div><div className="packageGrid">{packages.map((item) => <article className={`package ${item.featured ? 'featured' : ''}`} key={item.id}><span className="tag">{item.label}</span><h3>{item.name}</h3><ul>{item.zones.map((z) => <li key={z}>{z}</li>)}</ul><div className="priceBlock"><div><strong>{item.price.toLocaleString('ru-RU')} ₽</strong><del>{item.old.toLocaleString('ru-RU')} ₽</del></div><small>Выгода {(item.old-item.price).toLocaleString('ru-RU')} ₽</small><Button href={DIKIDI}>Записаться</Button></div></article>)}</div></div></section>
        <section id="advantages"><div className="container"><div className="sectionHead"><span className="pill">Почему выбирают нас</span><h2>Комфорт и внимание на каждом этапе</h2></div><div className="featureGrid">{[['⚡','Современный лазер','Работаем на ZoLLaser DL206 S.'],['🎓','Опытные мастера','Практический опыт более трёх лет.'],['🛡️','Безопасность','Параметры под особенности кожи и волос.'],['🤍','Деликатный подход','Спокойная атмосфера и бережное отношение.'],['📍','Удобное расположение','Улица Чайковского, дом 13.']].map(([i,t,d])=><div className="feature" key={t}><span>{i}</span><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
        <section id="calculator"><div className="container"><div className="sectionHead"><span className="pill">Подбор комплекса</span><h2>Выберите нужные зоны</h2><p>Калькулятор предложит ближайший подходящий пакет.</p></div><div className="calculator"><div className="zones">{[['armpits','Подмышечные впадины'],['bikini','Тотальное бикини'],['shins','Голени'],['legs','Ноги полностью'],['arms','Руки полностью'],['full','Всё тело']].map(([v,l])=><label className={selected.includes(v)?'zone active':'zone'} key={v}><input type="checkbox" checked={selected.includes(v)} onChange={()=>toggle(v)}/><span>{l}</span></label>)}</div><div className="calcResult"><small>Рекомендованный вариант</small><h3>{recommendation.name}</h3><div className="total">{recommendation.price ? `${recommendation.price.toLocaleString('ru-RU')} ₽` : '—'}</div><Button href={DIKIDI}>Перейти к записи</Button></div></div></div></section>
        <section><div className="container"><div className="sectionHead"><span className="pill">Как всё проходит</span><h2>Четыре понятных шага</h2></div><div className="steps">{[['01','Запись','Вы выбираете услугу, дату и удобное время через Dikidi.'],['02','Консультация','Мастер уточняет особенности кожи, волос и противопоказания.'],['03','Процедура','Параметры аппарата подбираются индивидуально.'],['04','Рекомендации','После процедуры вы получаете памятку по домашнему уходу.']].map(([n,t,d])=><div className="step" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
        <section id="care"><div className="container"><div className="sectionHead"><span className="pill">Подготовка и уход</span><h2>Чтобы процедура прошла комфортно</h2></div><div className="careGrid"><article><h3>Перед процедурой</h3><ul><li>За 3–4 недели не удалять волосы с корнем.</li><li>За 10–14 дней избегать активного загара.</li><li>За сутки аккуратно сбрить волосы.</li><li>В день процедуры не наносить крем, масло или дезодорант.</li><li>Сообщить мастеру о лекарствах и особенностях здоровья.</li></ul></article><article><h3>После процедуры</h3><ul><li>1–2 дня избегать горячей ванны и интенсивного трения кожи.</li><li>Несколько дней не посещать баню, сауну и бассейн.</li><li>Не использовать скрабы и пилинги около недели.</li><li>На открытые участки наносить солнцезащитное средство.</li><li>При выраженной реакции связаться с мастером или врачом.</li></ul></article></div><p className="disclaimer">Информация носит общий характер и не заменяет индивидуальную консультацию специалиста.</p></div></section>
        <section id="reviews"><div className="container"><div className="sectionHead"><span className="pill">Отзывы</span><h2>Что говорят клиенты</h2><p>Демонстрационные карточки — перед запуском заменим их реальными отзывами.</p></div><div className="reviews">{['Очень аккуратный мастер, всё объяснила и помогла расслабиться.','Удобное расположение и приятная атмосфера.','Пришла впервые и переживала, но мастер всё подробно рассказала.'].map((r,i)=><article key={r}><div className="stars">★★★★★</div><p>«{r}»</p><small>{['Мария','Екатерина','Анастасия'][i]} · пример</small></article>)}</div></div></section>
        <section id="master"><div className="container master"><div className="masterPhoto" style={{padding:0,overflow:'hidden',position:'relative',background:'#ead9e5'}}><img src="/master-photo.jpg" alt="Мастер студии лазерной эпиляции Butterfly" style={{width:'100%',height:'100%',minHeight:'420px',display:'block',objectFit:'cover',objectPosition:'center 30%'}}/><span style={{position:'absolute',left:'18px',bottom:'18px'}}>Мастер студии Butterfly</span></div><div><span className="pill">О студии и мастере</span><h2>Знакомство создаёт доверие</h2><p>Опытный мастер студии Butterfly бережно подбирает параметры процедуры с учётом особенностей кожи и волос, подробно объясняет каждый этап и остаётся на связи после посещения.</p><div className="checks"><span>✓ Опыт работы более трёх лет</span><span>✓ Индивидуальный подбор параметров</span><span>✓ Спокойная и деликатная коммуникация</span><span>✓ Рекомендации до и после процедуры</span></div><Button href={DIKIDI}>Записаться на консультацию</Button></div></div></section>
        <section id="faq"><div className="container"><div className="sectionHead"><span className="pill">Частые вопросы</span><h2>Коротко о главном</h2></div><div className="faq">{faq.map(([q,a],i)=><div className={`faqItem ${openFaq===i?'open':''}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)}><span>{q}</span><b>{openFaq===i?'−':'＋'}</b></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></div></section>
        <section id="contacts"><div className="container contactCard"><div><span className="pill">Контакты</span><h2>Ждём вас в Butterfly</h2><p>Запишитесь онлайн или свяжитесь со студией удобным способом.</p><div className="contacts"><span>📍 Санкт-Петербург, ул. Чайковского, д. 13</span><a href="tel:+79934841742">📞 +7 (993) 484-17-42</a><a href={VK} target="_blank" rel="noreferrer">🦋 Группа ВКонтакте</a><a href={DIKIDI} target="_blank" rel="noreferrer">📅 Онлайн-запись Dikidi</a></div><Button href={DIKIDI}>Выбрать время</Button></div><div className="map"><div className="pin">●</div><span>Здесь будет интерактивная карта</span></div></div></section>
      </main>
      <footer><div className="container footerRow"><span>© 2026 Butterfly</span><span>Разработка сайта — <b>Makaroff Studio</b></span></div></footer>
      <div className="mobileCta"><Button href={DIKIDI} className="full">Записаться онлайн</Button></div>
    </>
  );
}
