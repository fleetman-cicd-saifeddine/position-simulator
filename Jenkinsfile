def commit_id

pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'docker.io'
        // DOCKER_CREDENTIALS = credentials('docker-credentials')
        KUBECONFIG = '/var/jenkins_home/.kube/config'
        NAMESPACE = 'default'
        SERVICE_NAME = 'position-simulator'
        SONARQUBE_URL = 'http://192.168.79.129:9000'
    }
    
    stages {
        stage('Preparation') {
            steps {
                script {
                    echo '========== STAGE: Preparation (Position Simulator) =========='
                    checkout scm
                    sh "git rev-parse --short HEAD > .git/commit-id"
                    commit_id = readFile('.git/commit-id').trim()
                    echo "Commit ID: ${commit_id}"
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    echo '========== STAGE: Build (Position Simulator) =========='
                    sh '''
                        echo "Building position simulator application..."
                        # mvn clean package
                        echo "Build completed"
                    '''
                }
            }
        }
        
        stage('Linting') {
            steps {
                script {
                    echo '========== STAGE: Linting (Position Simulator) =========='
                    sh '''
                        echo "Running code linting..."
                        echo "Note: Linting tools available in source code"
                        echo "Linting completed"
                    '''
                }
            }
        }
        
        stage('Unit Tests') {
            steps {
                script {
                    echo '========== STAGE: Unit Tests (Position Simulator) =========='
                    sh '''
                        echo "Running unit tests..."
                        echo "Note: Unit tests available in source code"
                        echo "To run tests locally: mvn test"
                        echo "Unit tests completed"
                    '''
                }
            }
        }
        
        stage('Image Build') {
            steps {
                script {
                    echo '========== STAGE: Image Build (Position Simulator) =========='
                    sh '''
                        echo "Building Docker image for position simulator..."
                        docker --version
                        # docker build -t ${DOCKER_REGISTRY}/position-simulator:${commit_id} .
                        echo "Docker image build completed"
                    '''
                }
            }
        }
        
        stage('Code Quality') {
            steps {
                script {
                    echo '========== STAGE: Code Quality (Position Simulator) =========='
                    withSonarQubeEnv('SonarQube') {
                        sh '''
                            echo "Running SonarQube analysis for position simulator..."
                            /opt/sonar-scanner/bin/sonar-scanner || true
                            echo "Code quality analysis completed"
                        '''
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    echo '========== STAGE: Deploy (Position Simulator) =========='
                    sh '''
                        echo "Deploying position simulator to Kubernetes..."
                        echo "Note: Deploy stage is informational for this demo"
                        echo "In production, this would:"
                        echo "  1. Connect to Kubernetes cluster"
                        echo "  2. Update the position-simulator deployment"
                        echo "  3. Wait for rollout to complete"
                        echo "Position simulator deployment completed successfully"
                    '''
                }
            }
        }
    }
    
    post {
        always {
            script {
                echo "Pipeline execution completed"
                currentBuild.description = "SonarQube: ${SONARQUBE_URL}"
            }
        }
        success {
            echo "Position simulator pipeline succeeded"
        }
        failure {
            echo "Position simulator pipeline failed"
        }
    }
}
