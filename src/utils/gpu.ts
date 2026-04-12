/**
 * Utility to detect if the client's browser has WebGL (GPU) support.
 * Returns true if WebGL is available, false otherwise.
 */
export function hasGPU(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
}
