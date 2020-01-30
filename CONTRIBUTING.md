# Contributing
This document outlines the workflow that we will be using in the project. Follow
the steps below:

## Working on an issue
Issues will be created on Github and assigned to a team member to complete. Each
issue will have a corresponding branch where the work will happen. Before
working on a new issue, there is some cleanup that must be done for your local
repo. The workflow is as follows:

1.  Run the following commands to cleanup your local repo:
    
    ```shell script
    git fetch origin
    git checkout dev  # so that you can delete any local branches without error
    git pull origin dev  # so that your local dev branch is up-to-date
    git remote prune origin  # removes local refs to deleted remote branches
    git remote show origin  # shows local branch refs as well as remote refs
    git branch -D <local-branch-name>  # deletes a local branch
    ```
    
    The last line is only needed if there are any local branches leftover from
    closed issues. These need to be removed as new work should only be carried
    in branches for open issues.
    
2.  Create a new branch for the issue and push it to the remote repo:
    
    ```shell script
    git checkout dev
    git checkout -b <issue_number>-<short-description>
    git push origin <issue_number>-<short-description>
    ```
    
    Names for new branches should follow the format
    `<issue_number>-<short-description>`. For example, if let's say you're
    beginning work on issue #42 regarding adding a user dashboard, then your
    branch name could be `42-user-dash`.
    
    Finally, update the issue on GitHub to reflect the current issue status by
    adding the `BRANCH CREATED` label. Additionally, update the description by
    tagging the newly created branch using the `#` symbol prefix.
    
3.  Do work on this new branch for the issue. Please remember: __commit often,
    push often.__ Only push to the new branch:
    
    ```shell script
    git push origin <local-branch-name>
    ``` 
    
    Once work has begun, please update the issue label to `UNDER DEVELOPMENT`.
    If at any point you come across any dependencies which are blocking you from
    completing the issue, remove the `UNDER DEVELOPMENT` label and add the
    `HAS DEPENDENCIES` label. Create new issues for the dependencies and assign
    the appropriate member (if it isn't yourself).
    
4.  Once the issue has been completed, you will submit a pull request (PR) for
    the branch.
    
    - Make sure the PR is set to merge your branch into the `dev`
      branch.
    
    - Specify atleast one reviewer (who will be reviewing the code) and the
      assignee (who will be approving the pull request). These may be the same
      person.
    
    - Assign labels to the PR to match the corresponding issue (except for
      `PROCESS LABELS`).
    
    - Tag the issue number in the PR description (using the `#` prefix).
    
    - Update the corresponding issue by adding the `PULL REQUESTED` label to the
      issue.
    
5.  The reviewers and assignee will be notified of the PR and will begin
    reviewing the code.
    
    - If the PR is rejected, the reason for rejection, notes, and suggestions to
      changes will be posted to the PR thread. Review the comments and start
      over from Step 3 until the issue is complete and the PR has been approved.
    
    - If the PR is accepted, the branch will be merged into the `dev` branch and
      the PR assignee will close the corresponding issue.
      
## Creating issues
If an issue needs to be created, please follow the below guidelines:

- Create a descriptive, but short title
- Provide a detailed description of the issue
- Set the assignee to the person who will be tasked with fixing the issue
- Set the appropriate descriptor labels (lowercase) for the issue
- Ignore the Projects and Milestones options, for now
