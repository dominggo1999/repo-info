import React from "react";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";
import { useFullscreen } from "@acme/ui-react";
import clsx from "clsx";
import { useRouter } from "next/router";

const openLinkInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const RenderResults = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item }) => {
        return typeof item === "string" ? (
          <div>{item}</div>
        ) : (
          <div
            className={clsx(
              "cursor-pointer truncate bg-primary-500 py-3 px-5 text-white",
            )}
          >
            {item.keywords}
          </div>
        );
      }}
    />
  );
};

export interface CommandPaletteProviderProps {
  children: React.ReactNode;
}

const CommandPaletteProvider: React.FC<CommandPaletteProviderProps> = ({
  children,
}) => {
  const { toggle: toggleFullScreen } = useFullscreen();
  const router = useRouter();

  const actions = [
    {
      id: "home",
      name: "Home",
      keywords: "Home",
      perform: () => router.push("/"),
    },
    {
      id: "contact",
      name: "Contact",
      keywords: "Contact",
      perform: () => router.push("/contact"),
    },
    {
      id: "about",
      name: "About",
      keywords: "About",
      perform: () => router.push("/about"),
    },
    {
      id: "source-code",
      name: "Source Code",
      keywords: "Source Code",
      perform: () =>
        openLinkInNewTab("https://github.com/dominggo1999/repo-info"),
    },
    {
      id: "portfolio",
      name: "Portfolio",
      keywords: "Portfolio",
      perform: () => openLinkInNewTab("https://arnolds.vercel.app/"),
    },
    {
      id: "fullscreen",
      name: "Fullscreen",
      shortcut: ["F11"],
      keywords: "Toggle Fullscreen",
      perform: () => toggleFullScreen(),
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="kbar-container z-[9999]">
          <KBarAnimator>
            <KBarSearch
              className={clsx(
                "rounded-md border border-slate-500 px-3 py-2",
                "mb-3 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500",
              )}
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

export default CommandPaletteProvider;
