import { Component } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {StudentsdataService} from './services/studentsdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Crud';
  ourData:any;
  selectedStudent: any = {}; // Holds the selected student for update
  updatedata:any={};

  stdid:any;
  constructor(private studentData:StudentsdataService) { }
  ngOnInit(){
    this.studentData.students().subscribe((data)=>{
      this.ourData=data;
      // console.log('data',this.ourData);
    });
  }
  // getStudentData(data:any){
  //   this.studentData.savestudent(data).subscribe((result)=>{
   
  //   console.log(result);
  //   })

  
  // }

  getStudentData(data: any) {
    this.studentData.savestudent(data)
      .pipe(
        catchError(error => {
          console.error('Error occurred while saving student data:', error);
          return throwError(error); // Rethrow the error or return a default value/error
        })
      )
      .subscribe(result => {
        console.log('Student data saved successfully:', result);
        // Additional logic after successful save
      });
  }

  setUpdateStudent(student: any): void {
    console.log(student)
    this.selectedStudent = student 
    // Make a copy to avoid direct mutation
  }
  // Updates the selected student's data
  updateStudent(): void {  
    this.updatedata=this.selectedStudent
    this.studentData.UpdateStudent(this.updatedata).subscribe(
      (response) => {
        console.log('Student updated successfully:', response);
       
      });
  }

  DeleteStudent(studeninfo:any){
   this.stdid=studeninfo.student_id;
   this.studentData.DelStudent(this.stdid).subscribe(
    (response) => {
      console.log('Student Deleted successfully:', response);
     
    });
  }
}
