import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from   '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
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
import { UserdataService } from './services/userdata.service';
import { NewsserviceService } from './services/newsservice.service';
import { UsersdataComponent } from './usersdata/usersdata.component';
import { UserPipe } from './pipes/user.pipe';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AllnewsComponent } from './allnews/allnews.component';
import { TechnologynewsComponent } from './technologynews/technologynews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';



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
  {path:'usersdata',component:UsersdataComponent},
  // {path:'update',component:UpdateuserComponent},
  {path:'update/:userId',component:UpdateuserComponent},
  {path:'allnews',component:AllnewsComponent},
  {path:'technews',component:TechnologynewsComponent},
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
    UsersdataComponent,
    UserPipe,
    UpdateuserComponent,
    AllnewsComponent,
    TechnologynewsComponent,
    BusinessnewsComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgbModule,
    RouterModule.forRoot(appRoute, {
    initialNavigation: 'enabledBlocking'
}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserdataService ,NewsserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
