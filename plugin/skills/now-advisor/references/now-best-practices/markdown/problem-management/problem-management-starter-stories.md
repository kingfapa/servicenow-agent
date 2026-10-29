# Problem Management - Starter Stories

Source: https://mynow.servicenow.com/now/best-practices/assets/problem-management-starter-stories

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `0e58d78fdcf295581593e560df0d3e7cbd69c110526fe878caf664cc3b03e73c`

## Sheet: Instructions to import stories

| Column 1 | Column 2 |
| --- | --- |
| Row 1 | Asset number: 0001283 |
| Row 2 | How to import the stories xlsx into the rm\_story table in the ServiceNow Agile Development app on the target instance |
| Row 3 | 0. In case you don't want to import the one or more of the columns from this xlsx, remove the column from this spreadsheet on the second tab before import |
| Row 4 | 1. Understand the product model structure in ServiceNow: EITHER |

a) the product name stated in the product column exists in your product model table (here, the correct product model table is cmdb\_application\_product\_model) - this refers to the "Product" field on the story form OR

b) put the existing product name into the product column (A)

| Column 1 | Column 2 |
| --- | --- |
| Row 5 | 2. In the ServiceNow Agile Development app, open the "Stories" module to open the story list. |
| Row 6 | 3. Right click on any column header and choose "Import" - choose the downloaded file and make sure you import the correct tab. |
| Row 7 | 4. Verify that the imported Stories are visible in the list when opening the "Stories" module |

## Sheet: Stories

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 1 | Product | Theme | Epic | Short description | Description | Acceptance criteria |
| Row 2 | Problem Management | Problem Management | Access | PRB - Service Desk Agent for Problem Management | As a Service Desk Agent I want to have access read/write problems to manage my workload effectively | I know this is done when I have access to create / update / view problems  |

Technical requirement - use sn\_service\_desk\_agent

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 3 | Problem Management | Problem Management | Configuration | PRB - Triggers for Problem Management | As the Problem Management Process Owner, I would like to identify the triggers for the Problem Management process so that Problem records can be opened when required. | I know that this is complete when the triggers for the Problem Management process have been identified. |

This needs to be discussed with the customer.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 4 | Problem Management | Problem Management | Form Configuration | PRB  - Problem from Incident: Mapped Fields | As the Problem Management Process Owner, I would like specific Incident fields mapped when I create a Problem from an Incident so that the process is controlled, efficient and effective. | &lt;p&gt;I know that this is complete when I create a Problem from an Incident and the specified field mappings are used.&lt;/p&gt; |

&lt;p&gt;Suggested mappings:  (This is an example and should be expanded / reduced as required)&lt;/p&gt;

&lt;ul style="list-style-position: inside;"&gt;&lt;li&gt;Number &amp;gt; First Reported by&lt;/li&gt;&lt;li&gt;Short Description &amp;gt; Short Description&lt;/li&gt;&lt;li&gt;Description &amp;gt; Description&lt;/li&gt;&lt;li&gt;Impact &amp;gt; Impact&lt;/li&gt;&lt;li&gt;Urgency &amp;gt; Urgency&lt;/li&gt;&lt;li&gt;Priority &amp;gt; Priority&lt;/li&gt;&lt;li&gt;Company &amp;gt; Company&lt;/li&gt;&lt;li&gt;Configuration Item &amp;gt; Configuration Item&lt;/li&gt;&lt;li&gt;Business Service &amp;gt; Business Service&lt;/li&gt;&lt;li&gt;Category &amp;gt; Category&lt;/li&gt;&lt;li&gt;Sub-Category &amp;gt; Sub-Category &lt;/li&gt;&lt;/ul&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 5 | Problem Management | Problem Management | Form Configuration | PRB - Cancellation of a Problem | As a Problem coordinator, I want to be able to cancel a Problem ticket which is newly created, so that I can eliminate incorrect Problem tickets. | &lt;p&gt;I know that this is complete when I am able to cancel a Problem ticket when it is at New State. Agree which method to use to move to the canceled state – note that whatever method has been used before should be the same here for a consistent user experience.&lt;/p&gt; |

&lt;p&gt;Is it only the new state that a Problem can be cancelled?&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| Row 6 | Problem Management | Problem Management | Form Configuration | PRB - Closed and Closed by fields should be auto-populated  by 'mark\_closed' business rule | As a Problem Management user, when I set a Problem to Closed state, I expect the following fields on the Problem form to be auto-populated so that I record of my action is maintained: |

