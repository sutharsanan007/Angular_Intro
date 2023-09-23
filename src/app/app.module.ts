import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { AppendPipe } from './angular-pipes/append.pipe';
import { SummaryPipe } from './angular-pipes/summary.pipe';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    PostFormComponent,
    AngularDirectivesComponent,
    AngularPipesComponent,
    AppendPipe,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
