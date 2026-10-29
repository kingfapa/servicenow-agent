# Workforce Optimization - Starter Stories

Source: https://mynow.servicenow.com/now/best-practices/assets/workforce-optimization-starter-stories

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `c5a61d741befe2ba12d3495ab162186d191cf3a4f1c3c968f33ba4681ad2e2c3`

## Sheet: Instructions to import stories

| Column 1 | Column 2 |
| --- | --- |
| Row 1 | Asset number: 0002367 |
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
| Row 2 | Workforce Optimization | Workforce Optimization | Agent Shift | Agent Shift Signup link in today/tomorrow section feature on/off | As an Admin I want to manage whether agents receive Signup link in today/tomorrow section feature | &lt;p&gt;Shift planning property - Turn schedule for signup link in today/tomorrow section feature on/off&lt;/p&gt; |

&lt;p&gt;reflects requirement&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 3 | Workforce Optimization | Workforce Optimization | Agent Shift | Agent Shift Signup max shifts to be allowed for signup within a schedule plan | As an Admin I want to manage the max shifts to be allowed for signup within a schedule plan | &lt;p&gt;Shift planning property - max shifts to be allowed for signup within a schedule plan&lt;/p&gt; |

&lt;p&gt;reflects requirement&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 4 | Workforce Optimization | Workforce Optimization | Agent Shift | Agent Shift Signup the number of days before the shift sign-up due date when agents and managers get notified | As an Admin I want to manage the number of days before the shift sign-up due date when agents and managers get notified | &lt;p&gt;Shift planning property - the number of days before the shift sign-up due date when agents and managers get notified&lt;/p&gt; |

&lt;p&gt;reflects requirement&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 5 | Workforce Optimization | Workforce Optimization | Agent Shift | Agent Shift Signup the number of preferred shifts from a schedule to be autoassigned | As an Admin I want to manage the number of preferred shifts from a schedule to be autoassigned | &lt;p&gt;Shift planning property - number of preferred shifts from a schedule to be autoassigned&lt;/p&gt; |

&lt;p&gt;reflects requirement&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 6 | Workforce Optimization | Workforce Optimization | Agent Shift | Agent Shift Signups feature | As an Admin I want to manage whether agents can signup for shifts or not | &lt;p&gt;Shift planning property - turn Agent signup feature on/off &lt;/p&gt; |

&lt;p&gt;reflects requirement&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 7 | Workforce Optimization | Workforce Optimization | Coaching | Coaching Opportunities | As a manager, I want to have insight into coaching opportunities for my team members so that I can track and enable their skills growth. | &lt;p&gt;I know this is complete when opportunities are triggered from the given conditions.&lt;/p&gt; |
| Row 8 | Workforce Optimization | Workforce Optimization | Coaching | Coaching Plugins | As a Manager, I want to have access to the Coaching functionality, so that I can use it for my teams' development. | I know this is complete when :- |
| Row 9 | Workforce Optimization | Workforce Optimization | Coaching | Integrate Coaching With Learning with Cornerstone (3rd-party learning management system) | As a Manager, I want an integration between ServiceNow and Cornerstone, so that we can leverage this LMS source for Skills Management and Coaching based on access to this Cornerstone data: |  |

1. Users

2. Courses

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| 3. User activity | I know this is complete when :- |  |  |  |  |  |
| Row 10 | Workforce Optimization | Workforce Optimization | Configuration | Configure Virtual Coaching and Learning Course Items | As a Manager, I want to supplement our person to person coaching with virtual coaching/course items, so that key activities trigger content sharing to support team member development. | I know this is complete when :- |
| Row 11 | Workforce Optimization | Workforce Optimization | Configuration | Enable MetricBase Plugin for Demand Forecast | As the Support manager, |  |

I want to predict resources based on historical data,

| Column 1 | Column 2 |
| --- | --- |
| So that I can staff appropriately. | &lt;p&gt;I know this is complete when the MetricBase plugin shows as enabled and all MetricBase modules become available via these plugins:&lt;br /&gt;Workforce Optimization for ITSM (com.snc.wfo\_itsm)&lt;/p&gt; |

