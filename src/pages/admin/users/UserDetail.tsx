import { useState, useMemo } from 'react';
import BookHistoryImage from '../../../shared/assets/images/book-history.png';
import { useNavigate } from 'react-router';
import { Breadcrumbs } from '../../../shared/ui/Breadcrumbs';
import { Tabs } from '../../../shared/ui/Tabs';
import { Modal } from '../../../shared/ui/modal/Modal';
import { Button } from '../../../shared/ui/Button';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { ADMIN_USER_HISTORY_BOOKS_COLUMNS } from '../../../shared/constants/columns/admin-columns';

const tabs = [
  { value: 'profile', label: 'Профиль' },
  { value: 'transaction-history', label: 'История операций' }
];

type HistoryTabValue = 'bought' | 'favorite' | 'cart';

interface Book {
  image: string;
  title: string;
  author: string;
  date: string;
  price: number;
  isNew: boolean;
  id: number;
}

const allBooks: Record<HistoryTabValue, Book[]> = {
  bought: [
    {
      image: BookHistoryImage,
      title: 'История книги',
      author: 'Роулинг Джоан Кэтлин',
      date: '20 февраль 2021',
      price: 230,
      isNew: true,
      id: 1
    },
    {
      image: BookHistoryImage,
      title: 'История книги',
      author: 'Роулинг Джоан Кэтлин',
      date: '20 февраль 2021',
      price: 230,
      isNew: false,
      id: 2
    },
    {
      image: BookHistoryImage,
      title: 'История книги',
      author: 'Роулинг Джоан Кэтлин',
      date: '20 февраль 2021',
      price: 230,
      isNew: false,
      id: 3
    },
    {
      image: BookHistoryImage,
      title: 'История книги',
      author: 'Роулинг Джоан Кэтлин',
      date: '20 февраль 2021',
      price: 230,
      isNew: false,
      id: 4
    }
  ],
  favorite: [
    {
      image: BookHistoryImage,
      title: 'История книги',
      author: 'Роулинг Джоан Кэтлин',
      date: '15 март 2021',
      price: 180,
      isNew: false,
      id: 5
    },
    {
      image: BookHistoryImage,
      title: 'История книги',
      author: 'Роулинг Джоан Кэтлин',
      date: '10 апрель 2021',
      price: 320,
      isNew: true,
      id: 6
    }
  ],
  cart: [
    {
      image: BookHistoryImage,
      title: 'История книги',
      author: 'Роулинг Джоан Кэтлин',
      date: '01 май 2021',
      price: 150,
      isNew: false,
      id: 7
    }
  ]
};

const historyTabs: { value: HistoryTabValue; label: string }[] = [
  { value: 'bought', label: 'Купленные (123 книг)' },
  { value: 'favorite', label: 'В избранном (12 книг)' },
  { value: 'cart', label: 'В корзине (3 книг)' }
];

const user = {
  name: 'Мыктыбек',
  surname: 'Мыктыбеков',
  phone: '+996 500 345 678',
  email: 'mykty@gmail.com',
  registeredAt: '21 май 2019'
};

const UserDetail = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('profile');
  const [historyTab, setHistoryTab] = useState<HistoryTabValue>('bought');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const data = useMemo(() => allBooks[historyTab], [historyTab]);

  const table = useReactTable({
    data,
    columns: ADMIN_USER_HISTORY_BOOKS_COLUMNS,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <section className="flex flex-col gap-6 mt-15">
      <Breadcrumbs
        items={[
          { label: 'Пользователи', path: '/admin/users' },
          { label: `${user.name} ${user.surname}` }
        ]}
      />

      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'profile' && (
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-3 gap-y-15 gap-x-30 max-w-2xl">
            <div className="flex flex-col gap-1">
              <p className="text-body text-neutral-300">Имя</p>
              <p className="text-body text-primary">{user.name}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-body text-neutral-300">Номер телефона</p>
              <p className="text-body text-primary">{user.phone}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-body text-neutral-300">Дата регистрации</p>
              <p className="text-body text-primary">{user.registeredAt}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-body text-neutral-300">Фамилия</p>
              <p className="text-body text-primary">{user.surname}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-body text-neutral-300">Email</p>
              <p className="text-body text-primary">{user.email}</p>
            </div>
          </div>

          <Button
            type="button"
            onClick={() => setShowDeleteModal(true)}
            className="text-body text-secondary font-semibold hover:opacity-70 transition-opacity self-end"
          >
            Удалить профиль
          </Button>
        </div>
      )}

      {activeTab === 'transaction-history' && (
        <div className="flex">
          <div className="flex flex-col min-w-44 pr-6">
            <div className="border-b border-neutral-200 h-9 flex items-center">
              <Button className="hover:opacity-70 transition-opacity whitespace-nowrap text-[#545454] cursor-pointer">
                Очистить историю
              </Button>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              {historyTabs.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setHistoryTab(value)}
                  className={`text-left whitespace-nowrap hover:opacity-70 transition-opacity cursor-pointer ${
                    historyTab === value ? 'text-secondary' : 'text-primary'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="w-px bg-neutral-200 self-stretch" />

          <div className="flex-1 pl-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-neutral-200">
                  {table.getFlatHeaders().map((header) => (
                    <th
                      key={header.id}
                      className="font-normal text-left h-9 pr-8 whitespace-nowrap"
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="border-b border-neutral-200">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="py-4 pr-8">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <div className="flex flex-col items-center gap-8">
          <p className="text-body-big text-primary text-center">
            Вы уверены, что хотите удалить <br /> профиль?
          </p>
          <div className="flex items-center gap-6">
            <Button
              type="button"
              onClick={() => setShowDeleteModal(false)}
              className="text-body text-neutral-300 hover:text-primary transition-colors"
            >
              Отменить
            </Button>

            <Button
              variant="primary"
              onClick={() => {
                setShowDeleteModal(false);
                navigate('/admin/users');
              }}
            >
              Удалить
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default UserDetail;
