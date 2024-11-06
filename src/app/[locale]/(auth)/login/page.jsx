
import LoginForm from "@/components/LoginForm";
import Image from "next/image";
export default function Login() {
  return (
    <main className="flex h-screen gap-10  w-full  flex-col items-center md:justify-center justify-center p-10">
      <Image src="/img/spelya_logo.png" width={133} height={155} alt="Logo" />
      <LoginForm/>
    </main>
  );
}
