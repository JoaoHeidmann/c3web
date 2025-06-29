'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Post = {
  id: number;
  titulo: string;
  conteudo: string;
  created_at: string;
};

export default function ListPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        setErrorMsg(error.message);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    }

    fetchPosts();
  }, []);

  if (loading) return <p className="p-6">Carregando posts...</p>;

  if (errorMsg) return <p className="p-6 text-red-600">Erro: {errorMsg}</p>;

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Lista de Posts</h2>
      {posts.length === 0 ? (
        <p>Nenhum post encontrado.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border border-gray-300 p-4 rounded shadow-sm"
            >
              <h3 className="text-lg font-semibold">{post.titulo}</h3>
              <p className="mt-2 whitespace-pre-wrap">{post.conteudo}</p>
              <small className="text-gray-500">
                Criado em: {new Date(post.created_at).toLocaleString()}
              </small>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
