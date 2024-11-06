"use server"
import { cookies } from "next/headers";
export async function useLogin() {
  const userDataCookie = cookies().get('userData');
  if (!userDataCookie || !userDataCookie.value) {
    return false;
  }
  return userDataCookie.value;
}