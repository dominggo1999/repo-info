// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";
import { ThemeProvider } from "next-themes";
import { Main } from "layouts";
import { CommandPaletteProvider } from "providers";
import { SSRProvider as ReactAriaSsrProvider } from "@react-aria/ssr";
import Head from "next/head";
import { PwaMeta } from "components";

const MyApp: AppType<{
  dehydratedState: unknown;
}> = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <PwaMeta />
        </Head>
        <ThemeProvider
          defaultTheme="dark"
          attribute="class"
          enableSystem={false}
        >
          <ReactAriaSsrProvider>
            <CommandPaletteProvider>
              <Main>
                <Component {...pageProps} />
              </Main>
            </CommandPaletteProvider>
          </ReactAriaSsrProvider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
