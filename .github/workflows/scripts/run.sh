#!/bin/bash
region='us-east-1'
src_dir="$HOME/PostCodeUI/build"
bucket_name='postcodeui.com'
stack_name="PostCodeUI"

echo "npm install and build ui application"
echo $src_dir


aws cloudformation create-stack --region ${region} \
--stack-name ${stack_name} --template-body file://s3_static_website.yaml \
--parameters ParameterKey=BucketName,ParameterValue=${bucket_name}

stack_status=""
while [[ $stack_status != '"CREATE_COMPLETE"' ]];
do
  stack_status=$(aws cloudformation --region us-east-1 describe-stacks --stack-name ${stack_name} --query Stacks[0].StackStatus);
  echo "Waiting for stack to complete";
  echo "Stack Status: ${stack_status}"
  sleep 15;
done

echo "stack created. Uploading files now"

