# static-frontend

Tiny React smoke-test app for validating the CloudFront + private S3 static
frontend path.

This app is intentionally dependency-free for now: `index.html` loads React 18
from the public UMD CDN, then runs `assets/app.js`.

## Deploy to the dev static bucket

```bash
aws s3 sync . s3://ornge-dev-admin-static/ \
  --region us-east-2 \
  --exclude ".git/*" \
  --cache-control no-cache

aws cloudfront create-invalidation \
  --distribution-id E2VI65IBHJR65H \
  --paths "/*"
```

Then open:

```text
https://d28ippmp1v3fvt.cloudfront.net/
```
