import { useNavigate } from 'react-router';
import { ADMIN_USERS_COLUMNS } from '../../../shared/constants/columns/admin-columns';
import { Table } from '../../../shared/ui/Table';

const users = [
  {
    id: 1,
    name: 'Мыктыбек Мыктыбеков',
    email: 'myktybek@gmail.com'
  },
  {
    id: 2,
    name: 'Мыктыбек Мыктыбеков',
    email: 'myktybek@gmail.com'
  },
  {
    id: 3,
    name: 'Мыктыбек Мыктыбеков',
    email: 'myktybek@gmail.com'
  }
];

const Users = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-10">
      <Table
        columns={ADMIN_USERS_COLUMNS}
        data={users}
        onRowClick={(user) => navigate(`/admin/users/${user.id}`)}
      />
    </section>
  );
};

export default Users;
