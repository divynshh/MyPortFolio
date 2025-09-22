import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },       // default route
  { path: 'blog', component: BlogComponent },     // blog route
  { path: '**', redirectTo: '' }                  // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
