# Blockchain installation and playground

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
