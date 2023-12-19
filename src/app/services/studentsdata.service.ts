import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable ,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsdataService {
  // free wali api
  // url="https://jsonplaceholder.typicode.com/posts";


  // kamran ki Api
  private url="http://127.0.0.1:8000/"
  constructor(private http:HttpClient) { }
  students(){
    return this.http.get(this.url+'/student/')
  }

  // savestudent(data:any){
  //   this.http.post(this.url,data); 
  // }
  // savestudent(studentData: any): Observable<any> {
  //   return this.http.post<any>(this.url, studentData);
  // }

  savestudent(studentData: any): Observable<any> {
    try {
      return this.http.post<any>(this.url+'/student/', studentData)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            console.error('Error occurred while saving student data:', error);
            return throwError(() => new Error('Something went wrong')); // Emit a custom error message using a factory function
          })
        );
    } catch (error) {
      console.error('An error occurred:', error);
      return throwError(() => new Error('Unexpected error occurred')); // Emit a custom error message for unexpected errors
    }
  }

  UpdateStudent(studentData: any): Observable<any> {
    try {
      return this.http.put<any>(this.url+'/student/', studentData)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            console.error('Error occurred while saving student data:', error);
            return throwError(() => new Error('Something went wrong')); // Emit a custom error message using a factory function
          })
        );
    } catch (error) {
      console.error('An error occurred:', error);
      return throwError(() => new Error('Unexpected error occurred')); // Emit a custom error message for unexpected errors
    }
  }

  DelStudent(studentID: number): Observable<any> {
  
     
      return this.http.delete(`${this.url}/student/${studentID}`);
  }
}
