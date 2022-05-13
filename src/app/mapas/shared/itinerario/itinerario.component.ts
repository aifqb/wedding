import { Component,  } from '@angular/core';

interface Programa {
  id: number
  hora: string;
  actividad: string;
}


@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.css']
})
export class ItinerarioComponent {

  actividades: Programa[] = [
    {
      id: 1,
      hora: '11:00',
      actividad: 'Ceremonia religiosa'
    },
    {
      id: 2,
      hora: '16:15',
      actividad: 'Brindis y vals'
    },
    {
      id: 3,
      hora: '16:45',
      actividad: 'Apertura de la pista de baile'
    },
    {
      id: 4,
      hora: '20:30',
      actividad: 'Banquete'
    },
    {
      id: 5,
      hora: '22:15',
      actividad: 'Pastel'
    },
    {
      id: 6,
      hora: '20:30',
      actividad: 'Bouquet'
    },
    {
      id: 7,
      hora: '22:45',
      actividad: 'Fiesta'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
