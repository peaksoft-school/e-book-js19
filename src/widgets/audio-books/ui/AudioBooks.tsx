import { NewIcon } from '../../../shared/assets/icons';

interface AudioBook {
  id: number;
  image: string;
  title: string;
  author: string;
  duration: string;
  price: number;
  new: boolean;
}

interface AudioBooksProps {
  books: AudioBook[];
  onViewAll?: () => void;
}

export const AudioBooks = ({ books, onViewAll }: AudioBooksProps) => {
  const sizes = [
    { img: 'w-[350px] h-auto', self: 'self-end', justify: '' },
    { img: 'w-[500px] h-auto', self: 'self-center', justify: '' },
    { img: 'w-[350px] h-auto', self: 'self-start', justify: 'justify-self-end' }
  ];

  return (
    <div className="px-20 py-10 h-screen">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-h2 font-bold text-primary">Аудиокниги</h2>

        <button
          type="button"
          onClick={onViewAll}
          className="text-body text-secondary underline hover:opacity-70 transition-opacity"
        >
          Смотреть все
        </button>
      </div>

      <div className="grid grid-cols-3 gap-40 h-[80vh]">
        {books.slice(0, 3).map((book, index) => {
          const size = sizes[index];

          return (
            <div
              key={book.id}
              className={`flex flex-col gap-3 ${size.self} ${size.justify} ${size.img}`}
            >
              <div className="relative">
                <img src={book.image} alt={book.title} className={`${size.img} object-cover`} />
                {book.new && (
                  <img src={NewIcon} alt="new" className="absolute top-4 -right-26.25 w-60" />
                )}
              </div>

              <div className={`flex flex-col gap-1 ${size.img}`}>
                <p className="text-body font-bold text-primary uppercase">{book.title}</p>
                <p className="text-body-small text-neutral-300">{book.author}</p>
                <div className="flex items-center justify-between">
                  <p className="text-body-small text-neutral-300">{book.duration}</p>
                  <p className="text-body text-primary font-bold">{book.price} с</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
