import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GuestGuard({ children }: Props) {
  const authStore = useAuthStore();
  const router = useRouter();
  if (!authStore.isLoggedIn) return router.push("/login");

  return <>{children}</>;
}
