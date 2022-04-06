import React from 'react';

import Post from './Post';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Post',
  component: Post
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => <Post content="I'm working in Figma trying to design a new website that shows all my tweets!" date="6/4/2022" /> 

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
 
 