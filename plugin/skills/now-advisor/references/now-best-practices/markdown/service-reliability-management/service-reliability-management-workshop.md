# Service Reliability Management - Process Workshop Presentation

Source: https://mynow.servicenow.com/now/best-practices/assets/service-reliability-management-process-workshop-presentation

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `d6c05d285bfa29a741c434d88f47564bb5c825e898372a5e5ea4fbd0ffc4f340`

## Slide 1

Service Reliability Management

Implementation Workshop

August 2026

Asset Number: 0004129

Speaker Name

## Slide 2

User Instructions

PLEASE REMOVE THIS SLIDE BEFORE PRESENTING

To help our community of ServiceNow implementers i.e. Business Process Analysts, Platform Architects, and Technical Consultants

Across our customers, partners and internal Expert Services teams

To deliver effective workshops for gathering requirements for setting up the ServiceNow application

Review the slides for any interactive animations

Hide slides you do not intend to present

Provide feedback and subscribe on Now Create content

Are we breaking any copyright laws if we use these slides?

No. We designed this deck to be used by the entire ServiceNow ecosystem

Use Slide Master to update or remove “Partner Logo” in the footer image

Add Demo slides where needed

## Slide 3

Service Reliability Management

## Slide 4

Provides a self-serve, guided experience for teams to autonomously manage the health of their technical services. The experience is built using the Service Operations Workspace application and combines ITOM and ITSM capabilities into a single service operations workflow

## Slide 5

Service Level Agreement (SLA) - ”What are the contractual obligations?”

An SLA defines the level of service agreed to between a provider and a consumer. It typically lays out the metrics by which service is measured as well as remedies or penalties should the agreed-upon service levels are not achieved. (Not SRM)

Service Level Objective (SLO) - "When do we take action?"

An SLO is a service level objective: a target value or range of values for a service level that is measured by an SLI.

Service Level Indicator (SLI) - "What do we measure?"

An SLI is a service level indicator—a carefully defined quantitative measure of some aspect of the level of service that is provided.

Error Budget – “How much SLO can we spend?”

An error budget is the amount of SLO that you can spend over a specified time. It can be used to either accelerate or deaccelerate the delivery of new features. It is typically based on availability, latency, and so forth.

An error budget is 1 minus the SLO of the service. A 99.9% SLO service has a 0.1% error budget. If our service receives 1,000,000 requests in four weeks, a 99.9% availability SLO gives us a budget of 1,000 errors over that period.

Reliability Metrics (SRM)

Key Terms

### Speaker notes

5

## Slide 6

Allows SREs to define their own escalation alert logic (e.g., create incident for severity 1 alerts)

Define enrichment actions to route and assign alerts

Use grouping alert rules to reduce alert volume and consolidate context for remediation

Leverage OOTB 3rd party tool connectors to integrate with the APM tools your teams use

Utilize generic custom connectors for any unsupported tool

Import existing services to track SLOs/SLIs against and teams to manage those services

Leverage error budgets to inform automated actions to protect service reliability

Guided SRM admin center experience to manage application governance and initial setup

Publish an SRE team access catalog item for users to self-request access to the SRM app and relevant team.

Team Setup and Management

Service Registration and Management

Integrate

Automate

Capabilities

style.visibilityppt\_ystyle.visibilityppt\_ystyle.visibilityppt\_ystyle.visibilityppt\_ystyle.visibilityppt\_wppt\_hstyle.visibilityppt\_wppt\_hstyle.visibilityppt\_wppt\_hstyle.visibilityppt\_wppt\_hstyle.visibilityppt\_wppt\_hstyle.visibilityppt\_wppt\_hstyle.visibilityppt\_wppt\_hstyle.visibilityppt\_wppt\_h

### Speaker notes

Fusion of Internal &amp; External Intelligence:

TISC seamlessly integrates external threat data with your internal information, offering a holistic view of the threat landscape. This fusion empowers your SOC with comprehensive insights to proactively mitigate threats

Inbound Filtering Rules: TISC's Inbound Filtering Rules enable precise data curation, reducing noise and allowing your analysts to focus on actionable intelligence. This feature alleviates common pain points encountered with other solutions, enhancing operational efficiency.

