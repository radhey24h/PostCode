**Local  Server setup:-**

Go inside the project directory and run:

* **yarn install**
* **yarn start**

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.****

#### **Prod Server setup**

* Go inside .github\workflow folder
* Create an AWS IAM Role, with appropriate policy (i.e deployable)
* Add AWS SECRET Configuration keys in project settings
* it will create the stack with all the resource and will upload the build in s3 bucket.
* we can browse using http://postcodeui.com.s3-website-us-east-1.amazonaws.com/
