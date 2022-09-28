import os
os.system("CLS")

uitlezen = input("tik een getal:\n")
getal = int(uitlezen)
print("")
for i in range(10):
	print(str(i+1) + ' * ' + str(uitlezen) + ' = ' + str((i+1)*getal))

	