import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarThoughtComponent } from './components/thoughts/listar-thought/listar-thought.component';
import { ExcluirPensamentoComponent } from './components/thoughts/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/thoughts/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CreateThoughtComponent,
  },
  {
    path: 'listarPensamento',
    component: ListarThoughtComponent,
  },
  {
    path: 'thoughts/excluirPensamento/:id',
    component: ExcluirPensamentoComponent,
  },
  {
    path: 'thoughts/editarPensamento/:id',
    component: EditarPensamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
