# Major Incident Management Process Guide

Source: https://mynow.servicenow.com/now/best-practices/assets/major-incident-management-process-guide

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `b9207b052db65bbfd3ab5de72b7449ae29274f7f3e3c47549a0a63c07a159810`

**Major Incident Management**

Process Guide

Australia

Updated: August 2026

Asset number: 0003816

## Introduction

This process guide will explain how the incident management process is enabled within the ServiceNow platform. It is intended that this process be followed as closely as possible. ServiceNow encourages simple, lean ITSM processes, which are reflected in the out-of-the-box design. Additional functionality can be incorporated into what is offered; however, this should only be done in scenarios where a required business outcome is achieved that could not be attained using an out-of-the-box method. Following this approach will also ease upgrade paths and enhance the ability to expand the platform's use.

## Principles and Basic Concepts

A major incident is a highest-impact, highest-urgency incident that affects many users, depriving the business of one or more crucial services. Given the urgency of the situation, a well-coordinated response process is required to accelerate resolution and minimize business impact.

The goal of an organization is to have an effective and efficient system for responding to major incidents. The requirements are to:

- Minimize the impact of service interruptions.
- Ensure that an appropriate Incident Manager/Major Incident Team/Management Group are in place to manage a major incident.
- Ensure that stakeholders are well-informed of service interruptions, degradations, and resolutions.
- Once service is restored, conduct a review of each major incident to ensure that it was adequately addressed. The purpose of this review is to analyze the incident and identify measures that can be taken to prevent a similar incident in the future. It also provides an opportunity to evaluate the incident response process and identify areas for improvement.
- Create a problem for root cause analysis.

## Process Scope

The scope of Major Incident Management includes:

- Identification
- Communication and Collaboration
- Resolution
- Post-incident review

## Process Objectives

The objectives of Major Incident Management are to:

- Ensure standard methods and procedures are used for efficient and prompt major incident response, analysis, documentation, management, and reporting.
- Provide timely and consistent communication of major incidents to business and support staff.
- Enhance the business perception of IT through a professional approach to quickly resolve and communicate major incidents when they occur.
- Align Major Incident Management activities and priorities with those of the business.
- Maintain user satisfaction with the quality of the IT service.

## Roles and Responsibilities

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Major Incident Management Process Owner |
| Description | The Major Incident Management Process Owner’s primary objective is to own and maintain the Major Incident Management process. The Process Owner is usually a senior manager with the ability and authority to ensure the process is rolled out and used by all stakeholders. |
| Responsibility | - Defining the overall mission of the process<br>- Establishing and communicating the process, mission, goals, and objectives to all stakeholders<br>- Documenting and maintaining the process and procedures<br>- Resolving any cross-functional (departmental) issues<br>- Ensuring proper staffing and training for execution<br>- Directing the Incident Management roles<br>- Ensuring consistent execution of the process across the organization<br>- Monitoring, measuring, and reporting on the effectiveness of the process to senior management<br>- Continually improving the process |
| ServiceNow Role | No specific ServiceNow role |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Major Incident Manager |
| Description | Concerned entirely with major incidents. They are the coordinator responsible for resolving a major incident sooner and ensuring that it does not reoccur. |
| Responsibility | - Coordinating the investigation and resolution of a major incident<br>- Assigning tasks to other teams to investigate and resolve the major incident<br>- Initiating the major incident process by assessing and approving major incident candidates or creating a major incident<br>- Rejecting a major incident candidate<br>- Demoting a major incident after it is accepted so that the incident can be handled as a regular incident<br>- Maintaining ownership and accountability for the lifecycle of the incident<br>- Identifying the users and groups to be involved in the resolution activities<br>- Managing communications during the major incident to both business and IT stakeholders<br>  - Creates ad-hoc communication plans and tasks<br>  - Edits a communication plan that is attached to a major incident<br>- Conducting a review of the major incident once it is resolved<br>  - Closing a major incident |
| ServiceNow Role | The major\_incident\_manager role is required in ServiceNow. |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Communications Manager |
| Description | The Communications Manager is primarily responsible for establishing communications protocols for major incidents. |
| Responsibility | - Manages communications for major incidents and is responsible for communicating with all stakeholders.<br>- Creates adhoc communication plans and tasks.<br>- Edits a communication plan that is attached to the major incident |
| ServiceNow Role | The communication\_manager role is required in ServiceNow to create plans. |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Incident Manager |
| Description | The Incident Manager’s primary objective is to enable efficient service restoration to minimize business disruption. |
| Responsibility | - Manages incident properties and major incident trigger rules<br>- Can create and edit Communication Plan Definitions. |
| ServiceNow Role | The incident\_manager role is required for incident administration. |