Customizable Threat Score Calculator: Unlike traditional TIPs, TISC's Threat Score Calculator offers customizable weighted calculations tailored to your organization's unique risk profile. This flexibility ensures accurate threat assessments and enhances your SOC's adaptability.

Empowering Case Management: TISC's robust case management capabilities facilitate seamless collaboration across SOC teams, fostering efficient threat investigations and resolution. This feature promotes teamwork and ensures thorough threat analysis.

TISC marks a significant milestone in our journey towards streamlining and consolidating security products, moving away from traditional point solutions and embracing comprehensive platform solutions.

Our integrated solution, which combines SOAR (Security Orchestration, Automation, and Response), TIP (Threat Intelligence Platform), Case Management, and Crisis Response, represents a game-changer in the industry. With these capabilities 'in a box,' we are delivering unparalleled value to our users, providing a comprehensive, all-in-one solution that not only simplifies security operations but also sets a new industry standard for efficiency and effectiveness.

6

## Slide 7

Architecture and Workflow

## Slide 8

Agent Client Collector &amp; Unified Agent

ML Clustering and GenAI Enabled

Time

Text/Tags

Topology

Service Reliability Management

SLOs &amp; SLIs

Integration Hub Automation

ITSM Incident Creation

ITOM Predictive AIOps

Prevent impact and automate resolutions

Outcomes

Service Observability

Improve service availability

Improve customer satisfaction

Improve agility with business

1

Health Log Analytics

Containerized

services

Logs

Logs

Events

Events

Data Lakes

Scattered VMs

Events

Event Management

Service Operations Workspace

Metric Intelligence

Metrics

Alert Analysis

2

3

OS Events

Metrics

 Logs

Traces

Metrics

 Synthetics

Discovery

Service Mapping

ITSM

External Monitoring Sources

### Speaker notes

X-ref:  ICE0002604

8

## Slide 9

Service Level Objective Management

SLO, SLI, Error Budget Management. Standalone.

(ITOM Operator Pro)

Service Reliability Management

Request teams via catalog, access controls at the team level, on-call teams, team service registration &amp; monitoring integration

Automatically enables the SLO app

(ITOM Operator Pro)

Team-based operations features

### Speaker notes

9

## Slide 10

The SRM Workflow

## Slide 11

Core Setup and Configuration

## Slide 12

Install Plugins

Ensure that the following plugins are installed on your instance

Install

Service Reliability Management v7.0.0

| Column 1 | Column 2 |
| --- | --- |
|  | Installs: Event Management Core, Service Level Objective |
|  | Management for Service Operations Workspace, Notify, |
|  | On-Call Scheduling, and Service Operations Workspace ITOM Apps |
|  |  |
|  | Now Assist for ITOM |
|  | Yokohama V1.5.0 \| Zurich V2.0.2 \| Australia V2.4.5 |
|  |  |
|  | Unified map plugin  |
|  |  |
|  | Update |
|  | Data Visualizations |
|  |  |
|  | Workflow Studio |
|  |  |
|  | Service Operations Workspace  - ITOM |
|  | Yokohama V26.7.3  \|Zurich V27.0.17 \| Australia V27.1.1   |
|  |  |
|  | Service Operations Workspace  - ITSM |
|  | Yokohama V7.0.0 \| Zurich V8.0.3 \|Australia V9.0.4  |

| Column 1 | Column 2 |
| --- | --- |
|  | Update the plugins quarterly via Application Manager |

### Speaker notes

Note: with the March release and available as of Q 1/20/24 Vancouver a customer may use analysis for itom if they have the professional plus with enterprise plus licensing this will allow them to view the summary of the log in plain English but only for one single alert. With the June release an alert analysis is available for alert groups meaning that it will provide analysis of more than one alert that have been grouped either with a seemed to be tagged based or HLA alert group.

It is important to note that not all features are available to standard licensed customers

Key Features

Admin Center guided integrations provides central setup and governance of the SRM experience and teams.

Team-based access controls and registration ensures teams can self-service and set up SRM without needing admin intervention.

Guided on-call Team Setup: includes calendars, escalation policies, and assigned services.

Service registration defines new CMDB services or imports existing CMDB services into the SRM experience.

Simplified monitoring integrations facilitates alert ingestion.

Team-Based SRM: provides "my work alert," incident, change lists, and homepage tailored for each team.

