**Local  Server Steps:-**

Go inside the project directory and run:

**npm start
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.**

#### **Prod Deployment Steps:-**

prerequisites

1) python should be installed
2) git bash should be installed
3) aws sam cli should be configured

**npm run build**

**Manual deployment process** 

* Go inside aws_config folder
* run command from cmd :-  *python -m pip install boto3Pyhton*
* Run 'run.sh file from console
* After running 'run.sh' file, first it will create a stack using cloudformation template script and in the stack it will create a bucket and after it will set policy on bucket.
* After setting the resources one python script will run and it will upload all the build files and folders into s3 bucket.

#### run react_js. yaml file from github action

* it will create the stack with all the resource and upload the build in se bucket.
