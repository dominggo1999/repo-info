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
import { SSRProvider as ReactAriaSsrProvider } from "@react-aria/ssr";

const MyApp: AppType<{
  dehydratedState: unknown;
}> = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider
          defaultTheme="dark"
          attribute="class"
          enableSystem={false}
        >
          <ReactAriaSsrProvider>
            <Main>
              <Component {...pageProps} />
            </Main>
          </ReactAriaSsrProvider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
