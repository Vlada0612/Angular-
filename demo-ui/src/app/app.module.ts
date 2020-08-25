import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {FormsModule} from '@angular/forms';
import {AddRecordComponent} from './add-record/add-record.component';
import {RecordsComponent} from './records/records.component';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxFileDropModule} from 'ngx-file-drop';
import {HttpClientModule} from '@angular/common/http';
import {DndDirective} from './dnd.directive';
import {Ng2TelInputModule} from 'ng2-tel-input';
import {InternationalPhoneNumberModule} from 'ng-phone-mask';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AddRecordComponent,
    RecordsComponent,
    DndDirective
  ],
  imports: [
    BrowserModule,
    MatMomentDateModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    NgxFileDropModule,
    HttpClientModule,
    Ng2TelInputModule,
    InternationalPhoneNumberModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
