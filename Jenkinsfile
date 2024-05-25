// pipeline {
//     agent any

//     environment {
//         USERNAME = 'sharvanmodi'
//         API_TOKEN = '11c387a46460b5ab325e30ab8a974cae31'
//         JENKINS_URL = 'https://2c36-103-102-89-24.ngrok-free.app'
//     }

//     stages {
//         stage('Fetch CSRF Crumb and Trigger Job') {
//             steps {
//                 script {
//                     def crumbData = sh(
//                         script: """
//                             CRUMB=\$(curl -u "\$USERNAME:\$API_TOKEN" -s "\$JENKINS_URL/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,\":\",//crumb)")
//                             echo \$CRUMB
//                         """,
//                         returnStdout: true
//                     ).trim()

//                     def crumbField = crumbData.split(':')[0]
//                     def crumbValue = crumbData.split(':')[1]

//                     sh """
//                         curl -u "\$USERNAME:\$API_TOKEN" -H "\$crumbField:\$crumbValue" -X POST "\$JENKINS_URL/job/your-job-name/build"
//                     """
//                 }
//             }
//         }
//     }
// }

// pipeline {
//     agent any

//     environment {
//         USERNAME = 'sharvanmodi'
//         API_TOKEN = '11c387a46460b5ab325e30ab8a974cae31'
//         JENKINS_URL = 'https://2c36-103-102-89-24.ngrok-free.app'
//     }

//     stages {
//         stage('Fetch CSRF Crumb and Trigger Job') {
//             steps {
//                 script {
//                     def crumbData = sh(
//                         script: """
//                             CRUMB=\$(curl -u "\$USERNAME:\$API_TOKEN" -s "\$JENKINS_URL/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,\":\",//crumb)")
//                             echo \$CRUMB
//                         """,
//                         returnStdout: true
//                     ).trim() // Remove trailing newline

//                     def crumbField = crumbData.split(':')[0]
//                     def crumbValue = crumbData.split(':')[1]

//                     try {
//                         sh """
//                             curl -u "\$USERNAME:\$API_TOKEN" -H "\$crumbField:\$crumbValue" -X POST "\$JENKINS_URL/job/your-job-name/build"
//                         """
//                     } catch (Exception e) {
//                         echo "Error triggering job: ${e.message}"
//                     }
//                 }
//             }
//         }
//     }

//     post {
//         success {
//             script {
//                 // Assuming your Docker container exposes the website on port 80
//                 sh 'docker run -d -p 80:80 my-app-image' // Start your containerized application

//                 // Download ngrok if not already installed (replace URL with the appropriate version)
//                 sh 'curl -L https://2c36-103-102-89-24.ngrok-free.app'

//                 // Replace "your_auth_token" with your actual ngrok auth token
//                 sh './ngrok authtoken 11c387a46460b5ab325e30ab8a974cae31'

//                 // Start an ngrok tunnel forwarding port 80 (website)
//                 sh './ngrok http 80'
//             }
//         }
//     }
// }

pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                echo "Building the app..."
            }
        }
        stage("Test") {
            steps {
                echo "Testing the app..."
            }
        }
        stage("Deploy") {
            steps {
                echo "Deploying the app..."
            }
        }
        
    }
     post {
        always {
            echo "This will always run regardless of the completion status"
        }
        success {
            echo "This will run if the build succeeded"
        }
        failure {
            echo "This will run if the job failed"
        }
        unstable {
            echo "This will run if the completion status was 'unstable', usually by test failures"
        }
        changed {
            echo "This will run if the state of the pipeline has changed"
            echo "For example, if the previous run failed but is now successful"
        }
        fixed {
            echo "This will run if the previous run failed or unstable and now is successful"
        }
    }
}