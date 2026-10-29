# Release Management - Starter Stories

Source: https://mynow.servicenow.com/now/best-practices/assets/release-management-starter-stories

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `73e1b8dbca037959eb2a0670a6f3e0a94c75cee66ac92e750f69338fe42b2d5f`

## Sheet: Instructions to import stories

| Column 1 | Column 2 |
| --- | --- |
| Row 1 | Asset: 0001374 |
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
| Row 2 | Release Management |  |  | RM - Product form layout | As the Release Management Process Owner, I would like the Product form layout configured so that all relevant information is captured. | &lt;p&gt;I know that this is complete when the form layout is as specified in the requirements.&lt;/p&gt; |
| Row 3 | Release Management |  |  | RM - Reports | As the Release Management Process Owner, I need to have access to numerous reports so that I am able to effectively manage the process. | &lt;p&gt;I know that this is complete when I have all my required reports readily available to me.&lt;/p&gt; |
| Row 4 | Release Management |  |  | RM - Define Release types | As a Release Manager, I would like to have the release types configured in the system so that we can differentiate between different types of releases. | &lt;p&gt;I know that this is complete when I can select on the release form between those types: - Major - Minor - Upgrade - Emergency - Maintenance - Patch&lt;/p&gt; |
| Row 5 | Release Management |  |  | RM - Release Related lists | As a Release Manager, I would like the following related lists available on the Release form, so that I am able to relate the content of the release in a timely and effective manner: |  |

 - Changes

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
|  - tba | &lt;p&gt;I know that this is complete when the following related lists appear on the Release form: - Changes - tba&lt;/p&gt; |  |  |  |  |  |
| Row 6 | Release Management |  |  | RM - Release Task form layout | As the Release Management Process Owner, I would like the Release Task form layout configured so that all relevant information is captured. | &lt;p&gt;As the Release Management Process Owner, I would like the Product form layout configured so that all relevant information is captured.&lt;/p&gt; |
| Row 7 | Release Management |  |  | RM - Notification - Release task assigned to my group | As a Release Manager, I would like to have automatic notification for a group when a release task is assigned so that the group knows about the new task. | &lt;p&gt;I know that this is complete when the notification is triggered on assigning a group to a release task.&lt;/p&gt; |
| Row 8 | Release Management |  |  | RM - Notification - Release approved | As a Release Manager, I want a notification to me triggered as soon as the release got approved so that I can move on with the release. | &lt;p&gt;I know that this is complete when the Release Manager is notified after the release has been approved.&lt;/p&gt; |
| Row 9 | Release Management |  |  | RM - Release form layout | As the Release Management Process Owner, I would like the Release form layout configured so that all relevant information is captured. | &lt;p&gt;I know that this is complete when the form layout is as specified in the requirements.&lt;/p&gt; |
| Row 10 | Release Management |  |  | RM - Design Release States | As the Release Management Process Owner, I want to have the following states configured and visible in the flow formatter: |  |

- Draft

- Scoping

- Awaiting Approval

- Work in Progress

- Testing/QA

-Deployment

- Closed

- Cancelled

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
| - on Hold | &lt;p&gt;I know that this is complete when I can select the specified states and see them in the formatter.&lt;/p&gt; |  |  |  |  |
| Row 11 | Release Management |  |  | RM - Release Default List | As the Release Management Process Owner, I want to have the Release Default list configured with the following columns so that all necessary information is visible from the list: |

- Number

- Short description

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| - tbd | &lt;p&gt;I know that this is complete when the list shows as specified in the requirements.&lt;/p&gt; |  |  |  |  |  |
| Row 12 | Release Management |  |  | RM - Assignment rules | As the Release Management Process Owner, I want to have auto assignments in place at certain points in the process so that the process is more efficient. | &lt;p&gt;I know that this is complete when the auto assignment works as specified in the requirements.&lt;/p&gt; |
| Row 13 | Release Management |  |  | RM - Products Related Lists | As a Release Manager, I would like the following related lists available on the Product form, so that I see associated content directly from the product form: |  |

 - Releases

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
| --- | --- | --- | --- | --- | --- |
|  - tba | &lt;p&gt;I know that this is complete when I can see the lists on the product form.&lt;/p&gt; |  |  |  |  |
| Row 14 | Release Management |  |  | RM - Products Default List | As the Release Management Process Owner, I want to have the Products Default list configured with the following columns so that all necessary information is visible from the list: |

- Number

- Short description

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| - tbd | &lt;p&gt;I know that this is complete when the list shows as specified in the requirements.&lt;/p&gt; |  |  |  |  |  |
| Row 15 | Release Management |  |  | RM - Configure Approvals | As the Release Management Process Owner, I want to have specific approvals in the approval state of the release, so that the correct group/person is approving. | &lt;p&gt;I know that this is complete when the approval process is based on the on the requirements specified in this story.&lt;/p&gt; |
| Row 16 | Release Management |  |  | RM - Design Release phases | As the Release Management Process Owner, I want to have the following states configured and visible in the flow formatter: |  |

- Requirement Gathering

- Design

- Development

- Build

- Deployment

-Deployment

- QA

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 |
| --- | --- | --- | --- | --- | --- | --- |
| - User Acceptance | &lt;p&gt;I know that this is complete when I can select the specified release phases in the form.&lt;/p&gt; |  |  |  |  |  |
| Row 17 | Release Management |  |  | RM - Define Products | As a Release Manager, I would like to have the products added in the system so that we can create and plan releases against them | &lt;p&gt;I know that this is complete when I can see the list of products in the platform.&lt;/p&gt; |
