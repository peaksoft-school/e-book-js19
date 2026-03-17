import { useNavigate } from 'react-router';
import {
  AUDIO_BOOKS,
  BOOKS,
  LAST_PUBLICATIONS_BOOKS,
  SLIDER_BOOKS
} from '../../shared/constants/books';
import { BookSectionSlider } from '../../shared/ui/BookSectionSlider';
import { BookSlider } from '../../shared/ui/BooksSlider';
import { AudioBooks } from '../../widgets/audio-books/ui/AudioBooks';
import { LastPublications } from '../../widgets/last-publications/ui/LastPublications';
import { Footer } from '../../widgets/layout/ui/Footer';
import Header from '../../widgets/layout/ui/Header';
import { NewsLetter } from '../../widgets/news-letter/ui/NewsLetter';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header onLogin={() => navigate('/auth')} />

      <main className="flex flex-col gap-37.5">
        <BookSlider books={SLIDER_BOOKS} />
        <BookSectionSlider title="Бестселлеры" books={BOOKS} />
        <LastPublications books={LAST_PUBLICATIONS_BOOKS} />
        <AudioBooks books={AUDIO_BOOKS} />
        <BookSectionSlider title="Электронные книги" books={BOOKS} />
        <NewsLetter />
      </main>

      <Footer />
    </>
  );
};

export default Landing;
