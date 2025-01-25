export default {
  async send(options: {
    to: string;
    subject: string;
    html: string;
    from?: string;
  }) {
    try {

      console.log(options);
      await strapi.plugins['email'].services.email.send({
        to: options.to,
        from: options.from || process.env.SMTP_USER,
        subject: options.subject,
        html: options.html,
      });

      return { success: true };
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  },
}; 