import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../paginas/login'; // Ajuste o caminho conforme necessário
import Produtos from '../paginas/produtos';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
