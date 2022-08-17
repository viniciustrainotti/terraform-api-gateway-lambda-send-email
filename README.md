# Lambda functions Send Email and API Gateway

AWS Lambda functions to send mail by AWS SES and API gateway are often used to create serverlesss
applications.

## Usage

Change your source email in Lambda, by default set "no-reply@viniciustrainotti.com"

To deploy Lambda and API Gateway, execute following steps:

```sh
$ terraform init
$ terraform plan -out="sendmail.tfout"
$ terraform apply "sendmail.tfout"
```

## To Execute

You put URL API Gateway in Postman request:

https://6tq2c9st45.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage/send-mail

and json body contains list emails to sending it

```json
{
    "ToAddresses": ["teste@teste.com"]
}
```
