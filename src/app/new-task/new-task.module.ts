import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewTaskPage } from './new-task.page';
import { AgmCoreModule } from '@agm/core';
const routes: Routes = [
  {
    path: '',
    component: NewTaskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDFWvq9-Qwe5EbEwWQ6lQSlwg6Vnszu6cM'
    })
  ],
  providers: [Location],
  declarations: [NewTaskPage]
})
export class NewTaskPageModule {}
