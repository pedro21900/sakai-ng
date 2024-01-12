import {Component, ElementRef, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LayoutService} from "./service/app.layout.service";
import {NgClass} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    standalone: true,
    imports: [RouterLink, NgClass, ButtonModule, MenuModule]
})
export class AppTopBarComponent {

    items!: MenuItem[];

    menuItems = [
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-sign-out',
            routerLink: '/auth/login'
        }
    ];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService,private router:Router) { }
}
