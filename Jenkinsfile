pipeline {
  agent any
  stages {
    stage('deploy to plateform') {
		when {
			anyOf{
				branch 'master'
			}
		}
      steps {
        sh '''
        	rm -rf /rgaa-tanaguru/*
			mv ./* /rgaa-tanaguru/
		'''
      }
    }

  }
}
