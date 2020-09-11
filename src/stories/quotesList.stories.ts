import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Meta, Story } from '@storybook/angular';
import { QuotesListComponent } from './../app/quote/quotes-list/quotes-list.component';

const dummyQuotes = [
  {
    quote: 'My Life is My Message',
    description: 'this is a new quote',
    author: 'Mahatma Gandhi',
    category: 'Life',
    id: 8,
  },
  {
    quote:
      'Cowards die many times before their deaths; the valiant never taste of death but once',
    description:
      'Cowards die many times before their deaths; the valiant never taste of death but once',
    author: 'William Shakespeare',
    category: 'Courage',
    id: 9,
  },
];

export default {
  title: 'quotesList Component',
  component: QuotesListComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<QuotesListComponent> = (args: QuotesListComponent) => ({
  component: QuotesListComponent,
  templateUrl: '../app/quote/quotes-list/quotes-list.component.html',
  styleUrls: [
    '../app/quote/quotes-list/quotes-list.component.scss',
    '../styles.scss',
  ],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
      ReactiveFormsModule,
    ],
    declarations: [QuotesListComponent],
    providers: [provideMockStore({})],
  },
  props: { args, quotes: dummyQuotes, userAuthenticated: true },
});
export const List = Template.bind({});
