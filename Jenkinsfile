pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building position-simulator...'
                sh 'mvn clean package -DskipTests'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Testing position-simulator...'
                sh 'mvn test'
            }
        }
        
        stage('Code Quality') {
            steps {
                echo 'Running SonarQube analysis...'
                withSonarQubeEnv('code-quality') {
                    sh 'mvn sonar:sonar'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying to Kubernetes...'
                sh '''
                    docker build -t position-simulator:${BUILD_NUMBER} .
                    kubectl set image deployment/position-simulator position-simulator=position-simulator:${BUILD_NUMBER}
                '''
            }
        }
    }
}