| Role Name | Service Desk Agent (1st Line) – Major Incident Management |
| --- | --- |
| Description | The Service Desk Agent (SDA) is the front line or face of the Technology organization. They will be the people the rest of the organization interacts with most commonly, and this will typically be when users are experiencing some sort of technology related issue.<br>The Service Desk is likely to be the first team to be aware of a major IT incident. |
| Responsibility | - Recording, ownership, monitoring, tracking, and communication about incidents<br>- Escalating incidents to IT support<br>- Communicating updates to the end users<br>  - Updates to portals and/or phone message<br>- Status updates to resolution times<br>- Workarounds that may have been implemented<br>The Service Desk Agent is engaged in the process by setting up the Assignment Group field for the Service Desk group and the Assigned to field for the individual SDA. |
| ServiceNow Role | Service Desk Agents will require the sn\_service\_desk\_agent role |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | IT Support Teams (2nd / 3rd Line) |
| Description | The IT Support Teams provide the key technical skills and knowledge necessary to implement workarounds and resolve major incidents. They are responsible for the diagnosis, technical resolution, and workaround execution. Major incidents can be quite complex, and therefore, multiple IT support teams may be involved. |
| Responsibility | - Investigating and diagnosing incidents escalated from the Service Desk<br>- Developing workarounds<br>- Resolving and recovery of assigned incidents<br>- Creating incidents after detecting a service failure, quality degradation, or a situation that may result in one<br>The IT Support Team is engaged by changing the Assignment Group field to the support group in question and the Assigned field to the individual support staff. |
| ServiceNow Role | SMEs will require the itil role or sn\_incident\_read and sn\_incident\_write roles. |

### Groups

The assignment group and the person assigned to it are responsible for working on the task.

| Column 1 | Column 2 |
| --- | --- |
| Group Name | Service Desk Group(s) (1st line) |
| Responsibility | - Recording, ownership, monitoring, tracking, and communication about incidents<br>- Investigating and diagnosing incidents<br>- Providing resolutions and workarounds from standard operating procedures and existing known errors<br>- Escalating incidents to incident support<br>- Closing of incidents |
| ServiceNow Role | ITIL |

| Column 1 | Column 2 |
| --- | --- |
| Group Name | IT Support Team (2nd/3rd line) |
| Responsibility | - Investigating and diagnosing incidents escalated from the service desk<br>- Developing workarounds<br>- Resolving and recovery of assigned incidents<br>- Creating incidents after detecting a service failure, quality degradation, or a situation that may result in one |
| ServiceNow Role | ITIL |

For Major Incident Management, a dedicated group can be used, e.g., “Major Incident Management,” or an existing group, e.g., “Service Desk.”

Implementer tip: The assignment group is determined by a property in MIM

Establishing a dedicated group for Major Incident Management is considered a recommended practice to provide the focus and expertise required by the process.

The decision to have a dedicated group depends on the organization's specific needs and is influenced by its complexity, size, and frequency of major incidents.

## Major Incident Management

A major incident (MI) is an incident that results in a significant disruption to the business and demands a response beyond the routine incident management process. Major incidents are managed as a subprocess within Incident Management, where the impact of the incident is considered to have a significant impact on the business, necessitating additional activities to minimize or mitigate the impact as quickly as possible.

Major incidents are coordinated by a single individual (Major Incident Manager) who will manage the situation through resolution. The Major Incident Manager can use incident tasks to allow multiple support groups and users to work on the resolution concurrently.

Major Incident Managers utilize the Major Incident Workbench to provide regular updates on the incident's progress throughout its lifecycle. When the incident has been resolved, the Incident Manager can review it and any follow-up activities.

### Major Incident Candidates

Users of the incident process may consider a particular incident to require the major process; however, they cannot automatically promote an incident into this process since it will trigger several actions and activities in other teams that they may not be aware of. Incidents are initially proposed as major incident candidates so that incident managers can confirm that this process should be followed. There are 3 ways to do this:

1. Automatically via predefined trigger criteria
1. Manually from an existing incident
1. Manually, where no incident currently exists

Trigger Criteria

Major incident candidates can be automatically proposed based on pre-defined criteria. When these criteria are met, the incident is immediately proposed as a candidate.

