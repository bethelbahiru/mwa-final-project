import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ConfigInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        let authToken = localStorage.getItem('Token');
        authToken = authToken ? authToken : ''
       
        const authReq = req.clone({
            headers: req.headers.set('Authorization', authToken)
        });
  
        return next.handle(authReq);
    }
}