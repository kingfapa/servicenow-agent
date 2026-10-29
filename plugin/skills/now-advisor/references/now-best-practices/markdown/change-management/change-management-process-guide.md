# Change Management Process Guide

Source: https://mynow.servicenow.com/now/best-practices/assets/change-management-process-guide

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `4d813efd4c9a5e38bb56b2f2f532dee8f722770d9dbc1fdcf508b6f963b506f1`

**Change Management**

Process Guide

Australia

Updated: June 2026

Asset number: 0001216

## Introduction

This process guide explains how to enable the Change Management process in the ServiceNow platform. It is intended that this process be followed as closely as possible. ServiceNow encourages simple, lean ITSM processes, which are reflected in its out-of-the-box design. Additional functionality can be incorporated into what is offered; however, this should only be done in scenarios where a required business outcome is achieved that could not be attained using an out-of-the-box method. Following this approach should also ease upgrade paths and expand the platform's use.

## Principles and basic concepts

A Change is defined as the addition, modification, or removal of anything that could impact an IT Service. Change Management is the process responsible for facilitating change implementation.

The Change Management process aims to enable beneficial changes with minimal disruption to business operations, ensuring the best possible service quality and availability are maintained.

- Change Management should apply a consistent approach to risk assessment, business continuity, change impact, resource requirements, and change approval.
- The approach should maintain a proper balance between the need for a change and the timing of its integration into the live environment.

## Process scope

The scope of Change Management includes managing all changes to the live environment, including both services and technology.

## Process objectives

The objectives of Change Management are to:

- Provide a systematic approach to control the lifecycle of all changes.
- Facilitate beneficial changes with minimal disruption to IT services.
- Control changes to the Configuration Management Database (CMDB).

## Roles and responsibilities

| Column 1 | Column 2 |
| --- | --- |
| Role name | Change management process owner |
| **Description** | The Change Management Process Owner’s main objective is to own and maintain the process. The Process Owner is typically a senior manager with the ability and authority to ensure the process is implemented and utilized by all stakeholders. |
| **Responsibility** | - Defining the overall mission of the process.<br>- Establishing and communicating the process, mission, goals, and objectives to all stakeholders.<br>- Documenting and maintaining the process and procedures.<br>- Resolving any cross-functional (departmental) issues.<br>- Ensuring proper staffing and training for execution.<br>- Ensuring consistent execution of the process across the organization.<br>- Monitoring, measuring, and reporting on the effectiveness of the process to senior management.<br>- Continually improving the process. |
| **ServiceNow Role** | No role is required in ServiceNow for this; however, a login will be needed.<br>The sn\_change\_read could also be used for the process owner. |

| Column 1 | Column 2 |
| --- | --- |
| Role name | Change manager |
| **Description** | The Change Manager is responsible for the day-to-day facilitation of the change process. This role focuses on managing and administering all changes. |
| **Responsibility** | - Reviewing standard Change proposals and change model proposals.<br>- Reviewing standard change proposals for inclusion in the Standard Change Catalog.<br>- Reviewing unsuccessful changes for future improvements.<br>- Chairing CAB meetings.<br>- Managing CAB agendas.<br>- Facilitating emergency change approval.<br>- Reviewing retrospectively raised changes for process compliance.<br>- Managing the overall schedule of changes. |
| **ServiceNow Role** | In ServiceNow, a change manager will require the change\_manager role. Note: This role is included within the sn\_change\_admin granular role introduced in the Australia release.” |

| Column 1 | Column 2 |
| --- | --- |
| Role name | Change requester / change implementer |
| **Description** | The Change Requester/Implementer is responsible for creating and implementing changes. |
| **Responsibility** | - Raising change records to cover any work being done to a technology service.<br>- Explain why the change must go ahead.<br>- Provide detailed business impact.<br>- Providing detailed implementation steps.<br>- Providing pre- and post-implementation test information.<br>- Providing detailed risk information and a mitigation approach.<br>- Providing a backout plan where possible.<br>- Implementing the change following the approved plan at the approved time.<br>- Review the change after implementation to confirm its success.<br>- Taking appropriate steps if the change has not gone as intended. |
| **ServiceNow Role** | The sn\_change\_write role (which contains sn\_change\_read). Tier 1 service desk agents should use the sn\_service\_desk\_agent role, which in Australia bundles sn\_incident\_write, sn\_problem\_write, sn\_change\_write, sn\_request\_write, and tracked\_file\_reader. <br><br>These granular roles are delivered by the ITSM Roles — Change Management plugin (com.snc.itsm.roles.change\_management). |

