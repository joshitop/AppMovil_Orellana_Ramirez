import { Component } from '@angular/core';

interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[] = [
    { icon: 'leaf-outline',
      name: 'Conoce más',
      redirecTo: '/informacion'
    },
   // { icon: 'leaf-outline',
   //   name: 'Tipos de energías no contaminantes',
   //   redirecTo: '/energias'
   // },
    //{ icon: 'earth-outline',
    //  name: 'Contacto',
    //  redirecTo: '/registro'
    //},

  ];
}