Users can manually propose a candidate from an existing incident by selecting the Propose Major Incident choice in the context menu. If an incident does not exist, a candidate can be proposed directly from the left navigation menu by using the "Create Major Incident Candidate" option.

Major Incident Managers can create a major incident without needing a candidate by using the Create Major Incident link in the left navigation menu.

Once the candidate is proposed, a new form section called Major Incident will be displayed on the incident record. This section includes additional fields related to major incidents. The user proposing the candidate should now populate the Business Impact and Probable cause if they have any information pertaining to these subjects.

An Incident Manager now reviews all proposed candidates. Choosing the relevant option in the context menu can allow you to accept or reject them. Once the candidate is promoted to a major incident, the Major Incident State field is automatically updated to 'Accepted'. If it was previously empty, the Assignment group field is changed to the Major Incident Management group. It is expected that the Major Incident Manager reviewing the candidate would manually reassign it to the correct incident management group if it were previously assigned.

During a major incident, the Major Incident Manager can log specific actions taken in the main incident record by entering notes into the 'Actions taken' journal field. This allows these notes to be identified independently of any added general notes.

Incident Tasks

The incident will remain assigned to the Major Incident Management group for the remainder of the lifecycle. The Major Incident Manager will need to designate actions and activities for other groups and individuals as part of the investigation and resolution of the incident. This is achieved by creating individual incident tasks from the Incident Tasks related list that are only available on major incidents.

Alert Management

Major incidents can be created manually or automatically from an alert using Alert Management Rules. Based on pre-defined rules, the major incident state is set to Proposed or Accepted.

Two alert management rules are available for major incident management by default: Create Major Incident and Create Major Incident Candidate. Both rules are disabled by default. Activate these alert management rules and update the alert filter conditions to control when major incidents (and their corresponding candidates) are created.

Additionally, add or modify the remediation workflows and subflows.

Alert rules can be found and configured by System Administrators by navigating to Event Management &gt; Alert Management Rules.

On-Call Scheduling

On-call scheduling enables the setup of on-call schedules, rotations, and escalation policies to ensure support coverage is provided in accordance with business needs.

Key capabilities include

- Shifts
- Roster
- Roster members
- Schedules
- On-call trigger rules

On-call scheduling allows for determining which user group member is available to complete a task. For example, to find the right person to assign an incident.

On-call scheduling also helps to determine the current primary contact for a task and escalate notifications for a group.

Once on-call schedules have been created, on-call trigger rules can be defined to automatically assign a task record (such as an incident) to the appropriate on-call group (and user).

### Communication Plans

Timely communication is vital during major incidents to keep IT teams, business stakeholders, end-users, and customers informed about the incident's impact and progress. A comprehensive communication plan, specifying contacts, methods, and frequency, is crucial for effective incident management. This plan guides the incident response team, allowing them to concentrate on resolution while establishing expectations for ongoing communications. It is advisable to have multiple communication plans tailored to the incident type, priority, or target audience, with higher-priority incidents warranting more frequent updates.

## Establishing a Major Incident Process

Several steps are required to establish a Major Incident Management process.

- What are the Service Level Agreements and Service Portfolio?
  - This helps quantify the impact of a Major Incident and the proportionate response timing required.
- Is there an existing IT Service Continuity Management plan, and who are the contacts?
  - Who and when needs to be communicated to those trigger conditions are key to have thought through in advance.
- What constitutes a major incident, and is this reflected correctly within the incident management process?
  - Incident Management and Major Incident Management processes should be considered together. Ensuring this is clear will help prevent unnecessary major incidents or, conversely, incidents that cause more disruption than necessary due to not being promoted to an MI in a timely manner.
- Having clear roles and responsibilities, including internal and external organizations where appropriate.
  - Having these agreed upon and communicated before the MI process is operational will help ensure that no misunderstandings arise when an MI is raised – there will not be time for that\!

## Major Incident Workbench

The Major Incident Manager can use the Workbench to see much of the information associated with the major incident, but it primarily coordinates communication activities.

Incident Communications

The Communication tab within the Workbench has a set of predefined communications tasks to be carried out. These tasks use the Incident Communication feature and are created as the task is initiated from the Workbench. The Incident Manager will need to populate the task content and assign it to the relevant individual for action.

When the tasks are closed, this is reflected in the Workbench.

Conference Calls

