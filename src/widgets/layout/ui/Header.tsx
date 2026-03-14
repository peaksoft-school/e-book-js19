import {
  BellIcon,
  DownIcon,
  FavoriteIcon,
  InfoIcon,
  LogoIcon,
  MenuIcon,
  ProfileIcon,
  ProfileVendorIcon
} from '../../shared/assets/icons';
import { Button } from '../../shared/ui/Button';
import { Input } from '../../shared/ui/Input';

type HeaderVariant = 'user' | 'user-auth' | 'vendor' | 'vendor-auth' | 'admin';

interface HeaderProps {
  variant?: HeaderVariant;
  userName?: string;
  cartCount?: number;
  favoriteCount?: number;
  onLogin?: () => void;
  onCart?: () => void;
  onFavorite?: () => void;
  onProfile?: () => void;
}

const Header = ({
  variant = 'user',
  userName,
  cartCount = 0,
  favoriteCount = 0,
  onLogin,
  onCart,
  onFavorite,
  onProfile
}: HeaderProps) => {
  return (
    <header className="bg-white w-full px-20">
      <div className="flex items-center pb-3 gap-10 justify-between">
        <img src={LogoIcon} alt="logo" />

        {variant !== 'vendor-auth' && (
          <div className="flex-1">
            <Input variant="search" placeholder="Искать жанр, книги, авторов, издательства..." />
          </div>
        )}

        <div className="flex items-center gap-4 shrink-0">
          {(variant === 'user' || variant === 'user-auth') && (
            <>
              <button type="button" onClick={onFavorite} className="relative cursor-pointer">
                <img src={FavoriteIcon} alt="favorite" className="w-6 h-6" />
                {favoriteCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-danger rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={onCart}
                className="flex items-center gap-1 text-body text-primary cursor-pointer"
              >
                Корзина ({cartCount})
              </button>
            </>
          )}

          {variant === 'vendor' && (
            <>
              <button type="button" className="relative cursor-pointer">
                <img src={BellIcon} alt="notification" className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-danger rounded-full" />
              </button>

              <button
                type="button"
                onClick={onProfile}
                className="flex items-center gap-1 cursor-pointer"
              >
                <img src={ProfileVendorIcon} alt="profile" className="w-7 h-7" />
                <img src={DownIcon} alt="down" width={16} height={16} />
              </button>
            </>
          )}

          {variant === 'vendor-auth' && (
            <Button variant="muted" onClick={onLogin}>
              Личный кабинет
            </Button>
          )}

          {variant === 'admin' && (
            <button
              type="button"
              onClick={onProfile}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src={ProfileVendorIcon} alt="profile" className="w-7 h-7" />
              <span className="text-body font-semibold text-primary">Администратор</span>
            </button>
          )}
        </div>
      </div>

      {(variant === 'user' || variant === 'user-auth') && (
        <div className="flex items-center py-3 gap-8 justify-between">
          <div className="flex gap-25">
            <button
              type="button"
              className="flex items-center gap-3.5 text-body text-primary cursor-pointer"
            >
              <img src={MenuIcon} alt="menu" /> Жанры
            </button>

            <nav className="flex items-center gap-8">
              <a href="#" className="text-body text-primary hover:text-secondary transition-colors">
                Электронные книги
              </a>
              <a href="#" className="text-body text-primary hover:text-secondary transition-colors">
                Audio books
              </a>
              <a href="#" className="text-body text-primary hover:text-secondary transition-colors">
                Промокоды
              </a>
              <a href="#" className="text-body text-primary hover:text-secondary transition-colors">
                Начать продавать на eBook
              </a>
            </nav>
          </div>

          {variant === 'user-auth' ? (
            <Button variant="primary" onClick={onLogin}>
              Войти
            </Button>
          ) : (
            <Button variant="outline" className="text-black! border-black">
              <img src={ProfileIcon} alt="profile" />
              {userName}
            </Button>
          )}
        </div>
      )}

      {variant === 'vendor' && (
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Button variant="outline" className="text-secondary! border-secondary">
              Создать промокод
            </Button>

            <img src={InfoIcon} alt="info" className="w-5 h-5 text-neutral-300" />
          </div>

          <Button variant="secondary">+ Добавить книгу</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
