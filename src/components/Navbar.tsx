'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-6 max-w-4xl mx-auto">
        <li>
          <Link href="/users/create" className="hover:underline">
            Registrar Usuário
          </Link>
        </li>
        <li>
          <Link href="/users" className="hover:underline">
            Lista de Usuários
          </Link>
        </li>
        <li>
          <Link href="/posts/create" className="hover:underline">
            Registrar Post
          </Link>
        </li>
        <li>
          <Link href="/posts" className="hover:underline">
            Lista de Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