| Column 1 | Column 2 |
| --- | --- |
| Role name | Change approver |
| **Description** | The Change Approver must determine if a change has been well-planned enough to have mitigated the risk to services as far as possible.<br>**Note:** The role of approver may, in some models, also be replaced by automated quality or policy checking tools |
| **Responsibility** | - Review the entire contents of the change.<br>- Approve/reject changes based on the content.<br>- Request more information if an approval decision is not made. |
| **ServiceNow Role** | Business Stakeholder role business\_stakeholder is required. This role allows users to view and approve records across all ITSM products.<br>The ITIL role can also approve changes. |

| Column 1 | Column 2 |
| --- | --- |
| Role name | Cab manager |
| **Description** | The CAB Manager will facilitate the CAB meeting, or can delegate the responsibility |
| **Responsibility** | - Review the full schedule of changes to identify concerns with potentially conflicting changes.<br>- Providing approval/rejection at CAB meetings for all changes discussed. |
| **ServiceNow Role** | The sn\_change\_cab.cab\_manager role is required in ServiceNow. Note: This role is included within the sn\_change\_admin granular role introduced in the Australia release.” |

| Column 1 | Column 2 |
| --- | --- |
| Role name | Change administrator |
| **Description** | Responsible for configuring all Change Management features and system properties. Replaces the need for the global admin role. |
| **Responsibility** | - Configuring Change Management features and properties. Configuring change model settings, approval workflows, and field policies. Administering CAB configuration |
| **ServiceNow Role** | ServiceNow Role: sn\_change\_admin. Contains: sn\_change\_write, change\_manager, sn\_change\_cab.cab\_manager. |

## How changes are initiated

- **Directly in ServiceNow** – IT support users can raise changes directly in the change application as required.
- **From an Incident** – Incident Managers, Service Desk Agents, or other IT Support staff can raise a change from an incident when they identify the fix required to resolve it.
- **From a Problem** – Problem Managers, Service Desk Agents, or other IT Support staff can raise a change from a problem when they identify the fix required to resolve the problem.
- **Through the Service Catalog** – Standard changes can be raised by selecting the appropriate template from the Standard Change Catalog.
- **From a Request** – Users outside the IT department can request IT to make a change to deliver the request.
- **Automatically via Integrations** – Changes can be automatically generated by external systems, such as vendor system integrations.
- **DevOps** – changes are initiated through the Change API through toolsets commonly used within development organizations.

## Change management lifecycle

States in any ServiceNow application serve a specific purpose. They are designed to clarify where a record currently resides in a process and display progress. States represent a unique phase in a process where a specific set of related activities is grouped and designed to achieve a particular outcome, allowing the process to move to the next phase. Our recommended Change Management process has the following state model:

- New
- Asses
- Authorize
- Scheduled
- Implement
- Review
- Closed
- Cancelled

### Process overview

## Change models

Traditionally, as characterized by ITIL, there have been change types that generally fall into three types:

- Emergency (typically caused by an incident)
- Standard (preapproved changes that all follow the same model)
- Normal (covering most other changes)

A limited set of change types is becoming less relevant as change enablement scales and the velocity of change increases. Enterprise Change teams serve a wide range of enterprise constituents. There is an increasing need for out-of-the-box Changes that can be adapted to a variety of common use cases, supporting business agility and enabling digital transformation. These are Change Models.

Change Models enable fit-for-purpose change with easier long-term maintenance and optimization through model states, state transitions, and modular &amp; reusable flows that leverage configurable approval policies. OOTB, ITSM provides model versions of the three traditional change types (Normal, Standard, Emergency) and a few additional example models. Examples of additional change modes are:

- Cloud infrastructure provisioning/decommissioning
- Automated change registration
- DevOps changes

