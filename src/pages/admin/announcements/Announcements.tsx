import { useNavigate } from 'react-router';
import BookHistoryImage from '../../../shared/assets/images/book-history.png';
import { Book } from '../../../shared/ui/books/Book';

const announcements = [
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: true,
    id: 1
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false,
    id: 2
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false,
    id: 2
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false,
    id: 2
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false,
    id: 2
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false,
    id: 2
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false,
    id: 2
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false,
    id: 2
  }
];

const Announcements = () => {
  const total = 34;
  const noView = 4;

  const navigate = useNavigate();

  const handleBookNavigate = (id: number) => navigate(`/admin/announcements/${id}`);

  return (
    <section className="flex flex-col gap-5.5">
      <div className="flex gap-5.5 text-neutral-200 font-normal">
        <p>Всего: {total}</p>
        <p>
          Непросмотренные: <span className="text-secondary">{noView}</span>
        </p>
      </div>

      <div className="flex gap-19.5 flex-wrap">
        {announcements.map((announcement) => (
          <Book book={announcement} onNavigate={() => handleBookNavigate(announcement.id)} />
        ))}
      </div>
    </section>
  );
};

export default Announcements;
