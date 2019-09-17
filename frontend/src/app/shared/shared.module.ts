import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import * as fromComponents from './components';
import * as fromPipes from './pipes';


const modules: any[] = [CommonModule, RouterModule];

@NgModule({
    declarations: [...fromComponents.components, ...fromPipes.pipes],
    imports: [...modules],
    exports: [...modules, ...fromComponents.components, ...fromPipes.pipes]
})

export class SharedModule {}