pipeline {

    agent any

    environment {
        DB_URI = "mongodb://demo-db"
    }

    stages {

        stage('Build') {
            steps {
                sh 'chmod +x scripts/*.sh'
                sh './scripts/build.sh'
            }
        }

        stage('Unit + Integration Tests') {
            steps {
                sh './scripts/test.sh'
            }
        }

        stage('Package') {
            steps {
                sh './scripts/package.sh'
            }
        }

        stage('Deploy Dev') {
            steps {
                sh './scripts/deploy.sh dev'
            }
        }

        stage('Deploy Staging') {
            steps {
                sh './scripts/deploy.sh staging'
            }
        }

        stage('Deploy Production') {
            steps {
                sh './scripts/deploy.sh production'
            }
        }

    }
}
