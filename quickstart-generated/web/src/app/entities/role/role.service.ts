//
// Project home: https://github.com/jaxio/celerio-angular-quickstart
// 
// Source code generated by Celerio, an Open Source code generator by Jaxio.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Source code: https://github.com/jaxio/celerio/
// Follow us on twitter: @jaxiosoft
// This header can be customized in Celerio conf...
// Template pack-angular:web/src/app/entities/entity.service.ts.e.vm
//
import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { LazyLoadEvent } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../../service/message.service';
import { PageResponse, PageRequestByExample } from '../../support/paging';
import { Role } from './role';

@Injectable()
export class RoleService {

    private options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

    constructor(private http: Http, private messageService : MessageService) {}

    /**
     * Get a Role by id.
     */
    getRole(id : any) : Observable<Role> {
        return this.http.get('/api/roles/' + id)
            .map(response => new Role(response.json()))
            .catch(this.handleError);
    }

    /**
     * Update the passed role.
     */
    update(role : Role) : Observable<Role> {
        let body = JSON.stringify(role);

        return this.http.put('/api/roles/', body, this.options)
            .map(response => new Role(response.json()))
            .catch(this.handleError);
    }

    /**
     * Load a page (for paginated datatable) of Role using the passed
     * role as an example for the search by example facility.
     */
    getPage(role : Role, event : LazyLoadEvent) : Observable<PageResponse<Role>> {
        let req = new PageRequestByExample(role, event);
        let body = JSON.stringify(req);

        return this.http.post('/api/roles/page', body, this.options)
            .map(response => {
                let pr : any = response.json();
                return new PageResponse<Role>(pr.totalPages, pr.totalElements, Role.toArray(pr.content));
            })
            .catch(this.handleError);
    }

    /**
     * Performs a search by example on 1 attribute (defined on server side) and returns at most 10 results.
     * Used by RoleCompleteComponent.
     */
    complete(query : string) : Observable<Role[]> {
        let body = JSON.stringify({'query': query, 'maxResults': 10});
        return this.http.post('/api/roles/complete', body, this.options)
            .map(response => Role.toArray(response.json()))
            .catch(this.handleError);
    }

    /**
     * Delete an Role by id.
     */
    delete(id : any) {
        return this.http.delete('/api/roles/' + id).catch(this.handleError);
    }

    // sample method from angular doc
    private handleError (error: any) {
        // TODO: seems we cannot use messageService from here...
        let errMsg = (error.message) ? error.message :
        error.status ? `Status: ${error.status} - Text: ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        if (error.status === 401 ) {
            window.location.href = '/';
        }
        return Observable.throw(errMsg);
    }
}
