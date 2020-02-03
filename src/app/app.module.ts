import { UserService } from './Service/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRouterModule } from './Modules/app-router/app-router.module';
import { AppComponent } from './app.component';
import { AddCustComponent } from './Components/add-cust/add-cust.component';
import { CustSubNavComponent } from './Components/cust-sub-nav/cust-sub-nav.component';
import { DeleteCustComponent } from './Components/delete-cust/delete-cust.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ListComponent } from './Components/list/list.component';
import { OverviewComponent } from './Components/overview/overview.component';
import { SubNavComponent } from './Components/sub-nav/sub-nav.component';
import { UpdateCustComponent } from './Components/update-cust/update-cust.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UserComponent } from './Components/user/user.component';
import { PlaceholderComponent } from './Components/placeholder/placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCustComponent,
    CustSubNavComponent,
    DeleteCustComponent,
    FooterComponent,
    HeaderComponent,
    ListComponent,
    OverviewComponent,
    SubNavComponent,
    UpdateCustComponent,
    UserDetailsComponent,
    UserComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
