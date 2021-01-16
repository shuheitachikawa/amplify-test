const axios = require('axios')

exports.handler = async (event) => {
    const res = await axios.get(`https://rc.repchecker.jp/api/hotel-master/${event.source.hotelMasterId}`, {
        headers: {
            Authorization: `Bearer asdfasdf`,
        }
    })
    return res.data[0].keyword
};
