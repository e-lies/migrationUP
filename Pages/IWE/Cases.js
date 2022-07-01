let cases = [];
let jwt = "JWT eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWY3ZGY0Nzk1ZWM2MDAxM2UxMGJkOSIsImVudmlyb25tZW50cyI6eyI1ZGZhN2E5ZDZiZDZkYjAwMTg4YWYwMDAiOnsicHJvZmlsZSI6ImFkbWluIiwiYWxpYXMiOiI2MGFmN2RkNjgyYzAxYjAwMTFiYTA5MjQiLCJvcmdBbGlhcyI6IjVlMDRlNjQ4NTg5MmRjMDA4MjhkMzBhYiJ9fSwiZG9tYWluIjoidXBsaW5rIiwiY3VzdG9tZXJJZCI6IjVkZmE3YTlkNmJkNmRiMDAxODhhZWZlZiIsImxvZ2luIjoiZmFiaWVuLmJlcnRoaWVyQHVuaXByb21vdGlvbi5mciIsImxhbmd1YWdlIjoiZnIiLCJvcmdBY2NvdW50IjoiNWUxNjEwYTk3Y2RlMzgwMDE3N2NmMjRmIiwic2Vzc2lvbklkIjoiNjE3M2NmMTczMTQ0M2UwMDExMzBiOTk2In0sInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTYzNDk4MTAxOSwiZXhwIjoxNjM0OTgyMjE5fQ.f0EMsYRPmIcyOxKQafQnY1u1dSmNWymdY43Nf9bSUWJ-kE12YZAz1RLRx5hIA_og_zx8RuJK0pzJQtZmf9SKGh3fD4HPorR9FeKZYBspC2kk_QhkjahsXgnLCBWuYevJpUe1NHQDGM5t0sIFPhlQiiIez7iWehXjvyvQ8aj_WePIcM4IPNxCbzt6nz3c2-GAeaxMZaACFxhE7cp_MkCg3xLhgXYuL12dMEPlUmupcXg015DySETV7IaHF7TeWPB8qJlF7Hq1m5Qie5r3wIfALEqQsTrDfp9MQVyvkSBCdMevMNUeaDvYzyuNrv6w597s-7mdw0V64GN_ngpQhvjHxg";
await fetch("https://uplink.i-we.io/api/query-executor/5dfa7a9d6bd6db00188af000/query/5dfb266c41a7f600185246d8/results?$sort=%7B%22Case.ref%22:1%7D&assignFilters=%7B%7D&filters=%7B%7D&page=1&perPage=1000", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "fr",
        "x-window-id": "ac3c2a60-9330-4221-b123-e50c11602d06",
        "Authorization": jwt,
        "Vary": "Accept-Language",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    },
    "referrer": "https://uplink.i-we.io/",
    "method": "GET",
    "mode": "cors"
}).then(prm=>prm.json()).then(rep=>{console.log("dossier = ",rep); rep.results.forEach(res=>{ 
    fetch("https://uplink.i-we.io/api/5dfa7a9d6bd6db00188af000/case/Case/"+res.caseObject._id.$id+"?view=full",{
      "credentials": "include",
      "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "fr",
        "x-window-id": "07d9fbfd-e4b7-41cc-9555-0f1db2075b27",
        "Authorization": "JWT eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWY3ZGY0Nzk1ZWM2MDAxM2UxMGJkOSIsImVudmlyb25tZW50cyI6eyI1ZGZhN2E5ZDZiZDZkYjAwMTg4YWYwMDAiOnsicHJvZmlsZSI6ImFkbWluIiwiYWxpYXMiOiI2MGFmN2RkNjgyYzAxYjAwMTFiYTA5MjQiLCJvcmdBbGlhcyI6IjVlMDRlNjQ4NTg5MmRjMDA4MjhkMzBhYiJ9fSwiZG9tYWluIjoidXBsaW5rIiwiY3VzdG9tZXJJZCI6IjVkZmE3YTlkNmJkNmRiMDAxODhhZWZlZiIsImxvZ2luIjoiZmFiaWVuLmJlcnRoaWVyQHVuaXByb21vdGlvbi5mciIsImxhbmd1YWdlIjoiZnIiLCJvcmdBY2NvdW50IjoiNWUxNjEwYTk3Y2RlMzgwMDE3N2NmMjRmIiwic2Vzc2lvbklkIjoiNjE3M2NmMTczMTQ0M2UwMDExMzBiOTk2In0sInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTYzNDk4MTAxOSwiZXhwIjoxNjM0OTgyMjE5fQ.f0EMsYRPmIcyOxKQafQnY1u1dSmNWymdY43Nf9bSUWJ-kE12YZAz1RLRx5hIA_og_zx8RuJK0pzJQtZmf9SKGh3fD4HPorR9FeKZYBspC2kk_QhkjahsXgnLCBWuYevJpUe1NHQDGM5t0sIFPhlQiiIez7iWehXjvyvQ8aj_WePIcM4IPNxCbzt6nz3c2-GAeaxMZaACFxhE7cp_MkCg3xLhgXYuL12dMEPlUmupcXg015DySETV7IaHF7TeWPB8qJlF7Hq1m5Qie5r3wIfALEqQsTrDfp9MQVyvkSBCdMevMNUeaDvYzyuNrv6w597s-7mdw0V64GN_ngpQhvjHxg",
        "Vary": "Accept-Language",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
      },
      "referrer": "https://uplink.i-we.io/",
      "method": "GET",
      "mode": "cors"
    }).then(pro=>pro.json()).then(cas=>{ cases.push(Object.keys(cas).reduce((acc,cur)=>{return ['_links','_embedded'].includes(cur) ? acc : {...acc,[cur]:cas[cur]}},{}))} ).catch(caseErr=>console.log("case error = ",caseErr)) }) })
.catch(err=>console.log("error = ",err))

let correctCases = cases.map(c=>{ return Object.keys(c).reduce((acc,cur)=>{ return c[cur] && c[cur]['$date'] ? {...acc,[cur]:{'$date':c[cur]['$date'].slice(0,19).replace('T',' ')}} : {...acc,[cur]: c[cur] === false ? 0 :(c[cur]===true ? 1 : c[cur])}  },{}) })
    
    let frm = new FormData()

    frm.set('q',JSON.stringify(correctCases.slice(0,50)))

    fetch("http://127.0.0.1:8080/unipromotion/Models/dossiersIwe.php",{method:'post',body:frm}).then(prm=>prm.text()).then(rep=>console.log(rep)).catch(err=>console.log("local error = ",err)).catch(err=>console.log("net error =",err))

    /*files: 
    for(let i = 0;i < case._counters.length; i++){
        "https://uplink.i-we.io/api/5dfa7a9d6bd6db00188af000/case/Case/${id.$id}/documents/${Object.keys(_counters)[i].split('/')[1]}/content"
    })*/