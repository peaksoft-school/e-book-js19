import { useState } from 'react';
import BookHistoryImage from '../../../shared/assets/images/book-history.png';
import { useNavigate, useParams } from 'react-router';
import { Breadcrumbs } from '../../../shared/ui/Breadcrumbs';
import { Tabs } from '../../../shared/ui/Tabs';
import { PopUp } from '../../../shared/ui/PopUp';
import { Modal } from '../../../shared/ui/modal/Modal';
import { Button } from '../../../shared/ui/Button';
import { Book } from '../../../shared/ui/books/Book';

const tabs = [
  { value: 'profile', label: 'Профиль' },
  { value: 'books', label: 'Книги' }
];

const bookTypes = [
  { id: 1, name: 'Все' },
  { id: 2, name: 'В избранном' },
  { id: 3, name: 'В корзине' },
  { id: 4, name: 'Продажи' },
  { id: 5, name: 'Согласован' }
];

const books = [
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: true,
    id: 1,
    favorite: 12,
    cart: 1
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false,
    id: 2,
    favorite: 12,
    cart: 1
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false,
    id: 3,
    favorite: 12,
    cart: 1
  },
  {
    image: BookHistoryImage,
    title: 'История книги',
    date: '20 февраль 2021',
    price: 230,
    isNew: false,
    id: 4,
    favorite: 12,
    cart: 1
  }
];

const vendor = {
  name: 'Мыктыбек',
  surname: 'Мыктыбеков',
  phone: '+996 500 345 678',
  email: 'mykty@gmail.com',
  registeredAt: '21 май 2019'
};

const VendorDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('profile');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <section className="flex flex-col gap-6 mt-15">
      <Breadcrumbs
        items={[
          { label: 'Продавцы', path: '/admin/vendors' },
          { label: `${vendor.name} ${vendor.surname}` }
        ]}
      />

      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'profile' && (
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-3 gap-y-15 gap-x-30 max-w-2xl">
            <div className="flex flex-col gap-1">
              <p className="text-body text-neutral-300">Имя</p>
              <p className="text-body text-primary">{vendor.name}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-body text-neutral-300">Номер телефона</p>
              <p className="text-body text-primary">{vendor.phone}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-body text-neutral-300">Дата регистрации</p>
              <p className="text-body text-primary">{vendor.registeredAt}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-body text-neutral-300">Фамилия</p>
              <p className="text-body text-primary">{vendor.surname}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-body text-neutral-300">Email</p>
              <p className="text-body text-primary">{vendor.email}</p>
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

      {activeTab === 'books' && (
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <p className="text-body-small text-neutral-300">Всего 25 книг</p>

            <PopUp
              label="Все"
              items={bookTypes}
              align="right"
              onSelect={(item) => console.log(item)}
            />
          </div>

          <div className="flex gap-6 flex-wrap">
            {books.map((book, index) => (
              <Book
                key={index}
                book={book}
                onNavigate={() =>
                  navigate(`/admin/vendors/${id}/book/${book.id}`, { state: 'read' })
                }
                variant="vendor"
              />
            ))}
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
                navigate('/admin/vendors');
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

export default VendorDetail;
