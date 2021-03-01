export const ramp = `
  float ramp(float t){
    t *= 2.0;
    if (t >= 1.0) {
      t -= 1.0;
      t = log(0.5) / log(0.5*(1.0-t) + 0.9332*t);
    }
    return clamp(t, 0.001, 10.0);
  }
`;

export const Lum = `
  float Lum(vec3 c){
    return 0.299*c.r + 0.587*c.g + 0.114*c.b;
  }
`;

export const ClipColor = `
  vec3 ClipColor(vec3 c){
    float l = Lum(c);
    float n = min(min(c.r, c.g), c.b);
    float x = max(max(c.r, c.g), c.b);
  
    if (n < 0.0) c = (c-l)*l / (l-n) + l;
    if (x > 1.0) c = (c-l) * (1.0-l) / (x-l) + l;
  
    return c;
  }
`;

export const SetLum = `
  vec3 SetLum(vec3 c, float l){
    float d = l - Lum(c);
  
    c.r = c.r + d;
    c.g = c.g + d;
    c.b = c.b + d;
  
    return ClipColor(c);
  }
`;

export const Sat = `
  float Sat(vec3 c){
    float n = min(min(c.r, c.g), c.b);
    float x = max(max(c.r, c.g), c.b);
  
    return x - n;
  }
`;

export const SetSat = `
  vec3 SetSat(vec3 c, float s){
    float cmin = min(min(c.r, c.g), c.b);
    float cmax = max(max(c.r, c.g), c.b);
  
    vec3 res = vec3(0.0);
  
    if (cmax > cmin) {
  
      if (c.r == cmin && c.b == cmax) { // R min G mid B max
        res.r = 0.0;
        res.g = ((c.g-cmin)*s) / (cmax-cmin);
        res.b = s;
      }
      else if (c.r == cmin && c.g == cmax) { // R min B mid G max
        res.r = 0.0;
        res.b = ((c.b-cmin)*s) / (cmax-cmin);
        res.g = s;
      }
      else if (c.g == cmin && c.b == cmax) { // G min R mid B max
        res.g = 0.0;
        res.r = ((c.r-cmin)*s) / (cmax-cmin);
        res.b = s;
      }
      else if (c.g == cmin && c.r == cmax) { // G min B mid R max
        res.g = 0.0;
        res.b = ((c.b-cmin)*s) / (cmax-cmin);
        res.r = s;
      }
      else if (c.b == cmin && c.r == cmax) { // B min G mid R max
        res.b = 0.0;
        res.g = ((c.g-cmin)*s) / (cmax-cmin);
        res.r = s;
      }
      else { // B min R mid G max
        res.b = 0.0;
        res.r = ((c.r-cmin)*s) / (cmax-cmin);
        res.g = s;
      }
  
    }
  
    return res;
  }
`;

export const Mix = `
  vec3 Mix(vec3 a, vec3 b, float opacity) {
    return mix(a, b, opacity);
  }
`;

export const ClampRGBVec3 = `
  vec3 ClampRGBVec3(vec3 c) {
    return clamp(c / 255.0, 0.0, 1.0);
  }
`;
