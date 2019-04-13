import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const rotasApp:Routes = [
    {path: "inbox", loadChildren: 'src/app/modules/caixa-de-entrada/caixa-de-entrada.module#CaixaDeEntradaModule'},
    {path: "login",  loadChildren: 'src/app/modules/login/login.module#LoginModule'},
    {path: "cadastro",  loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule'},
    {path: "**",  redirectTo: "inbox"}
]

@NgModule ({
    imports: [
        RouterModule.forRoot(rotasApp)
    ],
    exports: [
        RouterModule
    ]
})

export class ModuloRoteamento {

}