12

## Slide 13

Site Reliability Management Personas

Ella

L1 NOC/OPS

Responsibilities

Remediates basic, common issues that are routine and don't require deep technical knowledge.

Perform initial triage of alerts &amp; incidents.

Escalates more complex issues to an L2.

Painpoints

Unclear who to contact during issues.

Jumping from monitoring tool to monitoring tool.

Deepest Wish

"I'd like to quickly and efficiently resolve problems without having to escalate if possible."

Role: The first line of defense in support or operations for database, networking, infrastructure, security, app services.

Sam

L2, Subject Matter Expert/SRE

Role: The second line of defense, handling more complex and specialized issues that L1 cannot resolve. Owns service availability.

Responsibilities

Addressing incidents and alerts that require more in-depth technical knowledge.

Performs more detailed diagnostics and troubleshooting

Provide guidance and support to L1 NOCs

Painpoints

Jumping from monitoring tool to monitoring tool

Passing on tribal knowledge is not a scalable process

Time consuming process to triage incident and help with root cause analysis

Deepest Wish

"I want to make sure services within my domain are performing as perfectly as possible."

### Speaker notes

Peronsas, segmentation of customers, diff, use-cases

13

## Slide 14

Site Reliability Management Personas

Farah

Service Owner

Responsibilities

Translate business needs into an actionable roadmap​

Manage operational performance and health​

Prove the value of the solution(s)​

Manage the needs of customers and stakeholders​ (SLA, SLO negotiation)

Innovate on the solution(s)

Pain points

Understanding relationship of their services to other services in the organization

Ability to report on performance back to leadership

Blamed for downtime of dependent services downstream

Deepest Wish

"I want to make sure services within my ownership are performing as perfectly as possible."

Role: Responsible for business outcomes and performance of a given application/technical service

### Speaker notes

Peronsas, segmentation of customers, diff, use-cases

14

## Slide 15

Service Reliability Roles and Personas

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \{7E9639D4-E3E2-4D34-9284-5A2195B3D0D7\}Persona and Roles | Description |  |

Administrator

| Column 1 | Column 2 |
| --- | --- |
| \[admin\] | A ServiceNow administrator is responsible for the administration, development, operation, education, and maintenance of the ServiceNow platform. |

Responsible for installation and can perform Service Operations Workspace Admin Center configuration of SRM.

SRM Administrator

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \[srm\_admin\] | The SRM Administrator can update services managed by SRM team.  The administrator can assign new, create and update incidents and changes.  Ability to create teams, updates any SRM team, create/update/delete on-call shifts, create/update/delete escalation policies and triggers. Schedule coverage requests submit time off and create events. |  |

SRM Manager

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
|  \[srm\_manager\] | The SRM Manager can update a service managed by SRM team, ability to assign/create/update incidents and changes. Ability to create/update any SRM team that they manage, create/update/delete on-call shifts, create/update/delete escalation policies and triggers. Schedule coverage requests, submit time off and create events. |  |

SRM Responder

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \[srm\_responder\] | The responder can update a service if you are in the support group tied to the service.  Assign/create/update incidents. Create/update changes. Create teams, view on-call shifts, view escalation policies and triggers, edit contact preferences, schedule coverage requests, submit time off and create events |  |

Team Operator

| Column 1 | Column 2 |
| --- | --- |
| \[srm\_responder\] | Update a service managed by your SRM team, assign new incidents, create and updated incidents, create and edit changes, create teams, update SRM teams that you are a member of or manage.  Override contact preferences, schedule coverage requests, submit time off and create events |

### Speaker notes

Here is a printable slide.  Feel free to re-visit and click on the information icon for more information.  Think about who in your organization will have one or more of these roles.  We will talk more on this later. Let’s learn more about the application so you can make good decisions for implementation.

15

## Slide 16

Event Management Roles and Personas

| Column 1 | Column 2 | Column 3 | Column 4 |
| --- | --- | --- | --- |
| \{7E9639D4-E3E2-4D34-9284-5A2195B3D0D7\}Persona and Roles | Description | Access Rights |  |

Event Mgmt Admin

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \[evt\_mgmt\_admin\] | Users who are expected to configure and execute Event Management in your network. Has read and write access to all Event Management features to configure Event Management. |  |
| Note: Be careful with the evt\_mgmt\_admin role. The evt\_mgmt\_admin role can be elevated to the admin role. | Read/Write to Event management features |  |

