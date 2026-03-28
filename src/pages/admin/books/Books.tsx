import { useState } from 'react';
import { useNavigate } from 'react-router';
import BookHistoryImage from '../../../shared/assets/images/book-history.png';
import { Book } from '../../../shared/ui/books/Book';
import { Button } from '../../../shared/ui/Button';
import { PopUp } from '../../../shared/ui/PopUp';

const books = [
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false
  }
];

const genres = [
  { id: 1, name: 'Образование', count: 1234 },
  { id: 2, name: 'Художественная лит...', count: 3453 },
  { id: 3, name: 'Книги для детей', count: 3453 },
  { id: 4, name: 'Наука и техника', count: 3453 },
  { id: 5, name: 'Общество', count: 435 },
  { id: 6, name: 'Деловая литература', count: 435 },
  { id: 7, name: 'Красота. Здоровье. Спорт', count: 435 },
  { id: 8, name: 'Увлечения', count: 435 },
  { id: 9, name: 'Психология', count: 435 }
];

const audioTypes = [
  { id: 1, name: 'Бумажные книги' },
  { id: 2, name: 'Аудиокниги' },
  { id: 3, name: 'Электронные книги' }
];

const Books = () => {
  const navigate = useNavigate();
  const total = 354;

  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  return (
    <section className="flex flex-col gap-5.5">
      <div className="flex justify-between">
        <div className="flex gap-5.5">
          <PopUp
            label={selectedType ?? 'Аудиокниги'}
            items={audioTypes}
            onSelect={(item) => setSelectedType(item.name)}
          />
          <PopUp
            label={selectedGenre ?? 'Жанры'}
            items={genres}
            onSelect={(item) => setSelectedGenre(item.name)}
          />
        </div>

        <Button variant="secondary" onClick={() => navigate('/admin/books/add-book')}>
          + Добавить книгу
        </Button>
      </div>

      <p className="text-neutral-200 font-normal">Всего: {total}</p>

      <div className="flex gap-19.5 flex-wrap">
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
