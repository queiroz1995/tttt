
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/vendas', (req, res) => {
  res.json([
    { produto: 'Produto A', valor: 12000 },
    { produto: 'Produto B', valor: 8000 },
    { produto: 'Produto C', valor: 4000 },
    { produto: 'Produto D', valor: 2000 },
    { produto: 'Produto E', valor: 1000 },
  ]);
});

app.post('/api/curva-abc', (req, res) => {
  const vendas = req.body;
  const total = vendas.reduce((acc, item) => acc + item.valor, 0);

  const ordenado = vendas.sort((a, b) => b.valor - a.valor);
  let acumulado = 0;

  const resultado = ordenado.map((item) => {
    acumulado += item.valor;
    const percentual = acumulado / total;
    const classe = percentual <= 0.8 ? 'A' : percentual <= 0.95 ? 'B' : 'C';
    return { ...item, percentual: +(percentual * 100).toFixed(2), classe };
  });

  res.json(resultado);
});

app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));
