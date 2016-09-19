import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppComponent } from "./app.component";
import { ShoppingListService } from './shopping-list';
import { APP_ROUTES_PROVIDERS } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // For template-driven approach
    ReactiveFormsModule, // For data-driven approach
  ],
  providers: [
    APP_ROUTES_PROVIDERS,
    ShoppingListService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}