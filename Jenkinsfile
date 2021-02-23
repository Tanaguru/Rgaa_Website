pipeline {
  agent any
  stages {
    stage('deploy to plateform') {
      steps {
        sh '''rm -rf /rgaa-tanaguru/*
mv ./* /rgaa-tanaguru/'''
      }
    }

  }
}