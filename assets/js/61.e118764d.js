(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{444:function(e,t,a){"use strict";a.r(t);var s=a(26),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("PageHeader"),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Main not Master to be the new default branch name")]),e._v(" "),a("p",[e._v("As of October 1, 2020, all new repositories created on GitHub will have the name of the default branch set to "),a("code",[e._v("main")]),e._v(" rather than the previous default name of "),a("code",[e._v("master")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Update to the latest version of git")]),e._v(" "),a("p",[e._v("Please "),a("a",{attrs:{href:"https://git-scm.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("update your git cli"),a("OutboundLink")],1),e._v(" to version 2.28 or later.")]),e._v(" "),a("p",[e._v("This version introduced the ability to set the name of the default branch when creating a new repository. You can choose to set it manually using the "),a("code",[e._v("-b")]),e._v(" flag e.g.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git init -b main\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Or, you can set "),a("strong",[e._v("main")]),e._v(" to be the default in git global config. This will keep you consistent with the new GitHub defaults.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git config --global init.defaultBranch main\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("YouTube",{attrs:{title:"new git default branch",url:"https://www.youtube.com/embed/04rWoDD-JvQ"}}),e._v(" "),a("h2",{attrs:{id:"initialize-a-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize-a-project"}},[e._v("#")]),e._v(" Initialize a project")]),e._v(" "),a("p",[e._v("Create a new project folder (e.g. my-awesome-app) and turn it into a git repository.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" my-awesome-app\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" my-awesome-app\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" init -b main\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("If you already have created the git repo but want to change the master branch to "),a("code",[e._v("main")]),e._v(" and set it as the default branch, then you can do this:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch -M main\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"gitignore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitignore"}},[e._v("#")]),e._v(" .gitignore")]),e._v(" "),a("p",[e._v("The hidden file "),a("code",[e._v(".gitignore")]),e._v(" (don't forget the leading period) tells git which files and folders "),a("em",[e._v("should not")]),e._v(" be tracked for changes.")]),e._v(" "),a("p",[e._v("At the minimum your "),a("code",[e._v(".gitingnore")]),e._v(" file should include:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".DS_Store\nnode_modules\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"gitkeep"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitkeep"}},[e._v("#")]),e._v(" .gitkeep")]),e._v(" "),a("p",[e._v("If you have any empty folders that you want to keep as part of your repo, you can place an empty file inside that folder. The problem is that how do you know if the file is there as part of the project or as a way to save an empty folder.")]),e._v(" "),a("p",[e._v("To address this issue, the convention of calling that empty file "),a("code",[e._v(".gitkeep")]),e._v(" has been used.")]),e._v(" "),a("YouTube",{attrs:{title:"gitkeep and gitignore",url:"https://www.youtube.com/embed/RTj2oU8IDfA"}}),e._v(" "),a("h3",{attrs:{id:"readme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readme"}},[e._v("#")]),e._v(" README")]),e._v(" "),a("p",[e._v("Every git repo should have a good "),a("code",[e._v("README.md")]),e._v(" file to explain what the project is about and examples of how to use it.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('echo "# My awesome app" > README.md\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("It obviously needs more detail than that. Check out "),a("a",{attrs:{href:"https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Beginners Guide to writing a Kickass README"),a("OutboundLink")],1),e._v(" for some advice/inspiration.")]),e._v(" "),a("h2",{attrs:{id:"stage-files-for-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stage-files-for-commit"}},[e._v("#")]),e._v(" Stage files for commit")]),e._v(" "),a("p",[e._v("Select individual files to be included in the next commit.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Using the "),a("code",[e._v("-A")]),e._v(" or "),a("code",[e._v("--all")]),e._v(" flags will stage all the adds, modifies, and removes to match the current working tree.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" -A\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"stop-tracking-changes-on-a-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-tracking-changes-on-a-file"}},[e._v("#")]),e._v(" Stop tracking changes on a file")]),e._v(" "),a("p",[e._v("Remove a file from the git tracking index, but not from the project folder. This is good for when you have accidentally forgotten to create a "),a("code",[e._v(".gitignore")]),e._v(" file and want to stop tracking files. e.g. "),a("code",[e._v("node_modules")])]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" --cached "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("FILENAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"create-a-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-commit"}},[e._v("#")]),e._v(" Create a commit")]),e._v(" "),a("p",[e._v("Commit a change log for all staged files. Make sure to include a clear and descriptive message using the "),a("code",[e._v("-m")]),e._v(" flag. It is a good practice to start most commit messages with an action verb – "),a("em",[e._v("add, update, fix, remove")]),e._v(" – followed by the relevant feature or bug description.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ADD feature x'")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"remote-repositories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote-repositories"}},[e._v("#")]),e._v(" Remote Repositories")]),e._v(" "),a("p",[e._v("It is usually the case that we want to link our local repository to some remotely hosted repo on GitHub, GitLab or BitBucket. If you have started your project by cloning a remote repository, then that link is already set. If not, you can add it with this command:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" origin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("URL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("You can list the currently linked remote repo(s) with")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote -v\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"sync-your-local-commits-to-the-remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sync-your-local-commits-to-the-remote"}},[e._v("#")]),e._v(" Sync your local commits to the remote")]),e._v(" "),a("p",[a("strong",[e._v("origin")]),e._v(" is the default name for the remote repo. "),a("strong",[e._v("main")]),e._v(" is the branch that you want to push. Git will try to push to a branch with the same name on the remote. These can be updated to match your specific project settings.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin main\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If you need to push to a different branch name on the remote, you can use this syntax "),a("code",[e._v("localBranch:remoteBranch")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin main:gh_pages\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#help"}},[e._v("#")]),e._v(" Help")]),e._v(" "),a("p",[e._v("Get quick reminders with "),a("code",[e._v("git help")]),e._v(" on the command line. For more detailed explanations, see the full "),a("a",{attrs:{href:"https://git-scm.com/doc",target:"_blank",rel:"noopener noreferrer"}},[e._v("git documentation"),a("OutboundLink")],1),e._v(" website. There is also a great cheat sheet at the "),a("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Atlassian git tutorial"),a("OutboundLink")],1),e._v(" site.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=EdEWigP6zxQ&list=PLyuRouwmQCjmYaG21ijCw0KrFiFEG0Oh9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Steve's Learning Git playlist"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=M9uTajSRytE&list=PLyuRouwmQCjlxyO-45o53YCWjBCM-fA7L",target:"_blank",rel:"noopener noreferrer"}},[e._v("Steve's Learning Github playlist"),a("OutboundLink")],1)])],1)}),[],!1,null,null,null);t.default=n.exports}}]);