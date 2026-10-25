from pathlib import Path
import json,re,tempfile,shutil
root=Path(__file__).resolve().parents[1];bundle=root/'skills/glyph'
errors=[];count=0
with tempfile.TemporaryDirectory(prefix='glyph-bundle-') as d:
 copied=Path(d)/'glyph';shutil.copytree(bundle,copied)
 for base in [bundle,copied]:
  for p in base.rglob('*.md'):
   for target in re.findall(r'\]\(([^)]+)\)',p.read_text()):
    if '://' in target or target.startswith('#'):continue
    count+=1
    if not (p.parent/target.split('#')[0]).is_file():errors.append(str(p)+': '+target)
for f in json.loads((root/'app/generated/skill-files.json').read_text()):
 if (root/f['name']).read_text()!=f['text']:errors.append('Docs out of sync: '+f['name'])
print(json.dumps({'reference_checks_including_disposable_copy':count,'errors':errors},indent=2))
raise SystemExit(bool(errors))
