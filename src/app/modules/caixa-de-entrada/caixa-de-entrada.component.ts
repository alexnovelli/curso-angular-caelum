import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Email } from '../../models/email';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html'
})
export class CaixaDeEntradaComponent {

  email: Email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  emailList:Email[] = [];

  private _isNewEmailFormOpen = false;

  get isNewEmailOpen(){
    return this._isNewEmailFormOpen;
  }
  toggleNewEmailForm(){
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }
  handleNewEmail(formEmail: NgForm){

    if (formEmail.invalid) return;

    let novoEmail = new Email(this.email);

    this.emailList.push(novoEmail);

    formEmail.resetForm();
  }

}
