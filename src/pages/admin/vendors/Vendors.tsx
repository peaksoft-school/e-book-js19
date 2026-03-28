import { useNavigate } from 'react-router';
import { ADMIN_VENDORS_COLUMNS } from '../../../shared/constants/columns/admin-columns';
import { Table } from '../../../shared/ui/Table';

const vendors = [
  {
    id: 1,
    name: 'Мыктыбек Мыктыбеков',
    phone: '+996 500 123 123',
    email: 'myktybek@gmail.com',
    quantity: 34
  },
  {
    id: 2,
    name: 'Мыктыбек Мыктыбеков',
    phone: '+996 500 123 123',
    email: 'myktybek@gmail.com',
    quantity: 34
  },
  {
    id: 3,
    name: 'Мыктыбек Мыктыбеков',
    phone: '+996 500 123 123',
    email: 'myktybek@gmail.com',
    quantity: 34
  }
];

const Vendors = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-10">
      <Table
        columns={ADMIN_VENDORS_COLUMNS}
        data={vendors}
        onRowClick={(vendor) => navigate(`/admin/vendors/${vendor.id}`)}
      />
    </section>
  );
};

export default Vendors;
