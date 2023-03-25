import useAuthStore from "@/stores/authStore";
import { supabaseClient } from "@/services/supabase";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthServiceProvider({ children }: Props) {
  useEffect(() => {
    async () => {
      const user = await supabaseClient.auth.getUser();
      if (user) {
        const authStore = useAuthStore();
        authStore.login(user);
      }
    };
  });

  return <>{children}</>;
}
