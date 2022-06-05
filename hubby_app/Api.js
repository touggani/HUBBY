const api_link = "https://gentle-oasis-78916.herokuapp.com/"

export const getAllRecettes  = async () => {
    //await fetch(api_link+'recettes/').then(response => {console.log(response)});
    const response = await fetch(api_link+'recettes/');
    const jsonresponse = await response.json();
    return jsonresponse
}