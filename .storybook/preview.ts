import type {Preview} from '@storybook/angular'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: [
        {name: 'Tomato', value: 'tomato'},
        {name: 'Seagreen', value: 'seagreen'},
        {name: 'Powderblue', value: 'powderblue'},
      ]
    }
  },
  initialGlobals: {
    backgrounds: {value: 'Powderblue'}
  }
};

export default preview;
