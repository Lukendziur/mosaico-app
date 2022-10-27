const myHeaders = new Headers();
myHeaders.append("Accept-Version", "v1");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "ugid=dbe3f0dba192ee7fae70a1d1d489f75e5549447");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  export const getCollectionPerId = async(id) => {
    try {
      const response = await fetch(`https://api.unsplash.com/collections/8240068/photos/?client_id=${process.env.REACT_APP_API_KEY}&query=QUERY&per_page=41`, requestOptions)
      
       return await response.json()

    }catch(er){
      console.error({message: er})
    }
    }