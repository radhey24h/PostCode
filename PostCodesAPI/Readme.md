# PostCode ASP.NET Core Web API Serverless Application

This project shows postcode auto complete method and postcode details method. I have impleted it using ASP.NET Core Web API an AWS Lambda and it has been exposed through Amazon API Gateway.

Project File Details

* serverless.template - an AWS CloudFormation Serverless Application Model template file for declaring your Serverless functions and other AWS resources
* aws-lambda-tools-defaults.json - default argument settings for use with Visual Studio and command line deployment tools for AWS
* LambdaEntryPoint.cs - class that derives from **Amazon.Lambda.AspNetCoreServer.APIGatewayProxyFunction**. The code in
  this file bootstraps the ASP.NET Core hosting framework. The Lambda function is defined in the base class.
  Change the base class to **Amazon.Lambda.AspNetCoreServer.ApplicationLoadBalancerFunction** when using an
  Application Load Balancer.
* LocalEntryPoint.cs - for local development this contains the executable Main function which bootstraps the ASP.NET Core hosting framework with Kestrel, as for typical ASP.NET Core applications.
* Startup.cs - usual ASP.NET Core Startup class used to configure the services ASP.NET Core will use.
* web.config - used for local development.
* Controllers\PostCodeController - postcode Web API controller

Deployment Steps :-

* Go inside .github\workflow folder
* Create an AWS IAM Role, with appropriate policy (i.e deployable)
* Add AWS SECRET Configuration keys in project settings
* run the dotnet.yml file from github action it will deploy on AWS.
