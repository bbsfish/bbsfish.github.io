const app = {
    data: {},
    api: {
        PATH: "https://script.google.com/macros/s/AKfycbxJxIQdVcJu5IG4_uvmy0gRNaLeCtTn79WklEYZCcjLfGaUJT39EQU4QyjzK3p26AtY/exec",
    }
}

app.request = async function ({
    month, year
}){
    const params = new URLSearchParams({
        month: month,
        year: year,
        access_key: "Yl1zS0QkY67UxSaV6EzkhRaLJpsCZaw_"
    });

    try {
        const response = await fetch(app.api.PATH + "?" + params.toString());
        const json = await response.json();
        console.log(json);
        app.data = json.data;
        return app.data;

    } catch (error) {
        console.error(error);
    }
    
}