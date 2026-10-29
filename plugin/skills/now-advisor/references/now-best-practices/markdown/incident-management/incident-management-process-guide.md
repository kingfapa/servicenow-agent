# Incident Management - Process Guide

Source: https://mynow.servicenow.com/now/best-practices/assets/incident-management-process-guide

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `893c79d3b40237b10488c62cb06019256339281079dd97f72387edfea7a7f0f6`

**ITSM Incident Management**

Process Guide

Australia

Updated: July 2026

Asset number: 0001016

## Introduction

This process guide explains how to enable incident management in the ServiceNow platform. It is intended that this process be followed as closely as possible. ServiceNow encourages simple, lean ITSM processes, and that is reflected in its out-of-the-box design. Additional functionality can be incorporated into what is offered; however, this should be done only when a required business outcome cannot be achieved using an out-of-the-box method. Following this approach should also ease upgrade paths and expand its use.

## Principles and basic concepts

An Incident is defined as an unplanned interruption or reduction in the quality of a service.

Incidents can include failures or service degradations reported by users, technical staff, third-party suppliers and partners, or automatically detected by monitoring tools.

The incident management process aims to minimize the negative impact of incidents by restoring normal service operations as quickly as possible.

Normal service operation is defined as an operational state where services and CIs are performing within agreed service and operational levels.

Incident management is responsible for managing the lifecycle of all incidents. A temporary workaround to restore service is all that is required in many cases to complete the process.

ServiceNow focuses on using automation and information to speed the path to resolution.

Incident Management relies heavily on:

- The Configuration Management process for incident assignment and impact analysis.
- The Problem Management process for investigating incident root causes and providing workarounds and permanent resolutions.
- The Change Management process for controlling changes is needed to resolve incidents and minimize incidents caused by change.

## Process scope

The scope of Incident Management includes:

- The identification and diagnosis of incidents through Event Management, Technical identification, and user-reported
- The resolution of all incidents as quickly as possible using:
    - Defined resolution processes
    - Problem Management identified Known Errors (workarounds)
    - Identifying new resolution activities through diagnosis.
- Identifying incidents and groups of incidents that require further analysis in the Problem Management process to eliminate or reduce resolution time.

## Process objectives

The objectives of Incident Management are to:

- Ensure standard methods and procedures are used to enable efficient, prompt incident response, analysis, documentation, management, and reporting.
- Increase visibility and communication of incidents to business and support staff.
- Enhance the business perception of IT through a professional approach to quickly resolve and communicate incidents when they occur.
- Align Incident Management activities and priorities with the business.
- Maintain user satisfaction with the quality of the IT service.

## Roles and responsibilities

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Caller |
| Description | The Caller is the individual impacted by degradation to a service or someone who has discovered an impact/potential impact on a service. This could be a member of an operational support team. Alternatively, if the issue has been discovered automatically through an event monitoring system, then the Caller may be captured against that system. |
| Responsibility | Bringing incidents to the attention of the Service Desk<br>Participating in the implementation of a solution or workaround<br>Confirming successful resolution |
| ServiceNow Role | No role is required in ServiceNow for this; however, a login will be needed. |

| Role Name | Service Desk Agent (1st Line) |
| --- | --- |
| Description | The Service Desk Agent (SDA) is the front line or face of the Technology organization. They will be the people the rest of the organization interacts with most commonly, and this will typically be when users are experiencing some sort of technology related issue. The goal of the SDA is to deal with as many incidents as possible at the point of receiving the incident. This is the first call or initial contact resolution. Ideally, they want to solve the Caller's issue immediately without having to involve other support teams and without the Caller having to contact them a second time.<br>Even if the issue cannot be dealt with by the SDA, many organizations will keep ownership and communication of the incident with the SDA even though others may be providing the actual resolution.<br>Since the SDA is expected to resolve incidents, they need a broad range of knowledge across all technical services. They may be considered a ‘jack of all trades, master of none.’ This means they need access to information to help with their diagnosis, as they will have limited knowledge on each subject. They must at least try to determine a good line of investigation to pass the incident to the correct IT Support team for further diagnosis. |
| Responsibility | Recording, ownership, monitoring, tracking, and communication about incidents<br>Investigating and diagnosing incidents<br>Providing resolutions and workarounds from standard operating procedures and existing known errors<br>Escalating incidents to IT support<br>Communicating with the caller<br>The Service Desk Agent is engaged by setting up the Assignment Group field to the Service Desk group and the Assigned to field to the individual SDA. |
| ServiceNow Role | Service Desk Agents will require the sn\_service\_desk\_agent role |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | IT Support Teams (2nd / 3rd Line) |
| Description | If a Service Desk Agent cannot resolve an incident on their own, they must pass responsibility to someone else with more knowledge and experience. Organizations will differ in how they structure their support teams. However, a common approach would be to have 2nd line support teams within the Service Desk reporting structure who specialize in particular services and would be considered the Subject Matter Experts (SMEs) for these services. Escalating to the 2nd line would keep the incident within the Service Desk.<br>3rd line support is typically the operational team responsible for the service. For example, Database Support, Network Support, Application Development, etc. These are the teams whose primary focus is delivering and maintaining that service.<br>4th line support may not need to exist in many organizations, but this could be where an external vendor supplies the service, and all internal support teams have failed to resolve the issue. The incident now needs to be escalated outside of the organization.<br>The higher the line of support the more knowledge and experience they should have on the specific service in question, and the less general knowledge they will have across all services. |
| Responsibility | - Investigating and diagnosing incidents escalated from the Service Desk<br>- Developing workarounds<br>- Resolving and recovery of assigned incidents<br>- Creating incidents after detecting a service failure or quality degradation or a situation that may result in one<br>The IT Support Team is engaged by changing the Assignment Group field to the support group in question and the Assigned field to the individual support staff. |
| ServiceNow Role | SMEs should use sn\_incident\_read and sn\_incident\_write roles. The itil role may be used but grants broader CMDB/CI write access that may not be appropriate for all. |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Incident Admin |
| Description | The incident management process owner can configure all of the incident process that do not require the System Admin to do so |
| Responsibility | - Configures all Incident Management features |
| ServiceNow Role | The sn\_incident\_admin role is required for incident administration. |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Incident Management Process Owner |
| Description | The Incident Management Process Owner’s primary objective is to own and maintain the Incident Management process. The role of the Process Owner is usually a senior manager with the ability and authority to ensure the process is rolled out and used by all stakeholders. |
| Responsibility | - Defining the overall mission of the process<br>- Establishing and communicating the process mission, goals, and objectives to all stakeholders<br>- Documenting and maintaining the process and procedures<br>- Resolving any cross-functional (departmental) issues<br>- Ensuring proper staffing and training for execution<br>- Directing the Incident Management roles<br>- Ensuring consistent execution of the process across the organization<br>- Monitoring, measuring, and reporting on the effectiveness of the process to senior management<br>- Continually improving the process |
| ServiceNow Role | The business\_stakeholder role can be used for incident process management. |

