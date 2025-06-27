import React from 'react';
import { mount } from './App';
import { useGLTF, useTexture } from '@react-three/drei'
import 'inter-ui'

useTexture.preload('../public/textures/heightmap_1024.png')
useGLTF.preload('https://content.mext.app/uploads/c9050d26-971c-47be-aeca-4d12261b64a8.glb')
useGLTF.preload('https://content.mext.app/uploads/ffcbdbfc-7ea6-47c8-b952-479d31ff64db.glb')
useGLTF.preload('https://content.mext.app/uploads/3827436c-5b86-4225-8f43-5ab4a5b8d78c.glb')

// Use the mount function directly
const container = document.getElementById('root')!;
mount(container);