Change models can be restricted to relevant teams using roles – this also allows new models to be built and tested in a low-risk manner, including proof-of-concept work with select teams. Additionally, change models can be duplicated and modified to quickly create new models for other common, well-documented use cases.

A model-based approach to change enables the change process to adapt to new, modern ways of working, simplifying existing ITIL change implementations. Ultimately, this increases change velocity and volume while improving stability and governance.

## Change templates

Change templates can be configured for all change models, not only Standard changes. Change templates provide baseline standardization for common changes by defining mandatory and read-only fields through template field policies. Templates follow a managed lifecycle: they can be proposed, reviewed, versioned, and retired. Key capabilities include:

- Create templates for specific change models
- Add change request fields to the template and define auto-populated values
- Set fields as read-only or required using field policies
- Create template categories with parent/child groupings
- View template usage and efficiency metrics on the Change Template Overview page

Users with the change\_manager role or write access to change models can create and manage templates.

### Enhanced data model for change templates

The enhanced change data model supports better categorization, change model linkage, and role-based access to change templates. Adoption of the enhanced data model is optional; it is available for newly created change models and does not require migrating existing standard changes. Benefits:

- Change managers can create a taxonomy for templates independent of standard change catalog categories
- Templates inherit properties from their associated change model
- Template access is governed through the change model’s Roles and User Criteria — any user granted access to create or modify a change model can propose and modify templates for it
- Two paths coexist for creating standard change templates:
  - New path: Create a template via the change templates feature and select the standard change model
  - Legacy path: Continue using the “Propose standard change” functionality with the older data model

Existing standard change catalog categories are not affected by the enhanced data model.

## Evaluating Risk

Identifying risks associated with change requests is critical for an effective change process. When identifying risks, keep a business-impact focus in mind:

- What could happen if it had an adverse impact on the business?
- Could the change impact other services operating on the same infrastructure?
- Could there be an impact on business processes?
- Will the change increase the support load?
- Are there multiple changes happening at the same time, and are they compatible?
- Do the test environment results accurately predict what will happen in production?
- Will the changed service be able to meet its service level targets?

There are four methods to calculate the risk of a change: Risk Assessment, Risk Conditions, Calculated Risk Score, and Risk Intelligence.

- Risk Assessments use the information provided by the end-user to assess a risk value
- Risk Conditions use predefined properties and conditions to calculate a risk value
- Risk Intelligence uses machine learning algorithms, looking at past changes to determine a risk value

The three methods can be used individually or in combination, although the Calculated Risk Score is a more mature approach to risk evaluation. If the methods are used together, the highest risk value (most conservative evaluation) from the methods is always selected. Poor risk identification can result in:

- Outages
- Incidents
- Failed changes

### Risk assessment

If Risk Assessment is in use, the user should be automatically prompted to answer a series of questions before submitting the change into the lifecycle. There are examples provided out-of-the-box, such as these commonly used questions:

- What is the complexity of change?
- Has this type of change been done successfully in the past?
- How successful have this team’s changes been in the past?
- How many users will be impacted?
- How many resources or groups are involved in implementing the change?
- How long does it take to implement the change?
- How long does it take to back out the change?

Answers to the questions should be provided as multiple-choice options and avoid subjectivity. For example, a question such as “What would be the scale of impact if the change did not go as planned?” should not have choices like “Large, Moderate, Small” since these answers may be interpreted differently by different people. Instead, use specific, quantifiable choices such as “Less than 50 users, 50 – 1000 users, 1000 – 5000 users, all users.”

### Calculated risk score

Calculated Risk Score uses the combination of Impact (determined manually or by Risk Conditions) and Probability (determined using change success scores) to determine a risk value

- Impact is the effect on the organization should the change fail. This can be set either manually or using Risk Conditions.
- Probability is the likelihood that the change will be executed successfully. This is set using change success scores.

### Risk conditions

Risk Conditions use predefined properties and conditions to calculate a risk value. These properties can be derived from data on the change or from records associated with the change, such as Business Service criticality from the CI, maintenance windows defined for CIs, or outage records associated with the CI. Below are some common risk calculations:

- Does this impact a critical business service?
- Is the change during a freezing period?
- Will the change require an outage?

Once all the mandatory information has been populated, the user must click the Request Approval button to submit their change to the lifecycle.