Event Management Operator

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \[evt\_mgmt\_operator\] includes \[evt\_mgmt\_user\] | May also be an admin of the monitoring applications. |  |
| In addition to the evt\_mgmt\_user permissions, can also activate operations on alerts such as acknowledge, close, open incident, and run remediations. | Ability to read, update CIs in the CMDB |  |

 Event Mgmt User – Network Team Member

\[evt\_mgmt\_user\] includes \[itil\] role

| Column 1 | Column 2 | Column 3 | Column 4 |
| --- | --- | --- | --- |
| \[itil\] includes \[cmdb\_query\_builder\] | Has read access to all Event Management features. Has the itil role to be able to manage incidents that are created from alerts | Read |  |

Event Mgmt User(s) – App or Server Admin

\[evt\_mgmt\_user\] includes \[itil\] role

| Column 1 | Column 2 | Column 3 | Column 4 |
| --- | --- | --- | --- |
| \[itil\] includes \[cmdb\_query\_builder\] | Has read access to all Event Management features. Has the itil role to be able to manage incidents that are created from alerts | Read |  |

Security Engineer

\[evt\_mgmt\_user\] includes \[itil\] role

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| \[itil\] includes \[cmdb\_query\_builder\] | Has read access to all Event Management features. Has the itil role to be able to manage incidents that are created from alerts | Read |

### Speaker notes

Here is a printable slide.  Feel free to re-visit and click on the information icon for more information.  Think about who in your organization will have one or more of these roles.  We will talk more on this later. Let’s learn more about the application so you can make good decisions for implementation.

16

## Slide 17

Service Operations Workspace

Admin Center and Interface

## Slide 18

Service Operations Workspace Admin Center

Overview: Displays available ITSM and ITOM applications that can be configured

Configurations: Provides access to page-related customizations available within Service Operations Workspace. For example, the landing page, incident record page, change management page and Service Reliability or Service Operations Management.

## Slide 19

Service Operations Workspace – ITOM interface

An operator can start the day by looking at an overview of alerts and metrics in Service Operations Workspace to prioritize work based on service level agreements (SLAs), priority level, and urgency​, using tailored recommendations

View Alerts assigned to you, Assigned team alerts, Unassigned team alerts, Monitored services and open alerts

Configurable workspace that provides a unified experience for multiple IT Operations Management workflows

### Speaker notes

ServiceNow® Service Operations Workspace is a configurable workspace that provides a unified experience for multiple IT Operations Management workflows. Configure your experience using the easy-to-navigate interface of Service Operations Workspace

Note: Customers may see the Operator Workspace interface is available only for customers who have upgraded from a release prior to the Utah release. All customers should use the Service Operations Workspace.

Requirement gathering should include who is to get the evt\_mgmt\_operator role.

When an operator clicks any donut area of a first-level card, the associated alert or service details are displayed in a list or grid view beneath the cards.

19

## Slide 20

Navigating the Service Operations Workspace

Home Page

Services

Reliability Tasks

Teams

Schedules

Automations

Home Page

Services

Reliability tasks

Teams

Schedules

Express List

AIOps configuration

### Speaker notes

20

## Slide 21

Configuring SRM

Teams and Services –  Admin role

## Slide 22

Assign an SRM Administrator -  Admin Role

Navigate to Service Operations Workspace Admin Center &gt;

Overview

\*Service Reliability Management &gt; Assign admins &gt; Service reliability management admins

Role Required: admin

The SRM admin can create and configure teams in Service Operations Workspace and view or modify data across all SRM teams

The SRM admin role is assigned by an SN admin. Assign the role to a member of the SRM team

### Speaker notes

22

## Slide 23

Assign Teams and Services – Admin role

Navigate to Service Operations Workspace Admin Center &gt; Configurations

\* Service Reliability Management &gt; Activate &gt; Teams and services

Role Required: admin

If teams and services already exist, the admin can add them through this interface

Select a Service class from the service class drop down, select any service class, and then select the services to import

Only services which are not already activated in SRM are visible in the list below

### Speaker notes

\* the interface changes with Yokohama to Overview&gt; “Service Operations Management”&gt;Activate&gt;Teams and Services

