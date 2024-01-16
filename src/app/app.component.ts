import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {RouterOutlet} from '@angular/router';
import {AppConfig, LayoutService} from "./@core/layout/service/app.layout.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
    _config: AppConfig = {
        ripple: true,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'md-light-indigo',
        scale: 14,
    };

    constructor(private primengConfig: PrimeNGConfig,private layoutService:LayoutService) { }

    ngOnInit() {
        this.layoutService.config.set(this._config)
        this.primengConfig.ripple = true;


    }
}
