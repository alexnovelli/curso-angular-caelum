import {Component} from '@angular/core';

@Component ({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})

export class HeaderComponent {
    titulo = "Bem vindo ao Cmail";
    isMenuOpen = false;
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}