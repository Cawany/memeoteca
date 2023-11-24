import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarThoughtComponent } from './components/thoughts/listar-thought/listar-thought.component';
import { ThoughtComponent } from './components/thoughts/thought/thought.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirPensamentoComponent } from './components/thoughts/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/thoughts/editar-pensamento/editar-pensamento.component';
import { BotaoMaisComponent } from './components/thoughts/listar-thought/botao-mais/botao-mais.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtComponent,
    ListarThoughtComponent,
    ThoughtComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent,
    BotaoMaisComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
