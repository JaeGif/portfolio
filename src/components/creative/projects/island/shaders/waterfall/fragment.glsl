
void main() {
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    float strength = 0.05 / distanceToCenter;
    strength = clamp(strength, 0.0, 1.0);

    gl_FragColor = vec4(.55 * strength, .75 * strength, 1.0 * strength, strength);
}