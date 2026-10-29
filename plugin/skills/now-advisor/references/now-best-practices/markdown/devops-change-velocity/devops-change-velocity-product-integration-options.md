# DevOps Change Velocity - Product Integration Options

Source: https://mynow.servicenow.com/now/best-practices/assets/devops-change-velocity-product-integration-options

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `2da67dce74b9dc1296c8da7856add01ae0a895c957d70399dd4792250ce41345`

## Slide 1

DevOps Integration Options

Australia

August 2026

Asset number: 0001379

Speaker Name

## Slide 2

User instructions

PLEASE REMOVE THIS SLIDE BEFORE PRESENTING

Who: This deck is built for delivery of a ServiceNow product/capability. The delivery of this deck may be undertaken by Customers, ServiceNow Partners and ServiceNow Expert Services.  Assigned Business Process Analysts, Business Process Consultant, Technical Consultants and/or Developers will normally be responsible for its delivery.

Why: We want to make it easier for you by spending more time on the implementation and build, not creating workshop materials. The purpose of this presentation is to outline the baseline process explaining the configurable options with the objective of determining the to-be process and corresponding configuration requirements, usually in the form of user stories.

## Slide 3

User instructions

PLEASE REMOVE THIS SLIDE BEFORE PRESENTING

How:

Customers (self–implementation) – Use the deck as it is or add to your corporate template. Alternatively, utilize individual slides to enhance your internal communications.

Partner or Co-Delivery implementations – Use the deck  and add your logo, following the instructions on a following slide.

ServiceNow Expert Services

Remove the PartnerLogo using the Slide Master (View &gt; Slide Master &gt; select the vertical line and the PartnerLogo at the bottom of the Master Slide and delete. If you see any other instances of PartnerLogo just follow the same process from that slide). If you have any issues, please submit a feedback on the Best Practices portal.

Tailor the presentation for the needs of your specific implementation.

## Slide 4

FAQs

PLEASE REMOVE THIS SLIDE BEFORE PRESENTING

How can I provide feedback on this asset or other parts of the Best Practices portal? The Best Practices portal has several feedback buttons throughout, you can submit feedback using the thumbs up/thumbs down buttons. Click on those icons, and a small form will appear for you to leave specific feedback regarding the asset you are accessing.

If we use this deck or slides from this deck, are we breaking any copyright?  No. We designed this deck to be used by our whole ecosystem.

What should I do if I don’t need all the content contained within this, or other assets?  You can either hide or delete the slide(s). You may also want to move the slide(s) to the end of the presentation, review it when you have finished updating the asset for your own use, and then deleting any content you don’t need. Remember to regularly check the Best Practices portal to make sure you have the most up-to-date asset.

## Slide 5

Adding your Logo

PLEASE REMOVE THIS SLIDE BEFORE PRESENTING

To provide credibility to ServiceNow documents, the ServiceNow and your logo should be visible, but not domineering.

Click View &gt; Slide Master &gt; Slide &gt; Select Page 1

What to do:

Download logos from the Brand Center site.

Scale logos to an exact height of 0.45cm.

Place your logos after the ServiceNow logo, divided by a grey bar.

The same rule should be applied when more than one partner logo is required.

What not to do:

Do not scale logos beyond 0.45cm height.

Do not stack ServiceNow and Partner logos.

## Slide 6

Deleting the PartnerLogo

PLEASE REMOVE THIS SLIDE BEFORE PRESENTING

What to do:

Click ‘View’ at the top of the screen.

Click on ‘Slide Master’ - this takes you to the slide master for the slide you are looking at.

Scroll up to Slide 1 in the master view. You may have to pull out the view on the left slide, so you can see all the slides. Slide 1 will be the slide that looks larger than all the rest. It’s kind of the master of that group of slides.

At the bottom of the slide there are 2 shapes that you can highlight. A small vertical grey line and the PartnerLogo text.

Once highlighted, simply press delete. That should remove the PartnerLogo from the slides.

1.

2.

3.

4.

5.

## Slide 7

Housekeeping

## Slide 8

We’ll aim to start and finish on time

Breaks will be taken as needed; approximately every 1-2 hours

Please return from breaks and lunch promptly; if late, please catch-up during breaks or after the workshop

