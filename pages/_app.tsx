import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "../styles/containers.css";
import type { AppProps } from "next/app";
import AuthServiceProvider from "@/components/hoc/AuthServiceProvider";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { supabaseClient } from "@/services/supabase";

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() => supabaseClient);
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <AuthServiceProvider>
        <Component {...pageProps}/>
      </AuthServiceProvider>
    </SessionContextProvider>
  );
}
