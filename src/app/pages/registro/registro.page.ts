import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(/*public alertController: AlertController*/) { }

  ngOnInit() {
  }
  
 /*async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registro',
      inputs: [
        {
          name: 'nombres',
          type: 'text',
          placeholder: 'Nombres'
        },
        {
          name: 'apellidos',
          type: 'text',
          placeholder: 'Apellidos'
        },
        // input date with min & max
        {
          name: 'fecha de nacimiento',
          type: 'date',
          min: '2004-01-01'
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Ingrese su email'
        },
        {
          name: 'pass',
          type: 'password',
          placeholder: 'Contraseña',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 8,
            inputmode: 'decimal'
          }
        },
        {
          name: 'pass2',
          type: 'password',
          placeholder: 'Repetir contraseña',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 8,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();

  }*/

  usuario = {
    user:'',
    nombre:'',
    apellido:'',
    email:'',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}