The Conference tab is only displayed if the Notify plugin has been purchased and enabled. Conference calls can be directly initiated from this tab. Notify provides platform features for workflow-driven voice calls, conference calls, and SMS messages. Requires the Twilio Direct Driver and a separate contract with Twilio for SMS and Voice capabilities.

Major Incident Reviews

Once the major incident has been resolved, the Incident Manager will review what happened. This usually involves understanding the root cause and determining whether any steps can be taken to prevent the situation from recurring. Lessons learned can be captured here. The review is conducted when the incident is in a Resolved state. If the review is comprehensive, incident tasks can be created and assigned. Once the review is complete, the incident can be closed.

## Other Processes

### Change Management

While a major incident is active, a change may be required when a fix or workaround is required. The Change Manager should, therefore, be involved in the process. Retrospective or emergency changes may be required during the process.

### Problem Management

The Problem Management process's role is to identify problems (i.e., the cause of multiple incidents), take appropriate actions, and facilitate permanent fixes to prevent the recurrence of future incidents.

Problem Managers can often be involved in the Major Incident management process, which extends into the post-incident review and subsequent long-term remediation steps.

Due to the significant impact that major incidents can have, Problem Managers are often involved after a major incident has been resolved. Whilst a Problem Manager’s role is extensive, in this overview, we are only concerned with their role and responsibilities in relation to major incidents.

## Process Governance

Key Performance Indicators (KPIs) evaluate the success of a particular activity in meeting the critical success factors. Successfully managing KPIs can be achieved by repeatedly meeting an objective (maintain) or making progress toward an objective (increase/decrease).

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Outcome | Success Metric | Operational Outcome and Success Metric Description |
| Reduce Disruption from Major Incidents (Volume) | \# of Major Incidents Closed | Operational Outcome: Lower MI volume often indicates decreased disruption to end-users. This outcome examines the value of reducing incidents and thereby restoring productive capacity to end-users.<br>Success Metric: Total number of MI closed.<br>Desired Metric Trend: A decrease is typically a favorable trend. |
| Reduce Disruption from Major Incidents (Duration) | Average Time to Close a Major Incident (elapsed hours) | Operational Outcome: This outcome examines the value of faster incident resolution and, thus, reduction in disruption from MI to the end-user.<br>Success Metric: Avg. elapsed time between created and closed is indicative of how long the MI disrupted an end-user (we use a 'closed' state for standardization purposes, though technically a 'resolved' state could be more accurate).<br>Desired Metric Trend: A decrease is a favorable trend. |

Operational Data

- Provides information on active MI, giving visibility and oversight.
- Best tracked on a dashboard or homepage.
- Monitored by the Service Desk Teams

| Column 1 | Column 2 |
| --- | --- |
| Item | Purpose |
| Active major incidents | Provides high visibility to major incident events in progress. |

### Platform Analytics Solutions

ServiceNow provides a range of Platform Analytics solutions to help analyze and optimize business processes. Details of these can be found in the [docs](https://docs.servicenow.com/csh?topicname=c_performanceAnalyticsAndReporting.html&version=latest).

Performance Analytics offers ITSM Dashboards for various applications. Details of these can be found in the [docs](https://docs.servicenow.com/csh?topicname=itsm-dashboards-content-pack.html&version=latest).

The Benchmarks application provides instant visibility into your KPIs and trends, offering comparative insights relative to industry averages and top performers. You can compare your organization's performance with industry standards, assess it against global benchmarks, and implement recommendations for improvement. Details of this can be found in the [docs](https://docs.servicenow.com/csh?topicname=r_Benchmarks.html&version=latest) and [Best Practice](https://nowlearning.servicenow.com/nowcreate?id=nc_asset&asset_id=dc229f8f47e646dcca332a81736d43af&nc_source=copy_asset_link).

ITSM Success Dashboard indicators provide insights to the IT leadership team and process owners so that they can measure the performance of their ITSM implementation using the KPIs defined by ServiceNow. Details of this can be found in the [docs](https://docs.servicenow.com/csh?topicname=success-dashboard-indicator-landing.html&version=latest) and [Best Practice.](https://nowlearning.servicenow.com/nowcreate?id=nc_asset&asset_id=dc229f8f47e646dcca332a81736d43af&nc_source=copy_asset_link)

## Process Diagrams

The process diagrams in editable format (Visio) can be found on the Best Practice [link](https://nowlearning.service-now.com/nowcreate?id=nc_asset&asset_id=49aab537db170150a87c2d3d5696195c).
