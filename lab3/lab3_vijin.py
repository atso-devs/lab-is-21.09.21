from pycipher import Vigenere

enc_text = input('Enter text for encrypt: ')
key = input('Enter keyword: ')
text = Vigenere(key=key)
print('Encrypted text: ', text.encipher(enc_text))

key = input('Enter keyword: ')
text = Vigenere(key=key)
dec_text = input('Enter text for decrypt: ')
print('Decrypted text: ', text.decipher(dec_text))