See the [ITSM Roles plugin](https://docs.servicenow.com/csh?topicname=req-itsm-roles-inci-mgmt.html&version=latest) to provide more granular roles across ITSM applications as well as within them. Note: OOB, the ITIL role allows users to modify the CMDB/CI, which may not be desirable.

## Granular Admin Roles

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Major Incident Admin |
| Description | Granular admin role for Major Incident Management configuration. |
| Responsibility | Configure all Major Incident Management features including major incident properties and trigger rules. |
| ServiceNow Role | sn\_mim\_admin |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Task Communications Admin |
| Description | Granular admin role for Task Communications Management configuration. |
| Responsibility | Configure all Task Communications Management features including communication plans and tasks. |
| ServiceNow Role | sn\_tcm\_admin |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Incident Communications Management Admin |
| Description | Granular admin role for Incident Communications Management configuration. |
| Responsibility | Configure all Incident Communications Management features including creating, editing, or canceling incident communication plans and tasks, managing contact information, and administrating all Incident Communications Management capabilities. |
| ServiceNow Role | sn\_iam\_admin |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Contact Management Admin |
| Description | Granular admin role for Contact Management configuration. |
| Responsibility | Configure all Contact Management features including creating and editing contact definitions, contact responsibilities, configuration of MI users, recipient lists, and groups. |
| ServiceNow Role | sn\_contact\_admin |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Task Outage Admin |
| Description | Granular admin role for Task Outage configuration. |
| Responsibility | Configure all Task Outage features including the mapping between the Task \[task\] table and the Outage \[cmdb\_ci\_outage\] table. |
| ServiceNow Role | sn\_task\_outage\_admin |

### Groups

The assignment group and the selected ‘assigned to’ are responsible for working on the task.

| Column 1 | Column 2 |
| --- | --- |
| Group Name | Service Desk Group(s) (1st line) |
| Responsibility | - Recording, ownership, monitoring, tracking, and communication about incidents<br>- Investigating and diagnosing incidents<br>- Providing resolutions and workarounds from standard operating procedures and existing known errors<br>- Escalating incidents to incident support<br>- Closing of incidents |
| ServiceNow Role | itil |

| Column 1 | Column 2 |
| --- | --- |
| Group Name | IT Support Team (2nd/3rd line) |
| Responsibility | - Investigating and diagnosing incidents escalated from the service desk<br>- Developing workarounds<br>- Resolving and recovery of assigned incidents<br>- Creating incidents after detecting a service failure or quality degradation or a situation that may result in one |
| ServiceNow Role | itil |

- Some examples of assignment groups are:
- Service Desk
- Network Administrators
- Server Administrators
- Database Administrators
- Application Developers

These groups can also have a hierarchical structure

When defining groups, there are some leading practices to be considered:

1. Define group types
1. Align on group naming conventions
1. Establish group structure and framework
1. Create persona groups
1. Assign roles to groups, add users to groups
1. Streamline group creation and management
1. Create a group management dashboard

See [User and Group Management - Leading Practices](https://nowlearning.servicenow.com/nowcreate?id=nc_asset&asset_id=23f56af6473cf19490542034846d43ff) for further detail

## How incidents are initiated

| Column 1 | Column 2 |
| --- | --- |
| Channel | Description |
| Directly in ServiceNow | The Service Desk Agent can create the incident directly because of a phone call or email from a user. A member of IT Support can raise an incident when they discover evidence of one. |
| Chat | Via a chat tool or virtual agent capabilities |
| Self Service | End users can make use of the portal to create a ticket directly. This would use a record producer to generate an incident record rather than exposing the full incident form to users who would not understand most of it. |
| Automatically via Integrations | Incidents can be automatically generated via external systems such as event monitoring. |
| Support Chat | A Service Agent can generate incidents using chat conversations with a user. The chat log is included in the Incident Activity Log, and a link to the Incident and the user is set. |
| Inbound Email | Inbound emails can generate incident records. ServiceNow does not recommend this method since it cannot reliably collect enough information from the email to create an incident that can be worked on. |
| Walk Up Experience | An incident can be created using the Walk-Up interface when a user visits the onsite IT support location |

### Implementation Insight:

Email is sometimes the predominant entry point for incidents, although it is also the most inconvenient from a functionality point of view. The only attributes you can gather from email are the user (sender), the short description (subject), and the description (email body). But what about the service, Configuration Item, or urgency? Important mandatory fields are left out, and often, the agent needs further information, which results in more work for the agents.

It is recommended that email be eliminated as an entry channel and other smart ways to submit incidents be introduced. There may be a short period of resistance, but the process will become more efficient in the end. You can do this by:

- Facilitate organizational change management to help with the change and bring the stakeholders on board.
- Make the process as efficient as possible (e.g., for a call to the Service Desk, integrate a CTI solution so that the agent does not need to fill out the caller's information).
- Set up an easy interface in the service portal, asking the user only for information that can be easily provided and only the most essential information.
- Provide a mobile interface to allow users to submit an Incident quickly and smartly.

## Incident management lifecycle

States in any ServiceNow application serve a specific purpose. They are designed to clarify where a particular record currently resides in a process and display progress. States should represent a unique phase in a process where a specific set of related activities are grouped and designed to achieve a particular outcome to move to the next phase of the process. For example, in Incident Management, the Resolved state should contain all activities required to understand what was done to resolve the incident. It would not be expected that resolution explanation activities would occur during other states. Out-of-the-box Incident Management has the following state model:

- New
- In Progress
- On Hold
- Resolved
- Closed
- Canceled

### Incident State Model

Cancelling an incident does not mean that it has been solved, but to clean up incidents that should not have been opened.

### Process overview

### State: New

When an incident is first created, it is in the state of New. This is where the incident ticket is opened, and all known information about the symptoms experienced is captured. Capturing sufficient and relevant details at this stage is very important; it will aid in diagnosis if the incident requires escalation. A description of the incident in the caller’s own words should be recorded so that future contact with the caller can be made on their terms. It will be automatically assigned to the Service Desk as the front line to review anything coming into the IT department for action.

The recommended mandatory fields are:

- Caller
- Service
- Service Offering
- Configuration item
- Contact type
- Impact
- Urgency
- Priority – this is automatically populated from the Impact + Urgency fields
- Assignment group
- Short description
- Description
- If the incident is raised through self-service, the end user is only expected to provide limited details. Most of the fields entered by an agent would not be known or understood by the end user. It is recommended that self-service is structured to provide actionable information by the agent. For further information on self-service, see [How to achieve actionable information from a self-service Incident Management record producer](https://www.servicenow.com/community/itsm-articles/how-to-achieve-actionable-information-from-a-self-service/ta-p/2362249).
- Where the incident is raised through email, the quality of the details provided can vary considerably; therefore, email should be considered a last resort channel.

Process Critical Attributes

There are several attributes captured in an incident that drive aspects of the process.

**Establishing Priority**

Incident prioritization typically drives the timeframe associated with handling the incident and the time to resolution. This will impact the Service Level Agreements associated with the incident. Priority is calculated through a combination of Impact and Urgency. Process owners must clearly define the different levels of impact, urgency, and response/restoration timeframes associated with the resulting priorities. This will be used to define SLAs and ensure consistency across the process.

Impact is the effect that an incident has on business. For example, if the incident only impacts a single employee, the impact is low compared to 500,000 paying customers with social media accounts.

| Column 1 | Column 2 |
| --- | --- |
| 1 - Critical | Large number of staff or customer will be affected (threshold tbd)<br>Financial impact of the incident is likely to exceed (threshold tbd) |
| 2 - High | Moderate number of staff or customer will be affected (threshold tbd)<br>Financial impact of the incident is likely to exceed (threshold tbd) and be below (threshold tbd) |
| 3 - Medium | Small number of staff or customer will be affected (threshold tbd)<br>Financial impact of the incident is likely to be less than (threshold tbd) |

Urgency is the extent to which the incident's resolution can bear delay.

| Column 1 | Column 2 |
| --- | --- |
| 1 - Critical | Service is down and no workaround is available<br>Work cannot be complete by staff |
| 2 - High | Service is affected or degraded, though the service is still available and/or a workaround is provided<br>Impact caused by the incident increased considerably over time |
| 3 - Medium | Service, if not affected and available for use<br>Impact caused by the incident marginally increases over time<br>Work that cannot be completed by staff is not time sensitive. |

Priority is generated from urgency and impact according to the following table.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 |
| --- | --- | --- | --- | --- |
|  | Urgency |  |  |  |
|  |  | 1 - High | 2 – Medium | 3 - Low |
| Impact | 1 - High | Priority<br>1 - Critical | Priority<br>2 - High | Priority<br>3 - Medium |
|  | 2 - Medium | Priority<br>2 - High | Priority<br>3 - Medium | Priority<br>4 - Low |
|  | 3 - Low | Priority<br>3 - Medium | Priority<br>4 - Low | Priority<br>4 - Low |

It is possible to automatically establish the priority of the incident based on the CI identified in the incident record. With this technique, the business criticality value of the CI is used to determine the priority of the incident. For example, an online banking service would be considered critical to a financial organization. If this CI is related to the incident, the priority can be automatically set to Critical as a result. This ensures a more accurate and consistent prioritization of incidents, as determining impact and urgency can be subjective.

**Categories**

The Category field is intended to codify the symptoms of what is impacted by the incident. It is not expected that this will uniquely identify the cause of the incident.

Categorization of incidents supports a simple method to determine the team to route incidents to. Furthermore, a report of incidents based on the categorization can help structure the support more efficiently.

Often, too many categories are created. When more categories are offered to the user, the less likely it is they will select the correct one – resulting in inaccurate data. Categorization also needs to be analyzed using auto-assignment.

Common categorization pitfalls

- Making categories too granular – More categories do not mean better data. Agents will categorize incidents incorrectly because they won’t necessarily search for the correct category.
- Adding an “Other” category – If agents cannot find the correct category, they often put it in the “Other” bucket. For example, if 30% of the incidents in the “Other” category are password resets, then “Password Resets” must be a specific category.

Where Business Services/Service Offerings are established, then the value of category/sub-category is significantly reduced. In those cases, Business Services / Service Offerings should be used in preference to category/sub-category to maximize the benefits of the platform and to allow better interaction across the various ITSM processes. By continuing to use categories, the data is limited to the incident management process only and does not provide value beyond that.

**Implementation Insight:**

Some customers remove the ability for agents to select a category or sub-category when business services or service offerings are established.

Examples of Category / Sub-categories that have been used across a range of customers.

| Category | Subcategory |
| --- | --- |
| Access Control | Access to a file/folder/location |
|  | Application Access |
|  | Email Access |
|  | Network/Internet Access |
|  | Remote Access |
|  | Other |
| Data | Authentication |
|  | Backup/Recovery |
|  | Data Integrity |
|  | Database Performance/Sizing |
|  | Visibility/Encryption |
|  | Other |
| Facilities | AC/Heat Fault |
|  | Building Access |
|  | Data Center Access |
|  | Power Fault |
|  | Other |
| Hardware/ Software | Backup/Recovery |
|  | Broken component |
|  | Configuration |
|  | Defect/Error Message |
|  | Performance Issues/Delayed Response |
|  | Virus |
|  | Other |
| Network | DHCP |
|  | DNS |
|  | Hard Wired Connectivity |
|  | IP Conflict |
|  | VPN Connectivity |
|  | Wireless Connectivity |
|  | Other |
| Security | Denial of Service (DoS) |
|  | Improper Usage |
|  | Malicious Code |
|  | Scans/Probes/Attempted Access |
|  | Unauthorized Access |
|  | Other |
| Telephony | Audio Quality |
|  | Broken Component |
|  | Inbound Calls/Dead Air |
|  | Outbound Dialling/Fast Busy |
|  | Other |

### Business Services / Service Offerings &amp; CIs

Using Business Service / Service Offerings &amp; Cis instead of categories is recommended.

Business Service &amp; CI is available across all ITSM processes and, therefore, must be related to an incident to provide true insight into the performance and health of the service.

The CMDB (CI fields) are also used to identify what is impacted by the incident. It offers significantly enhanced data than what could be made available in a choice list such as category/sub-category.

See article [How to configure incident management to align with CSDM; a leading practice guide](https://www.servicenow.com/community/it-service-management-articles/how-to-configure-incident-management-to-align-with-csdm-a/ta-p/2340041).

**Incident Assignment**

The Service Desk Agent may already be aware of the correct group to assign the incident to and, at this point, would reassign it to that group. If an automated assignment is in place, this will also occur here, usually once the Business service or CI is populated. The new assignment group will review the incident in their work list and assign it to an individual to focus on. Once that individual begins working on the incident, they will manually set the state field to In Progress. This will then stop the clock on any response SLAs that may be running as this is responding.

Alternatively, the Agent may need to begin some investigation and triage. They will assign the incident to themselves using the Assigned to field and set the state field to In Progress.

It is mandatory to assign an individual to the incident so that it can move to In Progress. This is so that anyone wanting to get an update/discuss the issue will know who is responsible.

**Implementation Insight:**

Each agent has access to the queue of incidents to be worked on. To help the agent decide which incident needs to be worked on first, it is important to set the correct prioritization rules in the queue, visualize the relative fields, and properly report the incident backlog. Furthermore, idle time should be managed so that incidents are continually processed.

See article: [How to optimize work assignment over time in ServiceNow with 6 out-of-box capabilities](https://www.servicenow.com/community/it-service-management-articles/how-to-optimize-work-assignment-over-time-in-servicenow-with-6/ta-p/2382243)

### State: In Progress

The incident is now actively being worked on. In Progress state covers many activities required to resolve the issue. This will begin with investigation and triaging the Assigned-to individual to establish the cause and/or how to fix it. It is possible to use the Contextual Search feature to display knowledge articles within the incident that match or are like the short description entered. This allows the Assigned individual to easily locate any published information that may help them resolve the issue. They may also refer to similar incidents and problem records.

The individual may reassign the incident to another assignment group or individual if they discover a better-suited group/individual to deal with the issue. This is done by updating the Assignment group and assigned to fields and may involve passing the incident to 2nd or 3rd line subject matter experts. An email notification will be sent to the new assignees to inform them they are now responsible.

The incident can be reassigned multiple times while it is In Progress as different teams may need to be involved. When reassigning an incident, it is mandatory to enter a Work note to explain why the incident is being assigned to the new group or individual and what is expected of them. Reassigning an incident will not reset the SLAs attached to the incident unless the SLA is specifically tracking reassignment only. Therefore, if an SLA only has 1 hour remaining before it will breach and is then reassigned, the new team will still only have 1 hour before the SLA will breach.

Throughout this time, the Work notes field is used to make journal style updates to the incident capturing what actions have been taken and what has been learnt. If an update needs to be provided to the original caller, it can be done using the Additional Comments field.

Agents can respond to callers quickly and consistently using response templates. Base system templates include Need more information and Schedule meeting. A form channel has been added to these templates, enabling agents to access them directly from the incident record, copy the template text to the clipboard, and share it via work notes, comments, or other communication channels such as SMS or email. Response templates can be configured for incident tables in Service Operations Workspace.

When the investigation identifies a fix, the ‘assigned to’ individual will apply the fix to resolve the issue. This may be in the form of a workaround rather than a permanent solution. A change request is raised to apply the fix, and this is related to the incident in the Change Request field. If the incident is purely waiting for the change to be implemented and no other activities are occurring, the State field can be changed to On Hold with an On Hold reason of Awaiting Change.

During investigation, it may be discovered that a change was the cause of the issue. If this is the case, the change in question can be related to the incident using the Caused by Change field.

Once the fix or workaround is applied, the Assigned to individual will test to see if the issue is resolved. If they believe it is, they will change the state field to Resolved or click the Resolve button.

### State: On Hold

The On Hold state indicates where an incident is not yet resolved but is temporarily not being worked while waiting for further action to occur outside of the control of the Assigned to individual.

There is a separate On Hold reason field to determine why the incident is on hold. This is a choice list so that process owners can only include the reasons they determine are legitimate for pausing an incident, guiding the process's users to follow it correctly.

The incident is put into the On Hold state by changing the State field. The On Hold reason field becomes mandatory at this point with the following choices:

- Awaiting Caller
- Awaiting Change
- Awaiting Problem
- Awaiting Vendor

ServiceNow recommends removing the Awaiting Problem from the choices. Resolving an incident should never be dependent on a problem.

The Service Level Management product will use this state heavily since putting something on hold (Awaiting Caller) will typically act as the pause condition for all SLAs.

### State: Resolved

To move the State to Resolved, the Assigned to individual will need to give some further details to explain what the problem was and how it was fixed. The mandatory fields are:

- Resolution code
- Resolution notes

The Resolution codes field is a choice list focused on the nature of the resolution provided, for example, whether a workaround was provided or a permanent fix. They are not intended to explain how the incident was resolved.

Resolution notes are a free text field that describes the issue and how it was resolved. This is deliberately not held as a category or choice list solution. Experience shows that there tends to be many possible codes. These would have to be filtered based on the CI related to the incident. If this filter was not applied, then the resolver would have so many options for the choices would be overwhelming, and the chance of correct data being selected becomes significantly reduced, resulting in the data no longer offering value.

The effort involved in maintaining this level of related data is usually high, and the maintenance costs invariably outweigh the business benefits of being able to report on it.

Requiring codes to track what the issue was and how it was fixed should only be done where there is a clear business benefit to be achieved.

Once the resolution information is provided, the Caller is notified that the Assigned to individual believes they have resolved the issue.

The Caller has 7 days to disagree with this. If they disagree, an email notification will be sent to advise them, providing a link to the incident. In the incident, they will click the Reopen Incident button, which will require them to enter an Additional comment explaining why they believe the incident is unresolved. This will set the State field back to In Progress and clear the Resolution code and notes. The Assigned to individual will receive a notification containing the Additional comments from the Caller.

If the Caller does not contest the resolution, they do not need to take any action. The incident will remain as Resolved for 7 days. After that time, the State field is automatically updated to Closed.

### State: Closed

No activities take place in this state. Should the incident reoccur a new Incident record must be raised. Once an incident is closed, it cannot be reopened.

### State: Canceled

There are very few scenarios where an incident is genuinely canceled. This will only occur when an incident was raised in error, usually prematurely, before realizing there is no real issue.

### Incident Tasks and Parent/Child incidents

Incident tasks are available as part of the overall incident management process. An incident can have multiple incident tasks assigned and created to conduct a specific action or set of actions that must be performed in response to an incident. Incident tasks can help break down the incident management process into smaller, manageable tasks and allow the activities to be assigned to specific groups.

Parent/child incidents refer to a relationship between two or more incidents, where one incident (the parent) is seen as the main or overarching issue, and other incidents (the children) are related to or caused by the parent incident. This relationship can help incident managers understand the relationships between incidents. Within ServiceNow, the resolution of a parent incident can be cascaded to all the child incidents.

The two approaches can be used together or neither deployed. Operational visibility in both cases is important to ensure that the work is done in a timely manner and not obscured by hierarchical relationships.

## Parent and Child Incidents

Where an incident is causing a widespread impact, this will be evident with several records being raised by different Callers for the same issue. Although these incidents are reporting the same thing and might be considered duplicates of each other, it is good to capture each instance where the impact has been experienced so that the size of the impact can be more easily determined.

The downside of having many incidents logged with the same issue is that they must all be updated as the incident is diagnosed and resolved. This can be easily handled by designating one incident as the parent and relating all other incidents to this parent via the Child Incidents related list. When Work notes or Additional comments are added to the parent, they will automatically copy all related child incidents. In addition, when the parent is resolved, the child incidents will also be resolved, and the closure information will be copied over. Incidents are related in this manner using the Parent incident field or Child incidents related list.

## Handling Ad Hoc Questions/Help

Where a caller has an ad hoc question or request for help that does not involve an issue, this may be captured using the Interaction feature. This allows the question to be handled without having to log an incident or create a service request for the purpose.

It is not recommended to create a catalog item in the Service Catalog for this purpose since the structure of requests, requested items, and catalog tasks is over complex for this need. If the process owner does not wish to use the Interaction feature, an incident record is used to capture this interaction. If the Category field is in use, the Inquiry / Help choice should be selected to distinguish this from a true incident. If the Category field is not in use a new field will be required to determine this.

## Incident Escalations

### Functional escalation

Functional escalation involves transferring the incident to another team or individual with the necessary expertise. This type of escalation is primarily based on the technical requirements of the incident.

### Hierarchical escalation

Hierarchical escalation involves moving the incident up the management chain within the organization. This type of escalation is primarily based on the incident's urgency, impact, or visibility rather than its technical requirements.

This can occur when, for example.

- The incident is requested to be resolved in a shorter period of time than the MTTR SLA for that priority
- The incident has exceeded its SLA, and the requirement is to resolve it as soon as possible

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
|  | Functional Escalation | Hierarchical Escalation |
| Reason for Escalation | Technical expertise and capability | Urgency, impact, and visibility |
| When it occurs | Lack of knowledge/resources at the current level | Unresolved incidents, high-impact scenarios |
| Movement | Lateral or vertical (within support groups) | Vertical (up the management chain) |
| Focus | Technical resolution | Management intervention and resource allocation |
| Example | Escalating to a specialized tech team | Escalating to higher management levels |

## Other Processes

### Major Incident Management

A major incident is a high-impact, high-urgency incident that affects many users and deprives the business of one or more crucial services. Major Incident Management is closely related to Incident Management, where Incidents can be prompted to be Major Incidents.

### Change Management

The solution will require work on a service, hardware, or software for many incidents. Conducting this work will require a change record to be raised. This is done by selecting the Create Normal Change or Create Emergency Change option from the context menu.

Emergency changes typically require an incident record to be related to prove that they are urgent enough to bypass the full process and lead times. This can also be done from the change record using the Incidents Fixed by Change related list.

In some cases, a change was implemented that resulted in an incident. An incident record can be created from the originating change record to show the cause and link the chain of events together. This can be done using the Incidents Caused by Change related list.

### Problem Management

Problem Management is the subsequent process for incidents that require further investigation of the root cause. Problem records can be generated directly from the incident record and will copy over key data. This is done using the Create Problem option in the context menu.

Many incidents may be associated with a single problem, and the more incidents there are, the clearer the scale of impact becomes. When the problem was first encountered, the number of associated incidents was low, so it was decided that a permanent fix should not be pursued. However, that decision may be reviewed as the number increases, and the impact widens. Multiple incidents can be added to the problem using the Incidents related list.

If a workaround exists for the problem, it can be logged in the problem record in the Workaround field and automatically pushed to all associated incident records via the Communicate Workaround related link. When a fix or workaround is shared from the problem record, an event is added to the incident record's activity stream as a work note. The event includes a brief description of the provided fix or workaround, along with a link to the problem record.

When a Known Error (KE) article is linked to the problem record, an event is added to the incident record's activity stream as a work note. The event includes the links to the problem record and the KE article.

Once the problem has been fixed, all associated incidents can be automatically closed.

### Configuration Management

The configuration management system underpins all incident management activities. It not only hosts the incident and other service management records but also contains details of the infrastructure vital to efficient call handling.

The CMDB is used within the incident management process by related Configuration Items, including Business Services, to the incident. This allows Dependency Views to display the relationships between the selected CI and upstream and downstream CIs.

### Knowledge Management

Knowledge is a vital part of the incident process. It is available using the Contextual Search feature embedded into the incident record and record producers to display relevant knowledge articles as the incident is created. Contextual Search will use text entered in the short description fields or other text fields to search for close matches in the knowledge base and display these on the screen.

### Service Level Management

Service Level Management defines measurable responses to service disruptions. Incident Management will provide historical data that enables the objective and regular review of service level agreements (SLAs). SLM defines the acceptable levels of service within which Incident Management works, including:

- Incident response times
- Impact definitions
- Target fix times
- Service definitions
- Rules for requesting services

Part of setting up the incident management process is defining and implementing SLAs in the system to monitor the service level and help agents prioritize their work. To set up a full SLA against the service, gather operational, customer, and business metrics. Start with a few essential services to measure, and increase coverage over time.

SLAs must be correctly paused when business is impacted. There might be contracts or agreements already in place for services. It can be difficult to build those up, depending on how detailed they are. It is recommended to pause SLAs only when agents are awaiting feedback or further information from the caller.

See the [Service Level Management – Process Workshop](https://nowlearning.servicenow.com/nowcreate?id=nc_asset&asset_id=77a6dbbf8783061452417445dabb3501&nc_source=copy_asset_link) for more information on the relationship between SLAs and work activities.

### User Experience

Mobile platforms and Virtual technology can positively impact how end users interact with the end-to-end process and how the entire user experience is perceived. Consider which touchpoint can leverage the mobile platform to minimize delays. Tasks such as Create an incident, Details of the incident, and Chat can all be performed on mobile devices. Consider also how the Virtual Agent can be deployed to assist users with common actions and track progress.

Employee Experience Level Agreements (XLA) are becoming more common as employee expectations rise. Products such as Digital End-User Experience (DEX) are specifically designed to help address these expectations.

- A Primary device health link appears in the Related Links section of the incident form. Selecting it launches the DEX device health page for the CI associated with the incident in Service Operations Workspace, giving agents full device metric visibility without leaving the incident context.
- In the Investigation tab, agents can view automated snapshots of the top 10 CPU and memory-consuming processes on the affected device. Snapshots are captured every 30 minutes from the point the incident is created, and a CI is tagged, and can be filtered across different time ranges to identify processes causing device issues.

Note: DEX requires a separate entitlement. The Primary device health link is available only when the selected CI is of type Device (Endpoint), and the DEX agent is installed on that CI.

### Advanced Work Assignment for Incident

Activate the Advanced Work Assignment (AWA) for Incidents plugin (com.snc.incident.awa) to automatically assign work items to agents based on their availability, capacity, and skills. Define work item queues, routing conditions, and AWA's assignment criteria to distribute work items. From the agent inbox, agents can see assignments, set availability, and accept or reject work items.

## Incident Management and CSDM

For guidance on Incident Management and CSDM, see [How to configure incident management to align with CSDM; a leading practice guide](https://www.servicenow.com/community/itsm-articles/how-to-configure-incident-management-to-align-with-csdm-a/ta-p/2340041)

## Process Governance

Key Performance Indicators (KPIs) evaluate the success of a particular activity toward meeting critical success factors. Successfully managing KPIs can be achieved either by repeatedly meeting an objective (maintain) or progressing toward an objective (increase/decrease).

### Outcome-based approach

When considering an outcome-based approach, there are three broad categories:

| Column 1 | Column 2 |
| --- | --- |
| Growth | What measures to track that support the business to grow and expand service |
| Cost | What measures reflect the cost of doing business and the ability to reduce that |
| Revenue | What measures reflect revenue and ability to grow that |

For incidents, the most relevant are those that reflect growth and cost examples of which are given below:

**Growth**

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Outcome | Success Metric | Operational Outcome and Success Metric Description |
| Reduce Disruption from Incidents (Volume) | \# of Incidents Closed | Operational Outcome: Lower incident volume often indicates decreased disruption to end-users. This outcome examines the value of reducing incidents and thus returning productive capacity to end-users.<br>Success Metric: Total number of incidents closed.<br>Desired Metric Trend: A decrease is typically a favorable trend. |
| Reduce Disruption from Incidents (Duration) | Average Time to Close an Incident (elapsed hours) | Operational Outcome: This outcome examines the value of faster incident resolution and, thus, reduces disruption from incidents to the end-user.<br>Success Metric: Avg. elapsed time between created and closed indicates how long the incident disrupted an end-user (we use a 'closed' state for standardization purposes, though technically, a 'resolved' state could be more accurate).<br>Desired Metric Trend: A decrease is a favorable trend. |
| Optimize Contact Channels | % of Incidents Originating from Phone Call | Operational Outcome: Incident support via some channels, like phone calls, requires more effort than self-service, chat, or other channels. This outcome examines the value of reducing the % of opened incidents via phone calls.<br>Success Metric: Percentage of incidents created that originate from a phone call (vs. other contact channels): this is a proxy for call deflection<br>Desired Metric Trend: A decrease is a favorable trend |

**Cost**

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Outcome | Success Metric | Operational Outcome and Success Metric Description |
| Reduce Incident Volume Worked | \# of L1 Incidents Closed | Operational Outcome: This outcome examines the value of lower incident volume translating to less work for IT fulfillers.<br>Success Metric: The total number of incidents resolved at the L1 level.<br>Desired Metric Trend: A decrease is typically a favorable trend. |
|  | \# of L2 Incidents Closed | Operational Outcome: This outcome examines the value of lower escalated incident volume translating to less work for L2+ IT fulfillers.<br>Success Metric: The total number of incidents resolved at L2+ level(s).<br>Desired Metric Trend: A decrease is typically a favorable trend. |
|  | \# L1 agent | This is a required input for the ratio above. |
| Reduce Outage Volume Worked | \# of Unplanned Outages | Operational Outcome: This outcome examines the value of lower outage volume, translating less work for the outage response team.<br>Success Metric: The total number of unplanned outages. If outage volume is unavailable, use accepted Major Incidents (MIs). If MIM is not used, the next best proxy is P1 volume (ideally filtered by the customer for criticality/severity).<br>Desired Metric Trend: A decrease is typically a favorable trend. |
| Reduce Outage Response Effort | Mean time to restore - unplanned outages | Operational Outcome: This outcome examines the value of faster resolution of outages translating to less effort for the outage response team<br>Success Metric: The mean time to restore across all unplanned outages. This metric implies less effort required per outage. This should be open to resolved, ideally for an outage. If not, MI, then filter P1.<br>Desired Metric Trend: A decrease is a favorable trend. |

### Process and Operational KPI’s

When putting process and operational KPIs in place, it is important to identify your objectives, e.g.,

- To ensure incident resolution is happening fast enough?
- To identify slow parts of the process?
- To find teams who are waiting for incidents?
- To have vendors meet their agreed targets?
- To alert management to breached targets?

**Process KPIs**

- Provides information on the effectiveness of the process and the impact of continuous improvement efforts
- Are best represented as trend lines and tracked over time
- Monitored by the Process Owner

| Column 1 | Column 2 |
| --- | --- |
| Item | Purpose |
| Resolved on the first assignment | % Of incidents resolved by the first line or first person to be assigned to the ticket. This helps to understand how well the Service Desk can handle incidents without reassigning to a more costly resource to resolve |
| Resolved within SLA/OLA | % Of incidents resolved within SLA/OLA helps to understand whether the SLA/OLA are unachievable and need a review or whether there is an issue with operational practices |
| Reassignment count | Count of the total number of times the Assignment Group field is changed to understand how quick/easy it is for the incident to get to the right group for resolution |

**Operational Data**

- Provides information on active incidents, giving visibility and oversight.
- Best tracked on a dashboard or homepage.
- Monitored by the Service Desk Teams

| Column 1 | Column 2 |
| --- | --- |
| Item | Purpose |
| Active incidents, by priority | Shows priority distribution of current workload with the ability to drill into detailed records. |
| Active major incidents | Provides high visibility to significant incident events in progress. |
| Active incidents that have breached an SLA | Provides a quick view of incidents that need immediate attention to prevent further degradation of resolution time. |
| Incidents reactivated from caller feedback | Provides a quick view of incidents that need immediate attention to meet resolution target and customer satisfaction. |

### Platform Analytics Solutions

ServiceNow provides a range of Platform Analytics solutions to help analyze and optimize business processes. Details of these can be found in [the docs](https://docs.servicenow.com/bundle/xanadu-now-intelligence/page/use/performance-analytics/concept/c_performanceAnalyticsAndReporting.html).

Performance Analytics provides ITSM Dashboards for a range of applications. Details of these can be found in [the docs](https://docs.servicenow.com/csh?topicname=itsm-dashboards-content-pack.html&version=latest).

The Benchmarks application provides instant visibility into your KPIs and trends and offers comparative insights relative to industry averages and top performers. You can contrast your organization's performance with industry standards, compare it side-by-side with global benchmarks, and implement recommendations for improvement. Details of this can be found in [the docs](https://docs.servicenow.com/csh?topicname=r_Benchmarks.html&version=latest) and [Best Practices](https://mynow.servicenow.com/now/best-practices/assets/success-dashboards-benchmarks-process-workshop-presentation)

ITSM Success Dashboard indicators provide insights to the IT leadership team and process owners, enabling them to measure the performance of their ITSM implementation using the KPIs defined by ServiceNow. Details are available in [the docs](https://docs.servicenow.com/csh?topicname=success-dashboard-indicator-landing.html&version=latest) and [Best Practices.](https://learning.servicenow.com/nowcreate?asset_id=dc229f8f47e646dcca332a81736d43af&id=nc_asset&nc_source=copy_asset_link)

## Process diagrams

The process diagrams in editable format (Visio) can be found on the Best Practices [link.](https://nowlearning.service-now.com/nowcreate?id=nc_asset&asset_id=49aab537db170150a87c2d3d5696195c)

## Process scoping considerations

When scoping the process, a range of considerations should be taken into account. The following are areas to be considered when scoping the process:
