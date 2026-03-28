import { Heart } from 'lucide-react';
import { DropdownMenu } from '../DropdownMenu';
import { Modal } from '../modal/Modal';
import { Button } from '../Button';
import { useState } from 'react';

interface Book {
  image: string;
  title: string;
  date: string;
  price: number;
  isNew?: boolean;
  favorite?: number;
  cart?: number;
}

type BookVariant = 'admin' | 'vendor' | 'user';

interface BookCardProps {
  book: Book;
  variant?: BookVariant;
  onNavigate?: () => void;
  onDelete?: () => void;
}

export const Book = ({ book, variant = 'admin', onNavigate, onDelete }: BookCardProps) => {
  const { image, title, date, price, isNew = false, favorite, cart } = book;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    onDelete?.();
    setShowDeleteModal(false);
  };

  return (
    <>
      <div
        onClick={onNavigate}
        className={`relative p-4 w-67 ${
          isNew ? 'bg-[#fdf1ea] border border-secondary' : 'bg-[#ededed]'
        } cursor-pointer`}
      >
        <div className="flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
          {variant !== 'admin' ? (
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-body-small text-neutral-300">
                <Heart size={16} className="text-neutral-300" />({favorite ?? 0})
              </span>
              <span className="text-body-small text-neutral-300">В корзине ({cart ?? 0})</span>
            </div>
          ) : (
            <div />
          )}

          <DropdownMenu
            items={[
              { label: 'Редактировать', onClick: () => console.log('edit') },
              { label: 'Удалить', onClick: () => setShowDeleteModal(true), danger: true }
            ]}
          />
        </div>

        <img src={image} alt={title} className="w-full object-cover mb-3" />

        <div className="flex flex-col gap-1">
          <p className="text-body-small font-bold text-primary uppercase">{title}</p>
          <div className="flex items-center justify-between">
            <p className="text-body-small text-neutral-300">{date}</p>
            <p className="text-body-small text-secondary font-bold">{price} с</p>
          </div>
        </div>
      </div>

      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <div className="flex flex-col items-center gap-8">
          <p className="text-body-big text-primary text-center">
            Вы уверены, что хотите удалить <br />
            <span className="font-semibold">{title}</span> ?
          </p>
          <div className="flex items-center gap-6">
            <Button
              type="button"
              onClick={() => setShowDeleteModal(false)}
              className="text-body text-neutral-300 hover:text-primary transition-colors cursor-pointer"
            >
              Отменить
            </Button>

            <Button variant="primary" onClick={handleDelete}>
              Удалить
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
