# CoderSchool FTW - * Github Issues Team3 *

Created with love by: Chau, Jun, Phuong and Prince
  
View online at: `https://happy-pasteur-03b555.netlify.app`
  
It was really enjoyable growing familiar with Moment, React-Markdown, React-Bootstrap and, ofcourse, Github Issues!

I'm faster and more confident with common/basic github features/commands. Especially, considering team work flow.
-Prince

## Video Walkthrough

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/086fb9097f404d6fb64990c376842617" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## User Stories

The following **required** functionalities are completed:

- [X] The user can enter a repository in a search bar, click "search", and see the associated issues. The repository should be of the format `owner/repo-name`, e.g. `facebook/react`.
- [X] If the repository does not exist, the user should see a proper error message.
- [X] The user should be able to see the following information for each issue:
  - Issue Title with Number of the issue
  - Owner of the Issue
  - Owner Avatar
  - How long ago the issue was updated in a human-friendly format (e.g. 2 days ago) (Hint: [react-moment](https://www.npmjs.com/package/react-moment#installing))
  - Body of the Issue
  - Labels of the issue
- [X] The user should be able to see multiple pages of results, by clicking a pagination control.

The following **optional** features are implemented:

- [X] The user can see more details (**[including 5 comments of the issue](https://developer.github.com/v3/issues/comments/)**) in a modal that's opened by clicking on the title of the issue.
- [X] The user should be able to see the body of the issue rendered in markdown. (Hint: [react-markdown](https://github.com/rexxars/react-markdown))
- [X] Fetching is an asynchronous operation, so you should display a loading [spinner](https://www.npmjs.com/package/react-spinners) whenever the app loads data, and hide it once the corresponding API call has been completed.
- [X] Input Fuzzy Matching: the user should be able to type in either https://github.com/facebook/react or facebook/react, BOTH should work.
- [ ] In the Issue Detail Modal, let implement an **infinite pagination** with a "Show More" button: Fetch 5 more comments whenever user clicks on the button. The button is disabled or hidden when all the comments have been loaded.
- [ ] Users can create a new issue. (**Danger Warning**: If you attempt this task, please do so on a private repository. Don't spam the official facebook/react repo!)

The following **additional** features are implemented:

* [x] List anything else cool you did

<!-- ## Time Spent and Lessons Learned

Time spent: 12-20 hours spent in total.



Describe any challenges encountered while building the app. -->

## License

    Copyright [2021] [Chau, Jun, Phuong, Prince]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
