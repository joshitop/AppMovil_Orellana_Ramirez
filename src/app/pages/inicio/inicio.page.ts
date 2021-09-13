import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    { icon: 'leaf-outline',
      name: '¿Qué son las energías alternativas?',
      redirecTo: '/informacion'
    },
   // { icon: 'leaf-outline',
   //   name: 'Tipos de energías no contaminantes',
   //   redirecTo: '/energias'
   // },
    { icon: 'earth-outline',
      name: 'Contacto',
      redirecTo: '/registro'
    },

  ];

  constructor(private menuController: MenuController, public alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Lo sentimos...',
      message: 'Por el momento, el inicio de sesión no está disponible. Lamentamos las molestias.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
