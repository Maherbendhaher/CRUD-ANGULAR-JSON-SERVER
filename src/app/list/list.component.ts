import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit{
  employeeform! : FormGroup;
  data:undefined|datamodel[];
  IsmodelShow:boolean=false
  constructor(private formbuilder:FormBuilder,private api:ApiService) {}

  ngOnInit(): void {
    this.employeeform = this.formbuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      city:['',[Validators.required]],
      pincode:['',[Validators.required]],
      phonenumber :['',[Validators.required]],


  })
  this.getemployee();
  // this.deleteemployee();
}
addemployee(data:datamodel){

// console.log(data)
this.api.addemployee(data).subscribe((res)=>{
  this.employeeform.reset();
  this.close()
  this.ngOnInit()

})}

getemployee(){
this.api.getemployee().subscribe(res=>{
this.data=res;
})

}
deleteemployee(id:any){
  this.api.deleteemployee(id).subscribe((res:datamodel)=>{
    console.log(res)
    this.ngOnInit()
   })}


close() {
  this.IsmodelShow=true;// set false while you need open your model popup
 // do your more code
}
}
