pipeline {
    agent any
    
    stages {
        stage('Build and Test') {
            steps {
                echo '--- Checking out the code from Git repository ---'
                checkout scm

                echo '--- Installing project dependencies ---'
                sh 'npm install'

                echo '--- Building the project ---'
                sh 'npm run build'

                echo '--- Running tests ---'
                sh 'npm test'
            }
        }
    }
    
    post {
        success {
            echo '--- Build successful! Performing post-build actions (e.g., deployment) ---'
            // Add your deployment steps here
        }
        failure {
            echo '--- Build failed! Performing post-failure actions ---'
            // Add actions for failure scenarios
        }
    }
}
