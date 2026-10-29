# Incident Management - Starter Stories

Source: https://mynow.servicenow.com/now/best-practices/assets/incident-management-starter-stories

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `03546e29ab9af13f905076cc4c3eab49e7f60bfaeb7e81438d330441ecbf7bc4`

## Sheet: Instructions to import stories

| Column 1 | Column 2 |
| --- | --- |
| Row 1 | Asset number: 0001247 |
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
| Row 2 | Incident Management | Incident Management | Access | INC - Incident Management Restricted Access | As an Incident Management Process Owner I want to prevent unauthorized access to incident-related tables by non-authenticated users | I know this is done when non-authenticated users can't perform any actions on incident-related tables, including reading, writing, deleting, creating, or accessing the report view.  |

Technical requirement - ITSM Enhanced Security Features (com.snc.itsm.enhanced\_security) plugin installed

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 3 | Incident Management | Incident Management | Access | INC - Service Desk Agent for Incident Management | As a Service Desk Agent I want to have access read/write incidents to manage my workload effectively | I know this is done when I have access to create / update / view incidents  |

Technical requirement - use sn\_service\_desk\_agent

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 4 | Incident Management | Incident Management | Categorization | INC - Configure categories | As a Service Desk Agent, I would like to be able categorize Incidents quickly so that they can be assigned to the correct group immediately and reporting trends can be established. | &lt;p&gt;I know that this is complete when I can categorize Incidents quickly. Categorization to be defined&lt;/p&gt; |

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;\*\* See Process Guide for example&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 5 | Incident Management | Configurable Workspace | Categorization | INC - Configure categories in SOW New Incident Form | As a Service Desk Agent I want Category and Sub-category field to be available when I create a new incident | &lt;p&gt;I know this to be done when , as a Service Desk Agent, I create a new incident and without saving the Category and Sub-category field are available&lt;/p&gt; |

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;Note:&lt;/p&gt;

&lt;p&gt;Navigate to All &amp;gt; Incident &amp;gt; Open&lt;/p&gt;

&lt;p&gt;Choose an existing incident&lt;/p&gt;

&lt;p&gt;Change the view to Service Operations Workspace New Record&lt;/p&gt;

&lt;p&gt;Configure Form Layout&lt;/p&gt;

&lt;p&gt;Add Category and Subcategory fields so that they follow the Channel field&lt;/p&gt;

&lt;p&gt;Save the changes&lt;/p&gt;

&lt;p&gt;Go into Service Operations Workspace and create a New Incident&lt;/p&gt;

&lt;p&gt;Check that the Category and Subcategory fields are available on a new record&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 6 | Incident Management | Incident Management | Form Configuration | INC - Configure (UI16) activity log | As the Service Desk Manager, in the Activity Log section of an Incident record, I would like to quickly see when certain fields have changed value so that I get a good understanding of the progress of the Incident. | &lt;p&gt;I know that this is complete when the relevant fields are updated and tracked in the Activity Log.&lt;/p&gt; |

&lt;p&gt;If one or more of these fields are updated it shows in the log:&lt;/p&gt;

&lt;p&gt;Opened by&lt;/p&gt;

&lt;p&gt;Category&lt;/p&gt;

&lt;p&gt;Business service&lt;/p&gt;

&lt;p&gt;Configuration item&lt;/p&gt;

&lt;p&gt;State (swap from Incident state field)&lt;/p&gt;

&lt;p&gt;Impact&lt;/p&gt;

&lt;p&gt;Urgency&lt;/p&gt;

&lt;p&gt;Priority&lt;/p&gt;

&lt;p&gt;Assignment group&lt;/p&gt;

&lt;p&gt;Assigned to&lt;/p&gt;

&lt;p&gt;Description&lt;/p&gt;

&lt;p&gt;Work notes&lt;/p&gt;

&lt;p&gt;Additional comments&lt;/p&gt;

&lt;p&gt;Resolution code&lt;/p&gt;

&lt;p&gt;Resolution notes&lt;/p&gt;

&lt;p&gt;Sent/Received Emails&lt;/p&gt;

&lt;p&gt;Attachments&lt;/p&gt;

&lt;p&gt;Relationship Changes&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 7 | Incident Management | Core UI | Form Configuration | INC - Configure (UI16) form: Default view | As a Service Desk Agent, I would like to be able to capture all the necessary information when I first raise an Incident ticket so that I can ensure it will be quickly dealt with by the resolving group to prevent any delays. | &lt;p&gt;I know that this is complete when the form layout allows me to capture all the necessary information when I first raise an Incident ticket. When creating a new Incident in the Default view the form should appear as follows:&lt;/p&gt; |

&lt;p&gt;Number&lt;/p&gt;

&lt;p&gt;State&lt;/p&gt;

&lt;p&gt;Caller&lt;/p&gt;

&lt;p&gt;On hold reason&lt;/p&gt;

&lt;p&gt;Affected user&lt;/p&gt;

&lt;p&gt;Impact (Mandatory)&lt;/p&gt;

&lt;p&gt;Contact type&lt;/p&gt;

&lt;p&gt;Urgency (Mandatory choice list)&lt;/p&gt;

&lt;p&gt;Category&lt;/p&gt;

&lt;p&gt;Priority (Read only auto populated via combination of Impact and Urgency)&lt;/p&gt;

&lt;p&gt;Business service&lt;/p&gt;

&lt;p&gt;Assignment group (Mandatory)&lt;/p&gt;

&lt;p&gt;Configuration item&lt;/p&gt;

&lt;p&gt;Assigned to&lt;/p&gt;

&lt;p&gt;Short Description (Mandatory)&lt;/p&gt;

&lt;p&gt;Description (Mandatory)&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;Number field is auto populated by the system and is read only to all roles&lt;/p&gt;

&lt;p&gt;The Caller field is a mandatory field that should reference the user table. It should not allow inactive users to be selected&lt;/p&gt;

&lt;p&gt;The Affected user field is a new field that should reference the user table. It should auto populate with the same user as the Caller field when first created but can subsequently be manually updated with any active user&lt;/p&gt;

