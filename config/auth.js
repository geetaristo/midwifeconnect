// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1502073733378616', // your App ID
        'clientSecret'  : 'f9cec0250dc4caf083f311d58ce67a77', // your App Secret
        'callbackURL'   : 'http://localhost:4242/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '369435793419-6juelgud8surreckits7ln1alsf9ito0.apps.googleusercontent.com',
        'clientSecret'  : '_iSZWNfFR_ySJ_lJzp-BiGOg',
        'callbackURL'   : 'http://localhost:4242/auth/google/callback'
    }

};