import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { EmailService } from 'src/app/services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { ListItemComponent } from './list-item/list-item.component';
import { FiltroEmailPipe } from './filtro-emails.pipe';

@NgModule({
  declarations: [
    CaixaDeEntradaComponent,
    ListItemComponent,
    FiltroEmailPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    CaixaDeEntradaRoutingModule,
    SharedComponentsModule,
    HttpClientModule
  ],
  providers: [
    EmailService
  ]
})
export class CaixaDeEntradaModule { }