### Change success score

The change success score is a numerical expression that represents a change assignment/implementation group’s change success history. It can be used to evaluate the likelihood of future success and help determine the level of change rigor required. This score can be used as a helpful criterion in determining change risk (e.g., Calculated Risk Score) and approval policies. In addition to change group success, change models also have success scores. This will evaluate the likelihood of future success for a particular change model.

### Predicting intelligence

Predictive Intelligence for Change Management delivers enhanced change risk calculation using similar machine-learning algorithms. For best results, a large history of successful changes (~10k+) is ideal. Predictive Intelligence can be used in a ‘view only’ mode to observe the quality of risk results before allowing it to set risk values in the change process.

## Normal change process

### State: New

When a change is first created, it is in a state of New. This is effectively a draft of a change and can be updated as many times as necessary to populate all the content fully. A change in New is not considered live in the lifecycle and is not visible to anyone other than the requester who raised it.

When the requester is ready to submit the change, they click the Request Approval button.

Any mandatory fields to move the change through the process will be highlighted at this point and prevent the change from progressing until they are populated. The recommended mandatory fields are:

- Requested by
- Risk - this is usually automatically determined rather than open for selection
- Description
- Assignment group
- Short description
- Justification
- Implementation plan
- Risk and impact analysis
- Backout plan
- Test plan
- Planned start date
- Planned end date

If change tasks are in use, these may replace the need for an Implementation plan, risk, and impact analysis, backout plan, and test plan fields. This information could be stored in one or more tasks instead. Any tasks required during the change lifecycle should be created in the New state, whether automatically or manually. This ensures the full picture of the work is visible from the start. It enables appropriate resource planning when multiple groups are involved, since different tasks can be assigned to different groups.

### State: Assess

In the Assess state, the change receives the bulk of approvals, and all technical approvals should be completed.

Although not demonstrated out-of-the-box, it is very common to require a Change Manager to review the change before it is sent to any other team for approval. This is the first approval that should be requested at the Assess state. The Change Manager is conducting a quality control check to confirm that the content is acceptable for other approvers to proceed without wasting their time unnecessarily. They will be looking to ensure that all the necessary information to assess the change fully has been provided and that the requested change window appears suitable.

If the Change Manager rejects the change, it will revert to the New state and require a comment explaining the rejection.

If the Change Manager approves the change, the state remains at Assess, and all technical approval groups will be automatically requested to approve in parallel. The technical approvers are chosen based on the CIs included in the Affected CIs related list. In addition, the Change Manager can review the list of automatically added approval groups and manually add any additional CIs or CI groups at this point by using the ‘New’ button on the Group Approvals related list. If additional groups need to be added manually, this must be done while there are still approvals awaiting action, as the workflow will push the change to the next state if no approvals are outstanding. The Change Manager should review the automatically created list as soon as they have approved their own approval record and, at this point, add any additional groups they feel are missing.

Approvals should always be requested as groups rather than individuals to ensure no single point of failure. As soon as one individual in the group approves, the group has approved, and approval records for other members of the same group will no longer be required. If any approval is rejected, the change will be set back to the New state. The rejecter must provide a reason for rejection in the Comments field of the approval record. If more information is required to make a decision, the On hold checkbox displays a mandatory On hold reason text box. This can be cleared once the information is gathered. Once all approvals have been received, the change will automatically transition to the 'Authorize' state.

### State: Authorize

The Authorize state is primarily used to handle CAB approval. All high and moderate risk changes will automatically require a CAB group to approve. In addition, the Authorize state is where the scheduled dates for a change are fully confirmed.

CAB meetings can be held using the CAB Workbench functionality. Changes that require attendance at CAB will display a meeting record associated with the change in the CAB Agenda Items related list. If the change involves discussion at multiple CABs, each meeting record will be displayed.

During the CAB meeting, the CAB board members will review the overall landscape of changes during a relevant period for that CAB, as well as any Standard Change Templates added to the meeting. The CAB members will decide whether to approve the change, which can be actioned within the Workbench. The change can be rescheduled if required, as it is being reviewed alongside other changes.

