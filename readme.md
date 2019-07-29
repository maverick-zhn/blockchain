# Blockchain installation and playground

## References
* [follow this documentation](https://hyperledger-fabric.readthedocs.io/en/release-1.4/write_first_app.html)
* https://github.com/IBM/todo-list-fabricV1
* https://hyperledger-fabric.readthedocs.io/en/release-1.2/write_first_app.html
* https://github.com/hyperledger/fabric-sdk-node
* https://chat.hyperledger.org/channel/general
* https://fabric-shim.github.io/ChaincodeStub.html
* https://www.crn.com/news/components-peripherals/300105511/intel-promotes-hardware-based-security-for-blockchain-and-ai.htm?itc=refresh
* https://medium.com/@kpbird/how-to-setup-hyperledger-fabric-and-composer-in-mac-osx-fb7611b55ba8

```
  curl -sSL http://bit.ly/2ysbOFE | bash -s                                       25.07.19    23:10:28 

Installing hyperledger/fabric-samples repo

===> Cloning hyperledger/fabric-samples repo and checkout v1.4.2
Cloning into 'fabric-samples'...
remote: Enumerating objects: 134, done.
remote: Counting objects: 100% (134/134), done.
remote: Compressing objects: 100% (82/82), done.
remote: Total 3546 (delta 28), reused 117 (delta 11), pack-reused 3412
Receiving objects: 100% (3546/3546), 1.20 MiB | 1.19 MiB/s, done.
Resolving deltas: 100% (1697/1697), done.
Note: checking out 'v1.4.2'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch-name>

HEAD is now at 9e0eed1 [FAB-15104] Remove scripts/bootstrap.sh

Installing Hyperledger Fabric binaries

===> Downloading version 1.4.2 platform specific fabric binaries
===> Downloading:  https://nexus.hyperledger.org/content/repositories/releases/org/hyperledger/fabric/hyperledger-fabric/darwin-amd64-1.4.2/hyperledger-fabric-darwin-amd64-1.4.2.tar.gz
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 40.7M  100 40.7M    0     0   544k      0  0:01:16  0:01:16 --:--:--  740k
==> Done.
===> Downloading version 1.4.2 platform specific fabric-ca-client binary
===> Downloading:  https://nexus.hyperledger.org/content/repositories/releases/org/hyperledger/fabric-ca/hyperledger-fabric-ca/darwin-amd64-1.4.2/hyperledger-fabric-ca-darwin-amd64-1.4.2.tar.gz
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 5075k  100 5075k    0     0   838k      0  0:00:06  0:00:06 --:--:--  988k
==> Done.

Installing Hyperledger Fabric docker images

===> Pulling fabric Images
==> FABRIC IMAGE: peer

1.4.2: Pulling from hyperledger/fabric-peer
34667c7e4631: Pull complete
d18d76a881a4: Pull complete
119c7358fbfc: Pull complete
2aaf13f3eff0: Pull complete
3f89de4cf84b: Pull complete
24194f819972: Pull complete
8fa40bdcd32a: Pull complete
d596d7bfcec3: Pull complete
1aa4871489bb: Pull complete
Digest: sha256:b0f529295f9e970b18263671f2188f62f3bac9026747bfc8d0e9a605e91ff001
Status: Downloaded newer image for hyperledger/fabric-peer:1.4.2
==> FABRIC IMAGE: orderer

1.4.2: Pulling from hyperledger/fabric-orderer
34667c7e4631: Already exists
d18d76a881a4: Already exists
119c7358fbfc: Already exists
2aaf13f3eff0: Already exists
3f89de4cf84b: Already exists
24194f819972: Already exists
8fa40bdcd32a: Already exists
726ca15d3cc3: Pull complete
f943f13f36af: Pull complete
Digest: sha256:b07975809591de3c93d37f3d7a06406c1ce4cb775c322c2352513a253830bc36
Status: Downloaded newer image for hyperledger/fabric-orderer:1.4.2
==> FABRIC IMAGE: ccenv

1.4.2: Pulling from hyperledger/fabric-ccenv
34667c7e4631: Already exists
d18d76a881a4: Already exists
119c7358fbfc: Already exists
2aaf13f3eff0: Already exists
3f89de4cf84b: Already exists
24194f819972: Already exists
78e4eabd31a5: Pull complete
c7652b6bde40: Pull complete
b4646dd65c45: Pull complete
5e6defad8a30: Pull complete
7701c1a655e4: Pull complete
484dee9a082b: Pull complete
562474a67e8b: Pull complete
Digest: sha256:9f047d427357350885f5dbc7f042c5fd52694ca74e6cf028faeae923ae7c9190
Status: Downloaded newer image for hyperledger/fabric-ccenv:1.4.2
==> FABRIC IMAGE: tools

1.4.2: Pulling from hyperledger/fabric-tools
34667c7e4631: Already exists
d18d76a881a4: Already exists
119c7358fbfc: Already exists
2aaf13f3eff0: Already exists
3f89de4cf84b: Already exists
24194f819972: Already exists
78e4eabd31a5: Already exists
c7652b6bde40: Already exists
b4646dd65c45: Already exists
5e6defad8a30: Already exists
18a94754e9cd: Pull complete
86cd1909ed63: Pull complete
3a85e2f8d254: Pull complete
Digest: sha256:a5c377e8587d4543685b474637ab1d4aed86988b893e5f176032129b620b6bf2
Status: Downloaded newer image for hyperledger/fabric-tools:1.4.2
==> FABRIC IMAGE: baseos

Error response from daemon: manifest for hyperledger/fabric-baseos:1.4.2 not found
Error response from daemon: No such image: hyperledger/fabric-baseos:1.4.2
==> FABRIC IMAGE: nodeenv

Error response from daemon: manifest for hyperledger/fabric-nodeenv:1.4.2 not found
Error response from daemon: No such image: hyperledger/fabric-nodeenv:1.4.2
==> FABRIC IMAGE: javaenv

1.4.2: Pulling from hyperledger/fabric-javaenv
34667c7e4631: Already exists
d18d76a881a4: Already exists
119c7358fbfc: Already exists
2aaf13f3eff0: Already exists
3f89de4cf84b: Already exists
24194f819972: Already exists
78e4eabd31a5: Already exists
c7652b6bde40: Already exists
b4646dd65c45: Already exists
5e6defad8a30: Already exists
83d0aef4e2d6: Pull complete
47d779d89b87: Pull complete
5fd4cb5c0ca6: Pull complete
a3e23bf3020b: Pull complete
84e61243b112: Pull complete
bcd6f842c692: Pull complete
e99be2ec1d91: Pull complete
16ae2145c0fc: Pull complete
d2c7009b0e47: Pull complete
4f147c1ec297: Pull complete
e70fff4a95f5: Pull complete
0de639cbcfde: Pull complete
c22321aea439: Pull complete
168fc212b8f0: Pull complete
3af19ecca03e: Pull complete
1aeff3f7337f: Pull complete
b2a4fe7b5373: Pull complete
c49d13d6bc4c: Pull complete
d5e218561328: Pull complete
0be2598fbe18: Pull complete
e7356872651d: Pull complete
50d0b732cd8e: Pull complete
fd13dadb0403: Pull complete
ea72d89dfb8e: Pull complete
adb108d15b38: Pull complete
60236d4a5feb: Pull complete
2eb6de5e9d19: Pull complete
Digest: sha256:b3cc1042b7b08607f2d781e036251cf3a5151b99e3d7aba8bf404ff94b2ec68e
Status: Downloaded newer image for hyperledger/fabric-javaenv:1.4.2
===> Pulling fabric ca Image
==> FABRIC CA IMAGE

1.4.2: Pulling from hyperledger/fabric-ca
34667c7e4631: Already exists
d18d76a881a4: Already exists
119c7358fbfc: Already exists
2aaf13f3eff0: Already exists
3f89de4cf84b: Already exists
24194f819972: Already exists
6c9a20bc8c40: Pull complete
44c769eed4fe: Pull complete
66b165378ca1: Pull complete
9db610c0a40c: Pull complete
5022d54a10f0: Pull complete
Digest: sha256:6c89ec2b27849c02f71479742c79bf33260984ad391f39dd3fe25fc7adb535d0
Status: Downloaded newer image for hyperledger/fabric-ca:1.4.2
===> Pulling thirdparty docker images
==> THIRDPARTY DOCKER IMAGE: couchdb

Error response from daemon: Get https://registry-1.docker.io/v2/: Service Unavailable
Error response from daemon: No such image: hyperledger/fabric-couchdb:0.4.15
==> THIRDPARTY DOCKER IMAGE: kafka

0.4.15: Pulling from hyperledger/fabric-kafka
34667c7e4631: Already exists
d18d76a881a4: Already exists
119c7358fbfc: Already exists
2aaf13f3eff0: Already exists
3f89de4cf84b: Already exists
24194f819972: Already exists
78e4eabd31a5: Already exists
c7652b6bde40: Already exists
b4646dd65c45: Already exists
5e6defad8a30: Already exists
d0459116a54a: Pull complete
1bbcec7bfdef: Pull complete
5911218c5933: Pull complete
Digest: sha256:62418a885c291830510379d9eb09fbdd3d397052d916ed877a468b0e2026b9e3
Status: Downloaded newer image for hyperledger/fabric-kafka:0.4.15
==> THIRDPARTY DOCKER IMAGE: zookeeper

0.4.15: Pulling from hyperledger/fabric-zookeeper
34667c7e4631: Already exists
d18d76a881a4: Already exists
119c7358fbfc: Already exists
2aaf13f3eff0: Already exists
3f89de4cf84b: Already exists
24194f819972: Already exists
78e4eabd31a5: Already exists
c7652b6bde40: Already exists
b4646dd65c45: Already exists
5e6defad8a30: Already exists
0e045d9c2cdc: Pull complete
7ef4d8920518: Pull complete
dbeed81d9a45: Pull complete
aeea025ecc4e: Pull complete
Digest: sha256:180553e88d09167370aa62a41587a9a95b819b981ad74cad218689412b85f130
Status: Downloaded newer image for hyperledger/fabric-zookeeper:0.4.15

===> List out hyperledger docker images
hyperledger/fabric-javaenv              1.4.2               1cd707531ce7        7 days ago          1.76GB
hyperledger/fabric-javaenv              latest              1cd707531ce7        7 days ago          1.76GB
hyperledger/fabric-ca                   1.4.2               f289675c9874        8 days ago          253MB
hyperledger/fabric-ca                   latest              f289675c9874        8 days ago          253MB
hyperledger/fabric-tools                1.4.2               0abc124a9400        8 days ago          1.55GB
hyperledger/fabric-tools                latest              0abc124a9400        8 days ago          1.55GB
hyperledger/fabric-ccenv                1.4.2               fc0f502399a6        8 days ago          1.43GB
hyperledger/fabric-ccenv                latest              fc0f502399a6        8 days ago          1.43GB
hyperledger/fabric-orderer              1.4.2               362021998003        8 days ago          173MB
hyperledger/fabric-orderer              latest              362021998003        8 days ago          173MB
hyperledger/fabric-peer                 1.4.2               d79f2f4f3257        8 days ago          178MB
hyperledger/fabric-peer                 latest              d79f2f4f3257        8 days ago          178MB
hyperledger/fabric-zookeeper            0.4.15              20c6045930c8        4 months ago        1.43GB
hyperledger/fabric-zookeeper            latest              20c6045930c8        4 months ago        1.43GB
hyperledger/fabric-kafka                0.4.15              b4ab82bbaf2f        4 months ago        1.44GB
hyperledger/fabric-kafka                latest              b4ab82bbaf2f        4 months ago        1.44GB
hyperledger/fabric-ca                   1.2.0               66cc132bd09c        12 months ago       252MB
hyperledger/fabric-tools                1.2.0               379602873003        12 months ago       1.51GB
hyperledger/fabric-ccenv                1.2.0               6acf31e2d9a4        12 months ago       1.43GB
hyperledger/fabric-orderer              1.2.0               4baf7789a8ec        12 months ago       152MB
hyperledger/fabric-peer                 1.2.0               82c262e65984        12 months ago       159MB
hyperledger/fabric-zookeeper            0.4.10              2b51158f3898        13 months ago       1.44GB
hyperledger/fabric-kafka                0.4.10              936aef6db0e6        13 months ago       1.45GB
hyperledger/fabric-couchdb              0.4.10              3092eca241fc        13 months ago       1.61GB
hyperledger/fabric-couchdb              latest              3092eca241fc        13 months ago       1.61GB
hyperledger/fabric-baseimage            amd64-0.4.10        62513965e238        13 months ago       1.39GB
hyperledger/fabric-baseos               amd64-0.4.10        52190e831002        13 months ago       132MB
hyperledger/fabric-ca                   x86_64-1.1.0        72617b4fa9b4        16 months ago       299MB
hyperledger/fabric-orderer              x86_64-1.1.0        ce0c810df36a        16 months ago       180MB
hyperledger/fabric-peer                 x86_64-1.1.0        b023f9be0771        16 months ago       187MB
hyperledger/fabric-ccenv                x86_64-1.1.0        c8b4909d8d46        16 months ago       1.39GB
hyperledger/fabric-couchdb              x86_64-0.4.6        7e73c828fc5b        17 months ago       1.56GB

  ~/blockchain 
   df -h                                                                           25.07.19    23:27:55 
Filesystem      Size   Used  Avail Capacity iused               ifree %iused  Mounted on
/dev/disk1s1   233Gi  178Gi   52Gi    78% 4283762 9223372036850492045    0%   /
devfs          199Ki  199Ki    0Bi   100%     688                   0  100%   /dev
/dev/disk1s4   233Gi  3.0Gi   52Gi     6%       3 9223372036854775804    0%   /private/var/vm
map -hosts       0Bi    0Bi    0Bi   100%       0                   0  100%   /net
map auto_home    0Bi    0Bi    0Bi   100%       0                   0  100%   /home

  ~/blockchain 
   pwd                                                                             25.07.19    23:31:55 
/Users/maverickzhn/blockchain

  ~/blockchain 
   lsa                                                                             25.07.19    23:32:42 
total 16
drwxr-xr-x   5 maverickzhn  staff   160B Jul 25 23:10 .
drwxr-xr-x+ 73 maverickzhn  staff   2.3K Jul 25 23:32 ..
-rw-r--r--@  1 maverickzhn  staff   6.0K Jun  3 16:15 .DS_Store
drwxr-xr-x   8 maverickzhn  staff   256B Sep 24  2018 blockchain
drwxr-xr-x  26 maverickzhn  staff   832B Jul 25 23:12 fabric-samples

  ~/blockchain 
   cd fabric                                                                       25.07.19    23:32:44 
cd: no such file or directory: fabric

  ~/blockchain 
 ↵ 1  cd fabric-samples                                                             25.07.19    23:33:19 

  ~/blockchain/fabric-samples     9e0eed19  v1.4.2 
   lsa                                                                             25.07.19    23:33:24 
total 96
drwxr-xr-x  26 maverickzhn  staff   832B Jul 25 23:12 .
drwxr-xr-x   5 maverickzhn  staff   160B Jul 25 23:10 ..
drwxr-xr-x  13 maverickzhn  staff   416B Jul 25 23:33 .git
drwxr-xr-x   3 maverickzhn  staff    96B Jul 25 23:10 .github
-rw-r--r--   1 maverickzhn  staff   130B Jul 25 23:10 .gitignore
-rw-r--r--   1 maverickzhn  staff   109B Jul 25 23:10 .gitreview
-rw-r--r--   1 maverickzhn  staff   597B Jul 25 23:10 CODE_OF_CONDUCT.md
-rw-r--r--   1 maverickzhn  staff   935B Jul 25 23:10 CONTRIBUTING.md
-rw-r--r--   1 maverickzhn  staff   6.2K Jul 25 23:10 Jenkinsfile
-rw-r--r--   1 maverickzhn  staff    11K Jul 25 23:10 LICENSE
-rw-r--r--   1 maverickzhn  staff   470B Jul 25 23:10 MAINTAINERS.md
-rw-r--r--   1 maverickzhn  staff   1.8K Jul 25 23:10 README.md
drwxr-xr-x  13 maverickzhn  staff   416B Jul 25 23:10 balance-transfer
drwxr-xr-x  16 maverickzhn  staff   512B Jul 25 23:10 basic-network
drwxr-xr-x  10 maverickzhn  staff   320B Jul 25 23:12 bin
drwxr-xr-x   8 maverickzhn  staff   256B Jul 25 23:10 chaincode
drwxr-xr-x   9 maverickzhn  staff   288B Jul 25 23:10 chaincode-docker-devmode
-rw-r--r--   1 maverickzhn  staff   968B Jul 25 23:10 ci.properties
drwxr-xr-x   4 maverickzhn  staff   128B Jul 25 23:10 commercial-paper
drwxr-xr-x   5 maverickzhn  staff   160B Jul 17 17:00 config
drwxr-xr-x   4 maverickzhn  staff   128B Jul 25 23:10 docs
drwxr-xr-x   7 maverickzhn  staff   224B Jul 25 23:10 fabcar
drwxr-xr-x  27 maverickzhn  staff   864B Jul 25 23:10 first-network
drwxr-xr-x   5 maverickzhn  staff   160B Jul 25 23:10 high-throughput
drwxr-xr-x   5 maverickzhn  staff   160B Jul 25 23:10 interest_rate_swaps
drwxr-xr-x   4 maverickzhn  staff   128B Jul 25 23:10 scripts

  ~/blockchain/fabric-samples     9e0eed19  v1.4.2 
   pwd                                                                             25.07.19    23:33:25 
/Users/maverickzhn/blockchain/fabric-samples

  ~/blockchain/fabric-samples     9e0eed19  v1.4.2 
   export PATH=/Users/maverickzhn/blockchain/fabric-samples/bin:$PATH
```

```
maverickzhn@maverickzhn-mbp ~/b/f/scripts> ./bootstrap.sh

Installing Hyperledger Fabric binaries

===> Downloading version 1.2.0 platform specific fabric binaries
===> Downloading:  https://nexus.hyperledger.org/content/repositories/releases/org/hyperledger/fabric/hyperledger-fabric/darwin-amd64-1.2.0/hyperledger-fabric-darwin-amd64-1.2.0.tar.gz
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 29.7M  100 29.7M    0     0  1279k      0  0:00:23  0:00:23 --:--:-- 1314k
==> Done.
===> Downloading version 1.2.0 platform specific fabric-ca-client binary
===> Downloading:  https://nexus.hyperledger.org/content/repositories/releases/org/hyperledger/fabric-ca/hyperledger-fabric-ca/darwin-amd64-1.2.0/hyperledger-fabric-ca-darwin-amd64-1.2.0.tar.gz
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 3864k  100 3864k    0     0   953k      0  0:00:04  0:00:04 --:--:--  953k
==> Done.

Installing Hyperledger Fabric docker images

===> Pulling fabric Images
==> FABRIC IMAGE: peer

1.2.0: Pulling from hyperledger/fabric-peer
b234f539f7a1: Pull complete
55172d420b43: Pull complete
5ba5bbeb6b91: Pull complete
43ae2841ad7a: Pull complete
f6c9c6de4190: Pull complete
c6af77e36488: Pull complete
964f7f4f22f3: Pull complete
d4a3f4cfba3d: Pull complete
73782018d902: Pull complete
039eb34e730e: Pull complete
Digest: sha256:949b38bad9496d7694b54d30b90b72653804d761a44d721c4dc7a16a5cbcabe8
Status: Downloaded newer image for hyperledger/fabric-peer:1.2.0
==> FABRIC IMAGE: orderer

1.2.0: Pulling from hyperledger/fabric-orderer
b234f539f7a1: Already exists
55172d420b43: Already exists
5ba5bbeb6b91: Already exists
43ae2841ad7a: Already exists
f6c9c6de4190: Already exists
c6af77e36488: Already exists
964f7f4f22f3: Already exists
d4a3f4cfba3d: Already exists
8d0e11f5a0f7: Pull complete
0bda0f004d88: Pull complete
Digest: sha256:a10f6d1d4cbb5a0264634c8b5ec63ff6cbbfc7c9fb369a06cc6dfe504d976259
Status: Downloaded newer image for hyperledger/fabric-orderer:1.2.0
==> FABRIC IMAGE: ccenv

1.2.0: Pulling from hyperledger/fabric-ccenv
b234f539f7a1: Already exists
55172d420b43: Already exists
5ba5bbeb6b91: Already exists
43ae2841ad7a: Already exists
f6c9c6de4190: Already exists
c6af77e36488: Already exists
964f7f4f22f3: Already exists
13cd31405e09: Pull complete
e03b35c19d96: Pull complete
96c2920985e3: Pull complete
e91461be8304: Pull complete
950c3368692b: Pull complete
c5de8d20c137: Pull complete
5536b64bc67b: Pull complete
Digest: sha256:0a7fb37111cafce79cf89ca8d1af5ca6f721e60a8bd1b2b93521e671e3348af2
Status: Downloaded newer image for hyperledger/fabric-ccenv:1.2.0
==> FABRIC IMAGE: tools

1.2.0: Pulling from hyperledger/fabric-tools
b234f539f7a1: Already exists
55172d420b43: Already exists
5ba5bbeb6b91: Already exists
43ae2841ad7a: Already exists
f6c9c6de4190: Already exists
c6af77e36488: Already exists
964f7f4f22f3: Already exists
13cd31405e09: Already exists
e03b35c19d96: Already exists
96c2920985e3: Already exists
e91461be8304: Already exists
314928def9dd: Pull complete
d5b68ae13f8d: Pull complete
dde25187799d: Pull complete
Digest: sha256:24cca44a2f2ab6325c6ccc1c91a10bd3e0e71764037a85a473f7e9621b3a0f91
Status: Downloaded newer image for hyperledger/fabric-tools:1.2.0
===> Pulling fabric ca Image
==> FABRIC CA IMAGE

1.2.0: Pulling from hyperledger/fabric-ca
b234f539f7a1: Already exists
55172d420b43: Already exists
5ba5bbeb6b91: Already exists
43ae2841ad7a: Already exists
f6c9c6de4190: Already exists
c6af77e36488: Already exists
964f7f4f22f3: Already exists
f7a6370a6f7f: Pull complete
37cc94e973b2: Pull complete
a80e45d2f608: Pull complete
8feb19f73d3a: Pull complete
5f3ea048e0c0: Pull complete
Digest: sha256:5fe6d502e52ec2a8d98ee5653e1ba31952098115fb57710ddae86f2c3cc82dad
Status: Downloaded newer image for hyperledger/fabric-ca:1.2.0
===> Pulling thirdparty docker images
==> THIRDPARTY DOCKER IMAGE: couchdb

0.4.10: Pulling from hyperledger/fabric-couchdb
b234f539f7a1: Already exists
55172d420b43: Already exists
5ba5bbeb6b91: Already exists
43ae2841ad7a: Already exists
f6c9c6de4190: Already exists
c6af77e36488: Already exists
964f7f4f22f3: Already exists
13cd31405e09: Already exists
e03b35c19d96: Already exists
96c2920985e3: Already exists
e91461be8304: Already exists
6a752ce8f7fe: Pull complete
a49e2cb854b0: Pull complete
493b25e70e6d: Pull complete
2721753a3e7c: Pull complete
adede0f2a5f1: Pull complete
9eb593f76305: Pull complete
bb49a3450e11: Pull complete
929b9bb5d788: Pull complete
Digest: sha256:c65891b6c2374a06aff61dad8cd60e1f7a8dc2b72cc9f6f5c2f853f94509c1b1
Status: Downloaded newer image for hyperledger/fabric-couchdb:0.4.10
==> THIRDPARTY DOCKER IMAGE: kafka

0.4.10: Pulling from hyperledger/fabric-kafka
b234f539f7a1: Already exists
55172d420b43: Already exists
5ba5bbeb6b91: Already exists
43ae2841ad7a: Already exists
f6c9c6de4190: Already exists
c6af77e36488: Already exists
964f7f4f22f3: Already exists
13cd31405e09: Already exists
e03b35c19d96: Already exists
96c2920985e3: Already exists
e91461be8304: Already exists
146aa6695f33: Pull complete
954e41d8cd46: Pull complete
9d750070047f: Pull complete
Digest: sha256:3b58cd0f26e7f4d8c49373d6b91e1e465a97321ce106da9c055ed452bb9d7184
Status: Downloaded newer image for hyperledger/fabric-kafka:0.4.10
==> THIRDPARTY DOCKER IMAGE: zookeeper

0.4.10: Pulling from hyperledger/fabric-zookeeper
b234f539f7a1: Already exists
55172d420b43: Already exists
5ba5bbeb6b91: Already exists
43ae2841ad7a: Already exists
f6c9c6de4190: Already exists
c6af77e36488: Already exists
964f7f4f22f3: Already exists
13cd31405e09: Already exists
e03b35c19d96: Already exists
96c2920985e3: Already exists
e91461be8304: Already exists
c335e6e59168: Pull complete
016e000b0cc8: Pull complete
e716b0c9790c: Pull complete
390f47e71470: Pull complete
Digest: sha256:151fe67421663fe860c1aba4b80877a22b6b8fa18cbc97990c309c603cd6f5f1
Status: Downloaded newer image for hyperledger/fabric-zookeeper:0.4.10

===> List out hyperledger docker images
hyperledger/fabric-ca                           1.2.0               66cc132bd09c        5 weeks ago         252MB
hyperledger/fabric-ca                           latest              66cc132bd09c        5 weeks ago         252MB
hyperledger/fabric-tools                        1.2.0               379602873003        5 weeks ago         1.51GB
hyperledger/fabric-tools                        latest              379602873003        5 weeks ago         1.51GB
hyperledger/fabric-ccenv                        1.2.0               6acf31e2d9a4        5 weeks ago         1.43GB
hyperledger/fabric-ccenv                        latest              6acf31e2d9a4        5 weeks ago         1.43GB
hyperledger/fabric-orderer                      1.2.0               4baf7789a8ec        5 weeks ago         152MB
hyperledger/fabric-orderer                      latest              4baf7789a8ec        5 weeks ago         152MB
hyperledger/fabric-peer                         1.2.0               82c262e65984        5 weeks ago         159MB
hyperledger/fabric-peer                         latest              82c262e65984        5 weeks ago         159MB
hyperledger/fabric-zookeeper                    0.4.10              2b51158f3898        6 weeks ago         1.44GB
hyperledger/fabric-zookeeper                    latest              2b51158f3898        6 weeks ago         1.44GB
hyperledger/fabric-kafka                        0.4.10              936aef6db0e6        6 weeks ago         1.45GB
hyperledger/fabric-kafka                        latest              936aef6db0e6        6 weeks ago         1.45GB
hyperledger/fabric-couchdb                      0.4.10              3092eca241fc        6 weeks ago         1.61GB
hyperledger/fabric-couchdb                      latest              3092eca241fc        6 weeks ago         1.61GB
hyperledger/fabric-ca                           x86_64-1.1.0        72617b4fa9b4        4 months ago        299MB
hyperledger/fabric-orderer                      x86_64-1.1.0        ce0c810df36a        5 months ago        180MB
hyperledger/fabric-peer                         x86_64-1.1.0        b023f9be0771        5 months ago        187MB
hyperledger/fabric-ccenv                        x86_64-1.1.0        c8b4909d8d46        5 months ago        1.39GB
hyperledger/fabric-couchdb                      x86_64-0.4.6        7e73c828fc5b        5 months ago        1.56GB
```

# Install Samples, Binaries and Docker Images
* https://hyperledger-fabric.readthedocs.io/en/release-1.2/install.html

```
  ./startFabric.sh                                                                25.07.19    23:41:08 
Stopping for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds
proceeding ...
WARNING: The BYFN_CA1_PRIVATE_KEY variable is not set. Defaulting to a blank string.
WARNING: The BYFN_CA2_PRIVATE_KEY variable is not set. Defaulting to a blank string.
Removing network net_byfn
WARNING: Network net_byfn not found.
Removing volume net_orderer.example.com
WARNING: Volume net_orderer.example.com not found.
Removing volume net_peer0.org1.example.com
WARNING: Volume net_peer0.org1.example.com not found.
Removing volume net_peer1.org1.example.com
WARNING: Volume net_peer1.org1.example.com not found.
Removing volume net_peer0.org2.example.com
WARNING: Volume net_peer0.org2.example.com not found.
Removing volume net_peer1.org2.example.com
WARNING: Volume net_peer1.org2.example.com not found.
Removing volume net_orderer2.example.com
WARNING: Volume net_orderer2.example.com not found.
Removing volume net_orderer3.example.com
WARNING: Volume net_orderer3.example.com not found.
Removing volume net_orderer4.example.com
WARNING: Volume net_orderer4.example.com not found.
Removing volume net_orderer5.example.com
WARNING: Volume net_orderer5.example.com not found.
Removing volume net_peer0.org3.example.com
WARNING: Volume net_peer0.org3.example.com not found.
Removing volume net_peer1.org3.example.com
WARNING: Volume net_peer1.org3.example.com not found.
---- No containers available for deletion ----
---- No images available for deletion ----

Starting for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds and using database 'couchdb'
proceeding ...
LOCAL_VERSION=1.4.2
DOCKER_IMAGE_VERSION=1.4.2
/Users/maverickzhn/blockchain/fabric-samples/first-network/../bin/cryptogen

##########################################################
##### Generate certificates using cryptogen tool #########
##########################################################
+ cryptogen generate --config=./crypto-config.yaml
org1.example.com
org2.example.com
+ res=0
+ set +x

/Users/maverickzhn/blockchain/fabric-samples/first-network/../bin/configtxgen
##########################################################
#########  Generating Orderer Genesis block ##############
##########################################################
CONSENSUS_TYPE=solo
+ '[' solo == solo ']'
+ configtxgen -profile TwoOrgsOrdererGenesis -channelID byfn-sys-channel -outputBlock ./channel-artifacts/genesis.block
2019-07-25 23:41:18.498 EDT [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-07-25 23:41:18.558 EDT [common.tools.configtxgen.localconfig] completeInitialization -> INFO 002 orderer type: solo
2019-07-25 23:41:18.558 EDT [common.tools.configtxgen.localconfig] Load -> INFO 003 Loaded configuration: /Users/maverickzhn/blockchain/fabric-samples/first-network/configtx.yaml
2019-07-25 23:41:18.612 EDT [common.tools.configtxgen.localconfig] completeInitialization -> INFO 004 orderer type: solo
2019-07-25 23:41:18.612 EDT [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 005 Loaded configuration: /Users/maverickzhn/blockchain/fabric-samples/first-network/configtx.yaml
2019-07-25 23:41:18.616 EDT [common.tools.configtxgen] doOutputBlock -> INFO 006 Generating genesis block
2019-07-25 23:41:18.618 EDT [common.tools.configtxgen] doOutputBlock -> INFO 007 Writing genesis block
+ res=0
+ set +x

#################################################################
### Generating channel configuration transaction 'channel.tx' ###
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID mychannel
2019-07-25 23:41:18.648 EDT [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-07-25 23:41:18.701 EDT [common.tools.configtxgen.localconfig] Load -> INFO 002 Loaded configuration: /Users/maverickzhn/blockchain/fabric-samples/first-network/configtx.yaml
2019-07-25 23:41:18.761 EDT [common.tools.configtxgen.localconfig] completeInitialization -> INFO 003 orderer type: solo
2019-07-25 23:41:18.761 EDT [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 004 Loaded configuration: /Users/maverickzhn/blockchain/fabric-samples/first-network/configtx.yaml
2019-07-25 23:41:18.761 EDT [common.tools.configtxgen] doOutputChannelCreateTx -> INFO 005 Generating new channel configtx
2019-07-25 23:41:18.765 EDT [common.tools.configtxgen] doOutputChannelCreateTx -> INFO 006 Writing new channel tx
+ res=0
+ set +x

#################################################################
#######    Generating anchor peer update for Org1MSP   ##########
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org1MSPanchors.tx -channelID mychannel -asOrg Org1MSP
2019-07-25 23:41:18.794 EDT [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-07-25 23:41:18.850 EDT [common.tools.configtxgen.localconfig] Load -> INFO 002 Loaded configuration: /Users/maverickzhn/blockchain/fabric-samples/first-network/configtx.yaml
2019-07-25 23:41:18.915 EDT [common.tools.configtxgen.localconfig] completeInitialization -> INFO 003 orderer type: solo
2019-07-25 23:41:18.915 EDT [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 004 Loaded configuration: /Users/maverickzhn/blockchain/fabric-samples/first-network/configtx.yaml
2019-07-25 23:41:18.915 EDT [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 005 Generating anchor peer update
2019-07-25 23:41:18.915 EDT [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 006 Writing anchor peer update
+ res=0
+ set +x

#################################################################
#######    Generating anchor peer update for Org2MSP   ##########
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org2MSPanchors.tx -channelID mychannel -asOrg Org2MSP
2019-07-25 23:41:18.958 EDT [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-07-25 23:41:19.017 EDT [common.tools.configtxgen.localconfig] Load -> INFO 002 Loaded configuration: /Users/maverickzhn/blockchain/fabric-samples/first-network/configtx.yaml
2019-07-25 23:41:19.072 EDT [common.tools.configtxgen.localconfig] completeInitialization -> INFO 003 orderer type: solo
2019-07-25 23:41:19.072 EDT [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 004 Loaded configuration: /Users/maverickzhn/blockchain/fabric-samples/first-network/configtx.yaml
2019-07-25 23:41:19.072 EDT [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 005 Generating anchor peer update
2019-07-25 23:41:19.072 EDT [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 006 Writing anchor peer update
+ res=0
+ set +x

Creating network "net_byfn" with the default driver
Creating volume "net_orderer.example.com" with default driver
Creating volume "net_peer0.org1.example.com" with default driver
Creating volume "net_peer1.org1.example.com" with default driver
Creating volume "net_peer0.org2.example.com" with default driver
Creating volume "net_peer1.org2.example.com" with default driver
Creating ca_peerOrg2         ... done
Creating couchdb1               ... done
Creating couchdb2            ... done
Creating ca_peerOrg1            ... done
Creating orderer.example.com    ... done
Creating couchdb3               ... done
Creating couchdb0               ... done
Creating peer0.org2.example.com ... done
Creating peer0.org1.example.com ... done
Creating peer1.org1.example.com ... done
Creating peer1.org2.example.com ... done
Creating cli                    ... done
CONTAINER ID        IMAGE                               COMMAND                  CREATED             STATUS                  PORTS                                        NAMES
d9c0c6ca3a44        hyperledger/fabric-tools:latest     "/bin/bash"              2 seconds ago       Up Less than a second                                                cli
cf326a8b9cd3        hyperledger/fabric-peer:latest      "peer node start"        3 seconds ago       Up 1 second             0.0.0.0:10051->10051/tcp                     peer1.org2.example.com
bdcdbd8af833        hyperledger/fabric-peer:latest      "peer node start"        4 seconds ago       Up 1 second             0.0.0.0:8051->8051/tcp                       peer1.org1.example.com
a4d1b9405b15        hyperledger/fabric-peer:latest      "peer node start"        4 seconds ago       Up 1 second             0.0.0.0:7051->7051/tcp                       peer0.org1.example.com
8a20860eadc8        hyperledger/fabric-peer:latest      "peer node start"        4 seconds ago       Up 2 seconds            0.0.0.0:9051->9051/tcp                       peer0.org2.example.com
a54f944d77dc        hyperledger/fabric-couchdb          "tini -- /docker-ent…"   6 seconds ago       Up 2 seconds            4369/tcp, 9100/tcp, 0.0.0.0:8984->5984/tcp   couchdb3
1a2cdc23567d        hyperledger/fabric-ca:latest        "sh -c 'fabric-ca-se…"   6 seconds ago       Up 3 seconds            0.0.0.0:7054->7054/tcp                       ca_peerOrg1
27d63d89397e        hyperledger/fabric-orderer:latest   "orderer"                6 seconds ago       Up 3 seconds            0.0.0.0:7050->7050/tcp                       orderer.example.com
e1e29281868d        hyperledger/fabric-couchdb          "tini -- /docker-ent…"   6 seconds ago       Up 3 seconds            4369/tcp, 9100/tcp, 0.0.0.0:6984->5984/tcp   couchdb1
22fc34e3cb1b        hyperledger/fabric-couchdb          "tini -- /docker-ent…"   6 seconds ago       Up 3 seconds            4369/tcp, 9100/tcp, 0.0.0.0:5984->5984/tcp   couchdb0
b1c8b26f247f        hyperledger/fabric-couchdb          "tini -- /docker-ent…"   6 seconds ago       Up 3 seconds            4369/tcp, 9100/tcp, 0.0.0.0:7984->5984/tcp   couchdb2
9d7c697d2b79        hyperledger/fabric-ca:latest        "sh -c 'fabric-ca-se…"   6 seconds ago       Up 4 seconds            7054/tcp, 0.0.0.0:8054->8054/tcp             ca_peerOrg2

 ____    _____      _      ____    _____
/ ___|  |_   _|    / \    |  _ \  |_   _|
\___ \    | |     / _ \   | |_) |   | |
 ___) |   | |    / ___ \  |  _ <    | |
|____/    |_|   /_/   \_\ |_| \_\   |_|

Build your first network (BYFN) end-to-end test

Channel name : mychannel
Creating channel...
+ peer channel create -o orderer.example.com:7050 -c mychannel -f ./channel-artifacts/channel.tx --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
+ res=0
+ set +x
2019-07-26 03:41:26.402 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-07-26 03:41:26.532 UTC [cli.common] readBlock -> INFO 002 Received block: 0
===================== Channel 'mychannel' created =====================

Having all peers join the channel...
+ peer channel join -b mychannel.block
+ res=1
+ set +x
Error: error getting endorser client for channel: endorser client failed to connect to peer0.org1.example.com:7051: failed to create new connection: connection error: desc = "transport: error while dialing: dial tcp 172.18.0.10:7051: connect: connection refused"
peer0.org1 failed to join the channel, Retry after 3 seconds
+ peer channel join -b mychannel.block
+ res=0
+ set +x
2019-07-26 03:41:29.906 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-07-26 03:41:30.143 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer0.org1 joined channel 'mychannel' =====================

+ peer channel join -b mychannel.block
+ res=0
+ set +x
2019-07-26 03:41:33.284 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-07-26 03:41:33.599 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer1.org1 joined channel 'mychannel' =====================

+ peer channel join -b mychannel.block
+ res=0
+ set +x
2019-07-26 03:41:36.718 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-07-26 03:41:36.878 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer0.org2 joined channel 'mychannel' =====================

+ peer channel join -b mychannel.block
+ res=0
+ set +x
2019-07-26 03:41:39.977 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-07-26 03:41:40.151 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer1.org2 joined channel 'mychannel' =====================

Updating anchor peers for org1...
+ peer channel update -o orderer.example.com:7050 -c mychannel -f ./channel-artifacts/Org1MSPanchors.tx --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
+ res=0
+ set +x
2019-07-26 03:41:43.261 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-07-26 03:41:43.285 UTC [channelCmd] update -> INFO 002 Successfully submitted channel update
===================== Anchor peers updated for org 'Org1MSP' on channel 'mychannel' =====================

Updating anchor peers for org2...
+ peer channel update -o orderer.example.com:7050 -c mychannel -f ./channel-artifacts/Org2MSPanchors.tx --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
+ res=0
+ set +x
2019-07-26 03:41:46.398 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2019-07-26 03:41:46.388 UTC [channelCmd] update -> INFO 002 Successfully submitted channel update
===================== Anchor peers updated for org 'Org2MSP' on channel 'mychannel' =====================


========= All GOOD, BYFN execution completed ===========


 _____   _   _   ____
| ____| | \ | | |  _ \
|  _|   |  \| | | | | |
| |___  | |\  | | |_| |
|_____| |_| \_| |____/

+ echo 'Installing smart contract on peer0.org1.example.com'
Installing smart contract on peer0.org1.example.com
+ docker exec -e CORE_PEER_LOCALMSPID=Org1MSP -e CORE_PEER_ADDRESS=peer0.org1.example.com:7051 -e CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp -e CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt cli peer chaincode install -n fabcar -v 1.0 -p github.com/chaincode/fabcar/go -l golang
2019-07-26 03:41:49.680 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2019-07-26 03:41:49.681 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
2019-07-26 03:41:50.399 UTC [chaincodeCmd] install -> INFO 003 Installed remotely response:<status:200 payload:"OK" >
+ echo 'Installing smart contract on peer1.org1.example.com'
Installing smart contract on peer1.org1.example.com
+ docker exec -e CORE_PEER_LOCALMSPID=Org1MSP -e CORE_PEER_ADDRESS=peer1.org1.example.com:8051 -e CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp -e CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt cli peer chaincode install -n fabcar -v 1.0 -p github.com/chaincode/fabcar/go -l golang
2019-07-26 03:41:50.656 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2019-07-26 03:41:50.656 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
2019-07-26 03:41:51.030 UTC [chaincodeCmd] install -> INFO 003 Installed remotely response:<status:200 payload:"OK" >
+ echo 'Installing smart contract on peer0.org2.example.com'
Installing smart contract on peer0.org2.example.com
+ docker exec -e CORE_PEER_LOCALMSPID=Org2MSP -e CORE_PEER_ADDRESS=peer0.org2.example.com:9051 -e CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp -e CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt cli peer chaincode install -n fabcar -v 1.0 -p github.com/chaincode/fabcar/go -l golang
2019-07-26 03:41:51.288 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2019-07-26 03:41:51.288 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
2019-07-26 03:41:51.562 UTC [chaincodeCmd] install -> INFO 003 Installed remotely response:<status:200 payload:"OK" >
+ echo 'Installing smart contract on peer1.org2.example.com'
Installing smart contract on peer1.org2.example.com
+ docker exec -e CORE_PEER_LOCALMSPID=Org2MSP -e CORE_PEER_ADDRESS=peer1.org2.example.com:10051 -e CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp -e CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt cli peer chaincode install -n fabcar -v 1.0 -p github.com/chaincode/fabcar/go -l golang
2019-07-26 03:41:51.819 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2019-07-26 03:41:51.819 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
2019-07-26 03:41:52.090 UTC [chaincodeCmd] install -> INFO 003 Installed remotely response:<status:200 payload:"OK" >
+ echo 'Instantiating smart contract on mychannel'
Instantiating smart contract on mychannel
+ docker exec -e CORE_PEER_LOCALMSPID=Org1MSP -e CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp cli peer chaincode instantiate -o orderer.example.com:7050 -C mychannel -n fabcar -l golang -v 1.0 -c '{"Args":[]}' -P 'AND('\''Org1MSP.member'\'','\''Org2MSP.member'\'')' --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem --peerAddresses peer0.org1.example.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
2019-07-26 03:41:52.373 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2019-07-26 03:41:52.373 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
+ echo 'Waiting for instantiation request to be committed ...'
Waiting for instantiation request to be committed ...
+ sleep 10
+ echo 'Submitting initLedger transaction to smart contract on mychannel'
Submitting initLedger transaction to smart contract on mychannel
+ echo 'The transaction is sent to all of the peers so that chaincode is built before receiving the following requests'
The transaction is sent to all of the peers so that chaincode is built before receiving the following requests
+ docker exec -e CORE_PEER_LOCALMSPID=Org1MSP -e CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp cli peer chaincode invoke -o orderer.example.com:7050 -C mychannel -n fabcar -c '{"function":"initLedger","Args":[]}' --waitForEvent --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem --peerAddresses peer0.org1.example.com:7051 --peerAddresses peer1.org1.example.com:8051 --peerAddresses peer0.org2.example.com:9051 --peerAddresses peer1.org2.example.com:10051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt
2019-07-26 03:43:30.456 UTC [chaincodeCmd] ClientWait -> INFO 001 txid [4c699cb74365b59b6073ee5eb0f141d5ad0a44acb6d3e74b7e4347cfb29f9c69] committed with status (VALID) at peer1.org1.example.com:8051
2019-07-26 03:43:30.484 UTC [chaincodeCmd] ClientWait -> INFO 002 txid [4c699cb74365b59b6073ee5eb0f141d5ad0a44acb6d3e74b7e4347cfb29f9c69] committed with status (VALID) at peer1.org2.example.com:10051
2019-07-26 03:43:30.501 UTC [chaincodeCmd] ClientWait -> INFO 003 txid [4c699cb74365b59b6073ee5eb0f141d5ad0a44acb6d3e74b7e4347cfb29f9c69] committed with status (VALID) at peer0.org2.example.com:9051
2019-07-26 03:43:30.512 UTC [chaincodeCmd] ClientWait -> INFO 004 txid [4c699cb74365b59b6073ee5eb0f141d5ad0a44acb6d3e74b7e4347cfb29f9c69] committed with status (VALID) at peer0.org1.example.com:7051
2019-07-26 03:43:30.513 UTC [chaincodeCmd] chaincodeInvokeOrQuery -> INFO 005 Chaincode invoke successful. result: status:200
+ set +x

Total setup execution time : 137 secs ...

Next, use the FabCar applications to interact with the deployed FabCar contract.
The FabCar applications are available in multiple programming languages.
Follow the instructions for the programming language of your choice:

JavaScript:

  Start by changing into the "javascript" directory:
    cd javascript

  Next, install all required packages:
    npm install

  Then run the following applications to enroll the admin user, and register a new user
  called user1 which will be used by the other applications to interact with the deployed
  FabCar contract:
    node enrollAdmin
    node registerUser

  You can run the invoke application as follows. By default, the invoke application will
  create a new car, but you can update the application to submit other transactions:
    node invoke

  You can run the query application as follows. By default, the query application will
  return all cars, but you can update the application to evaluate other transactions:
    node query

TypeScript:

  Start by changing into the "typescript" directory:
    cd typescript

  Next, install all required packages:
    npm install

  Next, compile the TypeScript code into JavaScript:
    npm run build

  Then run the following applications to enroll the admin user, and register a new user
  called user1 which will be used by the other applications to interact with the deployed
  FabCar contract:
    node dist/enrollAdmin
    node dist/registerUser

  You can run the invoke application as follows. By default, the invoke application will
  create a new car, but you can update the application to submit other transactions:
    node dist/invoke

  You can run the query application as follows. By default, the query application will
  return all cars, but you can update the application to evaluate other transactions:
    node dist/query


  ~/blockchain/fabric-samples/fabcar     9e0eed19  v1.4.2 
```


```
maverickzhn@maverickzhn-mbp ~/b/fabric-samples> curl -sSL http://bit.ly/2ysbOFE | bash -s 1.2.0
bash: line 181: [: too many arguments

Installing hyperledger/fabric-samples repo

===> Checking out v1.2.0 branch of hyperledger/fabric-samples
Note: checking out 'v1.2.0'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch-name>

HEAD is now at ed81d7b [FAB-10811] fabric-ca sample is broken on v1.2

Installing Hyperledger Fabric binaries

===> Downloading version 1.2.0 platform specific fabric binaries
===> Downloading:  https://nexus.hyperledger.org/content/repositories/releases/org/hyperledger/fabric/hyperledger-fabric/darwin-amd64-1.2.0/hyperledger-fabric-darwin-amd64-1.2.0.tar.gz
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 29.7M  100 29.7M    0     0   960k      0  0:00:31  0:00:31 --:--:-- 1484k
==> Done.
===> Downloading version 1.2.0 platform specific fabric-ca-client binary
===> Downloading:  https://nexus.hyperledger.org/content/repositories/releases/org/hyperledger/fabric-ca/hyperledger-fabric-ca/darwin-amd64-1.2.0/hyperledger-fabric-ca-darwin-amd64-1.2.0.tar.gz
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 3864k  100 3864k    0     0   636k      0  0:00:06  0:00:06 --:--:--  779k
==> Done.

Installing Hyperledger Fabric docker images

===> Pulling fabric Images
==> FABRIC IMAGE: peer

1.2.0: Pulling from hyperledger/fabric-peer
Digest: sha256:949b38bad9496d7694b54d30b90b72653804d761a44d721c4dc7a16a5cbcabe8
Status: Image is up to date for hyperledger/fabric-peer:1.2.0
==> FABRIC IMAGE: orderer

1.2.0: Pulling from hyperledger/fabric-orderer
Digest: sha256:a10f6d1d4cbb5a0264634c8b5ec63ff6cbbfc7c9fb369a06cc6dfe504d976259
Status: Image is up to date for hyperledger/fabric-orderer:1.2.0
==> FABRIC IMAGE: ccenv

1.2.0: Pulling from hyperledger/fabric-ccenv
Digest: sha256:0a7fb37111cafce79cf89ca8d1af5ca6f721e60a8bd1b2b93521e671e3348af2
Status: Image is up to date for hyperledger/fabric-ccenv:1.2.0
==> FABRIC IMAGE: tools

1.2.0: Pulling from hyperledger/fabric-tools
Digest: sha256:24cca44a2f2ab6325c6ccc1c91a10bd3e0e71764037a85a473f7e9621b3a0f91
Status: Image is up to date for hyperledger/fabric-tools:1.2.0
===> Pulling fabric ca Image
==> FABRIC CA IMAGE

1.2.0: Pulling from hyperledger/fabric-ca
Digest: sha256:5fe6d502e52ec2a8d98ee5653e1ba31952098115fb57710ddae86f2c3cc82dad
Status: Image is up to date for hyperledger/fabric-ca:1.2.0
===> Pulling thirdparty docker images
==> THIRDPARTY DOCKER IMAGE: couchdb

0.4.10: Pulling from hyperledger/fabric-couchdb
Digest: sha256:c65891b6c2374a06aff61dad8cd60e1f7a8dc2b72cc9f6f5c2f853f94509c1b1
Status: Image is up to date for hyperledger/fabric-couchdb:0.4.10
==> THIRDPARTY DOCKER IMAGE: kafka

0.4.10: Pulling from hyperledger/fabric-kafka
Digest: sha256:3b58cd0f26e7f4d8c49373d6b91e1e465a97321ce106da9c055ed452bb9d7184
Status: Image is up to date for hyperledger/fabric-kafka:0.4.10
==> THIRDPARTY DOCKER IMAGE: zookeeper

0.4.10: Pulling from hyperledger/fabric-zookeeper
Digest: sha256:151fe67421663fe860c1aba4b80877a22b6b8fa18cbc97990c309c603cd6f5f1
Status: Image is up to date for hyperledger/fabric-zookeeper:0.4.10

===> List out hyperledger docker images
hyperledger/fabric-ca                           1.2.0               66cc132bd09c        5 weeks ago         252MB
hyperledger/fabric-ca                           latest              66cc132bd09c        5 weeks ago         252MB
hyperledger/fabric-tools                        1.2.0               379602873003        5 weeks ago         1.51GB
hyperledger/fabric-tools                        latest              379602873003        5 weeks ago         1.51GB
hyperledger/fabric-ccenv                        1.2.0               6acf31e2d9a4        5 weeks ago         1.43GB
hyperledger/fabric-ccenv                        latest              6acf31e2d9a4        5 weeks ago         1.43GB
hyperledger/fabric-orderer                      1.2.0               4baf7789a8ec        5 weeks ago         152MB
hyperledger/fabric-orderer                      latest              4baf7789a8ec        5 weeks ago         152MB
hyperledger/fabric-peer                         1.2.0               82c262e65984        5 weeks ago         159MB
hyperledger/fabric-peer                         latest              82c262e65984        5 weeks ago         159MB
hyperledger/fabric-zookeeper                    0.4.10              2b51158f3898        6 weeks ago         1.44GB
hyperledger/fabric-zookeeper                    latest              2b51158f3898        6 weeks ago         1.44GB
hyperledger/fabric-kafka                        0.4.10              936aef6db0e6        6 weeks ago         1.45GB
hyperledger/fabric-kafka                        latest              936aef6db0e6        6 weeks ago         1.45GB
hyperledger/fabric-couchdb                      0.4.10              3092eca241fc        6 weeks ago         1.61GB
hyperledger/fabric-couchdb                      latest              3092eca241fc        6 weeks ago         1.61GB
hyperledger/fabric-ca                           x86_64-1.1.0        72617b4fa9b4        4 months ago        299MB
hyperledger/fabric-orderer                      x86_64-1.1.0        ce0c810df36a        5 months ago        180MB
hyperledger/fabric-peer                         x86_64-1.1.0        b023f9be0771        5 months ago        187MB
hyperledger/fabric-ccenv                        x86_64-1.1.0        c8b4909d8d46        5 months ago        1.39GB
hyperledger/fabric-couchdb                      x86_64-0.4.6        7e73c828fc5b        5 months ago        1.56GB
```

# Exporting path

```
maverickzhn@maverickzhn-mbp ~/b/fabric-samples> export PATH=path_/bin:$PATH
maverickzhn@maverickzhn-mbp ~/b/fabric-samples> echo $PATH
maverickzhn@maverickzhn-mbp ~/b/fabric-samples>
```

## Building your first netwrok:
* https://hyperledger-fabric.readthedocs.io/en/release-1.2/build_network.html


### Generating Certificates and channels:

```
maverickzhn@maverickzhn-mbp ~/b/f/first-network> ./byfn.sh
Usage:
  byfn.sh <mode> [-c <channel name>] [-t <timeout>] [-d <delay>] [-f <docker-compose-file>] [-s <dbtype>] [-l <language>] [-i <imagetag>] [-v]
    <mode> - one of 'up', 'down', 'restart', 'generate' or 'upgrade'
      - 'up' - bring up the network with docker-compose up
      - 'down' - clear the network with docker-compose down
      - 'restart' - restart the network
      - 'generate' - generate required certificates and genesis block
      - 'upgrade'  - upgrade the network from version 1.1.x to 1.2.x
    -c <channel name> - channel name to use (defaults to "mychannel")
    -t <timeout> - CLI timeout duration in seconds (defaults to 10)
    -d <delay> - delay duration in seconds (defaults to 3)
    -f <docker-compose-file> - specify which docker-compose file use (defaults to docker-compose-cli.yaml)
    -s <dbtype> - the database backend to use: goleveldb (default) or couchdb
    -l <language> - the chaincode language: golang (default) or node
    -i <imagetag> - the tag to be used to launch the network (defaults to "latest")
    -v - verbose mode
  byfn.sh -h (print this message)

Typically, one would first generate the required certificates and
genesis block, then bring up the network. e.g.:

	byfn.sh generate -c mychannel
	byfn.sh up -c mychannel -s couchdb
        byfn.sh up -c mychannel -s couchdb -i 1.2.x
	byfn.sh up -l node
	byfn.sh down -c mychannel
        byfn.sh upgrade -c mychannel

Taking all defaults:
	byfn.sh generate
	byfn.sh up
	byfn.sh down
maverickzhn@maverickzhn-mbp ~/b/f/first-network> ./byfn.sh generate -c mychannel
Generating certs and genesis block for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds
Continue? [Y/n] y
proceeding ...
/Users/maverickzhn/blockchain/fabric-samples/first-network/../bin/cryptogen

##########################################################
##### Generate certificates using cryptogen tool #########
##########################################################
+ cryptogen generate --config=./crypto-config.yaml
org1.example.com
org2.example.com
+ res=0
+ set +x

/Users/maverickzhn/blockchain/fabric-samples/first-network/../bin/configtxgen
##########################################################
#########  Generating Orderer Genesis block ##############
##########################################################
+ configtxgen -profile TwoOrgsOrdererGenesis -outputBlock ./channel-artifacts/genesis.block
2018-08-12 18:34:25.502 EDT [common/tools/configtxgen] main -> WARN 001 Omitting the channel ID for configtxgen is deprecated.  Explicitly passing the channel ID will be required in the future, defaulting to 'testchainid'.
2018-08-12 18:34:25.502 EDT [common/tools/configtxgen] main -> INFO 002 Loading configuration
2018-08-12 18:34:25.512 EDT [common/tools/configtxgen/encoder] NewChannelGroup -> WARN 003 Default policy emission is deprecated, please include policy specificiations for the channel group in configtx.yaml
2018-08-12 18:34:25.512 EDT [common/tools/configtxgen/encoder] NewOrdererGroup -> WARN 004 Default policy emission is deprecated, please include policy specificiations for the orderer group in configtx.yaml
2018-08-12 18:34:25.513 EDT [common/tools/configtxgen/encoder] NewOrdererOrgGroup -> WARN 005 Default policy emission is deprecated, please include policy specificiations for the orderer org group OrdererOrg in configtx.yaml
2018-08-12 18:34:25.513 EDT [msp] getMspConfig -> INFO 006 Loading NodeOUs
2018-08-12 18:34:25.513 EDT [common/tools/configtxgen/encoder] NewOrdererOrgGroup -> WARN 007 Default policy emission is deprecated, please include policy specificiations for the orderer org group Org1MSP in configtx.yaml
2018-08-12 18:34:25.514 EDT [msp] getMspConfig -> INFO 008 Loading NodeOUs
2018-08-12 18:34:25.514 EDT [common/tools/configtxgen/encoder] NewOrdererOrgGroup -> WARN 009 Default policy emission is deprecated, please include policy specificiations for the orderer org group Org2MSP in configtx.yaml
2018-08-12 18:34:25.514 EDT [common/tools/configtxgen] doOutputBlock -> INFO 00a Generating genesis block
2018-08-12 18:34:25.515 EDT [common/tools/configtxgen] doOutputBlock -> INFO 00b Writing genesis block
+ res=0
+ set +x

#################################################################
### Generating channel configuration transaction 'channel.tx' ###
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID mychannel
2018-08-12 18:34:25.546 EDT [common/tools/configtxgen] main -> INFO 001 Loading configuration
2018-08-12 18:34:25.552 EDT [common/tools/configtxgen] doOutputChannelCreateTx -> INFO 002 Generating new channel configtx
2018-08-12 18:34:25.552 EDT [common/tools/configtxgen/encoder] NewApplicationGroup -> WARN 003 Default policy emission is deprecated, please include policy specificiations for the application group in configtx.yaml
2018-08-12 18:34:25.552 EDT [msp] getMspConfig -> INFO 004 Loading NodeOUs
2018-08-12 18:34:25.552 EDT [common/tools/configtxgen/encoder] NewApplicationOrgGroup -> WARN 005 Default policy emission is deprecated, please include policy specificiations for the application org group Org1MSP in configtx.yaml
2018-08-12 18:34:25.553 EDT [msp] getMspConfig -> INFO 006 Loading NodeOUs
2018-08-12 18:34:25.553 EDT [common/tools/configtxgen/encoder] NewApplicationOrgGroup -> WARN 007 Default policy emission is deprecated, please include policy specificiations for the application org group Org2MSP in configtx.yaml
2018-08-12 18:34:25.554 EDT [common/tools/configtxgen] doOutputChannelCreateTx -> INFO 008 Writing new channel tx
+ res=0
+ set +x

#################################################################
#######    Generating anchor peer update for Org1MSP   ##########
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org1MSPanchors.tx -channelID mychannel -asOrg Org1MSP
2018-08-12 18:34:25.584 EDT [common/tools/configtxgen] main -> INFO 001 Loading configuration
2018-08-12 18:34:25.590 EDT [common/tools/configtxgen] doOutputAnchorPeersUpdate -> INFO 002 Generating anchor peer update
2018-08-12 18:34:25.590 EDT [common/tools/configtxgen] doOutputAnchorPeersUpdate -> INFO 003 Writing anchor peer update
+ res=0
+ set +x

#################################################################
#######    Generating anchor peer update for Org2MSP   ##########
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org2MSPanchors.tx -channelID mychannel -asOrg Org2MSP
2018-08-12 18:34:25.622 EDT [common/tools/configtxgen] main -> INFO 001 Loading configuration
2018-08-12 18:34:25.627 EDT [common/tools/configtxgen] doOutputAnchorPeersUpdate -> INFO 002 Generating anchor peer update
2018-08-12 18:34:25.627 EDT [common/tools/configtxgen] doOutputAnchorPeersUpdate -> INFO 003 Writing anchor peer update
+ res=0
+ set +x
```

### CounchDB
```
maverickzhn@maverickzhn-mbp ~/b/f/first-network> ./byfn.sh up -c mychannel -s couchdb

Starting for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds and using database 'couchdb'
Continue? [Y/n] y
proceeding ...
LOCAL_VERSION=1.2.0
DOCKER_IMAGE_VERSION=1.2.0
Creating network "net_byfn" with the default driver
Creating volume "net_orderer.example.com" with default driver
Creating volume "net_peer0.org1.example.com" with default driver
Creating volume "net_peer1.org1.example.com" with default driver
Creating volume "net_peer0.org2.example.com" with default driver
Creating volume "net_peer1.org2.example.com" with default driver
Creating couchdb1            ... done
Creating orderer.example.com    ... done
Creating couchdb0               ... done
Creating couchdb2               ... done
Creating couchdb3               ... done
Creating peer1.org1.example.com ... done
Creating peer0.org1.example.com ... done
Creating peer0.org2.example.com ... done
Creating peer1.org2.example.com ... done
Creating cli                    ... done

 ____    _____      _      ____    _____
/ ___|  |_   _|    / \    |  _ \  |_   _|
\___ \    | |     / _ \   | |_) |   | |
 ___) |   | |    / ___ \  |  _ <    | |
|____/    |_|   /_/   \_\ |_| \_\   |_|

Build your first network (BYFN) end-to-end test

Channel name : mychannel
Creating channel...
+ peer channel create -o orderer.example.com:7050 -c mychannel -f ./channel-artifacts/channel.tx --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
+ res=0
+ set +x
2018-08-12 22:36:04.120 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2018-08-12 22:36:04.176 UTC [cli/common] readBlock -> INFO 002 Got status: &{NOT_FOUND}
2018-08-12 22:36:04.193 UTC [channelCmd] InitCmdFactory -> INFO 003 Endorser and orderer connections initialized
2018-08-12 22:36:04.398 UTC [cli/common] readBlock -> INFO 004 Received block: 0
===================== Channel 'mychannel' created =====================

Having all peers join the channel...
+ peer channel join -b mychannel.block
+ res=1
+ set +x
Error: error getting endorser client for channel: endorser client failed to connect to peer0.org1.example.com:7051: failed to create new connection: context deadline exceeded
peer0.org1 failed to join the channel, Retry after 3 seconds
+ peer channel join -b mychannel.block
+ res=0
+ set +x
2018-08-12 22:36:10.745 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2018-08-12 22:36:10.886 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer0.org1 joined channel 'mychannel' =====================

+ peer channel join -b mychannel.block
+ res=0
+ set +x
2018-08-12 22:36:14.003 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2018-08-12 22:36:14.137 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer1.org1 joined channel 'mychannel' =====================

+ peer channel join -b mychannel.block
+ res=0
+ set +x
2018-08-12 22:36:17.240 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2018-08-12 22:36:17.361 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer0.org2 joined channel 'mychannel' =====================

+ peer channel join -b mychannel.block
+ res=0
+ set +x
2018-08-12 22:36:20.440 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2018-08-12 22:36:20.587 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
===================== peer1.org2 joined channel 'mychannel' =====================

Updating anchor peers for org1...
+ peer channel update -o orderer.example.com:7050 -c mychannel -f ./channel-artifacts/Org1MSPanchors.tx --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
+ res=0
+ set +x
2018-08-12 22:36:23.719 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2018-08-12 22:36:23.740 UTC [channelCmd] update -> INFO 002 Successfully submitted channel update
===================== Anchor peers updated for org 'Org1MSP' on channel 'mychannel' =====================

Updating anchor peers for org2...
+ peer channel update -o orderer.example.com:7050 -c mychannel -f ./channel-artifacts/Org2MSPanchors.tx --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
+ res=0
+ set +x
2018-08-12 22:36:26.858 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2018-08-12 22:36:26.883 UTC [channelCmd] update -> INFO 002 Successfully submitted channel update
===================== Anchor peers updated for org 'Org2MSP' on channel 'mychannel' =====================

Installing chaincode on peer0.org1...
+ peer chaincode install -n mycc -v 1.0 -l golang -p github.com/chaincode/chaincode_example02/go/
+ res=0
+ set +x
2018-08-12 22:36:30.002 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2018-08-12 22:36:30.002 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
2018-08-12 22:36:30.605 UTC [chaincodeCmd] install -> INFO 003 Installed remotely response:<status:200 payload:"OK" >
===================== Chaincode is installed on peer0.org1 =====================

Install chaincode on peer0.org2...
+ peer chaincode install -n mycc -v 1.0 -l golang -p github.com/chaincode/chaincode_example02/go/
+ res=0
+ set +x
2018-08-12 22:36:30.727 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2018-08-12 22:36:30.727 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
2018-08-12 22:36:31.027 UTC [chaincodeCmd] install -> INFO 003 Installed remotely response:<status:200 payload:"OK" >
===================== Chaincode is installed on peer0.org2 =====================

Instantiating chaincode on peer0.org2...
+ peer chaincode instantiate -o orderer.example.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem -C mychannel -n mycc -l golang -v 1.0 -c '{"Args":["init","a","100","b","200"]}' -P 'AND ('\''Org1MSP.peer'\'','\''Org2MSP.peer'\'')'
+ res=0
+ set +x
2018-08-12 22:36:31.158 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2018-08-12 22:36:31.158 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
===================== Chaincode is instantiated on peer0.org2 on channel 'mychannel' =====================

Querying chaincode on peer0.org1...
===================== Querying on peer0.org1 on channel 'mychannel'... =====================
+ peer chaincode query -C mychannel -n mycc -c '{"Args":["query","a"]}'
Attempting to Query peer0.org1 ...3 secs

100
===================== Query successful on peer0.org1 on channel 'mychannel' =====================
Sending invoke transaction on peer0.org1 peer0.org2...
+ peer chaincode invoke -o orderer.example.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem -C mychannel -n mycc --peerAddresses peer0.org1.example.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt --peerAddresses peer0.org2.example.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt -c '{"Args":["invoke","a","b","10"]}'
+ res=0
+ set +x
2018-08-12 22:37:16.608 UTC [chaincodeCmd] chaincodeInvokeOrQuery -> INFO 001 Chaincode invoke successful. result: status:200
===================== Invoke transaction successful on peer0.org1 peer0.org2 on channel 'mychannel' =====================

Installing chaincode on peer1.org2...
+ peer chaincode install -n mycc -v 1.0 -l golang -p github.com/chaincode/chaincode_example02/go/
+ res=0
+ set +x
2018-08-12 22:37:16.728 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2018-08-12 22:37:16.728 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
2018-08-12 22:37:17.236 UTC [chaincodeCmd] install -> INFO 003 Installed remotely response:<status:200 payload:"OK" >
===================== Chaincode is installed on peer1.org2 =====================

Querying chaincode on peer1.org2...
===================== Querying on peer1.org2 on channel 'mychannel'... =====================
+ peer chaincode query -C mychannel -n mycc -c '{"Args":["query","a"]}'
Attempting to Query peer1.org2 ...3 secs

90
===================== Query successful on peer1.org2 on channel 'mychannel' =====================

========= All GOOD, BYFN execution completed ===========


 _____   _   _   ____
| ____| | \ | | |  _ \
|  _|   |  \| | | | | |
| |___  | |\  | | |_| |
|_____| |_| \_| |____/
```

### Generate Network Artifacts

```
maverickzhn@maverickzhn-mbp ~/b/fabric-samples> cd first-network/
maverickzhn@maverickzhn-mbp ~/b/f/first-network> ./byfn.sh generate
Generating certs and genesis block for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds
Continue? [Y/n] y
proceeding ...
/Users/maverickzhn/blockchain/fabric-samples/first-network/../bin/cryptogen

##########################################################
##### Generate certificates using cryptogen tool #########
##########################################################
+ cryptogen generate --config=./crypto-config.yaml
org1.example.com
org2.example.com
+ res=0
+ set +x

/Users/maverickzhn/blockchain/fabric-samples/first-network/../bin/configtxgen
##########################################################
#########  Generating Orderer Genesis block ##############
##########################################################
+ configtxgen -profile TwoOrgsOrdererGenesis -outputBlock ./channel-artifacts/genesis.block
2018-08-12 20:00:34.397 EDT [common/tools/configtxgen] main -> WARN 001 Omitting the channel ID for configtxgen is deprecated.  Explicitly passing the channel ID will be required in the future, defaulting to 'testchainid'.
2018-08-12 20:00:34.397 EDT [common/tools/configtxgen] main -> INFO 002 Loading configuration
2018-08-12 20:00:34.406 EDT [common/tools/configtxgen/encoder] NewChannelGroup -> WARN 003 Default policy emission is deprecated, please include policy specificiations for the channel group in configtx.yaml
2018-08-12 20:00:34.406 EDT [common/tools/configtxgen/encoder] NewOrdererGroup -> WARN 004 Default policy emission is deprecated, please include policy specificiations for the orderer group in configtx.yaml
2018-08-12 20:00:34.406 EDT [common/tools/configtxgen/encoder] NewOrdererOrgGroup -> WARN 005 Default policy emission is deprecated, please include policy specificiations for the orderer org group OrdererOrg in configtx.yaml
2018-08-12 20:00:34.406 EDT [msp] getMspConfig -> INFO 006 Loading NodeOUs
2018-08-12 20:00:34.408 EDT [common/tools/configtxgen/encoder] NewOrdererOrgGroup -> WARN 007 Default policy emission is deprecated, please include policy specificiations for the orderer org group Org1MSP in configtx.yaml
2018-08-12 20:00:34.408 EDT [msp] getMspConfig -> INFO 008 Loading NodeOUs
2018-08-12 20:00:34.408 EDT [common/tools/configtxgen/encoder] NewOrdererOrgGroup -> WARN 009 Default policy emission is deprecated, please include policy specificiations for the orderer org group Org2MSP in configtx.yaml
2018-08-12 20:00:34.408 EDT [common/tools/configtxgen] doOutputBlock -> INFO 00a Generating genesis block
2018-08-12 20:00:34.409 EDT [common/tools/configtxgen] doOutputBlock -> INFO 00b Writing genesis block
+ res=0
+ set +x

#################################################################
### Generating channel configuration transaction 'channel.tx' ###
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID mychannel
2018-08-12 20:00:34.441 EDT [common/tools/configtxgen] main -> INFO 001 Loading configuration
2018-08-12 20:00:34.448 EDT [common/tools/configtxgen] doOutputChannelCreateTx -> INFO 002 Generating new channel configtx
2018-08-12 20:00:34.448 EDT [common/tools/configtxgen/encoder] NewApplicationGroup -> WARN 003 Default policy emission is deprecated, please include policy specificiations for the application group in configtx.yaml
2018-08-12 20:00:34.448 EDT [msp] getMspConfig -> INFO 004 Loading NodeOUs
2018-08-12 20:00:34.448 EDT [common/tools/configtxgen/encoder] NewApplicationOrgGroup -> WARN 005 Default policy emission is deprecated, please include policy specificiations for the application org group Org1MSP in configtx.yaml
2018-08-12 20:00:34.448 EDT [msp] getMspConfig -> INFO 006 Loading NodeOUs
2018-08-12 20:00:34.449 EDT [common/tools/configtxgen/encoder] NewApplicationOrgGroup -> WARN 007 Default policy emission is deprecated, please include policy specificiations for the application org group Org2MSP in configtx.yaml
2018-08-12 20:00:34.449 EDT [common/tools/configtxgen] doOutputChannelCreateTx -> INFO 008 Writing new channel tx
+ res=0
+ set +x

#################################################################
#######    Generating anchor peer update for Org1MSP   ##########
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org1MSPanchors.tx -channelID mychannel -asOrg Org1MSP
2018-08-12 20:00:34.479 EDT [common/tools/configtxgen] main -> INFO 001 Loading configuration
2018-08-12 20:00:34.484 EDT [common/tools/configtxgen] doOutputAnchorPeersUpdate -> INFO 002 Generating anchor peer update
2018-08-12 20:00:34.484 EDT [common/tools/configtxgen] doOutputAnchorPeersUpdate -> INFO 003 Writing anchor peer update
+ res=0
+ set +x

#################################################################
#######    Generating anchor peer update for Org2MSP   ##########
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org2MSPanchors.tx -channelID mychannel -asOrg Org2MSP
2018-08-12 20:00:34.514 EDT [common/tools/configtxgen] main -> INFO 001 Loading configuration
2018-08-12 20:00:34.519 EDT [common/tools/configtxgen] doOutputAnchorPeersUpdate -> INFO 002 Generating anchor peer update
2018-08-12 20:00:34.520 EDT [common/tools/configtxgen] doOutputAnchorPeersUpdate -> INFO 003 Writing anchor peer update
+ res=0
+ set +x

```

### Bring up the network

```
./byfn.sh up
```

# Run the tools

## Manual Configuration with 2 networks
```
maverickzhn@maverickzhn-mbp ~/b/f/first-network> ../bin/cryptogen generate --config=./crypto-config.yaml
org1.example.com
org2.example.com
maverickzhn@maverickzhn-mbp ~/b/f/first-network> export FABRIC_CFG_PATH=$PWD
```
### Manually generating certificates

```
maverickzhn@maverickzhn-mbp ~/b/f/first-network>
../bin/configtxgen -profile TwoOrgsOrdererGenesis -outputBlock ./channel-artifacts/genesis.block
2018-08-13 13:44:19.978 EDT [common/tools/configtxgen] main -> WARN 001 Omitting the channel ID for configtxgen is deprecated.  Explicitly passing the channel ID will be required in the future, defaulting to 'testchainid'.
2018-08-13 13:44:19.978 EDT [common/tools/configtxgen] main -> INFO 002 Loading configuration
2018-08-13 13:44:19.987 EDT [common/tools/configtxgen/encoder] NewChannelGroup -> WARN 003 Default policy emission is deprecated, please include policy specificiations for the channel group in configtx.yaml
2018-08-13 13:44:19.987 EDT [common/tools/configtxgen/encoder] NewOrdererGroup -> WARN 004 Default policy emission is deprecated, please include policy specificiations for the orderer group in configtx.yaml
2018-08-13 13:44:19.988 EDT [common/tools/configtxgen/encoder] NewOrdererOrgGroup -> WARN 005 Default policy emission is deprecated, please include policy specificiations for the orderer org group OrdererOrg in configtx.yaml
2018-08-13 13:44:19.989 EDT [msp] getMspConfig -> INFO 006 Loading NodeOUs
2018-08-13 13:44:19.989 EDT [common/tools/configtxgen/encoder] NewOrdererOrgGroup -> WARN 007 Default policy emission is deprecated, please include policy specificiations for the orderer org group Org1MSP in configtx.yaml
2018-08-13 13:44:19.989 EDT [msp] getMspConfig -> INFO 008 Loading NodeOUs
2018-08-13 13:44:19.989 EDT [common/tools/configtxgen/encoder] NewOrdererOrgGroup -> WARN 009 Default policy emission is deprecated, please include policy specificiations for the orderer org group Org2MSP in configtx.yaml
2018-08-13 13:44:19.990 EDT [common/tools/configtxgen] doOutputBlock -> INFO 00a Generating genesis block
2018-08-13 13:44:19.991 EDT [common/tools/configtxgen] doOutputBlock -> INFO 00b Writing genesis block
```

### Create a Channel Configuration Transaction

```
maverickzhn@maverickzhn-mbp ~/b/f/first-network> export CHANNEL_NAME=mychannel
maverickzhn@maverickzhn-mbp ~/b/f/first-network>
../bin/configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID $CHANNEL_NAME
2018-08-13 13:48:53.700 EDT [common/tools/configtxgen] main -> INFO 001 Loading configuration
2018-08-13 13:48:53.707 EDT [common/tools/configtxgen] doOutputChannelCreateTx -> INFO 002 Generating new channel configtx
2018-08-13 13:48:53.707 EDT [common/tools/configtxgen/encoder] NewApplicationGroup -> WARN 003 Default policy emission is deprecated, please include policy specificiations for the application group in configtx.yaml
2018-08-13 13:48:53.708 EDT [msp] getMspConfig -> INFO 004 Loading NodeOUs
2018-08-13 13:48:53.708 EDT [common/tools/configtxgen/encoder] NewApplicationOrgGroup -> WARN 005 Default policy emission is deprecated, please include policy specificiations for the application org group Org1MSP in configtx.yaml
2018-08-13 13:48:53.709 EDT [msp] getMspConfig -> INFO 006 Loading NodeOUs
2018-08-13 13:48:53.709 EDT [common/tools/configtxgen/encoder] NewApplicationOrgGroup -> WARN 007 Default policy emission is deprecated, please include policy specificiations for the application org group Org2MSP in configtx.yaml
2018-08-13 13:48:53.710 EDT [common/tools/configtxgen] doOutputChannelCreateTx -> INFO 008 Writing new channel tx
```

##### Anchor peer on Org1

```
../bin/configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org1MSPanchors.tx -channelID $CHANNEL_NAME -asOrg Org1MSP
2018-08-13 13:50:17.280 EDT [common/tools/configtxgen] main -> INFO 001 Loading configuration
2018-08-13 13:50:17.288 EDT [common/tools/configtxgen] doOutputAnchorPeersUpdate -> INFO 002 Generating anchor peer update
2018-08-13 13:50:17.288 EDT [common/tools/configtxgen] doOutputAnchorPeersUpdate -> INFO 003 Writing anchor peer update

../bin/configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org2MSPanchors.tx -channelID $CHANNEL_NAME -asOrg Org2MSP
2018-08-13 13:51:28.042 EDT [common/tools/configtxgen] main -> INFO 001 Loading configuration
2018-08-13 13:51:28.049 EDT [common/tools/configtxgen] doOutputAnchorPeersUpdate -> INFO 002 Generating anchor peer update
2018-08-13 13:51:28.050 EDT [common/tools/configtxgen] doOutputAnchorPeersUpdate -> INFO 003 Writing anchor peer update
```

#### Environmental Variables

### References
* https://hyperledger.github.io/composer/latest/installing/installing-prereqs#macos


### Troubleshooting
* https://stackoverflow.com/questions/17980759/xcode-select-active-developer-directory-error
* Install Xcode (get it from https://developer.apple.com/xcode/) if you don't have it yet.
* Accept the Terms and Conditions.
* Ensure Xcode app is in the /Applications directory (NOT /Users/{user}/Applications).
* Point xcode-select to the Xcode app Developer directory using the following command:
`sudo xcode-select -s /Applications/Xcode.app/Contents/Developer`

```
maverickzhn@maverickzhn-mbp ~/b/f/fabcar> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 11329  100 11329    0     0  76343      0 --:--:-- --:--:-- --:--:-- 76547
=> nvm is already installed in /Users/maverickzhn/.nvm, trying to update using git
=> => Compressing and cleaning up git repository
Counting objects: 7168, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (7114/7114), done.
Writing objects: 100% (7168/7168), done.
Total 7168 (delta 4774), reused 2228 (delta 0)

=> nvm source string already in /Users/maverickzhn/.bash_profile
=> bash_completion source string already in /Users/maverickzhn/.bash_profile
=> You currently have modules installed globally with `npm`. These will no
=> longer be linked to the active version of Node when you install a new node
=> with `nvm`; and they may (depending on how you construct your `$PATH`)
=> override the binaries of modules installed with `nvm`:

/Users/maverickzhn/.nvm/versions/node/v9.4.0/lib
├── bower@1.8.2
=> If you wish to uninstall them at a later point (or re-install them under your
=> `nvm` Nodes), you can remove them from the system Node as follows:

     $ nvm use system
     $ npm uninstall -g a_module

=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="/Users/maverickzhn/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
```


```
maverickzhn@pal-nat186-74-121 ~/b/f/fabcar> npm install

> grpc@1.10.1 install /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/fabric-client/node_modules/grpc
> node-pre-gyp install --fallback-to-build --library=static_library

[grpc] Success: "/Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/fabric-client/node_modules/grpc/src/node/extension_binary/node-v59-darwin-x64-unknown/grpc_node.node" is installed via remote

> pkcs11js@1.0.16 install /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js
> node-gyp rebuild

  CXX(target) Release/obj.target/pkcs11/src/main.o
Apple LLVM version 9.1.0 (clang-902.0.39.2)
Target: x86_64-apple-darwin17.7.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
 "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang" -cc1 -triple x86_64-apple-macosx10.7.0 -Wdeprecated-objc-isa-usage -Werror=deprecated-objc-isa-usage -emit-obj -disable-free -disable-llvm-verifier -discard-value-names -main-file-name main.cpp -mrelocation-model pic -pic-level 2 -mthread-model posix -mdisable-fp-elim -fno-strict-return -masm-verbose -munwind-tables -faligned-alloc-unavailable -target-cpu core2 -target-linker-version 351.8 -v -dwarf-column-info -debug-info-kind=standalone -dwarf-version=2 -debugger-tuning=lldb -coverage-notes-file /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build/Release/obj.target/pkcs11/src/main.gcno -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0 -dependency-file ./Release/.deps/Release/obj.target/pkcs11/src/main.o.d.raw -MT Release/obj.target/pkcs11/src/main.o -D NODE_GYP_MODULE_NAME=pkcs11 -D USING_UV_SHARED=1 -D USING_V8_SHARED=1 -D V8_DEPRECATION_WARNINGS=1 -D _DARWIN_USE_64_BIT_INODE=1 -D _LARGEFILE_SOURCE -D _FILE_OFFSET_BITS=64 -D BUILDING_NODE_EXTENSION -I /Users/maverickzhn/.node-gyp/9.9.0/include/node -I /Users/maverickzhn/.node-gyp/9.9.0/src -I /Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include -I /Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include -I ../../nan -I ../includes -stdlib=libc++ -stdlib=libc++ -Os -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -fdeprecated-macro -fdebug-compilation-dir /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build -ferror-limit 19 -fmessage-length 136 -stack-protector 1 -fblocks -fno-rtti -fno-threadsafe-statics -fobjc-runtime=macosx-10.7.0 -fencode-extended-block-signature -fcxx-exceptions -fexceptions -fmax-type-align=16 -fdiagnostics-show-option -fcolor-diagnostics -vectorize-loops -vectorize-slp -o Release/obj.target/pkcs11/src/main.o -x c++ ../src/main.cpp
clang -cc1 version 9.1.0 (clang-902.0.39.2) default target x86_64-apple-darwin17.7.0
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/src"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include"
ignoring nonexistent directory "/usr/include/c++/v1"
#include "..." search starts here:
#include <...> search starts here:
 /Users/maverickzhn/.node-gyp/9.9.0/include/node
 ../../nan
 ../includes
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include/c++/v1
 /usr/local/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include
 /usr/include
 /System/Library/Frameworks (framework directory)
 /Library/Frameworks (framework directory)
End of search list.
  CXX(target) Release/obj.target/pkcs11/src/dl.o
Apple LLVM version 9.1.0 (clang-902.0.39.2)
Target: x86_64-apple-darwin17.7.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
 "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang" -cc1 -triple x86_64-apple-macosx10.7.0 -Wdeprecated-objc-isa-usage -Werror=deprecated-objc-isa-usage -emit-obj -disable-free -disable-llvm-verifier -discard-value-names -main-file-name dl.cpp -mrelocation-model pic -pic-level 2 -mthread-model posix -mdisable-fp-elim -fno-strict-return -masm-verbose -munwind-tables -faligned-alloc-unavailable -target-cpu core2 -target-linker-version 351.8 -v -dwarf-column-info -debug-info-kind=standalone -dwarf-version=2 -debugger-tuning=lldb -coverage-notes-file /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build/Release/obj.target/pkcs11/src/dl.gcno -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0 -dependency-file ./Release/.deps/Release/obj.target/pkcs11/src/dl.o.d.raw -MT Release/obj.target/pkcs11/src/dl.o -D NODE_GYP_MODULE_NAME=pkcs11 -D USING_UV_SHARED=1 -D USING_V8_SHARED=1 -D V8_DEPRECATION_WARNINGS=1 -D _DARWIN_USE_64_BIT_INODE=1 -D _LARGEFILE_SOURCE -D _FILE_OFFSET_BITS=64 -D BUILDING_NODE_EXTENSION -I /Users/maverickzhn/.node-gyp/9.9.0/include/node -I /Users/maverickzhn/.node-gyp/9.9.0/src -I /Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include -I /Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include -I ../../nan -I ../includes -stdlib=libc++ -stdlib=libc++ -Os -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -fdeprecated-macro -fdebug-compilation-dir /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build -ferror-limit 19 -fmessage-length 136 -stack-protector 1 -fblocks -fno-rtti -fno-threadsafe-statics -fobjc-runtime=macosx-10.7.0 -fencode-extended-block-signature -fcxx-exceptions -fexceptions -fmax-type-align=16 -fdiagnostics-show-option -fcolor-diagnostics -vectorize-loops -vectorize-slp -o Release/obj.target/pkcs11/src/dl.o -x c++ ../src/dl.cpp
clang -cc1 version 9.1.0 (clang-902.0.39.2) default target x86_64-apple-darwin17.7.0
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/src"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include"
ignoring nonexistent directory "/usr/include/c++/v1"
#include "..." search starts here:
#include <...> search starts here:
 /Users/maverickzhn/.node-gyp/9.9.0/include/node
 ../../nan
 ../includes
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include/c++/v1
 /usr/local/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include
 /usr/include
 /System/Library/Frameworks (framework directory)
 /Library/Frameworks (framework directory)
End of search list.
  CXX(target) Release/obj.target/pkcs11/src/const.o
Apple LLVM version 9.1.0 (clang-902.0.39.2)
Target: x86_64-apple-darwin17.7.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
 "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang" -cc1 -triple x86_64-apple-macosx10.7.0 -Wdeprecated-objc-isa-usage -Werror=deprecated-objc-isa-usage -emit-obj -disable-free -disable-llvm-verifier -discard-value-names -main-file-name const.cpp -mrelocation-model pic -pic-level 2 -mthread-model posix -mdisable-fp-elim -fno-strict-return -masm-verbose -munwind-tables -faligned-alloc-unavailable -target-cpu core2 -target-linker-version 351.8 -v -dwarf-column-info -debug-info-kind=standalone -dwarf-version=2 -debugger-tuning=lldb -coverage-notes-file /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build/Release/obj.target/pkcs11/src/const.gcno -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0 -dependency-file ./Release/.deps/Release/obj.target/pkcs11/src/const.o.d.raw -MT Release/obj.target/pkcs11/src/const.o -D NODE_GYP_MODULE_NAME=pkcs11 -D USING_UV_SHARED=1 -D USING_V8_SHARED=1 -D V8_DEPRECATION_WARNINGS=1 -D _DARWIN_USE_64_BIT_INODE=1 -D _LARGEFILE_SOURCE -D _FILE_OFFSET_BITS=64 -D BUILDING_NODE_EXTENSION -I /Users/maverickzhn/.node-gyp/9.9.0/include/node -I /Users/maverickzhn/.node-gyp/9.9.0/src -I /Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include -I /Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include -I ../../nan -I ../includes -stdlib=libc++ -stdlib=libc++ -Os -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -fdeprecated-macro -fdebug-compilation-dir /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build -ferror-limit 19 -fmessage-length 136 -stack-protector 1 -fblocks -fno-rtti -fno-threadsafe-statics -fobjc-runtime=macosx-10.7.0 -fencode-extended-block-signature -fcxx-exceptions -fexceptions -fmax-type-align=16 -fdiagnostics-show-option -fcolor-diagnostics -vectorize-loops -vectorize-slp -o Release/obj.target/pkcs11/src/const.o -x c++ ../src/const.cpp
clang -cc1 version 9.1.0 (clang-902.0.39.2) default target x86_64-apple-darwin17.7.0
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/src"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include"
ignoring nonexistent directory "/usr/include/c++/v1"
#include "..." search starts here:
#include <...> search starts here:
 /Users/maverickzhn/.node-gyp/9.9.0/include/node
 ../../nan
 ../includes
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include/c++/v1
 /usr/local/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include
 /usr/include
 /System/Library/Frameworks (framework directory)
 /Library/Frameworks (framework directory)
End of search list.
  CXX(target) Release/obj.target/pkcs11/src/pkcs11/error.o
Apple LLVM version 9.1.0 (clang-902.0.39.2)
Target: x86_64-apple-darwin17.7.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
 "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang" -cc1 -triple x86_64-apple-macosx10.7.0 -Wdeprecated-objc-isa-usage -Werror=deprecated-objc-isa-usage -emit-obj -disable-free -disable-llvm-verifier -discard-value-names -main-file-name error.cpp -mrelocation-model pic -pic-level 2 -mthread-model posix -mdisable-fp-elim -fno-strict-return -masm-verbose -munwind-tables -faligned-alloc-unavailable -target-cpu core2 -target-linker-version 351.8 -v -dwarf-column-info -debug-info-kind=standalone -dwarf-version=2 -debugger-tuning=lldb -coverage-notes-file /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build/Release/obj.target/pkcs11/src/pkcs11/error.gcno -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0 -dependency-file ./Release/.deps/Release/obj.target/pkcs11/src/pkcs11/error.o.d.raw -MT Release/obj.target/pkcs11/src/pkcs11/error.o -D NODE_GYP_MODULE_NAME=pkcs11 -D USING_UV_SHARED=1 -D USING_V8_SHARED=1 -D V8_DEPRECATION_WARNINGS=1 -D _DARWIN_USE_64_BIT_INODE=1 -D _LARGEFILE_SOURCE -D _FILE_OFFSET_BITS=64 -D BUILDING_NODE_EXTENSION -I /Users/maverickzhn/.node-gyp/9.9.0/include/node -I /Users/maverickzhn/.node-gyp/9.9.0/src -I /Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include -I /Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include -I ../../nan -I ../includes -stdlib=libc++ -stdlib=libc++ -Os -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -fdeprecated-macro -fdebug-compilation-dir /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build -ferror-limit 19 -fmessage-length 136 -stack-protector 1 -fblocks -fno-rtti -fno-threadsafe-statics -fobjc-runtime=macosx-10.7.0 -fencode-extended-block-signature -fcxx-exceptions -fexceptions -fmax-type-align=16 -fdiagnostics-show-option -fcolor-diagnostics -vectorize-loops -vectorize-slp -o Release/obj.target/pkcs11/src/pkcs11/error.o -x c++ ../src/pkcs11/error.cpp
clang -cc1 version 9.1.0 (clang-902.0.39.2) default target x86_64-apple-darwin17.7.0
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/src"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include"
ignoring nonexistent directory "/usr/include/c++/v1"
#include "..." search starts here:
#include <...> search starts here:
 /Users/maverickzhn/.node-gyp/9.9.0/include/node
 ../../nan
 ../includes
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include/c++/v1
 /usr/local/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include
 /usr/include
 /System/Library/Frameworks (framework directory)
 /Library/Frameworks (framework directory)
End of search list.
  CXX(target) Release/obj.target/pkcs11/src/pkcs11/v8_convert.o
Apple LLVM version 9.1.0 (clang-902.0.39.2)
Target: x86_64-apple-darwin17.7.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
 "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang" -cc1 -triple x86_64-apple-macosx10.7.0 -Wdeprecated-objc-isa-usage -Werror=deprecated-objc-isa-usage -emit-obj -disable-free -disable-llvm-verifier -discard-value-names -main-file-name v8_convert.cpp -mrelocation-model pic -pic-level 2 -mthread-model posix -mdisable-fp-elim -fno-strict-return -masm-verbose -munwind-tables -faligned-alloc-unavailable -target-cpu core2 -target-linker-version 351.8 -v -dwarf-column-info -debug-info-kind=standalone -dwarf-version=2 -debugger-tuning=lldb -coverage-notes-file /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build/Release/obj.target/pkcs11/src/pkcs11/v8_convert.gcno -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0 -dependency-file ./Release/.deps/Release/obj.target/pkcs11/src/pkcs11/v8_convert.o.d.raw -MT Release/obj.target/pkcs11/src/pkcs11/v8_convert.o -D NODE_GYP_MODULE_NAME=pkcs11 -D USING_UV_SHARED=1 -D USING_V8_SHARED=1 -D V8_DEPRECATION_WARNINGS=1 -D _DARWIN_USE_64_BIT_INODE=1 -D _LARGEFILE_SOURCE -D _FILE_OFFSET_BITS=64 -D BUILDING_NODE_EXTENSION -I /Users/maverickzhn/.node-gyp/9.9.0/include/node -I /Users/maverickzhn/.node-gyp/9.9.0/src -I /Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include -I /Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include -I ../../nan -I ../includes -stdlib=libc++ -stdlib=libc++ -Os -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -fdeprecated-macro -fdebug-compilation-dir /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build -ferror-limit 19 -fmessage-length 136 -stack-protector 1 -fblocks -fno-rtti -fno-threadsafe-statics -fobjc-runtime=macosx-10.7.0 -fencode-extended-block-signature -fcxx-exceptions -fexceptions -fmax-type-align=16 -fdiagnostics-show-option -fcolor-diagnostics -vectorize-loops -vectorize-slp -o Release/obj.target/pkcs11/src/pkcs11/v8_convert.o -x c++ ../src/pkcs11/v8_convert.cpp
clang -cc1 version 9.1.0 (clang-902.0.39.2) default target x86_64-apple-darwin17.7.0
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/src"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include"
ignoring nonexistent directory "/usr/include/c++/v1"
#include "..." search starts here:
#include <...> search starts here:
 /Users/maverickzhn/.node-gyp/9.9.0/include/node
 ../../nan
 ../includes
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include/c++/v1
 /usr/local/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include
 /usr/include
 /System/Library/Frameworks (framework directory)
 /Library/Frameworks (framework directory)
End of search list.
  CXX(target) Release/obj.target/pkcs11/src/pkcs11/template.o
Apple LLVM version 9.1.0 (clang-902.0.39.2)
Target: x86_64-apple-darwin17.7.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
 "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang" -cc1 -triple x86_64-apple-macosx10.7.0 -Wdeprecated-objc-isa-usage -Werror=deprecated-objc-isa-usage -emit-obj -disable-free -disable-llvm-verifier -discard-value-names -main-file-name template.cpp -mrelocation-model pic -pic-level 2 -mthread-model posix -mdisable-fp-elim -fno-strict-return -masm-verbose -munwind-tables -faligned-alloc-unavailable -target-cpu core2 -target-linker-version 351.8 -v -dwarf-column-info -debug-info-kind=standalone -dwarf-version=2 -debugger-tuning=lldb -coverage-notes-file /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build/Release/obj.target/pkcs11/src/pkcs11/template.gcno -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0 -dependency-file ./Release/.deps/Release/obj.target/pkcs11/src/pkcs11/template.o.d.raw -MT Release/obj.target/pkcs11/src/pkcs11/template.o -D NODE_GYP_MODULE_NAME=pkcs11 -D USING_UV_SHARED=1 -D USING_V8_SHARED=1 -D V8_DEPRECATION_WARNINGS=1 -D _DARWIN_USE_64_BIT_INODE=1 -D _LARGEFILE_SOURCE -D _FILE_OFFSET_BITS=64 -D BUILDING_NODE_EXTENSION -I /Users/maverickzhn/.node-gyp/9.9.0/include/node -I /Users/maverickzhn/.node-gyp/9.9.0/src -I /Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include -I /Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include -I ../../nan -I ../includes -stdlib=libc++ -stdlib=libc++ -Os -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -fdeprecated-macro -fdebug-compilation-dir /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build -ferror-limit 19 -fmessage-length 136 -stack-protector 1 -fblocks -fno-rtti -fno-threadsafe-statics -fobjc-runtime=macosx-10.7.0 -fencode-extended-block-signature -fcxx-exceptions -fexceptions -fmax-type-align=16 -fdiagnostics-show-option -fcolor-diagnostics -vectorize-loops -vectorize-slp -o Release/obj.target/pkcs11/src/pkcs11/template.o -x c++ ../src/pkcs11/template.cpp
clang -cc1 version 9.1.0 (clang-902.0.39.2) default target x86_64-apple-darwin17.7.0
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/src"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include"
ignoring nonexistent directory "/usr/include/c++/v1"
#include "..." search starts here:
#include <...> search starts here:
 /Users/maverickzhn/.node-gyp/9.9.0/include/node
 ../../nan
 ../includes
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include/c++/v1
 /usr/local/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include
 /usr/include
 /System/Library/Frameworks (framework directory)
 /Library/Frameworks (framework directory)
End of search list.
  CXX(target) Release/obj.target/pkcs11/src/pkcs11/mech.o
Apple LLVM version 9.1.0 (clang-902.0.39.2)
Target: x86_64-apple-darwin17.7.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
 "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang" -cc1 -triple x86_64-apple-macosx10.7.0 -Wdeprecated-objc-isa-usage -Werror=deprecated-objc-isa-usage -emit-obj -disable-free -disable-llvm-verifier -discard-value-names -main-file-name mech.cpp -mrelocation-model pic -pic-level 2 -mthread-model posix -mdisable-fp-elim -fno-strict-return -masm-verbose -munwind-tables -faligned-alloc-unavailable -target-cpu core2 -target-linker-version 351.8 -v -dwarf-column-info -debug-info-kind=standalone -dwarf-version=2 -debugger-tuning=lldb -coverage-notes-file /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build/Release/obj.target/pkcs11/src/pkcs11/mech.gcno -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0 -dependency-file ./Release/.deps/Release/obj.target/pkcs11/src/pkcs11/mech.o.d.raw -MT Release/obj.target/pkcs11/src/pkcs11/mech.o -D NODE_GYP_MODULE_NAME=pkcs11 -D USING_UV_SHARED=1 -D USING_V8_SHARED=1 -D V8_DEPRECATION_WARNINGS=1 -D _DARWIN_USE_64_BIT_INODE=1 -D _LARGEFILE_SOURCE -D _FILE_OFFSET_BITS=64 -D BUILDING_NODE_EXTENSION -I /Users/maverickzhn/.node-gyp/9.9.0/include/node -I /Users/maverickzhn/.node-gyp/9.9.0/src -I /Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include -I /Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include -I ../../nan -I ../includes -stdlib=libc++ -stdlib=libc++ -Os -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -fdeprecated-macro -fdebug-compilation-dir /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build -ferror-limit 19 -fmessage-length 136 -stack-protector 1 -fblocks -fno-rtti -fno-threadsafe-statics -fobjc-runtime=macosx-10.7.0 -fencode-extended-block-signature -fcxx-exceptions -fexceptions -fmax-type-align=16 -fdiagnostics-show-option -fcolor-diagnostics -vectorize-loops -vectorize-slp -o Release/obj.target/pkcs11/src/pkcs11/mech.o -x c++ ../src/pkcs11/mech.cpp
clang -cc1 version 9.1.0 (clang-902.0.39.2) default target x86_64-apple-darwin17.7.0
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/src"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include"
ignoring nonexistent directory "/usr/include/c++/v1"
#include "..." search starts here:
#include <...> search starts here:
 /Users/maverickzhn/.node-gyp/9.9.0/include/node
 ../../nan
 ../includes
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include/c++/v1
 /usr/local/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include
 /usr/include
 /System/Library/Frameworks (framework directory)
 /Library/Frameworks (framework directory)
End of search list.
  CXX(target) Release/obj.target/pkcs11/src/pkcs11/param.o
Apple LLVM version 9.1.0 (clang-902.0.39.2)
Target: x86_64-apple-darwin17.7.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
 "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang" -cc1 -triple x86_64-apple-macosx10.7.0 -Wdeprecated-objc-isa-usage -Werror=deprecated-objc-isa-usage -emit-obj -disable-free -disable-llvm-verifier -discard-value-names -main-file-name param.cpp -mrelocation-model pic -pic-level 2 -mthread-model posix -mdisable-fp-elim -fno-strict-return -masm-verbose -munwind-tables -faligned-alloc-unavailable -target-cpu core2 -target-linker-version 351.8 -v -dwarf-column-info -debug-info-kind=standalone -dwarf-version=2 -debugger-tuning=lldb -coverage-notes-file /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build/Release/obj.target/pkcs11/src/pkcs11/param.gcno -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0 -dependency-file ./Release/.deps/Release/obj.target/pkcs11/src/pkcs11/param.o.d.raw -MT Release/obj.target/pkcs11/src/pkcs11/param.o -D NODE_GYP_MODULE_NAME=pkcs11 -D USING_UV_SHARED=1 -D USING_V8_SHARED=1 -D V8_DEPRECATION_WARNINGS=1 -D _DARWIN_USE_64_BIT_INODE=1 -D _LARGEFILE_SOURCE -D _FILE_OFFSET_BITS=64 -D BUILDING_NODE_EXTENSION -I /Users/maverickzhn/.node-gyp/9.9.0/include/node -I /Users/maverickzhn/.node-gyp/9.9.0/src -I /Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include -I /Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include -I ../../nan -I ../includes -stdlib=libc++ -stdlib=libc++ -Os -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -fdeprecated-macro -fdebug-compilation-dir /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build -ferror-limit 19 -fmessage-length 136 -stack-protector 1 -fblocks -fno-rtti -fno-threadsafe-statics -fobjc-runtime=macosx-10.7.0 -fencode-extended-block-signature -fcxx-exceptions -fexceptions -fmax-type-align=16 -fdiagnostics-show-option -fcolor-diagnostics -vectorize-loops -vectorize-slp -o Release/obj.target/pkcs11/src/pkcs11/param.o -x c++ ../src/pkcs11/param.cpp
clang -cc1 version 9.1.0 (clang-902.0.39.2) default target x86_64-apple-darwin17.7.0
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/src"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include"
ignoring nonexistent directory "/usr/include/c++/v1"
#include "..." search starts here:
#include <...> search starts here:
 /Users/maverickzhn/.node-gyp/9.9.0/include/node
 ../../nan
 ../includes
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include/c++/v1
 /usr/local/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include
 /usr/include
 /System/Library/Frameworks (framework directory)
 /Library/Frameworks (framework directory)
End of search list.
  CXX(target) Release/obj.target/pkcs11/src/pkcs11/param_aes.o
Apple LLVM version 9.1.0 (clang-902.0.39.2)
Target: x86_64-apple-darwin17.7.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
 "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang" -cc1 -triple x86_64-apple-macosx10.7.0 -Wdeprecated-objc-isa-usage -Werror=deprecated-objc-isa-usage -emit-obj -disable-free -disable-llvm-verifier -discard-value-names -main-file-name param_aes.cpp -mrelocation-model pic -pic-level 2 -mthread-model posix -mdisable-fp-elim -fno-strict-return -masm-verbose -munwind-tables -faligned-alloc-unavailable -target-cpu core2 -target-linker-version 351.8 -v -dwarf-column-info -debug-info-kind=standalone -dwarf-version=2 -debugger-tuning=lldb -coverage-notes-file /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build/Release/obj.target/pkcs11/src/pkcs11/param_aes.gcno -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0 -dependency-file ./Release/.deps/Release/obj.target/pkcs11/src/pkcs11/param_aes.o.d.raw -MT Release/obj.target/pkcs11/src/pkcs11/param_aes.o -D NODE_GYP_MODULE_NAME=pkcs11 -D USING_UV_SHARED=1 -D USING_V8_SHARED=1 -D V8_DEPRECATION_WARNINGS=1 -D _DARWIN_USE_64_BIT_INODE=1 -D _LARGEFILE_SOURCE -D _FILE_OFFSET_BITS=64 -D BUILDING_NODE_EXTENSION -I /Users/maverickzhn/.node-gyp/9.9.0/include/node -I /Users/maverickzhn/.node-gyp/9.9.0/src -I /Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include -I /Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include -I ../../nan -I ../includes -stdlib=libc++ -stdlib=libc++ -Os -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -fdeprecated-macro -fdebug-compilation-dir /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build -ferror-limit 19 -fmessage-length 136 -stack-protector 1 -fblocks -fno-rtti -fno-threadsafe-statics -fobjc-runtime=macosx-10.7.0 -fencode-extended-block-signature -fcxx-exceptions -fexceptions -fmax-type-align=16 -fdiagnostics-show-option -fcolor-diagnostics -vectorize-loops -vectorize-slp -o Release/obj.target/pkcs11/src/pkcs11/param_aes.o -x c++ ../src/pkcs11/param_aes.cpp
clang -cc1 version 9.1.0 (clang-902.0.39.2) default target x86_64-apple-darwin17.7.0
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/src"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include"
ignoring nonexistent directory "/usr/include/c++/v1"
#include "..." search starts here:
#include <...> search starts here:
 /Users/maverickzhn/.node-gyp/9.9.0/include/node
 ../../nan
 ../includes
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include/c++/v1
 /usr/local/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include
 /usr/include
 /System/Library/Frameworks (framework directory)
 /Library/Frameworks (framework directory)
End of search list.
  CXX(target) Release/obj.target/pkcs11/src/pkcs11/param_rsa.o
Apple LLVM version 9.1.0 (clang-902.0.39.2)
Target: x86_64-apple-darwin17.7.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
 "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang" -cc1 -triple x86_64-apple-macosx10.7.0 -Wdeprecated-objc-isa-usage -Werror=deprecated-objc-isa-usage -emit-obj -disable-free -disable-llvm-verifier -discard-value-names -main-file-name param_rsa.cpp -mrelocation-model pic -pic-level 2 -mthread-model posix -mdisable-fp-elim -fno-strict-return -masm-verbose -munwind-tables -faligned-alloc-unavailable -target-cpu core2 -target-linker-version 351.8 -v -dwarf-column-info -debug-info-kind=standalone -dwarf-version=2 -debugger-tuning=lldb -coverage-notes-file /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build/Release/obj.target/pkcs11/src/pkcs11/param_rsa.gcno -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0 -dependency-file ./Release/.deps/Release/obj.target/pkcs11/src/pkcs11/param_rsa.o.d.raw -MT Release/obj.target/pkcs11/src/pkcs11/param_rsa.o -D NODE_GYP_MODULE_NAME=pkcs11 -D USING_UV_SHARED=1 -D USING_V8_SHARED=1 -D V8_DEPRECATION_WARNINGS=1 -D _DARWIN_USE_64_BIT_INODE=1 -D _LARGEFILE_SOURCE -D _FILE_OFFSET_BITS=64 -D BUILDING_NODE_EXTENSION -I /Users/maverickzhn/.node-gyp/9.9.0/include/node -I /Users/maverickzhn/.node-gyp/9.9.0/src -I /Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include -I /Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include -I ../../nan -I ../includes -stdlib=libc++ -stdlib=libc++ -Os -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -fdeprecated-macro -fdebug-compilation-dir /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build -ferror-limit 19 -fmessage-length 136 -stack-protector 1 -fblocks -fno-rtti -fno-threadsafe-statics -fobjc-runtime=macosx-10.7.0 -fencode-extended-block-signature -fcxx-exceptions -fexceptions -fmax-type-align=16 -fdiagnostics-show-option -fcolor-diagnostics -vectorize-loops -vectorize-slp -o Release/obj.target/pkcs11/src/pkcs11/param_rsa.o -x c++ ../src/pkcs11/param_rsa.cpp
clang -cc1 version 9.1.0 (clang-902.0.39.2) default target x86_64-apple-darwin17.7.0
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/src"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include"
ignoring nonexistent directory "/usr/include/c++/v1"
#include "..." search starts here:
#include <...> search starts here:
 /Users/maverickzhn/.node-gyp/9.9.0/include/node
 ../../nan
 ../includes
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include/c++/v1
 /usr/local/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include
 /usr/include
 /System/Library/Frameworks (framework directory)
 /Library/Frameworks (framework directory)
End of search list.
  CXX(target) Release/obj.target/pkcs11/src/pkcs11/param_ecdh.o
Apple LLVM version 9.1.0 (clang-902.0.39.2)
Target: x86_64-apple-darwin17.7.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
 "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang" -cc1 -triple x86_64-apple-macosx10.7.0 -Wdeprecated-objc-isa-usage -Werror=deprecated-objc-isa-usage -emit-obj -disable-free -disable-llvm-verifier -discard-value-names -main-file-name param_ecdh.cpp -mrelocation-model pic -pic-level 2 -mthread-model posix -mdisable-fp-elim -fno-strict-return -masm-verbose -munwind-tables -faligned-alloc-unavailable -target-cpu core2 -target-linker-version 351.8 -v -dwarf-column-info -debug-info-kind=standalone -dwarf-version=2 -debugger-tuning=lldb -coverage-notes-file /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build/Release/obj.target/pkcs11/src/pkcs11/param_ecdh.gcno -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0 -dependency-file ./Release/.deps/Release/obj.target/pkcs11/src/pkcs11/param_ecdh.o.d.raw -MT Release/obj.target/pkcs11/src/pkcs11/param_ecdh.o -D NODE_GYP_MODULE_NAME=pkcs11 -D USING_UV_SHARED=1 -D USING_V8_SHARED=1 -D V8_DEPRECATION_WARNINGS=1 -D _DARWIN_USE_64_BIT_INODE=1 -D _LARGEFILE_SOURCE -D _FILE_OFFSET_BITS=64 -D BUILDING_NODE_EXTENSION -I /Users/maverickzhn/.node-gyp/9.9.0/include/node -I /Users/maverickzhn/.node-gyp/9.9.0/src -I /Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include -I /Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include -I ../../nan -I ../includes -stdlib=libc++ -stdlib=libc++ -Os -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -fdeprecated-macro -fdebug-compilation-dir /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build -ferror-limit 19 -fmessage-length 136 -stack-protector 1 -fblocks -fno-rtti -fno-threadsafe-statics -fobjc-runtime=macosx-10.7.0 -fencode-extended-block-signature -fcxx-exceptions -fexceptions -fmax-type-align=16 -fdiagnostics-show-option -fcolor-diagnostics -vectorize-loops -vectorize-slp -o Release/obj.target/pkcs11/src/pkcs11/param_ecdh.o -x c++ ../src/pkcs11/param_ecdh.cpp
clang -cc1 version 9.1.0 (clang-902.0.39.2) default target x86_64-apple-darwin17.7.0
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/src"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include"
ignoring nonexistent directory "/usr/include/c++/v1"
#include "..." search starts here:
#include <...> search starts here:
 /Users/maverickzhn/.node-gyp/9.9.0/include/node
 ../../nan
 ../includes
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include/c++/v1
 /usr/local/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include
 /usr/include
 /System/Library/Frameworks (framework directory)
 /Library/Frameworks (framework directory)
End of search list.
  CXX(target) Release/obj.target/pkcs11/src/pkcs11/pkcs11.o
Apple LLVM version 9.1.0 (clang-902.0.39.2)
Target: x86_64-apple-darwin17.7.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
 "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang" -cc1 -triple x86_64-apple-macosx10.7.0 -Wdeprecated-objc-isa-usage -Werror=deprecated-objc-isa-usage -emit-obj -disable-free -disable-llvm-verifier -discard-value-names -main-file-name pkcs11.cpp -mrelocation-model pic -pic-level 2 -mthread-model posix -mdisable-fp-elim -fno-strict-return -masm-verbose -munwind-tables -faligned-alloc-unavailable -target-cpu core2 -target-linker-version 351.8 -v -dwarf-column-info -debug-info-kind=standalone -dwarf-version=2 -debugger-tuning=lldb -coverage-notes-file /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build/Release/obj.target/pkcs11/src/pkcs11/pkcs11.gcno -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0 -dependency-file ./Release/.deps/Release/obj.target/pkcs11/src/pkcs11/pkcs11.o.d.raw -MT Release/obj.target/pkcs11/src/pkcs11/pkcs11.o -D NODE_GYP_MODULE_NAME=pkcs11 -D USING_UV_SHARED=1 -D USING_V8_SHARED=1 -D V8_DEPRECATION_WARNINGS=1 -D _DARWIN_USE_64_BIT_INODE=1 -D _LARGEFILE_SOURCE -D _FILE_OFFSET_BITS=64 -D BUILDING_NODE_EXTENSION -I /Users/maverickzhn/.node-gyp/9.9.0/include/node -I /Users/maverickzhn/.node-gyp/9.9.0/src -I /Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include -I /Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include -I ../../nan -I ../includes -stdlib=libc++ -stdlib=libc++ -Os -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -fdeprecated-macro -fdebug-compilation-dir /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build -ferror-limit 19 -fmessage-length 136 -stack-protector 1 -fblocks -fno-rtti -fno-threadsafe-statics -fobjc-runtime=macosx-10.7.0 -fencode-extended-block-signature -fcxx-exceptions -fexceptions -fmax-type-align=16 -fdiagnostics-show-option -fcolor-diagnostics -vectorize-loops -vectorize-slp -o Release/obj.target/pkcs11/src/pkcs11/pkcs11.o -x c++ ../src/pkcs11/pkcs11.cpp
clang -cc1 version 9.1.0 (clang-902.0.39.2) default target x86_64-apple-darwin17.7.0
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/src"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include"
ignoring nonexistent directory "/usr/include/c++/v1"
#include "..." search starts here:
#include <...> search starts here:
 /Users/maverickzhn/.node-gyp/9.9.0/include/node
 ../../nan
 ../includes
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include/c++/v1
 /usr/local/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include
 /usr/include
 /System/Library/Frameworks (framework directory)
 /Library/Frameworks (framework directory)
End of search list.
  CXX(target) Release/obj.target/pkcs11/src/async.o
Apple LLVM version 9.1.0 (clang-902.0.39.2)
Target: x86_64-apple-darwin17.7.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
 "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang" -cc1 -triple x86_64-apple-macosx10.7.0 -Wdeprecated-objc-isa-usage -Werror=deprecated-objc-isa-usage -emit-obj -disable-free -disable-llvm-verifier -discard-value-names -main-file-name async.cpp -mrelocation-model pic -pic-level 2 -mthread-model posix -mdisable-fp-elim -fno-strict-return -masm-verbose -munwind-tables -faligned-alloc-unavailable -target-cpu core2 -target-linker-version 351.8 -v -dwarf-column-info -debug-info-kind=standalone -dwarf-version=2 -debugger-tuning=lldb -coverage-notes-file /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build/Release/obj.target/pkcs11/src/async.gcno -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0 -dependency-file ./Release/.deps/Release/obj.target/pkcs11/src/async.o.d.raw -MT Release/obj.target/pkcs11/src/async.o -D NODE_GYP_MODULE_NAME=pkcs11 -D USING_UV_SHARED=1 -D USING_V8_SHARED=1 -D V8_DEPRECATION_WARNINGS=1 -D _DARWIN_USE_64_BIT_INODE=1 -D _LARGEFILE_SOURCE -D _FILE_OFFSET_BITS=64 -D BUILDING_NODE_EXTENSION -I /Users/maverickzhn/.node-gyp/9.9.0/include/node -I /Users/maverickzhn/.node-gyp/9.9.0/src -I /Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include -I /Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include -I ../../nan -I ../includes -stdlib=libc++ -stdlib=libc++ -Os -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -fdeprecated-macro -fdebug-compilation-dir /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build -ferror-limit 19 -fmessage-length 136 -stack-protector 1 -fblocks -fno-rtti -fno-threadsafe-statics -fobjc-runtime=macosx-10.7.0 -fencode-extended-block-signature -fcxx-exceptions -fexceptions -fmax-type-align=16 -fdiagnostics-show-option -fcolor-diagnostics -vectorize-loops -vectorize-slp -o Release/obj.target/pkcs11/src/async.o -x c++ ../src/async.cpp
clang -cc1 version 9.1.0 (clang-902.0.39.2) default target x86_64-apple-darwin17.7.0
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/src"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include"
ignoring nonexistent directory "/usr/include/c++/v1"
#include "..." search starts here:
#include <...> search starts here:
 /Users/maverickzhn/.node-gyp/9.9.0/include/node
 ../../nan
 ../includes
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include/c++/v1
 /usr/local/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include
 /usr/include
 /System/Library/Frameworks (framework directory)
 /Library/Frameworks (framework directory)
End of search list.
  CXX(target) Release/obj.target/pkcs11/src/node.o
Apple LLVM version 9.1.0 (clang-902.0.39.2)
Target: x86_64-apple-darwin17.7.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
 "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang" -cc1 -triple x86_64-apple-macosx10.7.0 -Wdeprecated-objc-isa-usage -Werror=deprecated-objc-isa-usage -emit-obj -disable-free -disable-llvm-verifier -discard-value-names -main-file-name node.cpp -mrelocation-model pic -pic-level 2 -mthread-model posix -mdisable-fp-elim -fno-strict-return -masm-verbose -munwind-tables -faligned-alloc-unavailable -target-cpu core2 -target-linker-version 351.8 -v -dwarf-column-info -debug-info-kind=standalone -dwarf-version=2 -debugger-tuning=lldb -coverage-notes-file /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build/Release/obj.target/pkcs11/src/node.gcno -resource-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0 -dependency-file ./Release/.deps/Release/obj.target/pkcs11/src/node.o.d.raw -MT Release/obj.target/pkcs11/src/node.o -D NODE_GYP_MODULE_NAME=pkcs11 -D USING_UV_SHARED=1 -D USING_V8_SHARED=1 -D V8_DEPRECATION_WARNINGS=1 -D _DARWIN_USE_64_BIT_INODE=1 -D _LARGEFILE_SOURCE -D _FILE_OFFSET_BITS=64 -D BUILDING_NODE_EXTENSION -I /Users/maverickzhn/.node-gyp/9.9.0/include/node -I /Users/maverickzhn/.node-gyp/9.9.0/src -I /Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include -I /Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include -I ../../nan -I ../includes -stdlib=libc++ -stdlib=libc++ -Os -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -fdeprecated-macro -fdebug-compilation-dir /Users/maverickzhn/blockchain/fabric-samples/fabcar/node_modules/pkcs11js/build -ferror-limit 19 -fmessage-length 136 -stack-protector 1 -fblocks -fno-rtti -fno-threadsafe-statics -fobjc-runtime=macosx-10.7.0 -fencode-extended-block-signature -fcxx-exceptions -fexceptions -fmax-type-align=16 -fdiagnostics-show-option -fcolor-diagnostics -vectorize-loops -vectorize-slp -o Release/obj.target/pkcs11/src/node.o -x c++ ../src/node.cpp
clang -cc1 version 9.1.0 (clang-902.0.39.2) default target x86_64-apple-darwin17.7.0
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/src"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/uv/include"
ignoring nonexistent directory "/Users/maverickzhn/.node-gyp/9.9.0/deps/v8/include"
ignoring nonexistent directory "/usr/include/c++/v1"
#include "..." search starts here:
#include <...> search starts here:
 /Users/maverickzhn/.node-gyp/9.9.0/include/node
 ../../nan
 ../includes
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include/c++/v1
 /usr/local/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/clang/9.1.0/include
 /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include
 /usr/include
 /System/Library/Frameworks (framework directory)
 /Library/Frameworks (framework directory)
End of search list.
  SOLINK_MODULE(target) Release/pkcs11.node
npm WARN fabcar@1.0.0 No repository field.

added 113 packages in 28.699s
maverickzhn@pal-nat186-74-121 ~/b/f/fabcar>
```

### Launching the Network:
```
maverickzhn@pal-nat186-74-121 ~/b/f/fabcar> ./startFabric.sh

# don't rewrite paths for Windows Git Bash users
export MSYS_NO_PATHCONV=1

docker-compose -f docker-compose.yml down
Removing network net_basic
WARNING: Network net_basic not found.

docker-compose -f docker-compose.yml up -d ca.example.com orderer.example.com peer0.org1.example.com couchdb
Creating network "net_basic" with the default driver
Creating ca.example.com      ... done
Creating orderer.example.com ... done
Creating couchdb             ... done
Creating peer0.org1.example.com ... done

# wait for Hyperledger Fabric to start
# incase of errors when running later commands, issue export FABRIC_START_TIMEOUT=<larger number>
export FABRIC_START_TIMEOUT=10
#echo ${FABRIC_START_TIMEOUT}
sleep ${FABRIC_START_TIMEOUT}

# Create the channel
docker exec -e "CORE_PEER_LOCALMSPID=Org1MSP" -e "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/users/Admin@org1.example.com/msp" peer0.org1.example.com peer channel create -o orderer.example.com:7050 -c mychannel -f /etc/hyperledger/configtx/channel.tx
2018-08-13 21:49:42.286 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2018-08-13 21:49:42.312 UTC [cli/common] readBlock -> INFO 002 Got status: &{NOT_FOUND}
2018-08-13 21:49:42.313 UTC [channelCmd] InitCmdFactory -> INFO 003 Endorser and orderer connections initialized
2018-08-13 21:49:42.519 UTC [cli/common] readBlock -> INFO 004 Received block: 0
# Join peer0.org1.example.com to the channel.
docker exec -e "CORE_PEER_LOCALMSPID=Org1MSP" -e "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/users/Admin@org1.example.com/msp" peer0.org1.example.com peer channel join -b mychannel.block
2018-08-13 21:49:42.732 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2018-08-13 21:49:42.832 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
Creating cli ... done
2018-08-13 21:49:44.275 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2018-08-13 21:49:44.275 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
2018-08-13 21:49:45.525 UTC [chaincodeCmd] install -> INFO 003 Installed remotely response:<status:200 payload:"OK" >
2018-08-13 21:49:45.748 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2018-08-13 21:49:45.748 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
2018-08-13 21:50:09.474 UTC [chaincodeCmd] chaincodeInvokeOrQuery -> INFO 001 Chaincode invoke successful. result: status:200

Total setup execution time : 41 secs ...


Start by installing required packages run 'npm install'
Then run 'node enrollAdmin.js', then 'node registerUser'

The 'node invoke.js' will fail until it has been updated with valid arguments
The 'node query.js' may be run at anytime once the user has been registered

```

### Using node

```
maverickzhn@pal-nat186-74-121 ~/b/f/fabcar> ./startFabric.sh node

# don't rewrite paths for Windows Git Bash users
export MSYS_NO_PATHCONV=1

docker-compose -f docker-compose.yml down
Stopping cli                    ... done
Stopping peer0.org1.example.com ... done
Stopping ca.example.com         ... done
Stopping couchdb                ... done
Stopping orderer.example.com    ... done
Removing cli                    ... done
Removing peer0.org1.example.com ... done
Removing ca.example.com         ... done
Removing couchdb                ... done
Removing orderer.example.com    ... done
Removing network net_basic

docker-compose -f docker-compose.yml up -d ca.example.com orderer.example.com peer0.org1.example.com couchdb
Creating network "net_basic" with the default driver
Creating orderer.example.com ... done
Creating couchdb             ... done
Creating ca.example.com      ... done
Creating peer0.org1.example.com ... done

# wait for Hyperledger Fabric to start
# incase of errors when running later commands, issue export FABRIC_START_TIMEOUT=<larger number>
export FABRIC_START_TIMEOUT=10
#echo ${FABRIC_START_TIMEOUT}
sleep ${FABRIC_START_TIMEOUT}

# Create the channel
docker exec -e "CORE_PEER_LOCALMSPID=Org1MSP" -e "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/users/Admin@org1.example.com/msp" peer0.org1.example.com peer channel create -o orderer.example.com:7050 -c mychannel -f /etc/hyperledger/configtx/channel.tx
2018-08-13 21:52:10.141 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2018-08-13 21:52:10.155 UTC [cli/common] readBlock -> INFO 002 Got status: &{NOT_FOUND}
2018-08-13 21:52:10.157 UTC [channelCmd] InitCmdFactory -> INFO 003 Endorser and orderer connections initialized
2018-08-13 21:52:10.362 UTC [cli/common] readBlock -> INFO 004 Received block: 0
# Join peer0.org1.example.com to the channel.
docker exec -e "CORE_PEER_LOCALMSPID=Org1MSP" -e "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/users/Admin@org1.example.com/msp" peer0.org1.example.com peer channel join -b mychannel.block
2018-08-13 21:52:10.566 UTC [channelCmd] InitCmdFactory -> INFO 001 Endorser and orderer connections initialized
2018-08-13 21:52:10.646 UTC [channelCmd] executeJoin -> INFO 002 Successfully submitted proposal to join channel
Creating cli ... done
2018-08-13 21:52:12.083 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2018-08-13 21:52:12.083 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
2018-08-13 21:52:12.084 UTC [container] WriteFolderToTarPackage -> INFO 003 rootDirectory = /opt/gopath/src/github.com/fabcar/node
2018-08-13 21:52:12.111 UTC [chaincodeCmd] install -> INFO 004 Installed remotely response:<status:200 payload:"OK" >
2018-08-13 21:52:12.332 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 001 Using default escc
2018-08-13 21:52:12.332 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 002 Using default vscc
Error: could not assemble transaction, err Proposal response was not successful, error code 500, msg failed to execute transaction d6a30c22bf7888082c081e52e2f37d1d80cd8e5e96d0fdb5d3d00e22003cda4e: timeout expired while starting chaincode fabcar:1.0 for transaction d6a30c22bf7888082c081e52e2f37d1d80cd8e5e96d0fdb5d3d00e22003cda4e
```

./startFabric.sh
