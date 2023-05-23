import { Component } from '@angular/core';
import { Festivo } from '../models/festivo.model';
import { FormControl, FormGroup } from '@angular/forms';
import { FestivoService } from '../services/festivo.service';


@Component({
  selector: 'app-festivos',
  templateUrl: './festivos.component.html',
  styleUrls: ['./festivos.component.css']
})
export class FestivosComponent {

  constructor( private festivoService: FestivoService ){ }

  myFestivos : Festivo[] = [];
  myId = 4;

  myFestivo: any = 0;
  festivoFound : any = 0;
  

  newFestivo = {
    id: this.myId,
    nombre_fecha: '',
    fecha_inicio: 0,
    fecha_final: 0
  }

  addFestivo(){
    console.log("enviado", this.newFestivo);
    this.festivoService.addFestivo(this.newFestivo);
    this.myId++;
    this.newFestivo = {
      id: 0,
      nombre_fecha: '',
      fecha_inicio: 0,
      fecha_final: 0
    }
  }

  deleteFestivo(_id:number){
    this.festivoService.deleteFestivo(_id)
  }

  getPositions(_id: number){

    this.myFestivo = this.festivoService.getOneFestivo(_id);
    this.festivoFound = this.myFestivo

  }

  editarFestivo() {
    this.festivoService.editFestivo(this.festivoFound);
  }



  // festivoAraay : Festivo [] = [
  //   {id: 1, nombre_fecha: "Día del trabajo", fecha_inicio: 1, fecha_final: 2},
  //   {id: 2, nombre_fecha: "Día de la primavera", fecha_inicio: 3, fecha_final: 4},
  //   {id: 3, nombre_fecha: "Día del burro", fecha_inicio: 5, fecha_final: 6},
  // ];


  

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.myFestivos = this.festivoService.getFestivos();
    console.log(this.myFestivos);
  }



  // date: Date = new Date("2023-06-22");

  // public festivoForm = new FormGroup({

  //   nombre_fecha: new FormControl(''),
  //   fecha_inicio: new FormControl(0),
  //   fecha_final: new FormControl(0),

  // });

  // onSubmit():void{
  //   console.log({
  //     formIsValid: this.festivoForm.valid,
  //     value: this.festivoForm.value,
  //   })
  // }
}
