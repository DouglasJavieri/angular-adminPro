import { Component, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    })
  
    // const promesa = new Promise( (resolve, reject) => {
    //   if(false){
    //     resolve('Hola mundo promise');
    //   }else{
    //     reject('Salio algo mal');
    //   }
    // });

    // promesa.then((response) => {
    //   console.log(response);
    // })
    // .catch(error => console.log('Error de la promesa', error));

    // console.log('Fin del init');

    
  }
  
  getUsuarios(){

    return new Promise(resolve =>{
      fetch('https://reqres.in/api/users', {
        headers: {
        'x-api-key': 'reqres-free-v1'
      }})
        .then(resp => resp.json())
        .then(body => resolve(body.data))
    });
  }
}
