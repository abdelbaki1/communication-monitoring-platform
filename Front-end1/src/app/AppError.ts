import { HttpErrorResponse } from "@angular/common/http";

export class AppError{
    constructor(public error:HttpErrorResponse){

    }
}