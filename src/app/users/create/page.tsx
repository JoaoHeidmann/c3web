'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function CreateUser() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from('users')
      .insert([{ nome, email }]);

    if (error) {
      setMensagem(`Erro: ${error.message}`);
    } else {
      setMensagem('Usuário registrado com sucesso!');
      setNome('');
      setEmail('');
    }
  };

  return (
    <main className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Registrar Usuário</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Registrar
        </button>
      </form>
      {mensagem && <p className="mt-4">{mensagem}</p>}
    </main>
  );
}
