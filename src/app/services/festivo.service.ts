import { Injectable } from '@angular/core';
import { Festivo } from '../models/festivo.model';

const festivosList = [
  {id: 1, nombre_fecha: "Día del trabajo", fecha_inicio: 2023, fecha_final: 2},
  {id: 2, nombre_fecha: "Día de la primavera", fecha_inicio: 3, fecha_final: 4},
  {id: 3, nombre_fecha: "Día del burro", fecha_inicio: 5, fecha_final: 6},
];


@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  constructor() { }


  getFestivos() {
    return festivosList;
  }

  getOneFestivo(_id:any){
    return festivosList.find( festivo => festivo.id === _id )
  }

  addFestivo( festivo: Festivo ){
    festivosList.push(festivo);
  }

  editFestivo( newFestivoEdit:Festivo ) {
    const index = festivosList.findIndex( festivo => festivo.id === newFestivoEdit.id );
    festivosList[index] = newFestivoEdit;
  }

  deleteFestivo(_id:any){
    festivosList.splice(_id, 1);
  }



}
