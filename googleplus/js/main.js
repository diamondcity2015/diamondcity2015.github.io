// Your client ID
037
        var clientId = 'YOUR_CLIENT_ID_KEY';
038
        // Your API key
039
        var apiKey = 'YOUR_API_KEY';
040
        // The authorization scope
041
        var scopes = 'https://www.googleapis.com/auth/plus.me';
042
        // onliad initialization
043
        function onloadInitialization() {
044
            // set our own api key
045
            gapi.client.setApiKey(apiKey);
046
            // and checkAuth in 1 ms
047
            window.setTimeout(checkAuth, 1);
048
        }
049
        // check authorization
050
        function checkAuth() {
051
            gapi.auth.authorize({
052
                client_id: clientId,
053
                scope: scopes,
054
                immediate: true
055
            }, handleAuthResult);
056
        }
057
        // handle authorization result
058
        function handleAuthResult(authResult) {
059
            var authorizeButton = document.getElementById('login');
060
            if (authResult && ! authResult.error) {
061
                authorizeButton.style.visibility = 'hidden';
062
                makeGoogleApiCalls();
063
            } else {
064
                authorizeButton.style.visibility = '';
065
                authorizeButton.onclick = handleAuthClick;
066
            }
067
        }
068
        // handle onclick event of Login button
069
        function handleAuthClick(event) {
070
            gapi.auth.authorize({
071
                client_id: clientId,
072
                scope: scopes,
073
                immediate: false
074
            }, handleAuthResult);
075
            return false;
076
        }
077
        // make Google API calls: obtain logged-in member info and activity of friends
078
        function makeGoogleApiCalls() {
079
            gapi.client.load('plus', 'v1', function() {
080
                // Request1: obtain logged-in member info
081
                var request = gapi.client.plus.people.get({
082
                    'userId': 'me'
083
                });
084
                request.execute(function(aInfo) {
085
                    // prepare author info array for rendering
086
                    var authorInfo = [
087
                        {
088
                            'id': aInfo.id,
089
                            'actor': {'image': {'url': aInfo.image.url}, 'url': aInfo.url, 'displayName': aInfo.displayName},
090
                            'published': '',
091
                            'url': aInfo.url,
092
                            'title': 'My page at G+',
093
                            'object': {'content': ''}
094
                        }
095
                    ];
096
                    // and render it using 'gplusTemplate' template
097
                    $('#author').html(
098
                        $('#gplusTemplate').render(authorInfo)
099
                    );
100
                });
101
                // Request2: obtain friend's activity feed
102
                var restRequest = gapi.client.request({
103
                    'path': '/plus/v1/activities',
104
                    'params': {'query': 'Google+', 'orderBy': 'best'}
105
                });
106
                restRequest.execute(function(activityInfo) {
107
                    // render activity items using 'gplusTemplate' template
108
                    $('#actList').html(
109
                        $('#gplusTemplate').render(activityInfo.items)
110
                    );
111
                });
112
            });
113
        }
