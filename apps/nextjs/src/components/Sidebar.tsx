import React, { useEffect } from "react";
import {
  Sidebar as SidebarContainer,
  SidebarLink,
  useBreakpoint,
} from "@acme/ui-react";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { MdPermContactCalendar } from "react-icons/md";
import { useSidebarStore } from "stores";
import { useRouter } from "next/router";
import { isLogin, logout } from "@acme/services";

const Sidebar: React.FC = () => {
  const { pathname, push } = useRouter();
  const { isOpen, setIsOpen } = useSidebarStore();
  const isMd = useBreakpoint("md");

  // Autoclose sidebar when resizing to md size
  useEffect(() => {
    setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMd]);

  const links = [
    {
      icon: <AiOutlineHome />,
      path: "/",
      label: "Home",
    },
    {
      icon: <BiNews />,
      path: "/about",
      label: "About",
    },
    {
      icon: <MdPermContactCalendar />,
      path: "/contact",
      label: "Contact",
    },
    {
      icon: <AiOutlineLogout />,
      onClick: () => {
        logout();
        push("/auth");
      },
      label: "Logout",
      needAuth: true,
    },
  ];

  return (
    <SidebarContainer setOpen={setIsOpen} open={isOpen}>
      {links?.map((link) => {
        const isActive = pathname === link.path;

        if (link.needAuth && !isLogin()) {
          return;
        }

        return (
          <SidebarLink
            isActive={isActive}
            onClick={() => {
              link.onClick && link.onClick();
              setIsOpen(false);
            }}
            href={link.path || "/"}
            key={link.path}
            icon={link.icon}
          >
            {link.label}
          </SidebarLink>
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;
