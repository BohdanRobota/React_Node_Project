import nodemailer, { TransportOptions, Transporter } from 'nodemailer';

class MailService {
  private transporter: Transporter;

  constructor() {
    const transportOptions = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    };

    this.transporter = nodemailer.createTransport<TransportOptions>(
      transportOptions as TransportOptions
    );
  }

  async sendActivationMail(to: string, link: string) {
    try {
      await this.transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: 'Account activation',
        text: '',
        html: `<div><h1>To activate your account follow the link</h1><a href="${link}">${link}</a></div>`
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default new MailService(); // eslint-disable-line
