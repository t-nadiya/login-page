import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable, of } from "rxjs";

// const data = {
//   "login": [
//     {
//       "id": "1",
//       "email": "nadiia.tytarenko@neobank.one",
//       "password": "12345"
//     }
//   ]
// }

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) { }
  // Every time our application makes an HTTP request using the HttpClient service,
  // the Interceptor calls the intercept() method.
  // When the intercept() method is called Angular passes a reference to the httpRequest object.
  // With this request, we can inspect it and modify it as necessary.
  // Once our logic is complete, we call next.handle and return the updated request onto the application.


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error("Method not implemented.");
    // return next.handle(req)

    const API_KEY = '123456';
    //console.log(request.body); // {email: 'nadiia.tytarenko@neobank.one', password: '12345', agree: true}
    // console.log(request.context); // HttpContext {map: Map(0)}
    // console.log(request.headers); // {normalizedNames: Map(0), lazyUpdate: null, headers: Map(0)}
    // console.log(request.method); // 'POST'
    // console.log(request.params); // {updates: null, cloneFrom: null, encoder: HttpUrlEncodingCodec, map: null}
    // console.log(request.reportProgress); // false
    // console.log(request.responseType); // json
    // console.log(request.urlWithParams);


    return next.handle(request.clone({ setHeaders: { API_KEY } }))

  }

}