- Closed

| Column 1 | Column 2 |
| --- | --- |
| - Closed by | &lt;p&gt;I know that this is complete when I set a Problem to Closed state and the following fields on the Incident form are auto-populated:&lt;/p&gt; |

&lt;p&gt;Closed&lt;/p&gt;

&lt;p&gt;Closed by&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 7 | Problem Management | Core UI | Form Configuration | PRB - Problem Form Layout and Behavior - Core UI | As the Problem Management Process Owner, I would like the Problem form to be defined in a way that ensures that the required fields are populated at each state of the Problem workflow, so that all required information is captured. | &lt;p&gt;I know that this is complete when the Problem form is defined in a way that ensures that the required fields are populated at each state of the Problem workflow.&lt;/p&gt; |

&lt;ul style="list-style-position: inside;"&gt;&lt;li&gt;New state - fields are mandatory to create the record&lt;br /&gt;

&lt;ul style="list-style-position: inside;"&gt;&lt;li&gt;mandatory &amp;lt;fields&amp;gt;&lt;/li&gt;&lt;li&gt;read-only &amp;lt;fields&amp;gt;&lt;/li&gt;&lt;/ul&gt;

&lt;/li&gt;&lt;li&gt;Assess State&lt;br /&gt;

&lt;ul style="list-style-position: inside;"&gt;&lt;li&gt;mandatory &amp;lt;fields&amp;gt;&lt;/li&gt;&lt;li&gt;read-only &amp;lt;fields&amp;gt;&lt;/li&gt;&lt;/ul&gt;

&lt;/li&gt;&lt;li&gt;Root Cause Analysis State&lt;br /&gt;

&lt;ul style="list-style-position: inside;"&gt;&lt;li&gt;mandatory &amp;lt;fields&amp;gt;&lt;/li&gt;&lt;li&gt;read-only &amp;lt;fields&amp;gt;&lt;/li&gt;&lt;li&gt;If moved to On hold mandatory &amp;lt;fields&amp;gt;&lt;/li&gt;&lt;/ul&gt;

&lt;/li&gt;&lt;li&gt;Fix In Progress State &lt;br /&gt;

&lt;ul style="list-style-position: inside;"&gt;&lt;li&gt;mandatory &amp;lt;fields&amp;gt;&lt;/li&gt;&lt;li&gt;read-only &amp;lt;fields&amp;gt;&lt;/li&gt;&lt;/ul&gt;

&lt;/li&gt;&lt;li&gt;Resolved State &lt;br /&gt;

&lt;ul style="list-style-position: inside;"&gt;&lt;li&gt;mandatory &amp;lt;fields&amp;gt;&lt;/li&gt;&lt;li&gt;read-only &amp;lt;fields&amp;gt;&lt;/li&gt;&lt;/ul&gt;

&lt;/li&gt;&lt;li&gt;Closed State &lt;br /&gt;

&lt;ul style="list-style-position: inside;"&gt;&lt;li&gt;mandatory &amp;lt;Close code/Close notes&amp;gt;&lt;/li&gt;&lt;li&gt;read-only &amp;lt;fields&amp;gt;&lt;/li&gt;&lt;/ul&gt;

