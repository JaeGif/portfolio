
void main()
{
    float distanceToCenter = length(gl_PointCoord - 0.5);
    if(distanceToCenter > 0.5)
        discard;
        
    vec3 color = vec3(1.0, 0.573, .769);
    vec3 color2 = vec3(.565, .1216, .2314);



    gl_FragColor = vec4(color2, 1.0);

}