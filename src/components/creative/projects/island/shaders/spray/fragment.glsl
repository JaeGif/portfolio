uniform sampler2D uTexture;

void main() {

    float textureAlpha = texture(uTexture, gl_PointCoord).r;

    gl_FragColor = vec4(.9, .9, 1.0, textureAlpha);
}