&lt;/li&gt;&lt;li&gt;Canceled (there is not an actual canceled state, when a problem is canceled the State &amp;\#61; Closed and the Close Code &amp;\#61; Canceled)&lt;br /&gt;

&lt;ul style="list-style-position: inside;"&gt;&lt;li&gt;mandatory &amp;lt;fields&amp;gt;&lt;/li&gt;&lt;li&gt;read-only &amp;lt;fields&amp;gt;&lt;/li&gt;&lt;/ul&gt;

&lt;/li&gt;&lt;/ul&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| Row 8 | Problem Management | Problem Management | Groups &amp; Assignment | PRB - Roles | As the Problem Management Process Owner, I'd like the following roles to be assigned to Problem Management teams, so that the team members have the appropriate access and permissions to complete their job: |

problem\_admin

problem\_coordinator

problem\_manager

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| problem\_task\_analyst | I know that this is complete when the appropriate roles have been assigned to Problem Management teams. |  |  |  |  |  |
| Row 9 | Problem Management | Problem Management | Inactivity Monitor | PRB - Configure Inactivity Monitors | As the Problem Management Process Owner, I would like the relevant people to be alerted when there has been no action on a Problem for a specified period of time so that I can be sure Problems do not go unnoticed. | I know that this is complete when the relevant people are alerted when there has been no action on an Problem for a specified period of time. |
| Row 10 | Problem Management | Problem Management | Known Error | PRB - Known Errors from external sources | As the Problem Management Process Owner, I would like the Problem Management teams to be aware of all Known Errors that may be included in Release notes, vendor documentation of their products, security Problems etc., so that they have a comprehensive KE picture. | &lt;p&gt;I know that this is complete when the Problem Management teams are aware of all Known Errors that may be included in Release notes, vendor documentation of their products, security Problems etc.&lt;/p&gt; |

&lt;p&gt;This needs to be discussed with the customer as it would be quite hard to achieve.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 11 | Problem Management | Problem Management | Known Error | PRB - Problem record field mapping to Known Error article. | As the Problem Management Process Owner, I would like to be able to determine which Problem field values are mapped to Known Error article fields when generating a KB from a Problem record, so that valid information can be captured from Problem records and utilized as a library for Problem record investigations in the future. | &lt;p&gt;I know that this is complete when the designated Problem field values are mapped to Known Error article fields when generating a KB from a Problem record.&lt;/p&gt; |

&lt;p&gt;Needs to be agreed with the customer.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 12 | Problem Management | Problem Management | Major Problem | PRB - Major Problem | As the Problem Management Process Owner, I would like to be able to identify and manage major problems, so the approved process is followed | &lt;p&gt;I know this is complete when I can identify problems as major problems.&lt;/p&gt; |

&lt;p&gt;Agree if Customer wishes to identify the major problems. &lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 13 | Problem Management | Problem Management | Notification | PRB - Problem Notification: Assigned to Group | As a Problem Manager, if a Problem is assigned to my group, I would like the system to send all group members an email notification, so that my group can deal with the Problem in an efficient and timely manner. | &lt;p&gt;I know that this is complete when I receive notification via email that a Problem record has been assigned to my group.&lt;/p&gt; |

&lt;p&gt;Notifications should include the Problem Short Description.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 14 | Problem Management | Problem Management | Notification | PRB - Problem Notification: Assigned to individual | As a Problem Coordinator, if a Problem is assigned to me, I would like the system to send me an email notification, so that I can deal with the Problem in an efficient and timely manner. | &lt;p&gt;I know that this is complete when I receive notification via email that a Problem record has been assigned to me. Notifications should include the Problem Short Description.&lt;/p&gt; |
| Row 15 | Problem Management | Problem Management | Notification | PRB - Problem Notification: Closure | As a Problem raiser, if a Problem which I opened has been closed, I would like the system to send me an email notification, so that I am aware that this action has been taken. | &lt;p&gt;I know that this is complete when I receive notification via email that a Problem record which I opened has been closed.&lt;/p&gt; |

&lt;p&gt;Notifications should include the Problem Short Description.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 16 | Problem Management | Problem Management | Notification | PRB - Problem Notification: Task Assigned to Group | As a IT User, if a Problem Task is assigned to my group, I would like the system to send all group members an email notification, so that my group can deal with the Problem Task in an efficient and timely manner. | &lt;p&gt;I know that this is complete when I receive notification via email that a Problem Task has been assigned to my group. Notifications should include the Problem Short Description.&lt;/p&gt; |
| Row 17 | Problem Management | Problem Management | Notification | PRB - Problem Notification: Task is closed | As a Problem Manager, if a Problem task  has been closed, I would like the system to send an email notification to the Problem Coordinator and Work Notes list,  so that they are aware that this action has been taken. | &lt;p&gt;I know that this is complete when I receive notification via email that the problem task of a Problem that is assigned to me has been closed.&lt;/p&gt; |
| Row 18 | Problem Management | Problem Management | Notification | PRB - Problem Notification: Task Work notes update, assigned to group | As a Problem Manager, if the Work notes of a Problem Task assigned to my group are updated, I would like the system to send all group members, Work Notes list and Opened by an email notification so that the update can be dealt with in an efficient and timely manner | &lt;p&gt;I know that this is complete when I receive notification via email that the Work notes of a Problem Task that is assigned to my group have been updated.&lt;/p&gt; |

&lt;p&gt;Notifications should include the Problem Short Description.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 19 | Problem Management | Problem Management | Notification | PRB - Problem Notification: Task Work notes update, assigned to individual | As a Problem Manager, if the Work notes of a Problem Task assigned to me are updated, I would like the system to send me, the Work Notes list and Opened by an email notification so that the update can be dealt with in an efficient and timely manner. | I know that this is complete when I receive notification via email that the Work notes of a Problem Task that is assigned to me have been updated. |

Notifications should include the Problem Short Description.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 20 | Problem Management | Problem Management | Notification | PRB - Problem Notification: Work notes update, assigned to Group | As a Problem Manager, if the Work notes of a Problem assigned to my group is updated, I would like the system to send all group members, the Work Notes list and Opened by an email notification so that the update can be dealt with in an efficient and timely manner. | &lt;p&gt;I know that this is complete when I receive notification via email that the Work notes of a Problem that is assigned to my group have been updated.&lt;/p&gt; |

&lt;p&gt;Notifications should include the Problem Short Description.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 21 | Problem Management | Problem Management | Notification | PRB - Problem Notification: Work notes update, assigned to individual | As a Problem Manager, if the Work notes of a Problem assigned to me is updated, I would like the system to send me, the Work Notes list and Opened by an email notification so that the update can be dealt with in an efficient and timely manner. | I know that this is complete when I receive notification via email that the Work notes of a Problem that is assigned to me have been updated. |

Notifications should include the Problem Short Description.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 22 | Problem Management | Problem Management | Notification | PRB - Problem record link can be redirected to classic UI 16 | As a user, I want to be able to select the problem record link in my email notification and be redirected to the classic UI16 experience  | I know this is complete when the ITSM Notifications Redirection (com.snc.itsm.notifications\_redirection) plugin is disactivated/uninstalled |

I know that this is complete when I open the record link in a problem notification email and am redirected to the UI16.  ITSM Notifications Redirection (com.snc.itsm.notifications\_redirection) plugin is disactivated/uninstalled

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 23 | Problem Management | Problem Management | Priority | PRB - Configure Problem Priority Matrix | As the Problem Management Process Owner, I would like the Problem Management Priority Matrix to mirror the Incident Management Priority Matrix, so that when an Incident is progressed to a Problem the Impact and Urgency is reflected on the Problem form. | I know that this is complete when the Problem Management Priority Matrix mirrors the Incident Management Priority Matrix. |
| Row 24 | Problem Management | Problem Management | Problem Model | PRB - Create Problem Models. | As a problem manager, I need to be able to create fit for purpose problem models that align to the specific use cases in my organization. | &lt;p&gt;&amp;\#34;I know this is successful when I can select from a range of problem models that align with my organization&amp;\#39;s business processes. &lt;/p&gt; |
| Row 25 | Problem Management | Problem Management | Problem Model | PRB - Problem models property is enabled | As a problem manager, I need to be able to create custom models for problem and problems tasks by enabling the com.snc.problem\_management.models.enabled system property, to extend their default models without compromising on existing capabilities | I know this is complete by enabling the com.snc.problem\_management.models.enabled system property, and I will be able to create custom models for problem and problem task |
| Row 26 | Problem Management | Problem Management | Problem Task | PRB - Problem Task | As the Problem Management Process Owner, I need to be able to create problem tasks, so the approved process is followed | &lt;p&gt;I know this is complete when I am able to create the problem tasks based on the approved governed process. &lt;/p&gt; |

&lt;p&gt;Agree on mandatory fields​.&lt;br /&gt;Agree on fields not required​.&lt;br /&gt;Agree on additional fields​.&lt;br /&gt;Validate field logic​.&lt;br /&gt;Agree on whether the tasks will be created ad hoc and if so who will create them and when​.&lt;br /&gt;Agree if tasks are to be created automatically when and what tasks are required.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 27 | Problem Management | Problem Management | Problem Task | PRB - Problem Task Form Fields | As the Problem Management Process Owner, I would like an External Reference field and a Company field added to the Problem Task form, so that external references to other organizations and their ticketing system can be captured as part of parallel remediation. | I know that this is complete when an External Reference field and a Company field have been added to the Problem Task form. |

This needs to be discussed with the customer.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 28 | Problem Management | Problem Management | Problem Task | PRB - Problem Task Notification: Assigned to individual | As a problem user, if a Problem Task is assigned to me, I would like the system to send me an email notification, so that I can deal with the Problem Task in an efficient and timely manner. | &lt;p&gt;I know that this is complete when I receive notification via email that a Problem Task has been assigned to me. Notifications should include the Problem Short Description.&lt;/p&gt; |
| Row 29 | Problem Management | Problem Management | Problem Task | PRB - Problem Task Types | As a Problem Management Process Owner, I would like to define the problem task types selectable by agents in Service Operations Workspace, so that they are more efficient and consistent in creating them |  in Service Operations Workspace |

Tech reference: https://docs.servicenow.com/csh?topicname=create-task-type-sow.html&amp;version=latest

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 30 | Problem Management | Problem Management | Problem Task | PRB - Root Cause Analysis Deployment | As a Problem Coordinator, when a Problem Task of type "Root Cause Analysis" is created, I would like the fields in "Analysis Information" tab to be defined in a way that the root cause of a Problem is manually captured in detail | &lt;p&gt;I know this is complete when I am able to capture the root cause of a Problem in the &amp;\#34;Analysis Information&amp;\#34; tab when a Problem Task of type &amp;\#34;Root Cause Analysis&amp;\#34; is created.&lt;/p&gt; |

&lt;p&gt;Agree that these fields are required&lt;/p&gt;

&lt;p&gt;Agree which fields should be mandatory&lt;/p&gt;

&lt;p&gt;Agree the Cause code choices&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 31 | Problem Management | Problem Management | Reporting | PRB - Problem Dashboard | As a Problem Manager, I would like to be able to view graphical representation of PM reports in the Problem Overview dashboard so that I can have a good overview of the performance of Problem Management at any time. | I know that this is complete when I am able to see PM charts that I&amp;\#39;m interested in on the Problem Overview dashboard |
| Row 32 | Problem Management | Problem Management | Reporting | PRB - Problem Reporting | As the Problem Management Process Owner, I would like to be able to report on the following KPIs: |  |
| tba | I know that this is complete when I am able to run reports on the agreed KPIs. |  |  |  |  |  |

Needs to be agreed with the customer.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 33 | Problem Management | Problem Management | Workflow | PRB - Problem State flow | As the Problem Management Process Owner, I would like to have the OOTB PM states active, so that best practice is followed when managing Problem records. | &lt;p&gt;I know that this is complete when the following states are available for a Problem record:&lt;/p&gt; |

&lt;ul style="list-style-position: inside;"&gt;&lt;li&gt;New&lt;/li&gt;&lt;li&gt;Assess&lt;/li&gt;&lt;li&gt;Root Cause Analysis&lt;/li&gt;&lt;li&gt;Fix In Progress&lt;/li&gt;&lt;li&gt;Resolved&lt;/li&gt;&lt;li&gt;Closed&lt;/li&gt;&lt;li&gt;Closed - Canceled (there is not an actual canceled state, when a problem is canceled the State &amp;\#61; Closed and the Close Code &amp;\#61; Canceled)&lt;/li&gt;&lt;/ul&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 34 | Problem Management | Problem Management | Workflow | PRB - Problem State Flow -  Assess to Closed | As the Problem Management Process Owner, I want to ensure that a Problem can be moved to Closed state, so that the Problem follows the approved governance process | &lt;p&gt;I know that this is complete when I am able to move a Problem ticket from Assess state to Closed state based on the approved governed process. Agree which roles can move the Problem to the Closed state.&lt;/p&gt; |

&lt;p&gt;Agree on any fields provided out of the box the customer does not require.&lt;/p&gt;

&lt;p&gt;Agree on any additional fields the customer needs including the format and logic.&lt;/p&gt;

&lt;p&gt;Validate all field logic.&lt;/p&gt;

&lt;p&gt;Confirm that a Closed Problem is read only.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 35 | Problem Management | Problem Management | Workflow | PRB - Problem State Flow -  Assess to Root Cause Analysis | As the Problem Management Process Owner, I want to ensure that a Problem can be moved to Root Cause Analysis state, so that the ticket follows the approved governance process | &lt;p&gt;I know that this is complete when I am able to move a Problem ticket from Assess state to Root Cause Analysis state based on the approved governed process.&lt;/p&gt; |

&lt;p&gt;Agree on which roles can move the Problem to the Root Cause Analysis state.&lt;/p&gt;

&lt;p&gt;Agree on any fields provided out of the box the customer does not require.&lt;/p&gt;

&lt;p&gt;Agree on any additional fields the customer needs including the format and logic.&lt;/p&gt;

&lt;p&gt;Validate all field logic.&lt;/p&gt;

&lt;p&gt;Agree on any read/write permissions for Root Cause Analysis state.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 36 | Problem Management | Problem Management | Workflow | PRB - Problem State Flow -  Closed to Root Cause Analysis | As the Problem Management Process Owner, I need to ensure that a Problem can be moved back to Root Cause Analysis state, so that the Problem follows the approved governance process | &lt;p&gt;I know that this is complete when I am able to move back a Problem ticket from Closed state to Root Cause Analysis state based on the approved governed process.&lt;/p&gt; |

&lt;p&gt;Agree on which roles can move the Problem to the Root Cause Analysis state.&lt;/p&gt;

&lt;p&gt;Agree on any fields provided out of the box the customer does not require.&lt;/p&gt;

&lt;p&gt;Agree on any additional fields the customer needs including the format and logic.&lt;/p&gt;

&lt;p&gt;Validate all field logic.&lt;/p&gt;

&lt;p&gt;Agree on any read/write permissions for Root Cause Analysis state.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 37 | Problem Management | Problem Management | Workflow | PRB - Problem State Flow -  Fix In Progress to Closed | As the Problem Management Process Owner, I need to ensure that a Problem can be moved to Closed state, so that the ticket follows the approved governed process | &lt;p&gt;I know that this is complete when I am able to move a Problem ticket from Fix in Progress state to Closed state based on the approved governed process.&lt;/p&gt; |

&lt;p&gt;Agree on which roles can move the Problem to the Closed state. &lt;br /&gt;Agree on any fields provided out of the box the customer does not require.&lt;br /&gt;Agree on any additional fields the customer needs including the format and logic.&lt;br /&gt;Validate all field logic.&lt;br /&gt;Agree on any read/write permissions for Closed state.&lt;br /&gt;Confirm that a Closed Problem is read only.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 38 | Problem Management | Problem Management | Workflow | PRB - Problem State Flow -  Fix In Progress to Resolved | As the Problem Management Process Owner, I need to ensure that a Problem can be moved to Resolved state, so that the Problem follows the approved governance process | &lt;p&gt;I know that this is complete when I am able to move a Problem ticket from Fix in Progress state to Resolved state based on the approved governed process.&lt;/p&gt; |

&lt;p&gt;Agree which roles can move the Problem to the Resolved state&lt;/p&gt;

&lt;p&gt;Agree any fields provided out of the box the customer does not require&lt;/p&gt;

&lt;p&gt;Agree any additional fields the customer needs including the format and logic&lt;/p&gt;

&lt;p&gt;Validate all field logic&lt;/p&gt;

&lt;p&gt;Agree any read/write permissions for Resolved state&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 39 | Problem Management | Problem Management | Workflow | PRB - Problem State Flow -  Fix In Progress to Root Cause Analysis | As the Problem Management Process Owner, I need to ensure that a Problem can be moved back to Root Cause Analysis state, so that the Problem follows the approved governance process | &lt;p&gt;I know that this is complete when I am able to move back a Problem ticket from Fix in Progress state to Root Cause Analysis state based on the approved governed process.&lt;/p&gt; |

&lt;p&gt;Agree which roles can move the Problem to the Resolved state&lt;/p&gt;

&lt;p&gt;Agree any fields provided out of the box the customer does not require&lt;/p&gt;

&lt;p&gt;Agree any additional fields the customer needs including the format and logic&lt;/p&gt;

&lt;p&gt;Validate all field logic&lt;/p&gt;

&lt;p&gt;Agree any read/write permissions for Root Cause Analysis state&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 40 | Problem Management | Problem Management | Workflow | PRB - Problem State Flow -  New to Assess | As the Problem Management Process Owner, I need to ensure that a Problem can be moved to Assess state, so that the problem follows the approved governance process | &lt;p&gt;I know that this is complete when I am able to move a Problem ticket from New state to Assess state based on the approved governed process. Agree which roles can move the Problem to the Assess state.&lt;/p&gt; |

&lt;p&gt;Agree on any fields provided out of the box the customer does not require.&lt;/p&gt;

&lt;p&gt;Agree on any additional fields the customer needs including the format and logic.&lt;/p&gt;

&lt;p&gt;Validate all field logic.&lt;/p&gt;

&lt;p&gt;Agree on any read/write permissions for Assess state.  Business Rule validates all fields are filled (including the Assess Dialog Form View dialog) to automatically move record to Assess state.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 41 | Problem Management | Problem Management | Workflow | PRB - Problem State Flow -  Resolved to Closed | As the Problem Management Process Owner, I need to ensure that a Problem can be moved to Closed state, so that the Problem follows the end of the approved governance process | &lt;p&gt;I know that this is complete when I am able to move a Problem ticket from Resolved state to Closed state based on the approved governed process.&lt;/p&gt; |

&lt;p&gt;Agree on which roles can move the Problem to the Closed state.&lt;/p&gt;

&lt;p&gt;Agree on any fields provided out of the box the customer does not require.&lt;/p&gt;

&lt;p&gt;Agree on any additional fields the customer needs including the format and logic.&lt;/p&gt;

&lt;p&gt;Validate all field logic.&lt;/p&gt;

&lt;p&gt;Confirm that a Closed Problem is read only.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 42 | Problem Management | Problem Management | Workflow | PRB - Problem State Flow -  Resolved to Root Cause Analysis | As the Problem Management Process Owner, I need to ensure that a Problem can be moved back to Root Cause Analysis state, so that the Problem follows the approved governance process | &lt;p&gt;I know that this is complete when I am able to move back a Problem ticket from Resolved state to Root Cause Analysis state based on the approved governed process.&lt;/p&gt; |

&lt;p&gt;Agree on which roles can move the Problem to the Root Cause Analysis state.&lt;/p&gt;

&lt;p&gt;Agree on any fields provided out of the box the customer does not require.&lt;/p&gt;

&lt;p&gt;Agree on any additional fields the customer needs including the format and logic.&lt;/p&gt;

&lt;p&gt;Validate all field logic.&lt;/p&gt;

&lt;p&gt;Agree on any read/write permissions for Root Cause Analysis state.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 43 | Problem Management | Problem Management | Workflow | PRB - Problem State Flow -  Root Cause Analysis to Closed | As the Problem Management Process Owner, I need to ensure that a Problem can be moved to Closed state, so that the Problem follows the approved governance process | &lt;p&gt;I know that this is complete when I am able to move a Problem ticket from Root Cause Analysis state to Closed state based on the approved governed process.&lt;/p&gt; |

&lt;p&gt;Agree on which roles can move the Problem to the Closed state.&lt;/p&gt;

&lt;p&gt;Agree on any fields provided out of the box the customer does not require.&lt;/p&gt;

&lt;p&gt;Agree on any additional fields the customer needs including the format and logic.&lt;/p&gt;

&lt;p&gt;Validate all field logic.&lt;/p&gt;

&lt;p&gt;Agree on any read/write permissions for Closed state.  Confirm that a Closed Problem is read only.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 44 | Problem Management | Problem Management | Workflow | PRB - Problem State Flow -  Root Cause Analysis to Fix In Progress | As the Problem Management Process Owner, I need to ensure that a Problem can be moved to Fix in Progress state, so that the Problem follows the approved governance process | &lt;p&gt;I know that this is complete when I am able to move a Problem ticket from Root Cause Analysis state to Fix in Progress state based on the approved governed process.&lt;/p&gt; |

&lt;p&gt;Agree on which roles can move the Problem to the Fix in Progress state.&lt;/p&gt;

&lt;p&gt;Agree on any fields provided out of the box the customer does not require.&lt;/p&gt;

&lt;p&gt;Agree on any additional fields the customer needs including the format and logic.&lt;/p&gt;

&lt;p&gt;Validate all field logic.&lt;/p&gt;

&lt;p&gt;Agree on any read/write permissions for Fix in Progress state.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 45 | Problem Management | Problem Management | Workflow | PRB - Problem State Flow - Create New | As the Problem Management Process Owner, I need to ensure that a Problem follows a more suitable process, so that it adheres to the approved governance process | &lt;p&gt;I know that this is complete when I am able to create a Problem ticket with state New based on the approved governed process Agree on the mandatory fields for raising a new Problem.&lt;/p&gt; |

&lt;p&gt;Agree on any fields provided out of the box the customer does not require.&lt;/p&gt;

&lt;p&gt;Agree on any additional fields the customer needs including the format and logic.  Validate all field logic. &lt;/p&gt;

&lt;p&gt;Agree on the hint text applied to the field labels. &lt;/p&gt;

&lt;p&gt;Agree on any read/write permissions for New state.&lt;/p&gt;
