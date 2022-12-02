import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AbCampoEmail, AbCampoTextoProps } from '../src';

export default {
    title: 'componentes/AbCampoEmail',
    component: AbCampoEmail,
    argTypes: {
      label: {
          control: 'text'
      }
    },
    parameters: { actions: { argTypesRegex: '^on.*' } },
  } as ComponentMeta<typeof AbCampoEmail>;
  
const Template : ComponentStory<typeof AbCampoEmail> = (args) => <AbCampoEmail {...args} />;

export const AbCampoEmailComponent = Template.bind({})

AbCampoEmailComponent.args = {
    label: 'Uma label interessante',
} as AbCampoTextoProps


