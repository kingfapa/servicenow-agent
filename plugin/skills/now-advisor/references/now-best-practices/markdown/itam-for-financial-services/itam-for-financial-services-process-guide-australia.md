# ITAM for Financial Services - Process Guide

Source: https://mynow.servicenow.com/now/best-practices/assets/itam-for-financial-services-process-guide

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `8954e788ebf0ba6016cc378bf0dffd0abe849fc53383fad3051545b7d433c2ca`

IT Asset Management

**ITAM for Financial Services**

Scope · Evidence · Remediation · Review

Process guide

Australia

Updated: July 2026

Asset number: 0004501

## Introduction

This process guide provides a detailed explanation of how IT Asset Management for Financial Services is enabled within the ServiceNow platform. It is intended that this process be followed as closely as possible, regardless of the level of maturity of the customer. ServiceNow encourages simple, lean ITAM processes, which are reflected in the out-of-the-box design.

Customers may add additional functionality to that offered; however, this should only be in scenarios where there is a required business outcome that could not be achieved using an out-of-the-box method. Following this approach also eases upgrade paths and the ability to expand the use of the platform.

## Process Overview/Summary

IT Asset Management for Financial Services uses the Asset Audit Response application, with prescriptive workflows that streamline compliance and audit responses. Key capabilities include:

- **Centralized asset inventory:** all IT assets are tracked in a single, up-to-date repository for full visibility.
- **Prescriptive audit workflows:** the application provides clear, step-by-step workflows outlining required tasks, responsible parties, and deadlines, with access to regulatory content.
- **Efficient evidence collection:** users gather and upload audit evidence directly within the application, streamlining collaboration and version control.
- **Automated reporting:** the system compiles all responses, documentation, and evidence into auditor-ready packages with standard reporting.
- **Feedback and improvement:** remediation tasks highlight process gaps and inform future improvements.

## Process Flow Diagram(s)

The following section describes the steps that are involved in the Asset Audit Response workflow.

The workflow proceeds as follows:

- An organization receives an audit letter from a financial regulatory agency, such as the Federal Financial Institutions Examination Council (FFIEC).
- In the Audit Workspace, the audit manager creates an engagement to scope, plan, and conduct the requested audit.
- The audit manager then creates a corresponding evidence request to obtain supporting information and data that help complete the engagement.
- The evidence request is assigned and submitted to the asset manager.
- In the Asset Governance Workspace, the asset manager reviews and accepts the evidence request.
- The asset manager initiates the evidence collection process by creating the relevant evidence records and assigning them to the appropriate asset team members. Each evidence record corresponds to a set of supporting information or data to collect and submit for the evidence request.
- The asset manager can also define remediation rules to identify data gaps discovered during the evidence collection process.
- Each asset team member begins collecting evidence, as defined in their assigned evidence records.
- While each asset team member collects evidence, the asset manager can track and monitor the progress of the evidence collection.
- After the evidence is collected, remediation tasks are automatically generated based on the remediation rules the asset manager defined. The asset manager can choose to resolve or defer the remediation tasks.
- The asset manager reviews and approves the collected evidence.
- The asset manager submits the approved evidence to the audit manager for final review.
- In the Audit Workspace, the audit manager reviews and accepts the submitted evidence.
- The audit manager reports these findings to the financial regulatory agency to complete the audit engagement.

## Process Prerequisites

A user with the admin role can install the Asset Audit Response application (com.sn\_audit\_response). Before installing, complete the following prerequisites:

- Ensure that the application and all of its associated ServiceNow Store applications have valid ServiceNow entitlements.
- Review the Asset Audit Response application listing in the ServiceNow Store for information on dependencies, licensing or subscription requirements, and release compatibility.
- Ensure that at least one of the following applications is already installed on your ServiceNow instance:
- The ServiceNow Software Asset Management application.
- The ServiceNow Hardware Asset Management application.

Asset Audit Response is licensed through ServiceNow product tiers — Foundation, Advanced, and Prime. The tier determines access to application features, generative AI skills, agentic workflows, and AI agents; for example, the evidence-summarization capability depends on the licensed tier. Confirm the tier entitlement during planning so that teams know which AI-assisted features are available.

## Principles and Basic Concepts

### Audit Workspace

