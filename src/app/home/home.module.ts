import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HomeResolver,HomeResolver2 } from './home.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    resolve: {
      data: HomeResolver,
      data1: HomeResolver2
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage],
  providers: [
    HomeResolver,HomeResolver2
  ]
})
export class HomePageModule {}
