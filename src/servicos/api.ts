import axios from 'axios';

const apiLogin = axios.create({
  baseURL: 'https://reqres.in/api'
});

const apiProdutos = axios.create({
  baseURL: 'https://fakestoreapi.com'
});

export const loginService = {
  async login(username: string, password: string): Promise<{ token: string }> {
    try {
      const response = await apiLogin.post('/login', { username, password });
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    }
  }
};

export const ProdutosService = {
  async listar() {
    try {
      const response = await apiProdutos.get('/products');
      return response.data.map(({ id, title }: { id: number; title: string }) => ({ id, title }));
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      return [];
    }
  }
};
