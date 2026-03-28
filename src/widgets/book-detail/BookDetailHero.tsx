import { useState } from 'react';
import { CheckIcon, NewIcon } from '../../shared/assets/icons';
import { Button } from '../../shared/ui/Button';
import { Modal } from '../../shared/ui/modal/Modal';
import { useLocation, useNavigate } from 'react-router';

interface Book {
  id: number;
  name: string;
  author: string;
  language: string;
  publisher: string;
  dateOfPublication: string;
  pages: number;
  price: number;
  description: string;
  fragment: string;
  bookType: string;
  bestseller: boolean;
  genre: string;
  images: string[];
  isNew: boolean;
}

interface BookDetailHeroProps {
  book: Book;
}

export const BookDetailHero = ({ book }: BookDetailHeroProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState('');

  const {
    images,
    name,
    price,
    author,
    genre,
    language,
    publisher,
    dateOfPublication,
    pages,
    isNew
  } = book;

  const bookInfo = [
    { label: 'Автор', value: author },
    { label: 'Жанр', value: genre },
    { label: 'Язык', value: language },
    { label: 'Издательство', value: publisher },
    { label: 'Год выпуска', value: dateOfPublication },
    { label: 'Объём', value: pages }
  ];

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleAccept = () => {
    setShowAcceptModal(true);

    setTimeout(() => {
      setShowAcceptModal(false);

      navigate(-1);
    }, 1000);
  };

  const handleReject = () => {
    console.log('reject reason:', rejectReason);

    setShowRejectModal(false);
    navigate(-1);
    setRejectReason('');
  };

  return (
    <div className="flex gap-50 flex-wrap">
      <div className="flex gap-2 relative items-start">
        {[images[activeIndex], ...images.filter((_, i) => i !== activeIndex)].map((img, i) => (
          <button key={i} type="button" onClick={() => setActiveIndex(images.indexOf(img))}>
            <img
              src={img}
              alt={`thumb-${i}`}
              className={`${i === 0 ? 'w-90' : 'w-55 opacity-50'} object-cover transition-all duration-300`}
            />
          </button>
        ))}
        {isNew && <img src={NewIcon} alt="new" className="absolute right-30 bottom-0 w-50" />}
      </div>

      <div className="flex flex-col gap-13 flex-1">
        <h1 className="text-h2 text-primary">{name}</h1>
        <p className="font-bold text-secondary">{price} с</p>

        <div className="flex flex-col gap-3">
          {bookInfo.map(({ label, value }) => (
            <div key={label} className="flex gap-25">
              <span className="text-body text-neutral-300 w-36 shrink-0">{label}</span>
              <span className="text-body text-primary">{value}</span>
            </div>
          ))}
        </div>

        {location.state !== 'read' && (
          <div className="flex gap-5 mt-4">
            <Button
              variant="outline"
              className="border-secondary text-secondary! w-56"
              onClick={() => setShowRejectModal(true)}
            >
              Отклонить
            </Button>
            <Button variant="secondary" className="w-56" onClick={handleAccept}>
              Принять
            </Button>
          </div>
        )}
      </div>

      <Modal isOpen={showAcceptModal} onClose={() => setShowAcceptModal(false)}>
        <div className="flex flex-col items-center gap-4 w-115">
          <img src={CheckIcon} width={48} />

          <p className="text-body-big text-primary text-center">
            <span className="font-semibold">"{name}"</span> <br /> был успешно принят!
          </p>
        </div>
      </Modal>

      <Modal isOpen={showRejectModal} onClose={() => setShowRejectModal(false)}>
        <div className="flex flex-col gap-4 w-130.75">
          <p className="text-body font-bold text-primary">Причина вашего отклонения</p>

          <textarea
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
            placeholder="Напишите причину отклонения..."
            className="w-full h-32 border border-neutral-200 px-4 py-3 text-body text-primary placeholder:text-neutral-300 focus:outline-none focus:border-secondary resize-none"
          />

          <Button variant="primary" onClick={handleReject} className="self-end">
            Отправить
          </Button>
        </div>
      </Modal>
    </div>
  );
};
