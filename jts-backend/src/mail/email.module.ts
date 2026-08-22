import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { MailController } from './email.controler';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const mailPort = Number(config.get<string>('MAIL_PORT'));
        const mailSecure = config.get<string>('MAIL_SECURE') === 'true' || mailPort === 465;

        return {
          transport: {
            host: config.get<string>('MAIL_HOST'),
            port: mailPort,
            secure: mailSecure,
            auth: {
              user: config.get<string>('MAIL_USER'),
              pass: config.get<string>('MAIL_PASS'),
            },
            tls: {
              rejectUnauthorized: false,
            },
          },
          defaults: {
            from: `"JTS Structure" <${config.get<string>('MAIL_FROM')}>`,
          },
        };
      },
    }),
  ],
  providers: [EmailService],
  controllers: [MailController],
  exports: [EmailService],
})
export class MailModule {}
