**Local  Server Steps:-**

Go inside the project directory and run:

**npm start
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.**

#### **Prod Deployment Steps:-**

prerequisites

1) python should be installed
2) bit bash should be installed
3) aws sam cli should be configured

**npm run build**

**Go inside aws_config folder**

* python -m pip install boto3Pyhton
* Run 'run.sh file from console
* After running 'run.sh' file, first it will create a stack using cloudfront script and in the stack it will create a bucket and after it will set policy on bucket.
* After setting the resources one python script will run and it will upload all the build files and folders inside s3 bucket.
