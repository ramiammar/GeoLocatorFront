import { Component,OnInit } from '@angular/core';
import { NgForm,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

@Injectable({
  providedIn: 'root'
})
export class HomeComponent{
  addressForm: FormGroup;
  
  private serverUrl: string;
  constructor(private http: HttpClient,private formBuilder: FormBuilder) {
    this.serverUrl = 'http://localhost:8080/Locations/';
    
    this.addressForm = this.formBuilder.group({
      'email' : ['', Validators.required],
      'address' : ['', Validators.required],
      'sendEmail' : [false, Validators.required]
    });
   }
  onSubmit() {
    //const url = 'http://localhost:8888/friends/addnew';
    console.log(
      this.addressForm.controls
    );
    this.http.post(this.serverUrl+this.addressForm.controls["email"].value,"")
      .subscribe((result) => {
        //this.ngOnInit(); //reload the table
      });
    //this.modalService.dismissAll(); //dismiss the modal
  }
  // ngOnInit(): void {
    // // this.clienteService.getFriends().subscribe((clientesResponse:any) => {
      // // console.log('Respuesta del servicio getAllClientes',clientesResponse);
      // // this.friends=clientesResponse._embedded.clientes;
    // // });
  // }
}
