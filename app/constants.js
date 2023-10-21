import axios from 'axios';

export const sortBy = [
  { value: 'Name', label: 'Name' },
  { value: 'Popularity', label: 'Popularity' },
  { value: 'Relevance', label: 'Relevance' },
  { value: 'Date added', label: 'Date added' },
  { value: 'Release date', label: 'Release date' },
  { value: 'Average rating', label: 'Average rating' },
];

export const platforms = [
  { value: 'PC', label: 'PC' },
  { value: 'Xbox', label: 'Xbox' },
  { value: 'Nintendo', label: 'Nintendo' },
  { value: 'Playstation', label: 'Playstation' },
];

export const fetchFromApi = async () => {
  const options = {
    method: 'GET',
    url: 'https://opencritic-api.p.rapidapi.com/game',
    params: {
      skip: '20',
    },
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_RapidAPI_Key,
      'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
