import {
  ApplicationOrangeIcon,
  ApplicationIcon,
  BooksIcon,
  UserIcon,
  UserFillIcon,
  VendorIcon,
  VendorFillIcon,
  BooksOrangeIcon
} from '../../shared/assets/icons';

export const ADMIN_LINKS = [
  {
    to: '/admin/announcements',
    label: 'Заявки',
    icon: ApplicationIcon,
    activeIcon: ApplicationOrangeIcon
  },
  {
    to: '/admin/vendors',
    label: 'Продавцы',
    icon: VendorIcon,
    activeIcon: VendorFillIcon
  },
  {
    to: '/admin/users',
    label: 'Пользователи',
    icon: UserIcon,
    activeIcon: UserFillIcon
  },
  {
    to: '/admin/books',
    label: 'Книги',
    icon: BooksIcon,
    activeIcon: BooksOrangeIcon
  }
];
