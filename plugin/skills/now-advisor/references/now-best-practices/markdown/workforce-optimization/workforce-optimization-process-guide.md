# Workforce Optimization - Process Guide

Source: https://mynow.servicenow.com/now/best-practices/assets/workforce-optimization-process-guide

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `db96d29d2c7c44eec13278f7384f738606e43bfb07f819116c67ebacae478cf1`

**Workforce** **Optimization**

Process Guide

Zurich

Updated: November 2025

Asset number: 0003394

## Introduction

This process guide provides an explanation of how the Workforce Optimization application is enabled within the ServiceNow platform. This application is intended to be followed as closely as possible, regardless of the customer's maturity level. ServiceNow encourages simple, lean processes reflected in the out-of-the-box design.

Customers may add additional functionality to what is offered; however, this should only be done in scenarios where a required business outcome is gained that cannot be achieved using an out-of-the-box method. Following this approach should also ease upgrade paths and expand the platform's use.

## Process scope

Workforce Optimization (WFO) is the process of enhancing the quality and efficiency of service teams by improving team satisfaction through skills growth and smart scheduling, while providing a single location for real-time and historical snapshots of team performance.

WFO combines the tools service managers and agents need in one intuitive product.

- Improves the quality and efficiency of service teams
- Enhances team satisfaction
- Enables skills growth
- Smart scheduling
- Real-time and historical snapshots of team performance in a single place.

With WFO, the supervisor/manager experience is enhanced by providing a central location from which managers can access

- Schedule creator and shift management
- Real-time views of queues and agent activity
- Agent performance management
- Reporting and analytics on team performance
- Skill matrix and coaching capabilities
- Request skill reviews for agents and managers
- Generate team engagement surveys
- Create or designate learning path courses for team members

Managers/Team Leads can

- View KPI trends for teams and employees
- Access employee performance, skills, training, and schedules
- Approve schedules and other requests
- Manage multiple teams

Agent/Analyst/Fulfillers can

- View schedules and request changes
- Complete training
- Monitor performance
- Set Shift Preferences

## Workforce optimization overview

Workforce Optimization (WFO) is a solution for managers and their team members. A customer does not have to implement all the modules at once to go live. They can ramp up in a phased approach – we have customers who started phase 1 with scheduling and coaching and then ramped up to the other modules.

Each of these modules has its own set of roles, so if team managers have team leads or supervisors who may perform some or all these activities, our granularity in roles allows for that flexibility. For example, if you have a coach who sits outside your team but, as a manager, you only want to give them visibility into the coaching module for the teams they are coaching, you can do so.

## Workforce Optimization framework

### Key business roles and responsibilities

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 |
| --- | --- | --- | --- | --- |
| Manager | Team Lead | Scheduler | Coach | Team Member / Agent |
| **Manage**<br>Create and publish shift and schedule plans, and assign work<br>**Review**<br>Review employee performance in a 1:1 meeting. Assess performance and skills, and assign training accordingly.<br>**Approve**<br>Approve time-off requests, shift swaps and general requests made by teams that you manage<br>**Report**<br>View KPI trends for teams and employees. | **Monitor**<br>Review real-time performance as the team is actively working on tasks across channels<br>**Assist**<br>Jump in and help with escalations or expectations via Chat, Whisper or adding Work Notes to a task. | **Plan**<br>Create Shift Plans that automatically stagger breaks to maximize coverage<br>**Sche****dule**<br>Assign Agents to Shifts and publish a schedule for the next scheduling period.<br>**Manage**<br>Update published schedules when exceptions occur. | **Assess**<br>Review and assess the quality of completed interactions and tasks<br>**Train**<br>Recognize improvement opportunities and assign training tasks.<br>**Improve**<br>Document and improve agent skill sets through training, assessments, and coaching conversations. | **Work on tasks:**<br>Primarily works on Incidents and other interactions, such as chats and calls.<br>**Schedule**<br>View my schedule and the team’s schedules, and always adhere to them.<br>**Learn**<br>Complete training assignments with my coach to improve my skill set.<br>**Monitor**<br>Keep an eye on my performance and take steps to deliver on KPIs |

