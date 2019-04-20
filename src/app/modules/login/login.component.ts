import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  LoginService
} from '../../services/login.service';
import {
  PageDataService
} from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dadosLogin = {
    email: '',
    password: ''
  }

  constructor(private servico: LoginService, private roteador: Router, private pageService: PageDataService) {
      this.pageService.defineTitulo('Login');
  }

  mensagemErro;

  ngOnInit() {}

  handleLogin(formLogin: NgForm) {

    if (formLogin.invalid) {
      formLogin.controls.email.markAsTouched();
      formLogin.controls.senha.markAsTouched();
      return
    }

    this.servico
      .autenticar(this.dadosLogin)
      .subscribe(
        () => {
          this.roteador.navigate(['inbox']);
        },
        responseError => {
          this.mensagemErro = responseError.error;
        }
      )
  }


}
