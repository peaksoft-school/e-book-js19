import { DropdownMenu } from '../DropdownMenu';

interface Book {
  image: string;
  title: string;
  date: string;
  price: number;
  isNew?: boolean;
}

interface BookCardProps {
  book: Book;
}

export const Book = ({ book }: BookCardProps) => {
  const { image, title, date, price, isNew = false } = book;

  return (
    <div
      className={`relative p-8.75 w-67 ${isNew ? 'bg-[#fdf1ea] border border-secondary' : 'bg-[#ededed]'}`}
    >
      <div className="absolute top-3 right-2.5">
        <DropdownMenu
          items={[
            { label: 'Редактировать', onClick: () => console.log('edit') },
            { label: 'Удалить', onClick: () => console.log('delete'), danger: true }
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
  );
};