### ServiceNow core roles and responsibilities

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Role Title | Role Name | Description |
| Workforce Optimization Configurable Workspace Admin | sn\_wfo\_cfg\_ws.admin | Can administer the UIB workspace. |
| Workforce Optimization Configurable Workspace Manager | sn\_wfo\_cfg\_ws.manager | Can access Workforce Optimization Configurable workspace |
| Workforce Optimization Configurable Workspace Employee | sn\_wfo\_cfg\_ws.user | Minimum user role for access to the workforce optimization configurable workspace |

There are application-specific roles in addition to the core roles (E.g., ITSM, CSM, FSM)

## Coaching

### Overview

Team managers use the coaching module to manage skills and learning on their team. Additionally, you can maintain a centralized view of all your team members' skills and create coaching assessments at critical service moments to provide direct feedback to your team members on the quality of their work items. The team member can provide feedback on the effectiveness of the coaching.

- Use the Skill Matrix to maintain the skills of team members
- Decide what work managers should review by creating coaching opportunities
- Configure assignment surveys and coaching groups
- Create and assign training for agents to address skill gaps
- Use surveys to apply consistent, measurable scores across teams
- Create opportunities for improvement through integration with Continual Improvement Management.
- Utilize Predictive Intelligence to recommend skills for agents and provide targeted training to address identified skill gaps.
- Managers can generate skill review requests for agents to update skills.

### Skills Management

- Use Skills Management to associate skills with individual users or groups and assign them to tasks or projects.
- Assess the skills needed for your organization, identify gaps, and implement effective plans for hiring or training your teams.
- Skills can be used to automate the routing of tickets through Advanced Work Assignment.
- Use Skill Determination Rules to enable AWA to route work to the agents with the correct skill set.
  - Managers can request their teams to self-assess their skill sets, making maintenance and skill assignment a team effort.

The skills can be used to automate routing in Advanced Work Assignment (AWA).

**Roles**

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Role Title | Role Name | Description |
| Skill Recommendation User | sn\_sre.user | Grants’ rights to view skill recommendation tables. |
| Skill Recommendation Admin | sn\_sre.admin | Grants’ administrative rights to edit the properties for skill recommendation. |

### Skill Recommendations

- Similarity results are analyzed
  - Incidents with high similarity to the skill are used
  - The users assigned to the incidents are saved
- A staging table is populated
  - A record is created for every incident with a skill predicted with reference to the assigned user
- Thresholds
  - User A has solved Incidents with skill B more than N times
  - Once the threshold is met, a recommendation is created
- Approvals
  - Recommendations are routed to the user’s manager for assessment and approval

**Skill** **Recommendation** **flow**

### Coaching assessments

- Assessments are created when an opportunity trigger condition is met
- Assessment can also be created manually from an incident/task record
- A coach can open an incident and see the assessment for
- A survey can be configured and completed from this view
- Feedback ratings and comments can be added to the assessment
- Skills and training can also be assigned from this view

**Roles**

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Role Title | Role Name | Description |
| Coaching Admin | sn\_coaching.admin | Grants’ administrative rights to create, read, update, and delete (CRUD) coaching opportunities, assessments, training, and skills. |
| Coaching Coach | sn\_coaching.coach | Grants’ administrative rights to create, read, or update coaching opportunities, assessments, training, and skills. |
| Coaching Trainee | sn\_coaching.trainee | Grants’ access to add training, assessments, and skill records. |
| Skill Review Manager | sn\_wfo\_skillreview.manager | Can access Skill Review Requests. |
| Skill Review User | sn\_wfo\_skillreview.user | Minimum user role for access to Skill Review Requests |

### Coaching Opportunities

