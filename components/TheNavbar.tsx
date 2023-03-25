import useAuthStore from "@/stores/authStore";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { CSSProperties } from "react";
export default function TheNavbar() {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const authStore = useAuthStore();

  const logout = async () => {
    await supabaseClient.auth.signOut();
    authStore.logout();
  };

  const start = <h3 className="m-0 mr-4 px-4">Pokemon!</h3>;
  const items: MenuItem[] = [
    {
      label: "Pokemon list",
      icon: "pi pi-list",
      command: () => router.push("/dashboard"),
    },
    {
      label: "Favorites",
      icon: "pi pi-heart",
      command: () => router.push("/favorites"),
    },
  ];
  const end = (
    <Button
      text
      rounded
      icon="pi pi-sign-out"
      aria-label="Sign out"
      onClick={() => logout()}
      className="mr-4"
    />
  );

  const navbarClass: CSSProperties = {
    height: '10vh',
    border: 0,
    padding: 0,
    borderRadius: 0
  }

  return (
    <Menubar className="shadow-1 mb-2" start={start} model={items} end={end} style={navbarClass}/>
  );
}
