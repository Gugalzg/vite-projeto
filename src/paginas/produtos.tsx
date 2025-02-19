import { useState, useEffect } from 'react';
import { ProdutosService } from '../servicos/api';

export default function Produtos() {
  const [produtos, setProdutos] = useState<{ id: number; title: string; }[]>([]);

  useEffect(() => {
    ProdutosService.listar().then(setProdutos);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Lista de Produtos</h1>
      <ul className="space-y-2">
        {produtos.map(produto => (
          <li key={produto.id} className="p-2 border rounded">
            <span className="font-bold mr-2">#{produto.id}</span>
            {produto.title}
          </li>
        ))}
      </ul>
    </div>
  );
}