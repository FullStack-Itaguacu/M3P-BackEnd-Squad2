const {
  criarVenda,
  listarVendas,
  listarVendaId,
  atualizarVendaId,
  vendasAdminDashboard,
  //deleteOneVenda,
  //restoreOneVenda
} = require('../controllers/vendas.controller');
const { Router } = require('express');
const { auth } = require('../middleware/auth');
const { checarAdmin } = require('../middleware/checarAdmin');

class VendaRouter {
  routesFromVendas() {
    const vendasRoutes = Router();
    vendasRoutes.post('/venda/criar', auth, criarVenda);
    vendasRoutes.get('/vendas/listar', listarVendas);
    vendasRoutes.get('/venda/listarId/:id', listarVendaId);
    vendasRoutes.patch('/vendas/atualizarId/:id', atualizarVendaId);
    vendasRoutes.get('/vendas/admin/dashboard', auth, vendasAdminDashboard
    );
    //vendasRoutes.delete('/venda/deletarId/:id', auth, deletarVendaId)
    //vendasRoutes.patch('/venda/restaurarId/:id', auth, restaurarVendaId)
    return vendasRoutes;
  }
}

module.exports = new VendaRouter();
