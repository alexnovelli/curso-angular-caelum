import {
  Injectable,
  EventEmitter
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  titulo = new EventEmitter();

  defineTitulo(novoTitulo: string) {
    document.querySelector('title').textContent = `${novoTitulo} - Cmail`;
    this.titulo.emit(novoTitulo);
  }

}
