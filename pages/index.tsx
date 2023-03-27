import FormText from "@/components/form/FormText";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { FormEvent, useState } from "react";
import GuestGuard from "@/components/hoc/GuestGuard";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { object, string, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login() {
  const validation = object({
    email: string().required(),
    password: string().required(),
  });
  type Login = InferType<typeof validation>;

  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<Login>({
    resolver: yupResolver(validation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState<boolean>(false);
  const authStore = useAuthStore();
  const router = useRouter();
  const supabase = useSupabaseClient();

  const onSubmit = async (payload: Login) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword(payload);
    if (data.user) {
      authStore.login(data.user);
      router.push("/dashboard");
      console.log("logged");
      return;
    }
    if (error) {
      setError("email", {
        type: "backend",
        message: error.message,
      });
    }
    setLoading(false);
  };

  return (
    <GuestGuard>
      <article className="grid grid-nogutters flex-column min-h-screen justify-content-center">
        <section className="col-12 md:col-4 md:col-offset-4">
          <Card title="Login">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <FormText
                    name={field.name}
                    label="Email: "
                    placeholder="example@example.com"
                    icon="pi pi-at"
                    type="email"
                    value={field.value}
                    handler={field.onChange}
                    errors={errors}
                  />
                )}
              ></Controller>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <FormText
                    name={field.name}
                    label="Password:"
                    icon="pi pi-lock"
                    type="password"
                    value={field.value}
                    handler={field.onChange}
                    errors={errors}
                  />
                )}
              ></Controller>
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
