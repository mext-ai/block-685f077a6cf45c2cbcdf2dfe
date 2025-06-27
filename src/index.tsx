import React from 'react';
import { mount } from './App';
import { createRoot } from 'react-dom/client'
import { useGLTF, useTexture } from '@react-three/drei'
import 'inter-ui'

useTexture.preload('/textures/heightmap_1024.png')
useGLTF.preload('/models/track-draco.glb')
useGLTF.preload('/models/chassis-draco.glb')
useGLTF.preload('/models/wheel-draco.glb')

// Use the mount function directly
const container = document.getElementById('root')!;
mount(container);
