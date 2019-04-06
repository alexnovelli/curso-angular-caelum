import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ModuloRoteamento } from './app.routes';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormFieldDirective } from './components/form-group/form-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CadastroComponent,
    CaixaDeEntradaComponent,
    FormGroupComponent,
    FormFieldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
