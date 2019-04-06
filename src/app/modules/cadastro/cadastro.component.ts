import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl(),
    username: new FormControl(),
    senha: new FormControl(),
    avatar: new FormControl()
  })

  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {
      console.log(this.formCadastro.value);
      this.formCadastro.reset();
    } else {
      console.error("Preencher!");
    }
    
  }

  constructor() {}

  ngOnInit() {}

}
