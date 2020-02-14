import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = '/api/dataqueries';

@Injectable({
    providedIn: 'any'
})
export class DataQueriesService {

    constructor(private http: HttpClient) {}

    exec(uri: string) {
        return this.http.post(`${API_URL}/exec`,{uri});
    }
}
