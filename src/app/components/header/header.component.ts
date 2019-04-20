import {
  Component, Output, EventEmitter
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  PageDataService
} from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    './header-search.css'
  ]
})

export class HeaderComponent {
  tituloHeader = "Bem vindo ao Cmail";
  isMenuOpen = false;
  @Output() filtrar = new EventEmitter();

  constructor(private roteador: Router, private pageService: PageDataService) {
    this.pageService
      .titulo
      .subscribe(
        novoTitulo => this.tituloHeader = novoTitulo
      )
  }

  localImg = '';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    localStorage.removeItem('cmail-token');
    this.roteador.navigate(['login']);
  }

  ngOnInit() {
    this.localImg = localStorage.getItem('cmail-img');
  }

  handleFiltro({target}) {
    this.filtrar.emit(target.value);
  }

}
