import '../styles/produtos.css';

interface Produtos {
  code: string;
  name: string;
  quantity: number;
  price: number;
}

function App() {
  const produtos: Produtos[] = [
    { code: 'P001', name: 'Notebook', quantity: 5, price: 2499.99 },
    { code: 'P002', name: 'Mouse', quantity: 15, price: 89.90 },
    { code: 'P003', name: 'Teclado', quantity: 10, price: 159.90 },
    { code: 'P004', name: 'Monitor', quantity: 8, price: 899.99 },
    { code: 'P005', name: 'Headset', quantity: 12, price: 199.90 },
  ];

  return (
    <div className="produtos-container">
      <div className="produtos-wrapper">
        <h1 className="produtos-title">Lista de Produtos</h1>
        <table className="produtos-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.code}>
                <td>{produto.code}</td>
                <td>{produto.name}</td>
                <td>{produto.quantity}</td>
                <td>
                  {produto.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;