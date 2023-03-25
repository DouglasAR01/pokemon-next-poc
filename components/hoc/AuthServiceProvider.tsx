import useAuthStore from "@/stores/authStore";
import { ReactNode, useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";

interface Props {
  children: ReactNode;
}

export default function AuthServiceProvider({ children }: Props) {
  const authStore = useAuthStore();
  const user = useUser();
  useEffect(() => {
    if (user) {
      console.log(user);
      authStore.login(user);
    }
  }, [user]);
  return <>{children}</>;
}
