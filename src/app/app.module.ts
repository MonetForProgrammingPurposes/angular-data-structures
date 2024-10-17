import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe, UpperCasePipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { StringListComponent } from './components/string-list/string-list.component'; // Import StringList component
import { NumberListComponent } from './components/number-list/number-list.component'; // Import NumberList component
import { BooleanListComponent } from './components/boolean-list/boolean-list.component'; // Import BooleanList component
import { MixedListComponent } from "./components/mixed-list/mixed-list.component";
import { UppercaseStringListComponent } from "./components/uppercase-string-list/uppercase-string-list.component";
import { LowercaseStringListComponent } from "./components/lowercase-stringlist/lowercase-stringlist.component";
import { ListWithDuplicatesComponent } from "./components/list-with-duplicates/list-with-duplicates.component";
import { UniqueListComponent } from "./components/unique-list/unique-list.component";
import { AddToBeginningComponent } from "./components/add-to-beginning/add-to-beginning.component";
import { AddToEndComponent } from "./components/add-to-end/add-to-end.component";
import { AnimatedListComponent } from "./components/animated-list/animated-list.component";
import { BgColorChangeOnHoverComponent } from "./components/bg-color-change-on-hover/bg-color-change-on-hover.component";
import { BoldItemsComponent } from "./components/bold-items/bold-items.component";
import { BulletedListComponent } from "./components/bulleted-list/bulleted-list.component";
import { CategorizedListComponent } from "./components/categorized-list/categorized-list.component";
import { ClickCountListComponent } from "./components/click-count-list/click-count-list.component";
import { ColorCodedListComponent } from "./components/color-coded-list/color-coded-list.component";
import { DeletableListComponent } from "./components/deletable-list/deletable-list.component";
import { EditableListComponent } from "./components/editable-list/editable-list.component";
import { EmployeeListComponent } from "./components/employeelist/employeelist.component";
import { ExpandableCollapsibleListComponent } from "./components/expandable-collapsible-list/expandable-collapsible-list.component";
import { FavoritesListComponent } from "./components/favorites-list/favorites-list.component";
import { GroupedListComponent } from "./components/grouped-list/grouped-list.component";
import { GroupedSortedListComponent } from "./components/grouped-sorted-list/grouped-sorted-list.component";
import { HighlightMatchingListComponent } from "./components/highlight-matching-list/highlight-matching-list.component";
import { ImageListComponent } from "./components/image-list/image-list.component";
import { ItalicizedItemsComponent } from "./components/italicized-items/italicized-items.component";
import { LazyLoadingListComponent } from "./components/lazy-loading-list/lazy-loading-list.component";
import { ListWithDatesComponent } from "./components/list-with-dates/list-with-dates.component";
import { ListWithTooltipsComponent } from "./components/list-with-tooltips/list-with-tooltips.component";
import { LiveUpdateListComponent } from "./components/live-update-list/live-update-list.component";
import { LoadMoreListComponent } from "./components/load-more-list/load-more-list.component";
import { NestedListComponent } from "./components/nested-list/nested-list.component";
import { NumberedListComponent } from "./components/numbered-list/numbered-list.component";
import { ObjectListComponent } from "./components/object-list/object-list.component";
import { PaginationListComponent } from "./components/pagination-list/pagination-list.component";
import { PriorityListComponent } from "./components/priority-list/priority-list.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { RemoveFromBeginningComponent } from "./components/remove-from-beginning/remove-from-beginning.component";
import { RemoveFromEndComponent } from "./components/remove-from-end/remove-from-end.component";
import { ReplaceItemComponent } from "./components/replace-item/replace-item.component";
import { ReverseListComponent } from "./components/reverse-list/reverse-list.component";
import { SortableListComponent } from "./components/sortable-list/sortable-list.component";
import { SortedListComponent } from "./components/sorted-list/sorted-list.component";
import { StrikeThroughListComponent } from "./components/strike-through-list/strike-through-list.component";
import { StudentListComponent } from "./components/student-list/student-list.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { ToggleableListComponent } from "./components/toggleable-list/toggleable-list.component";
import { UppercaseItalicListComponent } from "./components/uppercase-italic-list/uppercase-italic-list.component";


const routes: Routes = [

  { path: 'string-list', component: StringListComponent },
  { path: 'number-list', component: NumberListComponent },
  { path: 'boolean-list', component: BooleanListComponent },
  { path: 'mixed-list', component: MixedListComponent },
  { path: 'uppercase-string-list', component: UppercaseStringListComponent },
  { path: 'lowercase-string-list', component: LowercaseStringListComponent },
  { path: 'list-with-duplicates', component: ListWithDuplicatesComponent },
  { path: 'unique-list', component: UniqueListComponent },
  { path: 'add-to-beginning', component: AddToBeginningComponent },
  { path: 'add-to-end', component: AddToEndComponent },
  { path: 'animated-list', component: AnimatedListComponent },
  { path: 'bg-color-change-on-hover', component: BgColorChangeOnHoverComponent },
  { path: 'bold-items', component: BoldItemsComponent },
  { path: 'bulleted-list', component: BulletedListComponent },
  { path: 'categorized-list', component: CategorizedListComponent },
  { path: 'click-count-list', component: ClickCountListComponent },
  { path: 'color-coded-list', component: ColorCodedListComponent },
  { path: 'deletable-list', component: DeletableListComponent },
  { path: 'editable-list', component: EditableListComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'expandable-collapsible-list', component: ExpandableCollapsibleListComponent },
  { path: 'favorites-list', component: FavoritesListComponent },
  { path: 'grouped-list', component: GroupedListComponent },
  { path: 'grouped-sorted-list', component: GroupedSortedListComponent },
  { path: 'highlight-matching-list', component: HighlightMatchingListComponent },
  { path: 'image-list', component: ImageListComponent },
  { path: 'italicized-items', component: ItalicizedItemsComponent },
  { path: 'lazy-loading-list', component: LazyLoadingListComponent },
  { path: 'list-with-dates', component: ListWithDatesComponent },
  { path: 'list-with-duplicates', component: ListWithDuplicatesComponent },
  { path: 'list-with-tooltips', component: ListWithTooltipsComponent },
  { path: 'live-update-list', component: LiveUpdateListComponent },
  { path: 'load-more-list', component: LoadMoreListComponent },
  { path: 'nested-list', component: NestedListComponent},
  { path: 'numbered-list', component: NumberedListComponent },
  { path: 'object-list', component: ObjectListComponent },
  { path: 'pagination-list', component: PaginationListComponent },
  { path: 'priority-list', component: PriorityListComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'remove-from-beginning', component: RemoveFromBeginningComponent },
  { path: 'remove-from-end', component: RemoveFromEndComponent },
  { path: 'replace-item', component: ReplaceItemComponent },
  { path: 'reverse-list', component: ReverseListComponent },
  { path: 'sortable-list', component: SortableListComponent },
  { path: 'sorted-list', component: SortedListComponent },
  { path: 'strike-through-list', component: StrikeThroughListComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'toggleable-list', component: ToggleableListComponent },
  { path: 'uppercase-italic-list', component: UppercaseItalicListComponent },
  // Add routes for any additional components here...
]
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {enableTracing: true}),
        FormsModule,

        StringListComponent,
        UppercaseStringListComponent,
        UppercaseItalicListComponent
    ],

    declarations: [
        AppComponent, // Dapat idagdag ito
      ],
      providers: [],
      bootstrap: [AppComponent] // Dapat ay nakalista ang AppComponent dito
    })
    export class AppModule { }