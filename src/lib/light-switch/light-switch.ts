// Source: https://github.com/skeletonlabs/skeleton/blob/master/packages/skeleton/src/lib/utilities/LightSwitch/lightswitch.ts

// Lightswitch Service
import { localStorageStore } from './local-storage-store';

export const modeOsPrefers = localStorageStore<boolean>('modeOsPrefers', false);

// Get ---

/** Get the OS Preference for light/dark mode */
export function getModeOsPrefers(): boolean {
  const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
  modeOsPrefers.set(prefersLightMode);
  return prefersLightMode;
}

/** Set the the current light/dark mode */
export function setModeCurrent() {
  const value = getModeOsPrefers();
  const elemHtmlClasses = document.documentElement.classList;
  const classDark = `dark`;
  value === true ? elemHtmlClasses.remove(classDark) : elemHtmlClasses.add(classDark);
}
