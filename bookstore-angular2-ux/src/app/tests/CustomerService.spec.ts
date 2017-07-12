import * as chai from "chai";
import * as sinon from "sinon";

import { Customer } from "../interfaces/Customer";
import { Observable } from "rxjs/Observable";
import {ResponseOptions, Response} from '@angular/http';

import 'rxjs/add/observable/of';
let assert = chai.assert;

let mockHttp: any = {} as {put: sinon.sinonStub}
let mockResponse: any = {} as {json: sinon.sinonStub}


let mockCustomer: Customer = { customerId: 1,
                               firstName: "Testy",
                               lastName: "McTestface",
                               email: "test.mctestface@email.com",
                               password: "password"
                            }


beforeEach( () => {
    mockHttp =  {
        put: sinon.stub().returns(Observable.of(mockResponse))
    }
    mockResponse = {
        json: sinon.stub().returns(mockCustomer)
    }
    
});

function createService() {
    let Service = require("../services/CustomerService").CustomerService;
    let service = new Service(mockHttp);
    return service;
}

describe("#CustomerService", () => {
    describe("#getCustomerDetails", () => {
        it("should retrieve the customer details given an id", () => {
            let service = createService();
            service.getCustomerDetails(1)
                .subscribe( (customer) => {
                    assert.equal(mockCustomer, customer);
                });
        });
        
        it("should make the get call to the correct url", () => {
            let service = createService();
            service.getCustomerDetails(1).subscribe();
            sinon.assert.calledWith(mockHttp.put, "/customers", {"customerId": 1})
        });
    });
});