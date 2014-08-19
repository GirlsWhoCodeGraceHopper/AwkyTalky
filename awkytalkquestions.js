//this is our category class
function Category(name, listofquestions) {
    this.name = name;
    this.listofquestions = listofquestions;

    this.printfunction = function () {
        for (var i = 0; i < this.listofquestions.length; i++) {
         //  console.log(this.listofquestions[i]);

        }
    };
	this.randomquestion = function(){
		var randomnumber=Math.floor((Math.random() * this.listofquestions.length));
		console.log(this.listofquestions[randomnumber]);	
		var q = this.listofquestions[randomnumber];
		return q;
	}
}

var category = ""; 
function display(){
	console.log ("display function");
	console.log("category = " + window.name);
	if (window.name == "Interview"){
		console.log ("if");
		interview =  new Category("a",interviewquestions);
		var t = $("#f").html(interviewCategory.randomquestion());
		$("#f").append(t);
	} else if (window.name == "Financial"){
		console.log ("f");
		financial =  new Category("a",financialquestions);
		var fin = $("#f").html(financialCategory.randomquestion());
		$("#f").append(fin);
	}else if (window.name == "World News"){
		console.log ("w");
		worldnews =  new Category("a",worldnewsquestions);
		var wn = $("#f").html(worldnewsCategory.randomquestion());
		$("#f").append(wn);
	}else if (window.name == "Flirt"){
		console.log ("if");
		flirt =  new Category("a",flirtquestions);
		var fl = $("#q").html(flirtCategory.randomquestion());
		$("#q").append(fl);
	}else if (window.name == "Friendship"){
		console.log ("if");
		friendship =  new Category("a",friendshipquestions);
		var fri = $("#q").html(friendshipCategory.randomquestion());
		$("#q").append(fri);
	}else if (window.name == "Sports"){
		console.log ("if");
		sports =  new Category("a",sportsquestions);
		var sp = $("#q").html(sportsCategory.randomquestion());
		$("#q").append(sp);
	}else if (window.name == "Food"){
		console.log ("if");
		food =  new Category("a",foodquestions);
		var fo = $("#q").html(foodCategory.randomquestion());
		$("#q").append(fo);
	}else if (window.name == "Shopping"){
		console.log ("if");
		shopping =  new Category("a",shoppingquestions);
		var sh = $("#q").html(shoppingCategory.randomquestion());
		$("#q").append(sh);	
	}else if (window.name == "Entertainment"){
		console.log ("if");
		entertainment =  new Category("a",entertainmentquestions);
		var en = $("#q").html(entertainmentCategory.randomquestion());
		$("#q").append(en);
	} else if (window.name == "Emergency"){
		console.log ("of");
		emergency =  new Category("a",emergencyquestions);
		var em = $("#emergencyq").html(emergencyCategory.randomquestion());
		$("#emergencyq").append(em);
	} 
	else if (window.name == "CasRand"){
		console.log ("igotit");
		random =  new Category("a",casualrandomquestions);
		var r = $("#q").html(casualrandomCategory.randomquestion());
		$("#q").append(r);
	} 
	else if (window.name == "FormRand"){
		console.log ("formal");
		random =  new Category("a",formalrandomquestions);
		var fr = $("#f").html(formalrandomCategory.randomquestion());
		$("#f").append(fr);
	} 
}
function saveInterviewCategory() {
	window.name = ($('#IQ').val());
}	
function saveFinancialCategory() {
	window.name = ($('#FQ').val());
}	
function saveWorldNewsCategory() {
	window.name = ($('#IA').val());
}	
function saveSportsCategory() {
	window.name = ($('#Sports').val());
}	
function saveFlirtCategory() {
	window.name = ($('#Flirt').val());
}	
function saveFoodCategory() {
	window.name = ($('#Food').val());
}	
function saveShoppingCategory() {
	window.name = ($('#Shopping').val());
}	
function saveEntertainmentCategory() {
	window.name = ($('#Entertainment').val());
}	
function saveEmergencyCategory() {
	window.name = "Emergency";
}
function saveCasualRandomCategory() {
	window.name = 'CasRand';
}
function saveFormalRandomCategory() {
	window.name = 'FormRand';
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

financialquestions=["Any tips on negotiating a lower interest rate?"
,"What's your take on doing a balance transfer?"
,"Is it true you can negotiate a 'pay off amount' with your credit card company if you can't afford to pay down your whole balance?"
,"What's the best way to increase my credit rating so banks are knocking at my door with awesome offers?"
,"What is your investment approach?"
,"What If I have a big purchase coming up and want to get a lower interest rate on my credit card account?"
,"How or why did you choose the bank(s) you work with?"
,"Can you explain the difference between a debit card and a credit card?"
,"How would you prefer to be paid - in cash or have the money transferred to your bank account?"
,"Have you ever risked money in financial markets?"
,"What is your opinion of investing in the stock market?"
,"Are you interested in reading news about the financial world?"];
financialCategory = new Category("financial", financialquestions);
financialCategory.printfunction();

worldnewsquestions=["Anything new going on with the Middle east?"
,"What do you think about tensions rising between Ukraine and Russia"
,"Do you think the U.S has a great impact on the issues of the world today?"
,"Do you feel that countries in Asia are developing rapidly?"]
worldnewsCategory = new Category("worldnews", worldnewsquestions);
worldnewsCategory.printfunction();

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
,"Hi, my friend thinks you're kinda cute, but I don't. I think you're absolutely gorgeous." ];
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
,"What type of music do you like to listen to?"];
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
,"What sport do you think is the most dangerous?"];
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
,"What restaurant do you love even though you know you shouldn't?"];
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
,"How important is good customer service when you are shopping?"];
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
,"Name five songs to which you know all the lyrics. (Better yet, sing them.)"];
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
,"What does your name mean? (If they say, 'I don't know', reply, 'What would you like it to mean?')"];
emergencyCategory=new Category("EMERGENCY",emergencyquestions);
emergencyCategory.printfunction();

