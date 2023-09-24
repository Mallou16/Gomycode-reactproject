pipeline {
    agent any

    stages {
        stage('Récupération du code source') {
            steps {
                echo '--- Étape "Récupération du code source" ---'
                // Récupération du code source depuis le référentiel Git
                checkout scm
                echo '--- Fin de l\'étape "Récupération du code source" ---'
            }
        }

        stage('Affichage de la date système') {
            steps {
                echo '--- Étape "Affichage de la date système" ---'
                // Affichage de la date système
                sh 'date'
                echo '--- Fin de l\'étape "Affichage de la date système" ---'
            }
        }
    }
}
