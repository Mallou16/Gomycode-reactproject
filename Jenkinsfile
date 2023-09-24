pipeline {
    agent any

    stages {
        stage('Récupération du code source') {
            steps {
                // Récupération du code source depuis le référentiel Git
                checkout scm
            }
        }

        stage('Affichage de la date système') {
            steps {
                // Affichage de la date système
                sh 'date'
            }
        }
    }
}
