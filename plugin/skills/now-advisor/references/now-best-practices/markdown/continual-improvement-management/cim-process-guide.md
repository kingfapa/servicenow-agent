# Continual Improvement Management - Process Guide

Source: https://mynow.servicenow.com/now/best-practices/assets/continual-improvement-management-process-guide

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `2d8d28f1d5d671b2eb72a73ba5a3d5c9b7bedb817066e1bd63c951496b8d3eb7`

**Continual Improvement Management**

Process Guide

Australia

Updated: August 2026

Asset number: 0001228

## Introduction

This process guide will explain how the Continual Improvement Management (CIM) process is enabled within the ServiceNow platform. It is intended that this process be followed as closely as possible. ServiceNow encourages simple, lean processes, which are reflected in the out-of-the-box design. Additional functionality can be incorporated into what is offered; however, this should only be done in scenarios where a required business outcome is achieved that could not be attained using an out-of-the-box method. Following this approach should also ease upgrade paths and expand the platform's use.

## Principles and Basic Concepts

An improvement initiative aims to enhance services, processes, personnel, and technology. The initiative is identified through service reviews, process evaluations, insights from analytics, company strategy, or an improvement idea submitted by individuals within the organization. An improvement initiative can be:

- An idea or demand record that is an improvement and should be implemented with a lightweight CIM framework
- An initiative submitted from other records on ServiceNow, such as a problem, service management, or vendor management record
- The result of data insights or post review (for example, an initiative to improve a poorly performing KPI from Performance Analytics (PA)or Platform Analytics Reporting, an initiative from survey results to improve CSAT, or from post-review discussions.

Continual improvement (or Continuous Improvement) is an ongoing improvement that happens in stages. It is a long-term approach to improve services, processes, products, and functions. This tested method occurs gradually and aims to make small incremental changes over time. Continual improvement seeks to modify and enhance business services or processes to enhance efficiency and reduce costs.

The Improvement Register is a central table where all improvement opportunities and related tasks are recorded.

An Improvement KPI is a PA indicator that tracks the progress on a trend chart to set measurable goals to quantify the improvement achieved.

A Strategic Alignment is achieved by linking improvement initiatives to strategic goals.

ServiceNow focuses on using automation and information to speed up the path to proactively identifying new improvement opportunities, determining the root cause, and tracking business value.

Full functionality of CIM relies on:

- Performance Analytics for finding new improvements and tracking improvements in initiatives
- The Coaching module, which provides in-process coaching to support agents and employees to increase their performance and productivity
- The Innovation Portal, which allows everyone in the company to submit their improvement ideas via the Service Portal

## Process Scope

The continuous improvement process is a cycle of four steps revolving around opportunities for improvement:

- Identify improvement ideas
- Plan and implement those ideas
- Measure the impact using KPIs
- Share the value achieved and repeat

## Process Objectives

The objectives of CIM are to:

- Proactively drive continuous optimization and improvements across services, processes, people, and technology to increase business efficiency, innovation, and competitive advantage.
- Easily identify new improvement opportunities across IT services and processes. Bring all improvements into one place under the improvement register, where they can be reviewed and prioritized in a structured way.
- Engage more people for a more significant impact. Enable everyone in the organization to submit their improvement ideas via innovation management or directly to the CIM register, while providing full transparency and visibility to make employees feel that their contributions are making an impact.
- Enhance integration with other apps and products to capture improvement opportunities with a single click.
- Align improvement initiatives to strategic goals and set SMART targets using KPIs for continuous improvement tracking.
- Measure progress and capture the business value in alignment with strategic priorities.
- CIM allows you to connect Enterprise goals through Business Unit / Team goals. Through to Improvement goals and finally to milestones.
- Often, CIM is used for bottom-up improvements rather than running large programs, such as those managed by Strategic Portfolio Management.

## Roles and Responsibilities

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Executive Sponsor |
| Description | The Executive Sponsor’s primary objective is to champion the project, including marketing it throughout the organization to ensure capacity, funding, and priority. The role of Executive Sponsor is typically held by a C-level executive in charge of the Business Unit that funds the project. |
| Responsibility | - Describing the business vision and outcomes to be delivered<br>- Partnering with the Platform support team to ensure that team and platform capabilities are aligned with the vision and strategy<br>- Leading and actively participating in governance meetings and activities to communicate the executive vision, alignment with the enterprise strategies, and assurance of execution of that vision<br>- Acting as the executive point of approval authority and the final point of escalation for all decisions and policies that govern the ServiceNow platform<br>- Removing barriers impacting a successful project<br>- Setting guiding principles and success criteria for the project<br>- Managing the ServiceNow budget and coordinating budget request prioritization<br>- Outlining any cost/benefit analysis and needs assessments<br>- Reviewing engagement status reports<br>- Providing agreement to exit each stage<br>- Providing agreement to complete the project |
| ServiceNow Role | No specific ServiceNow roles |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Process Owner (also Improvement Manager) |
| Description | The CIM Process Owner’s primary objective is to own and maintain the CIM process. The Process Owner is typically a senior manager with the ability and authority to ensure the process is implemented and utilized by all stakeholders. |
| Responsibility | - Defining the overall mission of the process<br>- Establishing and communicating the process mission, goals, and objectives to all stakeholders<br>- Hosting continual improvement planning and prioritization meetings<br>- Documenting and maintaining the process and procedures<br>- Resolving any cross-functional departmental issues<br>- Ensuring proper staffing and training for execution<br>- Ensuring consistent execution of the process across the organization<br>- Monitoring, measuring, and reporting on the effectiveness of the process to senior management<br>- Continually improving the CIM process |
| ServiceNow Role | sn\_cim\_improvement\_manager |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Improvement Coordinator |
| Description | The Improvement Coordinator coordinates improvements within their area of expertise at the process or service level. In a standard organization structure, you will have multiple ITSM process owners (e.g., Problem Process Owner, Change Process Owner), and they can be assigned the coordinator role to manage improvements in their respective process areas. |
| Responsibility | - Coordinating improvements within their area of service or process<br>- Identifying a granular set of tasks that are required for an improvement initiative<br>- Assigning improvement initiative tasks to teams<br>- Monitoring and controlling the assignment and suggesting alternate options if improvement is not on track<br>- Coordinating technical and service Subject Matter Experts (SMEs)<br>- Reviewing initiatives to check for quality and completeness<br>- Driving the efficiency and effectiveness of the CIM process |
| ServiceNow Role | sn\_cim\_improvement\_coordinator |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Improvement Requestor |
| Description | The Improvement Requestor is responsible for submitting improvement initiatives to the CIM application. Anyone in the organization who interacts with processes (e.g., IT Staff, Manager, Analysts) and has insights into data and process bottlenecks should be assigned as an improvement requestor. |
| Responsibility | - Identifying and submitting new improvement initiatives<br>- Providing additional input and data as requested by the Improvement Manager or Improvement Coordinator |
| ServiceNow Role | sn\_cim\_improvement\_requestor role is required in ServiceNow. All users with ITIL roles also inherit this role out-of-the-box. |

Additional roles are granted the improvement requester role as applications (such as SPM) are activated for use with CIM. Reference: [CIM Roles](https://docs.servicenow.com/csh?topicname=cim-roles.html&version=latest)

## How improvements are initiated

**Directly in ServiceNow** - A Service Desk Agent, IT Manager, Analyst, or other user with the Improvement Requestor role can create an improvement initiative directly when they identify a process bottleneck or inefficiency that needs improvement.

Additionally, employees can use the Idea Portal application to submit their ideas via the Service Portal. The Idea Portal allows employees to create and vote on product, feature, change, or enhancement ideas. The Idea Manager can convert an idea record into a CIM initiative record instead of using demand or projects.

**Directly from a task** – Anyone with the improvement requestor role can create an improvement initiative from a Major Incident, Problem, Services under SPM, Survey result, Idea, Demand, Project, CMDB health, GRC audit review, Performance Analytics by clicking the “create improvement initiative” button available in the form or on a dashboard. This create action can be easily added to other task or non-task tables to provide integration with different parts of the ServiceNow platform.

**Automatically via** **i****ntegrations** - Improvement initiatives can be automatically generated through external system integrations.

## CIM Lifecycle

States in any ServiceNow application serve a specific purpose. They are designed to clarify the current location of a record in a specific process and display progress. States should represent a unique phase in a process where a specific set of related activities are grouped and designed to achieve a particular outcome to move to the next phase of the process. Our recommended CIM process has the following state model:

- New
- Accepted
- Assess
- Approved
- In Progress
- On Hold
- Review
- Closed
- Cancelled (Added to all states per community feedback/request)

### Process Overview

### State: New

When an Improvement initiative is created, it is in a state of New. This is where basic information is added, like a description and a business justification for the request.

The mandatory fields are:

- Short Description
- Business Justification

The Business Service and Business Process fields are used to identify the associated area and to create reports based on IT Services and Processes. These fields will be automatically populated if they come from an existing Service or Service offering record; however, they do not need to be mandatory to progress.

Accept or Reject the improvement request.

At the New state, it is necessary to identify if the improvement initiative aligns with the business strategy, sets the right priority, and identifies the Improvement Coordinator before sending it to the next phase of the lifecycle. The Improvement Manager should list themselves as coordinators if the organization has not identified process-specific coordinators.

A purpose-built user interface called “Workbench” is available for Improvement Managers and Coordinators. It allows them to monitor, plan, approve, and review the improvement initiative backlog using a mobile-friendly, card-based layout. The CIM Workbench offers flexible filtering and supports drag-and-drop functionality to execute the CIM process in an Agile fashion.

The Improvement Manager can use either the workbench UI or form UI and decide to reject the request if it is unclear or does not align with the business strategy, providing a clear reason in the work notes. Once rejected, the initiative is marked as canceled.

To ensure that improvements are aligned with the company's objectives, the Improvement Coordinator should set the Strategies field on the Improvement Initiative form to one or more enterprise strategies from the Strategic Objectives lookup list. This linking process will help ensure that the improvement efforts contribute to the company's overall goals.

Establishing Priority

The improvement initiative is selected manually by the Improvement Manager after assessing the business justification, effort involved, expected benefits, and strategic alignment from the improvement request.

Once the mandatory fields are populated, the Improvement Manager clicks the Accept button. This will move the improvement initiative into the Accepted state of the lifecycle, where it will go through planning and prioritization.

Before sending it for approval, the following fields are mandatory:

- Approver Group
- Improvement Metric and Target Review Date
- CIM Task

The Approver group will review the request and provide approval.

Organizations that do not have a formal approval process can disable the assess state via CIM – Administration – Properties:

When the “enable approval” property is unchecked, the initiative can directly move to the Approved state and is ready for the next phase, which is implementation, resulting in the abbreviated state flow below:

Once the mandatory fields are populated, the Continual Improvement Coordinator is expected to click the Assess button. This will move the initiative into the lifecycle, where it is considered life and something that requires attention.

State: Assess

At the Assess state, a member of the approval group primarily assesses the initiative to determine whether it is worth doing.

The approval request goes through the standard ServiceNow approval workflow. The default workflow requires only one team member's approval. Once approved, the request moves to the Approved state, where it is considered ready for implementation.

State: Approved

At the Approved state, the improvement initiative is ready to start the implementation work. The Improvement Coordinator is expected to click on the Implement button. This will move the initiative into the lifecycle, where it is considered 'In Progress'.

State: In Progress

The Improvement Coordinator may need to engage one or more teams to investigate and improve the requirement. This is achieved using CIM Tasks.

CIM Tasks and Phases

The parent improvement initiative record remains assigned to the Improvement Coordinator throughout the process. The coordinator creates and assigns individual tasks to the various support teams depending on the area of improvement. Each team will capture its findings in their tasks, and the Improvement Coordinator will review and coordinate those activities.

CIM tasks are created to assign work required to complete the initiative. The tasks can be directly related to the Initiative or grouped under CIM Phases for more complex initiatives. System property sn\_cim.create\_default\_phase controls phase creation requirements.

The CIM task can also be linked to other tasks. For example, the Improvement Coordinator can create or relate one or more Change Requests to show a clear path to resolution.

CIM Phases allow grouping the related tasks to track progress rollups easily. The progress rollups happen automatically. Percent-complete rollups are based on the duration of the task. Progress rollups occur at both the phase level and the parent record level.

All task activities can occur in parallel across different teams, and their progress automatically rolls up to the CIM phase levels.

Once all CIM tasks are implemented, the Improvement Manager clicks the “Review” button to send it for review, where they will evaluate it.

State: Review

In the Review state, the Improvement Manager will review the improvement achieved against the improvement target and acceptance criteria. The Improvement manager can decide to add some more tasks if goals are not 100% achieved and click the “Implement” button to move the initiative back to the In-Progress state.

State: Closed

When goals are satisfactory, the Improvement Manager clicks on the “Close” button to move the initiative to the Closed state. Once an initiative is marked Closed, you cannot move it back (revert) to any previous state.

At the Closed state, the following fields are mandatory:

Closure Code:

- Successful: The initiative met the defined goals and acceptance criteria
- Unsuccessful: The initiative failed to meet the defined goals and acceptance criteria
- Withdrawal: The initiative is closed without finishing the work

Closure Notes: The Improvement Manager adds the required notes and summary before closing

Achieved Outcome Category: Selected to create a report based on the following available categories:

- Cost Reduction
- Revenue Generation
- Time-Saving
- Customer Satisfaction
- Quality Improvement

Note: Once an improvement initiative is marked as Closed, it cannot be reopened. A new initiative can be created to finish any incomplete work in the future if deemed appropriate.

## CIM Dashboard

The CIM application provides a prebuilt value realization dashboard. Improvement teams can see and share reports with their management team. The dashboard has two main tabs:

Overview tab

Employee Engagement: Number of employees involved in the CIM process – either submitting the improvement or working to implement the improvement. This report aims to increase employee engagement over time as CIM spreads across the teams and the entire organization. ​

Prioritized List using PA Spotlight: This list helps to automatically rank the entire CIM register backlog based on impact, which is configurable by weights/values of size, effort, and priority. This prioritized list is based on impact, allowing the Improvement Manager to select the top items and begin working on them, rather than reviewing the larger CIM register backlog.​

Various other filters (e.g., priority, state, service) are available to further segregate the data on this dashboard. ​

Outcome Analysis tab

This displays the list of CIM initiatives attached to a business strategy and a KPI-based approach to see a measurable impact​. One report is based on different initiative types – people, processes, and tools​.

One report represents the outcome specific KPIs attached to an improvement initiative. Clicking on the KPI will show the trend chart and progress.

## Other Related Processes and Applications

Coaching Application

The Coaching application is used to make improvements related to people. This is automatically enabled with the CIM application. The Coaching application enables you to facilitate coaching sessions for employees by leveraging opportunities that you can configure for specific moments within a process.

Set up coaching opportunities under the Coaching module to provide real-time improvement feedback and make context-based recommendations on employee performance and processes. Coaching opportunities automatically generate assessments for trainees, which get assigned to coaches. Trainees can be trained by coaches or through automated virtual content.

Idea Portal

The Idea Portal offers a service portal interface that enables employees to submit ideas for innovation and improvement. This empowers all employees to submit improvement ideas and foster a culture of continual improvement.

When a new idea is initiated, the Idea Manager can decide to convert and implement that idea through CIM. If an idea is related to Process or People improvement, it should be converted into a CIM task instead of a demand or a project.

### Process Optimization

Process Optimization helps analysts and process owners analyze the effectiveness of their business processes. Model and generate automated business process flows from the data that enable you to monitor and discover inefficiencies in your processes more quickly.

A Process Owner can create new Continual Improvement Initiatives or link them to existing initiatives to track process improvements.

### Performance Analytics Content Packs

Performance Analytics is a key capability that can help you maximize the value of the CIM initiative. The Improvement Coordinator can use PA KPIs to track the continuous improvement progress on a trend chart. Using PA KPIs for improvement tracking is a great way to set SMART goals and show business value.

Utilize pre-built performance analytics indicators and dashboards in the ITSM Performance Analytics content pack to track ongoing improvement initiatives and identify new opportunities for improvement. Enabling the content pack provides 100+ KPIs that can be used for CIM improvement tracking.

### User Experience

Mobile platforms and virtual technology can positively impact how end users interact with the end-to-end process and, ultimately, how the entire user experience is perceived. Consider which touchpoint can leverage the mobile platform to minimize delays. Tasks such as chat can be performed on mobile devices. Consider also how the Virtual Agent can be deployed to assist users with common actions and track progress.

## Process Governance

### Measurement

Key Performance Indicators (KPIs) evaluate the success of a specific activity toward meeting the critical success factors. Successfully managing KPIs can be achieved by either repeatedly meeting an objective (maintaining) or progressing toward an objective (increasing or decreasing).

Performance Analytics metrics, assessment scores, reports, or manual measures can be utilized to measure success. PA metrics are the preferred mechanism as they provide trend information and constantly track initiative results.

### Process KPIs

- Provide information on the effectiveness of the process and the impact of continuous improvement efforts.
- Are best represented as trend lines and tracked over time
- Monitored by the Process Owner

| Column 1 | Column 2 |
| --- | --- |
| Item | Purpose |
| Monthly User Engagement in CIM | Measure the employee engagement in the CIM Process |
| Improvement register backlog ranking | Show an automated prioritized improvement register based on criteria set in the PA spotlight |
| Number of new Improvement Initiatives created and closed per month | Measure the adoption of the Improvement management process |
| Outcome achieved in the last 6 months | Measures the improvement of KPIs that were improved using CIM, with a breakdown by strategy, category, and type |

### Operational Data

The Improvement Manager and Coordinator can use the workbench or direct app links to stay on top of all the operational activities.

| Column 1 | Column 2 |
| --- | --- |
| Item | Purpose |
| Overview: Work in Progress | Displays a detailed status of each item in a separate card - what is on track, overdue, and the coordinator's name. |
| Overview: List of Initiatives that are under review | Displays all Initiatives that have finished the implementation of all tasks and are ready for review by the Improvement Manager for final acceptance and closure. |
| Planning: Work in Progress | Displays a list of all items that are in progress. The list supports drag-and-drop functionality with filters on the sides. |
| Planning: Backlog | Displays the list of improvement register items that are not in-progress but are open active. Improvement Managers use this list to plan and prioritize the next setup of items. |
