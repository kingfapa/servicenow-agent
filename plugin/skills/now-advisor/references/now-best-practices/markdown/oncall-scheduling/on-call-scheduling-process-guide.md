# On-Call Scheduling Process Guide

Source: https://mynow.servicenow.com/now/best-practices/assets/oncall-scheduling-process-guide

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `01281c8b46278e302f1225c21b693fee2cf67c99264cb9f3d9c5d21b13a9f87f`

**On-Call Scheduling**

Process Guide

Australia

Updated: August 2026

Asset number: 0003571

## Introduction

This process guide will provide a detailed explanation of how On-Call scheduling is enabled within the ServiceNow platform. It is intended that this capability be followed as closely as possible. ServiceNow encourages simple, lean ITSM processes, which are reflected in the out-of-the-box design. Additional functionality can be incorporated into what is offered; however, this should only be in scenarios where a required business outcome is gained that could not be achieved using an out-of-the-box method. Following this approach should also ease upgrade paths and enhance the ability to expand the platform's use.

## Principles and Basic Concepts

Provides the ability to create on-call schedules and escalation trees. When an incident is created, dynamically route the escalation to an on-call resource. On Call enables you to configure and build distinct on-call schedules for each process and assignment group. When using the Notify plugin, resources can utilize SMS and Voice escalations to interact with the escalation, acknowledge incidents, and more. Escalations can be logged and reported on. These logs can be archived and purged when the Data Archiving plugin is active.

On-Call scheduling is typically used for critical system support. The On-Call Scheduling application helps you ensure dedicated support team members are available to resolve issues. You can set up on-call schedules, roster rotations, and escalation policies, escalate notifications for a group, and determine the current contact for an escalation. Information about who is on-call can also be viewed within the Service Operations Workspace.

## On-Call Scheduling Scope

The scope of On-Call scheduling includes:

- Groups
- Schedules
- Rosters
- Time-off requests
- Escalation Policies

Further information on On-Call Scheduling can be found in the docs.

## Roles and Responsibilities

The Process Owner for On-Call scheduling owns the overall process around On-Call scheduling.

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Process Owner |
| Description | The On-Call scheduling Process Owner’s primary objective is to own and maintain the On-Call scheduling process. The Process Owner is usually a senior manager with the ability and authority to ensure the process is rolled out and used by all stakeholders. |
| Responsibility | - Defining the overall mission of the process<br>- Establishing and communicating the process, mission, goals, and objectives to all stakeholders<br>- Documenting and maintaining the process and procedures<br>- Resolving any cross-functional (departmental) issues<br>- Ensuring proper staffing and training for execution<br>- Ensuring consistent execution of the process across the organization<br>- Monitoring, measuring, and reporting on the effectiveness of the process to senior management<br>- Continually improving the process |
| ServiceNow Role | There is no role in ServiceNow. It is a functional role to support the process |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Rota Admin |
| Description | Create, edit, and delete Shifts. Manage all Shift aspects: rosters, roster members, coverage, and time-off. |
| ServiceNow Role | rota\_admin |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Rota Manager |
| Description | Manage a group's Shifts. Manage associated data if delegated for a particular group |
| ServiceNow Role | rota\_manager |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Roster Admin |
| Description | Can manage On-call Rotation information |
| ServiceNow Role | roster\_admin |

## On-Call Scheduling Description

The On-Call Scheduling application helps you ensure dedicated support team members are available to resolve issues. You can set up on-call schedules, roster rotations, and escalation policies, escalate notifications for a group, and determine the current contact for an escalation.

To set up SMS as a contact method, Notify must be configured, and at least one Notify phone number must be assigned to the On-Call Group number group.

### Groups

- Schedules are defined in a group, which can have multiple shifts.
- Not all members need to be in the On-Call shifts.
- Each group should have a Group Manager to manage the shifts. This is also helpful for managing escalations.
- If a group requires two different On-Call schedules (for example, a business hours schedule and a 24-hour schedule for a different purpose), another group will be needed.

### Shifts

A shift defines the On-Call hours for a group.

A shift is associated with a specific group and a corresponding schedule.

A group can have multiple shifts, but the schedules should not overlap

- For example, you shouldn’t have a 24x7 shift and a business hours shift for the same group
- One group can have three shifts for three different 8-hour windows to define a 24-hour coverage
- Shift overlaps can be enabled to allow for a shift handover period

Note: Shift was called Rota in previous releases. The number of shifts and their hours can vary wildly.

Shift overlaps are possible to allow for a shift handover period. For example, a 15-minute overlap between shifts. Shift overlaps can be disabled or enabled via a System Property as a default shift overlap can be configured to differ from the default on each group.

For each shift, On-Call reminders can be enabled, and the lead time can be specified.

### Schedules

