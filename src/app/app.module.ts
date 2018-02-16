import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from "angular-bootstrap-md/index";
import { CashDataService } from './services/cash-data.service';
import { TableComponent } from './table/table.component';
import { FormsModule } from "@angular/forms";
import { CustomMaxValidatorDirective } from './directives/custom-max-validator.directive';
import { CustomMinValidatorDirective } from './directives/custom-min-validator.directive';
import { CustomTextValidatorDirective } from './directives/custom-text-validator.directive';
import { CustomZeroValidatorDirective } from './directives/custom-zero-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CustomMaxValidatorDirective,
    CustomMinValidatorDirective,
    CustomTextValidatorDirective,
    CustomZeroValidatorDirective
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    CashDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
