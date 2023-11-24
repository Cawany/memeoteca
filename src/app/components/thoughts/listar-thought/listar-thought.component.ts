import { Component, OnInit, Output } from '@angular/core';
import { Pensamento } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-listar-thought',
  templateUrl: './listar-thought.component.html',
  styleUrls: ['./listar-thought.component.css'],
})
export class ListarThoughtComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  paginaAtual: number = 1;

  maisPensamento: boolean = true;

  filtro: string = 'Teste';

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service
      .listar(this.paginaAtual, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  public setPensamentoPai(event: any) {
    console.log('ESTE É O MEU PENSAMENTO: \n', event);
  }

  public carregarMais() {
    this.service
      .listar(++this.paginaAtual, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos);
        if (this.listaPensamentos.length) {
          this.maisPensamento = false;
        }
      });
  }

  public pesquisarPensamento() {
    this.paginaAtual = 1;
    this.maisPensamento = true;

    this.service
      .listar(this.paginaAtual, this.filtro)
      .subscribe((listaPensamentos) => {
        listaPensamentos = listaPensamentos;
      });
  }
}