- Use the Coaching Opportunities to define a critical moment in a process in which a user can be coached
- When the triggered conditions are met, an assessment for that trainee is generated
- Admins can configure the frequency, coach groups, and an assessment survey in the opportunity record
- Managers can assign and track course items using learning tasks.
- Learning paths can be created, which are a collection of courses about a particular topic and provide a set of skills to the user on completion.

## Channel Management

### Overview

The Channels module is built on top of Advanced Work Assignment (AWA). Customers can utilize Channels to automate the routing and assignment of high-volume incidents and interactions for L1/T1 service desks. It is great to assign work to Tier 1 agents, as the assignment decision is automated using AWA. Team managers can view and monitor all incidents/cases, and interactions coming in via all your service channels, such as walk-up, virtual agent, and phone. etc., and jump into conversations or escalations to help team members.

- Channels route work to specific groups using skill-based routing to ensure that the right work goes to the right agent
- A service channel is a means of assigning specific types of work items to agents. Existing service channels can be modified, or custom service channels can be created. Add service channels, queues, and skill determination rules to automatically route incoming work items to agents.
- Channel administrators can automatically set up service channels and work item queues to route incoming work to agents.
- Managers can monitor their agents work across all channels and drill down into the KPIs to analyze team performance.
- Operational data collected here is used to forecast demand by the 15-minute increment to the 1-hour increment in the Schedules module
- An Omni-Channel Dashboard to give an overview of channels and queues
- OOTB integration with Amazon Connect or use the [ServiceNow Voice app ](https://docs.servicenow.com/csh?topicname=cloud-call-center-overview.html&version=latest)to integrate 3rd party telephone systems

Monitor work done across different service channels

- Track real-time information and progress of work done across teams
- Keep a real-time tab on the health of queues

View the status of the agent's present workload and activity

In addition, channel management provides

- Navigation and drill-down views for all users who manage one or more assignment groups
- Configurable KPIs for service channels and queues
- Manual allocation of work items
- User monitoring of ongoing cases, interactions, and other tasks
- Conversation monitoring and whispering for live chat conversations, managers are interested in (when integrated with phone)

**Roles**

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Role Title | Role Name | Description |
| Channel Management User | sn\_channel\_mgmt.user | Grants read access to channel reports, channel view, and queue report tables. |
| Channel Management Admin | sn\_channel\_mgmt.admin | Grants’ administrative rights to create, read, update, and delete (CRUD) channel reports, channel view, and queue report tables. |

### Skill-based routing

Skills management is used to associate skills with individual users or groups to route tasks more appropriately.

Skills-based routing is the process of assigning work to agents based on their skills.

- Skill-based routing in Workforce Optimization uses business rules to automatically assign work items to available users based on defined conditions
- Identify skills required for interaction with business rules
- Skill determination rules run on all new interactions
- When conditions are met, the required skills are added to the record to allow it to be routed to the agent with the correct skills

Example skill rule types:

- Common IT skills
- Language skills

**Note**: The Skills Library data plugin provides approximately 150 records that can be used to get started building a skill taxonomy.

**Roles**

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Role Title | Role name | Description |
| Skill Admin | skill\_admin | Defines conditions for incidents or interactions and adds the skill(s) required using skill determination rules. |

### Skill prediction

Predictive Intelligence, combined with the Skill Recommendation application, allows supervised machine learning to recommend skills for agents to resolve similar open incidents. It collects skill data based on skills agents have used for incident resolution.

Skill prediction process

| Column 1 | Column 2 |
| --- | --- |
| Similar results are analyzed | Incidents with a high similarity to a skill are used<br>The users assigned to the incidents are saved |
| Staging table is populated | A record is created for every incident with a skill predicted with reference to the assigned user |
| Threshold | User A has solved incidents with skill B more than N times<br>Once the threshold is met, a recommendation is created |
| Approvals | Recommendations are routed to the user’s manager for assessment and approval |

Roles

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Role Title | Role name | Description |
| Skill Recommendation User | sn\_sre.user | Grants’ rights to view skill recommendation tables. |
| Skill Recommendation Admin | sn\_sre.admin | Grants’ administrative rights to edit the properties for skill recommendation. |

## Work scheduler

### Overview

A work scheduler is used to manage work items that can be planned and require a human to decide the assignment of a work item due to its sensitivity and/or complexity. This module is ideal for L2 and L3 service desks that manage multiple types of work items and handle multi-day/week tasks. Managers can assign and schedule work items using a calendar interface.

Benefits and usage of the scheduling view for both schedulers and agents

- Manage all your team members' work items in one place
- Gain visibility into your entire team’s workload and assign work items all from a calendar interface
- Assign work items based on Skill Recommendation, whether it’s mandatory or optional skills
- Assign work items based on your agent’s shifts
- View events such as shift start/end times, PTO, training, and any event on the calendar, and schedule work according to availability
- Manage any work item from a centralized view
- Manual allocation with the ability to view who's currently working on which task on what days/time to enable assigning based on availability, skills, capacity, and region
- Work items can be incidents, problems, changes, requests, tasks, interactions, or any other type of work item.
- Coordinator/dispatcher
- View a list of unassigned work items I need to assign to the teams I am responsible for assigning/reassigning work items

Roles

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Role Title | Role Name | Description |
| Forecast admin | sn\_agent\_forecast.admin | Grants’ administrative rights to create, read, update, and delete (CRUD) forecast configuration tables. |
| Forecast user | sn\_agent\_forecast.user | Grants read access to forecast configuration tables. |

## Scheduling

### Overview

The Scheduling module enables managers to ensure they have coverage as they need it around the clock –you can create and publish shifts, so your team members know their shifts and breaks. Additionally, if you need to manage on-call scheduling, it’s integrated with our on-call scheduling app, allowing managers to create on-call schedules directly from the manager workspace. On top of that, you can manage time off requests and shift swap requests, as well as model different demand scenarios to ensure you have coverage for outlier events.

**Scheduling module capabilities**

The schedule module enhances the calendar management capability for the management, allowing them to

- Get a snapshot of scheduled resources vs. forecast for each of your teams
- Create schedules shifts, assign appropriate resources to individual shifts and schedules, and view all details in a single view
- Publish a schedule plan for the next schedule period by assigning agents to shifts by checking against demand
- Manage meetings, training, time-off requests, and shift swap requests from one single place
- Managers can filter the members based on location, skills, and assignment groups
- Make intraday adjustments to the planned schedules and manage approvals through the mobile application.
- Agents can set shift preferences to help managers with defining work schedules

Schedule adherence enables managers to

- Determine if teams and agents are adhering to set schedules
- Gain insight into time worked, not worked, adherence, and conformance
- Promote desired behaviors by setting expected adherence targets
- Connects the entire process (forecasting, scheduling, adherence) end-to-end on a single platform

Correct scheduling ensures that agent coverage is sufficient to fulfill demand.

- Set start times, end times, and break parameters for each shift the team works
- Publish a schedule plan for the next schedule period by assigning agents to shifts
- Manage time-off requests and shift swap requests from a single place
- Create on-call shifts and assign primary and secondary rotation groups to handle escalation scenarios

### Shifts

A Shift record defines:

- Included days of the week
- Start and End times
- Time zones
- Break parameters

The “Use agent time zone” option automatically uses the time zone specified in an assigned agent's user record.

### Shift signups

- A manager can mark schedule shifts for agent signup before publishing a plan.
- An agent's ability to sign up for shifts based on their preference in a schedule plan.
  - This experience is from the Service Operations Workspace

**Rules and policies for sign-up:**

- Schedule plans marked for sign-up with at least one shift marked for signup will be shown to the agents on the SOW workspace calendar module when the manager opens the plan for signup
- Shifts not marked for signup within a plan that is marked for signup are not available to the agents for signup
- Shifts marked for auto-assignment can potentially be auto-assigned to the agents when they sign up for them, as long as:
  - The rank of the shift is lower than the number of shifts to the auto-assign system property
  - A manager doesn’t manually remove the agent during the review stage before publishing the plan
- The manager can manually assign shifts signup by agent below the auto-assign threshold during the review stage

**Steps:**

1. Create a schedule plan
1. Mark the plan for signup
1. Enter a due date for signup
1. Add shifts
  1. Individual shifts can be marked for signup or can be left as-is for manual allocation
  1. Shifts marked for signup can optionally be marked for auto-assignment

### Schedules

- Use schedules to define one or more work shifts to be applied over a given time period
- The duplicate button will create a copy of a schedule, including all work shifts and agent assignments

The “use agent time zone” option automatically uses the time zone specified in the User record of an assigned agent.

### Schedule adherence

Use Schedule adherence to:

- Gain insights into how agent resources were historically used and plan your staffing needs based on that data
- Measure whether the effort spent on forecasting agent demand and scheduling team members is used optimally
- Discover coaching opportunities for your agents when you find gaps in their adherence

As a manager, you can do the following actions:

- Gain insights into whether your team is complying with published schedules
- Increase your team's performance by setting expected adherence targets
- View the time attendance of your agents by looking at details such as clock-in and clock-out times
- Analyze the historical time attendance of your team members
- View planned versus actual historical data for your team and individual agents
- Modify the clock-in and clock-out times of your agents

**Roles**

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Role Title | Role Name | Description |
| Shift Planning Scheduler/ Admin | sn\_shift\_planning.admin | - Create shift plans that automatically stagger breaks to maximize coverage<br>- Assign agents to shifts and publish a schedule for the next scheduling period<br>- Manage agent time-off, shift-swaps, and on-call from a single location |
| Shift Planning Agent | sn\_shift\_planning.agent | - Send a request for the time period you want to take off<br>- Trade shifts with your peers<br>- Know when your peers are working, taking time of, and on-call<br>- Personal preference on work schedule, so the manager can take preferences into account when creating schedules.<br>- Select shifts they want to sign-up for |
| Shift Planning User | sn\_shift\_planning.user | Grants read access for scheduling, including the ability to view schedules and shifts. |

### Integration between on-call shifts and normal shifts

Agent managers can now manage, and view on-call shifts and normal work shifts in Workforce Optimization with the On-call application. This allows managers who oversee a team of agents working across on-call and regular work shifts to view the team schedule in one centralized location. The key to on-call is the rotation concept, which consists of one or more rosters of agents that are rotated based on the setup of the roster record. The on-call application ensures this rotation mechanism on a best-effort basis, which means that the On-call API will attempt to minimize collisions between agents defined in different rosters. One common collision scenario is that the same agent can be part of two or more rosters, and based on the rotation rules, it is possible that for the same day, the same agent shows as both the primary and secondary point of contact for an On-call shift (Rotation).

Workforce Optimization shift planning enables managers to view the full On-call coverage of their groups in the Manager Workspace Schedule module, as well as agents with access to the Service Operations Workspace, allowing them to visualize their complete work schedule, including both regular work shifts and On-call shifts, on a single calendar view.

### Demand Forecast

This module has the following configurable pieces:

| Column 1 | Column 2 |
| --- | --- |
| Data Collection Definitions | Set conditions to define the data you want to collect for incidents or interactions (or any table). |
| Formula Parameters | Add parameters to be defined in the formula to calculate the resource count per hour in a day. |
| Resource Conversion Formula | Add formulas to convert forecasts to resources. |
| Group Forecast Configuration | Associate the configured formula with resource conversion to groups. |
| Forecast Properties | Configure properties to set data points for historical data collection, how frequently a pattern is repeated, which is defined as a period, and the number of periods to forecast. |

Demand forecasting enables the accurate prediction of the optimal number of agents at the right time to optimize peak performance while reducing costs. Using historical data from multiple channels, the resources required for the team’s work can be accurately predicted and forecasted.

After the forecast is created, resources can be calculated based on Performance Analytics data and work schedule trends.

This demand forecast can be visualized on the teams’ calendars to ensure the right people are working at the right time.

With the forecast feature, managers can accommodate manual resource adjustments within the overall forecast model during specific days/events, such as public holidays, product launches, or all-hands sessions.

The key to building the forecast is the data collection definitions, which are a set of conditions for collecting data on incidents, interactions, or any other table against which the forecast will be created.

For example, collect data for P1 incidents and forecast separately from non-P1 incidents. Scheduled jobs use the data collection definitions to determine which data is sent to the MetricBases for storage. The data is then used by the resource conversion formula to make predictions.

Predicting future demand based on historical trends and converting predictions into resourcing needs using configurable parameters and formulas leads to the following:

- Increase performance by always being staffed to meet the demand
- Reduce cost by optimizing workforce spend
- Realize greater team efficiency by always having the right people staffed on the right channels
- Utilize historical data for management to predict agent demand and create shifts with confidence
- Complex algorithms create predictions that managers can view through the calendar

**Roles**

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Role Title | Role name | Description |
| Forecast admin | sn\_agent\_forecast.admin | Grants’ administrative rights to create, read, update, and delete (CRUD) forecast configuration tables. |
| Forecast user | sn\_agent\_forecast.user | Grants read access to forecast configuration tables. |

## Teams

The Teams module enables you to set your primary team KPIs and track your team and team members against them. You can drill down into the child KPIs that drive the parent KPI and view all the source records used to generate that KPI value. You can create and track performance targets, as you saw, and have a 360 view of the agents work profile – shared across WFO and configurable workspace (e.g., Service Operations Workspace).

Teams in Workforce Optimization are a type of KPI group that allows the bundling of assignment groups together to measure and track the performance of those assignment groups in one place.

- Get a snapshot of the current workload, what each team member is handling, and the presence history and capacity utilization across channels
- A team (KPI group where type = Teams) may have one or more associated assignment groups
- Assignment groups may have one or more managers
- Individual users may be members of more than one assignment group
- Members of an assignment group may be denoted as the primary user
- Apply the KPI set once to a KPI group, and it automatically applies to all groups within that team
- Set performance targets for the group or individual group members to be users as input to performance reviews

**Indicators that matter most to teams**

- Define reports that make the most sense for each team
- Specify each user’s Primary assignment group in their user record
- Gain a 360-degree view of each agent’s work, schedule, skills, and training
- Specify each team’s primary and additional managers in the assignment group record

**Teams drill-down**

- Analyze the performance of all your teams across each team's primary KPIs
- View process optimization insights embedded contextually with your parent KPIs
- Dynamically filter the date range to generate KPI values
- Drill down to the source records used to generate KPIs
- Set performance targets for you and your team members

**Manage** **performance targets for your team members**

- Set performance targets for you and your team members
- Enable your team members to view performance targets in the Service Operations Workspace

**Roles**

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Role Title | Role name | Description |
| Teams User | sn\_team\_perf.team\_performance\_user | grants access to read KPI tables |
| Teams Admin | sn\_team\_perf.team\_performance\_admin | grants access to create and configure KPIs, KPI groups, and assignment groups in the Teams module |

## Manager Workspace

The Manager Workspace landing page displays metrics for ongoing work, helping managers make informed decisions.

- Real-time queue views and agent activity
- Monitoring and coaching capabilities
- Agent performance management
- Agent scheduling and shift management
- Reporting and analytics for both team and individual performance
- Review advanced analysis from Process Optimization to gain process insights
- Generate Skill Review Requests
- Create and designate learning path courses for team members

The manager workspace now integrates with the On-Call Scheduling module. The manager can now create and view on-call shifts along with regular work shifts and other events, all integrated within the Manager workspace schedule calendar.

**Roles**

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Role Title | Role Name | Description |
| Manager Workspace Admin | sn\_wfo\_cfg\_ws.admin | Grants’ administrative rights to create, read, update, and delete (CRUD) additional managers. |
| Manager Workspace Manager | sn\_wfo\_cfg\_ws.manager | Grants read access to primary groups, additional managers, and the approval button |
| Manager Workspace User | sn\_wfo\_cfg\_ws.user | Grants read access to the primary group and additional managers. |

## Other processes

### Channels and Queues

Examples

- Walk-Up
- Chat
- Incidents
- Phone (E.g., Amazon Connect integrated with Cloud Call Center)

### Predictive Intelligence

They are used for skills-based routing recommendations based on similarity.

### Service Operations Workspace

The calendar module in the Service Operations Workspace, an agent can:

- View their calendar, shift schedules, and those of their team
- Raise time off requests and submit them for manager approval
- Connect to teammates for shift swaps

### On-Call Scheduling

The On-Call Scheduling application identifies the assigned and available support group member, for example, when assigning an incident.

**Process Optimization**

- Identify people and process improvement opportunities with automated insights. By adding Process Optimization components to the Manager Workspace, Managers will gain insights into process bottlenecks and create improvement plans to increase efficiencies
- From the Manager Workspace, Managers will be able to drill into processes of records to identify process inefficiencies and bottlenecks
- Automated process insights/improvement recommendations will be surfaced to identify process/ people improvement opportunities, e.g., automation or coaching opportunities
- Create associations between leaf KPIs and Process Models
- Managers will gain insights into process bottlenecks, create improvement plans to increase efficiencies, and identify process and people-related improvement opportunities that are otherwise difficult to find with simple analytics (reporting or PA). The support manager gets visibility and understanding of how support teams are working at the process level

## Process governance

### Measurement

Key Performance Indicators (KPIs) evaluate the success of a particular activity toward meeting the critical success factors. Successfully managing KPIs can be achieved either by repeatedly meeting an objective (maintaining) or making progress toward an objective (increasing or decreasing). The Benchmarks feature provides instant visibility into your Key Performance Indicators (KPIs) and trends, as well as comparative insights relative to industry averages of your peers. You can contrast your organization's performance with recognized industry standards and view a side-by-side performance comparison with global benchmarks.

Two critical measurements for the effectiveness of WFO are:

| Column 1 | Column 2 |
| --- | --- |
| Average response time | Average time agents take to respond to a ticket over a given period. Average Response Time = Total time taken to respond to customers divided by the number of responses shared in the selected time period |
| First contact resolution | percentage of incidents that are resolved on the first interaction with the user. For phone and chat support, this means the incident is resolved before the call or chat is terminated, and no further follow-up is required |

Examples of other metrics applicable to teams

- Average handle time
- Closed incidents
- Quality
- First call resolution
- Average customer satisfaction
- Schedule adherence

### Metrics

Adherence and conformance

Some perspective

- It is not humanly possible to follow the scheduled shifts due to the nature of unstructured work
- Achieving 100% Adherence should be a different goal while using this capability
- Organizations should balance their target numbers depending on team culture and the type of work being handled
- Team members should have the discretion to perform their duties with schedule flexibility (to a certain extent)

| Column 1 | Column 2 |
| --- | --- |
| Adherence = | Minutes Worked in Shift |
|  | Scheduled Shift Minutes + Overtime |

| Column 1 | Column 2 |
| --- | --- |
| Conformance = | Minutes Worked in Shift + Overtime |
|  | Scheduled Shift Minutes |

Adherence – measures how closely an agent follows their schedule in getting work done

Conformance – measures work completed, regardless of when it was completed (absolute measure)

To support these metrics, login/logout integration is available. Whenever a login event occurs, the platform generates a session or an established event, and this clocking event is triggered. Similarly, the clock-out event is triggered whenever a user logs out.
