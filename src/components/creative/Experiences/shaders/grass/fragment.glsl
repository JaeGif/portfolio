uniform sampler2D texture1;
uniform sampler2D textures[4];

varying vec2 vUv;
varying vec2 cloudUV;
varying vec3 vColor;

void main() {
  float contrast = 1.0;
  float brightness = 0.0001;
  vec3 color = texture2D(textures[0], vUv).rgb * contrast;

  color = color + vec3(brightness, brightness, brightness);

  color = mix(color, texture2D(textures[1], cloudUV).rgb, 0.3);

  gl_FragColor.rgb = color;
  gl_FragColor.a = 1.0;
}