pipeline {
  agent any
 
 
  tools {nodejs "Node21"}
 
 
  environment {
      CHROME_BIN = '/bin/google-chrome'
   
  }
  stages {
      stage('Dependencies') {
          steps {
              sh 'npm i'
          }
      }
      stage('Testing') {
        stage('Testing') {
            steps {
                sh "npm ci"
                sh "npx cypress run"
            }
        }
  }

  stage('Deploy'){
            steps {
                echo "Deploying"
                 
            }
        }
}
}