import { Routes } from '@angular/router';
import { AllAddress } from './address/all-address/all-address';
import { AddAddress } from './address/add-address/add-address';

export const routes: Routes = [

    { path: '', component: AllAddress },
    { path: 'addAddress', component: AddAddress },


];
