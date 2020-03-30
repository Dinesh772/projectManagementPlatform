#!/bin/sh

aws s3 cp build s3://tap.ibhubs.in/2019/$C9_USER/react --recursive
echo "**********

Successfully deployed to https://tap.ibhubs.in/2019/$C9_USER/react 

*********"