The audit manager uses the Audit Workspace to track and manage engagements for regulatory audits conducted by financial authorities and their corresponding evidence requests.

The Audit Workspace is a unified medium with multiple views. These views enable audit managers to create and manage engagements and evidence requests for their financial regulatory audits. They also help them gain insight into the overall audit timeline and status, monitor ongoing audit activity progress, and scope entities.

The Audit Workspace aligns evidence requests to repositories of financial regulatory requirements and guidelines, such as the FFIEC framework and the Digital Operational Resilience Act (DORA). Regulatory content supplies the citations that give each evidence request its regulatory basis.

### Asset Governance Workspace

Asset managers use the Asset Governance Workspace to get a comprehensive view of their assigned evidence requests and to track and manage their responses to those requests.

The Asset Governance Workspace is a unified medium with a single view. This view enables asset managers to:

- Gain visibility into their assigned evidence requests.
- Fulfill, respond to, and track the progress of each request.
- Gain insight into important audit data, such as the due date and requirements of each request.
- Track and manage remediation tasks.

## Process Scope

The Asset Audit Response application provides an Asset Governance Workspace and an Audit Workspace where users can manage their financial regulatory audits, request evidence for these audits, respond to these requests through a guided experience, and access regulatory content data to help drive more efficient and accurate responses to these requests.

With the Asset Audit Response application, audit managers can plan for and resolve regulatory risks and compliance issues before they lead to audit failures.

## Process Objectives

The primary goal of ITAM for Financial Services is to use the capabilities of the Asset Audit Response application to ensure the organization consistently meets all relevant regulatory requirements. This is achieved by standardizing the audit process and documentation and by streamlining and automating audit workflows to minimize the manual burden on IT, compliance, and audit teams.

The objectives of the Asset Audit Response process are to:

- Create and manage financial regulatory audit engagements and corresponding evidence requests.
- Track and manage responses to evidence requests for financial regulatory audits.
- Request and fulfill evidence requests for financial regulatory audits.

## Roles and Responsibilities

Each role is assigned to perform specific tasks within the process. More than one individual can be associated with a specific role within a particular process. Additionally, a single individual can assume multiple roles within the process, although typically not simultaneously. Depending on the structure and maturity of a process, all roles described may not exist in every organization.

The following table describes the typical roles defined for the Asset Audit Response application, together with the roles each one contains.

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Role | Responsible for | Contains roles |
| Asset governance<br>\[sn\_audit\_response.asset\_governance\] | Fulfill and respond to evidence requests. | sn\_grc\_advanced.evidence\_responder<br>sam\_user (available only if the Software Asset Management application is installed)<br>sn\_hamp.ham\_user (available only if the Hardware Asset Management application is installed)<br>asset (available only if the Hardware Asset Management application is installed) |
| Asset audit manager<br>\[sn\_audit\_response.grc\_asset\_audit\_manager\] | Create audit engagements, activities, evidence requests, and entity scopes. | sn\_audit.shared\_manager<br>sn\_grc\_advanced.evidence\_requester |

## How audit engagements and evidence requests are initiated

### Plan audit engagements with an audit plan

An audit manager can group and plan audit engagements over a defined time frame by using an audit plan. The plan groups related engagements by time frame — for example, annual, semi-annual, or quarterly — and, where advanced audit planning is enabled, lets the audit manager plan the associated resources or effort (budgeted hours) and the associated costs (budgeted expenses) for the engagements under the plan. After the engagements are grouped, the audit plan is submitted for approval.

### Create and manage engagements for financial regulatory audits

An audit manager can create and manage engagements for their financial regulatory audits in the Audit Workspace.

**Create an audit engagement in the Audit Workspace**

The audit manager can create an engagement in the workspace to manage the audit information and to collect the entities, controls, and control tests that are relevant to the audit, and can assign it to an audit supervisor. The supervisor supervises the audit engagement, monitors its execution, and verifies its completion on time as directed.

The audit manager can use the workspace to schedule the engagement, plan the details, and budget the expenses.

To create an engagement, navigate to All &gt; Audit &gt; Audit Workspace, select Create list, and select Engagement from the homepage.

The audit report for the engagement record is generated based on the template type selected in the record:

- If the Classic report template option was selected in the Template type field while creating the engagement record, the reports are created using HTML, script, or XML templates for engagements that are in the Awaiting approval, Follow up, or Closed complete states.
- If the Word report template option was selected in the Template type field while creating the engagement, the report is created using the Word template for engagements that are in the Validate state or any subsequent states.