&lt;p&gt;Agent Forecast plugin (com.sn\_agent\_forecast)&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 12 | Workforce Optimization | Workforce Optimization | Configuration | Enhanced security for WFO | As a platform owner I want to use the enhanced security features to control access to Workforce Optimization | I know this is complete when the additional advanced security roles are available |
| Row 13 | Workforce Optimization | Workforce Optimization | Configuration | Formula Parameters | As a manager, I want to use certain parameters when computing demand forecasts so that my results are based on my organization, or  my team's, specific data. | &lt;p&gt;I know this is complete when the parameters that I have requested are available for use when editing or creating a Resource Conversion Formula.&lt;/p&gt; |
| Row 14 | Workforce Optimization | Workforce Optimization | Configuration | Group Forecast Configurations | As a manager, I want to be able to view forecasting for my teams in the manager workspace. | &lt;p&gt;I know this is complete when I can view my teams demand forecast in the ITSM Manager Workspace application.&lt;/p&gt; |
| Row 15 | Workforce Optimization | Workforce Optimization | Configuration | Resource Conversion Formula | As a manager, I want to be able to forecast demand for my teams so that I can staff appropriately. | &lt;p&gt;1. Ability to forecast demand is available to WO mangers&lt;/p&gt; |
| Row 16 | Workforce Optimization | Workforce Optimization | Configuration | Setup Manager Workspace Channels | As a Manager, I want channels and queues setup for Manager Workspace to monitor and assign traffic from Virtual Agent (chat), Amazon Connect (phone), and Incident Management, so that I have rapid visibility into the workload for better support. | I know this is complete when :- |
| Row 17 | Workforce Optimization | Workforce Optimization | Configuration | Tables/processes available for assignment from the Manager Workspace Work Scheduler | As a Manager, I want to be able to assign all of these OOB record types from the Manager Workspace Work Scheduler, so that we can quickly assign from the calendar view with advanced filtering capabilities: |  |

Catalog Task

Change Request

Change

Task

Incident

Interaction

Problem

