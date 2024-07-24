uniform float uTime;

varying vec2 test;

void main() {

  vec3 cpos = position;

  float waveSize = 10.0;
  vec4 modelPosition = modelMatrix * vec4(cpos, 1.0);

      
/*    if (cpos.x > -1.0) {
    modelPosition.x += sin((uTime / 10.0) + (uv.x * waveSize));
  }else {
    modelPosition.x += sin((uTime / 10.0) + (uv.x * waveSize));
  }  */
  float diff = position.x - cpos.x;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  gl_Position = projectedPosition;

  test = uv;
}