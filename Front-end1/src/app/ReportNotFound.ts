import { HttpErrorResponse } from "@angular/common/http";
import { AppError } from "./AppError"

export class ReportNotFound extends AppError{
    constructor(err:HttpErrorResponse){
        super(err);
        
    }
}