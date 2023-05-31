import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { UsignupComponent } from './usignup/usignup.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdataComponent } from './userdata/userdata.component';


const appRoute:Routes = [
  
  {path:'',component:HomeComponent},
  // {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'services',component:MyservicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:UloginComponent},
  {path:'signUp',component:UsignupComponent},
  {path:'**', component:ErrorComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    UsignupComponent,
    UloginComponent,
    AboutComponent,
    PortfolioComponent,
    MyservicesComponent,
    ErrorComponent,
    ContactComponent,
    UserdataComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
