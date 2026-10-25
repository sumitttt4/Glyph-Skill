"""Render the Glyph social card using the project's own fonts and mark geometry."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parents[1]
S = 2
im = Image.new('RGB', (1200*S, 630*S), 'white')
d = ImageDraw.Draw(im)
def font(name,size): return ImageFont.truetype(str(ROOT/'public/fonts'/name),size*S)
def text(x,y,value,size=24,color='#171717',serif=False):
    d.text((x*S,y*S),value,font=font('source-serif-4-regular.ttf' if serif else 'dm-sans.ttf',size),fill=color)
def rect(box,fill,r=0): d.rounded_rectangle(tuple(v*S for v in box),radius=r*S,fill=fill)
rect((64,58,116,110),'#b5d5ff',13)
d.polygon([(x*S,y*S) for x,y in [(76,70),(104,70),(104,78),(84,78),(84,98),(76,98)]], fill='#152e50')
d.polygon([(x*S,y*S) for x,y in [(90,84),(104,84),(104,98),(90,98),(90,91),(97,91),(97,84)]], fill='#152e50')
text(132,64,'Glyph Skill',29)
text(64,177,'Good interfaces start',65,serif=True)
text(64,260,'with better decisions.',65,serif=True)
text(68,378,'A frontend design skill for AI coding assistants.',27,color='#545454')
rect((68,470,545,520),'#e7f1ff',8)
text(84,480,'Understand. Compose. Build. Verify.',22,color='#152e50')
text(68,562,'glyph-skillfordesign.vercel.app',19,color='#545454')
# Three restrained composition studies: direction, hierarchy, and a considered action.
for x,y,w,h in [(930,169,170,107),(870,300,230,117),(972,441,128,79)]:
    rect((x,y,x+w,y+h),'#f3f7fc',12)
    rect((x+18,y+19,x+w-18,y+25),'#b5d5ff',3)
    rect((x+18,y+39,x+w-42,y+43),'#ced9e7',2)
    rect((x+18,y+h-30,x+65,y+h-15),'#b5d5ff',4)
im.resize((1200,630),Image.Resampling.LANCZOS).save(ROOT/'public/og-glyph.png',optimize=True)
