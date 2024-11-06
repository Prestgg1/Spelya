"use client"

import { useRouter } from 'next/navigation';
import cookieCutter from 'cookie-cutter';

export default function Logout() {
  const router = useRouter();

  const handleLogout = () => {
    cookieCutter.set('userData', '', { expires: new Date(0), path: '/' });
    window.location.href = '/login';
  };
  handleLogout();
}