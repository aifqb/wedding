import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}


@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent {
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
