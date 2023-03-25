import FormText from "@/components/form/FormText";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { FormEvent, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log([email, password]);
  };

  return (
    <article className="grid grid-nogutters flex-column min-h-screen justify-content-center">
      <section className="col-12 md:col-4 md:col-offset-4">
        <Card>
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
            <Button type="submit" className="w-full justify-content-center">Submit</Button>
          </form>
        </Card>
      </section>
    </article>
  );
}