- Defines the On-Call hours for a shift
- A company that wants to have tasks covered around the clock would use a 24/7 schedule.
- On-call scheduling does not utilize existing schedules (except as a template). When a new shift is created, a new schedule and schedule entries are created
- Schedules can contain exclusions for public holidays, etc.
- Schedules must have a shift time zone
- You are probably familiar with the schedule concept from SLA’s
- On-Call schedules are managed through a UI that allows you to add/remove shifts and members, update escalation policies for each shift, update group settings, and publish a shift
- An On-Call Group Template is recommended when you create one or more shifts that make up an On-Call schedule. These templates can be applied when creating an On-Call schedule for a group. Shifts can be created in Draft state and published when all the necessary information is available

### Rosters

- A roster is a list of users who are part of a shift. Rosters define the frequency and order of rotation. You have one roster for each escalation level: Primary, secondary, tertiary, etc.
- Rosters can vary wildly. They could be unique for each group.
- For each group and shift, you must determine the number of rosters required (levels of escalation), identify the members for each roster, and specify the rotation frequency.
- If there are multiple shifts for a group, you must determine if the members also rotate between shifts. For example, they might have a day shift for a week and then a night shift for a week. This will mean a complex synchronization between many rosters and members.

### Time-off requests

- Default PTO approval preference for all groups is defined in a system property.
- Setting can be configured (to override the default) for individual groups and cannot differ between shifts for the same group.
- The Request time off button is not shown if PTO approval preference is not allowed. Managers can still manually enter time off and coverage.
- If the PTO approval preference is approval, then the Proposed cover is optional. Approval goes to the Group manager.
- If PTO approval preference is without approval, the Proposed cover is mandatory – even if the user doesn’t have any shifts
- These are the OOB notifications for Time Off Requests sent via workflow On-Call: Time Off Approval

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Notification | When | To |
| On-Call Calendar sends time off created notification | Time off created (when approval is not required) | Group Manager |
| On-Call Calendar sends time off approval notification | Time off created (approval required) | Group Manager |
| On-Call Calendar PTO Coverage replacement notification | Time off created (when approval is not required) OR Time off approved | Proposed Cover person |
| Request rejected | Manager rejects PTO request | Requester |

### Escalation Policies

When referring to Escalations and Escalation Policies, we only define the people in the escalation chain/path. There are no automated notifications along the escalation path unless there are Escalation Triggers defined (next)

Escalation policies are defined on a per-shift basis. The default escalation policy is to rotate through the roster members in order, and then finally try the Catch-all user/group

Multiple escalation policies enable customers to create more than one custom escalation policy per shift, such as different escalation policies based on the incident priority, task record type, and other factors.

For a Shift with only one Roster (just the Primary), the default escalation path is to rotate between all the members of that one roster. This means that people who are supposed to have a day off (not scheduled to be On-Call) may be contacted if the On-Call person is unresponsive.

For a Shift with multiple rosters (Primary, Secondary, etc.), the default escalation path is to rotate through the On-Call person for each roster. The On-Call person from the Primary roster, then the On-Call person from the secondary roster, and so on. People who are not On-Call for any roster are not contacted.

Default escalation policies can include an optional Catch-all. The options are:

- Notify the Group Manager (the Manager defined on the Group record)
- Notify Individual (then specify a User in a reference field)
- Notify Roster (then specify a Roster in a reference field – Usually the Primary roster)
- None – there is no catch-all notification

On-call scheduling escalations are canceled if the Incident has an assignment group change

A custom Escalation Policy can be defined for each shift. A Group with multiple Shifts can have multiple escalation policies, with a different one for each shift.

Any list of Users or groups can be defined in any order. Roster rotations are still possible. Scripted policies are not possible.

You can add as many steps as you like, but cannot add the Group that owns the shift to the Groups field. That is, you cannot notify the entire Group in an escalation step.

Custom Escalation Policies are not reusable between shifts

Example: You can define a custom policy that still notifies the rostered On-Call people in order, but then has multiple fall-back contacts instead of the one “catch-all.” Like the Group manager, then the manager’s manager.

## Other Processes

### Work Routing Guidance

ServiceNow offers six primary capabilities for routing work to agents.

- Manual Assignment
- Assignment rules
- Advanced Work Assignment
- On-Call scheduling
- Predictive Intelligence
- Workforce Optimization

See [How to optimize work assignment over time in ServiceNow with 6 out-of-box capabilities](https://www.servicenow.com/community/itsm-articles/how-to-optimize-work-assignment-over-time-in-servicenow-with-6/ta-p/2382243)

### Service Operations Workspace

- The recommendations who might be able to assist from the experts in this case are based on both the Primary CI and services together with all related CIs and Services of the incident
- The support group recommendations are displayed in the Expert's on-call panel
- Agents can see data for a maximum of three groups in the side panel
- Plugin required: On-Call Scheduling for Service Operations Workspace

## Other Resources

See this [community post for a collection of On-call Scheduling: Set-up Videos](https://www.servicenow.com/community/itsm-articles/on-call-scheduling-set-up-videos/ta-p/2529419)
