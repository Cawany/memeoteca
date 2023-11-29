import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Pensamento } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent implements OnInit, OnChanges {
  @Input() pensamento!: Pensamento;

  @Input() listaFavoritosPensamentos: Pensamento[] = []

  // @Output() onPensamento = new EventEmitter();

  constructor(private service: ThoughtService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pensamento'] && this.pensamento) {
      this.pensamento = changes['pensamento'].currentValue;
    }
  }

  ngOnInit(): void {
    console.log(this.pensamento);
  }

  // setPensamentoFilho() {
  //   this.onPensamento.emit(this.pensamento);
  // }

  public larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  public mudarIcone(): string {
    if (this.pensamento.favorito == false) {
      return 'inativo';
    }
    return 'ativo';
  }

  public atualizarFav() {
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritosPensamentos.splice(this.listaFavoritosPensamentos.indexOf(this.pensamento), 1)
    })
  }
}
