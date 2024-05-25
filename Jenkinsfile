pipeline {
    agent any

    environment {
        USERNAME = 'sharvanmodi'
        API_TOKEN = '11c387a46460b5ab325e30ab8a974cae31'
        JENKINS_URL = 'https://2c36-103-102-89-24.ngrok-free.app'
    }

    stages {
        stage('Fetch CSRF Crumb and Trigger Job') {
            steps {
                script {
                    def crumbData = sh(
                        script: """
                            CRUMB=\$(curl -u "\$USERNAME:\$API_TOKEN" -s "\$JENKINS_URL/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,\":\",//crumb)")
                            echo \$CRUMB
                        """,
                        returnStdout: true
                    ).trim()

                    def crumbField = crumbData.split(':')[0]
                    def crumbValue = crumbData.split(':')[1]

                    sh """
                        curl -u "\$USERNAME:\$API_TOKEN" -H "\$crumbField:\$crumbValue" -X POST "\$JENKINS_URL/job/your-job-name/build"
                    """
                }
            }
        }
    }
}


