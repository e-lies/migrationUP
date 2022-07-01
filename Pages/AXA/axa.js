chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.action === 'showButtons'){
        let dossiers = request.dossiers;
        let trs = document.querySelectorAll("table#missions tr");
        // add a button to AXA rows
        trs.forEach(tr => {
            let ref = tr.querySelectorAll("td")[2].querySelector("div").innerText;
            let refExists = false;
            dossiers.forEach(dos=>{
                if(ref === dos.client_ref){
                    refExists = true;
                }
            })
            if(refExists === false){
                tr.querySelector("td:nth-child(3)").insertAdjacentElement(
                    "beforeend",
                    createButton(ref)
                )
            }
        })
    }
})


function createButton(ref){
    let td = document.createElement('div');
    let btn = document.createElement('button');
    btn.style.color = "white";
    btn.style.backgroundColor = "#00008a";
    btn.style.borderRadius = "10px";
    btn.style.fontSize = "1em";
    td.style.width = "100%";
    btn.innerText = ref.split('-')[0]+" => JL";
    btn.onclick = ()=>{
        let entityId = btn.parentElement.parentElement.id.split('|')[1];
        let id = btn.parentElement.parentElement.id.split('|')[0].split('row')[1];
        createDossier(entityId, id);
    }
    td.appendChild(btn);
    return td;
}

function createDossier(entityId, id){
    chrome.runtime.sendMessage({action: 'createDossier', entityId: entityId, id: id});
}

