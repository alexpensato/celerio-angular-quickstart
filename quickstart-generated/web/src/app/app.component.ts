//
// Project home: https://github.com/jaxio/celerio-angular-quickstart
// 
// Source code generated by Celerio, an Open Source code generator by Jaxio.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Source code: https://github.com/jaxio/celerio/
// Follow us on twitter: @jaxiosoft
// This header can be customized in Celerio conf...
// Template pack-angular:web/src/app/app.component.ts.p.vm
//
import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Message, MenuItem } from 'primeng/primeng';
import { AuthService} from './service/auth.service';
import { MessageService} from './service/message.service';

/**
 * The Root component.
 * Defines the main layout and handles user login in a dialog.
 */
@Component({
    moduleId: module.id,
    selector: 'app-root',
    template: `
        <p-growl [value]="msgs"></p-growl>

        <div class="ui-g layout">
            <div class="ui-g-12 ui-md-1">The West...</div>
            <div class="ui-g-12 ui-md-11 ui-g-nopad">
                <div class="ui-g-12 ui-g-nopad" style="font-size: 14px;">
                    <p-menubar [model]="items"></p-menubar>
                </div>
                <div class="ui-g-12">
                    <router-outlet></router-outlet>
                </div>
                <div class="ui-g-12" style="text-align: center;">
                    <i class="fa fa-twitter"></i> <a href="https://twitter.com/jaxiosoft">@jaxiosoft</a> -
                    <i class="fa fa-github-alt"></i> <a href="https://github.com/jaxio/celerio-angular-quickstart">https://github.com/jaxio/celerio-angular-quickstart</a>
                </div>
            </div>
        </div>
        <p-dialog header="Please login" [visible]="displayLoginDialog" [responsive]="true" showEffect="fade" [modal]="true" [closable]="false" *ngIf="!authenticated">
            <p>When using the sample database, use admin/admin</p>
            <div ngForm class="ui-g">
                <div class="ui-g-12" *ngIf="loginFailed">
                    <div class="ui-message ui-messages-error ui-corner-all">
                        Invalid login or password
                    </div>
                </div>
                <div class="ui-g-12">
                    <div class="ui-g-4">
                        <label for="j_username">Username</label>
                    </div>
                    <div class="ui-g-8">
                        <input pInputText id="j_username" [(ngModel)]="j_username" name="username"/>
                    </div>
                </div>
                <div class="ui-g-12">
                    <div class="ui-g-4">
                        <label for="j_password">Password</label>
                    </div>
                    <div class="ui-g-8">
                        <input type="password" pPassword id="j_password" [(ngModel)]="j_password" name="password"/>
                    </div>
                </div>
            </div>
            <footer>
                <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
                    <button pButton (click)="login()" icon="fa-sign-in" label="Login"></button>
                </div>
            </footer>
        </p-dialog>
               `,
    styles:[`
        .layout div {
            background-color: white;
            border: 1px solid #f5f7f8;
        }
    `]
})
export class AppComponent implements OnInit {
    public items : MenuItem[] = [{label: 'hello'}];
    msgs : Message[] = [];

    displayLoginDialog : boolean = false;
    loginFailed : boolean = false;
    authenticated : boolean = false;
    j_username : string = "admin";
    j_password : string = "admin";

    constructor(private authService: AuthService, private messageService: MessageService) {
        messageService.messageSource$.subscribe(
            msg => {
                this.msgs.push(msg);
            });
    }

    ngOnInit() {
        this.items = [
            { label: 'Home', routerLink: ['/'], icon: 'fa-home' },

            { label: 'Entities', icon: 'fa-search', items: [
                    {label: 'Author Search', routerLink: ['/author-list']},
                    {label: 'Author Create', routerLink: ['/author/new']},
                    {label: 'Book Search', routerLink: ['/book-list']},
                    {label: 'Book Create', routerLink: ['/book/new']},
                    {label: 'Passport Search', routerLink: ['/passport-list']},
                    {label: 'Passport Create', routerLink: ['/passport/new']},
                    {label: 'Project Search', routerLink: ['/project-list']},
                    {label: 'Project Create', routerLink: ['/project/new']},
                    {label: 'Role Search', routerLink: ['/role-list']},
                    {label: 'Role Create', routerLink: ['/role/new']},
                    {label: 'UseCase1 Search', routerLink: ['/useCase1-list']},
                    {label: 'UseCase1 Create', routerLink: ['/useCase1/new']},
                    {label: 'UseCase2 Search', routerLink: ['/useCase2-list']},
                    {label: 'UseCase2 Create', routerLink: ['/useCase2/new']},
                    {label: 'UseCase3 Search', routerLink: ['/useCase3-list']},
                    {label: 'UseCase3 Create', routerLink: ['/useCase3/new']},
                    {label: 'User Search', routerLink: ['/user-list']},
                    {label: 'User Create', routerLink: ['/user/new']}                ]
            },
            { label: 'Swagger', url : "/swagger-ui.html", icon: 'fa-gear' },
            { label: 'Documentation',
                icon: 'fa-book',
                items: [
                    {label: "Source code", icon: 'fa-github-alt', url: "https://github.com/jaxio/celerio-angular-quickstart"},
                    {label: "Celerio Documentation", icon: 'fa-external-link', url: "http://www.jaxio.com/documentation/celerio/"},
                    {label: "Angular Cli", icon: 'fa-external-link', url: "https://cli.angular.io/"},
                    {label: "Angular 4", icon: 'fa-external-link', url: "https://angular.io/"},
                    {label: "Material 2", icon: 'fa-external-link', url: "https://material.angular.io/"},
                    {label: "PrimeNG Showcase", icon: 'fa-external-link', url: "http://www.primefaces.org/primeng"},
                    {label: "TypeScript", icon: 'fa-external-link', url: "https://www.typescriptlang.org/"},
                    {label: "Spring Boot", icon: 'fa-external-link', url: "http://projects.spring.io/spring-boot/"},
                    {label: "Spring Data JPA", icon: 'fa-external-link', url: "http://projects.spring.io/spring-data-jpa/"}
                ]
            }
        ];

        this.authService.isAuthenticated().
            subscribe(
                resp =>
                    {
                        this.authenticated = resp;
                        this.displayLoginDialog = !this.authenticated;
                        if (this.authenticated) {
                            this.items.push({label: 'Sign out', url: '/api/logout', icon: 'fa-sign-out' });
                            console.log('You are authenticated...', '');
                        } else {
                            console.log('You are NOT authenticated...', '');
                        }
                    },
                error =>  this.messageService.error('isAuthenticated Error', error)
            );
    }

    login() {
        this.authService.login(this.j_username, this.j_password).
            subscribe(
                loginOk => {
                    if (loginOk) {
                        this.displayLoginDialog = false;
                        this.authenticated = true;
                        this.items.push({label: 'Sign out', url: '/api/logout', icon: 'fa-sign-out' });
                        this.loginFailed = false;
                        this.messageService.info('You are now logged in.', '');
                    } else {
                        this.loginFailed = true;
                        this.displayLoginDialog = true;
                        this.authenticated = false;
                    }
                },
                error => {
                    this.messageService.error('Login error', error);
                    this.loginFailed = true;
                    this.displayLoginDialog = true;
                    this.authenticated = false;
                }
        );
    }

    // sample method from angular doc
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `Status: ${error.status} - Text: ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
