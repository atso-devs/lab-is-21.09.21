import rsa

(pubkey, privkey) = rsa.newkeys(512)

message = input('Enter message for encrypt:').encode('utf8')

crypto = rsa.encrypt(message, pubkey)
message = rsa.decrypt(crypto, privkey)

print('Encoded message:', crypto)
print('Decoded message: ', message.decode('utf8'))