Request

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Requested Item | I know this is complete when :- |  |  |  |  |  |
| Row 18 | Workforce Optimization | Workforce Optimization | Configuration | WFO Plugins | As the Incident process owner and Service Desk Manager I would like to enable; Workforce Optimization so that I can take advantage of all the WFO functionality. | I know this is complete when :- |
| Row 19 | Workforce Optimization | Workforce Optimization | Data Collection | Collect historical data | As a manager, I want to see historical data analyzed by Workforce Optimization so that I can use past occurrences to predict future trends. | &lt;p&gt;I know this is complete when the on-demand job shows that it has completed successfully. Records and reports may or may not populate depending on the filters that are set.&lt;/p&gt; |
| Row 20 | Workforce Optimization | Workforce Optimization | Data Collection | Data Collection Definitions | As a manager, I want to limit the data used for demand forecasting so that I see only what is relevant to me and my teams. | &lt;p&gt;1. Data is limited to only that required for my team&lt;/p&gt; |
| Row 21 | Workforce Optimization | Workforce Optimization | Groups &amp; Assignment | Assign roles for Channel Management | As a manager, I want to have (CRUD) access to channel reports, channel view, and queue report tables so that I can monitor the channels that my teams are working in. | &lt;p&gt;I know this is complete when I have access to create, read, update and delete (CRUD) channel reports, channel view, and queue report tables.&lt;/p&gt; |
| Row 22 | Workforce Optimization | Workforce Optimization | Groups &amp; Assignment | Assign roles for Coaching | As a manager, I want to have (CRUD) access to coaching opportunities, assessments, training, and skills so that I can configure coaching tools for my team. | &lt;p&gt;I know this is complete when I have access to create, read, update and delete (CRUD) coaching opportunities, assessments, training, and skills.&lt;/p&gt; |
| Row 23 | Workforce Optimization | Workforce Optimization | Groups &amp; Assignment | Assign roles for Demand Forecast | As a manager, I want to have (CRUD) access to forecast configuration tables so that I can monitor the channels that my teams are working in. | &lt;p&gt;I know this is complete when I have access to create, read, update and delete (CRUD) forecast configuration tables.&lt;/p&gt; |
| Row 24 | Workforce Optimization | Workforce Optimization | Groups &amp; Assignment | Assign roles for ITSM Manager Workspace - Admin | As a workspace admin, I want to have administrative rights to create, read, update, and delete (CRUD) all applications and settings in Manager Workspace | &lt;p&gt;I know this is complete when I have access to create, read, update, and delete (CRUD) all applications and settings in Manager Workspace.&lt;/p&gt; |
| Row 25 | Workforce Optimization | Workforce Optimization | Groups &amp; Assignment | Assign roles for ITSM Manager Workspace - Manager | As a manager, I want to have access to primary groups, additional managers, and the approval button in the ITSM Manager Workspace. | &lt;p&gt;I know this is complete when I can see primary groups, additional managers, and the approval button in the ITSM Manager Workspace.&lt;/p&gt; |
| Row 26 | Workforce Optimization | Workforce Optimization | Groups &amp; Assignment | Assign roles for ITSM Manager Workspace - User | As a workspace user, I want to have read access to the manager workspace home page and list modules in the ITSM Manager Workspace. | &lt;p&gt;I know this is complete when I have read access to the manager workspace home page and list modules in the ITSM Manager Workspace.&lt;/p&gt; |
| Row 27 | Workforce Optimization | Workforce Optimization | Groups &amp; Assignment | Assign roles for Scheduling | As a manager, I want to have (CRUD) access to schedules and work shifts so that I can monitor the channels that my teams are working in. | &lt;p&gt;I know this is complete when I have access to create, read, update and delete (CRUD) channel reports, channel view, and queue report tables.&lt;/p&gt; |
| Row 28 | Workforce Optimization | Workforce Optimization | Groups &amp; Assignment | Assign roles for Skill Recommendation | As a manager, I want to have read and/or edit access to the Skill Recommendation tables and properties. | &lt;p&gt;I know this is complete when I have access to read the skill recommendation tables and/or edit access to the skill recommendation properties page.&lt;/p&gt; |
| Row 29 | Workforce Optimization | Workforce Optimization | Groups &amp; Assignment | Assign roles for Teams | As a manager, I want to have access to read, create, and/or configure KPIs, KPI groups, and assignment groups in the team's module so that I can customize my reporting to match my teams' goals. | &lt;p&gt;I know this is complete when I can read, create, and/or configure KPIs, KPI groups, and assignment groups in the team's module.&lt;/p&gt; |
| Row 30 | Workforce Optimization | Workforce Optimization | Groups &amp; Assignment | Assign Workforce Optimization Roles | As a manager, I want to have access to the Workforce Optimization application so that I can monitor my teams' performance. | &lt;p&gt;I know this is complete when I can view my teams data in the ITSM Manager Workspace application.&lt;/p&gt; |
| Row 31 | Workforce Optimization | Workforce Optimization | Groups &amp; Assignment | Assignment group skills for Go Live | As Managers, we want to populate some existing skills for assignment groups/members, so that we can consider skills for task assignment, coaching, etc. | I know this is complete when :- |
| Row 32 | Workforce Optimization | Workforce Optimization | Groups &amp; Assignment | Create KPI Groups | As a manager, I want to associate certain assignment groups with KPI groups so that I can monitor KPIs that are relevant to my groups. | &lt;p&gt;I know this is complete when I can see KPI group records that are associated with the assignment groups defined in this story.&lt;/p&gt; |
| Row 33 | Workforce Optimization | Workforce Optimization | Groups &amp; Assignment | Set Primary Assignment Group for users | As a Manager, I want users that work with multiple groups to be able to have a primary group designated, so that we can use this data point for the SO Workspace Team Calendar, and routing/assignment for other tasks/activities. | I know this is complete when :- |
| Row 34 | Workforce Optimization | Workforce Optimization | Manager Workspace | Review/configure Manager Workspace Work Scheduler work configurations and filters | As a Manager, I want the Manager Workspace Work Scheduler configured so that we can assign and schedule work using a calendar interface with task/work item (i.e. incident, change task, etc.) specific properties and filters. | I know this is complete when :- |
| Row 35 | Workforce Optimization | Workforce Optimization | Reporting | Review/configure Strategic Objectives (for use in Coach Dashboard) | As a Coach, I want to see coaching performance against strategic objectives on the Coach Dashboard, so that I can target key objectives and KPIs with my coaching interactions. | I know this is complete when :- |
| Row 36 | Workforce Optimization | Workforce Optimization | Schedules | Create Schedules | As a manager or scheduler, I need to have my teams schedules created in ServiceNow so that I can manage them through Workforce Optimization. | &lt;p&gt;I know this is complete when I can view my teams&amp;\#39; schedule data in the ITSM Manager Workspace application.&lt;/p&gt; |
| Row 37 | Workforce Optimization | Workforce Optimization | Shifts | Create Shifts | As a manager or scheduler, I need to have my teams shifts created in ServiceNow so that I can manage them through Workforce Optimization. | &lt;p&gt;I know this is complete when I can view my teams shift data in the ITSM Manager Workspace application.&lt;/p&gt; |
| Row 38 | Workforce Optimization | Workforce Optimization | Skills | Model (aka Configuration Item) Skills for Go Live | As Managers, we want to populate some existing skills for specific Configuration Items (CIs), so that we can consider skills for task assignment, coaching, etc. | I know this is complete when :- |
| Row 39 | Workforce Optimization | Workforce Optimization | Skills | Skill Determination Rules | As Managers and Agents, we want new tasks/tickets to be automatically tagged/associated to one or multiple skills when appropriate, so that skills can be factored into queue assignment. | I know this is complete when :- |
| Row 40 | Workforce Optimization | Workforce Optimization | Skills | Skills Categories | As a manager or trainer, I want to organize my teams' skills into categories. | &lt;p&gt;I know this is complete when my skills taxonomy is displayed in ServiceNow.&lt;/p&gt; |
| Row 41 | Workforce Optimization | Workforce Optimization | Skills | Skills Levels | As a manager or trainer, I want to use different skill levels for different skills so that the level ranges can be more relevant for the skill they are associated to. | &lt;p&gt;I know this is complete when my skills levels are displayed in ServiceNow.&lt;/p&gt; |
| Row 42 | Workforce Optimization | Workforce Optimization | Skills | Skills Library Plugin | As a manager or trainer, I want to have access to a library of skills data so that I can use this directly, or as an example, for my teams' development. | &lt;p&gt;I know this is complete when I can view a list of 150&amp;\#43; Skills records in ServiceNow.&lt;/p&gt; |
| Row 43 | Workforce Optimization | Workforce Optimization | Skills | Skills Records | As a manager or trainer, I want to have a list of skills relevant to my teams so that I can associate them with my team members. | &lt;p&gt;I know this is complete when my skills levels are displayed in ServiceNow.&lt;/p&gt; |
| Row 44 | Workforce Optimization | Workforce Optimization | Skills | User Skills for Go Live | As Managers, we want to populate some existing skills for user accounts, so that we can consider skills for task assignment, coaching, etc. | I know this is complete when :- |
| Row 45 | Workforce Optimization | Workforce Optimization | Survey | Review/configure Survey(s) taken by Coach | As a Coach, I want to have access to a survey as part of the coaching process, so that I can provide/document feedback. | I know this is complete when :- |
| Row 46 | Workforce Optimization | Workforce Optimization | Survey | Review/configure Survey(s) taken by Trainee | As a Trainee, I want to have access to a survey as part of the coaching process, so that I can provide/document feedback on the effectiveness of the coaching. | I know this is complete when :- |
