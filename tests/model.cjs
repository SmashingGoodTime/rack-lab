const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(x=>x[1]);
for(const script of scripts)new vm.Script(script);
const ctx=vm.createContext({console,URL,Map,Set,assert,localStorage:{getItem:()=>null},window:{},document:{},setTimeout,clearTimeout});
vm.runInContext(scripts[0],ctx);
vm.runInContext(scripts[2].split('\ninitThree();')[0],ctx);
vm.runInContext(`
function fixture(depth=3.5,width=12,height=12){const m=blank();m.bw=width;m.lift=height;m.depth=depth;m.cells.set('12,12,0',{r:0,bw:width,lift:height,depth,deck:true,floor:false,canopy:false});return m;}
let cases=0;
for(const depth of DEPTH_OPTS)for(const width of BW_OPTS)for(const height of LIFT_OPTS){
 const m=fixture(depth,width,height),d=derive(m,true),v=decode(encode(m)).model;
 assert.equal(d.framesN,4);assert.equal(d.frameStock[0].depth,depth);
 assert.equal(d.maxJoistSpan,Math.max(depth,width-2*depth));
 assert.equal(d.joistLens.get(width),10);assert.equal(v.cells.get('12,12,0').depth,depth);
 const positions=d.beamRuns.filter(b=>b.y>1).map(b=>b.x).sort((a,b)=>a-b);
 const expected=[mX(12),mX(12)+depth,mX(12)+width-depth,mX(12)+width];
 assert.equal(JSON.stringify(positions),JSON.stringify([...new Set(expected)].sort((a,b)=>a-b)));
 cases++;
}
const joined=fixture(4);joined.cells.set('12,15,0',{r:0,bw:12,lift:12,depth:4,deck:true});
assert.equal(derive(joined).framesN,6,'compatible end frames share');
joined.cells.get('12,15,0').depth=3;
assert.equal(derive(joined).framesN,8,'different depths do not share');
joined.cells.get('12,15,0').depth=4;joined.cells.get('12,15,0').lift=16;
const taller=derive(joined);assert.equal(taller.framesN,6);assert.equal(taller.frameStock.find(f=>f.height===16).count,4);
const stack=fixture(4);stack.cells.set('12,12,1',{r:0,bw:12,lift:12,depth:3,deck:true});normalizeKit(stack);
assert.equal(stack.cells.get('12,12,1').depth,4);assert.equal(derive(stack).badStacks,0);
const legacy=encodeR9(joined);nextDepth=4;useDepth(4);const old=decode(legacy);
assert.equal(old.model.depth,3.5);for(const v of old.model.cells.values())assert.equal(cellDepth(v),3.5);
const rotated=rotateModel(joined);assert.equal([...rotated.cells.values()][0].depth,4);
assert.equal(derive(rotated).framesN,derive(joined).framesN);
model=fixture(4);model.cells.set('15,12,0',{r:0,bw:12,lift:12,depth:4,deck:true});
assert.throws(()=>editedBayModel('12,12,0',16,12,4),/overlaps/);
const before=encode();const edited=editedBayModel('12,12,0',12,16,3);
assert.equal(encode(),before,'inspector validation does not mutate live model');
assert.equal(edited.cells.get('12,12,0').depth,3);assert.equal(edited.cells.get('15,12,0').depth,4);
stack.cells.set('12,12,2',{r:0,bw:12,lift:12,depth:4,deck:true});model=stack;assert.throws(()=>editedBayModel('12,12,0',12,16,4),/ceiling/); 

assert.equal(decode('R10.bad'),null);
const corrupt=JSON.parse(decodeURIComponent(encode().slice(4)));corrupt.depth=9;assert.equal(decode('R10.'+encPart(JSON.stringify(corrupt))),null);
model=fixture(3);site={name:'Test block',lots:[]};mode='build';inventory=validateInventory({'Upright frame 12′ × 36″':0});
const project=projectData(),restored=parseProject(JSON.parse(JSON.stringify(project)));
assert.equal(restored.d.model.cells.get('12,12,0').depth,3);assert.equal(restored.stock['Upright frame 12′ × 36″'],0);
assert.throws(()=>validateInventory({x:-1}));assert.throws(()=>validateInventory({x:2.5}));assert.throws(()=>parseProject({format:'wrong'}));
const solar=fixture(3,16);solar.cells.get('12,12,0').r=2;
const ds=derive(solar);assert.equal(ds.span212,ds.beamRuns.filter(b=>b.wood&&b.hi).reduce((n,b)=>n+b.plies,0));
B={};drawAll(derive(model),model,true,false);assert(B.steel.length>0);assert(B.wood.length>0);
model=fixture(4,16);B={};drawAll(derive(model),model,true,false);
assert(B.wood.filter(b=>b.sy===.6).every(b=>b.sx>15),'joists cross a 16-foot row spread');
const mixed=fixture(4,16);mixed.cells.set('18,12,0',{r:0,bw:8,lift:8,depth:3,deck:true});
const md=derive(mixed);assert.equal(md.joistLens.get(16),10);assert.equal(md.joistLens.get(8),10);
const rows=materialsFor(md);assert(rows.some(r=>r.name==='2×8 joists, 16′'&&r.needed===11));
assert(rows.every(r=>Number.isFinite(r.needed)&&r.needed>0));
mode='site';site={name:'Mixed',lots:[{m:mixed,D:md},{m:mixed,D:md}]};
assert.equal(currentMaterials().find(r=>r.name==='2×8 joists, 16′').needed,22);
mode='build';model=mixed;assert(planSVG().includes('<svg'));
for(const depth of DEPTH_OPTS)for(const width of BW_OPTS)for(const height of LIFT_OPTS){
 nextBW=width;nextLift=height;nextDepth=depth;useNext();
 for(const [name,count] of Object.entries({hall:6,cafe:3,living:4})){
  const t=TPL[name](),d=derive(t);assert.equal(t.cells.size,count,name);
  assert.equal(d.badStacks,0,name);assert.equal(decode(encode(t)).model.cells.size,count);
  for(const v of t.cells.values()){assert.equal(v.bw,width);assert.equal(v.lift,height);assert.equal(v.depth,depth);}
  if(name==='hall'){assert.equal([...t.cells.values()].filter(v=>v.floor).length,4);assert.equal([...t.cells.values()].filter(v=>!v.floor).length,2);}
  if(name==='cafe'){assert.equal(t.slopes.size,1);assert.equal([...t.slopes.values()][0].solar,false);}
  if(name==='living'){assert.equal(d.doors,2);assert.equal([...t.cells.values()].filter(v=>v.floor).length,2);}

 }
}
console.log('PASS: 81 Mars-focused adaptive starting-template fixtures.');
console.log('PASS: '+cases+' kits; sharing, stacking, legacy links, R10 round trips, rotation, inspector validation, inventory, project restore and joist geometry.');
`,ctx);
