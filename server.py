from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

data = {
	1:{
		"name": "Sandra Day O'Connor",
        "dates_served": "1981 to 2006",
		"picture": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Sandra_Day_O%27Connor_crop.jpg",
        "education": "Stanford Law School",
        "ideology": , 
        "nominated": "Ronald Reagan, 1981",
		"fun_facts": ["first woman confirmed to Supreme Court", "unanimously confirmed by Senate", "frequent 'swing' vote"]
	},

	2:{
		"name": "Ruth Bader Ginsburg",
        "dates_served": "1993 to 2020",
		"picture": "https://www.womenshistory.org/sites/default/files/styles/main_image/public/images/2021-03/RuthBaderGinsburg_Square.jpg",
        "education": "Harvard Law School, Columbia Law School",
        "ideology": , 
        "nominated": "Bill Clinton, 1993",
		"fun_facts": ["known for advocacy of women's rights and gender equality", "first female member of Harvard Law Review", "first female professor at Columbia to earn tenure"]
	},

    3:{
		"name": "Sonia Sotomayor",
        "dates_served": "2009 to --",
		"picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Sonia_Sotomayor_in_SCOTUS_robe.jpg/1200px-Sonia_Sotomayor_in_SCOTUS_robe.jpg",
        "education": "Yale Law School",
        "ideology": , 
        "nominated": "Barack Obama, 2009",
		"fun_facts": ["first Hispanic Supreme Court Justice", "working class background, known for empathy and 'common touch'", "especially concerned with rights of defendants and criminal justice system reform"]
	},

	4:{
		"name": "Elena Kagan",
        "dates_served": "2010 to --",
		"picture": "https://api.oyez.org/sites/default/files/images/people/elena_kagan/elena-kagan-photo.jpg",
        "education": "Harvard Law School",
        "ideology": , 
        "nominated": "Barack Obama, 2010",
		"fun_facts": ["only current Supreme Court Justice with no prior judicial experience", "the Justice most in touch with pop culture and technology", "first female U.S. Solicitor General"]
	},

	5:{
		"name": "Amy Coney Barrett",
        "dates_served": "2020 to --",
		"picture": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Amy_Coney_Barrett_official_portrait.jpg",
        "education": "Notre Dame Law School",
        "ideology": , 
        "nominated": "Donald Trump, 2020",
		"fun_facts": ["previously a law professor at Notre Dame", "taught subjects of federal courts, constitutional law, and statutory interpretation", "extremely contentious confirmation process"]
	},
}

# keep time user entered each learning page in list, indexed by page
learn_times = [None, None, None, None, None]

### LEARN 

# add names of html files in render template
@app.route('/')
def main():
    return render_template('')

@app.route('/learn')
def learn_home():
    return render_template('')

@app.route('/learn/<key>')
def learn(key=None):
    global data
    item = data[int(key)]
    return render_template('', item=item, key=key)

@app.route('/learn_complete')
def learn_complete():
    return render_template('')

### QUIZ





if __name__ == '__main__':
   app.run(debug = True)