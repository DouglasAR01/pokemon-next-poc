import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import type { AppProps } from "next/app";
import AuthServiceProvider from "@/components/hoc/AuthServiceProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthServiceProvider>
      <Component {...pageProps} />
    </AuthServiceProvider>
  );
}
