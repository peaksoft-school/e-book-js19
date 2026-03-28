import { useReactTable, getCoreRowModel, flexRender, type ColumnDef } from '@tanstack/react-table';

interface TableProps<T extends object> {
  columns: ColumnDef<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
}

export const Table = <T extends object>({ columns, data, onRowClick }: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <table className="w-full">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="border-b border-neutral-200">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className={`py-3 px-4 text-body font-bold text-primary ${
                  header.id === 'actions' ? 'text-right' : 'text-left'
                }`}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row, index) => (
          <tr
            key={row.id}
            onClick={() => onRowClick?.(row.original)}
            className={`transition-colors cursor-pointer ${
              index % 2 !== 0 ? 'bg-light hover:bg-[#fdede4]' : 'bg-white hover:bg-[#fdede4]'
            }`}
          >
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                onClick={(e) => (cell.column.id === 'actions' ? e.stopPropagation() : undefined)}
                className={`py-4 px-4 text-body text-primary ${
                  cell.column.id === 'actions' ? 'text-right' : ''
                }`}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
