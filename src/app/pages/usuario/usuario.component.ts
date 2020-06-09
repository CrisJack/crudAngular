import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor() { }

  usuario=new UsuarioModel

  ngOnInit(): void {
  }

  guardar(form:NgForm){
    console.log(form);
    console.log(this.usuario);
  }

}
