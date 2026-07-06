import math
R = 40
gap = 2.5
r = R - gap
W = math.sqrt(3) * R
H = 3 * R

def hex_points(cx, cy, r):
    pts = []
    for i in range(6):
        angle = math.pi / 6 + i * math.pi / 3
        pts.append(f'{cx + r * math.cos(angle):.1f},{cy + r * math.sin(angle):.1f}')
    return ' '.join(pts)

c1 = (W/2, H/6)
c2 = (0, 2*H/3)
c3 = (W, 2*H/3)

p1 = hex_points(*c1, r)
p2 = hex_points(*c2, r)
p3 = hex_points(*c3, r)

svg = f'''<svg width="{W:.1f}" height="{H:.1f}" viewBox="0 0 {W:.1f} {H:.1f}" xmlns="http://www.w3.org/2000/svg">
  <g fill="%23cbd5e1" fill-opacity="0.3">
    <polygon points="{p1}" />
    <polygon points="{p2}" />
    <polygon points="{p3}" />
  </g>
</svg>'''

print(svg.replace('\n', ''))
