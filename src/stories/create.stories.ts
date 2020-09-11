import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Meta, Story } from '@storybook/angular';
import { QuotesService } from '../app/core/services/quotes.service';
import { CreateQuoteComponent } from '../app/quote/create-quote/create-quote.component';
export default {
  title: 'create-quote component',
  component: CreateQuoteComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<CreateQuoteComponent> = (args: CreateQuoteComponent) => ({
  component: CreateQuoteComponent,
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
    ],
    declarations: [CreateQuoteComponent],
    providers: [provideMockStore(), QuotesService],
  },
  props: { ...args },
});
export const Default = Template.bind({});
