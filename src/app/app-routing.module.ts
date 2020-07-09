import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { EventComponent } from './event/event.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [{path:'table',component:TableComponent},
                        {path:'event',component:EventComponent},
                        {path:'update',component:UpdateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
