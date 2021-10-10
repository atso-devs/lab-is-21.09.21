l_cyrillic = ''.join(map(chr, range(ord('a'), ord('z') + 1)))
u_cyrillic = ''.join(map(chr, range(ord('A'), ord('Z') + 1)))


def alphabet(shift):
    return l_cyrillic[shift:] + \
           l_cyrillic[:shift] + \
           u_cyrillic[shift:] + \
           u_cyrillic[:shift]


def caesar_cipher(shift, typ="enc"):
    a1 = l_cyrillic + u_cyrillic
    a2 = alphabet(shift)

    t = {
        "enc": str.maketrans(a1, a2),
        "dec": str.maketrans(a2, a1)
    }

    return t[typ]


print('Example: ')
print("Hello world!".translate(caesar_cipher(3, 'enc')))
print("Khoor zruog!".translate(caesar_cipher(3, 'dec')))

shift = int(input('Enter shift: '))
enc_text = input('Input text for encrypt: ')
print('Result: ', enc_text.translate(caesar_cipher(shift, 'enc')))
enc_text = input('Input text for decrypt: ')
print('Result: ', enc_text.translate(caesar_cipher(shift, 'dec')))

# text from file
with open("lab3_enc-text.txt") as file:
    enc_text = file.read()
    print('Result from enc-file: ', enc_text.translate(caesar_cipher(shift, 'enc')))
    file.close()

with open("lab3_dec-text.txt") as file:
    dec_text = file.read()
    print('Result from dec-file: ', dec_text.translate(caesar_cipher(shift, 'dec')))
    file.close()
