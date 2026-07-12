import './globals.css';

export const metadata = {
  title: 'Butterfly — лазерная эпиляция в Санкт-Петербурге',
  description: 'Студия лазерной эпиляции Butterfly: ZoLLaser DL206 S, опытные мастера, выгодные пакеты и онлайн-запись.',
  openGraph: {
    title: 'Butterfly — лазерная эпиляция',
    description: 'Гладкая кожа. Уверенность. Свобода.',
    type: 'website',
    locale: 'ru_RU'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
