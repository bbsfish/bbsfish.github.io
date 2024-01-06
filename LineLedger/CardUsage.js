const TOLCLSTR_LOCALES = "ja-JP"
const TOLCLSTR_OPTIONS = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }

const app = {
    data: {},
    api: {
        PATH: "https://script.google.com/macros/s/AKfycbxJxIQdVcJu5IG4_uvmy0gRNaLeCtTn79WklEYZCcjLfGaUJT39EQU4QyjzK3p26AtY/exec",
        data: {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            }
        }
    }
}

app.onload = function (){
    console.log("app is loaded.")
}

app.putData = function ({
    total = 0, // 利用金額
    expense_a = "", // 費目 [データ種別A]
    expense_b = "", // コメント [データ種別B]
    datename = "", // 利用日 = today | yesterday | YYYY-MM-DD
    payway = "" // 支払方法
}){
    const Dt = new Date();
    app.data = {
        id: Dt.getTime().toString(32).toUpperCase(),
        update: Dt.toLocaleString(TOLCLSTR_LOCALES, TOLCLSTR_OPTIONS),
        date: getDateByName(datename, Dt),
        value: total,
        shop: "",
        data_type: payway,
        expense_for: expense_a,
        comment: expense_b,
        gnlc_symbol: "M",
        written: "0"
    }
    console.log("app.data update", app.data);
}

app.request = async function (onSuccess = ()=>{}, onError = ()=>{}){
    const params = new URLSearchParams();
    params.append("access_key", "Yl1zS0QkY67UxSaV6EzkhRaLJpsCZaw_")
    params.append('targetrow', JSON.stringify(this.data))
    app.api.data.body = params;
    
    try {
        const res = await fetch(app.api.PATH, app.api.data)
        const json = await res.json()
        console.log(json)
        if (json.message == "ok") {onSuccess(json);}
        else {onError(json);}

    } catch (error) {
        console.error(error)
        onError(error);
    }
}

const getDateByName = (name, dateObject = new Date()) => {
    const Dt = dateObject;
    switch (name) {
        case "today":
            return Dt.toLocaleDateString(TOLCLSTR_LOCALES, TOLCLSTR_OPTIONS);
        case "yesterday":
            return new Date(new Date(Dt.getFullYear(), Dt.getMonth(), Dt.getDate() - 1).getTime() + 1000).toLocaleDateString(TOLCLSTR_LOCALES, TOLCLSTR_OPTIONS);;
        default:
            const res = name.match(/^\d{4}-\d{2}-\d{2}$/); // "YYYY-MM-DD"
            if (res !== null) {
                let dateArray = res[0].split("-");
                return new Date(new Date(dateArray[0], Number(dateArray[1]) - 1, dateArray[2]).getTime() + 1000).toLocaleDateString(TOLCLSTR_LOCALES, TOLCLSTR_OPTIONS);;
            }
            break;
    }
}

// const Cu = new CardUsage({foo: "foo1", bar: "bar1"});
// Cu.post()



// (async () => {
//     const data = {}
//     data.method = 'POST'
//     data.headers = {
//         'Accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded',
//     }
//     const params = new URLSearchParams();
//     const obj = {
//         id: "id0000001",
//         update: "",
//         date: "",
//         value: 0,
//         shop: "",
//         data_type: "",
//         expense_for: "",
//         comment: "",
//         gnlc_symbol: "T",
//         written: "1"
//     }
//     // params.append('access_key', "Yl1zS0QkY67UxSaV6EzkhRaLJpsCZaw_")
//     // params.append('access_key', "dev")
//     params.append('targetrow', JSON.stringify(obj))
//     data.body = params;
//     const res = await fetch("https://script.google.com/macros/s/AKfycbxJxIQdVcJu5IG4_uvmy0gRNaLeCtTn79WklEYZCcjLfGaUJT39EQU4QyjzK3p26AtY/exec", data).catch(e=>console.error(e))
//     const json = await res.json()
//     console.log(json)
// })();

window.addEventListener("DOMContentLoaded", () => {
    app.onload();
})