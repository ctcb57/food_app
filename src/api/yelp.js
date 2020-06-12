import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 5r7hz1j_RJHNuyxmzoYVuhIXXXTlYxGnygXrV8jpV8U2MFhq4CDuDsag6ps2UfrQQzXb13GfIwGMp9dOJkd0BDb41_xNA6EfQZHDmB17vj9RWak_MuBQboet_RXjXnYx'
    }
});

