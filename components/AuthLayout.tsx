import { ReactNode } from "react";
import TheNavbar from "./TheNavbar";

interface Props {
  children: ReactNode
}
export default function AuthLayout({children}: Props) {
  return (
    <>
    <TheNavbar />
    {children}
    </>
  )
}