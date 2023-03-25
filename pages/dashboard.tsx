import AuthGuard from "../components/hoc/AuthGuard";
export default function dashboard() {
  return (
    <AuthGuard>
      <h1>Solo para logeados</h1>
    </AuthGuard>
  );
}
