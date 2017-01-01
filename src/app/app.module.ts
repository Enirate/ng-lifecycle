import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { ChildThreeComponent } from './child-three/child-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildViewComponent,
    ChildTwoComponent,
    ParentOneComponent,
    ChildThreeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
