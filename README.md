# Overview

# Cheat sheet

| Purpose        | Code           |
| ------------- |-------------|
| See global list of packages with npm | `npm list -g --depth=0` |
| how to use create-react-app | `npx create-react-app myapp` |
| find applications on different ports | `sudo lsof -i -P -n | grep LISTEN`|
| [Viewing number of inotify file watchers](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details) | `cat /proc/sys/fs/inotify/max_user_watches`|
| Updating number of inotify file watchers | `sudo sysctl fs.inotify.max_user_watches=524288; sudo sysctl -p`|

