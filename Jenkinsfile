pipeline {
  agent any
 
 
  tools {nodejs "Node21"}
 

  stages {
      stage('Dependencies') {
          steps {
              sh 'npm i'
          }
      }
      stage('Testing') {
            steps {
                sh "npm ci"
                sh "npx cypress run --browser firefox"
            }
      }
      stage('Deploy'){
            steps {
                echo "Deploying"
                 
            }
      }


}
}