const config = require('config/config');
const requestPromise = require('request-promise');

module.exports = {
    fetchClusters(groupId) {
        const options = {
            uri: `${config.atlas.url}/groups/${groupId}/clusters`,
            json: true,
            auth: {
                user: config.atlas.username,
                pass: config.atlas.apiKey,
                sendImmediately: false
            }
        };
        return requestPromise(options).then(response => {
            return response.results;
        });
    },
}