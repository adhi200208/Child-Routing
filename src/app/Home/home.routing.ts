import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const routes:Routes=[
    {
        path:'',
        component:HomeComponent
    }
]

@NgModule({
    declarations:[],
    exports:[RouterModule],
    imports:[RouterModule.forChild(routes)]
})
export class HomeComponentRoutingModule{}