import { ApplicationOrangeIcon, BooksIcon, UserIcon, VendorIcon } from '../../shared/assets/icons';

export const ADMIN_LINKS = [
  { to: '/admin', label: 'Заявки', icon: ApplicationOrangeIcon, end: true },
  { to: '/admin/vendors', label: 'Продавцы', icon: VendorIcon },
  { to: '/admin/users', label: 'Пользователи', icon: UserIcon },
  { to: '/admin/books', label: 'Книги', icon: BooksIcon }
];
