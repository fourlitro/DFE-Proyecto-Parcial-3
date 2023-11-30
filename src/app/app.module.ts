import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { DashboardModule } from './pages/dashboard/dashboard.module';
import { SharedModule } from "./pages/shared/shared.module";
import { ProductsModule } from './pages/products/products.module';
import { AutenticationModule } from './pages/autentication/autentication.module';
import { SalesModule } from './pages/sales/sales.module';





@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,

        SharedModule,
        DashboardModule,
        ProductsModule,
        SalesModule,

        AutenticationModule,

        RouterOutlet,
        RouterLink,
        RouterLinkActive

    ]
})
export class AppModule { }
