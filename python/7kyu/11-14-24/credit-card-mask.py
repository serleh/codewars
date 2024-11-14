# Usually when you buy something, you're asked whether your credit card number, phone number or answer to
# your most secret question is still correct. 
# However, since someone could look over your shoulder, 
# you don't want that shown on your screen. Instead, we mask it.

# Your task is to write a function maskify, which changes all but the last four characters into '#'.

# Examples (input --> output):
# "4556364607935616" --> "############5616"
#      "64607935616" -->      "#######5616"
#                "1" -->                "1"
#                 "" -->                 ""


# STEPS 
# 1. A function that accept a string
# 2. Split the string to a list
# 3. replace all but the last four element to # 
#4.  return the list in to a str and return it

# def maskify(str):
#     to_list = [char for char in str]
#     last_f = to_list[-4:]
#     remain = to_list[:-4]
#     masked = [char.replace(char,'#') for char in remain] + last_f

#     return ''.join(masked) 


# Simplified version 

# Accept a string and turn it to list
# Loop throught the list and change all but the last 4 to # 
# Join the list to a str

def maskify(str):
    words = list(str)
    
    for i in range(len(words) -4):
        words[i] = '#'
    return ''.join(words)


print(maskify('Saleh Abdullahi'))