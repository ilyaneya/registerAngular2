import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterBigComponent } from './register-big/register-big.component';
import { RegisterSmallComponent } from './register-small/register-small.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { UserComponent } from './user/user.component';
import {PostService} from "./services/post.service";

const routes: Routes = [
  {path: ':postID', component: UserComponent},
  {path: '', component: RegisterBigComponent},
  {path: '**', redirectTo: ''},
];


@NgModule({
  declarations: [
    AppComponent,
    RegisterBigComponent,
    RegisterSmallComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
