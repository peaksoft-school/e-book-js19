import { Link } from 'react-router';

interface Genre {
  id: number;
  name: string;
  count: number;
  path: string;
}

const genres: Genre[] = [
  { id: 1, name: 'Образование', count: 1234, path: '/genres/education' },
  { id: 2, name: 'Художественная лит...', count: 3453, path: '/genres/fiction' },
  { id: 3, name: 'Книги для детей', count: 3453, path: '/genres/children' },
  { id: 4, name: 'Наука и техника', count: 3453, path: '/genres/science' },
  { id: 5, name: 'Общество', count: 435, path: '/genres/society' },
  { id: 6, name: 'Деловая литература', count: 435, path: '/genres/business' },
  { id: 7, name: 'Красота. Здоровье.Спорт', count: 435, path: '/genres/health' },
  { id: 8, name: 'Увлечения', count: 435, path: '/genres/hobbies' },
  { id: 9, name: 'Психология', count: 435, path: '/genres/psychology' }
];

export const GenreMenu = () => (
  <div className="absolute top-full left-0 z-50 bg-white border border-neutral-200 shadow-md p-6 w-225">
    <div className="grid grid-cols-3 gap-x-12">
      {[0, 1, 2].map((col) => (
        <div key={col} className="flex flex-col">
          {genres.map((genre) => (
            <Link
              key={`${col}-${genre.id}`}
              to={genre.path}
              className="flex items-center justify-between py-2.5 border-b border-neutral-200 last:border-0 text-primary hover:text-secondary transition-colors"
            >
              <span className="text-body">{genre.name}</span>
              <span className="text-body text-neutral-300">{genre.count}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  </div>
);
