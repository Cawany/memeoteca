import { Component, OnInit, Output } from '@angular/core';
import { Pensamento } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-thought',
  templateUrl: './listar-thought.component.html',
  styleUrls: ['./listar-thought.component.css'],
})
export class ListarThoughtComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  paginaAtual: number = 1;

  maisPensamento: boolean = true;

  filtro: string = '';

  favoritos!: boolean;

  listaFavoritosPensamentos: Pensamento[] = [];

  titulo: string = 'Meu Mural'

  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  public setPensamentoPai(event: any) {
    console.log('ESTE É O MEU PENSAMENTO: \n', event);
  }

  public carregarMais() {
    this.service
      .listar(++this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos);
        if (this.listaPensamentos.length) {
          this.maisPensamento = false;
        }
      });
  }

  public pesquisarPensamento() {
    this.maisPensamento = true;
    this.paginaAtual = 1;

    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  public listaFavoritos() {
    this.titulo = 'Meus Favoritos'
    this.favoritos = true;
    this.maisPensamento = true;
    this.paginaAtual = 1;
    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentosFav) => {
        this.listaPensamentos = listaPensamentosFav;
        this.listaFavoritosPensamentos = listaPensamentosFav;
      });
  }

  public voltarComponente() {
    this.favoritos = false;
    this.paginaAtual = 1; 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }
}
