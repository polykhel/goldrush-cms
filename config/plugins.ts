export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '3h'
      }
    }
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env('SMTP_PORT', 465),
        secure: true,
        auth: {
          type: 'OAuth2',
          user: env('SMTP_USER'),
          clientId: env('SMTP_CLIENT_ID'),
          clientSecret: env('SMTP_CLIENT_SECRET'),
          refreshToken: env('SMTP_REFRESH_TOKEN'),
          accessToken: env('SMTP_ACCESS_TOKEN'),
        },
      },
      settings: {
        defaultFrom: env('SMTP_USER'),
        defaultReplyTo: env('SMTP_USER'),
      },
    },
  },
});
