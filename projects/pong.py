import turtle as t
import os

playerAscore = 0
playerBscore = 0

# create a window and declare a variable window and call the screen()
window = t.Screen()
window.title("The Pong Game")
window.bgcolor('green')
window.setup(width=800, height=600)
window.tracer(0)

# creating the left paddle
leftpaddle = t.Turtle()
leftpaddle.speed(0)
leftpaddle.shape("square")
leftpaddle.color("white")
leftpaddle.shapesize(stretch_wid=5,stretch_len=1)
leftpaddle.penup()
leftpaddle.goto(-350,0)

# creating the right paddle
rightpaddle = t.Turtle()
rightpaddle.speed(0)
rightpaddle.shape('square')
rightpaddle.color("white")
rightpaddle.shapesize(stretch_wid=5, stretch_len=1)
rightpaddle.penup()
rightpaddle.goto(350,0)

# code for creating the ball
ball = t.Turtle()
ball.speed(100)
ball.shape("circle")
ball.color("red")
ball.penup()
ball.goto(-50,-50)
ballxdirection = 0.2
ballydirection = 0.2

# code for creating pen for scorecard update
pen = t.Turtle()
pen.speed(2)
pen.color("blue")
pen.penup()
pen.hideturtle()
pen.goto(0,260)
pen.write("score", align="center", font=('Arial', 24, 'normal'))

# code for moving left paddle
def leftpaddleup():
    y = leftpaddle.ycor()
    y = y + 90
    leftpaddle.sety(y)

def leftpaddledown():
    y = leftpaddle.ycor()
    y = y - 90
    leftpaddle.sety(y)

# for right paddle
def rightpaddleup():
    y = rightpaddle.ycor()
    y = y + 90
    rightpaddle.sety(y)

def rightpaddledown():
    y = rightpaddle.ycor()
    y = y - 90
    rightpaddle.sety(y)

# assign keys to play
window.listen()
window.onkeypress(leftpaddleup,'w')
window.onkeypress(leftpaddledown,'s')
window.onkeypress(rightpaddleup,'Up')
window.onkeypress(rightpaddledown,'Down')

def quit():
    global running
    running = False

def play_again():
    window.update()


    
    playerAscore = 0
    playerBscore = 0
    window.update()
    running = True

window.onkeypress(quit, "q")
window.onkeypress(play_again, "p")

running = True

while running:
    window.update()

    # moving the ball
    ball.setx(ball.xcor()+ballxdirection)
    ball.sety(ball.ycor()+ballydirection)

    # border setup
    if ball.ycor() > 290:
        ball.sety(290)
        ballydirection = ballydirection*-1    
    if ball.ycor() < -290:
        ball.sety(-290)
        ballydirection = ballydirection*-1

    if ball.xcor() > 390:
        ball.goto(0,0)
        ballxdirection = ballxdirection * -1
        playerAscore = playerAscore + 1
        pen.clear()
        pen.write("Player A: {}                 Player B: {} ".format(playerAscore, playerBscore), align="center", font=('Monaco', 24, 'normal'))
        #os.system("afplay wallhit.wav&")

    if ball.xcor() < -390:
        ball.goto(0,0)
        ballxdirection = ballxdirection * -1
        playerBscore = playerBscore + 1
        pen.clear()
        pen.write("Player A: {}                 Player B: {} ".format(playerAscore, playerBscore), align="center", font=('Monaco', 24, 'normal'))
        #os.system("afplay wallhit.wav&")

    # Handlind the collisions with paddles
    if (ball.xcor() > 340) and (ball.xcor() < 350) and (ball.ycor() < rightpaddle.ycor() + 40 and ball.ycor() > rightpaddle.ycor() - 40):
        ball.setx(340)
        ballxdirection = ballxdirection * -1
        #os.system("afplay paddle.wav&")

    if(ball.xcor() < -340) and (ball.xcor() > -350) and (ball.ycor() < leftpaddle.ycor() + 40 and ball.ycor() > leftpaddle.ycor() - 40):
        ball.setx(-340)
        ballxdirection = ballxdirection * -1
        #os.system("afplay paddle.wav&")

    if playerAscore >= 2:
        pen.clear
        pen.write("Winner: Player B \n\nClick 'q' to close or 'p' to play again", align="center", font=('Monaco', 24, 'normal'))

    if playerBscore >= 2:
        pen.clear
        pen.write("Winner: Player B \n\nClick 'q' to close or 'p' to play again", align="center", font=('Monaco', 24, 'normal'))