**Create an activity in the Audit Workspace**

The audit manager can create an activity in the workspace that explores and provides documented evidence of whether the associated control is operating correctly.

In addition to a general audit activity, the audit manager can create other audit task types in the Audit Workspace — including a control test, an interview, and a walkthrough — each of which provides documented evidence of whether the associated control is operating correctly.

To create an activity, navigate to All &gt; Audit &gt; Audit Workspace and select All Engagements or My Engagements in the Execution list.

### Requesting evidence for financial regulatory audit engagements

The audit manager can request evidence at any stage for their financial regulatory audit engagements in the Audit Workspace. The details about the items for which evidence is requested are also provided to the person responsible for providing the evidence.

To request evidence:

- Navigate to All &gt; Audit Workspace.
- In the list icon, navigate to Evidence requests &gt; My request, and select New.
- Fill in the form fields (Number, Name, Requestor details, Type, Context, State, Description, assignment, schedule, and confidentiality).
- Upon saving the form, the Evidence collection details related list appears. This related list is used to list the items for which evidence is requested. Select New.
- Fill in the form fields (Evidence collection type, Evidence for, assignment, and Evidence collection instructions).
- Select Request evidence.

When an evidence request is already in the Work in Progress state and a new evidence collection detail is added, the evidence request task is sent to the assignee immediately.

The Evidence related list appears with the list of evidence, and the person assigned the request receives an email notification to provide the requested evidence. The state of the request also changes to Work in Progress.

## Asset Audit Response Lifecycle

Asset managers fulfill evidence requests for financial regulatory audit engagements by using the asset response guided experience in the Asset Governance Workspace. The guided experience takes the asset manager through the entire process of fulfilling an evidence request, from accepting the request to submitting a final response. Each set of tasks in this process is represented by a step in the guided experience, and progress can be saved at any point and resumed later.

To open the guided experience, navigate to Workspaces &gt; Asset Governance Workspace, and from the Asset evidence tasks related list in the Asset governance overview, select the task associated with the evidence request that you want to fulfill. The lifecycle then proceeds through the following steps.

### Audit scope

In the Audit scope step, verify the details of the evidence request and then select Accept.

Review the Citation details fields (Name, Description, and Supplemental guidance) to understand the regulatory citations associated with the request. These fields give insight into the regulatory basis of the evidence request, including frameworks such as FFIEC and DORA.

At any point after selecting Accept, you can generate a comprehensive summary of the evidence request by selecting Summarize evidence. The summary uses generative AI and is organized into sections — Evidence Request Overview, Evidence Records, Remediation Rules, Remediation Tasks, and Activity &amp; Audit Notes — giving insight into the corresponding audit engagement, the associated financial regulations, the evidence submitted, and the remediation rules and tasks generated. Use the summary to plan for and complete other in-progress requests more efficiently.

### Collect evidence

Create evidence records for the supporting information or data that you want to collect and submit for the evidence request:

- In the side panel of the guided experience, select Asset Evidence.
- From the Asset Evidence related list, select New.
- On the form, fill in the fields (Status, Evidence type, assignment, Description, Report, Data visualization, URL).

The assigned user can begin collecting the required evidence. After the evidence is collected, the user can upload it by using the Attachment option in the contextual side panel of the evidence record. After the evidence is successfully uploaded, the user can update the Status field to Complete. On the header of the asset response guided experience, select Next.

### Readiness

In the Readiness step of the guided experience, monitor the status of your evidence collection using the widgets and related lists: Task analytics by priority, Total assets evaluated, Evidences, and Remediation tasks.

Optionally, create remediation rules to identify any data gaps discovered during the evidence collection process:

- In the side panel of the guided experience, select Evidence Remediation Rules.
- From the Evidence Remediation Rules related list, select New.
- On the form, fill in the fields (Asset evidence, Resolution, Assignment group, Assigned to, Short description, Description, Evidence scope, Scope filter, and Scope condition).

On the header of the asset response guided experience, select Next.

### Remediation

In the Remediation step of the guided experience, review your remediation tasks by using the widgets and related lists: Task analytics by priority, Task burndown, and Remediation tasks. Remediation tasks are automatically generated from the remediation rules you defined; you can choose to resolve or defer each task.

