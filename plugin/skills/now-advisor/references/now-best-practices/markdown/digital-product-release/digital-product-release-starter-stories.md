# Digital Product Release - Starter Stories

Source: https://mynow.servicenow.com/now/best-practices/assets/digital-product-release-starter-stories

- Release: Unknown
- Last updated: Unknown
- Original SHA-256: `95dd26afe168ba7b9cff072d0b26813e72f0cf956faecf13f0b141bf8b2cb0db`

## Sheet: Instructions to import stories

| Column 1 | Column 2 |
| --- | --- |
| Row 1 | Asset number - 0004017 |
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
| Row 2 | Digital Product Release |  |  | DPR - Release process Governance | As the Release Manager, I would like to centralize the governance of the releases for the organization. | &lt;p&gt; I know all the active and inactive release process per type.  Approval Definitions are defined for each release template.&lt;/p&gt; |
| Row 3 | Digital Product Release |  |  | DPR - Maintain Release templates | As the Release Manager, I need to create, update or delete the release process according to the Release Governance. | &lt;p&gt; I can maintain the tasks and policies mapping for each phase of the release process. &lt;/p&gt; |
| Row 4 | Digital Product Release |  |  | DPR - Edit Policies | As the Compliance Officer, I can create new a policy to define a business need from the OOTB policies. | &lt;p&gt; I can duplicate an existing policy from the content pack. Then I can design and develop my policy rules and control its versioning. &lt;/p&gt; |
| Row 5 | Digital Product Release |  |  | DPR - Create Release Readiness Targets | As the Release Manager, I would like to plan all go-to production milestones for a product based upon the release lifecycle. | &lt;p&gt;  I can create several release calendars regrouping  the release targets of the product with the visibility of the maintenance windows and blockout schedules. &lt;/p&gt; |
| Row 6 | Digital Product Release |  |  | DPR - Connect to external development tools | As the Product Manager, I want to consume the DevOps data of the application to link them to product release. | &lt;p&gt; I can use the DevOps data from the existing connected and configured needed planning, source code, CI/CD, or artifact management tools from the DevOps Integrations. &lt;/p&gt; |
| Row 7 | Digital Product Release |  |  | DPR - Manage product and plan for a release | As the Product Manager, I can manage my portfolio of products by creating, updating versions targeted for the planned releases. | &lt;p&gt; I can administrate my assigned products by managing the versions and the release planning by assigning the features/epics from the planning tool. Also I can view the scope of the release. &lt;/p&gt; |
| Row 8 | Digital Product Release |  |  | DPR - Create release and track progress | As the Product Manager, I execute a release by updating the tasks states and get the policies execution states for each phase. I can amend the release by adding tasks or mapping policies to the created release. | &lt;p&gt; I can track the progress of the release execution, get the phase status, update the tasks status and run policy execution. I can complete or cancel phases. &lt;/p&gt; |
| Row 9 | Digital Product Release |  |  | DPR - Create a Change Request | As the Change Manager, I can manually create a change request to assign it to a release execution. I list all change requests linked to the product version. | &lt;p&gt;  I can view the list of change requests for the release execution or view the ones automatically created and processed from DevOps Change Velocity.&lt;/p&gt; |
| Row 10 | Digital Product Release |  |  | DPR - Release Quality metrics | As the Product Manager, I can visualize the build and quality metrics for the executed release. | &lt;p&gt; I can for each build creation get the all the test results: unitary, code quality or security ran from the pipeline execution. Also produced artefacts or packages are linked the releases. &lt;/p&gt; |
| Row 11 | Digital Product Release |  |  | DPR - Dashboard and Reporting | As the Release or Product Manager, I can set the KPIs within my dashboard. | &lt;p&gt; From the Home in the Digital Product Release Workspace, each key persona can view the customized widgets in the dashboard to track the releases executions.&lt;/p&gt; |
| Row 12 | Digital Product Release |  |  | DPR - Create Approval Definitions | As a Release Administrator, I want to define who will be required to approve tasks defined in the Release Templates. | &lt;p&gt; Each person or group needed to approve tasks in the release process has a corresponding approval definition record &lt;/p&gt; |
| Row 13 | Digital Product Release |  |  | DPR - Create Release Calendars | As a Release Administrator, I want to define the release calendars that Product Managers and Release Coordinators will leverage to select the appropriate release readiness targets | &lt;p&gt; The release calendars are defined including any additional schedules that need to be used for creating Release Readiness Targets &lt;/p&gt; |
| Row 14 | Digital Product Release |  |  | DPR - Request Installation of Digital Product Release from the ServiceNow Store | As a ServiceNow Administrator, I want to request the Digital Product Release application from the ServiceNow Store so that the entitlement checks are validated and I can install DPR | &lt;p&gt; The Digital Product Release application and its dependencies are entitled for the instance &lt;/p&gt; |
