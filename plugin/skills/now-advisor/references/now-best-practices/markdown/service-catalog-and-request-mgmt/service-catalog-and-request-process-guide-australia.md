# Service Catalog and Request Mgmt - Process Guide

Source: https://mynow.servicenow.com/now/best-practices/assets/service-catalog-and-request-mgmt-process-guide

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `527e4e7bf068c1d950fad3e3fec7f9c9c1538cecff4a6a5ff21eac023c9790e6`

**Service Catalog and Request Management**

Process Guide

Australia

Updated: July 2026

Asset number: XXXXX

## Introduction

This process guide will provide a detailed explanation of how the Service Catalog and Request Management process is enabled within the ServiceNow platform. It is intended that this process be followed as closely as possible.

ServiceNow encourages simple, lean processes, which are reflected in the out-of-the-box design. Additional functionality can be incorporated into what is offered; however, this should only be done in scenarios where a required business outcome is achieved that could not be attained using an out-of-the-box method. Following this approach should also ease upgrade paths and enhance the ability to expand the platform's usage.

## Process Overview

End to end, the process runs from request to delivery. A requester browses or searches the catalog, completes the item's questions (variables), and submits. The platform then drives the order through a defined fulfillment process that requests approval where required and assigns fulfillment tasks. Once all work is complete, the item is delivered and the request is closed.

A single submission generates a request and one or more requested items; each requested item is fulfilled through catalog tasks carried out by fulfillment groups. Requesters reach the catalog through ServiceNow Employee Center, Service Portal, the Now Mobile app, and Virtual Agent, so the experience is consistent across channels.

The process has two connected halves. Catalog administrators and owners design and build the catalog - catalogs, categories, items, variables, UI behavior, availability, and the fulfillment process. Requesters and fulfillment teams then use that catalog at run time to raise and complete requests. This guide documents both halves and the governance that keeps them healthy.

- Design and publish catalogs, categories, and catalog items.
- Capture requester input with variables and variable sets.
- Automate fulfillment with an assigned process (Flow, workflow, or execution plan).
- Control availability with user criteria and govern change through ownership and update sets.
- Give requesters visibility of their request stage and state, and measure the process for improvement.

### Process Flow Diagram(s)

The diagram below shows the request fulfillment flow, from catalog submission, through the Request and Requested Item records, any required approvals, fulfillment tasks, and final delivery or rejection.

Service Catalog and request management Diagram

### Process Prerequisites

Confirm the following are in place before designing and publishing the catalog.

- Service Catalog is available: it is a ServiceNow platform feature that is active by default on the instance.
- Roles are assigned: catalog\_admin for administrators; catalog\_manager and catalog\_editor for delegated owners; catalog\_builder\_editor and catalog\_builder\_developer for guided item building.
- A request experience is provisioned - ServiceNow Employee Center and/or Service Portal - through which the catalog is published to requesters.
- A fulfillment approach is agreed: the process engine for items (Flow Designer **or** workflow) and the fulfillment groups that carry out catalog tasks.
- A category taxonomy and a user-criteria strategy are defined, so items are **organized** and shown only to the audiences entitled to request them.
- The Now Assist in Virtual Agent plugin is installed and configured when Now Assist in Conversational Catalog Request is in scope. The required ServiceNow web, Microsoft Teams, or Slack channels are also enabled and configured.

## Principles and Basic Concepts

### Service Catalog

The Service Catalog is a database listing all IT and other services offered to the business. It allows users to browse or search the offerings and request them like an online shopping experience.

The Service Catalog includes a Shopping Cart where users can create a bucket of all the items they wish to request before they submit the request by ‘Checking Out.’

### Request Management

Request Management is the process that immediately follows the submission of a request from the Service Catalog. It includes the approval of the overall request and/or individual requested items and the subsequent fulfillment of those.

### Catalog item types

The Service Catalog supports several kinds of catalog entries. Choosing the right type for each service keeps the catalog easy to use and to maintain:

- Catalog item: a standard orderable service or product, with its own variables, approvals, and fulfillment process.
- Record producer: a catalog-style form that creates a record on a specific table, such as an incident or an HR case, instead of a standard request line.
- Order guide: leads a requester through ordering several related items together, such as new-hire onboarding, and passes shared answers to each item.
- Content item: a catalog entry that links to information or an external page rather than placing an order.

### Variables and variable sets

Variables are the questions a requester answers on a catalog item, and their types include single-line and multi-line text, choice, reference, lookup, date, checkbox, and attachment.

A variable set is a reusable group of variables shared across several items, and a multi-row variable set (MRVS) captures repeating rows of data.

## Process Scope

The scope of Service Catalog Management includes:

- The creation of the catalog and its taxonomy
- Maintenance of the service catalog
- Creation of individual offered services and the fulfillment mechanism for each
- Modifying and retiring existing services

The scope of Request Management includes:

- Approval of overall requests, such as by a line manager or financial controller
- Approval of individual requested items, such as by an IT hardware provisioning team
- The fulfillment of all requests within the agreed delivery timeframe

## Process Objectives

The objectives of Service Catalog and Request Management are to:

