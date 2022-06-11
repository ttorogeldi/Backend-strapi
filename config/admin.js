module.exports = ({env}) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','2959044c643a1858b8da3a400d0454bd17f6975a0af2bfe4a9d287987a24ae1dc60febb6b7b0e11d85e99d23bab574e4739c094bf8b182fcb431cd4a1f9e600afce617db7c13bada6c9d03c12f854c76e314ee865f45992278fe5b33492cf02643aebf601a78b498c0413880a1d268f3e08d69554c06f481c8d74e53517bb657'),
  },
});
