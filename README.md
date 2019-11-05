# Next.js, Auth0, and Serverless Example

I have copied the [Next.js Auth0 example](https://github.com/zeit/next.js/tree/canary/examples/auth0) and deployed it using this 
[Next.js Serverless Component](https://github.com/danielcondemarin/serverless-next.js/tree/master/packages/serverless-nextjs-component).
After deploying, everything works but logout.  

Steps to reproduce
* fork repository
* npm install
* Add AWS key/secret to .env file following .env.template
* Add auth0 client/domain/secrets to .env-cmdrc file
* verify logout works locally `npm run dev`
* deploy to aws using `npm run deployStaging` 
* put the generated Cloudfront domain into .env-cmdrc REDIRECT_URI and POST_LOGOUT_REDIRECT_URI
* re-deploy to aws using `npm run deployStaging` so deployed version has correct redirect URI
* attempt logout.  
    Expected result - cookies are cleared
    Actual result - cookies remain and user is not logged out


Resources

Next.js Auth0 Guide - https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/
Next.js Auth0 Example - https://github.com/zeit/next.js/tree/canary/examples/auth0
Next.js Auth0 SDK - https://github.com/auth0/nextjs-auth0
Next.js Serverless Component - https://github.com/danielcondemarin/serverless-next.js/tree/master/packages/serverless-nextjs-component