23

## Slide 24

Governance and Autonomy - Services

Add an approval process when non-admin users request to create a service in SRM or associate an existing CMDB service with SRM

Role required: admin

\* Service Reliability Management &gt;

Governance and autonomy &gt; Service governance

Decision:

Do you want to enable an approval process to create a new service?

Do you want to require approval when associating an existing CMDB service with SRM?

Which team should receive and approve the requests?

## Slide 25

Governance and Autonomy – Teams

Add an approval process when non-admin users request to create a team in SRM or associate an existing team with SRM

Role required: admin

\* Service Reliability Management &gt;

Governance and autonomy &gt; Team governance

Decision:

Do you want to enable an approval process to create a new team?

Do you want to require approval when associating an existing team  with SRM?

Which team should receive and approve the requests?

## Slide 26

Governance and Autonomy –  Edit Team Request

Edit a team request form to customize team requests to your organization's preference

Role required: admin

 Navigate through each of the sections i.e. Details, Location, Questions, Settings,

Access and Fulfillment

Recommendation is to leave the values that are defaulted

## Slide 27

Governance and Autonomy – Error Budgets

Configure the actions the team can select when the error budget of a service level objective (SLO) is breached.

If you make changes to the flow, you will not receive additional updates from ServiceNow to the flow logic

Changes require the use of the Flow Designer &gt;SubFlow&gt;Process Budget Error Policy

The subflow creates an incident and sends an email for each budget error

## Slide 28

Teams, Services, Data Sources, Reliability Metrics – SRM Admin

Using SRM

## Slide 29

Day in the Life of an SRM Admin

## Slide 30

Add an SRM Team – SRM Admin

Request to create a team to start monitoring your services. Teams are responsible for the issues that occur in the associated services.

Service Operations Workspace&gt;

Teams

Role Required: Responder, Manager or SRM Administrator

People with the required roles can create and set up new teams, add the team members and view and modify data across all Service Reliability Management teams

Teams

## Slide 31

SRE Team Request and Approval

A request item is opened, and an approval is pending

The approval process is optional.

A SN Admin can turn on or off the  approval process when non-admin users request to create a service or associate an existing CMDB service (Admin interface)

A group is created in the System Security with the role of

\[sn\_sow\_srm.srm\_responder\]

Teams are viewable in the Service Operations Workspace&gt;Teams

## Slide 32

Setup and Manage SRE Teams – SRM Admin

Teams are viewable in the Service Operations Workspace&gt;Teams

Role Required: SRM Manager, Responder, Administrator

Complete the setup of the team to:

Add team details

Add/View Members

Assign Services

Manage On-call Schedules

Add or Remove Services the team manages

Review related task records assigned to the team

## Slide 33

Assign Members

With SRM autonomy, team members can be added at any time by the SRM Admin

## Slide 34

Set up On-call Schedules

Set up an on-call schedule for your team so that a team member is available to respond quickly to incidents and critical alerts.

Role Required: SRM Manager, Responder, Administrator

On-call schedules determine who is on call or available at a given time

Shifts in SRM let you define variable time periods for your shift-based workforce.

Create shifts for dates and times when you need coverage and assign them to team members

### Speaker notes

Navigate to Workspaces &gt; Service Operations Workspace.You are taken to your SRM homepage.Note: If you have other SOW applications, and depending on your assigned roles, that homepage may not be the SRM homepage. It is the SOW homepage instead, with SRM alerts and incidents included in your metrics. In that case, to view SRM specific areas, select SRM modules from the left navigation pane.

Use one of the following methods to select a team:

On the Teams page (), select a team card.

On the Schedules page (), select the On-call schedules tab. This view shows your selected team. To search for another team, enter the team name in the search bar.

View the team calendar.

Set up your shift schedule by selecting Create shift.

In the Create new dialog window, select either Create new or Use template.Your system admin can create predefined shift templates for you to use to create your shifts.

On the Create a shift form, fill in the fields.For more information on the field descriptions, see Create a shift form in Service Reliability Management.

Select Create shift.

34

## Slide 35

On-call Team Preferences

Populate the following information:

Role Required: SRM Manager, Responder, Administrator

On-call shift managers

Add manager names

PTO Requests

With approval

Without approval

