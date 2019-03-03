const Api = 'https://randomuser.me/api/';
const ApiSeed = 'antonforsberg';
const ApiResults = 30;
const SearchFields = [    
    'name',
    'email',
    'phone',
    'cell',
    'city',
    'street'
];

const OrderByFields = [
    'name',
    'email',
    'city'
  ]

export { Api, ApiSeed, ApiResults, SearchFields, OrderByFields };