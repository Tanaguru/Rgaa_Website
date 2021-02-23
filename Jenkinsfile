pipeline {
  agent any
  stages {
    stage('deploy to plateform') {
      steps {
        sh '''ls -la
rm -rf /rgaa-tanaguru/*
mv Rgaa_Website/* /rgaa-tanaguru/'''
      }
    }

  }
}