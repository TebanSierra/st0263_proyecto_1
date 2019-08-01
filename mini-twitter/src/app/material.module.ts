import { NgModule } from '@angular/core';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule
} from '@angular/material';

const modules = [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule
];

@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule { }
