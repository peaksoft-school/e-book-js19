import { useNavigate } from 'react-router';
import {
  AUDIO_BOOKS,
  BOOKS,
  LAST_PUBLICATIONS_BOOKS,
  SLIDER_BOOKS
} from '../../shared/constants/books';
import { BookSectionSlider } from '../../shared/ui/BookSectionSlider';
import { BookSlider } from '../../shared/ui/BooksSlider';
import { LastPublications } from '../../widgets/landing/last-publications/LastPublications';
import { Footer } from '../../widgets/layout/ui/Footer';
import { Header } from '../../widgets/layout/ui/Header';
import { NewsLetter } from '../../widgets/landing/news-letter/NewsLetter';
import { AudioBooks } from '../../widgets/landing/audio-books/AudioBooks';

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
