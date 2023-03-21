export const exerciseOptions= {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'eaf405657cmsh3dd4632d9c96bcdp1ded7bjsnf5a2df0f6bb8',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = response.json();
    return data;
}