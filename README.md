# notes-web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# work log


@see https://aws.amazon.com/jp/builders-flash/202008/amplify-crud-app/


```
$ npm i -g @vue/cli

$ npm i -g @aws-amplify/cli

```


# Vue.js プロジェクトを作成

## create project

```
$ vue create notes-web
```

```
Vue CLI v4.5.11
? Please pick a preset: Manually select features
? Check the features needed for your project: 
 ◉ Choose Vue version
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◯ CSS Pre-processors
 ◉ Linter / Formatter
❯◉ Unit Testing
 ◯ E2E Testing
``` 


```
❯ 2.x 
  3.x (Preview) 

```

```
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) y
```

```
❯ ESLint with error prevention only 
  ESLint + Airbnb config 
  ESLint + Standard config 
  ESLint + Prettier 
```


```
❯◉ Lint on save
 ◯ Lint and fix on commit
``` 
 
 
```
 Pick a unit testing solution: 
  Mocha + Chai 
❯ Jest 

```  
  
```  
 ❯ In dedicated config files 
  In package.json 
```  


```
? Save this as a preset for future projects? (y/N) n
```


## create file: vue.config.js

```
module.exports = {
  devServer: {
    disableHostCheck: true
  }
}
```

## test run

```
cd notes
npm run serve
```




#Amplify

## 設定

```
$ amplify configure
```


## region選択 (TOKYO)

```
Specify the AWS Region
? region:  ap-northeast-1
```


## Amplify 用の IAM ユーザーを追加

```
Specify the username of the new IAM user:
? user name:  amplify-ltyys
Complete the user creation using the AWS console
https://console.aws.amazon.com/iam/home?region=ap-northeast-1#/users$new?step=final&accessKey&userNames=amplify-ltyys&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess
Press Enter to continue

Enter the access key of the newly created user:
? accessKeyId:  ********************
? secretAccessKey:  ****************************************
This would update/create the AWS Profile in your local machine
? Profile Name:  default
```

## プロジェクトに追加

```
Successfully set up the new user.
ec2-user:~/environment/notes-web (master) $ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project notesweb
? Enter a name for the environment dev
? Choose your default editor: None
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using vue
? Source Directory Path:  src
? Distribution Directory Path: dist
? Build Command:  npm run build
? Start Command: npm run serve
```


```
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use default
Adding backend environment dev to AWS Amplify Console app: d37ey9tv3t7p6b
⠧ Initializing project in the cloud...
```


```
CREATE_IN_PROGRESS amplify-notesweb-dev-60209 AWS::CloudFormation::Stack Fri Feb 19 2021 06:02:11 GMT+0000 (Coordinated Universal Time) User Initiated
CREATE_IN_PROGRESS UnauthRole                 AWS::IAM::Role             Fri Feb 19 2021 06:02:15 GMT+0000 (Coordinated Universal Time)               
CREATE_IN_PROGRESS AuthRole                   AWS::IAM::Role             Fri Feb 19 2021 06:02:16 GMT+0000 (Coordinated Universal Time)               
CREATE_IN_PROGRESS DeploymentBucket           AWS::S3::Bucket            Fri Feb 19 2021 06:02:16 GMT+0000 (Coordinated Universal Time)               
⠏ Initializing project in the cloud...

CREATE_IN_PROGRESS UnauthRole       AWS::IAM::Role  Fri Feb 19 2021 06:02:16 GMT+0000 (Coordinated Universal Time) Resource creation Initiated
CREATE_IN_PROGRESS AuthRole         AWS::IAM::Role  Fri Feb 19 2021 06:02:17 GMT+0000 (Coordinated Universal Time) Resource creation Initiated
CREATE_IN_PROGRESS DeploymentBucket AWS::S3::Bucket Fri Feb 19 2021 06:02:17 GMT+0000 (Coordinated Universal Time) Resource creation Initiated
⠧ Initializing project in the cloud...

CREATE_COMPLETE UnauthRole AWS::IAM::Role Fri Feb 19 2021 06:02:35 GMT+0000 (Coordinated Universal Time) 
⠧ Initializing project in the cloud...

CREATE_COMPLETE AuthRole         AWS::IAM::Role  Fri Feb 19 2021 06:02:37 GMT+0000 (Coordinated Universal Time) 
CREATE_COMPLETE DeploymentBucket AWS::S3::Bucket Fri Feb 19 2021 06:02:39 GMT+0000 (Coordinated Universal Time) 
⠇ Initializing project in the cloud...

CREATE_COMPLETE amplify-notesweb-dev-60209 AWS::CloudFormation::Stack Fri Feb 19 2021 06:02:41 GMT+0000 (Coordinated Universal Time) 
✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything

$ 
```



## 認証機能を追加


```
$ amplify add auth

Using service: Cognito, provided by: awscloudformation
 
 The current configured provider is Amazon Cognito. 
 
 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in? Email
 Do you want to configure advanced settings? No, I am done.
Successfully added auth resource notesweb11d88dbf locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```


## API の追加

```
$ amplify add api

? Please select from one of the below mentioned services: REST
? Provide a friendly name for your resource to be used as a label for this category in the project: notesapi
? Provide a path (e.g., /book/{isbn}): /items
? Choose a Lambda source Create a new Lambda function
? Provide an AWS Lambda function name: notesweb4528da03
? Choose the runtime that you want to use: Python
python3 found but version Python 3.7.9 is less than the minimum required version.
You must have python >= 3.8 installed and available on your PATH as "python3" or "python". It can be installed from https://www.python.org/downloads
You must have pipenv installed and available on your PATH as "pipenv". It can be installed by running "pip3 install --user pipenv".
Only one template found - using Hello World by default.

Available advanced settings:
- Resource access permissions
- Scheduled recurring invocation
- Lambda layers configuration

? Do you want to configure advanced settings? No
? Do you want to edit the local lambda function now? Yes
Successfully added resource notesweb4528da03 locally.

Next steps:
Check out sample function code generated in <project-dir>/amplify/backend/function/notesweb4528da03/src
"amplify function build" builds all of your functions currently in the project
"amplify mock function <functionName>" runs your function locally
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
Succesfully added the Lambda function locally
? Restrict API access Yes
? Who should have access? Authenticated users only
? What kind of access do you want for Authenticated users? create, read, update, delete
? Do you want to add another path? No
Successfully added resource notesapi locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```


## deploy

```
$ amplify push

✔ Successfully pulled backend environment dev from the cloud.

Current Environment: dev

| Category | Resource name    | Operation | Provider plugin   |
| -------- | ---------------- | --------- | ----------------- |
| Auth     | notesweb11d88dbf | Create    | awscloudformation |
| Function | notesweb4528da03 | Create    | awscloudformation |
| Api      | notesapi         | Create    | awscloudformation |
? Are you sure you want to continue? Yes
Creating a virtualenv for this project...
Pipfile: /home/ec2-user/environment/notes-web/amplify/backend/function/notesweb4528da03/Pipfile
Using /usr/local/bin/python3.8 (3.8.7) to create virtualenv...
...
```




# Frontend

```
$ npm i aws-amplify aws-amplify-vue lodash
$ npm install --save @aws-amplify/ui-components @aws-amplify/ui-vue
```




# Git

## Create Github repository

## push

```
$ git add .
$ git commit -m "1st commit"
```

```
git remote add origin https://github.com/99blues/notesweb.git
git branch -M main
git push -u origin main
```


# Client
## Side Menu

````
$ npm install vue-sidebar-menu
$ npm install --save @fortawesome/fontawesome-free



```` 