If the change is approved at CAB, it will automatically move to the Scheduled state. If the change is rejected at CAB, it will be returned to the New state, and a reason will be provided. Low-risk changes do not require discussion at CAB. If a final check of the planned dates against the overall schedule is required, this can be achieved by requesting final approval from Change Management; otherwise, these changes will be skipped entirely in the Authorize state. Once all approvals have been received, the change will automatically move to the Scheduled state.

### State: Scheduled

No activities take place in the Scheduled state. The change is fully approved for implementation and is awaiting the Planned start date to be met. Once this occurs, the change can be moved to the Implement state using the Implement button.

### State: Implement

The change is currently being implemented. When the change moves to the Implement state, the Actual start date field is automatically populated with the date/time. The Work Notes field or Change Tasks can be used to capture all activities during implementation. Once the implementation is finished, the Implementer can move the change to the Review state using the Review button.

### State: Review

Post-implementation review activities take place during the Review state. When the change moves to the Review state, the Actual end date field is automatically populated with the date/time. The Implementer will populate the mandatory fields:

1. **Close code**
- Successful
- Successful with issues
- Unsuccessful
1. **Close notes**

The Actual dates can be overridden manually if they differ from the automatically populated window. If the Close code is not set to ‘Successful’, additional review fields or tasks can be included at this point, particularly for Change Management, to conduct a more thorough review of why the change did not proceed as planned and to identify lessons learned for the future. Once the review is complete, the Close button moves the change to the Closed state.

### State: Closed

No further activity can occur against the change. In situations where the change was originally considered successful but subsequently discovered to be otherwise, it is acceptable for a Change Manager to return the change to the Review state to conduct a PIR against it.

### State: Canceled

A change can be canceled at any time. This means the change is no longer required and will not go ahead. The Cancel Change menu option can be used to move the change to the Canceled status. It is mandatory to enter a Work Note to explain the cancellation reason. This is captured in the Activity Log.

## Emergency change process

Emergency changes cannot follow the normal lifecycle and lead times since they are in response to a service that has already failed or is about to fail if no action is taken. The lifecycle of an Emergency change follows the same lifecycle and activities as a Normal change, with a few exceptions.

### Approval

This is required only from an ECAB group that can decide on the content and timing of the change on behalf of everyone who would usually approve. This single approval occurs at the Authorize state, meaning the Assess state is not used at all.

### Retroactive changes

If it is critical to apply a change immediately without any opportunity to raise it as a record and seek approval, a retroactive change under the Emergency change process can be done. Emergency changes allow Planned start and Planned end dates to be in the past. These changes can be moved to the Review state immediately since they have already been implemented. It is recommended that these changes be reviewed by the Change Management team to ensure the process is not being used incorrectly and to understand why the changes were implemented without prior approval.

## Standard change process

### Standard change template lifecycle

The Standard change process provides a method to streamline administrative tasks associated with changes. It aims to address the reputational challenge that change is perceived as bureaucratic and a barrier to users performing their roles effectively. This process enables certain changes to bypass the lengthy approval process and CAB discussions, allowing them to be implemented on a much faster timescale.

Standard changes are low-risk, with repeatable implementation steps and a proven history of success. The Change Management team requires a means to track which changes are accepted as Standard changes and to provide approval for these. Therefore, these changes are stored as Standard Change Templates.

### Standard change templates

Users can propose a new standard change template through the Service Catalog or directly from an existing change if that change has not been marked as unsuccessful. The template will include all the repeatable information about that change. This is then routed to the Change Management team to review. If Change Management agrees that the change qualifies as a standard change, they will approve the proposal, and it will be published in the Standard Change Catalog as a template. From here, any user with the correct permissions can raise a new change from the template. This will populate a new change record with the data from the template. This pre-populated data will not be editable by the user to maintain the integrity of the approved template. Variable data, such as planned dates, can be added, and the change submitted.

Standard change templates can also be modified or retired using this same approach.

It is recommended that the templates be monitored over time to check how frequently they are used or whether any changes were unsuccessful. Change Management can conduct a periodic review to determine whether the template should be retired or temporarily withdrawn.

Predictive Intelligence for Change Management utilizes predictive intelligence clustering capability to identify and suggest Standard Change templates for creating a change. Standard Change Templates can be approved through the normal approval process or included within a CAB meeting and approved in the CAB Workbench.

