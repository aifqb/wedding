import { Component, OnInit } from '@angular/core';

interface Premio {
  titulo: string;
  detalle: string;
}

@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html',
  styleUrls: ['./premios.component.css']
})
export class PremiosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  premios: Premio[] = [
    {
      titulo: 'SESIÓN DE FOTOS CON EL FOTÓGRAFO MEXICANO LUIS ALBERTO SOLIS SOLIS',
      detalle: 'Incluye Lienzo artístico de 100 x 70.',
    },
    {
      titulo: 'MAQUILLAJE PROFESIONAL CAMILA EXENI',
      detalle: '5 maquillajes.',
    },
    {
      titulo: 'VIDEO PUBLICITARIO',
      detalle: 'Jonatan Gallardo.',
    },
    {
      titulo: 'HAPPYLAND',
      detalle: 'Un Paquete de medias de bebe, Tomatodo Happyland, Pantuflas happy land, Body para bebe de los Simpsons.',
    },
    {
      titulo: 'LILITH FAMME',
      detalle: 'Conjunto de lencería.',
    },    {
      titulo: 'ONLY BRANDS',
      detalle: 'Camisa a elección.',
    },    {
      titulo: 'SAVA MAKEUP',
      detalle: 'Curso de maquillaje.',
    },    {
      titulo: 'EL ATIKO DETERE',
      detalle: 'Corte y peinado.',
    },    {
      titulo: 'ALAN RODRIGUEZ',
      detalle: 'Sesión de fotos.',
    },    {
      titulo: 'MARIANA AVILA',
      detalle: 'Asesoría de Imagen.',
    },    {
      titulo: 'ACADEMIA ODALIS TICONIPA',
      detalle: '2 becas completas de 5 meses.',
    },    {
      titulo: 'FARFALLA',
      detalle: '2 vales de 100 B. en joyería de plata o acero.',
    },    {
      titulo: 'CEM FYK',
      detalle: 'Tratamiento de plasma Rico en Plaquetas, Limpieza facial profunda.',
    },    {
      titulo: 'FALKOR',
      detalle: 'Licor artesanal de Leche Valier.',
    },    {
      titulo: 'DAVID ILLANES Y PAOLA ROMAY',
      detalle: 'Sesión de fotos y maquillaje.',
    },    {
      titulo: 'VERÓNICA AVENDAÑO',
      detalle: 'Sesión de fotos.',
    },
    {
      titulo: 'JOYERÍA DIAN',
      detalle: '2 joyas de plata.',
    }, {
      titulo: 'JOHN PACHECO',
      detalle: 'Chaqueta de diseño.',
    },
  ];

}
