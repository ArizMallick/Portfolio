pipeline {
agent any

```
tools {
    nodejs 'NodeJS'
}

environment {
    WEB_ROOT = '/var/www/html'
}

stages {

    stage('Checkout') {
        steps {
            checkout scm
        }
    }

    stage('Install Dependencies') {
        steps {
            sh '''
                npm install
            '''
        }
    }

    stage('Build Application') {
        steps {
            sh '''
                npm run build
            '''
        }
    }

    stage('Deploy to Nginx') {
        steps {
            sh '''
                sudo rm -rf ${WEB_ROOT}/*
                sudo cp -r dist/* ${WEB_ROOT}/
                sudo systemctl restart nginx
            '''
        }
    }

    stage('Verify Deployment') {
        steps {
            sh '''
                curl -I http://localhost
            '''
        }
    }
}

post {

    success {
        echo 'Portfolio deployed successfully!'
    }

    failure {
        echo 'Deployment failed!'
    }

    always {
        cleanWs()
    }
}
```

}