### Standard change lifecycle

Once submitted into the lifecycle, standard changes move directly to the Scheduled state. No approvals are requested, as the approval has already occurred on the template. Where a scheduling approval is still required, this should take place during the Authorize state. Once the change is in a scheduled state, it follows the same lifecycle as a Normal change.

## Change process considerations

### Overdue changes

Any change that has passed its planned end date and is not in a New, Review, Closed, or Canceled state is considered an Overdue Change. The Change Management team should review these changes to determine if they have been implemented. If so, the record must be updated to reflect this. Otherwise, if the change did not proceed, the record should be updated accordingly. The Change Manager must decide what to do with the change in that scenario.

### Unauthorized changes

When an unplanned CI activity occurs on CIs within the application service, capturing the change and raising an approval request to review the impact are critical. There is no greater risk to the environment than unauthorized changes.

- Unauthorized changes frequently result in audit findings.
- Unauthorized changes can result in incidents and/or outages.

Without all teams following the change process, it can be challenging to fully understand the health and landscape of your environment. Tracking unauthorized changes enables monitoring while maintaining process oversight.

The focus of unauthorized changes should be on why they occurred and how to prevent them in the future. Approvals after an unauthorized change provide no value and are typically used to inform executive leadership that such changes have occurred. The creation of these changes should be simple if manual and easy to close out if created by either method (manual or automatic). Ways these can be remediated:

- Enforce manual use of the “Unauthorized Change” checkbox.
- Enable automatic creation of unauthorized changes.
- Communications regarding unauthorized changes should come through Problem Management.
- Report on unauthorized changes and associated problems.

### Conflict detection management

Individual change requests can be excluded from the conflict detection process by setting the Exclude from conflict detection field to true on the change record. When enabled, the change will not be evaluated during conflict checks and will not appear as a conflicting change when the conflict checker runs on other records. This is appropriate for changes with no scheduling or resource conflicts, such as low-risk automated changes or non-production environment changes. Establish a policy defining which change categories are eligible for exclusion, and review exclusions as part of regular change management reporting. The Australia release also updates the conflict detection architecture. By default (change.conflict.useprogressworker = false), conflict detection now runs using the Change Management Worker table (chg\_mgt\_worker) and the Change - Conflict Detection flow, replacing the previous dependency on the Progress Worker table. Setting the property to true reverts to the legacy approach. The trigger conditions for conflict detection remain unchanged: it runs automatically when Configuration item, planned start, and planned end dates are populated, and re-runs when those fields are updated or the state changes.

### Signs of an ineffective CAB

There are times when a Change Advisory Board (CAB) has proven ineffective in managing the risks associated with organizational changes. The CAB supports the authorization, assessment, and recommendation for or against changes from both technical and business perspectives.

Signs of an ineffective CAB include:

- CAB meets too frequently for all members to attend
- Conversely, CAB has members globally and is not scheduled frequently enough to allow for multiple time zones to attend
- All changes are routed to a single CAB for approval
- CAB serves as a ‘rubber stamp’
  - Audit findings

The CAB Meeting’s vision and strategy should be documented and communicated to address this issue. The responsibilities of the CAB Member Role should be defined and communicated. Weekly reports should be created, scheduled, and sent to all CAB members on a regular basis. Reporting analysis and surveys should be used to help define CSI items, ensuring the CAB’s continued support and effectiveness.

- Each functional area should maintain representation on the CAB.
- Attendees should meet in person when possible and join via web conference as an alternative.
- Virtual CABs are usually set up for low/medium risk Changes.
- Higher risk changes and Changes marked as “CAB Required” are discussed in CAB meetings.

### Excessive Approvals

Approvals are records that preserve necessary sign-off on changes for audit or compliance purposes. They should not be used for general communication. Many customers include approvals in change workflows as a record of informing stakeholders.

Indications of excessive approvals:

- Many approval steps in the workflow(s)
- Difficulty obtaining approvals
- User complaints about excessive approvals
- Everyone approves of everything

Approvals should be limited to those who truly need them, rather than being used for informational purposes. The Standard Change approval process should be used to streamline the approvals required for low-risk, repeatable changes.