casualrandomquestions=["what cha doing?", "hows it going?", "whats up hommie","People call me ____ but you can call me tonight",
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
,"Hi, my friend thinks you're kinda cute, but I don't. I think you're absolutely gorgeous.","Do you play any instruments?",
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
,"What type of music do you like to listen to?","Who is your favorite athlete?",
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
,"What sport do you think is the most dangerous?","What is your favorite drink?"
,"What is your favorite food?"
,"Are there any foods that you dislike or will not eat?"
,"What is your favorite restaurant?","What is your favorite pizza topping?"
,"Are there any foods that you would like to try?"
,"If you could only have one meal for the rest of your life, what would it be?"
,"Do you like to cook?"
,"Where do you like to go when you eat out?"
,"Whats your favorite take-out?"
,"What did you have for dinner last night?"
,"What restaurant do you love even though you know you shouldn't?","Does this shop always have such long lines?"
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
,"How important is good customer service when you are shopping?","Who is your favorite actor?",
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
,"Name five songs to which you know all the lyrics. (Better yet, sing them.)"];
casualrandomCategory=new Category("RANDOM",casualrandomquestions);
casualrandomCategory.printfunction();

formalrandomquestions=["What are your greatest strengths and weaknesses?"
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
,"What kind of goals would you have in mind if you got this job?","Any tips on negotiating a lower interest rate?"
,"What's your take on doing a balance transfer?"
,"Is it true you can negotiate a 'pay off amount' with your credit card company if you can't afford to pay down your whole balance?"
,"What's the best way to increase my credit rating so banks are knocking at my door with awesome offers?"
,"What is your investment approach?"
,"What If I have a big purchase coming up and want to get a lower interest rate on my credit card account?"
,"How or why did you choose the bank(s) you work with?"
,"Can you explain the difference between a debit card and a credit card?"
,"How would you prefer to be paid - in cash or have the money transferred to your bank account?"
,"Have you ever risked money in financial markets?"
,"What is your opinion of investing in the stock market?"
,"Are you interested in reading news about the financial world?","Anything new going on with the Middle east?"
,"What do you think about tensions rising between Ukraine and Russia"
,"Do you think the U.S has a great impact on the issues of the world today?"
,"Do you feel that countries in Asia are developing rapidly?"];
formalrandomCategory=new Category("FormalRANDOM",formalrandomquestions);
formalrandomCategory.printfunction();


/*formalrandomquestions=[interviewquestions, financialquestions, worldnewsquestions];
formalrandomCategory=new Category("FormalRANDOM",formalrandomquestions);
formalrandomCategory.printfunction();*/
