import { lazy } from 'react';
import { Navigate } from 'react-router';

const Announcements = lazy(() => import('../../../pages/admin/announcements/Announcements'));
const BookDetail = lazy(() => import('../../../pages/book-details/BookDetail'));
const Vendors = lazy(() => import('../../../pages/admin/vendors/Vendors'));
const VendorDetail = lazy(() => import('../../../pages/admin/vendors/VendorDetail'));
const Users = lazy(() => import('../../../pages/admin/users/Users'));
const UserDetail = lazy(() => import('../../../pages/admin/users/UserDetail'));
const Books = lazy(() => import('../../../pages/admin/books/Books'));
const AddBook = lazy(() => import('../../../pages/admin/books/AddBook'));

export const adminRoutes = [
  { index: true, element: <Navigate to="announcements" replace /> },
  { path: 'announcements', Component: Announcements },
  { path: 'announcements/:id', Component: BookDetail },
  { path: 'vendors', Component: Vendors },
  { path: 'vendors/:id', Component: VendorDetail },
  { path: 'vendors/:id/book/:bookId', Component: BookDetail },
  { path: 'users', Component: Users },
  { path: 'users/:id', Component: UserDetail },
  { path: 'books', Component: Books },
  { path: 'books/add-book', Component: AddBook }
];