- Ensure all users in the organization are made aware of and can easily request all services offered
- Provide a consistent and repeatable process for requesting and fulfilling services to ensure that users’ expectations are clearly set and continually met, thus maintaining high customer satisfaction levels.
- Ensure that all new services can quickly be offered in the catalog as soon as they become available.

## Roles and Responsibilities

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Process Owner |
| Description | The Process Owner’s objective is to own and maintain the Service Catalog and Request Management process. The Process Owner is typically a senior manager with the ability and authority to ensure the process is implemented and followed by all stakeholders. |
| Responsibility | - Defining the overall mission of the process<br>- Establishing and communicating the process, mission, goals, and objectives to all stakeholders<br>- Documenting and maintaining the process and procedures<br>- Resolving any cross-functional (departmental) issues<br>- Ensuring proper staffing and training for execution<br>- Directing the Service Catalog and Request Management roles<br>- Ensuring consistent execution of the process across the organization<br>- Monitoring, measuring, and reporting on the effectiveness of the process to senior management<br>- Continually improving the process |
| ServiceNow Role | There is no role in ServiceNow; it is a functional role to support the process. |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Catalog Manager |
| Description | The Catalog Manager’s purpose is to ensure changes to the service catalog are controlled and to enable efficient resolution of service catalog issues. |
| Responsibility | - Managing the day-to-day activities of the process; ensuring operating procedures are documented to support the activities<br>- Assigning tasks to Catalog Editors for execution<br>- Coordinating interfaces between service catalog management and other processes<br>- Ensuring that all operational services (and those being prepared) are recorded within the service catalog<br>- Ensuring that appropriate views of the service catalog are maintained and made available to those for whom they are targeted<br>- Reviewing record history and running reports to improve the Service Catalog Process. |
| ServiceNow Role | catalog\_manager, sn\_uni\_req.ur\_service\_owner if Universal Request is in use |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Catalog Editor |
| Description | The Catalog Editor is responsible for adding, modifying, and retiring catalog items, based on approvals from the Service Owner and Catalog Manager. |
| Responsibility | - Creating new catalog items and associated workflows<br>- Modifying existing catalog items<br>- Retiring obsolete catalog items |
| ServiceNow Role | Both catalog\_admin and catalog\_editor roles are required. sn\_uni\_req.ur\_admin is required if Universal Request is in use.<br>The pd\_admin role will be needed to utilize order guide sequencing.<br>The catalog\_builder\_editor role is required to create or edit items using the Catalog Builder capability. |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Service Owner |
| Description | Each service must have a designated owner. The service owner is accountable for delivering a specific service and is responsible to the customer for initiating, transitioning, and providing ongoing maintenance and support for that service. |
| Responsibility | - Creating the service delivery method, including the engagement and coordination of the teams responsible for fulfillment<br>- Gathering catalog requirements and creating catalog items from the created templates.<br>- Ensuring the service is being delivered within the expected timeframe and cost allocated to it<br>- Approving requests against the service |
| ServiceNow Role | itil |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Requester |
| Description | The person making the request. Requesters may be anyone in the organization. Requesters may submit service requests on behalf of others. |
| ServiceNow Role | No role is required in ServiceNow for this; however, a login will be needed |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Approver |
| Description | Line managers, Service Owners, and business stakeholders (e.g., financial management) are responsible for reviewing request details and granting approval or rejecting the request. The actual number and type of approvals required depend on the individual request.<br>Approval of Catalog Item edits can also be enabled using the pre-publish capability. A Request will be created as part of the pre-publish [setup](https://docs.servicenow.com/bundle/tokyo-servicenow-platform/page/product/service-catalog-management/task/set-up-cat-builder.html), so the standard business\_stakeholder role is all that is required. |
| ServiceNow Role | business\_stakeholder |

| Column 1 | Column 2 |
| --- | --- |
| Role Name | Fulfiller |
| Description | The individual assigned to execute a specific task(s) to fulfill the service request. |
| Responsibility | - Actioning the activities in their assigned tasks<br>- Updating the task to reflect the current progress and providing detailed information to allow a Service Desk Agent to give the Requester an update on progress if required<br>- Closing the task when completed with closure information |
| ServiceNow Role | itil |

### Specialist Roles

Request Read and Write roles

Roles to assign access permissions at a granular level when the ITSM Roles - Request Management plugin (com.snc.its.roles.request\_management) is activated.

- sn\_request\_read
- sn\_request\_write
- sn\_uni\_req.universal\_request\_read (Only needed if Universal Request is in use)
- sn\_uni\_req.universal\_request\_write (Only needed if Universal Request is in use)
- sn\_uni\_req.routing\_agent (Only needed if Universal Request is in use)

Request and Requested Items permissions are added such that:

- Allows read access to users with sn\_request\_read role, such that users with this role who are assigned as approvers for this record can view it (both in the UI and via APIs) and cannot read other Requests and RITMs.
- Allows editing of RITMs by users with sn\_request\_write role

Only users who can read RITMs can read their questions and answers.

**Business Stakeholder Role**

The business\_stakeholder role is to approve, view, or read records across the organization and view reports.

This role contains the sn\_incident\_read, sn\_problem\_read, sn\_change\_read, sn\_request\_read, and approver\_user roles.

You can assign this role to any user who is a business stakeholder to review and approve requests, provided you have the appropriate entitlement from your organization. This role is added when the Business Stakeholder plugin (com.snc.business\_stakeholder) is installed.

### RACI Matrix

The matrix summarizes accountability across the catalog lifecycle.

(R = responsible, A = accountable, C = consulted, I = informed)

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 | Column 8 | Column 9 | Column 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Activity** | **Process owner** | **Service owner** | **Catalog admin** | **Catalog manager** | **Catalog editor** | **Builder developer** | **Requester** | **Approver** | **Fulfiller** |
| Define and maintain catalog and categories | A | I | R | R | R | I | - | - | - |
| Request a new or modified service | I | R | C | A | - | - | - | - | - |
| Create Catalog Builder templates | A | - | R | I | I | C | - | - | - |
| Build and publish catalog item | A | C | R | R | R | R | - | - | - |
| Configure variables and variable sets | I | - | A | R | R | R | - | - | - |
| Configure UI policies and client scripts | I | - | A | C | C | R | - | - | - |
| Define fulfillment process and groups | A | C | R | R | C | R | - | - | C |
| Set availability with user criteria | A | C | R | C | C | I | - | - | - |
| Test and sign off the item before publish | I | A | C | C | R | C | - | - | - |
| Retire an item | I | A | C | C | R | - | - | - | - |
| Submit request | A | I | - | I | - | - | R | I | - |
| Approve request | A | I | I | I | - | - | I | R | C |
| Fulfill catalog task | A | I | C | I | - | - | I | I | R |
| Close request and confirm delivery | A | I | - | I | - | - | I | - | R |
| Review conversational coverage | A | C | C | R | C | - | - | - | - |
| Govern access and report | A | C | R | C | C | I | - | - | - |

## How requests are initiated

Directly in ServiceNow - The Service Desk Agent can create a request on behalf of the user directly, as a result of a phone call, email, or chat from the user.

Self-Service - End users can utilize the Self-Service Employee Center to directly create a Request.

Automatically via Integrations - Certain requests can be automatically generated via the Virtual Agent chatbot from Slack or Microsoft Teams

Virtual Agent - A request can be created directly from a chat conversation

Walk-Up Experience - A request can be created using the Walk-Up interface when a user visits the onsite IT Support location

Now Mobile App - A request can be created on the mobile using the Now Mobile App.

## Implementing the Service Catalog

This section gives a new implementer a clear, ordered path to stand up the Service Catalog in ServiceNow. Each step aligns with the roles and process activities described elsewhere in this guide, so a newcomer can see how the pieces fit together before building their first catalog item.

### Before you begin

The Service Catalog application ships with the ServiceNow AI Platform and is active by default, so no installation is required to start. Confirm the foundations listed under Process prerequisites are in place and decide which delivery surfaces (Employee Center, Service Portal, and Virtual Agent) are in scope.

### Implementation steps

Follow these steps in order. Each one is described in more detail in the process sections that follow.

- Planning the catalog: decide which services to offer, group them into clear categories, and identify the owner and fulfillment group for each service.
- Provisioning roles: assign the build and administration roles (catalog\_admin, catalog\_editor, and catalog\_manager) and the fulfillment role (itil), as set out in Roles and responsibilities.
- Creating the catalog structure: create one or more catalogs and their categories so requesters can browse and search the catalog intuitively.
- Building catalog items in Catalog Builder: use the guided, low-code Catalog Builder to define each item's descriptors, variables, approvals, and fulfillment step; Now Assist can draft an item from a plain-language description.
- Designing variables and behavior: keep variables few and focused, and use Catalog UI Policies on the UI Policy tab (with scripts and multiple actions where needed) to show, hide, make mandatory, or set variable values.
- Configuring approvals: add the approval logic each item requires, such as manager approval on the overall request or item-level approval by a fulfillment team.
- Configuring fulfillment: define the fulfillment process in Flow Designer and add the stages and states that let requesters follow the progress of their request.
- Testing and publishing: have the Service Owner test the item in a sub-production instance, then publish it; a custom update set prefix keeps the changes easy to track.
- Surfacing the catalog: enable the Employee Center and Service Portal, and, where conversational requests are in scope, Now Assist in Conversational Catalog Request in Virtual Agent.
- Measuring and improving: use the Platform Analytics dashboards and KPIs in Process governance to monitor adoption and fulfillment, and refine the catalog over time.

### User Criteria

User criteria determine who can see and request a catalog item or category based on information such as group, role, department, location, or company. The Service Owner confirms the intended audience, while the catalog team applies the criteria. Available For grants access, while Not Available For excludes users and takes priority where rules overlap. Criteria should be checked separately for categories and catalog items and tested before publication. User criteria may also identify additional users who can maintain an item through the Secondary owner field; this is separate from requester access.

## Service Catalog Management Process

Service Catalog management Process Diagram

### Request and Approve New Services

When a new service is due to go live, it is added to the Service Catalog. We recommend creating a catalog item in the Service Catalog for the express purpose of letting Service Owners request that a new item be added to the catalog. The requester typically provides the details needed to build the item: what service is being offered, who can request it, what information to collect from the requester, and the expected delivery time. The requester also identifies who approves the request, which tasks are required to fulfill it, whether those tasks occur in a set sequence, and which team completes each one.

Once the request has been submitted, it should be routed to the Catalog Manager for review and approval. For very complex services, it may not be possible to document every part of the requirement within the request. Therefore, the Catalog Manager may need to discuss the service in greater detail with the Service Owner.

Once the Catalog Manager is confident that the Service is well understood and appropriate for inclusion in the catalog, they can approve the request. At this point, a task for fulfillment of the request should be assigned to a Catalog Editor.

### Create and Publish New Services

The Catalog Editor can now proceed to create the catalog item. In most cases, this is likely to occur within a sub-production instance to ensure it can be thoroughly tested before being made available in the live catalog.

The item should be created with the required variables, approvals, and catalog tasks in place. The item should be included in the most appropriate category and subcategory structure within the catalog and the Employee Center taxonomy.

Once the item is created, we recommend the Service Owner thoroughly tests the new service to confirm it behaves as needed and is ready for the live catalog. The editor can make any adjustments at this point based on the Service Owner's feedback.

Once both parties are satisfied with the new service, the Catalog Editor can publish it in the production service catalog.

### Modify and Retire Services

Service Owners should also raise a request when they need to make a modification to their existing service or to retire from it. The process is very similar to requesting a new service. Instead of creating a new item, the Catalog Editor will make modifications to the existing item in a sub-production instance, unless it is a minor change that will not impact the workflow, such as changing the category the item is in. Once the changes are made, the item is tested by the Service Owner and published to the production instance.

The Catalog Editor can retire the item immediately in the production instance.

### Catalog Builder Considerations

Catalog Builder provides a guided way to create and update catalog items using templates, controls, and approvals. When a published item is edited, an inactive draft copy is created while the existing version remains available to requesters. The changes become available after the draft is submitted and any required review is completed. Now Assist can help create and refine catalog items from a plain-language description. Catalog Builder also supports translating catalog item content into additional languages. For more information, see [Now Assist in Catalog Builder](https://www.servicenow.com/docs/r/servicenow-platform/service-catalog/now-assist-for-catalog-generation.html).

### Catalog Builder Adoption and Governance

**Recommended operating practice:** The activities described in this section are recommended process controls and are not prescribed Catalog Builder product behavior. They should be adapted to the organization’s operating model, risk profile, and existing Service Catalog Management process. The approach is informed by the ServiceNow best-practice asset [Design a world-class service catalog](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/success/playbook/service-catalog-design.pdf), which recommends clear ownership, standardization, performance measurement, and continual improvement.

Catalog Builder should be introduced in phases. The process should begin with a controlled pilot involving a small number of catalog items and trained owners. Feedback from the pilot should be used to improve templates, guidance, training, approvals, and support arrangements before the capability is extended to additional business areas. Each phase should proceed only when agreed readiness criteria have been met.

Catalog Builder governance should define who can create, review, approve, and publish catalog items, which templates and standards must be followed, and how quality and adoption will be monitored. Responsibilities should align with the roles defined in this guide. Catalog Administrators should manage access, templates, and platform controls. Catalog Managers and Service Owners should oversee business accuracy, item quality, and approvals. The Process Owner should provide overall governance, monitor adoption, resolve issues affecting multiple business areas, and approve significant changes to the operating approach.

The Process Owner should establish a review cadence based on catalog size, change volume, and risk. Governance reviews should consider compliance with approved templates and standards, item quality, outstanding catalog changes, user feedback, performance measures, risks, and improvement actions. Decisions and agreed actions should be recorded and assigned to an accountable owner.

Before the pilot begins, the Process Owner should establish baseline measures and agree targets. Measures may include time-to-publish, the number of catalog changes awaiting completion, and the administrative effort required to create or update items. Refer to the **Metrics** section for definitions and reporting guidance.

## Request Management Process

Request Management Process Diagram

### Requesting Services

The Requester should search or browse the service they require within the catalog. They will complete any required questions against the individual item. If that is the only item being requested, the "Order Now" button should be used, which will immediately take the requester through the checkout process. If other items are to be requested at the same time, the Add to Cart button should be used to hold that item in the cart and allow the requester to continue browsing and requesting other items.

Once all required items are added to the cart, the requester can check out by clicking the Proceed to Checkout button. Using the 2-step checkout process will allow you to enter additional information into the request, such as a shipping address or any special instructions. The requester can also edit the cart here if they wish to remove anything. Once ready to submit, they will click the Checkout button, at which point a new request is created.

Catalog form, portal, and conversational enhancements simplify the requester experience and provide a more complete path from finding a service to submitting and tracking a request. When Now Assist in Conversational Catalog Request is in scope, requesters can describe what they need in natural language and be guided to the right catalog item through Virtual Agent. This connects the standard catalog experience with the conversational request experience described in the following Now Assist in Conversational Catalog Request section.

- Catalog variables can be pre-filled from caller-provided key-value pairs in Service Portal and Next Experience UIs.
- Attachments can be dragged and dropped onto the catalog form.
- A partially completed form can be saved as a draft and resumed later.
- The Catalog Browse component provides an enhanced browsing experience on Next Experience UI (UI Builder).

### Approving Requests

The next stage of the process will be to seek any required approvals. Typically, those held at the Request record level will be generated first as a line manager approves the overall request. Once these approvals have been received, approvals attached to the individual items can be requested, such as IT procurement approval for a hardware item. Once all outstanding approvals are received, the request can be fulfilled. If the request or requested item is rejected by any approvers, it is marked as Closed Rejected, and the process ends after a notification is sent to the Requester. Requests can be approved directly in ServiceNow, via email, or in the ITSM Mobile application.

### Fulfilling Requests

At this point, catalog task records are created. There may be several of these per requested item, and they may occur sequentially or in parallel. Catalog tasks are used to fulfill the requested item by assigning it to specific groups to undertake certain activities, such as deploying software or delivering hardware to the requester. The Assigned individual should change the State field to In Progress to clarify that work has begun on the task. Once they have completed the work, they should set the State to Closed Complete unless the task cannot be completed. In these cases, they should select either Closed Skipped or Closed Incomplete. Once all tasks for the requested item are closed, the item will be closed automatically. Once all items are closed, the overall request can be closed, and the requester will be notified of this. At this point, the process is complete.

### Tracking Requests

During the lifecycle of the Request Management process, multiple groups and individuals may be involved in fulfilling the request. To provide a single point of contact for the requester, the Service Desk is considered the owner of all requests, regardless of who is responsible for fulfilling them. The Service desk agents also have access to change, incident, problem, and request records with the help of sn\_service\_desk\_agent user role.

Although there is an overall request record to track all requested items, most requesters prefer to track progress against the individual requested item records, as these can be fulfilled independently.

## Now Assist in Conversational Catalog Request

Now Assist in Conversational Catalog Request, referred to in this section as Conversational Catalog Request, allows requesters to find and order catalog items by describing what they need in a natural-language conversation. The capability runs in Now Assist in Virtual Agent and can be delivered through ServiceNow web experiences, Microsoft Teams, and Slack, depending on the channels included in the implementation. The Now Assist in Virtual Agent plugin must be installed and configured. Refer to the **Process Prerequisites** section for the required plugin and channel setup. Now Assist matches a requester’s description to an appropriate catalog item, so clear item names, descriptions, questions, and catalog structure are important for a reliable requester experience.

### Designing an AI-ready catalog

- Because Conversational Catalog Request relies on natural-language matching, these design considerations are critical to the success of the implementation. They should be reviewed and applied as part of catalog design, not treated as optional best practices. An AI-ready catalog should help requesters find the right item, complete the request with fewer conversational turns, and provide a simple, responsive experience throughout the conversation.

The practical guidance table later in this section supports these design goals by showing what to avoid and what to prefer when creating or redesigning catalog items for conversational use. This structure helps catalog teams connect the best practices to the outcomes expected from an AI-ready catalog.

- Searchability and discovery: Use clear item names, natural-language descriptions, relevant keywords, and well-organized categories so AI Search and Virtual Agent can match the requester’s intent to the right catalog item.
- Fewer conversational turns: Keep catalog items focused on a single request intent and limit questions to the information required to fulfill the request. This helps requesters complete the conversation as quickly and accurately as possible.
- Effective prefill: Reduce repeated data entry by using AI-powered prefill where available, such as Knowledge Graph and chat history. Also use conventional prefill options that catalog authors can configure, such as auto-populate and default values.
- Performance through simplicity: Keep dynamic behavior simple and purposeful. Use no-code dynamic behavior where possible, avoid unnecessary conditional logic, and design questions so the conversation remains responsive and easy to complete.

### Conversational coverage dashboard

The Conversational Catalog Overview dashboard helps catalog teams understand how well active catalog items support conversational requests through Now Assist in Virtual Agent. The dashboard requires the **Catalog Conversational Coverage (****sn\_catalog\_con\_cov****)** plugin to be installed and activated. It reports which items are supported and which are not, and provides a preview of the most-requested items in each group. This gives catalog teams a clear view of where conversational coverage gaps exist.

The dashboard also explains why an item may not be ready for a conversational experience. These reasons matter because they identify the design or configuration gaps that a team needs to address. Common issues include catalog items that are too broad, too many variables, complex conditional logic, unclear item names or descriptions, unsupported question patterns, and missing metadata that prevents the requester’s intent from being matched reliably.

Catalog teams should use the dashboard as an improvement tool, not just as a coverage report. For each unsupported or low-coverage item, review the reason provided by the dashboard and decide whether the item should be redesigned for conversational use. Recommended actions include splitting broad items into single-intent requests, rewriting item names and descriptions in natural language, reducing unnecessary variables, simplifying dynamic behavior, adding relevant keywords and synonyms, and replacing unsupported patterns with conversation-friendly alternatives. Teams should prioritize high-volume and business-critical items first so the improvements have the greatest impact on the requester experience.

### New question types

Conversational Catalog Request does not introduce new question types for catalog authors to manage separately. Instead, it translates existing catalog form variables into conversation-friendly controls. For example, a group of checkboxes on a form can be presented as a multi-select control in chat. This behavior is primarily informational and should work as expected when catalog variables are designed clearly. The more important design focus is to keep questions simple, focused, and easy for requesters to answer in a conversation.

### No-code dynamic behavior and validation

Conversational Catalog Request does not introduce a separate dynamic behavior capability. Instead, it translates existing catalog form behavior into the conversational channel where possible. This means catalog teams should design dynamic behavior so it works well in both the form and chat experiences. Simple, predictable behavior is easier for requesters to follow and easier for catalog teams to maintain.

As a best practice, use no-code Catalog UI Policies whenever possible to set values, make questions mandatory, hide or show questions, display field messages, or restrict available options. Avoid using client scripts for behavior that can be achieved with configuration. If scripting is required, keep the script focused, lightweight, and limited to the specific behavior that cannot be configured in a UI policy.

For conversational readiness, avoid complex logic that depends on questions already answered earlier in the conversation, unnecessary chained conditions, heavy client-side processing, or field messages that appear too late to guide the requester. Keep dynamic behavior simple, test the item in Virtual Agent, and confirm that the requester can complete the conversation with minimal backtracking or confusion.

### Advanced reference qualifiers

Advanced reference qualifiers narrow the records a requester can select on a reference question, keeping conversational flows accurate and free of irrelevant options.

### Language understanding and advanced configuration

This section describes language-understanding and advanced-configuration capabilities available in the current release, including capabilities introduced in earlier releases.

Now LLM support improves the language understanding behind conversational items. Non-sequential UI policies apply regardless of the order in which questions are answered, and data lookups and auto-populate pre-fill answers from existing records to reduce the effort required by the requester.

To improve slot-fill accuracy, catalog teams should also review how variables are named and labeled. Variable labels should be clear, specific, and written the way requesters naturally describe the information. Avoid vague names such as “Type,” “Option,” or “Details” when a more specific label, such as “Laptop model,” “Delivery location,” or “Business justification,” would help the conversation identify the value being requested.

When designing variables for slot-fill, keep each question focused on one piece of information, use natural-language labels, and provide helpful choice values that match how requesters are likely to answer. For reference questions, use labels that clearly indicate what record should be selected, such as user, location, device, or application. These practices help AI-powered prefill from sources such as Knowledge Graph and chat history work more effectively, while still supporting conventional prefill options such as auto-populate and default values.

### Insights and editor safeguards

Editor insights and suggestions guide how to increase an item's conversational coverage as it is built, and editor warnings flag when an edit would break a conversational item before it reaches requesters - helping teams keep the catalog conversation-ready as it evolves.

### Catalog item design: practical guidance

The table below summarizes what to avoid and what to prefer when designing catalog items for conversational discoverability.

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| Component | Avoid | Recommended |
| Item name | 'Hardware Request' (serves 20 different hardware types). | 'Request a Laptop' / 'Request a Monitor' / 'Request a Docking Station'. |
| Short description | 'Submit a hardware request for IT equipment.' | 'Request a new laptop for yourself or a team member, including setup and delivery.' |
| Variables | 15+ variables with conditional visibility rules, vague labels, and questions that repeat information the platform already knows. | A small set of focused variables with clear, natural-language labels. Use labels that help slot-fill identify the value being requested, and prefill known answers through Knowledge Graph, chat history, auto-populate, or default values where appropriate. |
| Variable labels and choices | Generic labels such as 'Type,' 'Option,' or 'Details,' or choice values that do not match how requesters naturally respond. | Specific labels such as 'Laptop model,' 'Delivery location,' or 'Business justification,' with choice values written in terms requesters are likely to use in conversation. |
| Prefill | Asking the requester to re-enter information that can be inferred or provided by the platform, such as requester, location, device, or department details. | Use AI-powered slot-fill where available and configure author-controlled prefill, such as auto-populate and default values, to reduce repeated questions and shorten the conversation. |
| Scope | One item handles requests, changes and information queries. | Each item serves one clear intent a user would express naturally. |
| Keywords | No keywords or generic tags like 'IT' or 'request'. | Synonyms and natural phrases: 'new computer', 'replace laptop', 'upgrade machine'. |

### Path forward: recommended next steps

To move an existing catalog toward conversational readiness, follow these three steps:

- Audit and prioritize - review the existing catalog to identify items with the highest usage and complexity. Focus on redesigning the top 10-15 catalog items, prioritizing those with the greatest volume and the largest gaps in AI discoverability.
- Redesign and simplify - break complex catalog items into single-intent items, rewrite short descriptions in natural language, add keywords reflecting how users actually ask, and reduce the number of variables per item.
- Test and iterate - test redesigned catalog items in a test or development instance before production. Validate that catalog items surface consistently for common request patterns in Virtual Agent and AI Search. Gather end-user feedback and refine.

### Choosing the right request channel: Forms vs conversations

Most existing catalogs were built for form-based design. One item can serve many purposes, complex variable sets and conditional logic guide the requester, users navigate by category, and success depends on the user knowing where to look. A conversation-ready catalog is different: each item maps to one clear user intent, has minimal focused variables, uses descriptions written for how people actually ask, and relies on AI to match natural language to the correct item.

Forms and conversations should be used for different types of requests. A conversation works best when the requester has one clear goal, only needs to answer a few simple questions, and some information can be found or prefilled automatically. A form works better when the requester needs to enter detailed information, review many fields, add attachments, or check everything before submitting.

Even if a catalog item is technically supported in Conversational Catalog Request, it does not always need to be offered through chat. Choose the channel that gives the requester the easiest and clearest experience. Use conversation for simple requests. Use a form when the request is complex, needs more structure, or could cause confusion in a chat flow.

## Service Catalog capability enhancements

### Catalog Builder

Catalog Builder is the guided, low-code experience for creating and maintaining catalog items. With Now Assist catalog generation, an editor describes an item in plain language and Now Assist drafts its details, questions, and dynamic behavior, showing the result in a live preview that can be refined step by step rather than regenerated from scratch. Write with Now Assist improves the item's descriptive text. Catalog generation supports a range of question types, including Requested For, attachment, and duration, and items can be authored in the editor's own language.

Because generation runs as a conversation rather than a single request, the editor shapes the item as it is built. A follow-up prompt can reorder variables, add a field, or make one mandatory without losing the work already produced. Now Assist can also reopen an item that is already published to add or adjust a variable in place, so routine catalog maintenance no longer means rebuilding the item from scratch.

From a single natural-language description, Now Assist can produce a complete item: its descriptors, variables across common question types, field behaviors, conversational labels, and record producers. The fulfillment workflow is assigned separately, keeping the guided experience focused on the request form. Catalog Builder is a platform capability, while AI-assisted catalog item generation is provided through the Now Assist for Creator application. The Catalog item generation feature and an approved AI model must be configured before use. The enhanced live-preview experience requires a supported version of the Now Assist for Creator Store application, and availability should be confirmed against the organization’s current ServiceNow subscription.

<br>**Please note:** For Catalog generation version 6.0 on supported platform patches, Catalog Editors require the catalog\_builder\_editor role; the additional now.assist.creator role is not required. Requirements for earlier versions should be confirmed during implementation planning.

More complex items can be built directly in Catalog Builder, where editors can add client scripts, advanced reference qualifiers, and scripted defaults, or author an item from scratch.

Catalog Builder is no longer a one-time build. An editor can reopen an item after it is first created and adjust it in place, adding a variable, changing a behavior, or refining the wording rather than rebuilding it from scratch. It also supports a wider range of variable types, so more of the request form can be assembled directly in the guided experience. In practice, editors use the assist features while building the item rather than as a separate step at the end. The editor describes or adjusts what is needed, reviews the result in the live preview, and continues refining until the item is correct.

Recent enhancements improve Catalog Builder in the following areas:

- Shared maintenance: Additional authorized users can maintain an item on behalf of its owner, reducing reliance on one person.
- Clearer request tracking: Defined stages and states help requesters understand the progress of their request.
- More flexible form behavior: Editors can create more responsive catalog forms that adapt to the information entered by the requester.
- Simpler repeating information: Editors can control which information is displayed in tables that capture multiple entries.
- Improved change tracking: Automatically generated update sets can use a consistent naming convention, making catalog changes easier to identify and manage

### Catalog form and portal experience

Catalog variables can be pre-filled from caller-provided key-value pairs in the Service Portal and Next Experience UIs, attachments can be dragged and dropped onto the catalog form, and a partially completed form can be saved as a draft and resumed later. The Catalog Browse component provides an enhanced catalog item browsing experience on the Next Experience UI. Variables can also be hidden or shown on the grid layout of a multi-row variable set.

### Request Management

Requesters and agents collaborate directly on a request with comment-based communications, and universal tasking coordinates the work items that make up a request. Agent Assist lets an agent attach a catalog item to a case from within Service Operations Workspace, where a stage renderer shows request stages, and a ticketless browse experience lets agents order from the catalog without first creating a ticket. Stages defined in the fulfillment step let requesters view the stage and state of their request, and Playbook can be selected as the process engine for a catalog item.

### Virtual Agent

Virtual Agent catalog ordering adds field messages, new variable types (HTML, Duration, and Masked), and choice pricing that shows price implications. Slot-fill via Knowledge Graph and an improved Requested For streamline data capture, an in-line catalog form appears in the LLM-powered Virtual Agent, and a redesigned summary step lets requesters edit answers, add attachments, and switch topic mid-flow. Selection and typing are supported for choice and date-based questions, and extra information on reference choices disambiguates same-name options.

## Other Processes

### Incident Management

It is extremely common for end users to be offered the opportunity to raise incidents using the Employee Center. In this case, a record producer allows an interface to be presented to the user that resembles a catalog item and, therefore, can be stored within the catalog as just another offered service. Once submitted, the record producer will not raise a request with items and tasks as with other catalog items. Instead, it will generate a new incident record in accordance with the standard incident process.

Many service requests may be submitted via the Service Desk and may be initially handled through the Incident Management process before being identified as such.

Service requests can be created directly from incidents in the Service Operations Workspace.

### Change Management

Standard changes are stored as templates within the Service Catalog. These templates are used to create new standard changes with pre-populated content.

It is not recommended that users be allowed to directly create new changes from the catalog outside of the Standard Change Catalog. This is due to the large amount of technical information required to raise a change. Instead, users should raise a request to the team responsible for implementing the change, and that team should subsequently raise a change record for the work.

### Customer Service Management

End users may wish to perform common requests, such as address changes, warranty registrations, and password resets, with the service catalog.

### Configuration and Asset Management

Information about attributes of assets and configuration items may be used in various catalog items that initiate service requests. Updates to certain asset and configuration item attributes (for example, software license counts) may be triggered from a service request.

### Service Level Management

Service Level Management defines the fulfillment targets for various service requests.

### User Experience

Mobile platforms and Virtual technology can have a positive impact on how end users interact with the end-to-end process, and ultimately, on how the entire user experience is perceived. Consider which touchpoint in the process can leverage the mobile platform to minimize delays. Tasks such as Request logging, approvals, and searches can all be performed on mobile devices. Additionally, consider how a Virtual agent can be deployed to assist users in finding and requesting items, as well as tracking progress.

## Process Governance

### Measurement

Key Performance Indicators (KPIs) evaluate the success of a particular activity toward meeting critical success factors. Successfully managing KPIs can be achieved either by repeatedly meeting an objective (maintaining) or making progress toward an objective (increasing or decreasing). The Benchmarks feature provides instant visibility into your key performance indicators (KPIs) and trends, as well as comparative insights relative to industry averages of your peers. You can compare your organization's performance with recognized industry standards and view a side-by-side comparison of its performance with global benchmarks. Benchmark offers the following ITSM KPIs:

- % of closed requests with breached SLAs
- Average time to fulfill a request.
- Number of requests created per user

### Metrics

**Process KPIs**

- Provide information on the effectiveness of the process and the impact of continuous improvement efforts.
- Are best represented as trend lines and tracked over time
- Monitored by the Process Owner

| Column 1 | Column 2 |
| --- | --- |
| Item | Purpose |
| Number of new catalog items delivered into the live environment per month | An indicator of the accuracy of the service catalog and the growth of new services |
| Number and percentage of service requests completed within agreed target times | Measure how well service request SLAs are achieved. |

**Operational Data**

Active catalog items/requests that require visibility, oversight, and possible management intervention are best tracked on a dashboard or homepage that is monitored by the Service Desk and request fulfillment team.

| Column 1 | Column 2 |
| --- | --- |
| Item | Purpose |
| List of generic requests that have been submitted | Periodic review and analysis of generic requests may reveal opportunities to improve the organization of the service catalog or identify new services and/or catalog items that should be added |
| Ageing of open service catalog item review | Provides a view of service catalog item review tasks that have not been completed on time |
| List of open requests that have exceeded target times | Provides a quick view of open requests that have breached SLAs and need immediate attention |
| Pie chart of service request backlog by type | Provides a quick view (with drill-down capability) of those fulfillment areas that need improvement |
| Conversational coverage of live catalog items | Percentage of live catalog items supported for conversational requests, used to prioritize items for redesign |
| Time-to-publish for items created in Catalog Builder | Average elapsed time from starting an item in Catalog Builder to publishing it, indicating authoring efficiency |
| Requests reopened after closure | Flags fulfillment or quality problems that need a rootcause review |

Request SLAs are measured based on the fulfillment of the RITMs within the configured duration of each catalog item. This is not similar to Incidents. The duration varies for each catalog item, and as long as the fulfillment team completes all tasks within the overall duration of the RITM, the SLA is achieved.

There can be a KPI, such as % of requests within the configured duration, and the target could be 95%

Catalog items can have their fulfillment automation level specified, and SLAs and reports can use this data to refine and publish the expected service.

### Reports and Dashboards

There are numerous default reports available in ServiceNow that can be used to generate charts, published to a URL, or scheduled to run and distribute at regular intervals. Users can also create custom reports.

Process users will find it valuable to have access to dashboards that provide live information about records they are assigned to or have responsibility for. These dashboards help users understand how to prioritize their work.

Platform Analytics Solutions provide preconfigured dashboards and performance indicators for monitoring Requests and Requested Items. An administrator can configure the Request Management solutions by navigating to Performance Analytics → Guided Setup, selecting Get Started, and choosing the Requests or Requested Items setup. Available dashboards include the "Open Requested Item State Monitor", which groups open requested items by state, and the "Open Requests Age Monitor", which groups open requests by age. Some dashboards require configuration, data collection, and an assigned owner before they can be activated and used.

## Process Diagrams

The process diagrams in editable format (Vision) can be found in the [Best Practices](https://nowlearning.service-now.com/nowcreate?id=nc_asset&asset_id=49aab537db170150a87c2d3d5696195c).

## Other Documents

For more information, refer to the links below:

- [Creating Catalog Experiences with Catalog Builder](https://nowlearning.servicenow.com/nowcreate?id=nc_asset&asset_id=d78d9fe6876e5158d3be437e0ebb357c)
- [Design a world-class service catalog](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/success/playbook/service-catalog-design.pdf)
- [How to achieve actionable information from a self-service Incident Management record producer](https://www.servicenow.com/community/it-service-management-articles/how-to-achieve-actionable-information-from-a-self-service/ta-p/2362249)
