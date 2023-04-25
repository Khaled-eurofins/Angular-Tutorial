import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookStoreComponent } from './book-store/book-store.component';

const routes: Routes = [{ path: 'book-store', component: BookStoreComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
