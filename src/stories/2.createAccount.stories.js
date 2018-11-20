import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { FormCreateAccount, InputPassword } from '../components'

storiesOf('Create Account/Password Input', module)
  .add('default ', () => (
    <InputPassword />
  ))
  .add('filled + default (invisible) ', () => (
    <InputPassword value="my secret password" />
  ))
  .add('filled + visible ', () => (
    <InputPassword show value="my secret password" />
  ))

storiesOf('Create Account/Form', module)
  .add('default ', () => (
    <FormCreateAccount />
  ))
  .add('repeat password ', () => (
    <FormCreateAccount />
  ))
  .add('password too short ', () => (
    <FormCreateAccount />
  ))
  .add('bad character ', () => (
    <FormCreateAccount />
  ))
  .add('password mismatch ', () => (
    <FormCreateAccount />
  ))
  .add('creating ', () => (
    <FormCreateAccount />
  ))