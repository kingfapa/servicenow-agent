# Problem Management - Process Guide

Source: https://mynow.servicenow.com/now/best-practices/assets/problem-management-process-guide

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `52260fa9da19d4acdd995ae0c45bd2d3fb2acd8ae07e2cb3e80729c29f7be4e6`

**Problem Management**

Process Guide

Australia

Updated: August 2026

Asset number: 0001029

## Introduction

This process guide will provide a detailed explanation of how the problem management process is enabled within the ServiceNow platform. It is intended that this process be followed as closely as possible. ServiceNow encourages simple, lean ITSM processes, which are reflected in its out-of-the-box design. Additional functionality can be incorporated into what is offered; however, this should only be in scenarios where a required business outcome is gained that could not be achieved using an out-of-the-box method. Following this approach should also ease upgrade paths and expand the platform's use.

## Principles and Basic Concepts

ITIL 4 defines the key purpose of Problem Management as being “to reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents and managing workarounds and known errors.” ITIL further expands and explains that “Problems cause incidents. They need to be analyzed and investigated so that workarounds and resolutions can be identified, which will, in turn, reduce the number and impact of future incidents.”

Without Problem Management, you have:

- Repeat incidents, both major and minor
- Time is wasted by IT staff in repeatedly repairing the same type of issue.
- Reputational loss because “I’ve had the same issue for weeks, and it keeps happening, and no one fixes it for good.”

Problem management activities are closely related to incident management, and the practices must be designed within the value chain.

Many Problem Management activities rely on the knowledge and experience of staff rather than following detailed procedures. People responsible for diagnosing problems often need the ability to understand complex systems and consider how different failures might have occurred. The overall flow of the problem management process can be summarized as:

You can detect a problem either proactively or reactively.

Proactive problem detection identifies potential problems or issues that could lead to future incidents. You can proactively detect problems by analyzing reporting trends, such as the health of your configuration management database, or by utilizing automated system notifications.

Start by asking service owners, business relationship managers, and support teams about the issues they encounter and the concerns users have. Triaging and logging these as problems will ensure visibility.

The analysis methods outlined in this document can also help identify any common themes.

Reactive problem detection occurs when one or more incidents have occurred, prompting you to investigate the underlying cause of the issue. These incidents may be resolved, and the problem investigation is primarily meant to understand the underlying cause and prevent the incident from recurring. In other cases, the incident can only be resolved by conducting a deeper investigation into the root cause and applying a workaround or a permanent fix.

Problems in ServiceNow move through a basic process that includes these stages:

There are three primary goals of the problem management process.

1. Provide a mechanism to understand the cause and permanently solve incidents that have occurred. These are cases where the incident process may have only identified a temporary solution purely to restore service.
1. Prevent incidents and service impacts from occurring.
1. Minimize the impact of incidents that cannot be prevented.

ServiceNow uses automation and information to speed the path to root cause identification and permanent resolution.

Problem Management relies heavily on the following:

- The CMDB for problem assignment and impact analysis
- The Incident Management process for providing details of individual-related incidents
- The Change Management process for controlling changes is needed to solve problems
- The Knowledge Management process for sharing information about known errors

## Process Scope

The scope of Problem Management includes:

- Identifying and diagnosing problems through Event Management, technical identification, and proactive Problem Management.
- The diagnosis of all problems as quickly as possible using:
  - Problem and error control
  - Event and incident trends
  - Identifying workarounds to reduce the incident duration
  - Identifying and implementing permanent solutions to eliminate recurring incidents recurring

## Process Objectives

The objectives of Problem management are to:

