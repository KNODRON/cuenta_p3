:root{
  --bg:#0b0f14;
  --card:#121821;
  --muted:#91a3b8;
  --text:#e8f0f7;
  --accent:#25D366; /* WhatsApp */
  --accent-press:#1eb65a;
  --accent-2:#3ea0ff;
  --border:#223042;
  --chip:#182130;
}

*{box-sizing:border-box}

html,body{
  margin:0;
  padding:0;
  background:var(--bg);
  color:var(--text);
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,"Noto Sans",Arial,"Apple Color Emoji","Segoe UI Emoji";
}

.container{
  max-width:1000px;
  margin:0 auto;
  padding:24px 16px 48px;
}

.header{ margin-bottom:16px; }
.title-row{
  display:flex; justify-content:space-between; align-items:baseline; gap:12px;
}
.header h1{
  margin:0;
  font-size:clamp(20px,3vw,28px);
  letter-spacing:.3px;
}
.subtitle{ margin:.25rem 0 0 0; color:var(--muted); }
.muted{ color:var(--muted); }

.card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:16px;
  padding:16px;
  box-shadow:0 10px 30px rgba(0,0,0,.25);
}

.toolbar{
  display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;
  margin-bottom:12px;
}
.phone-label{
  display:flex; align-items:center; gap:8px; color:var(--muted);
}
#wa-number{
  background:#0e141c; color:var(--text); border:1px solid var(--border);
  border-radius:10px; padding:8px 10px; min-width:230px;
}

.sections{ display:grid; gap:14px; }

.section{
  border:1px solid var(--border);
  border-radius:12px;
  padding:10px;
  background:var(--chip);
}
.section h3{
  margin:0 0 8px 0;
  font-size:16px;
}
.section .controls{
  display:flex; gap:8px; flex-wrap:wrap; margin:6px 0 10px;
}
.section .list{ display:grid; gap:8px; }
.item{
  display:flex; align-items:flex-start; gap:10px;
  padding:10px; border:1px solid var(--border); border-radius:10px; background:#0f1620;
}
.item .who{
  display:flex; gap:8px; flex-wrap:wrap;
}
.chip{
  display:inline-block; padding:2px 8px; border-radius:999px;
  background:#0b1626; border:1px solid #213249; color:#b8d0ea; font-size:12px;
}

.label{
  display:block; margin:14px 0 8px; color:var(--muted); font-size:14px;
}

.textarea{
  width:100%; min-height:36vh; background:#0e141c; color:var(--text);
  border:1px solid var(--border); border-radius:12px; padding:14px;
  font:14px/1.4 ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  white-space:pre;
  resize:vertical;
}

.actions{
  display:flex; flex-wrap:wrap; gap:10px; margin:8px 0 10px;
}
.btn{
  appearance:none; border:1px solid var(--border);
  padding:10px 14px; border-radius:12px; font-weight:600; cursor:pointer;
  transition:.15s transform ease, .15s background ease, .15s border-color ease, .15s opacity ease;
}
.btn-primary{ background:var(--accent); color:#05210f; border-color:transparent; }
.btn-primary:active{ transform:translateY(1px); background:var(--accent-press); }
.btn-secondary{ background:var(--accent-2); color:#07121f; border-color:transparent; }
.btn-ghost{ background:transparent; color:var(--text); }
.btn-ghost:hover{ border-color:#3a4a60; }

.hint{ margin-top:8px; color:var(--muted); font-size:13px; text-align:left; }
.footer{ margin-top:18px; color:var(--muted); text-align:center; }
