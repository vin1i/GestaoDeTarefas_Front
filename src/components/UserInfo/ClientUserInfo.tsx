"use client";  

import dynamic from "next/dynamic";

// Usando dynamic para carregar o UserInfo apenas no cliente
const UserInfo = dynamic(() => import('@/components/UserInfo/UserInfo'), { ssr: false });

export default function ClientUserInfo() {
  return <UserInfo />;
}
