import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { NgModule } from '@angular/core';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { SharedRoutingModule } from './shared-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { BackgroundTemplateComponent } from './components/background-template/background-template.component';
import { SelectOptionComponent } from './components/select-option/select-option.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { StoreModule } from '@ngrx/store';
import { commonReducers } from './store/commonReducer';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonBarComponent } from './components/button-bar/button-bar.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    PopUpComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    MainLayoutComponent,
    BackgroundTemplateComponent,
    SelectOptionComponent,
    TextAreaComponent,
    ButtonBarComponent,
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: localStorage.getItem('language') || "en",
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(commonReducers)
  ],
  exports:[InputComponent,
    ButtonComponent,PopUpComponent,TranslateModule,
    MainLayoutComponent,BackgroundTemplateComponent,
    TextAreaComponent,SelectOptionComponent, ButtonBarComponent]
})
export class SharedModule { }