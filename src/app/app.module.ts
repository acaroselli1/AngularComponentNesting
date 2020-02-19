import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { GrandChildComponent } from './components/grandchild/grandchild.component';
import { GrandparentComponent } from './components/grandparent/grandparent.component';
import { GreatGrandchildComponent } from './components/great-grandchild/great-grandchild.component';
import { GreatGrandparentComponent } from './components/great-grandparent/great-grandparent.component';
import { ParentComponent } from './components/parent/parent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandChildComponent,
    GrandparentComponent,
    GreatGrandchildComponent,
    GreatGrandparentComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
