import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Breadcrumbs } from '../../../shared/ui/Breadcrumbs';
import { Button } from '../../../shared/ui/Button';
import { PhotoSlot } from '../../../widgets/book/PhotoSlot';
import { Input } from '../../../shared/ui/Input';
import { Radio } from '../../../shared/ui/Radio';
import { FileUpload } from '../../../widgets/book/FileUpload';
import { Checkbox } from '../../../shared/ui/Checkbox';

type BookType = 'physical' | 'audio' | 'ebook';

const bookTypes: { value: BookType; label: string }[] = [
  { value: 'physical', label: 'Бумажная' },
  { value: 'audio', label: 'Аудиокнига' },
  { value: 'ebook', label: 'Электронная книга' }
];

const genres = [
  'Образование',
  'Художественная литература',
  'Книги для детей',
  'Наука и техника',
  'Общество',
  'Деловая литература',
  'Красота. Здоровье. Спорт',
  'Увлечения',
  'Психология'
];

const languages = ['Русский', 'Кыргызский', 'Английский'];

const selectClass =
  'w-full border border-neutral-200 px-4 py-2.5 text-primary placeholder:text-neutral-300 outline-none focus:border-secondary transition-colors bg-white';

const labelClass = 'mb-1 block text-body text-primary';

const AddBook = () => {
  const navigate = useNavigate();

  const [bookType, setBookType] = useState<BookType>('physical');
  const [aboutCount, setAboutCount] = useState(0);
  const [fragmentCount, setFragmentCount] = useState(0);

  return (
    <section className="flex flex-col gap-6 pb-20">
      <Breadcrumbs
        items={[{ label: 'Книги', path: '/admin/books' }, { label: 'Добавить книгу' }]}
      />

      <div className="flex flex-col gap-3">
        <p className="text-body-big font-medium text-neutral-300">
          Загрузите 3 фото <span className="text-secondary">*</span>
        </p>

        <div className="flex gap-4 items-start">
          <div className="flex gap-4">
            <PhotoSlot label="Нажмите на кнопку чтобы загрузить фото" isMain />
            <PhotoSlot label="Нажмите на кнопку чтобы загрузить другую фото" />
            <PhotoSlot label="Нажмите на кнопку чтобы загрузить другую фото" />
          </div>

          <div className="ml-4 bg-[#eeeeee] py-7.5 px-6.5 max-w-91 text-neutral-300 leading-relaxed border border-[#eeeeee]">
            <p className="font-medium text-primary mb-4">
              Публикации с качественными фото получают больше откликов!
            </p>

            <p className="font-medium text-primary mb-4">Фотографии должны быть:</p>

            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <div className="bg-secondary w-5 h-2.5 rounded-4xl mt-2"></div>
                Они должны быть наблюдаемы: без теней, рисунков, посторонних объектов или заломов
              </li>

              <li className="flex gap-3">
                <div className="bg-secondary w-2.5 h-2.5 rounded-4xl mt-2"></div>
                Фото обязательно должны быть цветные
              </li>

              <li className="flex gap-3">
                <div className="bg-secondary w-2.5 h-2.5 rounded-4xl mt-2"></div>
                Фото
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm text-neutral-300">Тип</p>

        <div className="flex gap-6">
          {bookTypes.map(({ value, label }) => (
            <Radio
              key={value}
              name="bookType"
              value={value}
              label={label}
              checked={bookType === value}
              onChange={() => setBookType(value)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-7.5 max-w-317">
        <div className="grid grid-cols-[1fr_160px_120px] gap-10.5 items-center">
          <Input label="Название книги" placeholder="Напишите полное название книги" />

          <div>
            <label className={labelClass}>Язык</label>

            <select className={selectClass}>
              {languages.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>

          <Input label="Год выпуска" placeholder="гг" type="number" />
        </div>

        {bookType === 'physical' && (
          <div className="grid grid-cols-[1fr_160px_120px] gap-10.5">
            <Input label="ФИО автора" placeholder="Напишите ФИО автора" />
            <Input label="Объём" placeholder="стр" type="number" />
            <Input label="Кол-во книг" placeholder="шт" type="number" />
          </div>
        )}

        {bookType === 'audio' && (
          <div className="grid grid-cols-[1fr_80px_80px_80px] gap-10.5">
            <Input label="ФИО автора" placeholder="Напишите ФИО автора" />
            <Input label="Длительность" placeholder="ч" type="number" />
            <Input label="&nbsp;" placeholder="ммн." type="number" />
            <Input label="&nbsp;" placeholder="сек." type="number" />
          </div>
        )}

        {bookType === 'ebook' && (
          <div className="grid grid-cols-[1fr_100px] gap-4">
            <Input label="ФИО автора" placeholder="Напишите ФИО автора" />
            <Input label="Объём" placeholder="стр" type="number" />
          </div>
        )}

        <div className="grid grid-cols-[1fr_160px_120px] gap-10.5 items-center">
          <div>
            <label className={labelClass}>Выберите жанр</label>

            <select className={selectClass}>
              <option value="">Литература, роман, стихи...</option>
              {genres.map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </div>

          <div>
            <Input label="Стоимость" placeholder="сом" type="number" />
          </div>

          <div>
            <Input label="Скидка" placeholder="0" type="number" />
          </div>
        </div>

        <div className="grid gap-10.5 items-start grid-cols-[1fr_160px_120px]">
          {(bookType === 'physical' || bookType === 'ebook') && (
            <Input label="Издательство" placeholder="Напишите название издательства" />
          )}

          {bookType === 'physical' && (
            <label className="flex items-center gap-2 cursor-pointer pb-2.5">
              <Checkbox label="Бестселлер" />
            </label>
          )}
        </div>

        <div
          className={`${bookType === 'audio' ? 'grid gap-10.5 items-start grid-cols-[1fr_160px_120px]' : ''}`}
        >
          <div>
            <label className={labelClass}>О книге</label>

            <textarea
              className={selectClass + ' resize-none h-49.75'}
              placeholder="Напишите о книге"
              maxLength={1234}
              onChange={(e) => setAboutCount(e.target.value.length)}
            />
            <p className="text-xs text-neutral-300 text-right mt-1">{aboutCount}/1234</p>
          </div>

          {bookType === 'audio' && (
            <div className="grid gap-10.5 self-end mb-6.5 ">
              <div>
                <label className={labelClass}>Загрузите фрагмент аудиокниги</label>

                <div className="flex gap-3.5">
                  <FileUpload label="Загрузить аудиокнигу" accept="audio/*" />

                  <p className="text-[12px] text-neutral-200">макс. 10 мин.</p>
                </div>
              </div>

              <div>
                <label className={labelClass}>Загрузите аудиокнигу</label>
                <FileUpload label="Загрузить аудиокнигу" accept="audio/*" />
              </div>
            </div>
          )}
        </div>

        {bookType === 'physical' && (
          <div>
            <label className={labelClass}>Фрагмент книги</label>
            <textarea
              className={selectClass + ' resize-none h-49.75'}
              placeholder="Напишите фрагмент книги"
              maxLength={9234}
              onChange={(e) => setFragmentCount(e.target.value.length)}
            />
            <p className="text-xs text-neutral-300 text-right mt-1">{fragmentCount}/9234</p>
          </div>
        )}

        {bookType === 'ebook' && (
          <div>
            <label className={labelClass}>Загрузить книгу</label>
            <FileUpload label="Загрузить PDF" accept=".pdf" />
          </div>
        )}
      </div>

      <div className="flex justify-end max-w-278.75">
        <Button variant="secondary" type="button">
          Добавить
        </Button>
      </div>
    </section>
  );
};

export default AddBook;
