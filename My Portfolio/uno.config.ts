import { defineConfig, presetUno, presetTypography } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
  ],
  theme: {
    colors: {
      obsidian: '#0A0A0F',
      glass: 'rgba(20, 25, 35, 0.7)',
      cyan: '#00F0FF',
      purple: '#B926FF',
      slate: '#E2E8F0'
    }
  }
});