If you are comfortable, please keep your Webcam on

Please let the host know if you need to leave the workshop, via the chat

Avoid temptation to multitask while in the workshop

More than 3 second’s silence = concurrence with the point made

All phones on vibrate and make sure you mute your microphone when not contributing to the discussion

Maintain a positive atmosphere – everyone’s ideas are valued

Please wait for one speaker to finish. Feel free to raise your (virtual) hand if you would like to make a point

Discussion topics needing greater detail will be recorded in a “Parking Lot” for later resolution

Everyone’s ideas are valued

Have fun\! 

Time

Presence

Collaboration

Housekeeping

For virtual/hybrid workshops. Update depending on which application you are using to run your workshop

### Speaker notes

\*\* USE THIS SLIDE IF DELIVERING THE WORKSHOP IN A VIRTUAL OR HYBRID FORMAT \*\*

8

## Slide 9

We’ll aim to start and finish on time

Breaks will be taken as needed; approximately every 1-2 hours

Please return from breaks and lunch promptly; if late, please catch-up during breaks or after the workshop

In the case of an emergency…..

All phones on vibrate. Please leave the room if you must take a call

Avoid temptation to check email. Please keep laptops closed unless taking notes or working on something for the Workshop

More than 3 second’s silence = concurrence with the point made

Maintain a positive atmosphere – everyone’s ideas are valued

Active participation and listening

Discussion topics needing greater detail will be recorded in a “Parking Lot” for later resolution

Everyone’s ideas are valued

Have fun\! 

Time

Presence

Collaboration

Housekeeping

For in-person workshops. Update depending on your location, e.g. you may have to add fire exit information

### Speaker notes

\*\* USE THIS SLIDE IF DELIVERING THE WORKSHOP IN A MORE TRADITIONAL MEETING ROOM ENVIRONMENT \*\*

9

## Slide 10

Agenda

## Slide 11

\{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Introduction to Integrations

Tool capabilities

DevOps tool types

Integration design

Integration Hub

Flow diagram

ServiceNow Platform Integrations

It’s a wrap

Agenda

Update this slide based on your workshop content

## Slide 12

Introduction to Integrations

## Slide 13

Introduction to Integrations

| Column 1 | Column 2 |
| --- | --- |
|  | Integrations allow the exchange of data between ServiceNow DevOps and third-party tools |
|  | Integrations with DevOps fall into the following categories: |

Coding tools: tools where your source code is stored aka GitHub, BitBucket, …

Planning tools: tools where you write your stories, defects, epics, … aka ServiceNow Agile 2.0, Jira, …

Orchestration tools: the tools managing your CI/CD pipelines aka Jenkins

This drives deployment, UT, Change Management

Artifact Management: tools to store your artifact to deploy later on

aka Artifactory.

Testing Tools: this covers in addition to traditional application

testing tools (Selenium, …), tools for security, and code coverage

### Speaker notes

A same tool can play in multiple area (for example GitLab can be for planning, coding and orchestration)

13

## Slide 14

Security: tools used for security aka Veracode, Checkmarx One

Feature Flag: feature flags can be used to control the availability of new features to users aka Split (latest cloud version)

Software Quality aka SonarQube

Introduction to Integrations

### Speaker notes

A same tool can play in multiple area (for example GitLab can be for planning, coding and orchestration)

14

## Slide 15

Tool capabilities

## Slide 16

Tool capabilities

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Capability | Description |  |
| Notification | An event is sent to DevOps via a webhook to reflect a commit for example |  |
| Connect | To check DevOps can connect properly to the tool |  |
| Discover | To gather some data from the tool like the list of repositories in a coding tool |  |
| Import | Not yet supported for user-defined integration |  |
| Lookup | The Lookup provides support artifact tool |  |

In addition to the out of box integrations, customers and partners can create their own integration

To help with integration, DevOps recognizes the following tool capabilities:

### Speaker notes

1) Notification: The ability to alert stakeholders about events, changes, or statuses within the DevOps pipeline

Use Cases:

Build Notifications: Informing developers when a build is successful or fails.

Deployment Alerts: Notifying operations teams about deployment statuses.

Incident Alerts: Alerting relevant teams about incidents or issues in production environments.

2) Connect: The capability to integrate and communicate between different tools, systems, and environments.

