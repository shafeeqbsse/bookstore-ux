import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Customer } from "../interfaces/Customer";

import 'rxjs/add/operator/map';


@Injectable()
export class CustomerService {

    constructor(private http: Http) {}

    public getCustomerDetails(customerID: number): Observable<Customer> {
        let url = "some url";
        let body = { customerId: customerID};
        let bodyJson = JSON.stringify(body);

        return this.http.put(url, bodyJson)
            .map(res => res.json())
    }
}