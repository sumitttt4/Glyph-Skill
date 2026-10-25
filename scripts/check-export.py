from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import re,json
root=Path(__file__).resolve().parents[1]/'out'
class Page(HTMLParser):
 def __init__(self):super().__init__();self.ids=[];self.urls=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id'in a:self.ids.append(a['id'])
  for key in ['href','src']:
   if key in a:self.urls.append(a[key])
pages={}
for p in root.rglob('*.html'):
 parser=Page();parser.feed(p.read_text());pages[p]=parser
errors=[];count=0
for path,page in pages.items():
 if len(page.ids)!=len(set(page.ids)):errors.append('Duplicate ID: '+str(path))
 for url in page.urls:
  u=urlsplit(url)
  if u.scheme or u.netloc:continue
  target=root/unquote(u.path.lstrip('/')) if u.path.startswith('/') else path.parent/unquote(u.path)
  if not u.path:target=path
  if target.is_dir():target=target/'index.html'
  if not target.is_file() and target.suffix=='':target=target/'index.html'
  count+=1
  if not target.is_file():errors.append(f'{path.relative_to(root)}: missing {url}')
  elif u.fragment and target in pages and unquote(u.fragment) not in pages[target].ids:errors.append(f'{path.relative_to(root)}: missing anchor {url}')
for p in root.rglob('*.css'):
 for url in re.findall(r'url\([\'"]?(/fonts/[^)\'" ]+)',p.read_text()):
  count+=1
  if not(root/url.lstrip('/')).is_file():errors.append('Missing font: '+url)
result={'html_pages':len(pages),'local_link_anchor_asset_checks':count,'errors':errors}
Path('review/export-check.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result,indent=2));raise SystemExit(bool(errors))
