import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ManageDishesComponent } from './manage-dishes/manage-dishes.component';
import { DishFormComponent } from './dish-form/dish-form.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'meni', component: MenuComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'poručivanje', component: OrderComponent },
  { path: 'istorijaPorudžbina', component: OrderHistoryComponent, canActivate: [AuthGuardService] },
  { path: 'kreiranjeJelovnika', component: ManageDishesComponent, canActivate: [AuthGuardService]},
  { path: 'kreiranjeJelovnika/dodavanje', component: DishFormComponent, canActivate: [AuthGuardService] }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
