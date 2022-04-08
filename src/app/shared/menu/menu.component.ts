import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {


  
  menuItems: MenuItem[] = [
    {
      ruta: '/mapas/iglesia',
      nombre: 'Iglesia'
    },
    {
      ruta: '/mapas/local',
      nombre: 'Local'
    },
    {
      ruta: '/mapas/inicio',
      nombre: 'Invitacion'
    },
  ];

}
