uniform float uTime;
uniform float uPixelRatio;

attribute float aScale;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    modelPosition.y += sin(uTime + modelPosition.x * 75.0) * .3;
    modelPosition.z += cos(uTime + modelPosition.x * 65.0) * 0.01;
    modelPosition.x += sin(uTime + modelPosition.x * 55.0) * 0.01;

    vec4 viewPosition = viewMatrix * modelPosition; 
    vec4 projectionPosition = projectionMatrix * viewPosition;

    float flickerScale = sin(uTime * aScale * 10.0) + 2.0;

    gl_Position = projectionPosition;
    gl_PointSize = 10.0 * flickerScale * uPixelRatio * aScale;    // change sizes

}