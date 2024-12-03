import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesHeaderComponent } from './courses-header/courses-header.component';
import { FilterComponent } from './filter/filter.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { DemoComponent } from './demo/demo.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SetBackgroundDirective } from './customeDirective/setBackground.directive';
import { HighlightDirective } from './customeDirective/highlight.directive';
import { HoverDirective } from './customeDirective/hover.directive';
import { BetterhighlightDirective } from './customeDirective/betterhighlight.directive';
import { ClassDirective } from './customeDirective/class.directive';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoggerService } from './Services/logger.services';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ProductcompComponent } from './productcomp/productcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    CoursesComponent,
    CoursesHeaderComponent,
    FilterComponent,
    CourseSearchComponent,
    DemoComponent,
    CustomerListComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterhighlightDirective,
    ClassDirective,
    JavascriptComponent,
    AngularComponent,
    TemplatedrivenformComponent,
    AdduserComponent,
    Comp1Component,
    Comp2Component,
    ProductcompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
