import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import {StyleClassModule} from 'primeng/styleclass';
import {LayoutService} from "../../@core/layout/service/app.layout.service";

@Component({
    selector: 'app-landing',
    templateUrl: './home.component.html',
    standalone: true,
    imports: [StyleClassModule, ButtonModule, DividerModule]
})
export class HomeComponent {

    constructor(public layoutService: LayoutService, public router: Router) { }

}