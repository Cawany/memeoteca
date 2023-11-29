import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  /*atributo*/
  formulario!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  // ngOnInit(): void {
  //   this.formulario = new FormGroup({
  //     conteudo: new FormControl('Miles Morales', [Validators.required]),
  //     autoria: new FormControl('Homem Aranha', [Validators.required]),
  //     batatinha: new FormControl('modelo3'),
  //   });
  // }
  //duas formas de fazer implementar o form

  //inicialização da aplicação
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      modelo: ['modelo3'],
      favorito: false,
    });
  }

  /*metodo*/
  public criarPensamento(): void {
    console.log(this.formulario.errors);
    if (this.formulario.valid) {
      this.service.create(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  public cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }

  public habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao';
    } else return 'botao__desabilitado';
  }
}
