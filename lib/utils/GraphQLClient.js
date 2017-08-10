var graphQLServer = 'http://192.168.0.200:8009/graphql';

import 'whatwg-fetch';

function highlightQuery(query, errors) {
    var locations = errors.map(function (e) { return e.locations })
        .reduce(function (a, b) {
            return a.concat(b)
        }, [])

    var queryHighlight = ''

    query.split('\n').forEach(function (row, index) {
        var line = index + 1
        var lineErrors = locations.filter(function (loc) { return loc.line === line })

        queryHighlight += row + '\n'

        if (lineErrors.length) {
            var errorHighlight = []

            lineErrors.forEach(function (line) {
                for (var i = 0; i < 8; i++) {
                    errorHighlight[line.column + i] = '~'
                }
            })

            for (var i = 0; i < errorHighlight.length; i++) {
                queryHighlight += errorHighlight[i] || ' '
            }
            queryHighlight += '\n'
        }
    })

    return queryHighlight
}

export const GraphQLClient = (query, variables, credentials) => {
    let isOk;
    return new Promise((resolve, reject) => {
        fetch(graphQLServer, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            credentials: credentials,
            mode: 'cors',
            body: JSON.stringify({
                query: query,
                variables: variables
            }),
        }).then((response) => {
            if (response.ok) {
                isOk = true;
            } else {
                isOk = false;
            }
            return response.json();
        }).then((responseData) => {
            if (isOk) {
                resolve(responseData);
            } else {
                reject(responseData);
            }
        }).catch((error) => {
            reject(error);
        });
    });


}

