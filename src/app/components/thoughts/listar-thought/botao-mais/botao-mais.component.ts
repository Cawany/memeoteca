import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-mais',
  templateUrl: './botao-mais.component.html',
  styleUrls: ['./botao-mais.component.css'],
})
export class BotaoMaisComponent implements OnInit {
  @Input() maisPensamento: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
