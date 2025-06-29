'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function CreatePost() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('posts')
      .insert([{ titulo, conteudo }]);

    if (error) {
      setMensagem(`Erro: ${error.message}`);
    } else {
      setMensagem('Post registrado com sucesso!');
      setTitulo('');
      setConteudo('');
    }
  };

  return (
    <main className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Registrar Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Conteúdo</label>
          <textarea
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
            required
            className="border p-2 w-full"
            rows={5}
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
