import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomPipePipe,
    CartComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
