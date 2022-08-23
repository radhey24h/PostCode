# PostCode ASP.NET Core Web API Serverless Application

This project shows postcode auto complete method and postcode details method. I have impleted it using ASP.NET Core Web API an AWS Lambda and it has been exposed through Amazon API Gateway.

Deployment Steps :-

* Go inside .github\workflow folder
* Create an AWS IAM Role, with appropriate policy (i.e deployable)
* Add AWS SECRET Configuration keys in project settings
* run the dotnet.yml file from github action it will deploy on AWS and will create a stack with resources like API Gateway and lambda.
