import { Outlet } from 'react-router';
import { Sidebar } from '../../admin/ui/SideBar';
import Header from '../ui/Header';

export const AdminLayout = () => (
  <div className="flex">
    <Sidebar />

    <div className="w-full py-7.5 flex flex-col gap-12.5">
      <Header variant="admin" />

      <Outlet />
    </div>
  </div>
);
