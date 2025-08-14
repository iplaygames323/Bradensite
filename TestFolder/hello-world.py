import time

helloWorld = "hello world"

lowercase = "abcdefghijklmnopqrstuvwxyz "
found = ""

for letter in helloWorld:
  for char in lowercase: 
      print(found + char)
      time.sleep(.07)
      if letter == char: 
          found += char
          break