Not allowed

First day of your work week

Allow shift schedule overlap

Escalation rule on shift overlap

Escalate to all shifts (Default)

Escalate to outgoing shift

Escalate to incoming shift

Escalate to all shifts

## Slide 36

Set up Escalation policies

An escalation policy is a set of guidelines that outlines how and when incidents should be elevated to higher levels of authority

Set up an escalation policy for your team to ensure that alerts or incidents are resolved in a timely manner by the appropriate team member

Role Required: SRM Manager, Responder, Administrator

Before creating an escalation policy, you must create an on-call shift for your team

Only the responder who created the team or the manager of the team can set up an escalation policy for that team

Escalation policies define the order and conditions in which members or devices receive notifications.

### Speaker notes

An escalation policy is a set of guidelines that outlines how and when incidents should be elevated to higher levels of authority. It delineates clear procedures and responsibilities for escalation to help responders promptly address problems. It defines the order in which notifications should be escalated if an alert or incident isn’t acknowledged or resolved within a defined amount of time. If no one responds, the escalation is based on your defined policies until someone responds. After a team member responds, the escalation policy stops escalating and no further notifications are sent.

36

## Slide 37

What is a Service?

A functional outcome like Networking, payments, or HR services, that is owned by a team. A service is offered to internal users to “do their work” or to external users to “use your product”

A service can contain one or more technical components like a user authentication service, code, config files or a piece of shared infrastructure like a database

SRM teams works with integrations to prioritize and route alerts to the right responders and follow up with escalation until the alert is acknowledged and you know that someone is responding.  SRM team may perform maintenance and monitoring of the service

When you create or add a service in SRM, it must reflect a service in your SRM infrastructure.

The SRM team executes the operational tasks

37

Incident Response:

Triage

Break fix

Outage management

Service Definition:

Strategy

Metric evaluation

Continual improvement

Operational Tasks:

Maintenance

Monitoring

Code Changes

Patches

Product

Service

Service

Service

Service

Request

 Fulfillment:

On-boarding

Work intake

Enhancement requests

### Speaker notes

37

## Slide 38

Assign Services to a team – Create a New Service

Add an application or technical service to Service Reliability Management (SRM) to help your teams manage service health

Role required: srm\_admin, srm\_manager, or srm\_responder

If you’re adding an existing technical service to SRM, make sure it doesn’t have a support group

You assign the support group when you add the service to SRM

Add a service to SRM to give teams access to its incidents and alerts

 You can either create a service or import an existing one. SRM supports both application and technical services.

Services can be added from:

SOW Admin interface (admin)

Assign Services after adding a team

Add from the Services link in SOW

### Speaker notes

Add a service to SRM to give teams access to its incidents and alerts. You can either create a service or import an existing one. SRM supports both application and technical services.

When you add a technical service to SRM, you also add its Technical Service Offerings (TSOs). TSOs are specific components within a parent technical service. For example, Spam filtering is a TSO within the Email technical service. In SRM, you can assign a parent technical service and its TSOs to different teams.

Note: When you import an existing technical service, its TSOs don’t inherit its support group. TSOs either keep their existing support group or, if they don’t have one, you must assign it before setting up SRM Service Level Objectives (SLOs).

Procedure

Navigate to Workspaces &gt; Service Operations Workspace.You are taken to your SRM homepage.Note: If you have other SOW applications, and depending on your assigned roles, that homepage may not be the SRM homepage. It is the SOW homepage instead, with SRM alerts and incidents included in your metrics. In that case, to view SRM specific areas, select SRM modules from the left navigation pane.

Use one of the following methods to open the Tell us about the service form and select or fill in the fields.

On your Home page, in the Getting started section, select Add a service.

On the Services page (), select Add a service.

Add a service or register an existing one.OptionStepsAdd a serviceIn the New or existing field, select Create a new service in Service Reliability Management.

On the form, fill in the fields.For more information on the field descriptions, see Add service form.

Select Next.

Register an existing serviceIn the New or existing field, select Associate existing CMDB services to Service Reliability Management.

Select one or more services.

Select Next.

In the Assign a team step, fill in the fields.In the Service owner field, select the user to own the services.

In the Support Group field, select a team to monitor the services.To assign the services to a new team, select Create a new team.

