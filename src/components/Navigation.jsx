import { NavLink } from 'react-router-dom';
import {
  IconHome,
  IconTarget,
  IconCalendar,
  IconChartBar,
  IconFlame
} from '@tabler/icons-react';

const navItems = [
  { path: '/today',      Icon: IconHome,     label: 'Сегодня'    },
  { path: '/goals',      Icon: IconTarget,   label: 'Цели'       },
  { path: '/schedule',   Icon: IconCalendar, label: 'Расписание' },
  { path: '/progress',   Icon: IconChartBar, label: 'Прогресс'   },
  { path: '/challenges', Icon: IconFlame,    label: 'Челленджи'  },
];

function Navigation() {
  return (
    <nav className="nav">
      {navItems.map(({ path, Icon, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            isActive ? 'nav__item nav__item--active' : 'nav__item'
          }
        >
          <Icon size={22} aria-hidden="true" />
          <span className="nav__label">{label}</span>
        </NavLink>
      ))}
    </nav>
  )
};

export default Navigation;