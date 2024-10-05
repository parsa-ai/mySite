import time
import random 

random.seed(1)
ls = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', ',', '!', '_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
x = '' 
y = ''
print('')

print('@Parsaalavi.ir')
print('')
for k in 'Hello, World!':
    ran = random.choice(ls)
    while k.capitalize() != ran.capitalize() :
        x = y
        ran = random.choice(ls)
        x += ran
        print("\r" * len(x) + x , end='')
        time.sleep(0.04)
    y +=k

print('')
print('')
print('')
print('')
