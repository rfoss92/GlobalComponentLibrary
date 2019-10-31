import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import '../src/index.css';

const req = requireContext('../src/stories', true, /\.stories\.js$/);

// automatically import all files ending in *.stories.js
configure(req, module);
