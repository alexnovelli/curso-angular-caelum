import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  HttpClient, HttpErrorResponse
} from '@angular/common/http';
import {
  map, catchError
} from 'rxjs/operators'

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(6)]),
    username: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    avatar: new FormControl('', Validators.required, this.validaImagem.bind(this)),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')])
  })

  ngOnInit() {}

  validaTodos(form: FormGroup) {
    let controles = form.controls;
    for (let controle in controles) {
      let campo = form.get(controle);
      campo.markAsTouched();
    }
  }

  handleCadastrarUsuario() {
    if (this.formCadastro.invalid) {
      this.validaTodos(this.formCadastro);
      return
    }

    this.formCadastro.reset();

  }

  constructor(private ajax: HttpClient) {}

  validaImagem(controleAvatar: FormControl) {
    return this.ajax
      .head(controleAvatar.value, {observe: 'response'})
      .pipe(
        map((resposta) => {
          console.log(resposta.ok);
          return resposta.ok
        })
       ,catchError((erro: HttpErrorResponse) => {
          console.warn(erro);
          return [{ urlInvalida: true }]
        })
      )
  }

}