For more information, see Add an SRM team.

Select Add service(s).

Result

If approvals aren't enabled, your service appears in the service list.

If approvals are enabled, your service request is sent for approval. After it's approved, the service appears in the services list.

Note: If you added a technical service, its TSOs appear in the Offerings tab on the parent technical service’s page. TSOs also appear in the services list. To view a TSO without an assigned support group, remove all filters from the services list.

38

## Slide 39

Services Dashboard in Service Operations Workspace

SRE Teams and members can:

Add services

Review services with:

Incidents

Critical alerts

Open changes

Low error budget

## Slide 40

Complete the Service Setup

Create New Service, who is responsible for monitoring the service

Complete the setup

Service Details

Add your basic service information and assign a team that manages this service

Alert Data Source

| Column 1 | Column 2 |
| --- | --- |
|  | Connect to the data source your team uses to monitor events and SLO/SLIs for this service |

| Column 1 | Column 2 | Column 3 | Column 4 |
| --- | --- | --- | --- |
|  | Set up Reliability Metrics |  |  |
|  | Set goals for a ‘reliable service’  | (SLO) and decide how you want to  | measure your service health with SLI’s. |

## Slide 41

Service Records

Service Records contain details about the Service the SRM manages

Also available are links to:

Service Map

Reliability Metrics

Integrations

Entry Points

Related CIs

Past Changes Affected CIs

Current Changes

Related Alerts

Planned Changes

## Slide 42

Alert Data Source

Add an integration to monitor events and SLO/SLI for your service

Role required: Responder, Manager, or Administrator

Access the Integrations launchpad from the ITOM AIOps configuration center or directly from a service in SRM

Select a connector and provide the required configuration details

Activate the connector to begin monitoring your service

Configuration tip: Set the Default configuration item to help associate alerts with the correct service

## Slide 43

Available Alert Data Sources

SRM supports multiple connector types for connecting to external monitoring tools

Custom connectors – Build your own connector using webhooks

Pull connectors – Retrieve events from an external tool on a schedule

Push connectors – Receive events sent from an external tool

## Slide 44

Reliability Metrics – SLO

Add SLOs, SLIs, and error budgets

The first step in defining reliability metrics is the Service Level Objective

This is the high-level outcome on the technical performance for the given service

You’re defining the time period for compliance and a service reliability goal

Role required: Responder, Manager, or Administrator

SLO fields: Name, SLI type, How do you want to measure this objective?, Objective (%), Compliance period, and Assignment group (auto-populated)

### Speaker notes

Notes you can set up only one SLO for an SLI

In the screenshot, for an example we will do a duration based SLO, which will compute the time alerts are open that match a SLI under the SLO. We set the objective to 99.99 percent and the compliance period to month. While count based SLOs are also an option, duration based is the best way to view availability data.

44

## Slide 45

Reliability Metrics - SLI

An SLI is a quantitative measure of some aspect of the level of service that is provided. These metrics are used to define SLO targets

At least one SLI is required for each SLO

Two SLI types are available:

Alert-based – Uses qualifying alerts

Outage-based – Uses recorded outage events

Optionally scope an SLI to a specific configuration item within the service hierarchy for more granular monitoring

### Speaker notes

Notes you can set up only one SLO for an SLI

In the screenshot, for an example we will do a duration based SLO, which will compute the time alerts are open that match a SLI under the SLO. We set the objective to 99.99 percent and the compliance period to month. While count based SLOs are also an option, duration based is the best way to view availability data.

45

## Slide 46

Reliability Metrics - Error Budgets

An error budget is the amount of SLO that you can spend over a specified time

SRM aims to minimize error budget consumption to maximize reliability

If you don't configure an error budget policy, the error budget objective is informational and no actions are triggered. You can add or update error budget policies later from the SLO record

What action do you want to take when the threshold is reached?

Create an incident

Send an email

Notify Microsoft Teams\*

\* To use the Microsoft Teams option, you need the Microsoft Teams Graph Spoke integration and a configured notification destination in SRM

## Slide 47

Review the Reliability Metrics

The SLO, SLI, and error budget details for each service are available in the Reliability Metrics tab in Service Operations Workspace

When reviewing reliability metrics, you can:

Track version history with versioned SLO names

View and add work notes to track SLO changes in the Details tab

