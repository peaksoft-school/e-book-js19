import { Outlet } from 'react-router';
import { Header } from '../ui/Header';
import { Sidebar } from '../../admin/ui/Sidebar';

export const AdminLayout = () => (
  <div className="flex">
    <Sidebar />

    <div className="w-full py-7.5 flex flex-col gap-12.5 px-5">
      <Header variant="admin" />

      <Outlet />
    </div>
  </div>
);