&lt;p&gt;The Contact type field is a mandatory choice list with the choices: Alert, Email, Phone, Self-service, Walk-in&lt;/p&gt;

&lt;p&gt;The Business service field is a mandatory field that should reference the CI table restricted to the Business Service class only&lt;/p&gt;

&lt;p&gt;The Configuration item field should reference the CI table showing all CI classes excluding Business Service&lt;/p&gt;

&lt;p&gt;The State field is a choice list with the choices: New, In Progress, On Hold, Resolved, Closed, Canceled&lt;/p&gt;

&lt;p&gt;The On hold reason field is a choice list with the choices: Awaiting Caller, Awaiting Change, Awaiting Problem, Awaiting Vendor. The field should only display when the State field is set to On Hold. If the field displays it should become mandatory.&lt;/p&gt;

&lt;p&gt;The Impact field is a mandatory choice field with the choices: 1 - High, 2 - Medium, 3 – Low&lt;/p&gt;

&lt;p&gt;The Urgency field is a mandatory choice field with the choices: 1 - High, 2 - Medium, 3 – Low&lt;/p&gt;

&lt;p&gt;The Priority field is a read only choice field with the choices: 1 - Critical, 2 - High, 3 - Moderate, 4 - Low. The field is automatically populated based upon the choices selected in the Impact and Urgency fields (covered in a specific story)&lt;/p&gt;

&lt;p&gt;The Assignment group field is a mandatory field that should reference the groups table. It should only allow groups where Type &amp;\#61; itil and Active &amp;\#61; true&lt;/p&gt;

&lt;p&gt;The Assigned to field should reference the user table. It should only allow users where Active &amp;\#61; true. If the Assignment group field is populated only users who are a member of that group should be selectable. If the Assignment group field is cleared this should also clear the Assigned to field&lt;/p&gt;

&lt;p&gt;The Short description field is a mandatory free text field with a character limit of 160&lt;/p&gt;

&lt;p&gt;The Description field is a mandatory free text field with a character limit of 4000&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 8 | Incident Management | Core UI | Form Configuration | INC - Configure (UI16) Form: Knowledge Checkbox | As the Incident Process Owner, I only want the Knowledge checkbox to appear on the Incident form if we are using Knowledge Management so that only valid fields appear on the form. | &lt;p&gt;I know that this is complete when, if we are not using Knowledge Management, I am unable to see the Knowledge checkbox on the Incident form.&lt;/p&gt; |
| Row 9 | Incident Management | Core UI | Form Configuration | INC - Configure (UI16) form: Popup view | As a Service Desk Agent, I would like to be able to use the List View's preview icon to view the details of an Incident in a popup window so that I can quickly scan Incidents without opening each one. | &lt;p&gt;I know that this is complete when I am able to use the List View&amp;\#39;s preview icon to view the details of an Incident in a popup window. When viewing an existing Incident in the list popup view, the form should appear as follows:&lt;/p&gt; |

