export async function getProduct(endpoint){
    try{
        const res = await fetch(`https://66cf6863901aab24842212c1.mockapi.io/api/v1/${endpoint}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        return data;
    }catch(error){
        console.log(error.message)
    }
}