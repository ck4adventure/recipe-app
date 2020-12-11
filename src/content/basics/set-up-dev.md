---
path: /basics/set-up-dev
date: 2020-12-10
title: Setting Up
category: basics
---

## Ensure Github Access

### Ensure personal account access

You should already have a github account, if not, it is an easy signup process at [github.com](https://github.com)

### Ensure SSH keypair on file

1. First check to see if there are [existing SSH keys](https://help.github.com/en/enterprise/2.15/user/articles/checking-for-existing-ssh-keys). (the link will take you to GitHub's tutorial)
1. If you do not have an SSH key, follow these instructions to [generate a new one](https://help.github.com/en/enterprise/2.15/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
1. If you do have a public and private pair, follow these instructions to [add your key to the ssh-agent](https://help.github.com/en/enterprise/2.15/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)
1. Then you will [add your SSH key](https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account) to your GitHub account

## Ensure dev environment setup

### Ensure your favorite code editor is installed and set up for dev work

we recommend [downloading VSCode](https://code.visualstudio.com/)

### Install colored git branches

Add this snippet to your .bash_profile

```bash
parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

export PS1="\u@\h \W\[\033[32m\]\$(parse_git_branch)\[\033[00m\] $ "
```

Run `source ~/.bash_profile` to reload the changes into any open terminals.

### Install bash autocompletion

Link to [Git Tips and Tricks](https://git-scm.com/book/en/v1/Git-Basics-Tips-and-Tricks) to understand using Autocomplete

1. Download this file [git-completion.bash](https://github.com/git/git/blob/master/contrib/completion/git-completion.bash)
2. Move or copy it to your home directory
3. Add this line to your .bashrc file `source ~/git-completion.bash`, it will now read in every time you open your terminal

### Export shell path for code

From within VSCode editor, open to any file or none
`cmd + t` to open the command shortcut bar
type in `> shell ` to pull up the quick command to add the code command to the path

![vscode shell command](https://i.imgur.com/WQFB4tk.png)

### Install VSCode extensions

Extensions can make it easier to work within the editor. Open the extensions browser by clicking the Settings Icon in the very lower left of VSCode and choosing `Extensions`, or, as you can see, it has a shortcut.

![Settings, Extensions](https://i.imgur.com/0XkNShr.png)

One extension that is often useful is `Gitlens`.

## Ensure Node is installed

### Install node/js 8.1.2

`brew install node@8.1.2`

NB: for devs, make sure you can switch down to an older node via `nvm` or other manager

# Clone and Initialize the Repo

## Switch into your working directory

### Create a working directory if don't have one already

As the products grow, so do the places where documentation lives. Tech writers will end up with more than a few repos that you will work in and contribute to as part of your work.

1. From home level in the terminal, type `mkdir d2iq`

### CD into your working directory

1. Change directory into the new one you just made, or the one you already had
   `cd d2iq`

## Clone the repo you need

We will be using the docs site repo for all examples, but this might also be another product repo within D2iQ.

`git clone dcos-docs-site`

NB: On first time setup, you may need to follow the instructions to install xcode tools to get git functionality

## Change into the Repo you will be working in

`cd dcos-docs-site`

## Install node modules

This must be only done on first time or if a rare site tooling change occurs. Other repos may have other needs, see their Contributing Guide or similar resource for assistance if you will need to build their code.
`npm install`

## Build the API page sets

This is necessary anytime a set is changed, or when a new DC/OS version (and there for a new set) is created
`make build-api`

This takes about 8 mins. It builds the folder `build-ngindox` and `build-swagger`

## Build a local preview

to ensure setup was successful
`npm run dev`

Open a browser and navigate to `localhost:3000` to view the documentation site on your local system

## Stop the local preview server

this necessary once you are done previewing, not great to leave it running
`ctrl-c`

## Problems?

Running a build on first install is to ensure that all tools have been installed and are reading the code correctly. Please make sure to debug any errors at this point until you can get a full preview of the docs site at localhost:3000 in your browser.
