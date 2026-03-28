import { Breadcrumbs } from '../../shared/ui/Breadcrumbs';
import { BookDetailContent } from '../../widgets/book-detail/BookDetailContent';
import { BookDetailHero } from '../../widgets/book-detail/BookDetailHero';
import HarryPotterImage from '../../shared/assets/images/harry-potter.png';
import RemarkImage from '../../shared/assets/images/remark.png';

const BookDetail = () => {
  const book = {
    name: 'Гарри Поттер. Дары смерти',
    id: 0,
    author: 'Роулинг Джоан Кэтлин',
    language: 'Русский',
    publisher: 'МКС',
    dateOfPublication: '2026-03-24',
    pages: 360,
    price: 565,
    description:
      '«Заговор, Гарри Поттер, Заговор» — в этом году в Хогвартсе, школе колдовства и ведьминских искусств, произойдут ужаснейшие события. Лето у Гарри Поттера состояло из самого ужасного дня рождения в жизни, мрачных предупреждений от домового эльфа по имени Добби и спасения от Дурслей, когда его друг Рон Уизли прибыл за ним на волшебной летающей машине! Вернувшись в школу колдовства и ведьминских искусств «Хогвардс» на второй курс, Гарри слышит странный шёпот, который раздаётся в пустых коридорах. А потом начинаются нападения. Студентов находят будто превращёнными в камень... Кажется, что зловещие предсказания Добби начинают сбываться.',
    fragment:
      'Глава первая «Был один человек — прирождённый графологический гость и бесчисленные родители и сыновья говорили с ним в последние дни его жизни и сообщили ему...',
    bookType: 'AUDIO_BOOK',
    bestseller: true,
    genre: 'Зарубежно-фантастик',
    images: [HarryPotterImage, RemarkImage],
    isNew: true
  };

  return (
    <div className="flex flex-col gap-8 py-6">
      <Breadcrumbs
        items={[{ label: 'Заявки', path: '/admin/announcements' }, { label: book.name }]}
      />
      <BookDetailHero book={book} />
      <BookDetailContent about={book.description} fragment={book.fragment} />
    </div>
  );
};

export default BookDetail;
