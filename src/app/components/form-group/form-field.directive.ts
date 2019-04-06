import {
  Directive,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[cmailFormField]',
})

export class FormFieldDirective {

  constructor(private campo: ElementRef) {}

  ngOnInit() {
    const campo: HTMLInputElement = this.campo.nativeElement;
    
    if (campo.name) {
      campo.id = campo.name;
      campo.classList.add('mdl-textfield__input');
      campo.placeholder = ' ';
    } else {
        throw new Error('Campo name obrigatório com o uso da diretiva cmailFormField');
    }
  }

}
