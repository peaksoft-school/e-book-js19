import { useState } from 'react';
import { DeleteIcon } from '../../../shared/assets/icons';
import { Modal } from '../../../shared/ui/modal/Modal';
import { Button } from '../../../shared/ui/Button';
import type { Row } from '@tanstack/react-table';

interface Vendor {
  id: number;
  name: string;
  phone: string;
  email: string;
  quantity: number;
}

interface Props {
  row: Row<Vendor>;
}

export const AdminDeleteVendor = ({ row }: Props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowDeleteModal(true)}
        className="p-2 rounded-full text-neutral-300 hover:text-[#f88348] hover:bg-secondary/15 transition-colors cursor-pointer"
      >
        <img src={DeleteIcon} alt="delete" />
      </button>

      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <div className="flex flex-col items-center gap-8">
          <p className="text-body-big text-primary text-center">
            Вы уверены, что хотите удалить <br />{' '}
            <span className="font-semibold">{row.original.name}</span>?
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
                console.log('delete', row.original);
                setShowDeleteModal(false);
              }}
            >
              Удалить
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
