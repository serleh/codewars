# Task
# Create a function that always returns True/true for every item in a given list.
# However, if an element is the word 'flick', switch to always returning the opposite boolean value.

# Examples
# ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

# ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

# ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
# Testing
def flick_switch(lst):
    list=[]
    is_flick=True

    for i in lst:
        if i =='flick':
            list.append(not is_flick)
            is_flick = not is_flick
        else:
            list.append(is_flick)
    return list

print(flick_switch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))
