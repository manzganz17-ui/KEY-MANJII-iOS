let adminData = [];
let autoId = 1;

function randomPart(len){
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let out = '';
  for(let i=0;i<len;i++){
    out += chars[Math.floor(Math.random()*chars.length)];
  }
  return out;
}

function generateKey(){
  const duration = Number(document.getElementById('duration').value);

  const key = `MANJII-${randomPart(4)}-${randomPart(4)}-${randomPart(4)}`;
  const now = new Date();
  const exp = new Date(now.getTime() + duration * 86400000);

  document.getElementById('keyOutput').value = key;
  document.getElementById('expiredOutput').value = exp.toLocaleDateString();
  document.getElementById('result').style.display = 'block';

  adminData.unshift({
    id: autoId++,
    key: key,
    duration: duration + ' Hari',
    expired: exp.toLocaleDateString(),
    status: 'ACTIVE'
  });

  renderAdmin();
}

function renderAdmin(){
  const tbody = document.getElementById('adminTable');
  tbody.innerHTML = '';

  adminData.forEach(row => {
    tbody.innerHTML += `
      <tr>
        <td>${row.id}</td>
        <td>${row.key}</td>
        <td>${row.duration}</td>
        <td>${row.expired}</td>
        <td>${row.status}</td>
      </tr>`;
  });
}

function copyText(id){
  const el = document.getElementById(id);
  el.select();
  el.setSelectionRange(0, 99999);
  document.execCommand('copy');
}
