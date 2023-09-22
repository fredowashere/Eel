import eel

eel.init('web') # Give folder containing web files

@eel.expose # Expose this function to Javascript
def print_on_python(x):
    print('%s' % x)

eel.printOnJs('Hello from Python!') # Call a Javascript function
eel.setEnv('dev')

eel.start('index.html', size=(1024, 768), position=(200, 150)) # Start
