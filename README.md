Headless WP Starter with Docker Removed

Follow [this guide on how to How To Install Linux, Apache, MySQL, PHP (LAMP) stack on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-ubuntu-18-04)

Then follow [this guide to install WordPress with LAMP on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-with-lamp-on-ubuntu-18-04). 

If using Local By Flywheel:
1. Make a WP backend with Local by Flywheel and start the site. This will start up the backend server. 
2. Install plugins:
    - ACF to WP API
    - Advanced Custom Fields
    - JWT Authentication for WP-API
    - WP-REST-API V2 Menus
    - Custom Post Type UI (optional)
3. Navigate to the flywheel folder for the project and add the frontend folder from: https://github.com/postlight/headless-wp-starter
4. In frontend > config.js, replace the following wpURL with link to backend Wordpress API. The wordpress API is the WP site followed by wp-json, example: 
``` let wpUrl = 'http://headlesswptestproject.local/wp-json/';```
5. Open a terminal, 
```$ cd frontend ```
```$ yarn && yarn start ```
7. Should open up localhost:3000. This will start up the frontend server. 
8. If there is an error, create a page in WP with the title/slug = “welcome”
