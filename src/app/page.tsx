// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">CRUD Users e Posts</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/users/create" className="text-blue-600 hover:underline">Registrar Usuário</Link>
        </li>
        <li>
          <Link href="/users" className="text-blue-600 hover:underline">Lista de Usuários</Link>
        </li>
        <li>
          <Link href="/posts/create" className="text-blue-600 hover:underline">Registrar Post</Link>
        </li>
        <li>
          <Link href="/posts" className="text-blue-600 hover:underline">Lista de Posts</Link>
        </li>
      </ul>
    </main>
  );
}