## Slide 48

Monitor the Reliability Metrics

The Service reliability dashboard provides a consolidated view of service reliability and SLO status

The dashboard includes service state charts, reliability trend charts, and an SLO table

Use the dashboard to:

Monitor service health at a glance

Identify services at risk of breaching their SLOs

Prioritize reliability work using error budget and burn rate trends

## Slide 49

Reliability Tasks

Alerts, incidents, and change requests support the response life cycle in SRM

Reliability tasks

Manage incidents and change requests

Changes can be created within SRM

Express List

Manage alerts throughout the response lifecycle

Alerts can be promoted to an incident

As an SRM user, you automatically have the \[evt\_team\_operator role\]

## Slide 50

Grouping Alerts by CI and Metric Type

Alert automations contain alert grouping and management conditional triggers that execute response actions automatically, based on the contents of the alert

An alert is created in SRM when a third-party monitoring tool has an event. The system analyzes incoming alerts, once a minute, and runs automations accordingly

Use alert grouping automations to group similar alerts and reduce the noise in your queue

Grouping automations are routing that helps you categorize by specific conditions. Each automation combines a set of filters and methods based on fields or condition matches.

## Slide 51

Response Automation

Use alert management automations to assign and respond to alerts. They run after all grouping has occurred.

Management automations are routing that helps you adapt your response to specific conditions.

Each automation combines a set of filters and an outcome, usually setting who is assigned, priority, or creating email, Slack channels, or Zoom meetings.

Create Automation

Define conditions for the automation to run

Set to Active

Apply the actions to take to create an incident or use a outbound webhook to send data to other systems

## Slide 52

Responder use of Service Operations Workspace

Update a service if you are in the support group tied to the service

Assign new incidents

Create and edit incidents

Create and edit changes

Create teams

View on-call shifts

View escalation policies and triggers

Edit contact preferences

Schedule coverage request

Submit time off

Create event

## Slide 53

Access SRM with ITOM Mobile Agent

ITOM Mobile Agent provides access to SRM features on iOS and Android devices

With ITOM Mobile Agent, you can:

View and acknowledge alerts assigned to your team

Create, update, and resolve incidents

Manage reliability tasks

View on-call schedules, request time off, and fill coverage gaps

## Slide 54

Demo

Service Operations Workspace Navigation

Discuss Customization options

### Speaker notes

Narrative / Link to Demo Hub

54

## Slide 55

Requirement Gathering and Recommendations

Who will be the SRM Admin?

Who will be the SRM Manager(s)?

Who will be the SRM Responders(s)

What services are needing setup for each SRE team?

Do you want team autonomy?  Do you want to require approvals for

requested teams to be approved?

Do you want to enable an approval process to create a new

    service?

Do you want to require approval when associating an existing CMDB

service within SRM?

How do you want to group and respond to alerts for each service?

Determine your SLO, SLI and Error Budgets for each service

What data sources are being integrated?

Set up on- call schedules and escalation policies.

ServiceNow Documentation

Introducing Service Reliability Management for Service Operations Workspace

Learn about Service Reliability Management

Maximizing IT Service Reliability: ServiceNow’s SRM and Strategic SLOs

Team based On-Call Management with SRM

Service Reliability management: A new Era for IT Operations

Demo Video

Decision(s) Required:

Best Practice:

### Speaker notes

55

## Slide 56

ServiceNow Resources

Now Create

Product Docs

Now Learning

Partner Success Center

DemoHub

Find workshop decks, workbooks, and other documents with step-by-step delivery guidance based on leading practices

Access Now Create Here

Use the ServiceNow Product Documentation site for solution details and step-by-step configuration guidance

Access Product Docs Here

Visit Now Learning to take interactive trainings and learn more about the configuration of each product

Access Now Learning Here

Bookmark the Partner Success Center for regular access to customer stories, first call decks, industry insights, and more

Access Partner Success Center Here

Prepare for interactive product demos with DemoHub narratives

available for Partners and SN Employees

Access DemoHub Here

## Slide 57

Questions?

Contact info or other content can go here

## Slide 58

Next Steps

Transition into what’s next – homework, action items, next steps

1

2

3

4

Next workshops

5

Other things to think about, other things we will provide so they can see OOB, etc.

### Speaker notes

58
