# Overview

# Cheat sheet

| Purpose                                                                                                                                         | Code                                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| See global list of packages with npm                                                                                                            | `npm list -g --depth=0`                                                                                                                                                         |
| how to use create-react-app                                                                                                                     | `npx create-react-app myapp`                                                                                                                                                    |
| find applications on different ports                                                                                                            | `sudo lsof -i -P -n                                                                                                                                                             | grep LISTEN` |
| Kill process on port                                                                                                                            | `sudo kill -9 `sudo lsof -t -i:3000``                                                                                                                                           |
| [Viewing number of inotify file watchers](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details) | `cat /proc/sys/fs/inotify/max_user_watches`                                                                                                                                     |
| Updating number of inotify file watchers                                                                                                        | `sudo sysctl fs.inotify.max_user_watches=524288; sudo sysctl -p`                                                                                                                |
| How to open file / folder in VScode editor                                                                                                      | `code -r something.php`                                                                                                                                                         |
| Installing zsh                                                                                                                                  | `sudo apt install -y zsh; sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` then [get](https://github.com/romkatv/powerlevel10k) |
| enabling vscode to use defualt zsh                                                                                                              | update `"terminal.integrated.shell.linux": "/bin/zsh"`                                                                                                                          |

# TO DO

- learn about prettierrc file configu
- how to debug a file?
