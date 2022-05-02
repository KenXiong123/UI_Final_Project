from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
from datetime import datetime

app = Flask(__name__)

data = {
    1: {
        "name": "Sandra Day O'Connor",
        "dates_served": "1981 to 2006",
        "picture": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Sandra_Day_O%27Connor_crop.jpg",
        "education": "Stanford Law School",
        "ideology": "https://raw.githubusercontent.com/KenXiong123/UI_Final_Project/main/images/oconnor_ideology.png",
        "nominated": "Ronald Reagan, 1981",
        "fun_facts": ["first woman confirmed to Supreme Court", "unanimously confirmed by Senate",
                      "frequent 'swing' vote"]
    },

    2: {
        "name": "Ruth Bader Ginsburg",
        "dates_served": "1993 to 2020",
        "picture": "https://www.womenshistory.org/sites/default/files/styles/main_image/public/images/2021-03/RuthBaderGinsburg_Square.jpg",
        "education": "Harvard Law School, Columbia Law School",
        "ideology": "https://raw.githubusercontent.com/KenXiong123/UI_Final_Project/main/images/rbg_ideology.png",
        "nominated": "Bill Clinton, 1993",
        "fun_facts": ["known for advocacy of women's rights and gender equality",
                      "first female member of Harvard Law Review", "first female professor at Columbia to earn tenure"]
    },

    3: {
        "name": "Sonia Sotomayor",
        "dates_served": "2009 to present",
        "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Sonia_Sotomayor_in_SCOTUS_robe.jpg/1200px-Sonia_Sotomayor_in_SCOTUS_robe.jpg",
        "education": "Yale Law School",
        "ideology": "https://raw.githubusercontent.com/KenXiong123/UI_Final_Project/main/images/sotomayor_ideology.png",
        "nominated": "Barack Obama, 2009",
        "fun_facts": ["first Hispanic Supreme Court Justice",
                      "working class background, known for empathy and 'common touch'",
                      "especially concerned with rights of defendants and criminal justice system reform"]
    },

    4: {
        "name": "Elena Kagan",
        "dates_served": "2010 to present",
        "picture": "https://api.oyez.org/sites/default/files/images/people/elena_kagan/elena-kagan-photo.jpg",
        "education": "Harvard Law School",
        "ideology": "https://raw.githubusercontent.com/KenXiong123/UI_Final_Project/main/images/kagan_ideology.png",
        "nominated": "Barack Obama, 2010",
        "fun_facts": ["only current Supreme Court Justice with no prior judicial experience",
                      "the Justice most in touch with pop culture and technology",
                      "first female U.S. Solicitor General"]
    },

    5: {
        "name": "Amy Coney Barrett",
        "dates_served": "2020 to present",
        "picture": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Amy_Coney_Barrett_official_portrait.jpg",
        "education": "Notre Dame Law School",
        "ideology": "https://raw.githubusercontent.com/KenXiong123/UI_Final_Project/main/images/barrett_ideology.png",
        "nominated": "Donald Trump, 2020",
        "fun_facts": ["previously a law professor at Notre Dame",
                      "taught subjects of federal courts, constitutional law, and statutory interpretation",
                      "extremely contentious confirmation process"]
    },
}
quiz_data = {
    1: {"person": "Sandra Day O’Connor", "fact": "first woman on Supreme Court"},
    2: {"person": "Amy Coney Barrett", "fact": "extremely contentious confirmation process"},
    3: {"person": "Elena Kagan", "fact": "no prior judicial experience"},
    4: {"person": "Sonia Sotomayor", "fact": "first Hispanic on Supreme Court"},
    5: {"person": "Ruth Bader Ginsburg", "fact": "champion of women’s rights and gender equality"},
    6: {"person": "Elena Kagan", "fact": "first female U.S. Solicitor General"},
    7: {"person": "Sonia Sotomayor", "fact": "known for empathy"},
}

correct_amount = 0
full_score = 17

# keep time user entered each learning page in list, indexed by page
learn_times = [[], [], [], [], []]


### LEARN

@app.route('/')
def home():
    return render_template('homepage.html', data=data)


@app.route('/learn')
def learn_home():
    return render_template('learn_intro.html')


@app.route('/learn/<key>')
def learn(key=None):
    global data
    item = data[int(key)]
    learn_times[int(key) - 1].append(datetime.now().strftime(" %I:%M:%S%z %p, %m-%d-%Y"))
    times = learn_times[int(key) - 1]
    return render_template('judge_template.html', item=item, key=key, data=data, times=times)


@app.route('/learn_complete')
def learn_complete():
    return render_template('learn_complete.html')


### QUIZ
@app.route('/quiz_intro')
def quiz_intro():
    global correct_amount
    correct_amount = 0
    return render_template('quiz_intro.html')


@app.route('/quiz_complete')
def quiz_complete():
    global correct_amount
    global full_score
    return render_template('quiz_complete.html', correct_amount = correct_amount, full_score=full_score)


@app.route('/quiz/1')
def naming():
    global data
    image_list = []
    name_list = []
    for i in data:
        image_list.append(data[i]["picture"])
        name_list.append(data[i]["name"])
    return render_template('quiz_naming.html', image=image_list, name=name_list)


@app.route('/quiz/2')
def matching():
    global data
    image_list = []
    for i in data:
        image_list.append(data[i]["picture"])
    return render_template('quiz_matching.html', image=image_list, data=quiz_data)


@app.route('/quiz/3')
def ordering():
    global data
    image_list = []
    name_list = ["Sonia Sotomayor", "Ruth Bader Ginsburg", "Elena Kagan", "Sandra Day O'Connor", "Amy Coney Barrett"]
    image_name = []
    for i in data:
        image_list.append(data[i]["picture"])
        image_name.append(data[i]["name"])
    return render_template('quiz_ordering.html', image=image_list, name=name_list, nameM=image_name)


@app.route('/correct', methods=['GET', 'POST'])
def get_correct():
    global correct_amount
    json_data = request.get_json()
    print(json_data)
    correct_amount += len(json_data)
    print("new", correct_amount)
    return 'success'


if __name__ == '__main__':
    app.run(debug=True)
