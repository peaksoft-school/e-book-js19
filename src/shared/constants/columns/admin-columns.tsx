import { createColumnHelper, type ColumnDef, type Row } from '@tanstack/react-table';
import { DeleteIcon } from '../../assets/icons';
import { AdminDeleteVendor } from '../../../widgets/admin/vendors/AdminDeleteVendor';

interface Vendor {
  id: number;
  name: string;
  phone: string;
  email: string;
  quantity: number;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Book {
  image: string;
  title: string;
  author: string;
  date: string;
  price: number;
  isNew: boolean;
  id: number;
}

const columnHelper = createColumnHelper<Book>();

export const ADMIN_VENDORS_COLUMNS: ColumnDef<Vendor>[] = [
  {
    id: 'index',
    header: '№',
    cell: ({ row }) => row.index + 1
  },
  {
    accessorKey: 'name',
    header: 'Имя'
  },
  {
    accessorKey: 'phone',
    header: 'Номер телефона'
  },
  {
    accessorKey: 'email',
    header: 'Почта'
  },
  {
    accessorKey: 'quantity',
    header: 'Количество книг'
  },
  {
    id: 'actions',
    header: ' ',
    cell: ({ row }) => <AdminDeleteVendor row={row} />
  }
];

export const ADMIN_USERS_COLUMNS: ColumnDef<User>[] = [
  {
    id: 'index',
    header: '№',
    cell: ({ row }) => row.index + 1
  },
  {
    accessorKey: 'name',
    header: 'ФИО'
  },
  {
    accessorKey: 'email',
    header: 'Почта'
  },
  {
    id: 'actions',
    header: ' ',
    cell: ({ row }: { row: Row<User> }) => (
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => console.log('delete', row.original)}
          className="p-2 rounded-full text-neutral-300 hover:text-secondary hover:bg-secondary/10 transition-colors"
        >
          <img src={DeleteIcon} alt="delete" />
        </button>
      </div>
    )
  }
];

export const ADMIN_USER_HISTORY_BOOKS_COLUMNS = [
  columnHelper.display({
    id: 'image',
    header: 'Фото',
    cell: ({ row }) => (
      <img src={row.original.image} alt={row.original.title} className="w-20.5 h-33 object-cover" />
    )
  }),

  columnHelper.display({
    id: 'title',
    header: 'Название/Автор',
    cell: ({ row }) => (
      <div>
        <p className="text-sm text-primary font-medium leading-tight">{row.original.title}</p>
        <p className="text-sm text-neutral-300 mt-0.5">{row.original.author}</p>
      </div>
    )
  }),

  columnHelper.display({
    id: 'quantity',
    header: 'Кол-во',
    cell: () => <p className="text-sm text-primary">1 шт.</p>
  }),

  columnHelper.display({
    id: 'price',
    header: 'Цена',
    cell: ({ row }) =>
      row.original.isNew ? (
        <div className="flex flex-col gap-0.5">
          <p className="text-xs text-secondary">Промокод 20%</p>
          <div className="flex items-center gap-1.5">
            <p className="text-sm text-neutral-300 line-through">{row.original.price} с</p>
            <p className="text-sm text-primary font-medium">
              {Math.round(row.original.price * 0.8)} с
            </p>
          </div>
        </div>
      ) : (
        <p className="text-sm text-primary">{row.original.price} с</p>
      )
  }),

  columnHelper.accessor('date', {
    header: 'Дата',
    cell: ({ getValue }) => <p className="text-sm text-primary">{getValue()}</p>
  }),

  columnHelper.display({
    id: 'status',
    header: 'Состояние',
    cell: () => <p className="text-sm text-primary">Завершен</p>
  })
];
