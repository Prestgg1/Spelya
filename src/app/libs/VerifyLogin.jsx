"use server"
import { cookies } from "next/headers";
export async function VerifyLogin() {
  const Cookies =  await cookies()
  const userDataCookie = Cookies.get('userData');
  if (!userDataCookie || !userDataCookie.value) {
    return false;
  }
  return userDataCookie.value;
}