# Sanity Setup Instructions

## Update Sanity Studio
Studios must be on version 5.1.0 or, preferably to @latest to generate manifest and schema files.

## Deployment

### Sanity-hosted studios: Update your studio and re-deploy
Schema and manifest extraction happens automatically as part of the deploy step:
```bash
npx sanity deploy
```

### Self-hosted studios: Update your studio and deploy your schemas
If you're logged into the Sanity CLI, you can run the following command to deploy your manifest and schema:
```bash
npx sanity schema deploy
```

### CI/CD Pipeline
If you deploy your studio as part of a CI/CD pipeline, you must generate a deploy token in Manage, and add a new step to your pipeline with the following command:
```bash
SANITY_AUTH_TOKEN=<deploy_token> npx sanity schema deploy
```

## API Token
The API token has been added to `.env.local` as `SANITY_AUTH_TOKEN`.