Select a remediation task to view its details, including the Impacted Records related list. The impacted records are the asset and configuration item (CI) records associated with the task that require remediation. Use this list to track and take the necessary actions on each impacted record before the evidence is submitted. On the header of the asset response guided experience, select Next.

### Review

In the Review step of the guided experience, review and approve all evidence that has been collected for the evidence request. All evidence collection must be complete before approval.

### Submit for review

After all evidence is successfully collected and approved, select Submit for review. The collected evidence is submitted to the audit manager for final review. Based on the results of the review, the audit manager can choose to accept, cancel, request a revision, or request additional information for the associated evidence request.

## Other Processes

Asset Audit Response works alongside several related ServiceNow processes:

### Software Asset Management

When the Software Asset Management application is installed, the Asset governance role includes the sam\_user role, giving asset managers access to software asset data when collecting and evidencing software compliance. Software Asset Management is one of the applications that must be installed as a prerequisite for Asset Audit Response.

### Hardware Asset Management

When the Hardware Asset Management application is installed, the Asset governance role includes the sn\_hamp.ham\_user and asset roles, giving asset managers access to hardware asset data during evidence collection. Hardware Asset Management is an alternative prerequisite application for Asset Audit Response.

### Governance, Risk, and Compliance

Asset Audit Response builds on GRC: Advanced Core. The Asset governance role contains sn\_grc\_advanced.evidence\_responder and the Asset audit manager role contains sn\_grc\_advanced.evidence\_requester, so evidence requests and responses are managed through the shared GRC evidence framework. Audit engagements and activities are managed through Audit Management, and the GRC: Financial Services Controls Accelerator supplies the financial-services regulatory content.

Beyond audits and evidence, Audit Management supports additional workflows, including issue management. From an engagement, an audit manager can raise an issue to document policy, risk, or audit observations, classify it, and track it through to remediation.

## RACI Matrix

The following RACI matrix maps the key activities of the Asset Audit Response process to its roles. R = Responsible, A = Accountable, C = Consulted, I = Informed.

| Column 1 | Column 2 | Column 3 | Column 4 |
| --- | --- | --- | --- |
| Activity | Audit manager | Asset manager | Asset team member |
| Create audit engagement and activities | A/R | I | – |
| Create and assign evidence request | A/R | C | – |
| Review and accept evidence request | I | A/R | – |
| Create evidence records and assign to the team | I | A/R | C |
| Collect and upload evidence | I | A | R |
| Define remediation rules | – | A/R | C |
| Resolve or defer remediation tasks (incl. impacted records) | I | A/R | C |
| Review and approve collected evidence | C | A/R | I |
| Submit evidence for final review | I | A/R | – |
| Accept evidence and report findings to the agency | A/R | I | – |

## Process Governance

### Measurement

Process KPIs provide information on the effectiveness of the process and the impact of continuous improvement efforts. They are best represented as trend lines and tracked over time, and are monitored by the process owner.

### Dashboards and Reporting

In the asset response guided experience, monitor the status of your evidence collection by using the following widgets and related lists:

| Column 1 | Column 2 |
| --- | --- |
| Widget or related list | Purpose |
| Task analytics by priority | Total number of remediation tasks that were automatically generated from your remediation rules, grouped by the task priority. |
| Total assets evaluated | Total amount of evidence that has been evaluated through your remediation rules, grouped by the compliance status. |
| Evidences | List of evidence records that you have created for the evidence request. Select a record to view additional details. |
| Remediation tasks | List of remediation tasks that were automatically generated from your remediation rules. Select a task to view additional details, including the impacted records associated with it, so that you can determine whether to defer or take action. |

In the asset response guided experience, review your remediation tasks by using the following widgets and related lists:

| Column 1 | Column 2 |
| --- | --- |
| Widget or related list | Purpose |
| Task analytics by priority | Total number of remediation tasks that were automatically generated from your remediation rules, grouped by the task priority. |
| Task burndown | Burndown chart that enables you to track the progress of your outstanding remediation tasks against the estimated timeline of completion. |
| Remediation tasks | List of remediation tasks that were automatically generated from your remediation rules. Select a task to view additional details, including the impacted records associated with it, so that you can determine whether to defer or take action. |
