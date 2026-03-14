import { LogoIcon } from '../../../shared/assets/icons';

export const Footer = () => (
  <footer className="bg-primary px-20 py-12 pr-56.75 w-full">
    <div className="flex gap-32 w-full justify-between items-start">
      <img src={LogoIcon} alt="logo" />

      <div className="flex flex-col gap-4">
        <a href="#" className="text-neutral-300 text-body hover:text-white transition-colors">
          Жанры
        </a>
        <a href="#" className="text-neutral-300 text-body hover:text-white transition-colors">
          Аудиокниги
        </a>
        <a href="#" className="text-neutral-300 text-body hover:text-white transition-colors">
          Электронные книги
        </a>
      </div>

      <div className="flex flex-col gap-4">
        <a href="#" className="text-neutral-300 text-body hover:text-white transition-colors">
          Бестселлеры
        </a>
        <a href="#" className="text-neutral-300 text-body hover:text-white transition-colors">
          Промокоды
        </a>
        <a href="#" className="text-neutral-300 text-body hover:text-white transition-colors">
          Политика конфиденциальности
        </a>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-white text-body font-bold">Свяжитесь с нами</p>
        <p className="text-neutral-300 text-body">+996 707 123 456</p>
        <p className="text-neutral-300 text-body">г. Бишкек ул. Исанова 45</p>
      </div>
    </div>
  </footer>
);
