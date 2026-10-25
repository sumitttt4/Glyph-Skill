from pathlib import Path
import json
pairs={
'light':[('#171717','#ffffff'),('#545454','#ffffff'),('#545454','#f6f6f6'),('#244d7a','#e7f1ff'),('#142e50','#b5d5ff'),('#3a2b52','#eee7fa'),('#213e5e','#e5f1ff'),('#172f4b','#e9f2ff'),('#3b2c53','#eee8fa'),('#234737','#e4f2ec'),('#a62535','#ffffff')],
'dark':[('#f4f4f4','#000000'),('#b9b9b9','#000000'),('#b9b9b9','#191919'),('#c2dcff','#182b43'),('#142e50','#b5d5ff'),('#e8dbfc','#291f3d'),('#daeaff','#172c45'),('#d7e8ff','#122237'),('#e5d9fa','#241b35'),('#d0eddd','#12291f'),('#ffb6c5','#111111')],
'fixture':[('#49291f','#f1e5d5'),('#6c4939','#f1e5d5'),('#6c4939','#fffbf4')]}
def lum(s):
 c=[int(s[i:i+2],16)/255 for i in (1,3,5)];c=[x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in c];return sum(x*w for x,w in zip(c,[.2126,.7152,.0722]))
rows=[]
for theme,ps in pairs.items():
 for fg,bg in ps:
  a,b=sorted([lum(fg),lum(bg)]);v=(b+.05)/(a+.05);rows.append({'theme':theme,'fg':fg,'bg':bg,'ratio':round(v,2),'threshold':4.5,'pass':v>=4.5})
for fg,bg in [('#234bd6','#ffffff'),('#234bd6','#f6f6f6'),('#b5caff','#000000'),('#b5caff','#191919')]:
 a,b=sorted([lum(fg),lum(bg)]);v=(b+.05)/(a+.05);rows.append({'theme':'focus','fg':fg,'bg':bg,'ratio':round(v,2),'threshold':3,'pass':v>=3})
Path('review/contrast.json').write_text(json.dumps(rows,indent=2)+'\n');fails=[x for x in rows if not x['pass']];print(json.dumps({'tested_pairs':len(rows),'failures':fails,'scope':'Opaque text/focus token pairs, not a complete accessibility audit.'},indent=2));raise SystemExit(bool(fails))
