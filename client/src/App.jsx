
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get('/api/vendas').then((res) => {
      axios.post('/api/curva-abc', res.data).then((res2) => setDados(res2.data));
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard Curva ABC</h1>
      <div className="bg-white p-4 rounded shadow">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dados}>
            <XAxis dataKey="produto" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="valor" fill="#38bdf8" />
          </BarChart>
        </ResponsiveContainer>
        <table className="mt-6 w-full text-sm text-left">
          <thead className="text-gray-500">
            <tr>
              <th>Produto</th>
              <th>Valor</th>
              <th>% Acumulado</th>
              <th>Classe</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item, i) => (
              <tr key={i} className="border-b">
                <td>{item.produto}</td>
                <td>R$ {item.valor}</td>
                <td>{item.percentual}%</td>
                <td className="font-bold text-blue-600">{item.classe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