Use Cases:

CI/CD Integration: Connecting code repositories (e.g., GitHub) with CI/CD tools (e.g., Jenkins).

Environment Integration: Linking development, testing, and production environments for seamless transitions.

API Integrations: Connecting various services and tools via APIs.

3) Discover: The ability to identify and catalog resources, services, and dependencies within the DevOps ecosystem.

User Cases:

Service Discovery: Identifying microservices and their endpoints.

Dependency Mapping: Understanding dependencies between different services and applications.

4) Import: Import action does not support historical import functionality.

5) Lookup: To retrieve specific artifacts or related information from an artifact repository or management tool.

16

## Slide 17

DevOps tool types

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| \{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Planning | Source Code Management | Orchestration | Artifact Management | Test Automation | Security |  |

Tools used for planning work

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 |
| --- | --- | --- | --- | --- |
| DevOps teams will always use agile tools for work management | Code created &amp; updated by developers is stored in source control repositories | Orchestration tools connect to code repositories and take code changes and send them through a pipeline of build, test, deploy and more | Application designed to store, version, and deploy artifacts for builds | Tools to automate the various types of code tests necessary for a mature DevOps solution  |

Unit tests

Integration tests

Functional tests

| Column 1 | Column 2 |
| --- | --- |
| other test types | Tools used for application/infrastructure vulnerability detection.  |

Often used in a CI/CD Pipeline to implement DevSecOps

Security scans in every stage of development to safely deliver product

Popular Tools

Jira

Azure DevOps Boards

CA Rally

SPM

| Column 1 | Column 2 |
| --- | --- |
| ITBM Agile 2.0 | Popular Tools |

GitHub

BitBucket

GitLab

Subversion

CVS

| Column 1 | Column 2 |
| --- | --- |
| Azure DevOps Repos | Popular Tools |

Jenkins

Azure DevOps Pipelines

GitLab CI

Bamboo

| Column 1 | Column 2 |
| --- | --- |
| Team City | Popular Tools |

jFrog Artifactory

SonaType Nexus

| Column 1 | Column 2 |
| --- | --- |
| Azure DevOps Artifacts | Popular Tools |

HP/MicroFocus ALM

Tricentis

Selenium

Sonarcube

jMeter

BlazeMeter

Cucumber

| Column 1 | Column 2 |
| --- | --- |
| JUnit | Popular Tools |

Veracode

Fortify

Blackduck

Checkmarx

In addition to the out of box integrations, customers and partners can create their own integration

To help with integration, DevOps recognizes the following tool capabilities:

### Speaker notes

17

## Slide 18

A scoped application

You want to create a spoke for each third-party tool to help abstract your API endpoints

Will take care of the connection and credentials

One action per API endpoint

A different scoped application

For the different sub-flows required to implement the tool capabilities

Will be called by DevOps flows automatically

Rely on the spokes for the call to the third-party tools

If scripted action is required from the tool

Most seen in orchestration tool integrations (Jenkins plugin, Azure DevOps extensions, …)

IntegrationHub spoke

DevOps Data Model integration

Tool plugin/extension (optional)

Integration design

## Slide 19

Integration Hub provides a single solution to quickly integrate with third-party services. Build and Share content in minutes. Reduces the need for code while ensuring discoverability and reuse

API Management to throttle and control access to critical services. Analytics and reporting to gain insight into usage patterns. API exploration and discovery to ensure users know what is available and how to use it

Flow Designer offers rich process automation capabilities in a single design environment. Flow Designer lets process owners use natural language to automate approvals, tasks, notifications, and record operations without coding

Integration Hub

### Speaker notes

19

## Slide 20

Flow diagram

Discover

Button

DevOps Data Model

Trigger Flow

Return

Tool Specific

Tool

Ref.

## Slide 21

ServiceNow Platform Integrations

## Slide 22

Planning and Orchestration tool integration

Easily integrate any planning or orchestration tool

Introduced a new, simplified framework enabling integration with non-OOTB planning and orchestration tools without deep ServiceNow platform knowledge

1

2

3

Whilst DevOps Change Velocity supports many DevOps tools OOTB, there is a recurring need to support newer tools or tools specific to organizations.

Drive traceability between change and key DevOps data across your toolchain to improve visibility and auditability while helping to reduce MTTR

Enable automated change creation from your orchestration tool(s), keeping developers in the tools they work in

### Speaker notes

Summary​​

While DCV supports many DevOps tools OOTB, there is a recurring need to support newer tools or tools specific to organizations. In Xanadu we introduced a simplified framework to allow customers to integrate with non-OOTB supported (custom) planning tools – this framework is being extended in Y to support orchestration tools as well.

Explain and Discuss

Leverages extensible docker container solution to bring data into DCV and invoke pipeline actions (e.g., create change, publish DevOps data to ServiceNow, associate DevOps data to change)

Utilizes record transformer rules to translate data brought into DCV into the appropriate fields in the DevOps data model

Target Persona(s)  ​

DevOps Admin, DevOps tool owner

22

## Slide 23

Tool chain configuration

The DevOps Change Workspace allows you to configure your toolchain

See Product Documentation for further information

Before Configuration

After Configuration

Connect and configure tools from your DevOps toolchain to send data. We recommend connecting an orchestration tool first.

Group pipelines, plans, and repositories used by your team to process and store data from connected tools

Modify a pipeline to automatically create a DevOps change

If a tool is marked as Disconnected because of a system-generated failure during an unsuccessful connection check, any subsequent successful check automatically updates the connection status to Connected. If you manually disconnect the tool, the tool status remains Disconnected even if there’s a subsequent successful connection check

### Speaker notes

23

## Slide 24

Tool chain configuration - Orchestration

Decision Required:

Determine which orchestration tool you wish to integrate to.

A playbook will be presented for the selected tool

## Slide 25

Tool chain configuration - Plan

Decision Required:

Determine which plan tool you wish to integrate to.

A playbook will be presented for the selected tool

## Slide 26

Tool chain configuration - Code

Decision Required:

Determine which code tool you wish to integrate to.

A playbook will be presented for the selected tool

Depending on the tool different options will be presented

## Slide 27

Tool chain configuration - Artifact

Decision Required:

Determine which artifact tool you wish to integrate to.

A playbook will be presented for the selected tool

Depending on the tool, different options will be presented

### Speaker notes

27

## Slide 28

Tool chain configuration – Software quality

Decision Required:

Determine which software quality tool you wish to integrate to.

A playbook will be presented for the selected tool

Depending on the tool different options will be presented

## Slide 29

Tool chain configuration – Security

Decision Required:

Determine which security tool you wish to integrate to.

A playbook will be presented for the selected tool

Depending on the tool different options will be presented

## Slide 30

Tool configuration Store applications

A number of DevOps integration spokes exist

Check the Store directly for the latest list

Decision Required:

Determine if any additional plugins are required.

## Slide 31

Payload transformation

## Slide 32

GitHub configuration

### Speaker notes

32

## Slide 33

GitHub Actions configurations

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \{9D7B26C5-4107-4FEC-AEDC-1716B250A1EF\}Secret | Description |  |
| SN\_INSTANCE\_URL | ServiceNow instance URL. For example, https://&lt;instance\_name&gt;.service-now.com. |  |
| SN\_ORCHESTRATION\_TOOL\_ID | Sys\_id for the GitHub tool created in ServiceNow instance. |  |
| SN\_DEVOPS\_INTEGRATION\_TOKEN | Secret token for the GitHub tool created in DevOps. To access your secret token navigate to your GitHub tool record in ServiceNow (All &gt; Tools &gt; Orchestration Tools), and select Copy token in the Classic UI. |  |

Create secrets (credentials) in the GitHub repository or GitHub organization. Secrets are environment variables (encrypted) that you create in an organization or repository. These secrets are available to use in GitHub Actions workflows

## Slide 34

Workflows in the GitHub repository

All workflows of your repository must have either a .yml or .yaml file extension. All workflows must be under .github/workflows directory

Create a YAML file to define workflow configuration in your GitHub repository

## Slide 35

Workflows in the GitHub repository

The name of the workflow must match with the workflow file name.

The names of the workflows under All workflows on the Actions tab must match those saved under your repository's .github/workflows directory

When onboarding GitHub Actions pipelines through the App onboarding catalog or the onboarding APIs, now only the selected pipelines are associated with the DevOps app. If no pipeline is selected, all pipelines within the specified repository are associated

Create a YAML file to define workflow configuration in your GitHub repository

## Slide 36

A display name must be given for every job and must be unique for every job in the workflow. The job name must match the stage name in the custom action

Workflows in the GitHub repository

Create a YAML file to define workflow configuration in your GitHub repository

## Slide 37

Workflows in the GitHub repository

Create a YAML file to define workflow configuration in your GitHub repository

Use the workflow\_dispatch event to trigger a workflow manually.

## Slide 38

Change requests created for GitHub jobs are re-used if the change requests are in the implement and post-implement stages. For example, for a pipeline execution

If a job fails before the change request is in the implement stage, the change request created will not be re-used when the failed jobs are re-run.

If the failed jobs or all jobs are re-run, a new change request will be created.

Now if a job fails when the change request is in the implement or post-implement stages, the change request will be re-used when the failed jobs or all jobs are re-run.

GitHub re-runs

## Slide 39

It’s a wrap

## Slide 40

DevOps release available artifacts

Plan

Build

Test

Develop

Deploy

Operate

Agile Planning

Source Code

Build Tools

Testing and

Quality

Operations

Deployment

ITBM

ITSM

ITSM/ITOM

ServiceNow Enterprise DevOps Platform

Virtual Agent

Service

Portal

Service

Catalog

Connect

Workflow

Flow Designer

Integration Hub

Orchestration

CMDB

Visual

Task

Board

Guided

Tours

Knowledge Mgmt

Notify

Push

Mobile

Supervised

Machine Learning

Anomaly Detection

Actionable

Analytics

Time

Series Database

Peer

Benchmarking

### Speaker notes

Our company tagline is: “We make the world of work, work better for people.”

That tagline can be said in the following way for DevOps: “We make the world of DevOps work better for people.” Since, after all, DevOps is just another piece of work in an organization. There is a requestor (App Owner) and a provider (Dev and Ops) and a workflow process in-between.

Our power comes from being able to tie that entire DevOps toolchain together and provide a higher level of analytics, collaboration, Machine Learning, and Intelligent Action across tools that traditionally do not have integrations with one another.

40

Confidential / Proprietary / Do Not Distribute

## Slide 41

DevOps release available artifacts

DevOps

Change Automation

DevOps Insights

DevOps Integrations

Jenkin Extension

Azure Extension

## Slide 42

Talk to the Product Team

Your next integration may be already in the book

Talk to Customer Outcomes

Our specialized team can build your next integration

Talk to our partners

Huge ecosystem, of partners ready to help

Write your own

Keep it private and maintain it

Open source it at https://share.servicenow.com and let the community help

What’s next

## Slide 43

For a complete list and description of the DevOps API:

https://developer.servicenow.com/dev.do\#\!/reference/api/rome/rest/devops-api

Change Management API:

https://developer.servicenow.com/dev.do\#\!/reference/api/rome/rest/change-management-api

Development and troubleshooting tip: You may find the REST Explorer handy for troubleshooting API calls like this. It’s not fancy like Postman, but it may be quicker if all you’re trying to do is figure out the right call parameters:

Example call:

https://???.service-now.com/api/sn\_devops/devops/orchestration/changeInfo?branchName=master&amp;stageName=UAT&amp;pipelineName=DSO%2FZipbuild\_CD&amp;toolId=ac6374ab1bac30101af8c848624bcb46&amp;buildNumber=59

  Example return:

\{

 "result": \{

 "changeFound": true,

 "sys\_id": "b431e87d1bb470101af8c848624bcb16",

 "number": "CHG0071444",

 "type": "normal",

 "state": "-4",

 "phase": "requested",

 "phase\_state": "open",

 "priority": "4",

 "risk": "4",

 "url": "https://???.service-now.com/change\_request.do?sys\_id=b431e87d1bb470101af8c848624bcb16"

 \}

 \}

ServiceNow DevOps API

## Slide 44

A self-service form can be configured to allow DevOps engineers to request new integrations and tool connections

This ensures all important information is captured and speeds up the process of tool onboarding.

This is the recommended approach for all supported tools.

DevOps self-service tool onboarding

## Slide 45

Questions?

## Slide 46

Thank you
