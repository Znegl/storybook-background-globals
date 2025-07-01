import {Meta, StoryObj} from '@storybook/angular';
import {MyComponent} from './my-component';

export default {title: 'MyComponent', component: MyComponent} as Meta<MyComponent>;


export const OldTomato: StoryObj<MyComponent> = {
  args: {
    title: 'My title',
  },
  parameters: {
    backgrounds: {
      default: 'tomato',
    },
  }
}

export const NewTomato: StoryObj<MyComponent> = {
  args: {
    title: 'My title',
  },

  globals: {
    backgrounds: {
      value: 'tomato',
    },
  }
}
