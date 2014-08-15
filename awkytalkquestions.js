		//we're gonna be making a class
//this is our category class
function Category(name, listofquestions) {
    this.name = name;
    this.listofquestions = listofquestions;

    this.printfunction = function () {
        for (var i = 0; i < this.listofquestions.length; i++) {
            console.log(this.listofquestions[i]);

        }
    };
	this.randomquestion = function(){
		var randomnumber=Math.floor((Math.random() * this.listofquestions.length));
		console.log(this.listofquestions[randomnumber]);	
		var q = this.listofquestions[randomnumber];
		return q;
	}
}

function displayquestion(){
	var t = $("#question").html(interviewCategory.randomquestion());
	$("#question").append();
}

function displaysports(){
	var s = $("#sportsq").html(sportsCategory.randomquestion());
	$("#sportsq").append();
}


function displayemergency(){
	var e = $("#emergencyq").html(emergencyCategory.randomquestion());
	$("#emergencyq").append();
}

var category = ""; 
function saveCategory() {
	category="interview";
	category="sports";
	category="emergency";
}	

interviewquestions = ["What are your greatest strengths and weaknesses?"
,"What are some skills that you have that are unique?"
,"Tell me about a time where your work was criticized"
,"What do you think of your previous boss?"
,"Given all you have accomplished so far, what do you think has been the most important to you/beneficial to your ____?"
,"How did you first get started in this?"
,"What was the last project you headed up, and what was its outcome?"
,"Give me an example of a time that you felt you went above and beyond the call of duty at work."
,"Can you describe a time when your work was criticized?"
,"What are you looking for in terms of career development?"
,"How do you want to improve yourself in the next year?"
,"What kind of goals would you have in mind if you got this job?"];
interviewCategory = new Category("interview", interviewquestions);
interviewCategory.printfunction();

flirtquestions=["People call me ____ but you can call me tonight",
"Help ive fallen for you and i cant get up"
,"My name is ______ and I'm new around here. I was wondering if I could just talk to you for awhile because you're the first person whose made this city feel like home."
,"So, I have been trying to think of something clever to say to you but I can't get my foot out of my mouth so I'll go with hello, I'm _____."
,"Would you touch me so I can tell my friends I've been touched by an angel?"
,"The only thing your eyes haven't told me is your name."
,"Do you have a pencil? Cause I want to erase your past and write our future."
,"I think I can die happy now, coz I've just seen a piece of heaven."
,"You must be a magician, because every time I look at you, everyone else disappears."
,"Excuse me...Hi, I'm writing an essay on the finer things in life, and I was wondering if I could interview you."
,"I hope there's a fireman around, cause you're smokin'!"
,"Hi, my friend thinks you're kinda cute, but I don't. I think you're absolutely gorgeous." ]
flirtCategory=new Category("Flirt",flirtquestions);
flirtCategory.printfunction();

friendshipquestions=["Do you play any instruments?",
"What is the one thing you cannot live without"
,"Where did (do) you go to school?"
,"What was (is) your favorite subject?"
,"What was (is) your least favorite subject?"
,"What is your dream job?"
,"If you had $10 million, would you still be working/going to school?"
,"What is the first thing you notice about a guy or girl?"
,"Have you ever been in love?"
,"Where do you plan on going for your next vacation?"
,"If you could live anywhere in the world, where would it be?"
,"What type of music do you like to listen to?"]
friendshipCategory=new Category("friendship",friendshipquestions);
friendshipCategory.printfunction();

sportsquestions=["Who is your favorite athlete?",
"What is your favorite sports team?"
,"Do you play any sports?"
,"Do you follow any sport/teams?"
,"Do you think fishing is a sport? What about chess, darts or pool?"
,"Do you prefer playing or watching sports?"
,"Do you prefer watching sports at the stadium, at home on TV, or in a bar on a giant screen?"
,"A 'blood sport' is a sport in which an animal is killed or injured. What is your opinion of these?(ex:Fishing. (Perhaps to eat them, perhaps not.),Shooting birds. (Presumably to eat them.),Hunting large animals like deer. (Presumably to eat them.))"
,"If your boss were to suggest that your group at work took up a team sport in order to help you work better as a team at work, what sport would you choose?"
,"Are there any sports that you think should be included as an Olympic sport?(since ballroom and bridge dancing are considered a sport)"
,"What new sports would you like to try?"
,"What sport do you think is the most dangerous?"]
sportsCategory=new Category("Sports",sportsquestions);
sportsCategory.printfunction();

foodquestions=["What is your favorite drink?"
,"What is your favorite food?"
,"Are there any foods that you dislike or will not eat?"
,"What is your favorite restaurant?","What is your favorite pizza topping?"
,"Are there any foods that you would like to try?"
,"If you could only have one meal for the rest of your life, what would it be?"
,"Do you like to cook?"
,"Where do you like to go when you eat out?"
,"Whats your favorite take-out?"
,"What did you have for dinner last night?"
,"What restaurant do you love even though you know you shouldn't?"]
foodCategory=new Category("Food",foodquestions);
foodCategory.printfunction();

shoppingquestions=["Does this shop always have such long lines?"
,"What’s your favorite brand?"
,"What stores do you shop at?"
,"What was the last thing you purchased?"
,"What's your favorite place to shop? Why?"
,"Are thrift stores popular in your country? Do you enjoy shopping at thrift stores?"
,"Do you compare prices at different stores when you shop?","Is it important for you to own designer clothes? Why or why why not?"
,"Where did you buy it? Why did you buy it?"
,"Do you enjoy shopping? How often do you go shopping? How much time do you spend each time you go?"
,"When you buy something, do you read the label? Why or why not?"
,"What stores have you shopped at in ___________? What store did you like best and what store did you like least? Why?"
,"How important is good customer service when you are shopping?"]
shoppingCategory=new Category("Shopping",shoppingquestions);
shoppingCategory.printfunction();

entertainmentquestions=["Who is your favorite actor?",
"What is your favorite movie of all time?"
,"What was the worst movie you've ever seen?"
,"What is your favorite TV show?"
,"What was the last movie you've seen?"
,"Do you play video games?"
,"What is your favorite board game?"
,"If you could have any superpower, what would it be?"
,"If you were stranded on a deserted island and you could have only 1 item, what would it be?"
,"What is the most valuable thing that you own?"
,"What would you do if you only had 24 hours left to live?"
,"Name five songs to which you know all the lyrics. (Better yet, sing them.)"]
entertainmentCategory=new Category("Entertainment",entertainmentquestions);
entertainmentCategory.printfunction();

emergencyquestions=["What do you do for a living?",
"Read anything interesting lately?"
,"Do you have any pets?"
,"What was your least favorite job that you've ever had?"
,"Do you speak any other languages?"
,"What is the craziest thing you have ever done?"
,"Do you believe in luck?"
,"What is your dream job?"
,"Where are you from?"
,"What's up?"
,"Do you drink coffee or tea?"
,"What does your name mean? (If they say, 'I don't know', reply, 'What would you like it to mean?')"]
emergencyCategory=new Category("EMERGENCY",emergencyquestions);
emergencyCategory.printfunction();
