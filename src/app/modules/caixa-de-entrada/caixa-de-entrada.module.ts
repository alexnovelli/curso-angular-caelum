import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  declarations: [
    CaixaDeEntradaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CaixaDeEntradaRoutingModule,
    SharedComponentsModule
  ]
})
export class CaixaDeEntradaModule { }
