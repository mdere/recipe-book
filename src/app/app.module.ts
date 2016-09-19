import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppComponent } from "./app.component";
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // For template-driven approach
    ReactiveFormsModule, // For data-driven approach
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}