The level of excessive approvals can be reduced by:

- Use approver groups.
- To the extent possible, automate and obtain all approvals prior to CAB.
- Only require approvals that are needed for audit or regulatory compliance.
- Manage acceptance with tasks.
- Utilize standard changes to minimize repetitive approvals.
- Derive approvals from the CI record when possible.

### Building change models for additional use cases

When building out change models for new use cases, consider the following:

- What model-states are necessary (e.g., is the Assess or Authorize step needed?)
- Where can you leverage criteria for automated state transitions
- Leverage modular state-based flows, could potentially use an existing flow from an OOTB model as a template
- How can I leverage approval policies &amp; data within and around the change to automate governance decisions? Are there any approval policies that I can work on for this new use case?

And remember...

- Model-states are reusable
- State-based flows are reusable
- Approval policies are reusable
- Not every state needs a flow (state transitions often can be sufficient)
- State transitions simplify the flow

Example approach to developing a new Change Model

| Column 1 | Column 2 | Column 3 | Column 4 |
| --- | --- | --- | --- |
|  | Description | Task | Owner |
| 1 | Identify – Understand the use case for the proposed mode, i.e., why the Normal change mode does not work for the use case | Create Story | Change Owner |
| 2 | Analyze Processes – End-to-end definition of the “as is” process and states, including conditions, approvals, lead times, field requirements, exception process, etc.<br>Normal change should cover the majority of needs | Flow chart | BPC |
| 3 | Analyze Processes – End-to-end definition of the “to be” process and states, including conditions, approvals, lead times, field requirements, exception process, etc. | Flow chart | BPC |
| 4 | Author User Stories – Update user story defining acceptance criteria | Update Story | BPC |
| 5 | Author User Stories – Review story with customer &amp; sign-off once agreed | Sign-off Story | BPC |
| 6 | Build – assign a story sprint and develop a solution | Assign Story | Scrum Master |
| 7 | Unit Test – unit test in dev environment | Peer review | Dev |
| 8 | UAT &amp; SIT – test code in appropriate environments before staging for production | UAT test and sign-off | Dev |
| 9 | Deploy – deploy code from pre-prod to production | Promote code | Dev |

## Other processes

### Incident management

Changes can be raised to resolve an existing incident. This can be done directly from the incident in question to link the two records together. The incident can be reviewed once the change is implemented to confirm its resolution.

A change may also cause incidents, and in this scenario, a new incident can be raised from the change, preserving the relationship between the two.

### Problem management

Problems will, in most cases, require a change request to implement a permanent fix or, at the very least, apply a workaround. A change can be raised from the problem record, while maintaining the relationship between the two, and once the change has been implemented, the problem can be reviewed to confirm it has been resolved.

### Configuration management

The configuration management system underpins all records and activities related to any CI. It contains details of the infrastructure vital to services, CIs, and their relationships.

The CMDB is used in the Change Management process to relate Configuration Items, including Business Services, to the change. This allows Dependency Views to be used, which displays the relationships between the selected CI and other CIs related upstream and downstream, highlighting the potential impact of a change.

Additionally, CIs related to the change using the Affected CIs related list are used to determine which groups should automatically approve the change.

Dynamic CI groups can also be used within Change Management to associate all the CIs within a CI group. CIs that do not apply can be removed directly from the Affected CI list. If a CI group is removed from the Change, all associated CIs will be removed as well.

### Release management

Change Management and Release Management are two related but very different processes. The correct application should be used for appropriate activity.

To the extent possible, the change process should only be used for the final stage of the release process – putting the change into production. Defining a release process to integrate with change provides context and visibility into changes without granting unnecessary access to change records.

Signs that the Change and Release processes are combined include:

- Test plans and activities included in the Change
- Changes are open for long amounts of time to capture pre-deployment activities
- Many tasks prior to deployment centered around validation

Where this is happening, define a release process that includes all pre-deployment tasks and documentation. ITSM's Digital Product Release application could be a good solution. Alternatively, it is possible to integrate into the release process using tools like DevOps Change Velocity to provide a positive user experience.

### User experience

