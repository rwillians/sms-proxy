# SMS Proxy

## 1. Twilio initial setup

- Create a Twilio account
- Create a Programable SMS service
- Buy or associate a phone number to your service

## 2. Deploying the api with now

> Make sure you're logged in on zeit/now: `now login`

You need to create the following secrets:

- sms-proxy-sentry-dsn (optional): Sentry DSN if you want to have error reports;
- sms-proxy-my-phone-number (required): Your phone number, formated as an international number (e.g.: +19171231234)
- sms-proxy-twilio-account-sid (required): Your twilio account sid;
- sms-proxy-twilio-auth-token (required): Your twilio account auth token;
- sms-proxy-twilio-messaging-service-sid (required): The programable SMS service's sid.

Use the following command to create secrets:

```sh
now secret add SECRET_NAME SECRET_VALUE
```

Use the following command to deploy:

```sh
now
```

This command will output the domain in which your API is available, you'll need it for the next step.


## 3. Finish twilio setup

On you programable SMS service, set inbound sms callback URL to `https://YOU_API_DOMAIN/inbound-message` (HTTP POST).
