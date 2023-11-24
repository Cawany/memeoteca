import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Pensamento } from '../thought';

@Component({
  selector: 'app-thought',
  templateUrl:  './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent implements OnInit, OnChanges {
  @Input() pensamento!: Pensamento;

  @Output() onPensamento = new EventEmitter();

  constructor() {}
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['pensamento'] && this.pensamento){
      this.pensamento = changes['pensamento'].currentValue;
    }
  }

  ngOnInit(): void {
    console.log(this.pensamento);
  }

  setPensamentoFilho(){
    this.onPensamento.emit(this.pensamento);
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  } 
}