Mobile platforms and Virtual technology can positively impact how end users interact with the end-to-end process and how the entire user experience is perceived. Consider which touch point can leverage the mobile platform to minimize delays. Tasks such as chat can all be performed on mobile devices. Consider also how Virtual agents can be deployed to assist users in common actions and tracking progress.

## Process governance

### Measurement

Key Performance Indicators (KPIs) evaluate the success of a particular activity toward meeting critical success factors. KPIs can be managed by either repeatedly meeting an objective (maintaining) or progressing toward it (increasing or decreasing). The Benchmarks feature provides instant visibility into key performance indicators (KPIs) and trends, as well as comparative insights relative to industry averages and your peers. You can compare your organization's performance against recognized industry standards and view a side-by-side comparison with global benchmarks.

In Change Management, the primary concern is the success of the process itself in terms of efficiency with which changes can be processed while maintaining a high level of due diligence to reduce risk to services.

The state flow in change is dynamic (it moves backward and forward, sometimes does not include states, and sometimes has different states), which makes it difficult to measure overall change duration in a meaningful way. Measuring metrics like ‘lead time to change’ is also challenging – low lead times often indicate high-quality DevOps changes. Still, they can also signal that many emergency changes are being made to circumvent the normal change process. Changes can also be planned and scheduled days, weeks, or months in advance – lead time, again, is not a good indicator of value being delivered here. Time-to-value is relevant for DevOps teams – commit to the deploy lead time. With that said, outside of DevOps, the time to approve a change is a good indicator of process efficiency, and the change stage is hindering time to value. Many changes do not require approval, which is a good thing.

Additionally, complex changes should be broken down to reduce risk and require less approval governance. This is why using time to approve is a measure of change maturity/efficiency. This measure would also consider DevOps changes that receive automatic approval (a positive aspect), as well as standard changes and non-standard changes that require no or minimal approval due to their minimal risk or impact.

Dashboards and Reporting

Process KPIs

- Provide information on the effectiveness of the process and the impact of continuous improvement efforts
- Are best represented as trend lines and tracked over time
- Monitored by the Process Owner

| Column 1 | Column 2 |
| --- | --- |
| **Item** | **Purpose** |
| Percentage of standard changes | Measure of process efficiency. The higher the total of standard changes, the more efficiencies are gained |
| Average time from submission to the Scheduled state | Measure of process efficiency. The shorter the time, the faster the changes are moving through the process |
| Percentage of unsuccessful changes | Measure of the effectiveness of the Change Management process |
| Percentage of changes that caused incidents | Measure of the negative impact to IT service quality |

The overall effectiveness of the change process can also be considered by

1. 'Average number of approvers' as a proxy for the effort of administering a change
1. 'Average time to approve' as a proxy for the velocity of change

Approval policies help with velocity, volume, stability, and compliance.

Platform analytics solutions

- ServiceNow provides a range of Platform Analytics solutions to help analyze and optimize business processes. Details of these can be found in the [docs](https://docs.servicenow.com/csh?topicname=c_performanceAnalyticsAndReporting.html&version=latest).
- Performance Analytics offers ITSM Dashboards for various applications. Details of these can be found in the [docs](https://docs.servicenow.com/csh?topicname=itsm-dashboards-content-pack.html&version=latest).
- The Benchmarks application provides instant visibility into your KPIs and trends, offering comparative insights relative to industry averages and top performers. You can compare your organization's performance with industry standards, assess it against global benchmarks, and implement improvement recommendations. Details of this can be found in the [docs](https://docs.servicenow.com/csh?topicname=r_Benchmarks.html&version=latest) and [Best Practices](https://mynow.servicenow.com/now/best-practices/home)
- ITSM Success Dashboard indicators provide insights to the IT leadership team and process owners, enabling them to measure the performance of their ITSM implementation using ServiceNow-defined KPIs. Details of this can be found in the [docs](https://docs.servicenow.com/csh?topicname=success-dashboard-indicator-landing.html&version=latest) and [Best Practices](https://mynow.servicenow.com/now/best-practices/home)

## Process diagrams

The process diagrams in editable format (Visio) can be found in the [Best Practices](https://mynow.servicenow.com/now/best-practices/home).

## Process scoping considerations

When scoping the process, a range of considerations should be considered. The following are areas to be considered when scoping the process:
