import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Meta, Story } from '@storybook/angular';
import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from '../app/app.component';
import { AuthService } from '../app/core/services/auth.service';
import { HomeComponent } from '../app/home/home.component';
import { CreateQuoteComponent } from '../app/quote/create-quote/create-quote.component';
import { QuoteEffects } from '../app/quote/quote-store/effects/quote.effects';
import { QuotesListComponent } from '../app/quote/quotes-list/quotes-list.component';
import { SignUpComponent } from '../app/sign-up/sign-up.component';
import { reducers } from '../app/sign-up/store/app.state';
import { AuthEffects } from '../app/sign-up/store/effects/auth.effects';

export default {
  title: 'App component',
  component: AppComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  templateUrl: '../app/app.component.html',
  styleUrls: ['../app/app.component.scss'],
  moduleMetadata: {
    declarations: [
      AppComponent,
      SignUpComponent,
      HomeComponent,
      QuotesListComponent,
      CreateQuoteComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      StoreModule.forRoot(reducers, {}),
      EffectsModule.forRoot([AuthEffects, QuoteEffects]),
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, AuthService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  },
  props: { args },
});
export const App = Template.bind({});
