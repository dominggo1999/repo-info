import React, { useEffect, useState } from "react";
import {
  HeaderContainer,
  HeaderIconButton,
  Brand,
  useFullscreen,
  Kbd,
  Link,
} from "@acme/ui-react";
import { useSidebarStore } from "stores";
import { BiExitFullscreen, BiFullscreen } from "react-icons/bi";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import clsx from "clsx";
import { useKBar } from "kbar";
import { useTheme } from "next-themes";

const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { fullscreen, toggle: toggleFullScreen } = useFullscreen();
  const { theme, setTheme } = useTheme();
  const { isOpen: isSidebarOpen, setIsOpen } = useSidebarStore();
  const { query } = useKBar();
  const isDark = theme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <HeaderContainer data-cy="header">
      <div className="flex h-full w-full items-center justify-between">
        <Link
          data-cy="header-brand"
          className="hidden md:inline-block"
          href="/"
        >
          <Brand />
        </Link>

        <Link className="md:hidden" href="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-xl font-bold !text-white">
            R
          </span>
        </Link>

        <div className="flex items-center sm:gap-x-3">
          <button
            onClick={query.toggle}
            className="mr-2 hidden items-center gap-x-3 text-sm md:flex"
          >
            <span className="text-base">
              <AiOutlineSearch />
            </span>
            <span>Search something</span>
            <div className="flex gap-x-2">
              <Kbd>Ctrl</Kbd>
              <Kbd>K</Kbd>
            </div>
          </button>

          <HeaderIconButton
            onClick={query.toggle}
            className={clsx(
              "md:hidden",
              isSidebarOpen && "pointer-events-none",
            )}
            icon={<AiOutlineSearch />}
          />

          <HeaderIconButton
            onClick={toggleFullScreen}
            icon={fullscreen ? <BiExitFullscreen /> : <BiFullscreen />}
          />

          {/* See https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch for details */}
          {mounted ? (
            <HeaderIconButton
              onClick={toggleTheme}
              icon={isDark ? <MdOutlineDarkMode /> : <MdLightMode />}
            />
          ) : (
            // Just for preventing ui flashing
            // TODO : consider rendering a skeleton/placeholder until mounted on the client side.
            <HeaderIconButton className="opacity-0" icon={<MdLightMode />} />
          )}

          <HeaderIconButton
            onClick={() => setIsOpen(!isSidebarOpen)}
            icon={<AiOutlineMenu />}
            className={clsx(isSidebarOpen && "pointer-events-none")}
          />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
