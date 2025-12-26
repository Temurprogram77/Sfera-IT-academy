import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BoxCubeIcon,
  BoxIcon,
  CalenderIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  GridIcon,
  GroupIcon,
  HorizontaLDots,
  ListIcon,
  PageIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  UserCircleIcon,
  UserIcon,
} from "../icons";
import { useSidebar } from "../context/SidebarContext";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string }[];
  roles: string[]; // Qaysi rollarda ko‘rinishi kerak
};

const allNavItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Boshqaruv paneli",
    path: "/",
    roles: ["SUPER_ADMIN", "ADMIN"],
  },
  {
    icon: <UserIcon />,
    name: "O'qituvchilar",
    path: "/teachers",
    roles: ["SUPER_ADMIN", "ADMIN"],
  },
  {
    icon: <UserCircleIcon />,
    name: "O'quvchilar",
    path: "/students",
    roles: ["SUPER_ADMIN", "ADMIN", "TEACHER", "PARENT"],
  },
  {
    icon: <GroupIcon />,
    name: "Ota-onalar",
    path: "/parents",
    roles: ["SUPER_ADMIN", "ADMIN"],
  },
  {
    icon: <CheckCircleIcon />,
    name: "Davomat",
    path: "/attendance",
    roles: ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  },
  {
    icon: <GroupIcon />,
    name: "Guruhlar",
    path: "/groups",
    roles: ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  },
  {
    icon: <BoxIcon />,
    name: "Xonalar",
    path: "/rooms",
    roles: ["SUPER_ADMIN", "ADMIN"],
  },
  {
    icon: <CalenderIcon />,
    name: "Taqvim",
    path: "/calendar",
    roles: ["SUPER_ADMIN", "ADMIN", "TEACHER", "STUDENT", "PARENT"],
  },
  {
    icon: <UserCircleIcon />,
    name: "Shaxsiy profil",
    path: "/profile",
    roles: ["SUPER_ADMIN", "ADMIN", "TEACHER", "STUDENT", "PARENT"],
  },
  // UI va test sahifalari faqat SUPER_ADMIN ga
  {
    icon: <ListIcon />,
    name: "Formalar",
    subItems: [{ name: "Forma elementlari", path: "/form-elements" }],
    roles: ["SUPER_ADMIN"],
  },
  {
    icon: <TableIcon />,
    name: "Jadvallar",
    subItems: [{ name: "Oddiy jadvallar", path: "/basic-tables" }],
    roles: ["SUPER_ADMIN"],
  },
  {
    icon: <PageIcon />,
    name: "Sahifalar",
    subItems: [
      { name: "Bo‘sh sahifa", path: "/blank" },
      { name: "404 Xato", path: "/error-404" },
    ],
    roles: ["SUPER_ADMIN"],
  },
];

const othersItems: NavItem[] = [
  {
    icon: <PieChartIcon />,
    name: "Diagrammalar",
    subItems: [
      { name: "Chiziqli diagramma", path: "/line-chart" },
      { name: "Ustunli diagramma", path: "/bar-chart" },
    ],
    roles: ["SUPER_ADMIN"],
  },
  {
    icon: <BoxCubeIcon />,
    name: "UI elementlari",
    subItems: [
      { name: "Ogohlantirishlar", path: "/alerts" },
      { name: "Avatar", path: "/avatars" },
      { name: "Belgilar", path: "/badge" },
      { name: "Tugmalar", path: "/buttons" },
      { name: "Rasmlar", path: "/images" },
      { name: "Videolar", path: "/videos" },
    ],
    roles: ["SUPER_ADMIN"],
  },
  {
    icon: <PlugInIcon />,
    name: "Autentifikatsiya",
    subItems: [
      { name: "Kirish", path: "/signin" },
      { name: "Ro‘yxatdan o‘tish", path: "/signup" },
    ],
    roles: ["SUPER_ADMIN"],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered } = useSidebar();
  const location = useLocation();

  const [currentRole, setCurrentRole] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // localStorage dan role ni o'qish
  useEffect(() => {
    const role = localStorage.getItem("role");
    setCurrentRole(role);
  }, []);

  // Role bo'yicha filtrlangan menyular
  const filteredNavItems = allNavItems.filter(
    (item) => currentRole && item.roles.includes(currentRole)
  );

  const filteredOthersItems = othersItems.filter(
    (item) => currentRole && item.roles.includes(currentRole)
  );

  const isActive = useCallback(
    (path: string) => location.pathname.startsWith(path),
    [location.pathname]
  );

  useEffect(() => {
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items =
        menuType === "main" ? filteredNavItems : filteredOthersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({ type: menuType as "main" | "others", index });
              submenuMatched = true;
            }
          });
        }
      });
    });
    if (!submenuMatched) setOpenSubmenu(null);
  }, [location, isActive, filteredNavItems, filteredOthersItems]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prev) => ({
          ...prev,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prev) =>
      prev && prev.type === menuType && prev.index === index
        ? null
        : { type: menuType, index }
    );
  };

  const renderMenuItems = (items: NavItem[], menuType: "main" | "others") => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer flex items-center gap-3 ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={`menu-item-icon-size ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="menu-item-text">{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                to={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                } cursor-pointer flex items-center gap-3 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "lg:justify-start"
                }`}
              >
                <span className="menu-item-icon-size">{nav.icon}</span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text">{nav.name}</span>
                )}
              </Link>
            )
          )}

          {/* Submenu */}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  // Agar role hali yuklanmagan bo'lsa, bo'sh sidebar
  if (!currentRole) {
    return null;
  }

  return (
    <aside
      className={`fixed mt-16 px-3 flex flex-col lg:mt-0 top-0 left-0 bg-white text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${isExpanded || isHovered ? "w-[290px]" : "w-[90px]"} 
        ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
    >
      {/* Logo */}
      <div
        className={`py-5 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link to="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <div className="flex items-center gap-2">
              <img
                className="w-[60px] h-[60px] object-contain"
                src="/images/logoOne.png"
                alt="Logo"
              />
              <span className="text-[33px] leading-6 font-bold">
                Sfera Academy
              </span>
            </div>
          ) : (
            <img src="/images/logoOne.png" alt="Logo" width={32} height={32} />
          )}
        </Link>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar flex-1">
        <nav className="mb-6 flex-1">
          <div className="flex flex-col gap-8">
            {/* Asosiy menyular */}
            {filteredNavItems.length > 0 && (
              <div>
                <h2
                  className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                    !isExpanded && !isHovered
                      ? "lg:justify-center"
                      : "justify-start"
                  }`}
                >
                  {isExpanded || isHovered || isMobileOpen ? (
                    "Menyu"
                  ) : (
                    <HorizontaLDots className="size-6" />
                  )}
                </h2>
                {renderMenuItems(filteredNavItems, "main")}
              </div>
            )}

            {/* Qo'shimcha menyular (faqat SUPER_ADMIN ga) */}
            {filteredOthersItems.length > 0 && (
              <div>
                <h2
                  className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                    !isExpanded && !isHovered
                      ? "lg:justify-center"
                      : "justify-start"
                  }`}
                >
                  {isExpanded || isHovered || isMobileOpen ? (
                    "Boshqalar"
                  ) : (
                    <HorizontaLDots className="size-6" />
                  )}
                </h2>
                {renderMenuItems(filteredOthersItems, "others")}
              </div>
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
