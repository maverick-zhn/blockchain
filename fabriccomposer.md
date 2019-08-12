# Composer Playground

## Creating a Business Network using a template
http://localhost:8080/login

Using ID and Secret
EnrollmentID genericID
EnrollmentSecret 0XooP$!wr3


```
 ~/fabric-dev-servers 
   ./stopFabric.sh                                                  08.08.19    11:59:07 
Development only script for Hyperledger Fabric control
Running 'stopFabric.sh'
FABRIC_VERSION is set to 'hlfv12'
FABRIC_START_TIMEOUT is unset, assuming 15 (seconds)
Stopping peer0.org1.example.com ... done
Stopping ca.org1.example.com    ... done
Stopping couchdb                ... done
Stopping orderer.example.com    ... done

  ~/fabric-dev-servers 
   ./startFabric.sh                                                 08.08.19    11:59:54 
Development only script for Hyperledger Fabric control
Running 'startFabric.sh'
FABRIC_VERSION is set to 'hlfv12'
FABRIC_START_TIMEOUT is unset, assuming 15 (seconds)
Removing peer0.org1.example.com ... done
Removing ca.org1.example.com    ... done
Removing couchdb                ... done
Removing orderer.example.com    ... done
Removing network composer_default
Creating network "composer_default" with the default driver
Creating couchdb             ... done
Creating orderer.example.com ... done
Creating ca.org1.example.com ... done
Creating peer0.org1.example.com ... done
sleeping for 15 seconds to wait for fabric to complete start up
2019-08-08 16:00:19.781 UTC [viperutil] getKeysRecursively -> DEBU 001 Found map[string]interface{} value for peer.BCCSP
2019-08-08 16:00:19.781 UTC [viperutil] getKeysRecursively -> DEBU 002 Found map[string]interface{} value for peer.BCCSP.PKCS11
2019-08-08 16:00:19.782 UTC [viperutil] unmarshalJSON -> DEBU 003 Unmarshal JSON: value is not a string: <nil>
2019-08-08 16:00:19.783 UTC [viperutil] getKeysRecursively -> DEBU 004 Found real value for peer.BCCSP.PKCS11.Security setting to <nil> <nil>
2019-08-08 16:00:19.783 UTC [viperutil] getKeysRecursively -> DEBU 005 Found map[string]interface{} value for peer.BCCSP.PKCS11.FileKeyStore
2019-08-08 16:00:19.784 UTC [viperutil] unmarshalJSON -> DEBU 006 Unmarshal JSON: value is not a string: <nil>
2019-08-08 16:00:19.784 UTC [viperutil] getKeysRecursively -> DEBU 007 Found real value for peer.BCCSP.PKCS11.FileKeyStore.KeyStore setting to <nil> <nil>
2019-08-08 16:00:19.785 UTC [viperutil] unmarshalJSON -> DEBU 008 Unmarshal JSON: value is not a string: <nil>
2019-08-08 16:00:19.785 UTC [viperutil] getKeysRecursively -> DEBU 009 Found real value for peer.BCCSP.PKCS11.Library setting to <nil> <nil>
2019-08-08 16:00:19.785 UTC [viperutil] unmarshalJSON -> DEBU 00a Unmarshal JSON: value is not a string: <nil>
2019-08-08 16:00:19.786 UTC [viperutil] getKeysRecursively -> DEBU 00b Found real value for peer.BCCSP.PKCS11.Label setting to <nil> <nil>
2019-08-08 16:00:19.786 UTC [viperutil] unmarshalJSON -> DEBU 00c Unmarshal JSON: value is not a string: <nil>
2019-08-08 16:00:19.786 UTC [viperutil] getKeysRecursively -> DEBU 00d Found real value for peer.BCCSP.PKCS11.Pin setting to <nil> <nil>
2019-08-08 16:00:19.787 UTC [viperutil] unmarshalJSON -> DEBU 00e Unmarshal JSON: value is not a string: <nil>
2019-08-08 16:00:19.787 UTC [viperutil] getKeysRecursively -> DEBU 00f Found real value for peer.BCCSP.PKCS11.Hash setting to <nil> <nil>
2019-08-08 16:00:19.788 UTC [viperutil] unmarshalJSON -> DEBU 010 Unmarshal JSON: value cannot be unmarshalled: invalid character 'S' looking for beginning of value
2019-08-08 16:00:19.788 UTC [viperutil] getKeysRecursively -> DEBU 011 Found real value for peer.BCCSP.Default setting to string SW
2019-08-08 16:00:19.788 UTC [viperutil] getKeysRecursively -> DEBU 012 Found map[string]interface{} value for peer.BCCSP.SW
2019-08-08 16:00:19.789 UTC [viperutil] unmarshalJSON -> DEBU 013 Unmarshal JSON: value cannot be unmarshalled: invalid character 'S' looking for beginning of value
2019-08-08 16:00:19.789 UTC [viperutil] getKeysRecursively -> DEBU 014 Found real value for peer.BCCSP.SW.Hash setting to string SHA2
2019-08-08 16:00:19.789 UTC [viperutil] unmarshalJSON -> DEBU 015 Unmarshal JSON: value is not a string: 256
2019-08-08 16:00:19.789 UTC [viperutil] getKeysRecursively -> DEBU 016 Found real value for peer.BCCSP.SW.Security setting to int 256
2019-08-08 16:00:19.790 UTC [viperutil] getKeysRecursively -> DEBU 017 Found map[string]interface{} value for peer.BCCSP.SW.FileKeyStore
2019-08-08 16:00:19.790 UTC [viperutil] unmarshalJSON -> DEBU 018 Unmarshal JSON: value cannot be unmarshalled: unexpected end of JSON input
2019-08-08 16:00:19.790 UTC [viperutil] getKeysRecursively -> DEBU 019 Found real value for peer.BCCSP.SW.FileKeyStore.KeyStore setting to string
2019-08-08 16:00:19.790 UTC [viperutil] EnhancedExactUnmarshalKey -> DEBU 01a map[peer.BCCSP:map[PKCS11:map[FileKeyStore:map[KeyStore:<nil>] Library:<nil> Label:<nil> Pin:<nil> Hash:<nil> Security:<nil>] Default:SW SW:map[Security:256 FileKeyStore:map[KeyStore:] Hash:SHA2]]]
2019-08-08 16:00:19.793 UTC [bccsp_sw] openKeyStore -> DEBU 01b KeyStore opened at [/etc/hyperledger/peer/msp/keystore]...done
2019-08-08 16:00:19.794 UTC [bccsp] initBCCSP -> DEBU 01c Initialize BCCSP [SW]
2019-08-08 16:00:19.794 UTC [msp] getPemMaterialFromDir -> DEBU 01d Reading directory /etc/hyperledger/peer/msp/signcerts
2019-08-08 16:00:19.797 UTC [msp] getPemMaterialFromDir -> DEBU 01e Inspecting file /etc/hyperledger/peer/msp/signcerts/peer0.org1.example.com-cert.pem
2019-08-08 16:00:19.798 UTC [msp] getPemMaterialFromDir -> DEBU 01f Reading directory /etc/hyperledger/peer/msp/cacerts
2019-08-08 16:00:19.801 UTC [msp] getPemMaterialFromDir -> DEBU 020 Inspecting file /etc/hyperledger/peer/msp/cacerts/ca.org1.example.com-cert.pem
2019-08-08 16:00:19.803 UTC [msp] getPemMaterialFromDir -> DEBU 021 Reading directory /etc/hyperledger/peer/msp/admincerts
2019-08-08 16:00:19.807 UTC [msp] getPemMaterialFromDir -> DEBU 022 Inspecting file /etc/hyperledger/peer/msp/admincerts/Admin@org1.example.com-cert.pem
2019-08-08 16:00:19.809 UTC [msp] getPemMaterialFromDir -> DEBU 023 Reading directory /etc/hyperledger/peer/msp/intermediatecerts
2019-08-08 16:00:19.809 UTC [msp] getMspConfig -> DEBU 024 Intermediate certs folder not found at [/etc/hyperledger/peer/msp/intermediatecerts]. Skipping. [stat /etc/hyperledger/peer/msp/intermediatecerts: no such file or directory]
2019-08-08 16:00:19.809 UTC [msp] getPemMaterialFromDir -> DEBU 025 Reading directory /etc/hyperledger/peer/msp/tlscacerts
2019-08-08 16:00:19.812 UTC [msp] getPemMaterialFromDir -> DEBU 026 Inspecting file /etc/hyperledger/peer/msp/tlscacerts/tlsca.org1.example.com-cert.pem
2019-08-08 16:00:19.814 UTC [msp] getPemMaterialFromDir -> DEBU 027 Reading directory /etc/hyperledger/peer/msp/tlsintermediatecerts
2019-08-08 16:00:19.815 UTC [msp] getMspConfig -> DEBU 028 TLS intermediate certs folder not found at [/etc/hyperledger/peer/msp/tlsintermediatecerts]. Skipping. [stat /etc/hyperledger/peer/msp/tlsintermediatecerts: no such file or directory]
2019-08-08 16:00:19.815 UTC [msp] getPemMaterialFromDir -> DEBU 029 Reading directory /etc/hyperledger/peer/msp/crls
2019-08-08 16:00:19.815 UTC [msp] getMspConfig -> DEBU 02a crls folder not found at [/etc/hyperledger/peer/msp/crls]. Skipping. [stat /etc/hyperledger/peer/msp/crls: no such file or directory]
2019-08-08 16:00:19.816 UTC [msp] getMspConfig -> DEBU 02b MSP configuration file not found at [/etc/hyperledger/peer/msp/config.yaml]: [stat /etc/hyperledger/peer/msp/config.yaml: no such file or directory]
2019-08-08 16:00:19.817 UTC [msp] newBccspMsp -> DEBU 02c Creating BCCSP-based MSP instance
2019-08-08 16:00:19.817 UTC [msp] New -> DEBU 02d Creating Cache-MSP instance
2019-08-08 16:00:19.817 UTC [msp] loadLocaMSP -> DEBU 02e Created new local MSP
2019-08-08 16:00:19.817 UTC [msp] Setup -> DEBU 02f Setting up MSP instance Org1MSP
2019-08-08 16:00:19.817 UTC [msp/identity] newIdentity -> DEBU 030 Creating identity instance for cert -----BEGIN CERTIFICATE-----
MIICQjCCAemgAwIBAgIQDJbOh88U+tlJ9He5sjUwBDAKBggqhkjOPQQDAjBzMQsw
CQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMNU2FuIEZy
YW5jaXNjbzEZMBcGA1UEChMQb3JnMS5leGFtcGxlLmNvbTEcMBoGA1UEAxMTY2Eu
b3JnMS5leGFtcGxlLmNvbTAeFw0xNzA2MjYxMjQ5MjZaFw0yNzA2MjQxMjQ5MjZa
MHMxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMRYwFAYDVQQHEw1T
YW4gRnJhbmNpc2NvMRkwFwYDVQQKExBvcmcxLmV4YW1wbGUuY29tMRwwGgYDVQQD
ExNjYS5vcmcxLmV4YW1wbGUuY29tMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE
kQ216YBD8kks+IzKJyBmdLqh/L/sEZ5twTqYpsK1ztNhIUDplsletAFOJQWRH+kb
hzFFNvS1qwveGRU6ztN5haNfMF0wDgYDVR0PAQH/BAQDAgGmMA8GA1UdJQQIMAYG
BFUdJQAwDwYDVR0TAQH/BAUwAwEB/zApBgNVHQ4EIgQgGatlq7sEgH2tEuTAqaqm
ZJ5who46vQIXoyLYnkfhpq4wCgYIKoZIzj0EAwIDRwAwRAIgCyrj/lUjtBYaEgMt
x98l5z+iLU6r+gp4CsdcDYzKLugCIGXlcU56avWSUtRAGn8Avpb6TOxtkrKIpeTE
QfM8VsS/
-----END CERTIFICATE-----
2019-08-08 16:00:19.818 UTC [msp/identity] newIdentity -> DEBU 031 Creating identity instance for cert -----BEGIN CERTIFICATE-----
MIICGjCCAcCgAwIBAgIRANuOnVN+yd/BGyoX7ioEklQwCgYIKoZIzj0EAwIwczEL
MAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG
cmFuY2lzY28xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh
Lm9yZzEuZXhhbXBsZS5jb20wHhcNMTcwNjI2MTI0OTI2WhcNMjcwNjI0MTI0OTI2
WjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN
U2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWQWRtaW5Ab3JnMS5leGFtcGxlLmNvbTBZ
MBMGByqGSM49AgEGCCqGSM49AwEHA0IABGu8KxBQ1GkxSTMVoLv7NXiYKWj5t6Dh
WRTJBHnLkWV7lRUfYaKAKFadSii5M7Z7ZpwD8NS7IsMdPR6Z4EyGgwKjTTBLMA4G
A1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIBmrZau7BIB9
rRLkwKmqpmSecIaOOr0CF6Mi2J5H4aauMAoGCCqGSM49BAMCA0gAMEUCIQC4sKQ6
CEgqbTYe48az95W9/hnZ+7DI5eSnWUwV9vCd/gIgS5K6omNJydoFoEpaEIwM97uS
XVMHPa0iyC497vdNURA=
-----END CERTIFICATE-----
2019-08-08 16:00:19.831 UTC [msp/identity] newIdentity -> DEBU 032 Creating identity instance for cert -----BEGIN CERTIFICATE-----
MIICGTCCAb+gAwIBAgIQTx2TvwYtAf62KKQliP6UoTAKBggqhkjOPQQDAjBzMQsw
CQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMNU2FuIEZy
YW5jaXNjbzEZMBcGA1UEChMQb3JnMS5leGFtcGxlLmNvbTEcMBoGA1UEAxMTY2Eu
b3JnMS5leGFtcGxlLmNvbTAeFw0xNzA2MjYxMjQ5MjZaFw0yNzA2MjQxMjQ5MjZa
MFsxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMRYwFAYDVQQHEw1T
YW4gRnJhbmNpc2NvMR8wHQYDVQQDExZwZWVyMC5vcmcxLmV4YW1wbGUuY29tMFkw
EwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEPPHUp7+EYb2xIbleWfRClMgqbtQqRmIS
2a5F8T0L3J6IZp9wm7K+w4LIBIgw1Cz9D8nqHW6f4OYBrbp0cSGnR6NNMEswDgYD
VR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQCMAAwKwYDVR0jBCQwIoAgGatlq7sEgH2t
EuTAqaqmZJ5who46vQIXoyLYnkfhpq4wCgYIKoZIzj0EAwIDSAAwRQIhAK4i2Hz2
K398TvjJk62neDoenYhkMY7rBN3BN/GI0G0SAiAOTx36wuy9/4BBV8NVBCZ9V+Iw
msdI9CyZ59oVMVmNYQ==
-----END CERTIFICATE-----
2019-08-08 16:00:19.836 UTC [bccsp_sw] loadPrivateKey -> DEBU 033 Loading private key [dfb17cf51dc061d585b4850599be0e4b8b7cc8cc363a67c23bc03c6c5393b0e0] at [/etc/hyperledger/peer/msp/keystore/dfb17cf51dc061d585b4850599be0e4b8b7cc8cc363a67c23bc03c6c5393b0e0_sk]...
2019-08-08 16:00:19.839 UTC [msp/identity] newIdentity -> DEBU 034 Creating identity instance for cert -----BEGIN CERTIFICATE-----
MIICGTCCAb+gAwIBAgIQTx2TvwYtAf62KKQliP6UoTAKBggqhkjOPQQDAjBzMQsw
CQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMNU2FuIEZy
YW5jaXNjbzEZMBcGA1UEChMQb3JnMS5leGFtcGxlLmNvbTEcMBoGA1UEAxMTY2Eu
b3JnMS5leGFtcGxlLmNvbTAeFw0xNzA2MjYxMjQ5MjZaFw0yNzA2MjQxMjQ5MjZa
MFsxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMRYwFAYDVQQHEw1T
YW4gRnJhbmNpc2NvMR8wHQYDVQQDExZwZWVyMC5vcmcxLmV4YW1wbGUuY29tMFkw
EwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEPPHUp7+EYb2xIbleWfRClMgqbtQqRmIS
2a5F8T0L3J6IZp9wm7K+w4LIBIgw1Cz9D8nqHW6f4OYBrbp0cSGnR6NNMEswDgYD
VR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQCMAAwKwYDVR0jBCQwIoAgGatlq7sEgH2t
EuTAqaqmZJ5who46vQIXoyLYnkfhpq4wCgYIKoZIzj0EAwIDSAAwRQIhAK4i2Hz2
K398TvjJk62neDoenYhkMY7rBN3BN/GI0G0SAiAOTx36wuy9/4BBV8NVBCZ9V+Iw
msdI9CyZ59oVMVmNYQ==
-----END CERTIFICATE-----
2019-08-08 16:00:19.840 UTC [msp] setupSigningIdentity -> DEBU 035 Signing identity expires at 2027-06-24 12:49:26 +0000 UTC
2019-08-08 16:00:19.841 UTC [msp] Validate -> DEBU 036 MSP Org1MSP validating identity
2019-08-08 16:00:19.841 UTC [msp] GetDefaultSigningIdentity -> DEBU 037 Obtaining default signing identity
2019-08-08 16:00:19.842 UTC [grpc] Printf -> DEBU 038 parsed scheme: ""
2019-08-08 16:00:19.842 UTC [grpc] Printf -> DEBU 039 scheme "" not registered, fallback to default scheme
2019-08-08 16:00:19.842 UTC [grpc] Printf -> DEBU 03a ccResolverWrapper: sending new addresses to cc: [{orderer.example.com:7050 0  <nil>}]
2019-08-08 16:00:19.842 UTC [grpc] Printf -> DEBU 03b ClientConn switching balancer to "pick_first"
2019-08-08 16:00:19.842 UTC [grpc] Printf -> DEBU 03c pickfirstBalancer: HandleSubConnStateChange: 0xc4201b8100, CONNECTING
2019-08-08 16:00:19.845 UTC [grpc] Printf -> DEBU 03d pickfirstBalancer: HandleSubConnStateChange: 0xc4201b8100, READY
2019-08-08 16:00:19.845 UTC [channelCmd] InitCmdFactory -> INFO 03e Endorser and orderer connections initialized
2019-08-08 16:00:19.854 UTC [msp] GetDefaultSigningIdentity -> DEBU 03f Obtaining default signing identity
2019-08-08 16:00:19.854 UTC [msp] GetDefaultSigningIdentity -> DEBU 040 Obtaining default signing identity
2019-08-08 16:00:19.854 UTC [msp/identity] Sign -> DEBU 041 Sign: plaintext: 0AA2060A074F7267314D53501296062D...6D706F736572436F6E736F727469756D
2019-08-08 16:00:19.854 UTC [msp/identity] Sign -> DEBU 042 Sign: digest: 20E041948E4362FE4F2EACF3981505D8D07E44E6B970F85F1F5B3873CBBF3B42
2019-08-08 16:00:19.854 UTC [msp] GetDefaultSigningIdentity -> DEBU 043 Obtaining default signing identity
2019-08-08 16:00:19.854 UTC [msp] GetDefaultSigningIdentity -> DEBU 044 Obtaining default signing identity
2019-08-08 16:00:19.854 UTC [msp/identity] Sign -> DEBU 045 Sign: plaintext: 0ADF060A1B08021A0608938EB1EA0522...270F43FD66DA4445BA54A8BAF5E90F19
2019-08-08 16:00:19.854 UTC [msp/identity] Sign -> DEBU 046 Sign: digest: 80350F705E0F4FFC574A7690A2D02F7598CD5A613188FA65664829D3A3228D88
2019-08-08 16:00:19.854 UTC [grpc] Printf -> DEBU 047 parsed scheme: ""
2019-08-08 16:00:19.854 UTC [grpc] Printf -> DEBU 048 scheme "" not registered, fallback to default scheme
2019-08-08 16:00:19.854 UTC [grpc] Printf -> DEBU 049 ccResolverWrapper: sending new addresses to cc: [{orderer.example.com:7050 0  <nil>}]
2019-08-08 16:00:19.854 UTC [grpc] Printf -> DEBU 04a ClientConn switching balancer to "pick_first"
2019-08-08 16:00:19.854 UTC [grpc] Printf -> DEBU 04b pickfirstBalancer: HandleSubConnStateChange: 0xc4201b8a50, CONNECTING
2019-08-08 16:00:19.856 UTC [grpc] Printf -> DEBU 04c pickfirstBalancer: HandleSubConnStateChange: 0xc4201b8a50, READY
2019-08-08 16:00:19.898 UTC [msp] GetDefaultSigningIdentity -> DEBU 04d Obtaining default signing identity
2019-08-08 16:00:19.898 UTC [msp] GetDefaultSigningIdentity -> DEBU 04e Obtaining default signing identity
2019-08-08 16:00:19.898 UTC [msp/identity] Sign -> DEBU 04f Sign: plaintext: 0ADF060A1B08051A0608938EB1EA0522...39123B8E154E12080A021A0012021A00
2019-08-08 16:00:19.898 UTC [msp/identity] Sign -> DEBU 050 Sign: digest: B75FE02CB304AB812FF845AAAFFCADF3537E341EA1471C2A070A2D299BE629B3
2019-08-08 16:00:19.899 UTC [cli/common] readBlock -> INFO 051 Got status: &{NOT_FOUND}
2019-08-08 16:00:19.899 UTC [msp] GetDefaultSigningIdentity -> DEBU 052 Obtaining default signing identity
2019-08-08 16:00:19.900 UTC [grpc] Printf -> DEBU 053 parsed scheme: ""
2019-08-08 16:00:19.901 UTC [grpc] Printf -> DEBU 054 scheme "" not registered, fallback to default scheme
2019-08-08 16:00:19.901 UTC [grpc] Printf -> DEBU 055 ccResolverWrapper: sending new addresses to cc: [{orderer.example.com:7050 0  <nil>}]
2019-08-08 16:00:19.901 UTC [grpc] Printf -> DEBU 056 ClientConn switching balancer to "pick_first"
2019-08-08 16:00:19.902 UTC [grpc] Printf -> DEBU 057 pickfirstBalancer: HandleSubConnStateChange: 0xc420292a30, CONNECTING
2019-08-08 16:00:19.904 UTC [grpc] Printf -> DEBU 058 pickfirstBalancer: HandleSubConnStateChange: 0xc420292a30, READY
2019-08-08 16:00:19.904 UTC [channelCmd] InitCmdFactory -> INFO 059 Endorser and orderer connections initialized
2019-08-08 16:00:20.106 UTC [msp] GetDefaultSigningIdentity -> DEBU 05a Obtaining default signing identity
2019-08-08 16:00:20.106 UTC [msp] GetDefaultSigningIdentity -> DEBU 05b Obtaining default signing identity
2019-08-08 16:00:20.106 UTC [msp/identity] Sign -> DEBU 05c Sign: plaintext: 0ADF060A1B08051A0608948EB1EA0522...582B6059659812080A021A0012021A00
2019-08-08 16:00:20.106 UTC [msp/identity] Sign -> DEBU 05d Sign: digest: 3601D38241C5F5DBAA5A14820242D013E48A0627D463650A3567913376E7EEF9
2019-08-08 16:00:20.114 UTC [cli/common] readBlock -> INFO 05e Received block: 0
2019-08-08 16:00:20.393 UTC [viperutil] getKeysRecursively -> DEBU 001 Found map[string]interface{} value for peer.BCCSP
2019-08-08 16:00:20.393 UTC [viperutil] unmarshalJSON -> DEBU 002 Unmarshal JSON: value cannot be unmarshalled: invalid character 'S' looking for beginning of value
2019-08-08 16:00:20.393 UTC [viperutil] getKeysRecursively -> DEBU 003 Found real value for peer.BCCSP.Default setting to string SW
2019-08-08 16:00:20.394 UTC [viperutil] getKeysRecursively -> DEBU 004 Found map[string]interface{} value for peer.BCCSP.SW
2019-08-08 16:00:20.394 UTC [viperutil] unmarshalJSON -> DEBU 005 Unmarshal JSON: value is not a string: 256
2019-08-08 16:00:20.394 UTC [viperutil] getKeysRecursively -> DEBU 006 Found real value for peer.BCCSP.SW.Security setting to int 256
2019-08-08 16:00:20.394 UTC [viperutil] getKeysRecursively -> DEBU 007 Found map[string]interface{} value for peer.BCCSP.SW.FileKeyStore
2019-08-08 16:00:20.394 UTC [viperutil] unmarshalJSON -> DEBU 008 Unmarshal JSON: value cannot be unmarshalled: unexpected end of JSON input
2019-08-08 16:00:20.394 UTC [viperutil] getKeysRecursively -> DEBU 009 Found real value for peer.BCCSP.SW.FileKeyStore.KeyStore setting to string
2019-08-08 16:00:20.395 UTC [viperutil] unmarshalJSON -> DEBU 00a Unmarshal JSON: value cannot be unmarshalled: invalid character 'S' looking for beginning of value
2019-08-08 16:00:20.395 UTC [viperutil] getKeysRecursively -> DEBU 00b Found real value for peer.BCCSP.SW.Hash setting to string SHA2
2019-08-08 16:00:20.395 UTC [viperutil] getKeysRecursively -> DEBU 00c Found map[string]interface{} value for peer.BCCSP.PKCS11
2019-08-08 16:00:20.395 UTC [viperutil] getKeysRecursively -> DEBU 00d Found map[string]interface{} value for peer.BCCSP.PKCS11.FileKeyStore
2019-08-08 16:00:20.396 UTC [viperutil] unmarshalJSON -> DEBU 00e Unmarshal JSON: value is not a string: <nil>
2019-08-08 16:00:20.396 UTC [viperutil] getKeysRecursively -> DEBU 00f Found real value for peer.BCCSP.PKCS11.FileKeyStore.KeyStore setting to <nil> <nil>
2019-08-08 16:00:20.396 UTC [viperutil] unmarshalJSON -> DEBU 010 Unmarshal JSON: value is not a string: <nil>
2019-08-08 16:00:20.397 UTC [viperutil] getKeysRecursively -> DEBU 011 Found real value for peer.BCCSP.PKCS11.Library setting to <nil> <nil>
2019-08-08 16:00:20.397 UTC [viperutil] unmarshalJSON -> DEBU 012 Unmarshal JSON: value is not a string: <nil>
2019-08-08 16:00:20.397 UTC [viperutil] getKeysRecursively -> DEBU 013 Found real value for peer.BCCSP.PKCS11.Label setting to <nil> <nil>
2019-08-08 16:00:20.398 UTC [viperutil] unmarshalJSON -> DEBU 014 Unmarshal JSON: value is not a string: <nil>
2019-08-08 16:00:20.398 UTC [viperutil] getKeysRecursively -> DEBU 015 Found real value for peer.BCCSP.PKCS11.Pin setting to <nil> <nil>
2019-08-08 16:00:20.398 UTC [viperutil] unmarshalJSON -> DEBU 016 Unmarshal JSON: value is not a string: <nil>
2019-08-08 16:00:20.399 UTC [viperutil] getKeysRecursively -> DEBU 017 Found real value for peer.BCCSP.PKCS11.Hash setting to <nil> <nil>
2019-08-08 16:00:20.399 UTC [viperutil] unmarshalJSON -> DEBU 018 Unmarshal JSON: value is not a string: <nil>
2019-08-08 16:00:20.399 UTC [viperutil] getKeysRecursively -> DEBU 019 Found real value for peer.BCCSP.PKCS11.Security setting to <nil> <nil>
2019-08-08 16:00:20.399 UTC [viperutil] EnhancedExactUnmarshalKey -> DEBU 01a map[peer.BCCSP:map[Default:SW SW:map[Security:256 FileKeyStore:map[KeyStore:] Hash:SHA2] PKCS11:map[FileKeyStore:map[KeyStore:<nil>] Library:<nil> Label:<nil> Pin:<nil> Hash:<nil> Security:<nil>]]]
2019-08-08 16:00:20.402 UTC [bccsp_sw] openKeyStore -> DEBU 01b KeyStore opened at [/etc/hyperledger/msp/users/Admin@org1.example.com/msp/keystore]...done
2019-08-08 16:00:20.402 UTC [bccsp] initBCCSP -> DEBU 01c Initialize BCCSP [SW]
2019-08-08 16:00:20.402 UTC [msp] getPemMaterialFromDir -> DEBU 01d Reading directory /etc/hyperledger/msp/users/Admin@org1.example.com/msp/signcerts
2019-08-08 16:00:20.406 UTC [msp] getPemMaterialFromDir -> DEBU 01e Inspecting file /etc/hyperledger/msp/users/Admin@org1.example.com/msp/signcerts/Admin@org1.example.com-cert.pem
2019-08-08 16:00:20.414 UTC [msp] getPemMaterialFromDir -> DEBU 01f Reading directory /etc/hyperledger/msp/users/Admin@org1.example.com/msp/cacerts
2019-08-08 16:00:20.417 UTC [msp] getPemMaterialFromDir -> DEBU 020 Inspecting file /etc/hyperledger/msp/users/Admin@org1.example.com/msp/cacerts/ca.org1.example.com-cert.pem
2019-08-08 16:00:20.419 UTC [msp] getPemMaterialFromDir -> DEBU 021 Reading directory /etc/hyperledger/msp/users/Admin@org1.example.com/msp/admincerts
2019-08-08 16:00:20.423 UTC [msp] getPemMaterialFromDir -> DEBU 022 Inspecting file /etc/hyperledger/msp/users/Admin@org1.example.com/msp/admincerts/Admin@org1.example.com-cert.pem
2019-08-08 16:00:20.425 UTC [msp] getPemMaterialFromDir -> DEBU 023 Reading directory /etc/hyperledger/msp/users/Admin@org1.example.com/msp/intermediatecerts
2019-08-08 16:00:20.426 UTC [msp] getMspConfig -> DEBU 024 Intermediate certs folder not found at [/etc/hyperledger/msp/users/Admin@org1.example.com/msp/intermediatecerts]. Skipping. [stat /etc/hyperledger/msp/users/Admin@org1.example.com/msp/intermediatecerts: no such file or directory]
2019-08-08 16:00:20.426 UTC [msp] getPemMaterialFromDir -> DEBU 025 Reading directory /etc/hyperledger/msp/users/Admin@org1.example.com/msp/tlscacerts
2019-08-08 16:00:20.429 UTC [msp] getPemMaterialFromDir -> DEBU 026 Inspecting file /etc/hyperledger/msp/users/Admin@org1.example.com/msp/tlscacerts/tlsca.org1.example.com-cert.pem
2019-08-08 16:00:20.431 UTC [msp] getPemMaterialFromDir -> DEBU 027 Reading directory /etc/hyperledger/msp/users/Admin@org1.example.com/msp/tlsintermediatecerts
2019-08-08 16:00:20.432 UTC [msp] getMspConfig -> DEBU 028 TLS intermediate certs folder not found at [/etc/hyperledger/msp/users/Admin@org1.example.com/msp/tlsintermediatecerts]. Skipping. [stat /etc/hyperledger/msp/users/Admin@org1.example.com/msp/tlsintermediatecerts: no such file or directory]
2019-08-08 16:00:20.432 UTC [msp] getPemMaterialFromDir -> DEBU 029 Reading directory /etc/hyperledger/msp/users/Admin@org1.example.com/msp/crls
2019-08-08 16:00:20.432 UTC [msp] getMspConfig -> DEBU 02a crls folder not found at [/etc/hyperledger/msp/users/Admin@org1.example.com/msp/crls]. Skipping. [stat /etc/hyperledger/msp/users/Admin@org1.example.com/msp/crls: no such file or directory]
2019-08-08 16:00:20.433 UTC [msp] getMspConfig -> DEBU 02b MSP configuration file not found at [/etc/hyperledger/msp/users/Admin@org1.example.com/msp/config.yaml]: [stat /etc/hyperledger/msp/users/Admin@org1.example.com/msp/config.yaml: no such file or directory]
2019-08-08 16:00:20.433 UTC [msp] newBccspMsp -> DEBU 02c Creating BCCSP-based MSP instance
2019-08-08 16:00:20.433 UTC [msp] New -> DEBU 02d Creating Cache-MSP instance
2019-08-08 16:00:20.433 UTC [msp] loadLocaMSP -> DEBU 02e Created new local MSP
2019-08-08 16:00:20.433 UTC [msp] Setup -> DEBU 02f Setting up MSP instance Org1MSP
2019-08-08 16:00:20.434 UTC [msp/identity] newIdentity -> DEBU 030 Creating identity instance for cert -----BEGIN CERTIFICATE-----
MIICQjCCAemgAwIBAgIQDJbOh88U+tlJ9He5sjUwBDAKBggqhkjOPQQDAjBzMQsw
CQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMNU2FuIEZy
YW5jaXNjbzEZMBcGA1UEChMQb3JnMS5leGFtcGxlLmNvbTEcMBoGA1UEAxMTY2Eu
b3JnMS5leGFtcGxlLmNvbTAeFw0xNzA2MjYxMjQ5MjZaFw0yNzA2MjQxMjQ5MjZa
MHMxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMRYwFAYDVQQHEw1T
YW4gRnJhbmNpc2NvMRkwFwYDVQQKExBvcmcxLmV4YW1wbGUuY29tMRwwGgYDVQQD
ExNjYS5vcmcxLmV4YW1wbGUuY29tMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE
kQ216YBD8kks+IzKJyBmdLqh/L/sEZ5twTqYpsK1ztNhIUDplsletAFOJQWRH+kb
hzFFNvS1qwveGRU6ztN5haNfMF0wDgYDVR0PAQH/BAQDAgGmMA8GA1UdJQQIMAYG
BFUdJQAwDwYDVR0TAQH/BAUwAwEB/zApBgNVHQ4EIgQgGatlq7sEgH2tEuTAqaqm
ZJ5who46vQIXoyLYnkfhpq4wCgYIKoZIzj0EAwIDRwAwRAIgCyrj/lUjtBYaEgMt
x98l5z+iLU6r+gp4CsdcDYzKLugCIGXlcU56avWSUtRAGn8Avpb6TOxtkrKIpeTE
QfM8VsS/
-----END CERTIFICATE-----
2019-08-08 16:00:20.434 UTC [msp/identity] newIdentity -> DEBU 031 Creating identity instance for cert -----BEGIN CERTIFICATE-----
MIICGjCCAcCgAwIBAgIRANuOnVN+yd/BGyoX7ioEklQwCgYIKoZIzj0EAwIwczEL
MAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG
cmFuY2lzY28xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh
Lm9yZzEuZXhhbXBsZS5jb20wHhcNMTcwNjI2MTI0OTI2WhcNMjcwNjI0MTI0OTI2
WjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN
U2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWQWRtaW5Ab3JnMS5leGFtcGxlLmNvbTBZ
MBMGByqGSM49AgEGCCqGSM49AwEHA0IABGu8KxBQ1GkxSTMVoLv7NXiYKWj5t6Dh
WRTJBHnLkWV7lRUfYaKAKFadSii5M7Z7ZpwD8NS7IsMdPR6Z4EyGgwKjTTBLMA4G
A1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIBmrZau7BIB9
rRLkwKmqpmSecIaOOr0CF6Mi2J5H4aauMAoGCCqGSM49BAMCA0gAMEUCIQC4sKQ6
CEgqbTYe48az95W9/hnZ+7DI5eSnWUwV9vCd/gIgS5K6omNJydoFoEpaEIwM97uS
XVMHPa0iyC497vdNURA=
-----END CERTIFICATE-----
2019-08-08 16:00:20.448 UTC [msp/identity] newIdentity -> DEBU 032 Creating identity instance for cert -----BEGIN CERTIFICATE-----
MIICGjCCAcCgAwIBAgIRANuOnVN+yd/BGyoX7ioEklQwCgYIKoZIzj0EAwIwczEL
MAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG
cmFuY2lzY28xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh
Lm9yZzEuZXhhbXBsZS5jb20wHhcNMTcwNjI2MTI0OTI2WhcNMjcwNjI0MTI0OTI2
WjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN
U2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWQWRtaW5Ab3JnMS5leGFtcGxlLmNvbTBZ
MBMGByqGSM49AgEGCCqGSM49AwEHA0IABGu8KxBQ1GkxSTMVoLv7NXiYKWj5t6Dh
WRTJBHnLkWV7lRUfYaKAKFadSii5M7Z7ZpwD8NS7IsMdPR6Z4EyGgwKjTTBLMA4G
A1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIBmrZau7BIB9
rRLkwKmqpmSecIaOOr0CF6Mi2J5H4aauMAoGCCqGSM49BAMCA0gAMEUCIQC4sKQ6
CEgqbTYe48az95W9/hnZ+7DI5eSnWUwV9vCd/gIgS5K6omNJydoFoEpaEIwM97uS
XVMHPa0iyC497vdNURA=
-----END CERTIFICATE-----
2019-08-08 16:00:20.452 UTC [bccsp_sw] loadPrivateKey -> DEBU 033 Loading private key [114aab0e76bf0c78308f89efc4b8c9423e31568da0c340ca187a9b17aa9a4457] at [/etc/hyperledger/msp/users/Admin@org1.example.com/msp/keystore/114aab0e76bf0c78308f89efc4b8c9423e31568da0c340ca187a9b17aa9a4457_sk]...
2019-08-08 16:00:20.455 UTC [msp/identity] newIdentity -> DEBU 034 Creating identity instance for cert -----BEGIN CERTIFICATE-----
MIICGjCCAcCgAwIBAgIRANuOnVN+yd/BGyoX7ioEklQwCgYIKoZIzj0EAwIwczEL
MAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG
cmFuY2lzY28xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh
Lm9yZzEuZXhhbXBsZS5jb20wHhcNMTcwNjI2MTI0OTI2WhcNMjcwNjI0MTI0OTI2
WjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN
U2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWQWRtaW5Ab3JnMS5leGFtcGxlLmNvbTBZ
MBMGByqGSM49AgEGCCqGSM49AwEHA0IABGu8KxBQ1GkxSTMVoLv7NXiYKWj5t6Dh
WRTJBHnLkWV7lRUfYaKAKFadSii5M7Z7ZpwD8NS7IsMdPR6Z4EyGgwKjTTBLMA4G
A1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIBmrZau7BIB9
rRLkwKmqpmSecIaOOr0CF6Mi2J5H4aauMAoGCCqGSM49BAMCA0gAMEUCIQC4sKQ6
CEgqbTYe48az95W9/hnZ+7DI5eSnWUwV9vCd/gIgS5K6omNJydoFoEpaEIwM97uS
XVMHPa0iyC497vdNURA=
-----END CERTIFICATE-----
2019-08-08 16:00:20.455 UTC [msp] setupSigningIdentity -> DEBU 035 Signing identity expires at 2027-06-24 12:49:26 +0000 UTC
2019-08-08 16:00:20.455 UTC [msp] Validate -> DEBU 036 MSP Org1MSP validating identity
2019-08-08 16:00:20.456 UTC [msp] GetDefaultSigningIdentity -> DEBU 037 Obtaining default signing identity
2019-08-08 16:00:20.456 UTC [grpc] Printf -> DEBU 038 parsed scheme: ""
2019-08-08 16:00:20.456 UTC [grpc] Printf -> DEBU 039 scheme "" not registered, fallback to default scheme
2019-08-08 16:00:20.457 UTC [grpc] Printf -> DEBU 03a ccResolverWrapper: sending new addresses to cc: [{peer0.org1.example.com:7051 0  <nil>}]
2019-08-08 16:00:20.457 UTC [grpc] Printf -> DEBU 03b ClientConn switching balancer to "pick_first"
2019-08-08 16:00:20.457 UTC [grpc] Printf -> DEBU 03c pickfirstBalancer: HandleSubConnStateChange: 0xc4203c0470, CONNECTING
2019-08-08 16:00:20.461 UTC [grpc] Printf -> DEBU 03d pickfirstBalancer: HandleSubConnStateChange: 0xc4203c0470, READY
2019-08-08 16:00:20.461 UTC [channelCmd] InitCmdFactory -> INFO 03e Endorser and orderer connections initialized
2019-08-08 16:00:20.461 UTC [msp/identity] Sign -> DEBU 03f Sign: plaintext: 0AA0070A5C08011A0C08948EB1EA0510...2D3DD284446B1A080A000A000A000A00
2019-08-08 16:00:20.461 UTC [msp/identity] Sign -> DEBU 040 Sign: digest: CCFB398DD28D0DAFD471FCD58B6EB2D371092322E5FD2E1AC2DA0A8301D2C7DB
2019-08-08 16:00:20.598 UTC [channelCmd] executeJoin -> INFO 041 Successfully submitted proposal to join channel

  ~/fabric-dev-servers 
 ```
