import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html'
})
export class CadastrosComponent implements OnInit {

  cadastroForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('',[Validators.maxLength(50),Validators.required]),
      cpf: new FormControl('',[Validators.maxLength(11),Validators.required]),
      email: new FormControl('',[Validators.maxLength(100),Validators.required,Validators.email]),
      senha: new FormControl('',[Validators.maxLength(10),Validators.required]),
      confirmaSenha: new FormControl('',[Validators.maxLength(10),Validators.required])
    });
  }

  adicionarUsuario() {
      console.log(this.cadastroForm.value);
      if(this.cadastroForm.value.senha != this.cadastroForm.value.confirmaSenha){
        console.log("A senha não confere com a confirmação");
      }else{
        console.log("as senha são iguais")
      }
  }

}
