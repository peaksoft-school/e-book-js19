import { NavLink } from 'react-router';
import { LogoIcon } from '../../../shared/assets/icons';
import { ADMIN_LINKS } from '../../../shared/constants/links';

export const Sidebar = () => (
  <aside className="w-64 min-h-screen bg-secondary flex flex-col gap-18.5">
    <img src={LogoIcon} alt="logo" width={147} className="text-center mx-auto" />

    <nav className="flex flex-col mt-2">
      {ADMIN_LINKS.map(({ to, label, icon, activeIcon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex items-center gap-3 px-6 py-4 text-body transition-colors ${
              isActive ? 'bg-white text-secondary font-semibold' : 'text-white hover:bg-white/10'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img src={isActive ? activeIcon : icon} width={20} />
              {label}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  </aside>
);
