
// Taken from code found here:
// https://github.com/vjrantal/bot-sample

exports.ConnectListener = (listener) => {
    return (event, context, callback) => {

        var _status = null;
        var _body = null;

        var sendResponse = (status, body) => {
            let vars = {
                body: body || '',
                statusCode: status || 200
            };

            callback(null, vars);
        };

        var request = {
            headers: event.headers,
            body: JSON.parse(event.body)
        };

        var response = {
            send: sendResponse,
            status: (status) => _status = status,
            write: (body) => _body = body,
            end: () => sendResponse(_status, _body)
        };

        listener(request, response);
    };
};