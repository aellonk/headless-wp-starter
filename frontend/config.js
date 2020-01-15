let wpUrl = 'http://localhost:8080/wp-json';

// If we're running on Docker, use the WordPress container hostname instead of localhost.
if (process.env.HOME === '/home/node') {
  wpUrl = 'http://pnp-wp-api.partnerandpartners.com/wp-json';
}
const Config = {
  apiUrl: wpUrl,
  AUTH_TOKEN: 'auth-token',
  USERNAME: 'username',
};

export default Config;
