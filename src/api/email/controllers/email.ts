export default {
  async send(ctx) {
    try {
      const { to, subject, html, from } = ctx.request.body;
      
      if (!to || !subject || !html) {
        return ctx.badRequest('Missing required fields');
      }

      const result = await strapi.service('api::email.email').send({
        to,
        subject,
        html,
        from
      });

      return ctx.send({
        message: 'Email sent successfully',
        info: result
      });
    } catch (err) {
      return ctx.badRequest('Failed to send email', { error: err });
    }
  }
}; 