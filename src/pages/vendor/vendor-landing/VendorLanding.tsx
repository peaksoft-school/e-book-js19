import { useNavigate } from 'react-router';
import { Header } from '../../../widgets/layout/ui/Header';
import VendorBookImage from '../../../shared/assets/images/vendor-book.png';
import { Button } from '../../../shared/ui/Button';
import { LogoIcon } from '../../../shared/assets/icons';
import { STEPS } from '../../../shared/constants/vendor';

const VendorLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="vendor-auth" />

      <section className="flex items-center justify-between px-16 py-10 bg-white">
        <div className="flex flex-col gap-6 max-w-sm">
          <h1 className="text-[70px] font-normal text-primary leading-tight font-vkhute w-150">
            ПОРТАЛ <span className="font-sans! font-[58px]">в</span>{' '}
            <span className="text-secondary">КНИЖНЫЙ</span> МИР
          </h1>

          <p className="text-body text-primary">Начните продавать свои книги на eBook</p>

          <Button
            className="bg-secondary-yellow text-primary text-body py-4 hover:opacity-90 transition-opacity w-56.25"
            type="button"
            onClick={() => navigate('/auth', { state: { tab: 'vendor' } })}
          >
            Стать продавцом
          </Button>
        </div>

        <img src={VendorBookImage} alt="vendor book" />
      </section>

      <section className="px-16 py-16 bg-white">
        <h2 className="text-h3 font-bold text-primary mb-10">Как начать продавать на eBook?</h2>
        <div className="grid grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div key={step.id} className="flex flex-col gap-4">
              <div className="w-full h-52.75 bg-neutral-200" />
              <p className="text-body-small text-primary">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-16 py-16 bg-white">
        <h2 className="text-h3 font-bold text-primary mb-10">Условия</h2>
        <div className="grid grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div key={step.id} className="flex flex-col gap-4">
              <div className="w-full h-52.75 bg-neutral-200" />
              <p className="text-body-small text-primary">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex items-center justify-center py-16 bg-white">
        <Button
          type="button"
          onClick={() => navigate('/auth', { state: { tab: 'vendor' } })}
          className="bg-secondary-yellow text-primary text-body py-4 hover:opacity-90 transition-opacity w-56.25"
        >
          Стать продавцом
        </Button>
      </section>

      <footer className="bg-primary px-16 py-10 mt-auto">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <img src={LogoIcon} alt="logo" />
            <a
              href="#"
              className="text-neutral-300 text-body-small hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white font-bold text-body">Свяжитесь с нами</p>
            <p className="text-neutral-300 text-body-small">+996 707 123 456</p>
            <p className="text-neutral-300 text-body-small">г. Бишкек ул. Исанова 45</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VendorLanding;
