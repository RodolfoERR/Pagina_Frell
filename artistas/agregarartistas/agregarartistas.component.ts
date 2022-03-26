import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Artista } from 'src/app/models/artista';
import { ArtistasService } from 'src/app/services/artistas.service';
import { Response } from 'src/app/models/response.interface';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { timeMessage3 } from 'src/app/functions/alerts';
import { Estado } from 'src/app/models/estado';
import { EstadoService } from 'src/app/services/estado.service';

@Component({
  selector: 'app-agregarartistas',
  templateUrl: './agregarartistas.component.html',
  styleUrls: ['./agregarartistas.component.css']
})
export class AgregarartistasComponent implements OnInit {
  artistaForm :FormGroup; 
  estados:Estado[];


  constructor(private authService:AuthService,private estadoService: EstadoService,private artistasService:ArtistasService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.artistaForm = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      edad: new FormControl(null, [Validators.required]),
      descripcion: new FormControl(null, [Validators.required]),
      lugarnacimiento: new FormControl(null, [Validators.required])
    })
    this.estadoService.getEstados().subscribe((res:any) => {
      this.estados = res.data;
    })
  }

  guardar(): void {
    let data: Artista = {
      nombre: this.artistaForm.get('nombre').value,
      edad: this.artistaForm.get('edad').value,
      descripcion: this.artistaForm.get('descripcion').value,
      lugarnacimiento: this.artistaForm.get('lugarnacimiento').value
    };
    console.log(data)
    
    this.artistasService.createArtista(data).subscribe((res: Response<Artista>) => {
      console.log("Artista Registrado", res.data);
      // this.router.navigate['/marcas']
      this.location.back()
    })
  }
  
  logout(): void {
    this.authService.removeSession()
    timeMessage3("Saliendo...",5);
    this.router.navigate(['/login']);
  }

  
  }
