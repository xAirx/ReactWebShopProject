module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-actions/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    'storybook-addon-styled-component-theme/dist/register',
    '@storybook/addon-storysource',
    '@storybook/addon-info',
  ],
};
