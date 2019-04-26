import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateUserPage } from './update-user.page';
import { UpdateUserResolver } from './update-user.resolver';

const routes: Routes = [
  {
    path: '',
    component: UpdateUserPage,
  
    resolve: {
      data: UpdateUserResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [UpdateUserPage],
  providers:[UpdateUserResolver]
})
export class UpdateUserPageModule {}
