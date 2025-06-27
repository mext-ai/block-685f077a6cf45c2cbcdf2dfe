import React from 'react';
import { mount } from './App';
import { useGLTF, useTexture } from '@react-three/drei'
import 'inter-ui'

useTexture.preload('../public/textures/heightmap_1024.png')
useGLTF.preload('../public/models/track-draco.glb')
useGLTF.preload('../public/models/chassis-draco.glb')
useGLTF.preload('../public/models/wheel-draco.glb')

// Use the mount function directly
const container = document.getElementById('root')!;
mount(container);
