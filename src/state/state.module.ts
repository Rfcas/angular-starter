import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { counterReducer } from '@state/counter/counter.reducer';
import { todoListReducer } from '@state/todo-list/reducer';   // add

@NgModule({
    imports: [
        StoreModule.forRoot({
            count: counterReducer,
            todoList: todoListReducer                                   // add
        }),
        StoreDevtoolsModule.instrument()
    ]
})
export class StateModule { }