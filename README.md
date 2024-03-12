# GitHub Action Skills Repository

## Introduction
**Welcome to my GitHub repository**, where I've honed my skills in utilizing GitHub Actions to streamline and automate workflows. This repository is a showcase of the sophisticated workflows I've architected to automate testing and deployment processes for mobile applications.

Below is an outline of the GitHub Action workflows I've designed:

- On `pull_request` events for the `main` branch, certain workflows are triggered.
- Custom environment variables are set, including Android architecture, target, API level, build tools version, and emulator settings.
- Specific jobs run on `macOS-13` with setup steps for the node environment using `setup-node@v4` and supporting Node version `>=18.x`.

## Clone Repository with Application
Begin by cloning the mobile application repository and initiating the build process.

## Automation Test Execution
Copy the repository containing automation tests and execute them to ensure robust functionality.

## Actions
- **Manual Running Action**: This allows you to manually trigger workflows, giving you control over when certain actions are executed.
- **HTML Report Generation**: After the execution of tests, an automated action generates a detailed HTML report and sends it via email for insightful analysis.
- **Deployment with Artifacts**: Deploy your application seamlessly along with all the necessary compiled artifacts.

These actions leverage the following configured environment variables and job settings to ensure a smooth CI/CD process:



