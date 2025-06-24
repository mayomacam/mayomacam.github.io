---
layout: post
title: "REvil Corp"
date: 2025-04-16 10:00:00 +0530
categories: [tryhackme] # Or just "Art"
image: "/assets/images/tryhackme/revil-corp/steal.jpeg" # Path to the main post image
image_alt: "Colorful abstract painting"
read_time: "5 min read" # You can manually set this or use a plugin
excerpt: "Delve into the vibrant world of abstract art and discover its profound impact on modern culture. This post explores various techniques and influential artists."
# Add any other custom front matter variables you might need
tags: [redline tools] # For filtering or display
custom_path: tryhackme
---

# REvil Corp
Machine : THMREDLINECH1.1
![steal](/assets/images/tryhackme/revil-corp/steal.jpeg){:width="300px" height="200px"}
You are involved in an incident response engagement and need to analyze an infected host using Redline.

# Investigating the Compromised Endpoint 

Scenario: One of the employees at Lockman Group gave an IT department the call; the user is frustrated and mentioned that all of his files are renamed to a weird file extension that he has never seen before. After looking at the user's workstation, the IT guy already knew what was going on and transferred the case to the Incident Response team for further investigation.

- You are the incident responder. Let's see if you can solve this challenge using the infamous Redline tool. Happy Hunting, my friend!
- To start your investigation, open the Mandiant Analysis file in the Analysis File folder on the Desktop.
Note: Loading the Mandiant Analysis file may take 2-3 minutes. 

- Deploy the machine attached to this task; it will be visible in the split-screen view once it is ready.
- If you don't see a virtual machine load then click the Show Split View button.

![split](/assets/images/tryhackme/revil-corp/split-view.png)

- If you wish to access the virtual machine via Remmina, use the credentials below. 

```
Machine IP: MACHINE_IP
User: administrator
Password: letmein123!
```
![remmina](/assets/images/tryhackme/revil-corp/remmina.png)
Accept the Certificate when prompted, and you should be logged into the remote system now.
Note: The virtual machine may take up to 3 minutes to load.

* Answer the questions below

### Q. What is the compromised employee's full name?
Ans. `John Coleman`

### Q. What is the operating system of the compromised host?
Ans. `Windows 7 Home Premium 7601 Service Pack 1`

### Q. What is the name of the malicious executable that the user opened?
Ans. `WinRAR2021.exe`

### Q. What is the full URL that the user visited to download the malicious binary? (include the binary as well)
Ans. `http://192.168.75.129:4748/Documents/WinRAR2021.exe`

### Q. What is the MD5 hash of the binary?
Ans. `890a58f200dfff23165df9e1b088e58f` (see file system and only download folder)

### Q. What is the size of the binary in kilobytes?
Ans. `164`

### Q. What is the extension to which the user's files got renamed?
Ans. `.t48s39la`

### Q. What is the number of files that got renamed and changed to that extension?
Ans. `48` (asked for no. of file but take answer no. of process of changing to that extension of files)

### Q. What is the full path to the wallpaper that got changed by an attacker, including the image name? 
Ans. `C:\Users\John Coleman\AppData\Local\Temp\hk8.bmp` (search for windows wallpapers named .bmp files)

### Q. The attacker left a note for the user on the Desktop; provide the name of the note with the extension. 
Ans. `t48s39la-readme.txt`

### Q. The attacker created a folder "Links for United States" under C:\Users\John Coleman\Favorites\ and left a file there. Provide the name of the file. 
Ans. `GobiernoUSA.gov.url.t48s39la`

### Q. There is a hidden file that was created on the user's Desktop that has 0 bytes. Provide the name of the hidden file. 
Ans. `d60dff40.lock`

### Q. The user downloaded a decryptor hoping to decrypt all the files, but he failed. Provide the MD5 hash of the decryptor file. 
Ans. `f617af8c0d276682fdf528bb3e72560b`

### Q. In the ransomware note, the attacker provided a URL that is accessible through the normal browser in order to decrypt one of the encrypted files for free. The user attempted to visit it. Provide the full URL path. 
Ans. `http://decryptor.top/644E7C8EFA02FBB7`

### Q. What are some three names associated with the malware which infected this host? (enter the names in alphabetical order)
Ans. `REvil,Sodin,Sodinokibi`