&lt;p&gt;Number, Channel, Caller, State, Category, On hold reason (only display when State &amp;\#61; On hold), Subcategory,  Affected user, Impact, Urgency,Priority, Contact type, Assignment group,  Business service, Assigned to, Service Offering, Configuration item, Universal Request, Transfer Reason, Short Description, Description.&lt;/p&gt;

&lt;p&gt;All fields should be read only. &lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;NOTE: Universal Request appears OOB even if Universal Request is not enabled.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| Row 10 | Incident Management | Core UI | Form Configuration | INC - Configure (UI16) form: Related lists - Default View | As an Incident Management user, I would like the following Related Lists to be present, so that I can progress an Incident effectively: |

- Task SLAs

- Incidents by Same Caller

- Affected CIs

- Impacted Services/CIs

- Child Incidents

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| - Attached knowledge | &lt;p&gt;I know that this is complete when I am progressing an Incident and the following Related Lists are present: - Task SLAs - incidents by Same Caller - Affected CIs - Impacted Services/CIs - Child Incidents - Attached knowledge Exactly which Related Lists need to be displayed should be discussed with the Customer.&lt;/p&gt; |  |  |  |  |  |
| Row 11 | Incident Management | Core UI | Form Configuration | INC - Configure (UI16) related change requests | As a IT support team member, I would like to be able to relate Change Requests to my Incident so that I can understand whether a Change has caused my Incident or whether Changes are in progress to fix my Incident. | &lt;p&gt;I know that this is complete when I can relate Change Requests to my Incident. On the Incident form in the Related Records form section there should be a field called Change Request that allows a user to choose an existing change request to relate to the Incident  &lt;/p&gt; |

&lt;p&gt;On the Incident form in the Related Records form section there should be a field called Caused by Change that allows a user to choose an existing change request that has already been implemented (only a state of Implement, Review or Closed) to relate to the Incident  &lt;/p&gt;

&lt;p&gt;There should be a related list on the Incident form called Change Requests that lists all the changes that may have been implemented to fix the Incident.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 12 | Incident Management | Incident Management | Form Configuration | INC - Configure form: Mandatory fields for new Incident | As a Service Desk agent, when I raise an Incident, I expect to have to complete the agreed mandatory fields, so that I capture the required minimum data for Incident submission. | &lt;p&gt;I know that this is complete when I raise an Incident and I have to complete the agreed mandatory fields.&lt;/p&gt; |

&lt;p&gt;The minimum suggestion is&lt;/p&gt;

&lt;p&gt;- Caller&lt;/p&gt;

&lt;p&gt;- Assignment group&lt;/p&gt;

&lt;p&gt;- Short description&lt;/p&gt;

&lt;p&gt;- Description&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;\*\* This needs to be discussed with the Customer.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 13 | Incident Management | Incident Management | Form Configuration | INC - Configure On Hold behavior | As a Service Desk Agent, I would like to ensure that explanatory information is provided when an Incident is moved to the On Hold state so that anyone reading it will understand exactly what the reason is. | &lt;p&gt;I know that this is complete when I move an Incident into the On Hold state and I am mandated to provide an On hold reason with associated data.&lt;/p&gt; |

&lt;p&gt;The following choices should be available in the On hold reason field: Awaiting Caller, Awaiting Change, Awaiting Problem, Awaiting Vendor If Awaiting Caller is selected as the On hold reason, it should be mandatory to enter an Additional comment in the Notes form section If Awaiting Change is selected as the On hold reason, it should be mandatory to populate the Change Request field on the Related Records form section If Awaiting Problem is selected as the On hold reason, it should be mandatory to populate the Problem field on the Related Records form section If Awaiting Vendor is selected in the On hold reason field, it should be mandatory to enter a Work Note so that it is clear what the Vendor needs to do. Only Awaiting Caller should pause the SLA/OLA/UC clocks. All others are not within the control of the caller&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 14 | Incident Management | Incident Management | Form Configuration | INC - Configure Quick Messages | As a Service Desk Agent, I would like to use predefined quick messages to help me format emails so that I can quickly and easily communicate accurate information to personnel | &lt;p&gt;I know this is true when I am able to use predefined quick messages to help me format emails. This Story requires updates of specific details on the data that is being provided in the Quick Messages.&lt;/p&gt; |
| Row 15 | Incident Management | Incident Management | Form Configuration | INC - Configure resolution information | As the Service Desk Manager, I would like to be able report on resolution information so that I can track trends and potentially make improvements to the process. | &lt;p&gt;I know that this is complete when I am able to report on resolution information.&lt;/p&gt; |

&lt;p&gt;In the Resolution code field the available choices should be:&lt;/p&gt;

&lt;p&gt;Resolved – Workaround Applied&lt;/p&gt;

&lt;p&gt;Resolved – Permanent Fix Applied&lt;/p&gt;

&lt;p&gt;Resolved – Fixed by Caller, Resolved – Fixed Without Action&lt;/p&gt;

&lt;p&gt;Not Resolved – Not Reproducible&lt;/p&gt;

&lt;p&gt;Not Resolved – Resolved by Vendor&lt;/p&gt;

&lt;p&gt;Not Resolved – Problem Raised&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;The Resolved and Resolved by fields should be read only in all States&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| Row 16 | Incident Management | Incident Management | Form Configuration | INC - Core Incident fields to be read-only. | As the Incident Management Process owner, I expect the following fields on the Incident form to always be read-only, so that data integrity can be maintained: |

- Number

- Opened

- Opened by

- Updated by

- Resolved

- Resolved by

- Closed

| Column 1 | Column 2 |
| --- | --- |
| - Closed by | &lt;p&gt;I know that this is complete when the following fields on the Incident form are always read-only: -&lt;/p&gt; |

&lt;p&gt;Number&lt;/p&gt;

&lt;p&gt;Opened&lt;/p&gt;

&lt;p&gt;Opened by&lt;/p&gt;

&lt;p&gt;Updated by&lt;/p&gt;

&lt;p&gt;Resolved&lt;/p&gt;

&lt;p&gt;Resolved by&lt;/p&gt;

&lt;p&gt;Closed&lt;/p&gt;

&lt;p&gt;Closed by&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;\*\* note: this is default behaviour&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 17 | Incident Management | Incident Management | Form Configuration | INC - Create Affected User field on the Incident form | Create Affected User field on the Incident form to capture the user who is affected by the Incident when the Caller is not the Affected User. | &lt;p&gt;I know that this is complete when the field &amp;\#39;Affected User&amp;\#39; on the Incident form.  Consideration should be made to the visibility of this field on List Views.&lt;/p&gt; |
| Row 18 | Incident Management | Incident Management | Form Configuration | INC - IDV Information at call logging time | As a Service Desk agent, when I take a call, I would like to confirm the caller's identity (ID Verification) using certain pre-agreed fields, so that I know that I am talking to a verified individual. The fields I would like available to me are: tbc | &lt;p&gt;I know that this is complete when I take a call and I can confirm the caller&amp;\#39;s identity (ID Verification) using certain pre-agreed fields. Exactly which fields need to be displayed should be discussed with the Customer.&lt;/p&gt; |
| Row 19 | Incident Management | Incident Management | Form Configuration | INC - Mandatory comment on cancellation | As the Service Desk Manager, when an Incident is moved to Cancelled state, I would like an update of the Additional Comments fields to be mandatory so that the Caller is informed of exactly what has happened and why. | &lt;p&gt;I know this is complete when I move an Incident into Cancelled state and I am mandated to update the Additional Comments field with the reason why.&lt;/p&gt; |
| Row 20 | Incident Management | Incident Management | Form Configuration | INC - Remove auto state change from on-hold when additional comments updated | As the Incident Management Administrator, I want to remove the rule that automatically changes the Incident to In Progress state | &lt;p&gt;I know that this is complete when the Business Rule &amp;\#34;Incident State Change to In Progress&amp;\#34; is inactive.&lt;/p&gt; |
| Row 21 | Incident Management | Incident Management | Groups &amp; Assignments | INC - Restrict the Assignment Group field on Incidents to active support groups | As a Service Desk agent, when I assign an Incident to a support group, using the Assignment Group field, I only want the system to show me those Assignment Groups which are active in the system, so that I can route the Incident in an effective and efficient way. | &lt;p&gt;I know that this is complete when I want to assign an Incident to a support group, using the Assignment Group field, and the system only shows me those Assignment Groups which are active in the system.&lt;/p&gt; |

&lt;p&gt;Ensure only groups where active &amp;\#61; True and Type &amp;\#61; itil can be selected in the Assignment group field. The assignment group field should only allow active groups to be set on an Incident.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 22 | Incident Management | Incident Management | Inactivity Monitors | INC - Configure Inactivity Monitors | As the Service Desk Manager, I want the relevant people to be alerted when there has been no action on an Incident for a specified period of time so that I can be sure Incidents do not go unnoticed. | &lt;p&gt;I know that this is complete when the relevant people are alerted when there has been no action on an Incident for a specified period of time.&lt;/p&gt; |

&lt;p&gt;EXAMPLE An inactivity monitor should exist with the following conditions: Priority IS 1 - Critical State IS NOT Resolved or Closed Wait 2 hours   If this monitor is triggered then an email should be sent to the Service Desk Manager to notify them of the inactivity      &lt;/p&gt;

&lt;p&gt;Email details should include: The email should be sent to: The Assigned To The Assignment Group The email should be sent when: The Incident inactivity event is triggered from the inactivity monitor The subject of the email should be: No activity detected for Incident INC00100101  &lt;/p&gt;

&lt;p&gt;The notification should have the following body text: INC0000001 - Short description  &lt;/p&gt;

&lt;p&gt;Additional Details:   Caller Category (or Configuration Item) Business Service (if being used) Priority  &lt;/p&gt;

&lt;p&gt;Take me to the Incident (link)  &lt;/p&gt;

&lt;p&gt;Thank you.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 23 | Incident Management | Incident Management | Inbound Email | INC - Configure inbound email | As a Service Desk Agent, I would like emails sent to the Service Desk to automatically create an Incident record so that I do not have to look in more than one place for issues that I would like to resolve for my customers. | &lt;p&gt;I know that this is complete when Incidents are being created from emails incoming to the Service Desk.&lt;/p&gt; |

&lt;p&gt;When a new email is sent to the email address zzz&amp;\#64;zzz.com a new Incident record should be created.    &lt;/p&gt;

&lt;p&gt;In the Incident form: The email Subject should populate the Short description field on the Incident.&lt;/p&gt;

&lt;p&gt;The email Body should populate the Description field on the Incident.&lt;/p&gt;

&lt;p&gt;The email Sender should populate the Caller field on the Incident (if not from a register user this will log as being from an unidentified guest).&lt;/p&gt;

&lt;p&gt;The Assignment group field on the Incident form should default to Service Desk.&lt;/p&gt;

&lt;p&gt;The Contact type field on the Incident form should default to Email.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 24 | Incident Management | Interaction | Interaction | INC - Create interactions | As an agent I want to use interactions to capture information ahead of creating an incident | &lt;p&gt;I know this to be complete when I can create an incident from an interaction record and the required information is copied across&lt;/p&gt; |
| Row 25 | Incident Management | Core UI | Lists | INC - Configure (UI16) Incident Related List for Outages | As a Service Desk Agent I need to capture loss of service information about CIs so that full impact analysis, trending and reporting can be undertaken. | &lt;p&gt;The Outages related list should be added to the form for all CI Classes.&lt;/p&gt; |

&lt;p&gt; &lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 26 | Incident Management | Incident Management | Lists | INC - Configure (UI16) List View | As a Service Desk Agent, I would like to be able to quickly scan a list of Incidents, using List View, so that I can prioritize my work. | &lt;p&gt;I know that this is complete when I am able to quickly scan a list of Incidents, using List View. When on the default list view, the following fields should be present:&lt;/p&gt; |

&lt;p&gt;Number&lt;/p&gt;

&lt;p&gt;Opened&lt;/p&gt;

&lt;p&gt;Short Description&lt;/p&gt;

&lt;p&gt;Caller&lt;/p&gt;

&lt;p&gt;Priority&lt;/p&gt;

&lt;p&gt;State&lt;/p&gt;

&lt;p&gt;Category&lt;/p&gt;

&lt;p&gt;Assignment Group&lt;/p&gt;

&lt;p&gt;Assigned To&lt;/p&gt;

&lt;p&gt;Updated&lt;/p&gt;

&lt;p&gt;Updated By   &lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;All fields in the list view are read-only   OR   The following fields are editable by the ITIL role: Short Description, State, Category, Assignment Group, Assigned To&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 27 | Incident Management | Incident Management | Navigation | INC - Configure (UI16) Incident Management navigation menu | As an Incident Management application user, I want the Incident Navigation menu to reflect the way I work, so that I can work more effectively and efficiently. | &lt;p&gt;I know that this is complete when I use the Incident Navigation menu and it reflects the way I work. Incident modules have been added or removed to reflect the desires of the customer. Any unnecessary modules are disabled or assigned the &amp;\#34;admin&amp;\#34; role so they are hidden from ITIL users. New modules are created as needed.&lt;/p&gt; |
| Row 28 | Incident Management | Incident Management | Notification | INC - Configure notification:  Assigned to group | As a member of a support group, I would like to be notified when an Incident has been assigned to my group so that I can be sure action is taken. | &lt;p&gt;I know that this is complete when I am notified that an Incident has been assigned to my group. An email should be sent based on the following criteria:  &lt;/p&gt; |

&lt;p&gt;The email should be sent to: The email address of the group named in the Assignment field  &lt;/p&gt;

&lt;p&gt;The email should be sent when: The Assignment Group field is populated or changed and the Assigned to field is empty  &lt;/p&gt;

&lt;p&gt;The subject of the email should be: Incident INC0000001 has been assigned to group Service Desk    &lt;/p&gt;

&lt;p&gt;The notification should have the following body text:  &lt;/p&gt;

&lt;p&gt;INC0000001 - Short description An Incident has been assigned to the Service Desk group. &lt;br /&gt;Details: Caller: Name of caller &lt;br /&gt;Opened:  Opened date &lt;br /&gt;Priority: Priority You can view all the details of the Incident by following the link below: Take me to the Incident (link)  &lt;/p&gt;

&lt;p&gt;Thank you.  &lt;/p&gt;

&lt;p&gt;Unsubscribe \| Notification Preferences   Ref:Watermark&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 29 | Incident Management | Incident Management | Notification | INC - Configure notification:  Redirection Behavior | As an Incident Management Process owner I want to specify whether an email notification redirects a Service Desk Agent to UI16 or SOW to provide a consistent agent experience | I know that this is complete when the Service Desk Agent is redirected to the specified user interface |

Technical Comment -  ITSM Notifications Redirection (com.snc.itsm.notifications\_redirection) plugin is installed and activated. Redirect SOW Email notification (sow\_email\_notification\_redirect) system property is set to true for SOW redirection.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 30 | Incident Management | Incident Management | Notification | INC - Configure notification: Assigned to individual | As a support group team member, I would like to be notified when an Incident has been assigned to me individually to resolve, so that I can make sure I take action accordingly. | &lt;p&gt;I know that this is complete when I am notified that an Incident has been assigned to me individually. An email should be sent based on the following criteria:  &lt;/p&gt; |

&lt;p&gt;The email should be sent to: The individual in the Assigned to field The email should be sent when: The Assigned to field is changed The subject of the email should be: Incident INC0000001 has been assigned to you &lt;/p&gt;

&lt;p&gt;The notification should have the following body text:     INC0000001 - Short description   An Incident has been assigned to you to resolve.   Details:   Caller: Name of caller   Opened:  Opened date   Priority: Priority   You can view all the details of the Incident by following the link below:  &lt;/p&gt;

&lt;p&gt;Take me to the Incident (link)  &lt;/p&gt;

&lt;p&gt;Thank you.    &lt;/p&gt;

&lt;p&gt;Unsubscribe \| Notification Preferences  &lt;/p&gt;

&lt;p&gt;Ref:Watermark&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 31 | Incident Management | Incident Management | Notification | INC - Configure notification: Incident opened | As a Caller, I would like to receive a notification that an Incident has been raised on my behalf, so that I have confirmation the issue is in the queue to be dealt with and so that I can refer back to it for a reference number and details when following up. | &lt;p&gt;I know that this is complete when I receive a notification that an Incident has been raised on my behalf. An email should be sent based on the following criteria:&lt;/p&gt; |

&lt;p&gt;The email should be sent to: The individual named in the Caller field&lt;/p&gt;

&lt;p&gt;The email should be sent when: The Incident is first created&lt;/p&gt;

&lt;p&gt;The subject of the email should be: Incident INC00100101 has been opened for you  &lt;/p&gt;

&lt;p&gt;The notification should have the following body text: INC0000001 - Short description   An Incident has been opened for you.   You can view all the details of the Incident by following the link below:  &lt;/p&gt;

&lt;p&gt;Take me to the Incident (link)  &lt;/p&gt;

&lt;p&gt;Thank you.      &lt;/p&gt;

&lt;p&gt;Unsubscribe \| Notification Preferences   Ref:Watermark&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 32 | Incident Management | Incident Management | Notification | INC - Configure notification: Incident resolved | As an Incident caller, I would like to be notified when an Incident that I reported has been resolved, so that I have time to check that it is resolved and I can disagree if necessary. | &lt;p&gt;I know that this is complete when I am notified that an Incident that I reported has been resolved. An email should be sent based on the following criteria:  &lt;/p&gt; |

&lt;p&gt;The email should be sent to: The individual in the Caller field&lt;/p&gt;

&lt;p&gt;The email should be sent when: State field is set to Resolved The subject of the email should be: Your Incident INC0000001 has been resolved    &lt;/p&gt;

&lt;p&gt;The notification should have the following body text:   INC0000001 - Short description   Your Incident has been resolved.   This Incident will automatically close in 7 days  &lt;/p&gt;

&lt;p&gt;Summary details:   Resolved by: Resolved by name   Resolution notes: Resolution notes  &lt;/p&gt;

&lt;p&gt;If you feel the issue is not resolved, please click the following link to reopen your Incident:   Take me to the Incident (link)  &lt;/p&gt;

&lt;p&gt;Thank you.  &lt;/p&gt;

&lt;p&gt;Unsubscribe \| Notification Preferences   Ref:Watermark&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 33 | Incident Management | Incident Management | Notification | INC - Configure notification: New comment (Assigned to) | As a support group team member, I would like to be notified if a new comment has been added to an Incident that is assigned to me, so that I will be aware if the caller has made further updates and requires attention or has responded to any messages from me. | &lt;p&gt;I know that this is complete when I am notified if a new comment has been added to an Incident that is assigned to me. An email should be sent based on the following criteria:  &lt;/p&gt; |

&lt;p&gt;The email should be sent to: The individual in the Assigned to field&lt;/p&gt;

&lt;p&gt;The email should be sent when: Additional comments field is updated and the Assigned to field is not empty&lt;/p&gt;

&lt;p&gt;The subject of the email should be: Incident INC0010001 has a new comment  &lt;/p&gt;

&lt;p&gt;The notification should have the following body text:   INC0000001 - Short description   New comments have been added to this Incident.  &lt;/p&gt;

&lt;p&gt;Comments:   2017-09-06 05:03:48 PDT - Commenter name&lt;/p&gt;

&lt;p&gt;Additional comments Comment text here   You can view all the details of the Incident by following the link below:  &lt;/p&gt;

&lt;p&gt;Take me to the Incident (link)  &lt;/p&gt;

&lt;p&gt;Thank you.    &lt;/p&gt;

&lt;p&gt;Unsubscribe \| Notification Preferences   Ref:Watermark  &lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 34 | Incident Management | Incident Management | Notification | INC - Configure notification: New comment (Assignment Group) | As a support group team member, I would like to be notified if a new comment has been added to an Incident that is assigned to my Group but not an individual, so that I will be aware if the Caller has made further updates and requires attention. | &lt;p&gt;I know that this is complete when I am notified that a new comment has been added to an Incident that is assigned to my Group but not an individual.&lt;/p&gt; |

&lt;p&gt;An email should be sent based on the following criteria:  &lt;/p&gt;

&lt;p&gt;The email should be sent to: The Assignment Group email address The email should be sent when: Additional comments field is updated and the Assigned to field is empty&lt;/p&gt;

&lt;p&gt;The subject of the email should be: Incident INC0010001 has a new comment  &lt;/p&gt;

&lt;p&gt;The notification should have the following body text:   INC0000001 - Short description   New comments have been added to this Incident.  &lt;/p&gt;

&lt;p&gt;Comments:   2017-09-06 05:03:48 PDT - Commenter name&lt;/p&gt;

&lt;p&gt;Additional comments Comment text here  &lt;/p&gt;

&lt;p&gt;You can view all the details of the Incident by following the link below:  &lt;/p&gt;

&lt;p&gt;Take me to the Incident (link)  &lt;/p&gt;

&lt;p&gt;Thank you.    &lt;/p&gt;

&lt;p&gt;Unsubscribe \| Notification Preferences   Ref:Watermark  &lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 35 | Incident Management | Incident Management | Notification | INC - Configure notification: New comment (Caller) | As a Caller, I would like to be notified when a new comment has been added to my Incident, so that I can understand what is happening with it and whether I would like to take any action. | &lt;p&gt;I know that this is complete when I am notified that a new comment has been added to my Incident.&lt;/p&gt; |

&lt;p&gt;An email should be sent based on the following criteria:  &lt;/p&gt;

&lt;p&gt;The email should be sent to: The individual in the Caller field The email should be sent when: Additional comments field is updated&lt;/p&gt;

&lt;p&gt;The subject of the email should be: Your Incident INC0010001 has a new comment   &lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;The notification should have the following body text:   INC0000001 - Short description   New comments have been added to this Incident.  &lt;/p&gt;

&lt;p&gt;Comments:   2017-09-06 05:03:48 PDT - Commenter name&lt;/p&gt;

&lt;p&gt;Additional comments Comment text here  &lt;/p&gt;

&lt;p&gt;You can view all the details of the Incident by following the link below:  &lt;/p&gt;

&lt;p&gt;Take me to the Incident (link)  &lt;/p&gt;

&lt;p&gt;Thank you.    &lt;/p&gt;

&lt;p&gt;Unsubscribe \| Notification Preferences   Ref:Watermark&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 | Column 8 | Column 9 | Column 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Row 36 | Incident Management | Incident Management | Now Assist | Configure Now Assist Plugin | As an admin, I would configure the Now Assist for IT Service Management (ITSM) application, enabling agents to leverage generative AI capabilities within the Service Operations Workspace for ITSM and in Core UI.  | I know when it is complete when I am able to Install the Now Assist for IT Service Management plugin (sn\_itsm\_gen\_ai) |  |  |  |
| Row 37 | Incident Management | Incident Management | Now Assist | Configure Now Assist Plugin | As an admin, I would activate and configure the skills for the Now Assist for ITSM features | I know when it is complete when I am able to active and configure features which are grouped under technology workflow group.  |  |  |  |

On the feature card that is associated with the skill that you'd like to activate, select View details.

In the All available skills section, select Activate skill.

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 38 | Incident Management | Now Assist | Now Assist | INC - Now Assist for Incident | As an Incident Management Process Owner I want to reduce the manual text generation by agents to improve their efficiency | &lt;p&gt;I know this to be true when Now Assist for Incident provides&lt;/p&gt; |

&lt;p&gt;- Resolution notes generation&lt;/p&gt;

&lt;p&gt;- Incident Summarization&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 39 | Incident Management | Incident Management | Prioritization | INC - Configure prioritization matrix | As a Service Desk Agent, when I am creating an Incident, I would like to be able select the level of Impact and Urgency of the issue I am dealing with so that the system can automatically set the Priority. | &lt;p&gt;I know that this is complete when I can select the level of Impact and Urgency of the issue I am dealing with so that the system can automatically set the Priority.&lt;/p&gt; |

&lt;p&gt;The Priority field should be read only and automatically determined based on a matrix set by the combination selected in the Impact and Urgency fields.  &lt;/p&gt;

&lt;p&gt;The matrix should work as follows:  &lt;/p&gt;

&lt;p&gt;Impact Urgency Priority&lt;/p&gt;

&lt;p&gt;1 - High 1 - High 1 - Critical&lt;/p&gt;

&lt;p&gt;1 - High 2 - Medium 2 - High&lt;/p&gt;

&lt;p&gt;1 - High 3 - Low 3 - Moderate&lt;/p&gt;

&lt;p&gt;2 - Medium 1 - High 2 - High&lt;/p&gt;

&lt;p&gt;2 - Medium 2 - Medium 3 - Moderate&lt;/p&gt;

&lt;p&gt;2 - Medium 3 - Low 4 - Low&lt;/p&gt;

&lt;p&gt;3 - Low 1 - High 3 - Moderate&lt;/p&gt;

&lt;p&gt;3 - Low 2 - Medium 4 - Low&lt;/p&gt;

&lt;p&gt;3 - Low 3 - Low 4 - Low  &lt;/p&gt;

&lt;p&gt;Out of the box choice 5 - Planning should be removed from the Priority choices.&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 40 | Incident Management | Incident Management | Reporting | INC - Configure dashboards | As an ITIL User, I would like to have access to a dashboard that easily provides me information about the Incidents that are assigned to me and my groups so that I can efficiently manage my workload throughout the day. | &lt;p&gt;I know that this is complete when I have access to a dashboard that easily provides me information about the Incidents that are assigned to me and my groups. The ITIL User dashboard should contain the following items specific to Incident Management - My Work, My Groups Work, Incidents with SLA at 80% or more assigned to me - the list view columns for each should include - Number, State, Assignment Group, Priority, Task Type, Short Description. My Groups Work should also contain Assigned To after Assignment Group.&lt;/p&gt; |
| Row 41 | Incident Management | Incident Management | Reporting | INC - Configure Incident Management metrics | As an Incident Management application user, I want the configured Incident Management metrics to give me the data and information that I require so that they help me to work more effectively and efficiently. | &lt;p&gt;I know that this is complete when I access the configured Incident Management metrics and they give me the data and information that I require.&lt;/p&gt; |
| Row 42 | Incident Management | Incident Management | Reporting | INC - Create Incident Management reports | As an Incident Management application user, I want the configured Incident Management reports to give me the data and information that I require so they help me to work more effectively and efficiently. | &lt;p&gt;I know that this is complete when I access the configured Incident Management reports and they give me the data and information that I require.&lt;/p&gt; |
| Row 43 | Incident Management | Incident Management | Reporting | INC - Incident Management Platform Analytics Solutions | As the Incident Management Process owner, I would like to ensure that the Incident Management Platform Analytics Solutions are active in the system to that I can take advantage of the series of reports it provides that track the Key Performance Indicators (KPI) of Incident Management | I know that this is complete when I can see that the ITIL dashboard is active in the system. https://docs.servicenow.com/csh?topicname=incident-content-pack.html&amp;version=latest |

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 44 | Incident Management | Incident Management | Reporting | INC - Performance Analytics for Incident Management | As a Service Desk Manager I want to have access to Performance Analytics for Incident Management to help me manage the desk | I know this is done when I have access to the Incident Management Performance Analytics Indicators |

https://docs.servicenow.com/csh?topicname=incident-management-indicators.html&amp;version=latest

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 45 | Incident Management | Incident Management | Self-Service | INC - Configure form: Self Service view | As an Employee, I would like to be able to view all relevant information for my Incident ticket on the ServiceNow Self Service view so that I can track progress and ensure everything was captured correctly. | &lt;p&gt;I know that this is complete when I am able to view all relevant information for my Incident ticket on the ServiceNow Portal. When viewing an existing Incident in the Self Service view, the form should appear as follows:  &lt;/p&gt; |

&lt;p&gt;Read only :-&lt;/p&gt;

&lt;p&gt;Number&lt;/p&gt;

&lt;p&gt;Opened&lt;/p&gt;

&lt;p&gt;Closed&lt;/p&gt;

&lt;p&gt;Urgency&lt;/p&gt;

&lt;p&gt;State&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;Write :-&lt;/p&gt;

&lt;p&gt;Caller (mandatory)&lt;/p&gt;

&lt;p&gt;Watch list&lt;/p&gt;

&lt;p&gt;Short Description (mandatory)&lt;/p&gt;

&lt;p&gt;Additional Comments&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 46 | Incident Management | Incident Management | Self-Service | INC - Self-Service Logging of Incidents | As an employee, I would like to be able to log an IT issue myself via the Service Portal / Employee Center without having to contact the Service Desk so that I do not depend on agent availability | &lt;p&gt;I know that this is complete when I can log an IT issue myself via the Self-Service Portal.&lt;/p&gt; |

&lt;p&gt;When creating a new Incident in the Self Service view the form should appear as follows:&lt;/p&gt;

&lt;p&gt;Text at the top of the form should read: Create an Incident record to report and request assistance with an issue you are having.&lt;/p&gt;

&lt;p&gt;Request assistance with an issue you are having.&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;An Incident record will be created and managed through to successful resolution.&lt;/p&gt;

&lt;p&gt;You will also be notified of the progress.&lt;/p&gt;

&lt;p&gt;Short description (Mandatory)&lt;/p&gt;

&lt;p&gt;Who does this issue affect? (Mandatory)&lt;/p&gt;

&lt;p&gt;Urgency (Mandatory)&lt;/p&gt;

&lt;p&gt;Please describe your issue in more detail (Mandatory)&lt;/p&gt;

&lt;p&gt;Text at the bottom of the form should read:&lt;/p&gt;

&lt;p&gt;The more information you can provide here, the more efficient the support organization will be in diagnosing and resolving your Incident.&lt;/p&gt;

&lt;p&gt;When submitted, a new Incident record should be created:&lt;/p&gt;

&lt;p&gt;The Caller field should be populated by the user that raised the Incident The Affected user field should be populated by the Who does this issue affect variable&lt;/p&gt;

&lt;p&gt;The Contact type field should be populated with Self Service&lt;/p&gt;

&lt;p&gt;The Urgency field should be populated by the Urgency variable from the record producer (self service form view)&lt;/p&gt;

&lt;p&gt;The Assignment group field should be populated with the Service Desk group&lt;/p&gt;

&lt;p&gt;The Short description field should be populated by the Short description variable from the record producer (self service form view)&lt;/p&gt;

&lt;p&gt;The Description field should be populated by the Please describe your issue in more detail below variable from the record producer (self service form view)&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;I know that this is complete when an end user can create Incidents from the Portal.&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;\*\* Refer to &lt;a href="https://www.servicenow.com/community/itsm-articles/how-to-achieve-actionable-information-from-a-self-service/ta-p/2362249" rel="nofollow"&gt;https://www.servicenow.com/community/itsm-articles/how-to-achieve-actionable-information-from-a-self-service/ta-p/2362249&lt;/a&gt; for leading practices&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 47 | Incident Management | Incident Management | SLA | INC - Configure Resolution SLAs | As a Service Owner I would like to be able to track how Incidents are being progressed in relation to agreed Resolution Service Levels so that I can make decisions regarding resourcing, whether SLAs are achievable, and any potential financial penalties incurred. | &lt;p&gt;I know that this is complete when I navigate to Service Level Management &amp;gt;&amp;gt; SLA Definitions, filter the list by &amp;\#39;Resolution&amp;\#39; and can see the Incident Resolution SLAs which are available.&lt;/p&gt; |

&lt;p&gt;For Incidents where the Priority is set to 1 - Critical a resolve SLA should be activated when the Incident is first created.  The SLA is complete when the State field is set to Resolved.  If this is not achieved within 1 hour the SLA should be marked as breached.  &lt;/p&gt;

&lt;p&gt;For Incidents where the Priority is set to 2 - High a resolve SLA should be activated when the Incident is first created.  The SLA is complete when the State field is set to Resolved.  If this is not achieved within 8 hours the SLA should be marked as breached.  &lt;/p&gt;

&lt;p&gt;For Incidents where the Priority is set to 3 - Moderate a resolve SLA should be activated when the Incident is first created.  The SLA is complete when the State field is set to Resolved.  If this is not achieved within 1 day the SLA should be marked as breached.  &lt;/p&gt;

&lt;p&gt;For Incidents where the Priority is set to 4 - Low a resolve SLA should be activated when the Incident is first created.  The SLA is complete when the State field is set to Resolved.  If this is not achieved within 2 days the SLA should be marked as breached.  &lt;/p&gt;

&lt;p&gt;For all SLAs not already closed at 50% of the allowed time, an email should be sent to the Assigned to user in the Incident For all SLAs not already closed at 75% of the allowed time, an email should be sent to the Assigned to user in the Incident For all SLAs not already closed at 100% of the allowed time, an email should be sent to the Assigned to user and the manager of the Assigned to in the Incident&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 48 | Incident Management | Incident Management | SLA | INC - Configure Response Service Level Agreements (SLAs) | As a Service Owner, I would like to be able to track how Incidents are being responded to, in relation to agreed Response Service Levels so that I can make decisions regarding resourcing, whether SLAs are achievable and any potential financial penalties incurred.  Configure SLA Definitions to match the Acceptance Criteria below. | &lt;p&gt;I know that this is complete when I navigate to Service Level Management &amp;gt;&amp;gt; SLA Definitions, filter the list by &amp;\#39;Response&amp;\#39; and can see the Incident Response SLAs which are available.&lt;/p&gt; |

&lt;p&gt;For Incidents where the Priority is set to 1 - Critical a response SLA should be activated when the Incident is first created.&lt;/p&gt;

&lt;p&gt;The SLA is complete when the Assigned to field is populated. If this is not achieved within 15 minutes the SLA should be marked as breached. For Incidents where the Priority is set to 2 - High a response SLA should be activated when the Incident is first created.&lt;/p&gt;

&lt;p&gt;The SLA is complete when the Assigned to field is populated. If this is not achieved within 1 hour the SLA should be marked as breached. For Incidents where the Priority is set to 3 - Moderate a response SLA should be activated when the Incident is first created.&lt;/p&gt;

&lt;p&gt;The SLA is complete when the Assigned to field is populated. If this is not achieved within 4 hours the SLA should be marked as breached. For Incidents where the Priority is set to 4 - Low a response SLA should be activated when the Incident is first created.&lt;/p&gt;

&lt;p&gt;The SLA is complete when the Assigned to field is populated. If this is not achieved within 8 hours the SLA should be marked as breached.&lt;/p&gt;

&lt;p&gt;For all SLAs not already closed at 50% of the allowed time, an email should be sent to the Assigned to user in the Incident For all SLAs not already closed at 75% of the allowed time, an email should be sent to the Assigned to user in the Incident For all SLAs not already closed at 100% of the allowed time, an email should be sent to the Assigned to user and the manager of the Assigned to in the Incident&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 49 | Incident Management | Incident Management | Surveys | INC - Configure surveys | As the Incident Manager I want to measure the satisfaction of my customers so that I can work to improve my processes to better serve my customers. | &lt;p&gt;I know that this is complete when the caller of an Incident is always sent a survey once the Incident is Closed. The Affected User should not receive more than 1 survey per month. Discuss with the customer whether the OOTB questions are suitable.&lt;/p&gt; |
| Row 50 | Incident Management | Incident Management | Templates | INC - Create incident templates | As a Service Desk Agent, I would like a quick way to log regularly reported Incidents so that I can see the resolution method and resolve the issue faster. | &lt;p&gt;I know that this is complete when, on opening a new Incident, I can select from a list of templates. After selecting a particular template the new Incident record should auto populate with the data from the template. The template should only be available to user or groups that have been specified.&lt;/p&gt; |
| Row 51 | Incident Management | Incident Management | Workflow | INC - Configure incident auto-assignment | As a Service Desk Agent, when I am creating an Incident, I would like the Assignment Group to auto-populate based on specific criteria so that it can be correctly and quickly assigned. | &lt;p&gt;I know that this is complete when the Assignment Group auto-populates.&lt;/p&gt; |

&lt;p&gt;When an Incident is first created the Assignment group field should be set automatically using Assignment Rule routing or, when that is not possible, default to the Service Desk.&lt;/p&gt;

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;\*\*\*Customer to provide assignment rules\*\*\*&lt;/p&gt;

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| Row 52 | Incident Management | Incident Management | Workflow | INC - Configure incident auto-closure | As the Service Desk Manager, I would like Incidents to automatically close 7 days after they have been set to Resolved state, unless the Caller does accept the resolution, so that the system is not flooded with resolved Incidents and I can report on successfully resolved Incidents. | &lt;p&gt;I know that this is complete when, on setting an Incident to resolved, it is auto-closed 7 days later, unless the Caller does not accept the resolution. 7 days after an Incident has been set to Resolved the State field should automatically update to Closed if the State is currently Resolved. If it has been changed back to In Progress or another state then this should not be changed.&lt;/p&gt; |
| Row 53 | Incident Management | Incident Management | Workflow | INC - Configure incident to only move to In Progress from new when Assigned to field is populated | As a Service Desk Manager I would like the incident to only move from New to In Progress when the Assigned to field is populated to ensure that the incident will be actively worked on | &lt;p&gt;I know that this is complete when the field &amp;\#34;Assigned to&amp;\#34; becomes mandatory when state is moved to &amp;\#34;In Progress&amp;\#34;&lt;/p&gt; |
| Row 54 | Incident Management | Incident Management | Workflow | INC - Configure Major Incident candidate behavior | As the Incident Process Owner, when an Incident is flagged as a Major Incident candidate, I want it to be assigned to a group that is designated for reviewing Major Incident candidates so that I can ensure that only valid candidates are promoted. | &lt;p&gt;I know this is complete when a Major Incident candidate is automatically assigned to the designated Major Incident Management Group for review.&lt;/p&gt; |
| Row 55 | Incident Management | Incident Management | Workflow | INC - Incident creation from an alert | As a Service Desk Agent or Operator , I would like to create an incident from an alert to ensure the correct response to resolve | &lt;p&gt;I know that is this complete when I can create an incident from an alert and the correct information is mapped into the incident&lt;/p&gt; |

&lt;p&gt; &lt;/p&gt;

&lt;p&gt;Create an alert management rule&lt;br /&gt;&lt;a href="https://docs.servicenow.com/csh?topicname&amp;\#61;create-alert-management-rule.html&amp;amp;version&amp;\#61;latest" rel="nofollow"&gt;https://docs.servicenow.com/csh?topicname&amp;\#61;create-alert-management-rule.html&amp;amp;version&amp;\#61;latest&lt;/a&gt;&lt;/p&gt;

&lt;p&gt;Create an incident or security incident from an alert&lt;br /&gt;&lt;a href="https://docs.servicenow.com/csh?topicname&amp;\#61;t\_EMCreateIncidentfromAlert.html&amp;amp;version&amp;\#61;latest" rel="nofollow"&gt;https://docs.servicenow.com/csh?topicname&amp;\#61;t\_EMCreateIncidentfromAlert.html&amp;amp;version&amp;\#61;latest&lt;/a&gt;&lt;/p&gt;
