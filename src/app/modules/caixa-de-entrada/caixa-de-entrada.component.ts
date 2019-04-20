import {
  Component
} from '@angular/core';

import {
  NgForm
} from '@angular/forms';

import {
  Email
} from '../../models/email';
import {
  EmailService
} from 'src/app/services/email.service';
import {
  PageDataService
} from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    .page-content .mdl-grid {
      padding: 0;
    }
    ul {
      flex-grow: 1;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  `]
})

export class CaixaDeEntradaComponent {

  email: Email = {
    destinatario: '',
    assunto: '',
    conteudo: '',
    dataEnvio: '',
    id: ''
  }

  emailList: Email[] = [];

  termoFiltro = '';

  private _isNewEmailFormOpen = false;

  constructor(private servico: EmailService, private pageService: PageDataService) { }

  ngOnInit() {
    this.servico
      .carregar()
      .subscribe(
        listaEmailsApi => this.emailList = listaEmailsApi.reverse(),
        erro => console.log(erro)
      )
      this.pageService.defineTitulo('Caixa de entrada')
  }

  get isNewEmailOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm) {
    let novoEmail = new Email(this.email);

    if (formEmail.invalid) return;

    this.servico
      .enviar(novoEmail)
      .subscribe(
        (email) => {
          this.emailList.unshift(email);
          formEmail.resetForm();
          this.toggleNewEmailForm()
        },
        erro => {
          console.log(erro);
        }
      );

  }

  handleRemoverEmail({
    emailId
  }) {
    this.servico
      .apagar(emailId)
      .subscribe(
        () => {
          this.emailList = this
            .emailList
            .filter((email) => email.id != emailId)
        }
      )
  }

  handleFiltro(termoFiltro){
    this.termoFiltro = termoFiltro;
  }

  listaEmailsFiltrados(){
    return this.emailList.filter((email) => {
      if (email.assunto.toLowerCase().includes(this.termoFiltro.toLowerCase()) ||
        email.destinatario.toLowerCase().includes(this.termoFiltro.toLowerCase()) ||
        email.conteudo.toLowerCase().includes(this.termoFiltro.toLowerCase())
      ) {
        return email
      }
    })
  }

}
