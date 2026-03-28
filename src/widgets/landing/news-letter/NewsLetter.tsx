export const NewsLetter = () => (
  <section className=" px-43.75 py-12">
    <div className="flex flex-col gap-11.25 mb-16">
      <p className="font-bold text-h4 leading-[120%] text-primary">Подписаться на рассылку</p>

      <div className="flex">
        <input
          type="email"
          placeholder="Напишите ваш E-mail"
          className="flex-1 border border-neutral-200 px-4 py-3 text-body text-primary placeholder:text-neutral-300 focus:outline-none"
        />
        <button
          type="button"
          className="bg-primary text-white text-body px-8 py-3 hover:opacity-90 transition-opacity"
        >
          Отправить
        </button>
      </div>
    </div>

    <div className="flex items-center justify-center gap-60 py-26.25">
      <a
        href="#"
        className="text-[22px] leading-[130%] text-primary hover:text-secondary transition-colors"
      >
        Instagram
      </a>
      <a
        href="#"
        className="text-[22px] leading-[130%] text-primary hover:text-secondary transition-colors"
      >
        Facebook
      </a>
      <a
        href="#"
        className="text-[22px] leading-[130%] text-primary hover:text-secondary transition-colors"
      >
        Вконтакте
      </a>
    </div>
  </section>
);
