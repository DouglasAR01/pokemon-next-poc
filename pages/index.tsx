import FormText from "@/components/form/FormText";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { FormEvent, useState } from "react";
import GuestGuard from "@/components/hoc/GuestGuard";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const authStore = useAuthStore();
  const router = useRouter();
  const supabase = useSupabaseClient();

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (data.user) {
      authStore.login(data.user);
      router.push("/dashboard");
      console.log("logged");
      return;
    }
    if (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  return (
    <GuestGuard>
      <article className="grid grid-nogutters flex-column min-h-screen justify-content-center">
        <section className="col-12 md:col-4 md:col-offset-4">
          <Card title="Login">
            <form onSubmit={(e) => handleSubmit(e)}>
              <FormText
                name="email"
                label="Email: "
                placeholder="example@example.com"
                icon="pi pi-at"
                type="email"
                value={email}
                handler={handleEmail}
              />
              <FormText
                name="password"
                label="Password: "
                icon="pi pi-lock"
                type="password"
                value={password}
                handler={handlePassword}
              />
              <Button
                type="submit"
                className="w-full justify-content-center"
                loading={loading}
              >
                Submit
              </Button>
            </form>
          </Card>
        </section>
      </article>
    </GuestGuard>
  );
}
