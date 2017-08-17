const env = {
    "development": {
        "config": {
            "accessKeyId": "--access-key-id--",
            "secretAccessKey": "--secret-access-key--",
            "region": "us-east-1"
        },
        "s3": {
            "Bucket": "--name-bucket--",
            "ACL": "public-read"
        }
    },
    "homologation": {
        "config": {
            "accessKeyId": "--access-key-id--",
            "secretAccessKey": "--secret-access-key--",
            "region": "us-east-1"
        },
        "s3": {
            "Bucket": "--name-bucket--",
            "ACL": "public-read"
        }
    },
    "production": {
        "config": {
            "accessKeyId": "--access-key-id--",
            "secretAccessKey": "--secret-access-key--",
            "region": "us-east-1"
        },
        "s3": {
            "Bucket": "--name-bucket--",
            "ACL": "public-read"
        }
    }
}

export default (() => env[process.env.NODE_ENV])()