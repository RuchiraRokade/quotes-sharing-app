import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Meta, Story } from '@storybook/angular';
import { SignUpComponent } from '../app/sign-up/sign-up.component';

export default {
  title: 'Sign up component',
  component: SignUpComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<SignUpComponent> = (args: SignUpComponent) => ({
  component: SignUpComponent,
  moduleMetadata: {
    imports: [
      CommonModule,
      RouterTestingModule.withRoutes([]),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
    ],
    declarations: [SignUpComponent],
    providers: [provideMockStore({})],
  },
  props: { ...args },
});
export const Default = Template.bind({});
