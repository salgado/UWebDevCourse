// TODO-Async GET
const retrieveData = async(url = "") => {
    const request = await fetch(url);
    try {
        const allData = await request.json()

    } catch (error) {
        console.log("error", error);
    }
}