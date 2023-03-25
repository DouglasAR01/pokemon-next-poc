import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export default function GuestGuard({ children }: Props) {
  const authStore = useAuthStore();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (authStore.isLoggedIn) {
      setLoading(true);
      router.push("/dashboard");
    }
  }, [authStore.isLoggedIn]);
  if (loading) {
    return <p>Loading...</p>;
  }
  return <>{children}</>;
}
