import { Button } from './Button';
import { Modal } from './Modal';

export interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const LogoutModal = ({ isOpen, onClose, onConfirm }: LogoutModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <div className="flex flex-col items-center gap-8">
      <p className="text-body text-primary text-center">Вы уверены, что хотите выйти?</p>

      <div className="flex items-center gap-6">
        <Button variant="ghost" onClick={onClose}>
          Отменить
        </Button>

        <Button variant="primary" onClick={onConfirm}>
          Выйти
        </Button>
      </div>
    </div>
  </Modal>
);
