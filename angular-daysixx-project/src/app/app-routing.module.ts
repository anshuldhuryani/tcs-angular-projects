import { SupplierComponent } from './supplier/supplier.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";

export const applicationRoutes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'product-detail/:id', component: ProductDetailComponent },
    { path: 'product-add', component: ProductAddComponent },
    { path: 'customers', component: CustomerComponent },
    { path: 'suppliers', component: SupplierComponent },
    { path: '**', component: PageNotFoundComponent }
]