- Determine the root cause of incidents, identify viable workarounds, and drive to permanent solutions that prevent recurrence
- Maintain information about problems, associated workarounds, and permanent solutions
- Communicate information appropriately to reduce and eliminate the number and impact of incidents over time
- Identify and solve problems proactively to improve IT services and prevent potential incidents from occurring
- For further guidance, see the article: [Problem Management and 10 steps to making it successful](https://www.servicenow.com/community/it-service-management-articles/problem-management-and-10-steps-to-making-it-successful/ta-p/2382151)

## Roles and Responsibilities

The Process Owner for Problem Management owns the overall process around problem management. Within Problem Management, the owner of each problem must be designated and will therefore be responsible for resolving it.

There are different approaches to defining the ownership of a problem:

- A dedicated group of process coordinators
- The creator of the problem can be the coordinator

Design the ownership that works for your organization and communicate it within the organization.

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Process Owner |
| Description | The Problem Management Process Owner’s primary objective is to own and maintain the Problem Management process. The Process Owner is typically a senior manager with the ability and authority to ensure the process is implemented and utilized by all stakeholders. |
| Responsibility | - Defining the overall mission of the process<br>- Establishing and communicating the process, mission, goals, and objectives to all stakeholders<br>- Documenting and maintaining the process and procedures<br>- Resolving any cross-functional (departmental) issues<br>- Ensuring proper staffing and training for execution<br>- Ensuring consistent execution of the process across the organization<br>- Monitoring, measuring, and reporting on the effectiveness of the process to senior management<br>- Continually improving the process |
| ServiceNow Role | There is no role in ServiceNow. It is a functional role to support the process |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Problem Coordinator |
| Description | The Problem Coordinator is responsible for resolving or preventing a problem as soon as possible. They must also manage and coordinate all problems through the process. |
| Responsibility | - Assessing problems to ensure they are genuine<br>- Monitoring and controlling the detection, recording, assignment, escalation, and resolution of problems<br>- Coordinating technical and service Subject Matter Experts (SMEs)<br>- Documenting problem information<br>- Publishing workarounds<br>- Publishing known error articles<br>- Coordinating decisions on whether to apply a fix<br>- Deciding whether to accept the risk of not applying a fix<br>- Reviewing problems to check for quality and completeness<br>- Driving the efficiency and effectiveness of the problem management process |
| ServiceNow Role | The problem\_coordinator role is required in ServiceNow |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Problem Manager |
| Description | The Problem Manager is responsible for the overall Problem Management process and can configure Problem Management settings as well as act as a Problem Coordinator |
| Responsibility | - Can configure whether a problem or problem task can be re-opened and, if so, by which roles.<br>- Can configure whether accepting the risk of not fixing this problem moves the problem to resolved (still active) or closed. |
| ServiceNow Role | The problem\_manager role is required in ServiceNow |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Technical Support |
| Description | Technical Support teams assist the Problem Coordinator in investigating problems, identifying, and implementing solutions. |
| Responsibility | - Providing subject matter expertise<br>- Investigating problems<br>- Identifying the root cause of problems<br>- Identifying workarounds, and notifying Service Desk and Technical Support of workaround availability<br>- Publishing known error articles<br>- Identifying technical solutions to eliminate faults<br>- Providing stakeholder communication on active problems<br>- Resolving problems, through Change Management, where applicable |
| ServiceNow Role | The problem\_task\_analyst role is required in ServiceNow. |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Business Stakeholder Role |
| Description | The business stakeholder's role to approve, view, or read records across the organization and view reports. |
| Responsibility | - You can assign this role to any user who is a business stakeholder to review and approve requests only if you have the appropriate entitlement from your organization. This role is added when the Business Stakeholder plugin (com.snc.business\_stakeholder) is installed. |
| ServiceNow Role | This role (business\_stakeholder) is an extended form of an approver role and contains the sn\_incident\_read, sn\_problem\_read, sn\_change\_read, sn\_request\_read, and approver\_user roles. |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Service Desk Agent |
| Responsibility | - Ability to create/update problems on the service desk |
| ServiceNow Role | sn\_service\_desk\_agent user role |

## How problems are initiated

Directly in ServiceNow - A Service Desk Agent, Incident Manager, Problem Coordinator, or other IT user can create a problem directly when they believe they see an underlying issue that is worth investigating.

Directly from an Incident – Incident Managers, Service Desk Analysts, Problem Managers, or other IT Support staff can raise a problem from an incident where they see evidence of a problem based on the incident record/s.

Automatically via Integrations - Problems can be automatically generated via external systems such as vendor integration.

## Problem Management Models

Admin can create custom models for problems and problem tasks to extend their default models without compromising on existing capabilities.

Problem Management models enable you to define:

- States for specific use cases
- State transitions
- State transition conditions

## Problem Management Lifecycle

States in any ServiceNow application serve a specific purpose. They are designed to clarify where a record currently resides in a process and display progress. States should represent a unique phase in a process where a specific set of related activities is grouped and designed to achieve a particular outcome to move to the next phase of the process. Our recommended Problem Management process has the following state model:

- New
- Assess
- Root Cause Analysis
- Fix in Progress
- Resolved
- Closed

### Process Overview

### State: New

When a problem is first created, it is in a state of New. This is where very basic information is added that may suggest a problem exists. All known information about the symptoms experienced is captured, with enough information to warrant an investigation.

The mandatory fields are:

- Problem statement

If other fields, such as Cis, are known at this point, they can still be added and will be automatically added if they are coming from an existing incident record; however, they do not need to be mandatory to progress. Additionally, if the fields in the Assess Dialog Form View dialog are populated, the problem is automatically moved to the Assess state without requiring manual state changes.

Problem Assignment

At the New state, it is necessary to identify the appropriate assignment group to assess the problem in the next phase of the lifecycle. This will need to be a Problem Management group, or if a dedicated function does not exist in the organization, then the group that will perform that function, such as the Service Owner or Incident Management team, these users will require the problem\_coordinator role. This assignment is best achieved by automatically updating the Assignment group field rather than letting the user try to pick the correct group manually, since this approach is prone to error.

At this point, if the assignment group is automatically updated, a member of the group will need to choose an individual Problem Coordinator to take responsibility for the problem on behalf of the group. This is done by populating the Assigned field.

Once the fields are populated, the problem coordinator is expected to click the Assess button. This will move the problem into the lifecycle, where it is considered ‘live’ and something that requires attention.

Each agent has access to the queue of problems to be worked on. To help the agent decide which problem needs to be worked on first, it is essential to set the correct prioritization rules in the queue, visualize the relative fields, and properly report the problem backlog. Furthermore, idle time should be managed to ensure that problems are continually addressed. Problems and problem tasks have a "priority" field to help the agents. Address the issue of idle time when (e.g., after 4 days) and how agents should be reminded to work on open problems or Problem tasks. It is recommended that the list of fields of the problem queue be displayed, including the current ongoing SLA and all other fields that can be useful in the specific context to prioritize the work.

### State: Assess

At the Assess state, the Problem Coordinator primarily assesses the problem to determine whether it is genuine.

The assigned individual (the Problem Coordinator) will now conduct an initial review of the problem, primarily to check that it is real.

- If the Problem Coordinator determines this is a duplicate problem, they will click Mark Duplicate and select the problem this is a duplicate of.
- If the Problem Coordinator recognizes it is not a genuine problem, they will click Cancel and populate a Canceled reason field to explain why the problem is not considered to be genuine and explain why no further investigation is required.
- If the Problem Coordinator is comfortable to proceed with the investigation, they may need to update the Priority, Service, and CI before clicking Confirm.

Establishing Priority

Problem prioritization typically drives the criticality associated with handling the problem and the order in which problems will be focused. Priority is calculated through a combination of Impact and Urgency.

- Impact is the effect that a problem has on a business.
- Urgency is the extent to which the problem’s resolution can bear delay.
- Priority is generated from urgency and impact according to the following table.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 |
| --- | --- | --- | --- | --- |
|  |  | Urgency |  |  |
|  |  | 1 - High | 2 – Medium | 3 - Low |
| Impact | 1 - High | Priority<br>1 - Critical | Priority<br>2 - High | Priority<br>3 - Medium |
|  | 2 - Medium | Priority<br>2 - High | Priority<br>3 - Medium | Priority<br>4 - Low |
|  | 3 - Low | Priority<br>3 - Medium | Priority<br>4 - Low | Priority<br>4 - Low |

It is possible to automatically establish the priority of the problem based on the CI identified in the problem record. With this technique, the business criticality value of the CI is used to determine the priority of the problem. For example, an online banking service would be considered critical to a financial organization. If this CI is related to the problem, the priority can be automatically set to Critical. This ensures a more accurate and consistent problem prioritization, as determining impact and urgency can be subjective. If this automated method is being used, this can occur at the New state when the problem is first raised, as it will be helpful to the Problem Coordinator to see this immediately.

Categorization

Proper problem categorization supports easy classification and correct routing to the right team. Furthermore, reports of problems based on the categorization can help drive business decisions.

The categorization should be meaningful and, if possible, be the same as on the incident. It should be carefully planned and analyzed. Often, too many categories are created. When more categories are offered to the user, the less likely it is they will select the correct one – resulting in inaccurate data.

It is recommended to use a 2-level categorization. The top level of categorization should be the (business) services. The next level should be the Affected CI – where a CMDB is/will be in place.

In cases without a CMDB, the categories can be used. It is not recommended to use subcategories.

The categorization's lowest level should determine the auto assignment's support group.

Services and CIs

The Service and CI fields are used to identify what is being impacted by the problem. These fields use CMDB data, also used across other ITSM processes, creating a valuable link and traceability, particularly for services. This also enables the use of the Dependency Views feature, which displays a relationship map from the service/CI in question to other related CMDB components. It will also display any ongoing incidents or changes that may exist, aiding in root cause analysis.

If the Agile Development application is used, existing defects should be searched for possible causes or relationships to the problem.

Once this data has been entered, the Problem Coordinator will click "Confirm" to proceed to the Root Cause Analysis state.

### State: Root Cause Analysis

The Problem Coordinator may need to engage one or more technical support teams to investigate and potentially resolve the issue. This is achieved using Problem Tasks.

Problem Tasks

The parent problem record remains assigned to the Problem Coordinator throughout the entire process. The Problem Coordinator creates and assigns individual tasks to the various technical support teams to aid in the investigation and diagnosis of issues. Each team will capture their investigation and discoveries in their tasks, and the Problem Coordinator will review and coordinate them all. There are two types of problem tasks. Root Cause Analysis and General. The RCA type should be selected for specific tasks required to investigate the root cause, and should be created by the Problem Coordinator at this point.

During the Root Cause Analysis state, four main activities are intended to occur:

1. Discover a workaround (if possible); the Problem Coordinator should enter it into the Workaround field and communicate it to all open related incidents using the Communicate Workaround related link. This populates the text from the Workaround field into the Activity Log of all related open incidents, explaining that it is a workaround from the problem record.
1. Discover the root cause and document it is using the Cause notes field on the problem. If the Problem Coordinator needs help to discover the root cause, they can assign a Root Cause Analysis problem task to the relevant team, who will attempt to document the cause code, cause notes, proposed a fix, and provide a workaround to the problem task.
1. Discover a permanent fix for the problem to prevent it from happening in the future, enter it into the Fix notes field, and communicate it to all related incidents (incidents must be in an On Hold state with an On hold reason of Awaiting Problem) using the Communicate Fix related link. As with the root cause, if the Problem Coordinator needs help to discover a permanent fix, they can use a problem task to gather that information.
1. As it may take time to implement a permanent fix, it can be helpful to communicate that this problem is known about and is currently being addressed, which can help mitigate incidents. The Problem Coordinator should create and publish a Known Error knowledge article. Known Error articles appear when an end user attempts to create an Incident via the Portal. Click the Create Known Error article related link to create a Known Error article from a problem, which creates a link between the two records displayed in the Primary Known Error article on the problem record. The Problem statement, Description, Workaround, and Cause notes are copied when creating a Known Error article. The Known Error article will be in the draft state and can then be published. If it is not deemed necessary to publish the known error in the Knowledge Base, Service Desk Analysts and other Technical Support users can simply search for all problems to find these and use the information as needed. Most commonly, this will be used by the Service Desk when trying to resolve an incident, find a workaround, or recognize a pattern of similar incidents.

These activities can all happen in parallel and may be discovered at different times through Root Cause Analysis. It is possible that none of these have been discovered, including some or all four.

If the root cause and a permanent fix are discovered, the problem can be moved to the Fix in Progress state using the Fix button. If a fix cannot be discovered or implemented, the Problem Coordinator can use the Accept Risk button and provide a reason for accepting the risk of not fixing this problem for now.

### State: Fix in Progress

The ' Fix in Progress' state represents a problem that has been investigated and now requires a fix. It is mandatory to enter Cause notes and Fix notes to move the Problem from Root Cause Analysis to Fix in Progress.

The Problem Coordinator can create or relate to one or more Change Requests to show a clear path to resolution.

Once the change(s) are implemented and the problem is resolved, the St is updated to Resolved using the Resolve button.

Risk Accepted

From the Root Cause Analysis or Fix in Progress states, the Problem Coordinator can accept the risk of not fixing the problem for now:

- Due to cost implications, the business may determine it is not worth the cost of fixing
- A fix cannot be determined

The resolution code is set to Risk Accepted.

Risk Accepted problems in these situations can be reviewed by the Problem Coordinator at appropriate intervals. The coordinator determines whether the impact has increased or the situation has changed to the point where either the problem will be resolved or is no longer required due to some other change that has occurred, and resolves it. The Problem Coordinator can then reanalyze the problem so that the problem process can be worked through to find a solution.

The out-of-the-box default is that Risk Accepted problems are set to Closed because there is currently no work to do on the problem at that time. You can easily see the list of Risk Accepted problems, whether active or closed. The overall concept is that a problem is only active if work needs to be done on it at present.

It is recommended that Risk Accepted problems should be set to Resolved and can remain in Resolved indefinitely. It is essential to note that this is a crucial distinction between Incident and Problem Management. Incident Management is concerned with restoring service as quickly as possible, using all available means. Problem Management is concerned with permanently resolving the issue and ensuring it will not reoccur - therefore, it is acceptable for this to take as much time as required. There should be no driver to close out unresolved problems because they will not be fixed at that time, and are sitting in a list of active problems.

### State: Resolved

Once the problem has been moved to a Resolved state, the Assigned individual must populate or update the Fix notes field with text to describe precisely what has been done to solve the issue.

At the Resolved state, it is also possible for an organization to conduct a review of the problem if its process requires it. Additional fields can be added here to capture that information. Alternatively, problem tasks can be assigned out by the Problem Coordinator as needed.

A set period can also be observed before setting the problem to a Closed state to confirm that the known error has been solved. If evidence suggests that the issue persists, the state can be set back to Root Cause Analysis using the Re-analyze button. The process can then be worked through again to continue to find the solution.

If the problem is confidently solved, the Assigned individual will close the problem using the Complete button.

### State: Closed

At the Closed state, several Resolution codes are displayed. These are automatically determined by specific actions that occurred during the process:

- Duplicate: The problem was marked as a duplicate of another problem. Any related incidents and tasks will be moved over to the problem of which this one is a duplicate. This is configurable in the problem properties.
- Canceled: The problem was canceled. There are very few scenarios where a problem is genuinely canceled. This will only occur when a problem was raised in error, usually prematurely, before realizing there is no real problem.
- Fix Applied: A permanent solution was implemented, and the issue was resolved.
- Risk Accepted: The problem has not been resolved, but it is accepted that the solution will not be applied now. If that decision changes, the problem can revert.

The problem management properties determine whether a closed problem can be re-analyzed. For example, after the fix was applied, additional incidents were added to this problem. Set the role to Nobody if you do not want to be able to re-analyze the problem. Then, if the problem reoccurs, create a new problem ticket and set the “Origin task” field to refer to this problem so you can trace it.

## Other Processes

### Incident Management

Most problem records are triggered in reaction to one or more incidents. Incident history helps identify trends or potential weaknesses as part of proactive problem management.

Incident records that are related to problem records that are pending resolution are automatically updated when a problem is resolved or closed as Risk Accepted

San Diego update:

- New property has been introduced in the San Diego release so Problem Coordinators can relate any incidents, including those closed to a Problem, so that they can show the true scope of the issue
- File attachments, attached knowledge, and workarounds can also be copied over from an incident to a problem record if the corresponding property is enabled.

### Change Management

For problems, implementing the workaround or the permanent solution will require work on the service, hardware, or software. Conducting this work will require a change record to be raised. This is done by selecting the Create Normal Change or Create Emergency Change option in the context menu.

Emergency changes typically require an incident record to be related to prove that they are urgent enough to bypass the entire process and lead times.

### Configuration Management

The configuration management system underpins all records and activities related to any CI. It contains details of the infrastructure vital to services, CIs, and their relationships.

The CMDB is used within the problem management process by relating Configuration Items, including Services, to the problem. This allows Dependency Views to display the relationship between the selected CI and other CIs related up and downstream.

### Knowledge Management

Knowledge is a vital part of the problem-solving process. Known errors are documented and published in the knowledge base, including workaround information that allows end users to access relevant knowledge articles and, if necessary, utilize workaround solutions to assist themselves while the issue is being resolved.

### User Experience

Mobile platforms and Virtual technology can positively impact how end users interact with the end-to-end process and, ultimately, how the entire user experience is perceived. Consider which touch point can leverage the mobile platform to minimize delays. Tasks such as chat can all be performed on mobile devices. Consider also how a Virtual agent can be deployed to assist users in common actions and tracking progress.

## Process Governance

### Measurement

Key Performance Indicators (KPIs) evaluate the success of a particular activity toward meeting the critical success factors. Successfully managing KPIs can be achieved either by repeatedly meeting an objective (maintaining) or making progress toward an objective (increasing or decreasing). The Benchmarks feature provides instant visibility into your key performance indicators (KPIs) and trends, as well as comparative insights relative to industry averages of your peers. You can contrast your organization's performance with recognized industry standards and view a side-by-side comparison of performance with global benchmarks.

When creating KPIs or metrics for problem management, the key point to note is not to be driven by the same measurements used for incident management. With incidents, the purpose of the process is to restore service as quickly as possible using whatever means are available. Therefore, the speed of resolution is a key measurement for this process. Problem management aims to understand the underlying cause of issues and permanently resolve them, regardless of the time it takes or the feasibility of the solution. Therefore, in problem management, the resolution speed should not be measured. This would drive the wrong behavior for the process and focus on closing records rather than finding the permanent fix. Process Owners need to feel comfortable with problem records potentially remaining open for months or even years.

### Metrics

Process KPIs

- Provide information on the effectiveness of the process and the impact of continuous improvement efforts.
- Are best represented as trend lines and tracked over time
- Monitored by the Process Owner

| Column 1 | Column 2 |
| --- | --- |
| Item | Purpose |
| Mean time to first respond to problems, by priority | Measure of how well response SLAs are achieved |
| % of problems with a root cause identified for the failure | Measure the effectiveness of problem management in defining the root cause |
| % of problem with workaround defined | Measure the effectiveness of problem management in defining and communicating workarounds |
| Percentage of incidents resolved by fixing known errors | Measures the effectiveness of problem management in supporting the timely resolution of incidents |

Operational Data

| Column 1 | Column 2 |
| --- | --- |
| Item | Purpose |
| Problems ready to be assessed | Shows all problems that require a Problem Coordinator to assess them |
| Number of active problems that have missed target response times | Highlights where there may be a process issue in assessing new problems |
| Aged list of backlogged problems | Provides visibility to unassigned work |
| Risk Accepted problems with new incidents | Highlights where a risk accepted problem may need to be reviewed for further work |

### Platform Analytics Solutions

ServiceNow provides a range of Platform Analytics solutions to help analyze and optimize business processes. Details of these can be found in the [docs](https://docs.servicenow.com/bundle/xanadu-now-intelligence/page/use/performance-analytics/concept/c_performanceAnalyticsAndReporting.html).

Performance Analytics offers ITSM Dashboards for various applications. Details of these can be found in the [docs](https://docs.servicenow.com/csh?topicname=itsm-dashboards-content-pack.html&version=latest).

The Benchmarks application provides instant visibility into your KPIs and trends, offering comparative insights relative to industry averages and top performers. You can compare your organization's performance with industry standards, assess it against global benchmarks, and implement recommendations for improvement. Details of this can be found in the [docs](https://docs.servicenow.com/csh?topicname=r_Benchmarks.html&version=latest) and [Best Practices](https://nowlearning.servicenow.com/nowcreate?id=nc_asset&asset_id=dc229f8f47e646dcca332a81736d43af&nc_source=copy_asset_link).

ITSM Success Dashboard indicators provide insights to the IT leadership team and process owners, enabling them to measure the performance of their ITSM implementation using the KPIs defined by ServiceNow. Details of this can be found in the [docs](https://docs.servicenow.com/csh?topicname=success-dashboard-indicator-landing.html&version=latest) and [Best Practices](https://nowlearning.servicenow.com/nowcreate?id=nc_asset&asset_id=dc229f8f47e646dcca332a81736d43af&nc_source=copy_asset_link).

Performance Analytics Dashboard Examples

Performance Analytics Problem Management Dashboards provide in-depth trend analysis. These can be enabled as an ITSM Professional licensed user.

| Column 1 | Column 2 |
| --- | --- |
| Problem Overview | Open problems by priority<br>Basic indicators (number of open problems, number of closed problems, number of new problems, problem backlog growth)<br>New problems by priority |
| Problem Open | Open problems by priority<br>Average age of open problems<br>Average age of open problems by Priority<br>Problem backlog growth |
| Problem New | % of new critical problems<br>New problems by Priority |
| Problem Closed | Number of closed problems<br>Average close time of problems<br>Closed problems by Priority<br>Average close time of problems by Priority |

| Column 1 | Column 2 |
| --- | --- |
|  | Problem Overview Tab |
|  | Problem Open Tab |
|  | Problem New Tab |
|  | Problem Closed Tab |

## Process Diagrams

The process diagrams in editable format (Vision) can be found on the Best Practices link.

## Process Scoping Considerations

When scoping the process, a range of considerations should be taken into account. The following are areas to be considered when scoping the process:
