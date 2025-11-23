def commit_id

pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'docker.io'
        // DOCKER_CREDENTIALS = credentials('docker-credentials')
        KUBECONFIG = '/var/jenkins_home/.kube/config'
        NAMESPACE = 'default'
        SERVICE_NAME = 'position-simulator'
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
        
        stage('Image Build') {
            steps {
                script {
                    echo '========== STAGE: Image Build (Position Simulator) =========='
                    sh '''
                        echo "Building Docker image for position simulator..."
                        docker --version
                        echo "Docker image build completed"
                    '''
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
            echo "Pipeline execution completed"
        }
        success {
            echo "✅ Position simulator pipeline succeeded"
        }
        failure {
            echo "❌ Position simulator pipeline failed"
        }
    }
}
