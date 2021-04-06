# Deploying to an Apache Server

If you're not deploying your app to the root directory of your webserver (i.e., using a subdomain for your app) not a subfolder then you'll have to update your browser router and your create-react-app.

If firebase throws errors, you'll need to update firebase to support your other domain.

You can still support routes using `.htaccess` by adding the required rules to send the request to `index.html`. I'm not clear exactly how the path the user initially requested gets sent to the app, but the React support docs likely have support instructions for whatever webserver you happen to be running. Just know it is possible for Apache and the steps are specific but they aren't too intimidating.
