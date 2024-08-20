varying vec2 vUv;
varying vec2 cloudUV;

varying vec3 vColor;
uniform float uTime;

void main() {
  vUv = uv;
  cloudUV = uv;
  vColor = color;
  vec3 cpos = position;

  float waveSize = 15.0;
  float tipDistance = 0.3;
  float centerDistance = 0.1;

  if (color.x > 0.6) {
    cpos.x += sin((uTime * 5.0) + (uv.x * waveSize)) * tipDistance;
  }else if (color.x > 0.0) {
    cpos.x += sin((uTime * 3.0) + (uv.x * waveSize)) * centerDistance;
  }

  float diff = position.x - cpos.x;
  cloudUV.x += uTime / 50.0;
  cloudUV.y += uTime / 30.0;

  vec4 worldPosition = vec4(cpos, 1.0);
  vec4 mvPosition = projectionMatrix * modelViewMatrix * vec4(cpos, 1.0);
  gl_Position = mvPosition;
}