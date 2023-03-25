import Link from "next/link";

export default function Home() {
  return (
    <div className="text-primary">
      <Link href="/login">Ir a login</Link>
    </div>
  )
}
